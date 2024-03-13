import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";

import SearchIcon from "@mui/icons-material/Search";
import "../lib/Prototipos";

const Buscador = ({ placeholder = "", ValueBusqueda, setValueBusqueda }) => {
  const [query, setQuery] = React.useState("");
  const [intervalo, setIntervalo] = React.useState("");

  // evento para detectar cuando se deja de escribir en el inoput
  const handleChangeBuscador = (event) => {
    clearInterval(intervalo);
    setQuery(event.target.value.toValidInput());
    let id = setInterval(function () {
      clearInterval(id);
      setValueBusqueda(event.target.value.toValidInput());
    }, 1000);
    setIntervalo(id);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      clearInterval(intervalo);
      setValueBusqueda(e.target.value);
    }
  };

  return (
    <FormControl
      fullWidth
      variant="outlined"
      size="sm"
      className="bg-light"
      style={{
        borderRadius: "20px",
      }}
    >
      <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
      <OutlinedInput
        id="Buscar"
        placeholder={placeholder}
        value={query}
        onChange={handleChangeBuscador}
        onKeyDown={handleKeyDown}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        endAdornment={
          query != "" ? (
            <IconButton
              onClick={() => {
                setQuery("");
                setValueBusqueda("");
              }}
            >
              <CloseIcon />
            </IconButton>
          ) : (
            <></>
          )
        }
        label=""
        size="sm"
        style={{
          borderRadius: "20px",
        }}
        sx={{
          "& fieldset": {
            borderColor: "black !important",
          },
        }}
      />
    </FormControl>
  );
};

export default Buscador;
