
import React, { useEffect, useState } from 'react';
import "./Profile1.css";
import Header from "./Header.js"
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { storage, db } from './firebase-config';
import { Link } from 'react-router-dom';

const Profile1 = ({ user }) => {
    const [profilePicUrl, setProfilePicUrl] = useState(localStorage.getItem('profilePicUrl') || "images1/avatar1.jpg");
    const [dob, setDob] = useState("");
    const [dl, setDl] = useState(null);
    const [dlNumber, setDlNumber] = useState("");
    const [aadhar, setAadhar] = useState(null);
    const [address, setAddress] = useState("");
    const [profilePic, setProfilePic] = useState(null);
    const [email] = useState(user.email);

    useEffect(() => {
        // Store the profile picture URL in localStorage
        localStorage.setItem('profilePicUrl', profilePicUrl);
    }, [profilePicUrl]);

    useEffect(() =>{
        localStorage.setItem('email',user.email);
    }, [user.email]);
    useEffect(() =>{
        localStorage.setItem('name',user.name);
    }, [user.name]);
    useEffect(() => {
        // Store the user.id in localStorage
        localStorage.setItem('userId', user.id);
    }, [user.id]);

    const onSubmit = async (event) => {
        event.preventDefault();
        const submitBtn = document.getElementsByClassName("submit-btn");
        if (onSubmit) {
            submitBtn[0].disabled = true;
            submitBtn[0].style.cursor = 'no-drop';
        }

        // Upload Driving License Image
        if (dl) {
            const drivingLicenseRef = ref(storage, `${email}/drivingLicense.jpg`);
            try {
                await uploadBytes(drivingLicenseRef, dl);
                // const url = await getDownloadURL(drivingLicenseRef);
                // const userDocRef = doc(db, "users", user.id);
                // await setDoc(userDocRef, { drivingLicenseUrl: url, drivingLicenseNumber: dlNumber }, { merge: true });
            } catch (error) {
                console.log("Error uploading driving license:", error.message);
            }
        }

        // Upload Aadhar Card Image
        if (aadhar) {
            const aadharRef = ref(storage, `${email}/aadharCard.jpg`);
            try {
                await uploadBytes(aadharRef, aadhar);
            } catch (error) {
                console.log("Error uploading Aadhar card:", error.message);
            }
        }
        // profilePic image

        if (profilePic) {
            const profilePicRef = ref(storage, `${email}/profilePic.jpg`);
            try {
                await uploadBytes(profilePicRef, profilePic);
                const url = await getDownloadURL(profilePicRef);
                const userDocRef = doc(db, "users", user.id);
                await setDoc(userDocRef, { profilePicUrls: url, ppu: profilePicUrl }, { merge: true });
                {console.log("url: ",url)}
                {console.log("profilePic Url: ",profilePicUrl)}
                setProfilePicUrl(url); // Set the profile picture URL
            } catch (error) {
                console.log("Error uploading profile pic:", error.message);
            }
        }

        // Store text data in Firestore
        try {
            const userDocRef = doc(db, "users", user.id);
            await setDoc(userDocRef, { dob, address, dlNumber }, { merge: true });
            console.log("Text data stored in Firestore.");
            alert("Data is successfully submitted");

            setDob(" ");
            setDl(" ");
            setDlNumber(' ');
            setAddress(" ");
        } catch (error) {
            console.log("Error storing text data in Firestore:", error.message);
        }

        alert("Data successfully stored in Database");
    }

    return (
        <div >
            <Header />
            <h1 className='profile1-h1'>Hi {user.name}</h1>
            <div className="profile1-container">
                <div className='profile1'>
                    <div className='profile1-details' >
                        <div className='profile1-img'>
                            <img id='avtar' src={profilePicUrl} alt='' />
                            <br />
                            
                        </div>
                        <div className='profile-details-default'>
                            <p>Name: {user.name.toLowerCase()}</p>
                            <p>Email: {user.email}</p>
                            <p>aadhar: {user.aadhar} </p>
                            <p>mobile: {user.mobile}</p>
                            {/* Render other fields from the user object here */}
                        </div>
                    </div>
                    {/* ... rest of your JSX ... */}
                    <div className='edit-profile'>
                        <form onSubmit={onSubmit}>
                            {/* ... your form inputs ... */}
                            <label>
                                <p>Date of Birth</p>
                                <input className='profile1-input input1' type='date' onChange={(event) => setDob(event.target.value)} required />
                            </label>

                            <label>
                                <p>Address</p>
                                <input className='profile1-input input1' type='text' value={address} onChange={(event) => setAddress(event.target.value)} required/>
                            </label>
                            <label>
                                <p>Driving License Number</p>
                                <input className='profile1-input input1' type='text' maxLength={16} minLength={16} value={dlNumber} onChange={(event) => setDlNumber(event.target.value)} required/>
                            </label>

                            <label>
                                <p>Driving License</p>
                                <input className='profile1-input' onChange={(event) => setDl(event.target.files[0])} type='file' required />
                            </label>


                            <label>
                                <p>Aadhar Card</p>
                                <input className='profile1-input' onChange={(event) => setAadhar(event.target.files[0])} type='file' required/>
                            </label>



                            <label>
                                <p>Profile Pic</p>
                                <input className='profile1-input' onChange={(event) => setProfilePic(event.target.files[0])} type='file' />
                            </label>

                            <button className="submit-btn">Submit</button>


                        </form>
                    </div>
                </div>
               <div className='clear'>
                
               </div>
                <div className='profile1-Link'>
                    <Link to="/bikerb" className='submit-btns'>Rent Bike</Link>
                    <Link to="/bikerb" className='submit-btns'>Get Bike</Link>
                </div>
            </div>
        </div>
    );
};

export default Profile1;

