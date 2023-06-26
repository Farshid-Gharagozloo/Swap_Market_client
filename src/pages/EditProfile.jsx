import { editUserProfile, getUser } from "../utils/api";
import PageHeader from "../components/PageHeader/PageHeader";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EditProfileForm from "../components/EditProfileForm/EditProfileForm";

export default function EditProfile (){

    const navigate = useNavigate();

    const userloginToken = { headers: {
        Authorization: `Bearer ${sessionStorage.authToken}`,
    }, };

    const [editUser, setEditUser] = useState(undefined);
    const { id } = useParams();

    const handleSubmit = async (userInfo) => {
        try {
            const editInfo = await editUserProfile(id, userInfo, userloginToken);
            navigate(`/user/${id}`);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUser(id, userloginToken)
            .then((response) =>{
                setEditUser(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    if (!editUser){
        return (
            <h5>Loading...</h5>
        );
    }

    const titleName = "Edit " + editUser.user_name;

    return (
        <>
            <PageHeader title={titleName} />
            <EditProfileForm onSubmit={handleSubmit} editUser={editUser} user_id={id}/>
        </>
    );
}