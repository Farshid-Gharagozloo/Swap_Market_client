import SignupForm from "../components/SignupForm/SignupForm";
import { addUser } from "../utils/api";
import PageHeader from "../components/PageHeader/PageHeader";
import { useNavigate } from "react-router-dom";


export default function Signup (){

    const navigate = useNavigate();

    const handleSubmit = async (userInfo) => {
        try {
            const newUser = await addUser(userInfo);
            sessionStorage.authToken = newUser.data.token;
            const id = newUser.data.user_id; 
            navigate(`/user/${id}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section>
            <PageHeader title="Sign up" />
            <SignupForm onSubmit={handleSubmit} />
        </section>
    );
}