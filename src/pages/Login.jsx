import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
       <div className='flex justify-center mt-[50px]'>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-4">
            <div className="card-body py-5">
            <h1 className="text-2xl font-bold text-center">Login your account</h1>
                <form>
                    <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input bg-base-200" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input bg-base-200" placeholder="Password" />
                    <button className="btn btn-primary mt-4">Login</button>
                    </fieldset>
                </form>
                <div>Don't have account? <Link to={'/auth/register'} className="link link-hover text-secondary">Register</Link></div>
            </div>
        </div>
       </div>
    );
};

export default Login;