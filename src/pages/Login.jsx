import LoginForm from "../components/LoginForm/LoginForm";
import { getToken } from "../utils/api";


export default function Login(){

    const loginSubmit = async (user) => {
        try {
            const loginUser = await getToken(user);
            console.log(loginUser);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <LoginForm onSubmit={loginSubmit} />
    );
}