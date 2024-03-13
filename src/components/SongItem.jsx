import React from "react";
import { Col, Row } from "react-bootstrap";
import { IconButton, Slider, Tooltip, Typography } from "@mui/material";

import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

import { segundosAMinutosYsegundos } from "../lib/generales";

export default function SongItem({
  item,
  PlaySong = () => {},
  IndexSong,
  idx,
}) {
  return (
    <Col xs={12} className="py-3 resaltar-hover ">
      <div className="d-flex justify-content-start">
        <img src={item.album.cover_big} alt="" height={60} width={60} />
        <div className="d-flex align-items-center ms-5 ">
          <div>
            <div className=" text-light">{item.title}</div>
            <div
              style={{
                color: "gray",
                fontSize: "12px",
              }}
            >
              {`${item.artist.name} | ${segundosAMinutosYsegundos(
                item.duration
              )}`}
            </div>
          </div>
        </div>
        <IconButton className="ms-auto me-5" onClick={() => PlaySong(idx)}>
          {IndexSong != null && IndexSong == idx ? (
            <PauseCircleIcon
              style={{
                fontSize: "35px",
                color: "#FFFFFF",
              }}
            />
          ) : (
            <PlayCircleIcon
              style={{
                fontSize: "35px",
                color: "#FFFFFF",
              }}
            />
          )}
        </IconButton>
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
}
