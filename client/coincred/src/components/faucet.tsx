"use client"
import React, { useState } from "react";
import { ScrollArea,ScrollBar } from "./ui/scroll-area";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
import { Badge } from "./ui/badge";
import { countdown } from "@/hooks/timeConversion";
import { Input } from "./ui/input";
import { LoanRequestss } from "@/helpers/data"; 
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue, } from "./ui/select";
import { Popover,
    PopoverContent,
    PopoverTrigger, } from "./ui/popover";
    import {
        AlertDialog,
        AlertDialogAction,
        AlertDialogCancel,
        AlertDialogContent,
        AlertDialogDescription,
        AlertDialogFooter,
        AlertDialogHeader,
        AlertDialogTitle,
        AlertDialogTrigger,
      } from "./ui/alert-dialog"
      
    
      import { RequestLoan, UseContractCoincred } from "@/constant/contracts";
      import { useReadContract, useWriteContract } from "wagmi";
      import { useAccount } from "wagmi";
      import { Progress } from "./ui/progress"
import { formatEther } from "viem";
const Faucet = () => {
    const account = useAccount()
    const [isApproving,setApproving] = useState<boolean>(false);
   
    const [lendit,setLending] = useState<boolean>(false);
    const {approve,createRequest,getAllRequest,getCurrentBlockTimeStamp,getAllUserLoanRequests,RepayLoan,getAllLenderRequest,liquidate} =UseContractCoincred();
    const currentBlockTime = getCurrentBlockTimeStamp()
    const { writeContractAsync:liquidateUser } = useWriteContract()
    const { writeContractAsync:approveToken } = useWriteContract()
    const resulttime = useReadContract({
        abi: currentBlockTime.abi,
        address:currentBlockTime.address,
        functionName: currentBlockTime.functionName,
        args:currentBlockTime.args
        
      })
      
      const nowBlockTime: number = Number.isInteger(resulttime.data as number) ? resulttime.data as number : 0;

    //read contracts
  const getAllTheRequests = getAllLenderRequest(account.address)
  const result = useReadContract({
    abi: getAllTheRequests.abi,
    address: getAllTheRequests.address,
    functionName: getAllTheRequests.functionName,
    args:getAllTheRequests.args
    
  })
  console.log("the result is resulting",result.data)
  const dataArray:RequestLoan[] = Array.isArray(result.data) ? result.data : [];


  const liquidateAndPay = async(loanId:number)=>{
    const lend = liquidate(loanId)
    try{
      const tx = await liquidateUser({ 
        abi:lend.abi,
        address: lend.address,
        functionName: lend.functionName,
        args:lend.args,
     })

     return tx;

    }catch(err){
      console.log(err)
    }
  }

  const handleApproveTransaction = async (loanId:number,tokenAmount:BigInt) => {
    setApproving(true);
  
    try {
      const apptoken = approve(tokenAmount);
     
      // console.log(selectedOption)
      // console.log(selectedOptionToken)

      // console.log(borrowToken)

      // console.log(collateralToken)
      // console.log(profitToken)
      // console.log(secondsFromNow(date))



      const tx = await approveToken({ 
        abi:apptoken.abi,
        address: apptoken.address,
        functionName: apptoken.functionName,
        args:apptoken.args,
     })

     if(tx){
      setApproving(false);
      setLending(true);

     const txx =  await liquidateAndPay(loanId);

     if(txx){
      setLending(false)
     }else{
        setLending(false)
     }

     

     }
      
  
      
    } catch (err) {
      console.log(err);
      
      setApproving(false);
      setLending(false)
    }
  };
    return (
        <div className="w-full max-h-screen ">
            <div className="h-screen w-full grid">
          
           
               
                <ScrollArea className="h-3/4 w-full  ">
                <div className="flex w-full h-full justify-center items-center ">
                
                <AlertDialog open={isApproving}>
      <AlertDialogTrigger asChild >
        
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Approving ...</AlertDialogTitle>
          <AlertDialogDescription>
          <Progress color="green" value={66}  />
          </AlertDialogDescription>
        </AlertDialogHeader>
        
      </AlertDialogContent>
    </AlertDialog>
    </div>
    <div className="flex w-full h-full justify-center items-center ">
                
                <AlertDialog open={lendit}>
      <AlertDialogTrigger asChild >
        
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Claiming  ...</AlertDialogTitle>
          <AlertDialogDescription>
          <Progress color="green" value={88}  />
          </AlertDialogDescription>
        </AlertDialogHeader>
        
      </AlertDialogContent>
    </AlertDialog>

                </div>
               
      <div className="flex justify-center items-center">
       
        
                        <Card className="mb-4" >
                            <div className="flex justify-evenly items-center">
                            <CardHeader>
                            <div className="flex flex-col gap-1">
                                <CardTitle className="text-sm">PERIOD ENDS IN</CardTitle>
                               
                                
                                
                               
                                

                                </div>
                               
                                <div className="flex flex-col gap-1">
                                <CardTitle className="text-sm">Token to Lend</CardTitle>
                                
                               

                                </div>
                                <div className="flex flex-col gap-1">
                                <CardTitle className="text-sm">Token Profit</CardTitle>
                                
                             

                                </div>
                                <div className="flex flex-col gap-1">
                                <CardTitle className="text-sm">Token to Acquire incase of default</CardTitle>
                               
                                
                                

                                </div>
                            </CardHeader>

                            <div className="flex flex-col gap-1">
                                <CardTitle className="text-sm">STATUS</CardTitle>
                                
                                <h4> <Badge variant="active">In PROGRESS</Badge> </h4>

                                </div>
                           

                            </div>

                            <CardContent>
                            <div className="flex  justify-end items-center">
                             <Button   variant="accent">CLAIM</Button> 
                              <Button disabled={true} variant="destructive">CLAIMED</Button>
                                

                                

                            </div>
                               
                            </CardContent>
                           
                        </Card>
                    
      </div>
      
    </ScrollArea>
    </div>
    
            {/* </div> */}
           
        </div>
    );
}

export default Faucet;
