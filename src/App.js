import { useEffect, useState } from "react";
import Buscador from "./components/Buscador";
import { getData } from "./context/backend";
import { Col, Row } from "react-bootstrap";
import { Typography } from "@mui/material";

function App() {
  const [cancion, setCancion] = useState("");
  const [IsLoading, setIsLoading] = useState(false);
  const [cancionesFind, setCancionesFind] = useState([]);

  useEffect(() => {
    //console.log("cambio: ", cancion);

    if (cancion !== "") {
      getData(`search?q=${cancion}&limit=3`)
        .then((data) => {
          console.log(data);
          if (!data.error) {
            setCancionesFind(data.data);
          }
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          console.log("");
        });
    } else {
      setCancionesFind([]);
    }
  }, [cancion]);

  return (
    <div className=" pt-5 px-5">
      <div
        className="container pt-5 "
        style={{
          backgroundColor: "#1A1A1A",
          borderRadius: "20px",
        }}
      >
        <div className=" px-3 mx-1">
          <Buscador
            ValueBusqueda={cancion}
            setValueBusqueda={setCancion}
            placeholder="Buscar cancion"
          />
        </div>

        <div className="py-5">
          <Row className="p-0 m-0">
            {cancionesFind.map((item) => {
              return (
                <Col xs={12} className="py-3 resaltar-hover ">
                  <div className="d-flex justify-content-start">
                    <img
                      src={item.album.cover_big}
                      alt=""
                      height={60}
                      width={60}
                    />
                    <div className="d-flex flex-column ms-5 ">
                      <div className=" text-light">{item.title}</div>
                      <div
                        style={{
                          color: "gray",
                          fontSize: "12px",
                        }}
                      >
                        {item.artist.name}
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-100 mt-2"
                    style={{
                      height: "1px",
                      backgroundColor: "#ffffff",
                    }}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default App;
