import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (


      <div className="border flex w-1/6 min-h-full flex-col bg-white shadow-md overflow-auto"> 

            <h1 className="flex border h-fit w-full font-medium text-base p-2 justify-start items-center">
            <img className="m-1" width="140" height="120" src="https://www.easyops.in/wp-content/uploads/2021/07/easyops_logo.png" alt="a"/>
            </h1>

            <div className="flex-wrap flex flex-col m-1">
                <p className="text-xs mt-10 font-thin w-fit m-1">MAIN</p>
                    
                <Link className="bg-white h-8 flex m-2 rounded text-xs p-2 hover:text-white hover:bg-secondary active:opacity-75 items-center" to='/'>
                <img className="mr-1" width="20" height="20" src="https://img.icons8.com/fluency-systems-regular/48/home--v1.png" alt="laptop-metrics--v2"/> Home
                </Link>
            </div>


            <div className="flex-wrap flex flex-col m-1">
                <p className="text-xs mt-10 font-thin w-fit m-1">SECONDARY</p>

                <Link className="bg-white h-8 flex m-2 rounded text-xs p-2 hover:text-white hover:bg-secondary active:opacity-75 items-center" to='/customers'>
                <img className="mr-1" width="20" height="20" src="https://img.icons8.com/ios/50/user-group-man-man.png" alt="user-group-man-man"/>Add Customers
                </Link>

            </div>
            <hr className="w-3/4 place-self-center m-4"/>
            <div className="flex-wrap flex flex-col m-1">
                <Link className="bg-white h-8 flex m-2 rounded text-xs p-2 hover:text-white hover:bg-secondary active:opacity-75 items-center" to='/logout'>
                <img className="mr-1" width="20" height="20" src="https://img.icons8.com/ios/50/exit--v1.png" alt="exit--v1"/>Logout
                </Link>
            </div>
        </div>

        
    );
}

export default NavBar;