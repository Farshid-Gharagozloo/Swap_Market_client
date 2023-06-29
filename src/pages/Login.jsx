import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";
import PageHeader from "../components/PageHeader/PageHeader";
import { getToken } from "../utils/api";
import React from 'react';

export default function Login(){
    const navigate = useNavigate();

    const loginSubmit = async (user) => {
        try {
            const loginUser = await getToken(user);
            sessionStorage.authToken = loginUser.data.token;
            sessionStorage.user = loginUser.data.user_id;
            // window.location.reload(false);
            const id = loginUser.data.user_id;
            navigate(`/user/${id}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <PageHeader title="Sign in" />
            <LoginForm onSubmit={loginSubmit} />
        </>
    );
}8