import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../store.context';
import { Dialog, TextField, Button } from '@mui/material';
import './auth.style.css';

const AuthView: React.FC = () => {
    const { authStore } = useContext(StoreContext);
    const authenticated = authStore.isAuthenticated();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <Dialog open={!authenticated}>
            <div className='container'>
                <TextField 
                    className='text-field' 
                    label='Email'
                    type='email'
                    value={email} 
                    onChange={(event) => setEmail(event.target.value)}
                />
                <TextField 
                    className='text-field'
                    label='Contraseña'
                    type='password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <Button>Login</Button>
            </div>
        </Dialog>
    );
}

const Auth = observer(AuthView);

export { Auth }