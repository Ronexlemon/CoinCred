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
import { LoanRequestss } from "@/helpers/data"; 
import { Button } from "./ui/button";

const LoanRequests = () => {
    return (
        <div className="w-full max-h-screen grid grid-cols-4">
            <div className="col-span-3">
               
                <ScrollArea className="h-3/4 w-full ">
      <div className="p-4 gap-4">
       
        {LoanRequestss.map((item, index) => (
                        <Card className="mb-4" key={index}>
                            <div className="flex justify-evenly items-center">
                            <CardHeader>
                                <CardTitle>Collateral</CardTitle>
                                <CardDescription>LISK</CardDescription>
                                <div className="flex flex-col">
                                <p>Amount</p>
                                <h4>{item.CollateralAmount}</h4>

                                </div>
                            </CardHeader>
                            <CardHeader>
                                <CardTitle>Token</CardTitle>
                                <CardDescription>USDC</CardDescription>
                                <div className="flex flex-col">
                                <p>Amount</p>
                                <h4>{item.TokenAmount}</h4>

                                </div>
                            </CardHeader>
                            <CardHeader>
                                <CardTitle>Profit</CardTitle>
                                <CardDescription>USDC</CardDescription>
                                <div className="flex flex-col">
                                <p>Amount</p>
                                <h4>{item.TokenProfit}</h4>

                                </div>
                            </CardHeader>
                            <CardHeader>
                                <CardTitle>Borrower</CardTitle>
                                <CardDescription>{item.BorrowerAddress}</CardDescription>
                            </CardHeader>

                            </div>

                            <CardContent>
                            <div className="flex  justify-end items-center">
                                

                                <Button variant="accent">LEND</Button>

                            </div>
                               
                            </CardContent>
                           
                        </Card>
                    ))}
      </div>
    </ScrollArea>
            </div>
        </div>
    );
}

export default LoanRequests;
