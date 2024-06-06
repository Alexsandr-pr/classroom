import Button from 'components/Button';
import ButtonNav from 'components/ButtonNav';
import Input from 'components/Input/Input';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import authAction from 'action/authAction';

const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");


    const dispatch = useDispatch();

    return (
        <div className="w-full h-full flex bg-slate-700 flex justify-center items-center">
            <div className=" w-full sm:w-[500px] h-fit bg-slate-800 p-5 sm:p-8 rounded-lg mx-4 sm:mx-0">
                <h1 className="text-center text-4xl text-white mb-8">Registration</h1>
                <form className="flex flex-col gap-5">
                    <label >
                        <span className="text-white mb-2 block">Enter Your Email</span>
                        <Input value={email} setValue={setEmail} type={"email"}  holder={"Your email"}/>
                    </label>
                    <label >
                        <span className="text-white mb-2 block">Enter Your Name</span>
                        <Input value={name} setValue={setName} type={"text"}  holder={"Your name"}/>
                    </label>
                    <label >
                        <span className="text-white mb-2 block">Enter Your Surname</span>
                        <Input value={surname} setValue={setSurname} type={"text"}  holder={"Your surname"}/>
                    </label>
                    <label htmlFor="">
                        <span className="text-white mb-2 block">Enter Your Password</span>
                        <Input value={password} setValue={setPassword} type={"password"}  holder={"Your password"}/>
                    </label>
                    <div className="flex gap-5 flex-col items-center sm:flex-row">
                        <ButtonNav to={"/"} text={"Login"}/>
                        <ButtonNav to={"/"} cb={() => dispatch(authAction.registration(email, password, name, surname))} text={"Registration"}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration