
import loading from "./img/loading.gif"


const LoadingApp = () => {
    return (
        <div className="flex justify-center items-center w-full h-full bg-black">
            <img className="mix-blend-lighten" src={loading}/>
        </div>
    )
}

export default LoadingApp