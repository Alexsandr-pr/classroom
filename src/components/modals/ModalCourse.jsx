import Button from 'components/Button'
import Input from 'components/Input/Input'
import React, { useState } from 'react'
import ParentModal from './ParentModal'
import { useSelector } from 'react-redux'

const ModalCourse = ({
    cb
}) => {
    const [thema, setThema] = useState("");
    const {id} = useSelector(store => store.user.user);


    return (
        <ParentModal cb={cb}>
            <div className="">
                <h2 className="text-center text-3xl text-white mb-8">Створити курс</h2>
            </div>
            <label htmlFor="">
                <span className="text-white mb-2 block">Введіть тему курсу</span>
                <Input value={thema} setValue={setThema} type={"text"}/>
            </label>
            <div className="text-center pt-8">
                <Button text={"Створити"}/>
            </div>
        </ParentModal>
        
    )
}

export default ModalCourse