// import React, {useState} from "react";

// export default function TextForm(props) {
//     const handleUpClick = ()=>{
//         // console.log("Uppercase was clicked"+ text);
//         let newText=text.toUpperCase();
//         // setText("You have clicked on handleOnClick")
//         setText(newText)
//     }

//     const handleOnChange =(event)=>{
//         // console.log("On Change");
//         setText(event.target.value)
//     }
//     const [text, setText] = useState('Enter your text here');
//     return (
//         <div>
//             <h1>{props.heading} </h1>
    
//             <div className="mb-3 my-3">
//                 <textarea
//                     className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}
//                 ></textarea>
    
//             </div>
//             <button className="btn btn-primary" onClick={handleUpClick}> Convert to Uppercase</button>
    
//         </div>
//     );
    
// }
