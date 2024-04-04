import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        // setText("You have clicked on handleOnClick")
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");

    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");

    }

    
    const handleClear = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Cleared!", "success");

    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");

    }

    const handleExtraSpaces = () =>{
        let newText =text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Handled extra spaces!", "success");

    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value)
    }
    // const [text, setText] = useState('Enter your text here');
    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}} >
                <h1>{props.heading} </h1>
                <div className="mb-3 my-3">
                    <textarea style={{backgroundColor:props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'#042743' }}
                        className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} 
                    ></textarea>

                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}> Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClear}> Clear All</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}> Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}> Handle Extra Spacese</button>


                

            </div>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Your Text Summary</h2>
                <p><b>{text.split(" ").length} </b> words and <b>{text.length} </b>characters.</p>
                <p><b>{text.split(".").length} </b> sentences </p>

                <p>{0.008 * text.split(" ").length} time taken.</p>

                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>

            </div>
        </>
    );

}
