import React from 'react'

export default function NewPassword() {
  return (
    <div className='container mb-5'>
    <div className='row justify-content-center'>
        <div className='col-md-5 register-box p-3 my-4'>
            <form class="form-register">
                <div class="text-center form-header">
                    <h2 className='mt-3'>New Password</h2>
                </div>

                <div className='divider'>
                    <hr/>
                </div>

                <div class="form-label-group mt-3">
                    <input type="password" id="inputPassword" class="form-control" placeholder="New Password" required="" />
                </div>

                <div class="form-label-group mt-3">
                    <input type="password" id="confirmPassword" name='confirmPassword' class="form-control" placeholder="Confirm Password" required="" />
                </div>

                <button class="btn btn-lg btn-block mt-4" type="submit">Save New Password</button>
            </form>
        </div>
    </div>
</div>
  )
}
