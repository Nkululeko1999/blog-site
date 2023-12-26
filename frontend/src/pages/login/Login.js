import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='container mb-5'>
    <div className='row justify-content-center'>
        <div className='col-md-5 register-box p-3 my-4'>
            <form class="form-register">
                <div class="text-center form-header">
                    <h2 className='mt-3'>Login</h2>
                </div>

                <div className='divider'>
                    <hr/>
                </div>

                <div class="form-label-group mt-5">
                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
                </div>

                <div class="form-label-group mt-3">
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" />
                </div>

                <button class="btn btn-lg btn-block mt-4" type="submit">Login</button>

                <div className='redirect-login d-flex justify-content-between mt-3'>
                    <p>Don't have an Account</p>
                    <Link to="/register">Register</Link>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}
