
import authAction from "action/authAction";
import Button from "components/Button";
import ButtonNav from "components/ButtonNav";
import Input from "components/Input/Input";
import { useState } from "react"
import { useDispatch } from "react-redux";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();

    return (
        <div className="w-full h-full flex bg-slate-700 flex justify-center items-center">
            <div className=" w-full sm:w-[500px] h-fit bg-slate-800 p-8 rounded-lg mx-4 sm:mx-0">
                <h1 className="text-center text-4xl text-white mb-8">Login</h1>
                <form className="flex flex-col gap-5">
                    <label>
                        <span className="text-white mb-2 block">Enter Your Email</span>
                        <Input value={email} setValue={setEmail} type={"email"}  holder={"Your email"}/>
                    </label>
                    <label htmlFor="">
                        <span className="text-white mb-2 block">Enter Your Password</span>
                        <Input value={password} setValue={setPassword} type={"password"}  holder={"Your password"}/>
                    </label>
                    <div className="flex gap-5 ">
                        <Button cb={() => dispatch(authAction.login(email, password))} text={"Login"}/>
                        <ButtonNav to={"/registration"} text={"Registration"}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login