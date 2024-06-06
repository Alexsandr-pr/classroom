import authAction from 'action/authAction'
import ButtonNav from 'components/ButtonNav'
import Title from 'components/Title'
import { useDispatch, useSelector } from 'react-redux'

const Settings = () => {

	const {id} = useSelector(store => store.user.user)
	const dispatch = useDispatch()

	return (
		<div className='px-20 py-6'>
			<div className="w-full py-4 border-b-2 mb-5 border-solid border-teal-700">
				<Title text={"Налаштування"}/>
			</div>
			<ButtonNav cb={() => dispatch(authAction.deleteUser(id))} to={"/"} text={"Видалити аккаунт"}/>
		</div>
	)
}

export default Settings