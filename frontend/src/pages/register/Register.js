import React from 'react';
import './Register.scss';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
import { apiUrl } from '../../App.js';
import { toast } from 'react-toastify';

export default function Register() {
    const [formDataReg, setFormDataReg] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    });
    
    const [userCreated, setUserCreated] = useState(false);

    const handleInputChange = async (event) => {
        const {name, value} =event.target;

        setFormDataReg((prevData) => ({
            ...prevData, 
            [name]: value
        }));

    }; 

    const handleSubmit = async (event) => {
        event.preventDefault();

        // console.log(formDataReg);
        // console.log(apiUrl);

        try {
            const response = await axios.post(`${apiUrl}/register`, formDataReg);

            console.log(response.data);

            if (response.data.Success === true) {
                setUserCreated(true);
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
                setUserCreated(false);
            }

            setFormDataReg({
                first_name: '',
                last_name: '',
                username: '',
                email: '',
                password: '',
                confirm_password: ''
            });

            console.log('userCreated:', userCreated);
            console.log('Message:', response.data.message);
        } catch (error) {
            console.log(error.message);
        }
    }


  return (
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-5 register-box p-3 my-4'>
                <form class="form-register" onSubmit={handleSubmit}>
                    <div class="text-center form-header">
                        <h2 className='mt-3'>Register an Account</h2>
                    </div>

                    <div className='divider'>
                        <hr/>
                    </div>

                    <div className='d-flex justify-content-between mt-3'>
                        <div class="form-label-group mt-3">
                            <input type="text" id="firstName" name="first_name" value={formDataReg.first_name}
                            class="form-control" placeholder="First Name" required="" autofocus=""
                            onChange={handleInputChange} />
                        </div>

                        <div class="form-label-group mt-3">
                            <input type="text" id="lastName" name="last_name" value={formDataReg.last_name}
                            class="form-control" placeholder="Last Name" required="" autofocus="" 
                            onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div class="form-label-group mt-3">
                        <input type="text" id="username" name="username" value={formDataReg.username}
                        class="form-control" placeholder="Username" required="" autofocus=""
                        onChange={handleInputChange} />
                    </div>

                    <div class="form-label-group mt-3">
                        <input type="email" id="inputEmail" class="form-control" value={formDataReg.email}
                        placeholder="Email address" required="" autofocus="" name='email'
                        onChange={handleInputChange} />
                    </div>

                    <div class="form-label-group mt-3">
                        <input type="password" id="inputPassword" class="form-control" 
                        placeholder="Password" required="" name='password' value={formDataReg.password}
                        onChange={handleInputChange} />
                    </div>

                    <div class="form-label-group mt-3">
                        <input type="password" id="confirmPassword" name='confirm_password' 
                        class="form-control" placeholder="Confirm Password" required="" value={formDataReg.confirm_password}
                        onChange={handleInputChange} />
                    </div>

                    <button class="btn btn-lg btn-block mt-4" type="submit">Register</button>

                    <div className='redirect-login d-flex justify-content-between mt-3'>
                        <p>Already have an Account</p>
                        <Link to="/login">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
