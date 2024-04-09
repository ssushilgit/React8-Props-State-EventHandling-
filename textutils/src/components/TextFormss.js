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

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();

        props.showAlert("Copied to Clipboard!", "success");

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
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
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
                <h1 className="mt-4">{props.heading} </h1>
                <div className="mb-3 my-3">
                    <textarea style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
                        className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}
                    ></textarea>

                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}> Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}> Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}> Clear All</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}> Handle Extra Spacese</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}> Copy Text</button>




            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your Text Summary</h2>
                <p>
                    <b>{text.split(" ").filter((element) => element.length !== 0).length}</b> words and
                    <b> {text.length}</b> characters.
                </p>
                <p><b>{text.split(/[.?]/).filter((element) => element.length !== 0).length} </b> sentences </p>

                <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} minutes taken.</p>

                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview."}</p>

            </div>
        </>
    );

}