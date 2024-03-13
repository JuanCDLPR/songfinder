import { getLocalStorageJWT, clearStorageJWT } from "./Storage";

const BACKEND_URL = "https://deezerdevs-deezer.p.rapidapi.com/";

export const getData = (url) => {
  let bearer_token = getLocalStorageJWT();
  return fetch(BACKEND_URL + url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9ca13cbdcbmshbc393cbc244d511p16b678jsne83c5e79bfc8",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        console.log(response);
        return {
          codigo: String(response.status),
          mensaje: "Error: " + response.statusText,
        };
      }
      return response.json();
    })
    .then((response) => {
      //console.log(response);
      return { error: false, data: response.data };
    })
    .catch((error) => {
      console.log(error);
      return {
        error: true,
        mensaje: "Error al conectar con los servidores",
      };
    });
};
export default BACKEND_URL;
