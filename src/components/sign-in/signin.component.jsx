import React from 'react';
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../forminput/forminput.component'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'

import './signin.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email,password} =this.state;
        
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'',password:''});
        }catch(error){
            console.log(error);
        }

    }
    handleChange = event =>{
        const {value, name} = event.target;
        this.setState({[name]: value});
    }
    render(){
        return(
            <div className="sign-in">
                <h4><b>I already have an account</b></h4>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="email"
                        required 
                    />

                    <FormInput
                        name="password" 
                        type="password" 
                        handleChange={this.handleChange}
                        value={this.state.password} 
                        label="password"
                        required 
                    />
                    <div className="button">
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {''}
                            SIGN IN WITH GOOGLE{''}
                        </CustomButton>
                    </div>
                </form>
            
            </div>

        )
    }


}

export default SignIn;