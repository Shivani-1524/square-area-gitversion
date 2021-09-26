import React, { useState } from 'react'
import './SquareArea.css'

const SquareArea = () => {

    const [width, setWidth] = useState('');
    const [length, setLength] = useState('');
    const [output, setOutput] = useState('');

    function submitHandler(width, length) {
        if (!isNaN(width) && !isNaN(length)) {
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

        </div>
    )
}

export default SquareArea
