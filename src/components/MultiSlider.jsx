import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const MultiSlider = ({ range = [0, 10000], onChange }) => {
    return (
        <div style={{ padding: "20px" }}>
            <Slider
                range
                // TODO: get the initial value form the api
                min={1189}
                max={5411}
                value={range}
                onChange={(newRange) => {
                    onChange(newRange);
                }}
                styles={{
                    track: { backgroundColor: "#4D848E" },
                    rail: { backgroundColor: "#C5D5D9" },
                    active: { backgroundColor: "#4D848E" },
                    thumb: {
                        borderColor: "#4D848E",
                        backgroundColor: "#4D848E",
                        opacity: 0.7,
                    },
                    handle: {
                        borderColor: "#4D848E",
                        backgroundColor: "#4D848E",
                        opacity: 0.7,
                    },
                }}
            />
            <div
            className="flex justify-between mt-2"
                // style={{
                //     display: "flex",
                //     justifyContent: "space-between",
                //     marginTop: "10px",
                //     // textAlign: "right",
                // }}
            >
                <span>{range[0]} SAR</span>
                <span>{range[1]} SAR</span>
            </div>
        </div>
    );
};

export default MultiSlider;
