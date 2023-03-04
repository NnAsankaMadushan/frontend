import React from "react";
import uniLogo from "../images/University-of-Ruhuna-Logo-removebg 1.png";
import "./title.css";
function Title() {
    return (

        // <div className="title-tops" >

        //     {/* <div>
        //         <p className="title"><u><b>Job Portral System University of Ruhuna</b></u></p>
        //     </div>
        //    <p ></p> */}

        //     <nav className="navbar bg-body-tertiary">
        //         <div className="container-fluid flex">
        //             <a className="navbar-brand" href="#">
        //                 <div className="d-flex justify-content-center">
        //                     <div>
        //                         <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
        //                     </div>
        //                     <div className="text-center center">
        //                         <p className="text-center center">Bootstrapssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
        //                     </div>
        //                 </div>
        //             </a>
        //         </div>
        //     </nav>
        // </div>

        <div className="container-fluid title-top">
           
            <div className="d-flex">
                <img className="p-2 d-inline-block align-text-top uniLogo" src={uniLogo} alt="Logo"/>
                <div className="p-2 flex-grow-1 text-center title">
                    <div><u><b>Job Portral System University of Ruhuna</b></u></div>
                    <div><span>University of Ruhuna</span></div>
                </div>
            </div>
        </div>


    )
}
export default Title;