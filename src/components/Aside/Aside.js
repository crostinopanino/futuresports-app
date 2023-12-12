import React from "react";
import PhotoGallery from "./PhotoGallery";
import News from "./News";
import WeatherDashboard from "./WeatherDashboard";

const Aside = () => {
    return (
        <div className="AsideSection">
            <News />
            <PhotoGallery />
            <WeatherDashboard />
        </div>
    );
};

export default Aside;