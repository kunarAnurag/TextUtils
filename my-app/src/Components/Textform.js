import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("Enter your text here");
    const handleUpperCase = () => {
        setText(text.toUpperCase());
        props.showAlert("Text is changed to uppercase", "success");
    }
    const handleLowerCase = () => {
        setText(text.toLowerCase());
        props.showAlert("Text is changed to lowercase", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleCpyData = () => {
        let data = document.getElementById("my-box");
        data.select();
        data.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(data.value);
        props.showAlert("Text copied to clipboard", "success");
    }
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? "white" : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                 <textarea className="form-control" id="my-box" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" }}></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpperCase}>Convert to uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleLowerCase}>Convert to lowercase</button>
                <button className='btn btn-primary mx-2' onClick={handleCpyData}>Copy to clipboard</button>
            </div>
            <div className='container my-3' style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h3>Text Summary</h3>
                <p><i>{text.split(" ").length} words</i> in the text</p>
                <p><i>{text.length} characters</i> in the text</p>
                <h4>Preview of the text entered</h4>
                <p>{text}</p>
            </div>
        </>
    )
}
