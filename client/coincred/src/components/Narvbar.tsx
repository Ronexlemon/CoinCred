import React from "react";
import ConnectButton from "./connect";
import { Button } from "./ui/button";
import { SiVault } from "react-icons/si";
import { GiLiquidSoap } from "react-icons/gi";
import { BsBank } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";

const Narvbar =()=>{
    return(
        <main className="h-40 w-full flex flex-col bg-backGroundColor fixed  gap-8 ">
            <div className="w-full flex justify-between items-center" >
                <h1 className="text-textColor">COINCREDD</h1>
                <div className=" rounded-xl border-2 border-textColor">
                <ConnectButton/>
                </div>

               



            </div>
            <div className="w-full flex justify-evenly  items-center bg-cardBackgroud rounded-xl" >
<Button className="flex gap-2 justify-between items-center" variant="default"><SiVault/> Smart Vaults</Button>
<Button className="flex gap-2 justify-between items-center" variant="default"><GiLiquidSoap /> Liquidate</Button>
<Button className="flex gap-2 justify-between items-center" variant="default"><BsBank/> Requests</Button>
<Button className="flex gap-2 justify-between items-center" variant="default"><GiTakeMyMoney/> Loans Issued</Button>





            </div>



        </main>
        
    )
}

export default Narvbar;