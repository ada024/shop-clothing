import React, {useState} from "react";

import './signin.syles.scss';
import FormInput from "../form-input/form-input.compontent";
import CustomButton from "../custom-button/custom-button";
import {googleSignInStart, emailSignInStart} from "../../redux/user/user.actions";
import {connect} from "react-redux";


const SignIn = ({emailSignInStart, googleSignInStart}) => {
    const [userCredentials, setCredentials] = useState({email: '', password: ''})
    const {email, password} = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();


        emailSignInStart(email, password);
    };

    const handleChange = event => {
        const {value, name} = event.target;

        setCredentials({...userCredentials, [name]: value});
    };


    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={email}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    label='password'
                    required
                />
                <div className='buttons'>

                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
}

    const mapDispatchToProps = dispatch => ({
        googleSignInStart: () => dispatch(googleSignInStart()),
        emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
    });


    export default connect(null, mapDispatchToProps)(SignIn);
