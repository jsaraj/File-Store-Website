

"use client"

const BtnDashboard = ({ title, content, setContentChanger, colorChanger, setColorChanger }) => {
    return (
        <div>
            <button onClick={() => {
                setContentChanger(content)
                setColorChanger(content)
            }} className={
                colorChanger == content ?
                "py-2 w-full bg-opacity-0 text-orange-500 hover:bg-opacity-0 hover:text-orange-400 transition-all duration-200 border border-orange-400 hover:border-orange-400 rounded-md" :
                "py-2 w-full bg-orange-400 text-white hover:bg-opacity-0 hover:text-orange-400 transition-all duration-200 border border-orange-400 hover:border-orange-400 rounded-md"
            }>{title}</button>
        </div>
    );
}

export default BtnDashboard;