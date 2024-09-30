import BtnDashboard from "./dcBtn";



const DashboardCtrl = ({ setContentChanger }) => {
    return (
        <div className="flex flex-col gap-4">
            <BtnDashboard title="بنرهای تبلیغاتی" content="midBanner" setContentChanger={setContentChanger} />
            <BtnDashboard title="اسلایدرها" content="sliders" setContentChanger={setContentChanger} />
        </div>
    );
}

export default DashboardCtrl;