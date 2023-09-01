import { useNavigate } from "react-router-dom";
import { auth } from "./firebase-config";
import "./GetBike.css";
import { useState } from "react";
const GetBike = (props) => {
    const image = "images1/image.bmp";
    const navigate = useNavigate();
    const authEmail = auth?.currentUser?.email;
    const authEmailChecking = () => {
        if(authEmail == null){
            alert("Please register in Neighborhod Wheels to Access services");
            navigate("/signup");
        }
    }
    return (
            <div className="col-md-6 mo">
                <div className="card " style={{width: '20rem'}} >
                    <img className="card-img-top" src={props.url ? props.url : image} alt="logo" />
                    <div className=" card-body">
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">Location : {props.location}</p>
                    <p className="card-text">{props.email}</p>
                    <p className="card-text">From Required Date : {props.fd}</p>
                    <p className="card-text">To Required Date : {props.td}</p>
                    <p className="card-text">Price :{props.price}</p>
                    <p className="card-text">From Required Time: {props.rtf}</p>
                    <p className="card-text">To Required Time: {props.rtt}</p>
                    <a href={authEmail==null? "#" :`mailto:${props.email}`}  onClick={authEmailChecking}  className="submit-btn btn">Confirm</a>
                    </div>
                    
                </div>
            </div>
    )
}

export default GetBike;

