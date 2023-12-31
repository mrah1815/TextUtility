// import React,{useState} from 'react';
import React from "react"

export default function About(props) {

//    const [myStyle,setMyStyle] = useState({
//     color:"black",
//     backgroundColor:"white"
//    });

let myStyle={
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='light'?'white':'#031a40',
    border:'8px solid',
    borderColor:props.mode==='light'?'white':'#031a40'
}

//    const [btnText,setBtnText] = useState("Enable Dark Mode");

//    const toggleStyle=()=>{
//     if(myStyle.color === "black"){
//         setMyStyle(
//             {
//                 color:"white",
//                 backgroundColor:"black"
//             }
//         )
//         setBtnText("Enable Light Mode");
//     }
//     else{
//         setMyStyle(
//             {
//                 color:"black",
//                 backgroundColor:"white"
//             }
//         ) 
//         setBtnText("Enable Dark Mode");
//     }
//    };

// const myStyle={
//     color:"white",
//     backgroundColor:"black"
// }


  return (
    <div className="container"  style={myStyle}>
        <h1 className="my-3" style={{color:props.mode==='dark'?'white':'#042745'}}>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                  TextUtils gives you a way to analyze your text quickly and efficiently.Be it word count, character count ,copy text and others.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                   <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                  TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters . Thus it is suitable for writing text with word/character limits.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-bodymy" style={myStyle}>
                   This word counter software works in any web browsers such as Chrome , Firefox, Internet, Explorer, Safari, Opera. It suits to count characters in facebook, blog ,books,excel document, pdf document,essays etc.
                </div>
                </div>
            </div>
        </div>
        {/* <div className="container my-2">
            <button className="btn btn-primary my-3" type="button" onClick={toggleStyle}>{btnText}</button>    
            <button className="btn btn-primary my-3" type="button">Enable Dark Mode</button>
        </div> */}
    </div>
  )
};
//here we are taking the className as container only Maybe because of the bootstrap we are using and everywhere it is being used "container" is used as a classname
//---------------------------------

//here there is an error i am using state variable to convert the theme by the button 
//see to it later