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
const LoanIssued = () => {
    const account = useAccount()
    const [isApproving,setApproving] = useState<boolean>(false);
    const {approve,createRequest,getAllRequest,getCurrentBlockTimeStamp,getAllUserLoanRequests,RepayLoan,getAllLenderRequest} =UseContractCoincred();
    const currentBlockTime = getCurrentBlockTimeStamp()

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
    return (
        <div className="w-full max-h-screen ">
            <div className="h-screen w-full grid">
          
           
               
                <ScrollArea className="h-3/4 w-full  ">
               
      <div className="p-4 gap-4 grid grid-cols-2">
       
        {dataArray.map((item, index) => (
                        <Card className="mb-4" key={index}>
                            <div className="flex justify-evenly items-center">
                            <CardHeader>
                            <div className="flex flex-col gap-1">
                                <CardTitle className="text-sm">PERIOD ENDS IN</CardTitle>
                               
                                
                                
                                <h4>{countdown(Number(item.duration),Number(resulttime.data))}</h4>
                                

                                </div>
                               
                                <div className="flex flex-col gap-1">
                                <CardTitle className="text-sm">Token to Lend</CardTitle>
                                
                                <h4>{Number(formatEther(item.tokenAmount)) }USDC</h4>

                                </div>
                                <div className="flex flex-col gap-1">
                                <CardTitle className="text-sm">Token Profit</CardTitle>
                                
                                <h4>{Number(formatEther(item.tokenProfit))}USDC</h4>

                                </div>
                                <div className="flex flex-col gap-1">
                                <CardTitle className="text-sm">Token to Acquire incase of default</CardTitle>
                               
                                
                                <h4>{Number(formatEther(item.collatrealAmount))}LISK</h4>

                                </div>
                            </CardHeader>

                            <div className="flex flex-col gap-1">
                                <CardTitle className="text-sm">STATUS</CardTitle>
                                
                                <h4>{item.lendOut? <Badge variant="active">In PROGRESS</Badge> : <Badge variant="inactive">PAID</Badge>}</h4>

                                </div>
                           

                            </div>

                            <CardContent>
                            <div className="flex  justify-end items-center">
                            {item.lendOut? <Button variant="accent">CLAIM</Button> : <Button disabled={true} variant="destructive">CLAIMED</Button>}
                                

                                

                            </div>
                               
                            </CardContent>
                           
                        </Card>
                    ))}
      </div>
      
    </ScrollArea>
    </div>
    
            {/* </div> */}
           
        </div>
    );
}

export default LoanIssued;
