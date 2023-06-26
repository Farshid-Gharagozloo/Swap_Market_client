import { useParams } from "react-router-dom";
import UserProfile from "../components/UserProfile/UserProfile";
import { useEffect, useState } from "react";
import { getUser } from "../utils/api";
import PageHeader from "../components/PageHeader/PageHeader";



export default function ProfilePage (){

    const {id} = useParams();
    const [userInfo, setUserInfo] = useState(undefined);

    // if (!id){
    //     return (<h1>loading ...</h1>);
    // }
    // console.log(id);

    // window.location.reload(false);

    const userloginToken = { headers: {
        Authorization: `Bearer ${sessionStorage.authToken}`,
    }, };
    
    useEffect(() => {
        getUser(id, userloginToken)
            .then((response) => {
                setUserInfo(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    if (!userInfo ){
        return (<h1>loading ...</h1>);
    }

    return (
        <>
            <PageHeader title={userInfo.user_name} />
            <UserProfile profileInfo={userInfo} user_id={id}  userloginToken={userloginToken}/>
        </>
    );
}