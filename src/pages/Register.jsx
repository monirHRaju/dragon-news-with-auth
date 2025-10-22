import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center mt-[50px]'>
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-4">
                    <div className="card-body py-5">
                    <h1 className="text-2xl font-bold text-center">Register</h1>
                        <form>
                            <fieldset className="fieldset">
                                {/* name */}
                            <label className="label">Name</label>
                            <input type="name" className="input bg-base-200" placeholder="name" />

                            <label className="label">PHoto URL</label>
                            <input type="photo_url" className="input bg-base-200" placeholder="photo url" />
                            
                            <label className="label">Email</label>
                            <input type="email" className="input bg-base-200" placeholder="Email" />

                            <label className="label">Password</label>
                            <input type="password" className="input bg-base-200" placeholder="Password" />

                            
                            
                            <label>
                            <input type="checkbox"  class="checkbox" />
                                Accept Terms & Conditions
                            </label>

                            <button className="btn btn-primary mt-4">Register</button>
                            
                            </fieldset>
                            
                        </form>
                        
                        <div>Already have an account? <Link to={'/auth/login'} className="link link-hover text-secondary">Login</Link></div>
                    </div>
                </div>
               </div>
    );
};

export default Register;