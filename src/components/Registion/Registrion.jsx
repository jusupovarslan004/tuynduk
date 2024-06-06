import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {addUsersAsyncData} from "../../redux/addUsersSlice/addUsersSlice.js";

const Registration = ({ setIsAuthenticated }) => {
    const dispatch = useDispatch();
    const { register, reset, handleSubmit } = useForm();

    const handleRegistration = (data) => {
        console.log(data)
        dispatch(addUsersAsyncData(data));
        reset();
        setIsAuthenticated(true);
    };

    return (
        <div>
            <h2>Регистрация</h2>
            <form onSubmit={handleSubmit(handleRegistration)}>
                <input
                    type="text"
                    placeholder='Логин'
                    {...register('login')}
                />
                <input
                    type="password"
                    placeholder='пароль'
                    {...register('password')}
                />
                <button type="submit">Register</button>
            </form>
            <p><Link to="/login">Вход</Link></p>
        </div>
    );
};

export default Registration;
