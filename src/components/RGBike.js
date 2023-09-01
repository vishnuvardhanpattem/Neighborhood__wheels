import "./RGBike.css";
import { auth } from "./firebase-config";
import { useNavigate } from "react-router-dom";


const RGBike = (props) => {
    const authEmail = auth?.currentUser?.email;
    const navigate = useNavigate();
    const authEmailChecking = () => {
        
        if(authEmail == null){
            alert("Please register in Neighborhod Wheels to Access services");
            navigate("/signup");
        }
    }
    
    return (
        <div >
            <div className="rgbike-container">
                <div className="rgbikedetails-container">
                    <img className="rgbikedetails-img" src={props.url} alt="logo" />
                    <div className="rgbike-con">
                        
                        <h5>{props.name}</h5>
                        <p>Location : {props.location}</p>
                        <p>{props.email}</p>
                        <p>bikeModel : {props.bikeModel}</p>
                        <p>BikeNumber : {props.bikeNumber}</p>
                        <p>From Available Date : {props.fd}</p>
                        <p>To Available Date : {props.td}</p>
                        <p>Price :{props.price}</p>
                        <p>From Available Time: {props.atf}</p>
                        <p>To Available Time: {props.att}</p>
                        <p className="rgbike-conP">Send getBike details to the owner of bike through mail by Confirm button</p>
                    </div>
                    <div>
                    <a onClick={authEmailChecking} href={authEmail==null? "#" :`mailto:${props.email}`}  type="submit"  className="rgbikedetails-btn">Confirm</a>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default RGBike;