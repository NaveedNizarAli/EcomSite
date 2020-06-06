import React from 'react';

import './signin-homepage.styles.scss';
import SignIn from '../../components/sign-in/signin.component'
import SignUp from '../../components/sign-up/sign-up.component';

const SignInHomepage = () => (
    <div className="sign-in-out">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInHomepage;