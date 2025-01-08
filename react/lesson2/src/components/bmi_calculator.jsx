import { useState } from "react";
import "../range.css";
import { useEffect } from "react";

function Label({ text, value }) {
    var labelStyle = {
        fontFamily: "Verdana",
        fontSize : 20
    };

    return (
        <text style={labelStyle}>
            {text} {value}
        </text>

    );
}

function Slider({ value, min, max, onChange }) {
    return (
        <input type="range"
               value={value}
               min={min}
               max={max}
               onChange={onChange} />
    );
}

function BmiSlider({ text, value, onChange, min, max }) {
    return (
        <div>
            <Label text={text} value={value} />
            <Slider value={value} min={min} max={max} onChange={onChange} />
        </div>
    );
}

export default function BmiCalculator() {
    var backgroundStyle = {
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 20,
        paddingBottom: 20,
        border: "#333 2px dotted",
        width: 450,
        borderRadius: 10,
        textAlign: "left"
    };

    var labelStyle = {
        fontFamily: "Verdana",
        fontSize : 40
    };

    const [height, setHeight] = useState(0); // Lengte in cm
    const [weight, setWeight] = useState(0); // Gewicht in kg
    const [bmi, setBmi] = useState(0); // BMI waarde

    useEffect(() => {
        if (height > 0) {
            const heightInMeters = height / 100; // Omrekenen naar meters
            const calculatedBmi = weight / (heightInMeters * heightInMeters);
            setBmi(calculatedBmi.toFixed(2)); // Ronde af op 2 decimalen
        } else {
            setBmi(0); // Als de hoogte 0 is, stel BMI in op 0
        }
    }, [height, weight]);

    return (
        <div style={backgroundStyle}>
            <div style={labelStyle}>BMI Calculator</div>
            <br />
            <BmiSlider text="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} min={60} max={250} />
            <BmiSlider text="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} min={30} max={200} />
            <BmiSlider text="BMI" value={bmi} onChange={() => {}} min={0} max={50} /> {/* BMI slider is read-only */}
        </div>
    );
}