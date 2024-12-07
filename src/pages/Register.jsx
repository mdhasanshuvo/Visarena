import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const { signUp, setUser, updateUser, googleAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const showErrorAlert = (message) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message,
        });
    };

    const onClickForGoogle = () => {
        googleAuth()
            .then(result => {
                const userFromGoogle = result.user;
                console.log(userFromGoogle);
                setUser(userFromGoogle);
                Swal.fire({
                    icon: 'success',
                    title: 'Registered Successfully!',
                    text: 'Welcome to Visarena!',
                    confirmButtonText: 'Continue',
                }).then(() => {
                    navigate(location?.state ? location.state : '/');
                });
            })
            .catch(error => {
                console.log(error.message);
                showErrorAlert(error.message);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, photo, email, password);

        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const isLongEnough = password.length >= 6;

        if (!hasUppercase || !hasLowercase || !isLongEnough) {
            showErrorAlert('Password must contain at least 6 characters, including uppercase and lowercase letters.');
            return;
        }

        signUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);

                updateUser({
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Registered Successfully!',
                            text: 'Your account has been created.',
                            confirmButtonText: 'Continue',
                        }).then(() => {
                            navigate('/');
                        });
                    })
                    .catch(error => {
                        console.log(error);
                        showErrorAlert(error.message);
                    });
            })
            .catch(error => {
                console.log(error.message);
                showErrorAlert(error.message);
            });
    };

    return (
        <div className="min-h-screen flex justify-center items-center -mt-20 bg-[#F3F3F3]">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10 pb-5">
                <h2 className="text-2xl font-semibold text-center">Register your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    {/* Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Enter your name" className="input input-bordered" required />
                    </div>

                    {/* Photo */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="Enter your Photo URL" className="input input-bordered" required />
                    </div>

                    {/* E-mail */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="Enter your email" className="input input-bordered" required />
                    </div>

                    {/* Password */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="Enter your password" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Register</button>
                    </div>
                    <p className="text-center mt-6">
                        Already Have An Account? <Link className="text-red-500" to='/auth/login'>Login</Link>
                    </p>

                    <div className="text-center space-y-3">
                        <h2 className="text-center mt-10">Or, Register with</h2>
                        <button className="btn"
                            onClick={onClickForGoogle}
                        >
                            <FaGoogle />
                            <span className="text-lg font-light">Google</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
