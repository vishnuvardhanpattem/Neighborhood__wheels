
import { React, useEffect, useState } from 'react';
import "./GBike.css";
import { db, auth } from "./firebase-config";
import { collection, getDocs, query, where, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import GetBike from './GetBike';
import Header from './Header';

const GBike = () => {
    const currentUser = auth.currentUser;

    const userIdentifier = localStorage.getItem("email");
    const userIdentifier1 = currentUser ? currentUser.email : userIdentifier;
    //localStorage.getItem("email")
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    const [getBikeData, setGetBikeData] = useState([]);
    useEffect(() => {
        if (!userIdentifier1) {
            navigate('/bikerb'); // Redirect if user is not authenticated
        } else {
            const data = [];
            const getBike = collection(db, "getbike");
            const profilePicUrlRef = collection(db, "users");

            // Fetch user photo data first
            getDocs(getBike)
                .then((getBikeSnapshot) => {
                    const promises = getBikeSnapshot.docs.map(async (doc) => {
                        const getBikeData = doc.data();
                        const profilePicQuery = query(profilePicUrlRef, where("email", "==", getBikeData.email));
                        const profilePhotosnapshot = await getDocs(profilePicQuery);
                        const profilePicData = profilePhotosnapshot.docs[0].data();

                        data.push({ ...getBikeData, id: doc.id, profilePicUrls: profilePicData.profilePicUrls });
                    });
                    Promise.all(promises)
                        .then(() => {
                            setGetBikeData(data);
                            setIsLoading(false);
                        })
                        .catch(error => {
                            console.log(error.message);
                            setIsLoading(false);
                        });
                })
                .catch(error => {
                    console.log(error.message);
                    setIsLoading(false);
                });
        }
    }, [navigate, userIdentifier]);


    return (
        <div className='container'>
            {isLoading ? (
                <Loading />
            ) : (
                <div >
                    <Header />
                    <h1 className='h12'>GET BIKE</h1>
                    <div className='container mx-auto mt-4'>
                        {getBikeData.map((user, index) => (

                            <div className='row' key={index}>
                                {console.log("users gbike : ", user)}
                                <GetBike
                                    name={user.name}
                                    email={user.email}
                                    url={user.profilePicUrls}
                                    rtf={user.requiredTimeFrom}
                                    rtt={user.requiredTimeTo}
                                    fd={user.fromdate}
                                    td={user.todate}
                                    price={user.price}
                                    location={user.location}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default GBike;