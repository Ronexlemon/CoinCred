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
    

const LoanRequests = () => {
    return (
        <div className="w-full max-h-screen grid grid-cols-4">
          
            <div className="col-span-3">
               
                <ScrollArea className="h-3/4 w-full ">
                {/* <div className="flex w-full h-1/2 justify-center items-center">
        <h1 className="text-red-800">Yolow</h1>
      <Popover>
      <PopoverTrigger asChild  >
        <Button className="text-red-800" variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
      </div> */}
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
                        <Button variant="accent" className="w-full">REQUEST</Button>
                    </div>




                    </div>
                   

                </div>

            </div>
        </div>
    );
}

export default LoanRequests;
