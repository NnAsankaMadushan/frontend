import React from "react";
/*import {FaTimes,FaReact} from "react-icons/fa";*/
import "./footer.css";
function Footer()
{
    return(
        

        <div class="main-footer" >
            <div className="fcontainer">
                <div className="row">
                    <hr/>

                    {/*column1*/}
                    <div className="col">
                        <p className="tit" ><u>UOR JOB PORTRAL SYSTEM </u></p>
                        <p>The Faculty of Engineering of University of Ruhuna was established on 1st July 1999 at Hapugala, Galle.  Admission to the Faculty of Engineering, University of Ruhuna, is subject to the University Grants Commission policy on 
                            university admissions.</p>
                    </div>
                   

                    {/*column2*/}
                    <div className="col">
                        <h3>CONTACT US</h3>
                        
                            <p className="footer-p">Address - Web Tech Solutions, Galle, Sri Lanka.</p>
                            <p className="footer-p">Telephone - 077-5 585 812</p>
                            
                        
                    </div>
                    {/*column3*/}
                    <div className="col">
                        <h3>DEPARTMENTS</h3>
                        
                            <p className="footer-p">Civil and Environmental Engineering</p>
                            <p className="footer-p">Electrical and Information Engineering</p>
                            <p className="footer-p">Mechanical and Manufacturing Engineering</p>
                            <p className="footer-p">Interdisciplinary Studies</p>
                            
                        
                    </div>
                    <div className="col">
                        <h3>WEB TECH SOLUTIONS</h3>
                        
                            <p className="footer-p">Asanka Madushan</p>
                            <p className="footer-p">Amanda Malkith</p>
                            <p className="footer-p">Nimna Sahasri</p>
                            <p className="footer-p">Supun Thilakshana</p>
                            
                        
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <p className="col-sm"><i>
                        Copyright &copy;  Faculty of Engineering  {new Date().getFullYear()}  Powered by Web Tech Solutions  All right reserved 

                        </i></p>
                </div>
            </div>
           
        </div>

    )
}
export default Footer;