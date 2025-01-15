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

    return()
}

export default Form;