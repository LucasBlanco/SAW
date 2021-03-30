import {Fab, TextField} from "@material-ui/core";
import React, {useRef, useState} from "react";
import {FieldProps, FormikProps, useField} from "formik";
import PlacesAutocomplete from 'react-places-autocomplete';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';
import * as Yup from "yup";
import * as faker from "faker/locale/es";
import {DomicilioGoogle} from "../models/DomicilioGoogle";


interface PropsField {
    className?: string,
    label?: string,
    variant?: string,
    fullWidth?: boolean
    placeholder?: string
    name:string
}



function MUIGooglePlaces(props: FieldProps & PropsField) {
    const [field, meta] = useField(props.field.name);
    const [isValid, setIsValid] = useState(false);
    const domicilioVacio: DomicilioGoogleFieldSchema = {
        text: "",
        latitud: 0,
        longitud: 0,
        calle: "",
        numero: "",
        partido: "",
        localidad: "",
        provincia: "",
        pais: "",
        codigoPostal: ""
    }
    const domicilio: DomicilioGoogleFieldSchema = domicilioVacio
    const { form } = props;
    console.log(field.name, field.value)
    const handleChange = (e) => {
        limpiarDomicilio()
        domicilio.text = e
        form.setFieldValue(field.name, domicilio);
        setIsValid(false)
    };

    const fillDomicilioWithGoogleAddressComponents = (componentes) => {
        domicilio.calle = buscarTipoEnComponente('route', componentes)
        domicilio.numero = buscarTipoEnComponente('street_number', componentes)
        domicilio.partido = buscarTipoEnComponente('administrative_area_level_2', componentes)
        domicilio.localidad = buscarTipoEnComponente('locality', componentes) || buscarTipoEnComponente('sublocality', componentes)
        domicilio.provincia = buscarTipoEnComponente('administrative_area_level_1', componentes)
        domicilio.pais = buscarTipoEnComponente('country', componentes)
        domicilio.codigoPostal = buscarTipoEnComponente('postal_code', componentes)
    }

    const limpiarDomicilio = () => {
        domicilio.calle = ""
        domicilio.numero = ""
        domicilio.partido = ""
        domicilio.localidad = ""
        domicilio.provincia = ""
        domicilio.pais = ""
        domicilio.codigoPostal = ""
        domicilio.longitud = 0
        domicilio.latitud = 0
    }

    const buscarTipoEnComponente = (tipo, componentes) => {
        return componentes.find(c => c.types.includes(tipo))?.long_name
    }

    const handleSelect = address => {
        geocodeByAddress(address)
            .then(results => {
                fillDomicilioWithGoogleAddressComponents(results[0].address_components)
                return getLatLng(results[0])
            })
            .then(latLng => {
                domicilio.latitud = latLng.lat
                domicilio.longitud = latLng.lng
                domicilio.text = domicilio.calle + " " + domicilio.numero + ", " + domicilio.localidad + ", " + domicilio.provincia
                form.setFieldValue(field.name, domicilio);
                setIsValid(true);
            })
            .catch(error => setIsValid(false));
    };

    const hasError = () => {
        return (meta.error && meta.touched) || (!isValid && meta.touched);
    };

    const getError = () => {
        if (hasError()) {
            if ((meta.error as any)?.calle) {
                return (meta.error as any)?.calle;
            }
            return "La direccion no es valida";
        }
        return "";
    };

    return (
        <>
            <PlacesAutocomplete
                value={field.value.text}
                onChange={handleChange}
                onSelect={handleSelect}
                searchOptions={{types: ['address']}}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div className={props.className}>
                        <TextField {...getInputProps({
                            placeholder: props.placeholder,
                            fullWidth: props.fullWidth,
                            variant: props.variant,
                            label: props.label,
                            error: hasError(),
                            helperText: getError(),
                            ...props,
                            name:field.name
                        })} />

                        {suggestions.length > 0 && (
                            <div className="border-2 border-gray-100 p-1.5">
                                {loading && <div>Cargando...</div>}
                                {suggestions.map(suggestion => {
                                    return (
                                        <div
                                            key={suggestion.key}
                                            {...getSuggestionItemProps(suggestion, {
                                                className: "p-1.5 bg-white hover:bg-gray-100 cursor-pointer",
                                            })}
                                        >
                                            <span>{suggestion.description}</span>
                                        </div>
                                    );
                                })}
                            </div>)}
                    </div>
                )}
            </PlacesAutocomplete>
        </>
    );
};

export function cleanDomicilioGoogleField(): DomicilioGoogle {
    return {
        latitud: 0,
        longitud: 0,
        calle: "",
        numero: "",
        partido: "",
        localidad: "",
        provincia: "",
        pais: "",
        codigoPostal: ""
    }
}

export interface DomicilioGoogleFieldSchema extends DomicilioGoogle {text:string}

export function domicilioGoogleToFieldSchema(domicilioGoogle: DomicilioGoogle): DomicilioGoogleFieldSchema {
    return {
        ...domicilioGoogle,
        text: domicilioGoogle.calle + " " + domicilioGoogle.numero + ", " + domicilioGoogle.localidad + ", " + domicilioGoogle.provincia
    }
}

export function domicilioGoogleFieldSchemaInitialValues(): DomicilioGoogleFieldSchema {
    return {
        latitud: 0,
        longitud: 0,
        calle: "",
        numero: "",
        partido: "",
        localidad: "",
        provincia: "",
        pais: "",
        codigoPostal: "",
        text: ""
    }
}


export function domicilioGoogleFieldSchemaToModel(domicilioSchema: DomicilioGoogleFieldSchema): DomicilioGoogle{
    return {
        latitud: domicilioSchema.latitud,
        longitud: domicilioSchema.longitud,
        calle: domicilioSchema.calle,
        numero: domicilioSchema.numero,
        partido: domicilioSchema.partido,
        localidad: domicilioSchema.localidad,
        provincia: domicilioSchema.provincia,
        pais: domicilioSchema.pais,
        codigoPostal: domicilioSchema.codigoPostal
    }
}

export function domicilioGoogleValidation() {
    return Yup.object().shape({
        latitud: Yup.number(),
        longitud: Yup.number(),
        calle: Yup.string().required("Es necesario que elija una de las opciones")
    })
}
export default MUIGooglePlaces;
