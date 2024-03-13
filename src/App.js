import { useEffect, useState } from "react";

import Buscador from "./components/Buscador";

import { getData } from "./context/backend";

import { Col, Row } from "react-bootstrap";
import { IconButton, Slider, Tooltip, Typography } from "@mui/material";

import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

import { segundosAMinutosYsegundos } from "./lib/generales";
import SongItem from "./components/SongItem";

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

function App() {
  const [song, setSong] = useState("");
  const [IsLoading, setIsLoading] = useState(false);
  const [songsFind, setSongsFind] = useState([]);
  const [IndexSong, setIndexSong] = useState(null);
  const [TotalResults, setTotalResults] = useState(10);

  const [audioInstance, setAudioInstance] = useState(null);

  const PlaySong = (index) => {
    audioInstance != null && audioInstance.pause();

    if (index == IndexSong) {
      setIndexSong(null);
    } else {
      setIndexSong(index);

      setAudioInstance(new Audio(songsFind[index].preview));
    }
  };

  const handleChange = (_, newValue) => {
    setTotalResults(newValue);
  };

  useEffect(() => {
    if (audioInstance !== null) {
      audioInstance.play();
    }
  }, [audioInstance]);

  useEffect(() => {
    //console.log("cambio: ", cancion);

    if (song !== "") {
      getData(`search?q=${song}&limit=${TotalResults}`)
        .then((data) => {
          console.log(data);
          if (!data.error) {
            setSongsFind(data.data);
          }
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          console.log("");
        });
    } else {
      setSongsFind([]);
      setIndexSong(null);
      audioInstance != null && audioInstance.pause();
      setAudioInstance(null);
    }
  }, [song]);

  return (
    <>
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
              ValueBusqueda={song}
              setValueBusqueda={setSong}
              placeholder="Buscar canción..."
            />
          </div>
          <Row className="px-4 mt-5">
            <Col
              xs={12}
              md={6}
              className="d-flex justify-content-start align-items-center"
            >
              <Typography className=" text-light pe-5">Resultados</Typography>
              <Slider
                //defaultValue={5}
                max={30}
                value={TotalResults}
                slots={{
                  valueLabel: ValueLabelComponent,
                }}
                valueLabelDisplay="auto"
                aria-label="custom thumb label"
                onChange={handleChange}
                style={{
                  color: "red",
                }}
              />
            </Col>
            <Col xs={12} md={6}></Col>
          </Row>

          <div className="py-5">
            <Row className="p-0 m-0">
              {songsFind.map((item, idx) => {
                return (
                  <SongItem
                    item={item}
                    PlaySong={PlaySong}
                    IndexSong={IndexSong}
                    idx={idx}
                  />
                );
              })}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
