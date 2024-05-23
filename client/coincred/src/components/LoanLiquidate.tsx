
"use client"
import React from "react";
import { ScrollArea,ScrollBar } from "./ui/scroll-area";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
import { countdown } from "@/hooks/timeConversion";
import { parseEther,formatEther } from "viem";
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
    import { useWriteContract,useReadContract } from 'wagmi'
    import { RequestLoan } from "@/constant/contracts";
    import { UseContractCoincred } from "@/constant/contracts";
    

const LoanLiquidate = () => {
    const { writeContractAsync:approveToken } = useWriteContract()
    const {approve,createRequest,getAllRequest,lendToken,getCurrentBlockTimeStamp} =UseContractCoincred();
    const getAllTheRequests = getAllRequest()
    const currentBlockTime = getCurrentBlockTimeStamp()
    const result = useReadContract({
        abi: getAllTheRequests.abi,
        address: getAllTheRequests.address,
        functionName: getAllTheRequests.functionName,
        args:getAllTheRequests.args
        
      })

      const resulttime = useReadContract({
        abi: currentBlockTime.abi,
        address:currentBlockTime.address,
        functionName: currentBlockTime.functionName,
        args:currentBlockTime.args
        
      })
      const dataArray:RequestLoan[] = Array.isArray(result.data) ? result.data : [];
      const nowBlockTime: number = Number.isInteger(resulttime.data as number) ? resulttime.data as number : 0;
      console.log("new block",nowBlockTime)
      console.log("run run",Number(resulttime.data))
    return (
        <div className="w-full max-h-screen ">
            <div className="h-screen w-full grid">
          
           
               
                <ScrollArea className="h-3/4 w-full  ">
               
      <div className="p-4 gap-4 grid grid-cols-2">
       
        {dataArray.map((item, index) => (
                        <Card className="mb-4" key={index}>
                            <div className="flex justify-evenly items-center">
                            <CardHeader>
                                
                               
                                <div className="flex flex-col gap-2">
                                <CardTitle>Token to pay</CardTitle>
                                
                                <h4>{Number(formatEther(item.tokenAmount)) + Number(formatEther(item.tokenProfit))}USDC</h4>

                                </div>
                                <div className="flex flex-col gap-2">
                                <CardTitle>Token to Acquire</CardTitle>
                                
                                <h4>{Number(formatEther(item.collatrealAmount))}LISK</h4>

                                </div>
                            </CardHeader>

                            <div className="flex flex-col gap-2">
                                <CardTitle>PERIOD ENDS IN</CardTitle>
                               
                                
                                
                                <h4>{countdown(Number(item.duration),Number(resulttime.data))}</h4>
                                

                                </div>
                           

                            </div>

                            <CardContent>
                            <div className="flex  justify-end items-center">
                                

                                <Button variant="accent">LIQUIDATE</Button>

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

export default LoanLiquidate;
