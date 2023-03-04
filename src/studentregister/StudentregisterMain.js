import React from "react";
import Footer from "../components/footer";

import Headertop from "../components/headertop";
import Title from "../components/title";
import StudentNav from "./StudentNav";
import StudentTop from "./StudentTop";
import "./StudentregisterMain.css";
import Studentregister from "./Studenregister";
function StudentregisterMain()
{
    return(
        
        <div>
            <StudentTop/>
            <Title/>
            <StudentNav/>
            <Studentregister/>
            <Footer/>
        </div>
        

    )
}
export default StudentregisterMain;