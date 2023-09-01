// import { React, useEffect, useState } from 'react';
// import "./RentGetBike.css";
// import { db, auth } from "./firebase-config";
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';
// // import Profile from './Profile';
// import Loading from './Loading';
// import RGBike from './RGBike';
// const RentGetBike = () => {
//     const currentUser = auth.currentUser;
//     // {console.log("currentUser : ",currentUser,currentUser.email)}
//     const userIdentifier = currentUser ? currentUser.email : null;
//     const [rentBikeData, setRentBikeData] = useState([]);
//     const navigate = useNavigate();
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         if (!userIdentifier) {
//             navigate('/bikerb');
//         } else {
//             const colRef = collection(db, "rentbike");
//             const q = query(colRef, where("email", "==", userIdentifier));

//             getDocs(q)
//                 .then((snapshot) => {
//                     const data = [];
//                     snapshot.docs.forEach((doc) => {
//                         data.push({ ...doc.data(), id: doc.id });
//                     });
//                     setRentBikeData(data);
//                     setIsLoading(false);
//                 })
//                 .catch(error => {
//                     console.log(error.message);
//                     setIsLoading(false);
//                 });
//         }
//     }, [navigate, userIdentifier]);
//     return (
//         <div className='container'>
//             {isLoading ? (
//                 <Loading />
//             ) : (
//                 <div>
//                     {rentBikeData.map((user, index) => (
//                         <div>
//                             {console.log("user:", user)}
//                             <RGBike key={index}
//                                 name={user.name}
//                                 email={user.email}
//                                 atf={user.availabletimefrom}
//                                 att={user.availabletimeto}
//                                 bikeModel={user.bikemodel}
//                                 bikeNumber={user.bikenumber}
//                                 fd={user.fromdate}
//                                 td={user.todate}
//                                 price={user.price}
//                                 location={user.location} />

//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     )
// };

// export default RentGetBike;

import { React, useEffect, useState } from 'react';
import "./RentGetBike.css";
import { db, auth } from "./firebase-config";
import { collection, getDocs, query, where , getDoc} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import RGBike from './RGBike';
import GetBike from './GetBike';
import Header from './Header';

const RentGetBike = () => {
    const currentUser = auth.currentUser;

    const userIdentifier = localStorage.getItem("email");
    const userIdentifier1 = currentUser ? currentUser.email : userIdentifier;
    //localStorage.getItem("email")
    const [rentBikeData, setRentBikeData] = useState([]);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    const [getBikeData, setGetBikeData] = useState([]);
    const imageLogo =  "images1/image.bmp"

    // useEffect(() => {
    //     if (!userIdentifier1) {
    //         navigate('/bikerb'); // Redirect if user is not authenticated
    //     } else {
    //         const data = [];
    //         const rentBikeColRef = collection(db, "rentbike");
    //         const bikePhoto = collection(db, "users");
    //         // const q = query(rentBikeColRef, where("email", "==", userIdentifier));
    //         // const q2 = query(bikePhoto, where("email", "==", userIdentifier));
    
    //         getDocs(bikePhoto)
    //         .then((userPicSnapshot) => {
    //             const userPicData = userPicSnapshot.docs[0].data();
    //             // Fetch getbike data
    //             getDocs(rentBikeColRef)
    //                 .then((snapshot) => {
    //                     snapshot.docs.forEach((doc) => {
    //                         data.push({ ...doc.data(), id: doc.id, bikePhotoUrl: userPicData.bikePhotoUrl });
    //                     });
    //                     setRentBikeData(data);
    //                     setIsLoading(false);
    //                 })
    //                 .catch(error => {
    //                     console.log(error.message);
    //                     setIsLoading(false);
    //                 });
    //         })
    //             .catch(error => {
    //                 console.log(error.message);
    //                 setIsLoading(false);
    //             });
    //     }
    // }, [navigate, userIdentifier]);
    

    useEffect(() => {
        if (!userIdentifier1) {
            navigate('/bikerb'); // Redirect if user is not authenticated
        } else {
            const data = [];
            const rentBikeColRef = collection(db, "rentbike");
            const bikePhotoColRef = collection(db, "users");
    
            // Fetch rentbike data
            getDocs(rentBikeColRef)
                .then((rentBikeSnapshot) => {
                    const promises = rentBikeSnapshot.docs.map(async (doc) => {
                        const rentBikeData = doc.data();
                        const bikePhotoQuery = query(bikePhotoColRef, where("email", "==", rentBikeData.email));
                        const bikePhotoSnapshot = await getDocs(bikePhotoQuery);
                        const bikePhotoData = bikePhotoSnapshot.docs[0].data();
    
                        data.push({ ...rentBikeData, id: doc.id, bikePhotoUrl: bikePhotoData.bikePhotoUrl });
                    });
    
                    // Wait for all promises to resolve
                    Promise.all(promises)
                        .then(() => {
                            setRentBikeData(data);
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
    }, [navigate, userIdentifier1]);
    

    return (
        <div className='container'>
            {isLoading ? (
                <Loading />
            ) : (
                    <div>
                        <Header />
                        <h1  className='h1'>RENT BIKE</h1>
                        <div className='w1'>
                            {rentBikeData.map((user, index) => (

                                <div className='wrapper' key={index}>
                                    <RGBike
                                        name={user.name}
                                        email={user.email}
                                        url={user.bikePhotoUrl ? user.bikePhotoUrl : imageLogo}
                                        atf={user.availabletimefrom}
                                        att={user.availabletimeto}
                                        bikeModel={user.bikemodel}
                                        bikeNumber={user.bikenumber}
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

export default RentGetBike;
