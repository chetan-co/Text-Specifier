import React, { useState } from 'react';

export default function TextForm(props) {
    const handle = () => {
        let newText = text.toUpperCase();
        setText("  " + newText);
    }
    const handlelowercase = () => {
        let newText = text.toLowerCase();
        setText(" " + newText);
    }
    const handlebolder = () => {
        let newText = text.trim();
        setText(" " + newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const textCopy = ()=>{
        let text = document.getElementById("box");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className='mb-3'>
                    <textarea className="form-control" id="box" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className='btn btn-primary btn-sm' onClick={handle}>Convert to UpperCase</button>
                <button className='btn btn-danger btn-sm mx-2' onClick={handlelowercase}>Convert to LowerCase</button>
                <button className='btn btn-secondary btn-sm mx-2' onClick={handlebolder}>Trim</button>
                <button className='btn btn-success btn-sm mt-2' onClick={textCopy}>Copy Text</button>


            </div>
            <div className="container">
                <h1>Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
