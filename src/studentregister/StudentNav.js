import { useRef } from "react";
import React from "react";

import "./StudentNav.css";
function StudentNav()
{
    const navRef = useRef();

       
    return(
        
        <div class="header-bottom" >
            <div className="nav">
                <nav ref={navRef}>
                    <a href="/#">Home</a>
                    <a href="/student">Student Register</a>
                    
                </nav>
                
            </div>
           <p ></p>
        </div>
        

    )
}
export default StudentNav;