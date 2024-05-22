"use client"
import React from "react";
import {useState} from "react"
import { ScrollArea,ScrollBar } from "./ui/scroll-area";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
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
    import { Progress } from "./ui/progress"


    

const LoanRequests = () => {
  const [isTransacting,setTransacting] = useState<boolean>(false);
  const [isApproving,setApproving] = useState<boolean>(false);
  const [send,setSend] = useState<boolean>(false);
  const  [toggleprogress,setToggleprogress] = useState<boolean>(false)
  const [progress, setProgress] = useState(13)
  const handleApproveTransaction = async () => {
    setApproving(true);
  
    try {
      // Wait for 10 seconds before setting `approving` to false
      await new Promise((resolve) =>{
        for(let i=0; i<100;i++){
          setTimeout(()=>{
            setProgress(i)

          },1000)
         
        }
        setTimeout(resolve, 10000)}); 
      setApproving(false);
  
      setTransacting(true);
      // Wait for another 10 seconds before setting `transacting` to false
      await new Promise((resolve) => setTimeout(resolve, 10000));
      setTransacting(false);
  
      // Set sending to true after both timeouts
      setSend(true);
      // Optionally, you can uncomment this line if you want to close something
      // setOpen(false);
    } catch (err) {
      console.log(err);
      setTransacting(false);
      setApproving(false);
    }
  };
    return (
        <div className="w-full max-h-screen grid grid-cols-4">
          
            <div className="col-span-3">
               
                <ScrollArea className="h-3/4 w-full ">
                <div className="flex w-full h-full justify-center items-center ">
                
                <AlertDialog open={isApproving}>
      <AlertDialogTrigger asChild >
        
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Approving ...</AlertDialogTitle>
          <AlertDialogDescription>
          <Progress color="green" value={progress}  />
          </AlertDialogDescription>
        </AlertDialogHeader>
        
      </AlertDialogContent>
    </AlertDialog>

                </div>
                <div className="flex w-full h-1/2 justify-center items-center">
               

        
        <AlertDialog open={isTransacting}>
      <AlertDialogTrigger asChild >
        
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently Push your transaction onchain.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-destructive text-destructive-foreground hover:bg-destructive/90" >Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" >Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
      </div>
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
            
            <div className="w-full h-full">
                <div  className="flex flex-col justify-between items-center gap-16 mx-5 rounded-xl h-96 bg-cardBackgroud">
                    <div className="flex flex-col h-full justify-evenly items-center">
                    <Label className="text-textColor" htmlFor="collateral">COLLATERAL TOKEN</Label>
                    <div className="flex justify-between items-center">
                    <Input  className=" bg-cardBackgroud m-4"  type="number" placeholder="1 ETH" />
                    <Select >
<SelectTrigger className=" w-10  rounded-3xl mr-2 ">

</SelectTrigger>
<SelectContent>
<SelectGroup>
<SelectLabel>Collaterals</SelectLabel>
<SelectItem value="apple">ETH</SelectItem>
<SelectItem value="banana">MATIC</SelectItem>
<SelectItem value="blueberry">CELO</SelectItem>
<SelectItem value="grapes">LINK</SelectItem>
<SelectItem value="pineapple">BNB</SelectItem>
</SelectGroup>
</SelectContent>
</Select>

                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                    <Label className="text-textColor" htmlFor="collateral">TOKEN BORROW</Label>
                    <div className="flex justify-between items-center">
                    <Input className=" bg-cardBackgroud m-4" type="number" placeholder="1 USDC" />
                    <Select>
                    <SelectTrigger className=" w-10 rounded-3xl mr-2 ">

</SelectTrigger>
<SelectContent>
<SelectGroup>
<SelectLabel>Tokens</SelectLabel>
<SelectItem value="apple">USDC</SelectItem>
<SelectItem value="banana">USDT</SelectItem>
<SelectItem value="blueberry">CUSDC</SelectItem>
<SelectItem value="grapes">DAI</SelectItem>
<SelectItem value="pineapple">UST</SelectItem>
</SelectGroup>
</SelectContent>
</Select>

                    </div>




                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                    <Label className="text-textColor" htmlFor="collateral">TOKEN PROFIT</Label>
                    <div className="flex justify-between items-center">
                    <Input className=" bg-cardBackgroud" type="number" placeholder="1 USDC" />
                    
                    </div>




                    </div>

                    <div className="w-full ">
                      <Button onClick={handleApproveTransaction} variant="accent" className="w-full">REQUEST</Button>
                       
                    </div>




                    </div>
                   

                </div>

            </div>
        </div>
    );
}

export default LoanRequests;
