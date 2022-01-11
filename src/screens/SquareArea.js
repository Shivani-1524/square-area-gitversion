import React, { useState } from 'react'
import './SquareArea.css'

const SquareArea = () => {

    const [width, setWidth] = useState('');
    const [length, setLength] = useState('');
    const [output, setOutput] = useState('');

    const submitHandler = (width, length) => {
        if ((!isNaN(width) && !isNaN(length)) && (width > 0 && length > 0)) {
            if (width && length) {
                let area = width * length;
                let result = `The Area Of Rectangle is ${area} unit sq.`
                setOutput(result);
                console.log(width)
            } else {
                let result = 'Please enter the dimensions'
                setOutput(result);
            }
        } else {
            let result = 'Please enter valid input'
            setOutput(result);
        }

    }

    return (
        <div className="container">
            <h1>Area of Rectangle</h1>
            <div className="input-group">
                <label>Width: </label>
                <input type="number" required onChange={(e) => {
                    setWidth(e.target.value)
                }} placeholder="Enter the width" />
            </div>
            <div className="input-group">
                <label>Length: </label>
                <input type="number" required placeholder="Enter the length" onChange={(e) => {
                    setLength(e.target.value)
                }} />
            </div>
            <button className="submit-btn" onClick={() => submitHandler(width, length)}>Find Area</button>
            <div id="output">{output}</div>
            <footer>
                <a href="https://darcode.netlify.app/" rel="noreferrer" target="_blank"><i class="fas fa-user"></i></a>
                <a href="https://www.linkedin.com/in/shivani-pothirajan-2b276996/" rel="noreferrer" target="_blank"> <i
                    class="fab fa-linkedin-in"></i></a>
                <a href="https://twitter.com/Shivani07517015" rel="noreferrer" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="mailto:shivanipothorajan@gmail.com"><i class="far fa-envelope"></i></a>
            </footer>
        </div>
    )
}

export default SquareArea
