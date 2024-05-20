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
    

const LoanIssued = () => {
    return (
        <div className="w-full max-h-screen ">
            <div className="h-screen w-full grid">
          
           
               
                <ScrollArea className="h-3/4 w-full  ">
               
      <div className="p-4 gap-4 grid grid-cols-2">
       
        {LoanRequestss.map((item, index) => (
                        <Card className="mb-4" key={index}>
                            <div className="flex justify-evenly items-center">
                            <CardHeader>
                                
                               
                                <div className="flex flex-col gap-2">
                                <CardTitle>Token to pay</CardTitle>
                                
                                <h4>{item.TokenAmount + item.TokenProfit}USDC</h4>

                                </div>
                                <div className="flex flex-col gap-2">
                                <CardTitle>Token to Acquire</CardTitle>
                                
                                <h4>{item.CollateralAmount}LISK</h4>

                                </div>
                            </CardHeader>

                            <div className="flex flex-col gap-2">
                                <CardTitle>STATUS</CardTitle>
                                
                                <h4>{item.status? <Badge variant="active">In Progress</Badge> : <Badge variant="inactive">PAID</Badge>}</h4>

                                </div>
                           

                            </div>

                            <CardContent>
                            <div className="flex  justify-end items-center">
                                

                                <Button variant="accent">PAY</Button>

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
