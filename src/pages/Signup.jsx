import SignupForm from "../components/SignupForm/SignupForm";
import { addUser } from "../utils/api";
import PageHeader from "../components/PageHeader/PageHeader";


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
            <PageHeader title="Sign up" />
            <SignupForm onSubmit={handleSubmit} />
        </>
    );
}