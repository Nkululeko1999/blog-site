import React from 'react';
import './Register.scss';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-5 register-box p-3 my-4'>
                <form class="form-register">
                    <div class="text-center form-header">
                        <h2 className='mt-3'>Register an Account</h2>
                    </div>

                    <div className='divider'>
                        <hr/>
                    </div>

                    <div className='d-flex justify-content-between mt-3'>
                        <div class="form-label-group mt-3">
                            <input type="text" id="firstName" name="firstName" class="form-control" placeholder="First Name" required="" autofocus="" />
                        </div>

                        <div class="form-label-group mt-3">
                            <input type="text" id="lastName" name="lastName" class="form-control" placeholder="Last Name" required="" autofocus="" />
                        </div>
                    </div>

                    <div class="form-label-group mt-3">
                        <input type="text" id="username" name="username" class="form-control" placeholder="Username" required="" autofocus="" />
                    </div>

                    <div class="form-label-group mt-3">
                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
                    </div>

                    <div class="form-label-group mt-3">
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" />
                    </div>

                    <div class="form-label-group mt-3">
                        <input type="password" id="confirmPassword" name='confirmPassword' class="form-control" placeholder="Confirm Password" required="" />
                    </div>

                    <button class="btn btn-lg btn-block mt-4" type="submit">Sign in</button>

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
