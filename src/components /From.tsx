import React, { useState } from 'react';
import Input from './Input';

interface formProps {
    formType: 'login' | 'signup' | 'reset';
    onSubmit: (data: {email: string; password?: string; confirmPassword?: string}) => void;
}

const Form: React.FC<formProps> = ({formType, onSubmit}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData: {email: string; password?: string; confirmPassword?: string} = {email};

        if (formType == "login" || formType == 'signup' || formType == "reset") formData.password = password;
        if (formType == "signup" || formType == "reset") formData.confirmPassword = confirmPassword;
        onSubmit(formData);
    };

    return(
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold text-center mb-6 capitalize">{formType}</h2>
            <Input 
                id="email"
                type="email"
                label="Email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                id="password"
                type="password"
                label="Password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {(formType == 'signup' || formType == 'reset') && 
            
            <Input 
                id="confirmPassword"
                type="confirmPassord"
                label="Confirm Password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => e.target.value}
            />
            }



        </form>
    )
}

export default Form;