import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick= ()=>{
        //is changing the value of the text variable using setText function in the textarea
        // console.log("UpperCase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase","Success");
    }

    const handleLoClick= ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerCase","Success");
    }

    const handleClearText= ()=>{
        let newText="";
        setText(newText);
        props.showAlert("Text cleared","Success");
    }

    const handleOnChange= (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleCopy=()=>{
        console.log("I am copy");
        let text1=document.getElementById("myBox");
        text1.select();
        navigator.clipboard.writeText(text1.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clipboard","Success");

    }

    const handelExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed","Success");
    }

    const [text,setText]=useState('Enter Text Here');
  return (
    <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className='mt-4'>{props.heading}</h1>
        <div className="mb-3 mt-3">
            {/* onChange event is used because we are using a state variable here and it has to be changed */}
            <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black '}} value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert To LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handelExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0 }).length} word and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0 }).length}Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!!!"}</p>
        </div>
    </>
  )
}
