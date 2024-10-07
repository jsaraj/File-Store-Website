import { useState } from "react";
import BtnDashboard from "./dcBtn";



const DashboardCtrl = ({ setContentChanger }) => {

    const [colorChanger,setColorChanger]=useState("");


    return (
        <div className="flex flex-col gap-4">
            <BtnDashboard title="بنرهای تبلیغاتی" content="midBanner" setContentChanger={setContentChanger} colorChanger={colorChanger} setColorChanger={setColorChanger} />
            <BtnDashboard title="اسلایدرها" content="sliders" setContentChanger={setContentChanger} colorChanger={colorChanger} setColorChanger={setColorChanger} />
        </div>
    );
}

export default DashboardCtrl;