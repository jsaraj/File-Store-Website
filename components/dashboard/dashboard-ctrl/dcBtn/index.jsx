

"use client"

const BtnDashboard = ({ title,content,setContentChanger }) => {
    return (
        <div> 
            <button onClick={()=>setContentChanger(content)}  className="py-2 w-full bg-orange-400 text-white hover:bg-opacity-0 hover:text-orange-400 transition-all duration-200 border hover:border-orange-400 rounded-md">{title}</button>
        </div>
    );
}

export default BtnDashboard;