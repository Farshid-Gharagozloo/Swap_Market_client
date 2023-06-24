import LoginForm from "../components/LoginForm/LoginForm";
import PageHeader from "../components/PageHeader/PageHeader";
import { getToken } from "../utils/api";


export default function Login(){

    const loginSubmit = async (user) => {
        try {
            const loginUser = await getToken(user);
            sessionStorage.authToken = loginUser.data.token;
            // sessionStorage.authToken= "";
            console.log(loginUser.data.token);
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