


const Input = ({
    type,
    value,
    setValue, 
    holder
}) => {
    return (
        <input className="py-4 px-6 rounded-lg w-full text-indigo-500 bg-slate-700 outline-none border border-solid border-transparent focus:border-red-50" 
            placeholder={holder} 
            type={type} 
            value={value} 
            onChange={(e) => setValue(e.target.value)}
        />
    )
}

export default Input