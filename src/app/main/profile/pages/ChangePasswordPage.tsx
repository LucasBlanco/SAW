import TextField from "@material-ui/core/TextField";
import React from "react";

export const ChangePasswordPage = () => {
  return (
    <div>
      <form autoComplete="new-password">
        <TextField
          label="Contraseña actual"
          type="password"
          autoComplete="new-password"
          variant="outlined"
          margin="normal"
          fullWidth
          className="bg-white"
        />
        <TextField
          label="Nueva Contraseña"
          type="password"
          autoComplete="new-password"
          variant="outlined"
          margin="normal"
          fullWidth
          className="bg-white"
        />
        <TextField
          label="Repita la nueva contraseña"
          type="password"
          autoComplete="new-password"
          variant="outlined"
          margin="normal"
          fullWidth
          className="bg-white"
        />
      </form>
    </div>
  );
};
