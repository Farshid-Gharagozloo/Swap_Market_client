import LoginForm from "../components/LoginForm/LoginForm";
import { getToken } from "../utils/api";


export default function Login(){

    const loginSubmit = async (user) => {
        try {
            const loginUser = await getToken(user);
            sessionStorage.authToken = loginUser.data.token;
            console.log(loginUser.data.token);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <LoginForm onSubmit={loginSubmit} />
    );
}