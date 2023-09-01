import React from "react";
import "./ContactUs.css";
import Header from "./Header";
const ContactUs = () => {

    return (
        <div>
            <Header />

            <div className="both">

                <div className="head">
                    <img src="images1/image.bmp" className="img" alt="image" />
                </div>
                <div>
                    <h1>HELP CENTER : </h1>
                    <br />
                    <br />
                    <h2>CONTACT US</h2>
                    <pre><i className="fa">&#9993;</i>  EMAIL-ID:<email>neighborhoodwheels@gmail.com</email></pre>
                    <pre><i className="fa fa-phone"></i>  PHONE NUMBER:99999999999</pre>
                    <pre><a href="#" class="fa fa-linkedin"></a>  linkedin:neighborhood_wheels</pre>
                    <pre><a href="#" class="fa fa-facebook"></a>  facebook:neighborhood_wheels</pre>
                    <pre><a href="#" class="fa fa-instagram"></a>  instagram:neighborhood_wheels</pre>
                    <br />
                    <h2>ADDRESS</h2>
                    <p>BHIMAVARAM ,WEST GODAVARI DISTRICT,</p>
                    <p>ANDHRA PRADESH,PINCODE-534202</p>

                </div>
            </div>
        </div>
    )
}

export default ContactUs;
