
import React from 'react'
import "./SignIn.css";
import { useState, useEffect } from "react";
import { collection, addDoc, setDoc, doc, getDoc } from 'firebase/firestore';
import { uploadBytes, getDownloadURL } from 'firebase/storage';
import { ref } from 'firebase/storage';
import { storage, db } from './firebase-config';
import "./Bikerb.css";
import Header from './Header';
import { useNavigate } from 'react-router-dom';

function Bikerb() {
    const navigate = useNavigate();
    //form1 useState components
    const [bikePhoto, setBikePhoto] = useState("");
    const [rcBook, setRcBook] = useState("");
    const [pollutionCertificate, setPollutionCertificate] = useState("");
    const [bikeModel, setBikeModel] = useState("TVS");
    const [bikeNumber, setBikeNumber] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [availableTimeFrom, setAvailableTimeFrom] = useState("");
    const [availableTimeTo, setAvailableTimeTo] = useState("");
    const [location, setLocation] = useState("Bhimavaram");
    // const [price, setPrice] = useState(0);
    const userCollectionRef = collection(db, "rentbike");
    const userCollectionRef_2 = collection(db, "getbike");

    //form2 const useState component

    const [form2FromDate, setForm2FromDate] = useState("");
    const [form2ToDate, setForm2ToDate] = useState("");
    const [requiredTimeFrom, setRequiredTimeFrom] = useState("");
    const [requiredTimeTo, setRequiredTimeTo] = useState("");
    const [location2, setLocation2] = useState("Bhimavaram");
    const [bikePhotoUrl, setBikePhotoUrl] = useState('');


    const email = localStorage.getItem('email');
    const name = localStorage.getItem('name');
    const id = localStorage.getItem('userId');



    useEffect(() => {
        async function fetchUserProfile() {
            try {
                const userDocRef = doc(db, 'users', id);
                const userDocSnapshot = await getDoc(userDocRef);

                if (userDocSnapshot.exists()) {
                    const userData = userDocSnapshot.data();
                    setBikePhotoUrl(userData.bikePhotoUrl || ''); // Set the URL if it exists
                }
            } catch (error) {
                console.log('Error fetching user profile:', error);
            }
        }

        fetchUserProfile();
    }, [id]);

    // form1 time validity
    const date = new Date().getDate();
    var date1 = new Date(fromDate);
    var date2 = new Date(toDate);

    var onlyDate1 = date1.getDate();
    var onlyDate2 = date2.getDate();
    
    var fd = document.getElementById("fd");
    // try{
    //     if(onlyDate1 <= date || onlyDate1 > onlyDate2 ){
    //         // alert("Check Date once and correct it")
            
    //         fd.style.fontSize = "small";
    //         fd.style.color = "red";
    //         fd.innerText = "Give correct date";
    //     }else{
    //         fd.innerText = "";
    //         fd.style.color = "";
    //     }
    // }
    // catch(error){
    //     console.log(error)
    // }

    try {

        
        if (onlyDate1 === onlyDate2) {
            document.getElementById("availableTF").disabled = false;
            document.getElementById("availableTT").disabled = false;
        }
        if (onlyDate1 !== onlyDate2) {
            document.getElementById("availableTF").disabled = true;
            document.getElementById("availableTT").disabled = true;
        }

    }
    catch (error) {
        console.log("Error in date selecting: ", error.message);
    }

    var hrs1 = availableTimeFrom.split(":")[0];
    var hrs2 = availableTimeTo.split(":")[0];


    const diffInHrs = Math.abs(hrs2 - hrs1);
    var priceForHoursBudgetBikes = diffInHrs * 45;
    if (bikeModel === "Others") {
        priceForHoursBudgetBikes = diffInHrs * 65;
        //const priceForHoursExpensiveBikes = diffInHrs * 65;
    }



    var diffInTime = date2.getTime() - date1.getTime();
    var diffInDays = diffInTime / (1000 * 3600 * 24);
    // var hours = diffInDays * 24;

    var priceForDaysBudgetBikes = diffInDays * 1000;
    if (bikeModel === "Others") {
        // const priceForDaysExpensiveBikes = diffInDays * 1300;
        priceForDaysBudgetBikes = diffInDays * 1300;
    }
    const onSubmit1 = async (event) => {
        event.preventDefault();
        const price1 = document.getElementById("price1").innerText;
        var price1_1 = price1.split(":")[1];

        if (bikePhoto) {
            const bikePhotoRef = ref(storage, `${email}/bikePhoto.jpg`);
            const metadata = {
                contentType: 'image/jpeg',
            };
            try {

                await uploadBytes(bikePhotoRef, bikePhoto, metadata);

                const bUrl = await getDownloadURL(bikePhotoRef);
                const userDocRef2 = doc(db, "users", id);
                await setDoc(userDocRef2, { bikePhotoUrl: bUrl }, { merge: true });
                { console.log("url: ", bUrl) }
                { console.log("bikePhoto Url: ", bikePhoto) }
            } catch (error) {
                console.log("Error uploading bikePhoto:", error);
            }
        }


        console.log("Image upload process completed.");
        if (rcBook) {
            const rcBookRef = ref(storage, `${email}/rcBook.jpg`);
            try {
                const metadata = {
                    contentType: 'image/jpeg',
                };
                await uploadBytes(rcBookRef, rcBook, metadata);
            } catch (error) {
                console.log("Error uploading rcBook:", error.message);
            }
        }

        if (pollutionCertificate) {
            const pollutionCertificateRef = ref(storage, `${email}/pollutionCertificate.jpg`);
            try {
                const metadata = {
                    contentType: 'image/jpeg',
                };
                await uploadBytes(pollutionCertificateRef, pollutionCertificate, metadata);
            } catch (error) {
                console.log("Error uploading pollutionCertificate:", error.message);
            }
        }


        try {
            addDoc(userCollectionRef, {
                bikemodel: bikeModel,
                bikenumber: bikeNumber,
                fromdate: fromDate,
                todate: toDate,
                availabletimefrom: availableTimeFrom,
                availabletimeto: availableTimeTo,
                location: location,
                price: price1_1,
                email: email,
                name: name

            });
        } catch (error) {
            console.log("bikerent details are not submitted : ", error.message);
        }

        alert("Rent Bike successfully posted ");
        navigate("/gbike");

    }
    //Form2 time Validity
    var date1_2 = new Date(form2FromDate);
    var date2_2 = new Date(form2ToDate);

    var onlyDate1_1 = date1_2.getDate();
    var onlyDate2_2 = date2_2.getDate();

    try {
        if (onlyDate1_1 === onlyDate2_2) {
            document.getElementById("requiredTF").disabled = false;
            document.getElementById("requiredTT").disabled = false;
        }
        if (onlyDate1_1 !== onlyDate2_2) {
            document.getElementById("requiredTF").disabled = true;
            document.getElementById("requiredTT").disabled = true;
        }

    }
    catch (error) {
        console.log("Error in date selecting: ", error.message);
    }

    var hrs1_2 = requiredTimeFrom.split(":")[0];
    var hrs2_2 = requiredTimeTo.split(":")[0];


    const diffInHrs_2 = Math.abs(hrs2_2 - hrs1_2);
    const priceForHoursBudgetBikes_2 = diffInHrs_2 * 45;
    const priceForHoursExpensiveBikes_2 = diffInHrs_2 * 65;


    var diffInTime_2 = date2_2.getTime() - date1_2.getTime();
    var diffInDays_2 = diffInTime_2 / (1000 * 3600 * 24);
    // var hours = diffInDays * 24;

    const priceForDaysBudgetBikes_2 = diffInDays_2 * 1000;
    const priceForDaysExpensiveBikes_2 = diffInDays_2 * 1300;

    const onSubmit2 = (event) => {
        event.preventDefault();
        const price2 = document.getElementById("price2").innerText;
        var price2_2 = price2.split(":")[1];
        try {
            addDoc(userCollectionRef_2, {
                fromdate: form2FromDate,
                todate: form2ToDate,
                requiredTimeFrom: requiredTimeFrom,
                requiredTimeTo: requiredTimeTo,
                location: location2,
                price: price2_2,
                email: email,
                name: name

            });
        } catch (error) {
            console.log("GetBike details are not submitted : ", error.message);
        }

        alert("GetBike details successfully posted ");
        navigate("/rentgetbike");

    }

    return (
        <div>
            <Header />
            <div className='forms'>
                <div className='form1'>
                    <form onSubmit={onSubmit1}>
                        <h1>Rent Bike</h1>
                        <label>
                            <p>Bike Photo:</p>
                            <input type="file" onChange={(event) => (setBikePhoto(event.target.files[0]))} required />
                        </label>
                        <label>
                            <p>Vehicle Type:</p>

                            <select name="type">
                                <option value="Twowheeler">Two wheeler</option>
                                <option value="Fourwheeler">Four wheeler</option>
                            </select>
                        </label>
                        <label>
                            <p>Bike Model:</p>

                            <select name="bikes" onChange={(event) => setBikeModel(event.target.value)} >
                                <option value="TVS">TVS</option>
                                <option value="Mahindra">Mahindra</option>
                                <option value="Yamaha">Yamaha</option>
                                <option value="Hero">Hero</option>
                                <option value="Hero Honda">Hero Honda</option>
                                <option value="Honda">Honda</option>
                                <option value="Bajaj">Bajaj</option>
                                <option value="Activa">Activa</option>
                                <option value="Jupiter">Jupiter</option>
                                <option value="Others">Others</option>
                            </select>
                        </label>
                        <label>
                            <p>Bike Number:</p><input type="text" required onChange={(event) => setBikeNumber(event.target.value.toUpperCase())} placeholder='Bikenumber' />
                        </label>

                        <label>
                            <p>Rc Book:</p><input type="file" required onChange={(event) => setRcBook(event.target.files[0])} />
                        </label>
                        <label>
                            <p>Pollution certificate: </p><input required type="file" onChange={(event) => setPollutionCertificate(event.target.files[0])} />
                        </label>
                        <label>
                            <p>From Date:</p><input type="date" required onChange={(event) => setFromDate(event.target.value)} />
                            <p id="fd"></p>
                        </label>

                        <label>
                            <p>To Date:</p><input type="date" required onChange={(event) => setToDate(event.target.value)} />
                        </label>


                        <label>
                            <p>Available Time From :</p><input type="time" id='availableTF' disabled={false} onChange={(event) => setAvailableTimeFrom(event.target.value)} />
                        </label>

                        <label>
                            <p>Available Time to:</p> <input type="time" id='availableTT' disabled={false} onChange={(event) => setAvailableTimeTo(event.target.value)} />
                        </label>

                        <label>
                            <p id='price1'>Estimated Cost: {onlyDate1 === onlyDate2 ? priceForHoursBudgetBikes : priceForDaysBudgetBikes} </p>
                        </label>
                        <label>
                            <p>Location:</p>
                            <select name="cars" onChange={(event) => setLocation(event.target.value)}>
                                <option value="Bhimavaram">Bhimavaram</option>
                            </select>
                        </label>
                        <button >Rent Bike</button>
                    </form>
                </div>

                <div className='form2'>
                    <form onSubmit={onSubmit2}>
                        <h1>Get Bike</h1>
                        <label>
                            <p>From Date: </p><input type="date" onChange={(event) => setForm2FromDate(event.target.value)} required />
                        </label>
                        <label>
                            <p>To Date: </p><input type="date" onChange={(event) => setForm2ToDate(event.target.value)} required />
                        </label>
                        <label>
                            <p>Required Time From : </p><input id='requiredTF' type="time" disabled={false} onChange={(event) => setRequiredTimeFrom(event.target.value)} />
                        </label>
                        <label>
                            <p>Required Time to:</p> <input id='requiredTT' type="time" disabled={false} onChange={(event) => setRequiredTimeTo(event.target.value)} />
                        </label>
                        <label>
                            <p>Location:</p>
                            <select name="cars" onChange={(event) => setLocation2(event.target.value)}>
                                <option value="Bhimavaram">Bhimavaram</option>
                            </select>
                        </label>
                        <label>
                            <p id='price2'>Estimated Cost: {onlyDate1_1 === onlyDate2_2 ? priceForHoursBudgetBikes_2 : priceForDaysBudgetBikes_2} </p>
                        </label>

                        <button>Get Bike</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Bikerb;
