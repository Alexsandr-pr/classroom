
import ButtonMain from 'components/ButtonMain'
import ModalConnect from 'components/modals/ModalConnect'
import ModalCourse from 'components/modals/ModalCourse'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeActiveModalConnects, changeActiveModalCourse } from 'store/modalsStore'

const Home = () => {
	const {modalConnect, modalCourse} = useSelector(store => store.modals);


	const dispatch = useDispatch();

	return (
		<div className='flex justify-center items-center w-full h-full px-20 py-4'>
			<div className="grid grid-cols-2 gap-5">
				<ButtonMain cb={() => dispatch(changeActiveModalCourse(true))} text={"Створити курс"}/>
				<ButtonMain cb={() => dispatch(changeActiveModalConnects(true))} text={"Приєднатися"}/>
			</div>
			<div className="">
				{
					modalConnect && <ModalConnect cb={() => dispatch(changeActiveModalConnects(false))}/>
				}
				{
					modalCourse && <ModalCourse cb={() => dispatch(changeActiveModalCourse(false))}/>
				}
			</div>
			
		</div>
	)
}

export default Home