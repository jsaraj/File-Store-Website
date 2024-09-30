

"use client"

const BtnDashboard = ({ title,content,setContentChanger }) => {
    return (
        <div>
            <button onClick={()=>setContentChanger(content)}  className="py-2 w-full bg-red-400 rounded-md">{title}</button>
        </div>
    );
}

export default BtnDashboard;