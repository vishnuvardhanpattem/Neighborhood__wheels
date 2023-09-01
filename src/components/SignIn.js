
import { onAuthStateChanged, signInWithEmailAndPassword , signInWithPopup } from "firebase/auth";
import "./SignIn.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { auth } from "./firebase-config";


const SignIn = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                // If user is already logged in, navigate to the Profile page
                navigate('/profile'); // Use navigate function
            }
        });
    }, [navigate]);

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            const loggedInUser = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(loggedInUser);

            // Clear input fields
            setLoginEmail("");
            setLoginPassword("");

            navigate('/profile'); // Navigate to the Profile page using navigate function

        } catch (error) {
            console.log(loginPassword,error.message);
            alert(error.message);
        }
    };

    return (

        <div className="con">

            <div className="container12">
                <div className="space"></div>
                <div className="container-form">
                    <h1 className="container-h1">Signin</h1>
                    <form onSubmit={onSubmit}>
                        <label>
                            <p className="p">Email</p>
                            <input className="input" type="email" autoComplete="given-name" onChange={(event) => {
                                setLoginEmail(event.target.value)
                            }} />
                        </label>
                        <label>
                            <p className="p">Password</p>
                            <input className="input" type="password" autoComplete="current-password" onChange={(event) => {
                                setLoginPassword(event.target.value)
                            }} />
                        </label>
                        <p className="container-p">If you don't have account?<Link className="container-link" to='/signup'>Signup</Link></p>
                        <button className="container-btns" >SIGNIN</button>

                    </form>
                </div>
            </div>
        </div>
    )
};

export default SignIn;
