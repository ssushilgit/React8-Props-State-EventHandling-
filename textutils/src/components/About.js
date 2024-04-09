import React from 'react'

export default function About(props) {
    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    //     border: '1px solid black'
    // })

    let myStyle ={
        color : props.mode === 'dark'? 'white':'#042743',
        backgroundColor : props.mode === 'dark'? '#042743':'white'
    }

    // const [btnText, setbtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () => {
    //     if (myStyle.color === 'black') { // If the color is black, switch to light mode
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setbtnText("Enable Light Mode");
    //     }
    //     else { //If the color is not black then switch to dark mode
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setbtnText("Enable Dark Mode");

    //     }
    // }

    return (
        <div>
            <div className="container my-3" style={myStyle}>
                <h2 className="my-3 mt-4 mb-3" style={myStyle}>About Us</h2>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Mission Statement:</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body " style={myStyle}>
                                Providing powerful yet user-friendly text analysis tools to enhance productivity and understanding.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Our Team:
                                </strong>                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                Meet our dedicated team of developers committed to creating innovative solutions for text manipulation and analysis.                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                               <strong>
                                Technology Stack:</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                Learn about the cutting-edge technologies and algorithms powering TextUtils, ensuring accuracy and efficiency in every feature.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
                <button onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
            </div> */}
        </div>
    )
}