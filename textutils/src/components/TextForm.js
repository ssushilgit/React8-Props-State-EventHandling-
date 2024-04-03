import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        // setText("You have clicked on handleOnClick")
        setText(newText)
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    
    const handleClear = () => {
        let newText = '';
        setText(newText)
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () =>{
        let newText =text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value)
    }
    // const [text, setText] = useState('Enter your text here');
    const [text, setText] = useState('');

    return (
        <>
            <div>
                <h1>{props.heading} </h1>
                <div className="mb-3 my-3">
                    <textarea
                        className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}
                    ></textarea>

                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Uppercase</button>
                <button className="btn btn-danger mx-2" onClick={handleLowClick}> Convert to Lowercase</button>
                <button className="btn btn-success mx-2" onClick={handleClear}> Clear All</button>
                <button className="btn btn-info mx-2" onClick={handleCopy}> Copy Text</button>
                <button className="btn btn-warning mx-2" onClick={handleExtraSpaces}> Handle Extra Spacese</button>


                

            </div>
            <div className="container">
                <h2>Your Text Summary</h2>
                <p><b>{text.split(" ").length} </b> words and <b>{text.length} </b>characters.</p>
                <p><b>{text.split(".").length} </b> sentences </p>

                <p>{0.008 * text.split(" ").length} time taken.</p>

                <h3>Preview</h3>
                <p>{text}</p>

            </div>
        </>
    );

}
