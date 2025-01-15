import React, { useState } from 'react';
import Input from './Input';

interface formProps {
    formType: 'login' | 'signup' | 'reset';
    onSubmit: (data: {email: string; password: string}) => void;
}