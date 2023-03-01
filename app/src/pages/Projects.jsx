import '../assets/css/ProjectPage.css'
import Navbar from "../components/navbar/Navbar";
import ProjetDashboard from "../components/ProjectPageComponent/ProjectDashboard";

export default function Projects() {
    return (
       <div className="ctrn">
        <Navbar />
        <ProjetDashboard />
       </div>
    )
}