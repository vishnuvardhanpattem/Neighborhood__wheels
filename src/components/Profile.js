
import { React, useEffect, useState } from 'react';
import { db, auth } from "./firebase-config";
import { collection, getDocs, query, where } from 'firebase/firestore';
import Profile1 from './Profile1.js';
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import Loading from './Loading';

const Profile = () => {
    const currentUser = auth.currentUser;
    const userIdentifier = currentUser ? currentUser.email : null;
    const [usersData, setUsersData] = useState([]);
    const navigate = useNavigate(); 
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (!userIdentifier) {
            navigate('/signin'); 
        } else {
            const colRef = collection(db, "users");
            const q = query(colRef, where("email", "==", userIdentifier));

            getDocs(q)
                .then((snapshot) => {
                    const data = [];
                    snapshot.docs.forEach((doc) => {
                        data.push({ ...doc.data(), id: doc.id });
                    });
                    setUsersData(data);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.log(error.message);
                    setIsLoading(false);
                });
        }
    }, [navigate, userIdentifier]);

    return (
        <div className='profile-container'>
            {isLoading ? (
                <Loading />
            ) : (
                <div>
                    {usersData.map((user, index) => (
                        <Profile1 key={index} user={user} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Profile;
