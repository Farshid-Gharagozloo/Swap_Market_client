import { useParams } from "react-router-dom";
import UserProfile from "../components/UserProfile/UserProfile";
import { useEffect, useState } from "react";
import { getUser } from "../utils/api";



export default function ProfilePage (){

    const {id} = useParams();
    const [userInfo, setUserInfo] = useState(undefined);

    useEffect(() => {
        getUser(id)
            .then((response) => {
                setUserInfo(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    if (!userInfo){
        return (<h1>loading ...</h1>);
    }

    return (
        <>
            <UserProfile profileInfo={userInfo} user_id={id}/>
        </>
    );
}