import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =() => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!", "success");
    }
    const handleLoClick =() => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower Case!", "success");
    }
    const handleOnChange =(event) => {
        setText(event.target.value);
    }
    const handleClearClick =(event) => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    const handleReverseClick =(event) => {
        let splitWord = text.split("");
        let reverseWord = splitWord.reverse("");
        let joinedWord = reverseWord.join("");
        let newText = joinedWord;
        setText(newText);
        props.showAlert("Text Reversed", "success");
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text Copied", "success");
    }

    const[text , setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white' , color: props.mode === 'dark'?'white':'black' }} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to upper case</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to lower case</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleReverseClick} >Reverse Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>It will take {0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to Preview it here"}</p>
        </div>
        </>
    )
}

