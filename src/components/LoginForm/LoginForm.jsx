import { useState } from "react";
import Input from "../Input/Input";
import Button from '../Button/Button';
import { formValidate, loginFromRules } from '../../utils/validators';
import "./LoginForm.scss";
import { useNavigate } from "react-router-dom";

export default function LoginForm ({onSubmit}){
    const navigate = useNavigate();
    const [user, setUser] = useState ({
        user_name: "",
        password: ""
    });

    const [loginError, setLoginError] = useState({
        user_name: false,
        password: false
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = loginFromRules(user);
        setLoginError(errors);

        if (!formValidate(errors)){
            return;
        }

        onSubmit(user);
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-form__inputs">
                <Input
                    placeholder="User Name"
                    name="user_name"
                    hasError={loginError.user_name}
                    onChange={(e) => setUser({ ...user, user_name: e.target.value })}
                />

                <Input
                    placeholder="Password"
                    name="password"
                    hasError={loginError.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
            </div>
            <div className="login-form__actions">
                <Button variant='cancel' onClick={() => navigate('/')} />
                <Button type='submit'>Log in</Button>
            </div>
        </form>
    );
}