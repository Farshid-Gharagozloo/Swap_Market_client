import Input from '../Input/Input';
import Button from '../Button/Button';
import './SignupForm.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { formValidate, signupFromRules } from '../../utils/validators';

export default function SignupForm ({onSubmit}){
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        user_name: "",
        first_name: "",
        last_name: "",
        password: "",
        address: "",
        postal_code: "",
        contact_number: "",
        email: ""
    });
    const [userError, setUserError] = useState({
        user_name: false,
        first_name: false,
        last_name: false,
        password: false,
        address: false,
        postal_code: false,
        contact_number: false,
        email: false        
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(userInfo);

        const errors = signupFromRules(userInfo);
        setUserError(errors);

        if (!formValidate(errors)){
            return;
        }

        onSubmit(userInfo);
    };

    return (
        <form className='signup-form' onSubmit={handleSubmit}>
            <div className="signup-form__wrapper">
                <div className="signup-form__personal-info">
                    <h3 className="signup-form__title">Personal Information</h3>
                    <Input
                        placeholder="User Name"
                        name="user_name"
                        hasError={userError.user_name}
                        onChange={(e) => setUserInfo({ ...userInfo, user_name: e.target.value })}
                    />

                    <Input
                        placeholder="First Name"
                        name="first_name"
                        hasError={userError.first_name}
                        onChange={(e) => setUserInfo({ ...userInfo, first_name: e.target.value })}
                    />

                    <Input
                        placeholder="Last Name"
                        name="last_name"
                        hasError={userError.last_name}
                        onChange={(e) => setUserInfo({ ...userInfo, last_name: e.target.value })}
                    />

                    <Input
                        placeholder="Password"
                        name="password"
                        hasError={userError.password}
                        onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
                    />
                </div>

                <div className="signup-form__address-info">
                    <h3 className="signup-form__title">Contact Details</h3>
                    <Input
                        placeholder="Address"
                        name="address"
                        hasError={userError.address}
                        onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
                    />

                    <Input
                        placeholder="Postal Code"
                        name="postal_code"
                        hasError={userError.postal_code}
                        onChange={(e) => setUserInfo({ ...userInfo, postal_code: e.target.value })}
                    />

                    <Input
                        placeholder="Contact Number"
                        name="contact_number"
                        hasError={userError.contact_number}
                        onChange={(e) => setUserInfo({ ...userInfo, contact_number: e.target.value })}
                    />

                    <Input
                        placeholder="Email"
                        name="email"
                        hasError={userError.email}
                        onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                    />
                </div>
                <div className="signup-form__actions">
                    <Button variant='cancel' onClick={() => navigate('/')} />
                    <Button type='submit'>Sign up</Button>
                </div>
            </div>
        </form>
    );
}
