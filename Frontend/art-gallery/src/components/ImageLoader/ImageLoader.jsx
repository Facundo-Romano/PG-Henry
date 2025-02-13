import React from "react";
import { Slider } from "./Slider/Slider";
import { Uploader } from "./Uploader/Uploader";
import "./ImageLoader.css";

export const ImageLoader = () => {
  return (
    <div className="main">
      <div className="main_container">
        <Uploader />
        <Slider />
      </div>
    </div>
  );
};
