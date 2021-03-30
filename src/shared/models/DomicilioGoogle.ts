import faker from "faker/locale/ar";

export interface DomicilioGoogle {
    latitud: number,
    longitud: number,
    calle: string,
    numero: string,
    partido: string,
    localidad: string,
    provincia: string,
    pais: string,
    codigoPostal: string
}

export function mockedDomicilioGoogle(): DomicilioGoogle {
    return {
        latitud: faker.random.number(),
        longitud: faker.random.number(),
        calle: faker.address.streetName(),
        numero: "3684",
        partido: faker.address.state(),
        localidad: faker.address.state(),
        provincia: faker.address.state(),
        pais: "Argentina",
        codigoPostal: faker.address.zipCode()
    }
}