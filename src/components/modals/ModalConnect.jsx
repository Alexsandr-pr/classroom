import Input from "components/Input/Input"
import ParentModal from "./ParentModal"
import Button from "components/Button"
import { useState } from "react"


const ModalConnect = ({ cb}) => {

    const [code, setCode] = useState("")

    return (
        <ParentModal cb={cb}>
            <div className="">
                <h2 className="text-center text-3xl text-white mb-8">Приєднатися</h2>
            </div>
            <label htmlFor="">
                <span className="text-white mb-2 block">Введіть код щоб приєднатися</span>
                <Input value={code} setValue={setCode} type={"text"}/>
            </label>
            <div className="text-center pt-8">
                <Button text={"Приєднатися"}/>
            </div>
        </ParentModal>
        
    )
}

export default ModalConnect