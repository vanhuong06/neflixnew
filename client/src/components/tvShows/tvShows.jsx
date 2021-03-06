import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
const TvShowContainer = styled.div`
  width: 100%;
  min-height: 6em;
  display: flex;
  border-bottom: 2px solid #d8d8d852;
  padding: 6px 8px;
  align-items: center;
`;

const Thumbnail = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex: 0.4;

  img {
    width: 140px;
    height: 80px;
  }
`;

const Name = styled.h3`
  font-size: 15px;
  color: white;
  margin-left: 10px;
  flex: 2;
  display: flex;
  align-self: center;
`;

const Rating = styled.span`
  color: #a1a1a1;
  font-size: 16px;
  display: flex;
  flex: 0.2;
`;

export default function TvShow(props) {
  const { thumbanilSrc, name, rating, show } = props;
  const [movie, setMovie] = useState({});

  return (
    <TvShowContainer>
      <Link to={{ pathname: "/watch", movie: show }} style={{display: 'flex', textDecoration: 'none'}}>
        <Thumbnail>
          <img src={thumbanilSrc}/>
        </Thumbnail>
        <Name >{name}</Name>
      </Link>
    </TvShowContainer>
  );
}
