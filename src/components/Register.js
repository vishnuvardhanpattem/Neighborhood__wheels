import { React, useState } from "react";
import "./Register.css";
import { db, auth } from "./firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState();
    const [aadhar, setAadhar] = useState();
    const [mobile, setMobile] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const userCollectionRef = collection(db, "users");
    const navigate = useNavigate();
    const onSubmit = (event) => {
        event.preventDefault();
        try {
            addDoc(userCollectionRef, { name: name, aadhar: aadhar, mobile: mobile, email: email, password: password });
            const user = createUserWithEmailAndPassword(auth, email, password);
            setName(" ");
            setAadhar(" ");
            setMobile(" ");
            setEmail(" ");
            setPassword(" ");
            console.log(user);
            navigate("/");
        } catch (error) {
            console.log(error.message);
            alert(error.message);
        }

    };
    return (
        <div>
            <div className="container--12">
                <div className="container-space"></div>
                <div className="container-form">

                    <form onSubmit={onSubmit} >
                        <h1 className="container-h1">SIGNUP</h1>
                        <label>
                            <p className="p">Name </p><input className="input" type="text" autoComplete="given-name" placeholder="FullName" onChange={(event) => {
                                setName((event.target.value).toUpperCase())
                            }} required />
                        </label>
                        <label>
                            <p className="p">AadharNumber </p><input className="input" type="text" minLength={12} maxLength={12} onChange={(event) => {
                                setAadhar(event.target.value)
                            }} required />
                        </label>
                        <label>
                            <p className="p">Mobile</p> <input className="input" type="text" minLength={10} maxLength={10} onChange={(event) => {
                                setMobile(event.target.value)
                            }} required />
                        </label>

                        <label>
                            <p className="p">Email</p> <input className="input" type="email" onChange={(event) => {
                                setEmail(event.target.value)
                            }} required />
                        </label>
                        <label>
                            <p className="p">Password</p> <input className="input" type="password" autoComplete="current-password" onChange={(event) => {
                                setPassword(event.target.value)
                            }} required />
                        </label>
                        <div className="container-btns">
                            <button className="container-btn" >SIGNUP</button>
                            <Link className="container-btn" to="/signin">SIGNIN</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
};

export default Register;