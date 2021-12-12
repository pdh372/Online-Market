import React from 'react';
import {useParams , Navigate} from 'react-router-dom'
import './authPage.scss';
import Login from '../../components/features/auth/login/Login';
import ForgetPassword from '../../components/features/auth/forgetPassword/ForgetPassword';
import RegisterCustomer from '../../components/features/auth/registerCustomer/RegisterCustomer';
import RegisterProvider from '../../components/features/auth/registerProvider/RegisterProvider';
import RegisterShipper from '../../components/features/auth/registerShipper/RegisterShipper';

const AuthPage = () =>{
    const params = useParams();

    console.log(params);

    const handleRouter = () =>{ 
        if(params.name === 'login'){
            return <Login/>
        }
        else if(params.name === 'forgetpassword'){
            return <ForgetPassword/>
        }
        else if(params.name === 'registercustomer'){
            return <RegisterCustomer/>
        }
        else if(params.name === 'registerprovider'){
            return <RegisterProvider/>
        }
        else if(params.name === 'registershipper'){
            return <RegisterShipper/>
        }
        else {
            return <Navigate to='404'/>
        }
    }

    return <div className='auth-page'>
        {handleRouter()}
    </div>
}

export default AuthPage;
