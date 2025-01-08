import { useState } from "react";

function Label(props) {
    var labelStyle = {
        fontFamily: "Verdana",
        color: "#FFF",
        fontSize : 30
    };
    return (
        <div style={labelStyle}>
            {props.text}
        </div>
    )

}

function Button(props) {
    var buttonStyle = {
        fontFamily: "Verdana",
        fontSize: 20,
        margin: 5,
        fontWeight: "bold",
        backgroundColor: "#CCCCCC",
        color: "#FFF",
        borderStyle: "solid",
        borderColor: "#CCCCCC",
        borderRadius: 5,
        width: 70,
        height: 70,
        textAlign: "center"
    };

    return (
        <button style={buttonStyle} onClick={props.onClick}>{props.value}</button>
    )
}

export default function Calculator() {
    var backgroundStyle = {
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: "#00ace6",
        width: 280,
        borderRadius: 10,
        textAlign: "left",
    };
    
    var numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "C", "0", "=","+","-","*","/"];
    const [text, setText] = useState("");

    function handleClick(value) {
        console.log("Button clicked:", value);
        if (value === "C") {
            setText(""); // Clear the text if "C" is clicked
        } else if (value === "=") {
            setText(eval(text)); // Remove the last character
        } else {
            setText(text + value); // Append the clicked number to the text
        }
    }

    return (
        <div style={backgroundStyle}>
            <Label text={text} />
            {numbers.map((value) => {
                return(
                    <Button key={value} onClick={() => handleClick(value)} value={value} />
                )
            })}
        </div>
    );
}