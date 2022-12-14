import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useToken from '../../../hooks/useToken';
import SocialLogin from '../SocialLogin/SocialLogin';



const Login = () => {
    const [loginError, setLoginError] = useState('');
    const { login } = useContext(AuthContext);
    const [createUserEmail, setCreateUserEmail] = useState('');
    const [token] = useToken(createUserEmail);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    if (token) {
        navigate(from, {replace: true})
    }
    const handleLogin = data => {
        const email = data.email;
        const password = data.password;
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setCreateUserEmail(email)

            })
            .catch(err => {
                console.error(err.message);
                setLoginError(err.message);
            })
    }

    return (
        <section className="relative flex flex-wrap lg:h-screen lg:items-center my-10">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Get started today! With</h1>
                    <h1 className="text-2xl font-bold sm:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Welcome to OLDBazaar</h1>

                    <p className="mt-4 text-gray-500">
                        No one has the power to shatter your dreams unless you give it to them.
                    </p>
                </div>

                <form onSubmit={handleSubmit(handleLogin)} className="mx-auto mt-8 mb-0 max-w-md space-y-4">
                    <div>
                        <label for="email" className="sr-only">Email</label>

                        <div className="relative">
                            <input
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Enter email"
                                {...register('email', { required: 'Email is Required' })}
                            />

                            <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                            {errors.email && <span className='text-red-600'>{errors.email?.message}</span>}
                        </div>
                    </div>

                    <div>
                        <label for="password" className="sr-only">Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="*****"
                                {...register('password', { required: "Password is required", minLength: { value: 6, message: "Password must be 6 charecter length longer" } })}
                            />

                            <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </span>
                            {errors.password && <span className='text-red-600'>{errors.password?.message}</span>}
                            {loginError && <span className='text-red-600'>{loginError.slice(22, -2)}</span>}
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                            No account?
                            <Link to="/signup" className="underline">Sign up</Link>
                        </p>

                        <button
                            type="submit"
                            className="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
                <SocialLogin></SocialLogin>
            </div>

            <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                <img
                    alt="Welcome"
                    src="https://plugins.miniorange.com/wp-content/uploads/2022/07/Security_On-amicoblue_30.webp"
                    className="absolute inset-0 h-full w-4/5 object-cover"
                />

            </div>
        </section>

    );
};

export default Login;