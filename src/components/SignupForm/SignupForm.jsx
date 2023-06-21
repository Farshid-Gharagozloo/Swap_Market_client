import Input from '../Input/Input';
import './SignupForm.scss';

export default function SignupForm (){


    return (
        <form className='signup-form'>
            <div className="signup-form__wrapper">
                <div className="signup-form__personal-info">
                    <h3 className="signup-form__title">Sign up Form</h3>
                    <Input
                        placeholder="User Name"
                        name="user_name"
                        // hasError={formError.user_name}
                        // onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                    />

                    <Input
                        placeholder="Password"
                        name="password"
                        // hasError={formError.password}
                        // onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />

                    <Input
                        placeholder="First Name"
                        name="first_name"
                        // hasError={formError.first_name}
                        // onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                    />

                    <Input
                        placeholder="Last Name"
                        name="last_name"
                        // hasError={formError.last_name}
                        // onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                    />
                </div>

                <div className="signup-form__address-info">
                    <Input
                        placeholder="Address"
                        name="address"
                        // hasError={formError.address}
                        // onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />

                    <Input
                        placeholder="Postal Code"
                        name="postal_code"
                        // hasError={formError.postal_code}
                        // onChange={(e) => setFormData({ ...formData, postal_code: e.target.value })}
                    />

                    <Input
                        placeholder="Contact Number"
                        name="contact_number"
                        // hasError={formError.contact_number}
                        // onChange={(e) => setFormData({ ...formData, contact_number: e.target.value })}
                    />

                    <Input
                        placeholder="Email"
                        name="email"
                        // hasError={formError.email}
                        // onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>

            </div>
        </form>
    );
}
