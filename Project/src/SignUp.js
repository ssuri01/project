import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const validator = require('../models/Customer.js')

const SignUp = props => {

    const [input, setInput] = useState({ cname: "", email: "", age: "", sex: "", weight: "", height: "", plan: "" });

    function handleSubmit(event) {
        event.preventDefault();

        // axios.post('/success', validator.CustomerSchema, (req, res) => {
        //     res.send("Successful submition")
        // })
    }


    function handleChange(event) {
        const { name, value } = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }

        })
    }

    useEffect(function calculateBMI() {
        const bmiReload = () => {
            let num = [input.weight / input.height / input.height] * 10000;
            if (num < 18.5) {
                console.log("UnderWeight");
            }
            else if (num > 18.5 && num < 24.9) {
                console.log("Healthy");
            } else if (num > 24.9 && num < 29.9) {
                console.log("Overweight");
            } else {
                console.log("Obese");
            }
            let reload = setInterval(bmiReload, 1000);
            reload();
        };
    }, []);


    return (<>
        <div className="container">
            <h3>Sign up Here!</h3>

            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type="text"
                    placeholder="Full Name"
                    value={input.name}
                    name="cname"
                />

                <br />

                <input onChange={handleChange}
                    placeholder="Email"
                    type="email"
                    value={input.email}
                    name="email"
                />

                <br />


                <input
                    onChange={handleChange}
                    placeholder="Select Age"
                    type="number"
                    value={input.age}
                    // min="18"
                    // max="99"
                    name="age"
                />

                <br />

                <input
                    onChange={handleChange}
                    type="radio"
                    name="sex"
                    value="Male"
                />
                Male
                <input
                    onChange={handleChange}
                    type="radio"
                    name="sex"
                    value="Female"
                />Female
                <input
                    onChange={handleChange}
                    type="radio"
                    name="sex"
                    value="other"
                />Other
                <br />


                <input
                    onChange={handleChange}
                    placeholder="Weight (in kgs)"
                    type="text"
                    name="weight"
                    value={input.weight}
                />
                <br />

                <input
                    onChange={handleChange}
                    placeholder="Height (in cms)"
                    type="text"
                    name="height"
                    value={input.height}
                />

                <br />
                <br />
                <label>
                    Select a plan:
                </label>
                <select
                    id="plan"
                    value={input.plan}
                    onChange={handleChange}
                    name="plan"
                >
                    <option value="">--Choose a plan--</option>
                    <option name="plan" value="Weekly">Weekly ~ $21.99/bi-weekly</option>
                    <option name="plan" value="Monthly">Monthly ~ $15.99/bi-weekly</option>
                    <option name="plan" value="Yearly">Yearly  ~ $12.99/bi-weekly</option>
                </select>

                <br />
                <br />
                <br />
                {/* <button onClick={handleClick} className="btn">Submit</button> */}
                <button>Submit</button>
            </form>

            {/* {input.cname} */}
        </div>

    </>
    );
}

export default SignUp;