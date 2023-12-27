import React from 'react';

export default function ForgotPassword() {
  return (
    <div className='container mb-5'>
    <div className='row justify-content-center'>
        <div className='col-md-5 register-box p-3 my-4'>
            <form class="form-register">
                <div class="text-center form-header">
                    <h2 className='mt-3'>Reset Password</h2>
                </div>

                <div className='divider'>
                    <hr/>
                </div>

                <div class="form-label-group mt-5">
                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
                </div>

                <button class="btn btn-lg btn-block mt-4" type="submit">Reset Password</button>
            </form>
        </div>
    </div>
</div>
  )
}
