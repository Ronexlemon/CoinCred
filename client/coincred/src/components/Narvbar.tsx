import React from "react";
import ConnectButton from "./connect";

const Narvbar =()=>{
    return(
        <main className="h-40 w-full flex flex-col bg-backGroundColor fixed  ">
            <div className="w-full flex justify-between items-center" >
                <h1 className="text-textColor">COINCREDD</h1>
                <div className=" rounded-xl border-2 border-textColor">
                <ConnectButton/>
                </div>

               



            </div>
            <div className="w-full flex justify-evenly  items-center bg-cardBackgroud rounded-xl" >





            </div>



        </main>
        
    )
}

export default Narvbar;