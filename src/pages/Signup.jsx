import SignupForm from "../components/SignupForm/SignupForm";
import { addUser } from "../utils/api";



export default function Signup (){

    const handleSubmit = async (userInfo) => {
        try {
            const newUser = await addUser(userInfo);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <SignupForm onSubmit={handleSubmit} />
        </>
    );
}