import Input from '../Input/Input';
import Button from '../Button/Button';
import './EditProfileForm.scss';
import { useState } from 'react';
import { editProfileFromRules, formValidate } from '../../utils/validators';
import { useNavigate } from 'react-router-dom';

export default function EditProfileForm ({ onSubmit, editUser, user_id}){
    
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        user_name: editUser.user_name,
        first_name: editUser.first_name,
        last_name: editUser.last_name,
        address: editUser.address,
        postal_code: editUser.postal_code,
        contact_number: editUser.contact_number,
        email: editUser.email
    });
    const [userError, setUserError] = useState({
        user_name: false,
        first_name: false,
        last_name: false,
        address: false,
        postal_code: false,
        contact_number: false,
        email: false        
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(userInfo);

        const errors = editProfileFromRules(userInfo);
        setUserError(errors);

        if (!formValidate(errors)){
            return;
        }

        onSubmit(userInfo);
    };

    return (
        <form className='profile-form' onSubmit={handleSubmit}>
            <div className="profile-form__wrapper">
                <div className="profile-form__personal-info">
                    <h3 className="profile-form__title">Personal Information</h3>
                    <Input
                        placeholder="User Name"
                        name="user_name"
                        hasError={userError.user_name}
                        value={userInfo.user_name}
                        onChange={(e) => setUserInfo({ ...userInfo, user_name: e.target.value })}
                    />

                    <Input
                        placeholder="First Name"
                        name="first_name"
                        value={userInfo.first_name}
                        hasError={userError.first_name}
                        onChange={(e) => setUserInfo({ ...userInfo, first_name: e.target.value })}
                    />

                    <Input
                        placeholder="Last Name"
                        name="last_name"
                        value={userInfo.last_name}
                        hasError={userError.last_name}
                        onChange={(e) => setUserInfo({ ...userInfo, last_name: e.target.value })}
                    />
                </div>

                <div className="profile-form__address-info">
                    <h3 className="profile-form__title">Contact Details</h3>
                    <Input
                        placeholder="Address"
                        name="address"
                        value={userInfo.address}
                        hasError={userError.address}
                        onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
                    />

                    <Input
                        placeholder="Postal Code"
                        name="postal_code"
                        value={userInfo.postal_code}
                        hasError={userError.postal_code}
                        onChange={(e) => setUserInfo({ ...userInfo, postal_code: e.target.value })}
                    />

                    <Input
                        placeholder="Contact Number"
                        name="contact_number"
                        value={userInfo.contact_number}
                        hasError={userError.contact_number}
                        onChange={(e) => setUserInfo({ ...userInfo, contact_number: e.target.value })}
                    />

                    <Input
                        placeholder="Email"
                        name="email"
                        value={userInfo.email}
                        hasError={userError.email}
                        onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                    />
                </div>
                <div className="profile-form__actions">
                    <Button variant='cancel' onClick={() => navigate(`/user/${user_id}`)} />
                    <Button type='submit'>Edit Profile</Button>
                </div>
            </div>
        </form>
    );
}
