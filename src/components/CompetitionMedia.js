import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const CompetitionMedia = ({ mediaDetails }) => {
  const [index, setIndex] = useState(0);

  const baseUrl = "https://paradisebackend.herokuapp.com";
  const data = formatData(mediaDetails);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const getMedia = (data) => {
    switch (data.type) {
      case "image":
        return ImageTag(data.media);
      case "video":
        return VideoTag(data.media);
      default:
        break;
    }
  };

  const VideoTag = (videoUrl) => (
    <video autoPlay>
      <source src={`${baseUrl}${videoUrl}`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );

  const ImageTag = (imageUrl) => (
    <img src={`${baseUrl}${imageUrl}`} alt="competition" />
  );

  return (
    <div
      style={{
        height: "500px",
      }}
    >
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {data.map((val, i) => (
          <Carousel.Item key={i}>{getMedia(val)}</Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

const formatData = (data) => {
  delete data.id;
  delete data.title;

  let arr = [];
  const fileLength = Object.keys(data).length / 2;

  for (var i = 1; i <= fileLength; i++) {
    let obj = {};
    obj.type = data[`media_${i}_type`];
    obj.media = data[`media_${i}`];
    arr.push(obj);
  }
  return arr;
};

export default CompetitionMedia;
