import ERC20abi from "../constant/ERC20abi.json"

import CoinCredAbi from "../constant/coincredabi.json"
import { Wusdc,CoinCredContract ,LiskSepoliaETH } from "./addresses/address"



interface RequestLoan{
    loanRequester:string,
    lender:string,
    tokenRequest:string,
    tokenAmount:number,
    tokenProfit:number,
    loanId:number,
    lendOut:boolean,
    duration:number,
    collateralAddr:string,
    collatrealAmount:number,
    value:number,
}

interface createRequests{
    _tokenRequest:string,
    _tokenAmount:BigInt,
    _tokenProfit:BigInt,
    duration:number,
    _collateralAddress:string,
    _value:bigint,

}


//address _tokenRequest,uint256 _tokenAmount, uint256 _tokenProfit,uint256 duration,address _collateralAddress
export const UseContractCoincred =()=>{
     const createRequest =({_tokenRequest:tokenAddress,_tokenAmount:tokenAmount,_tokenProfit:tokenProfit,_collateralAddress:collateralAddress,duration:duration,_value:value}:createRequests)=>{
        return{abi:CoinCredAbi,
            address:CoinCredContract as `0x${string}`,
            functionName:"createLoanRequest",
            args:[tokenAddress,tokenAmount,tokenProfit,duration,collateralAddress],
            value: value
        }
     }
     const approve = (amount:BigInt)=>{
        return{abi:ERC20abi,
            address:Wusdc as `0x${string}`,
            functionName:"approve",
            args:[CoinCredContract,amount]
     }
    }

    const lendToken = (loanId:number)=>{
        return {
            abi:CoinCredAbi,
            address:CoinCredContract as `0x${string}`,
            functionName:"lendtoken",
            args:[loanId]
        }
    }

    const liquidate=(loanId:number)=>{
        return {
            abi:CoinCredAbi,
            address:CoinCredContract as `0x${string}`,
            functionName:"liquidate",
            args:[loanId]
        }
    }

    const RepayLoan=(loanId:number)=>{
        return {
            abi:CoinCredAbi,
            address:CoinCredContract as `0x${string}`,
            functionName:"RepayLoan",
            args:[loanId]
    }}

    const cancelLoanRequest=(loanId:number)=>{
        return {
            abi:CoinCredAbi,
            address:CoinCredContract as `0x${string}`,
            functionName:"cancelLoanRequest",
            args:[loanId]
        }
    }


const getAllRequest =()=>{
    return {abi:CoinCredAbi,
        address:CoinCredContract as `0x${string}`,
        functionName:"getAllRequest",
        args:[]
    }
}
const getAllUserLoanRequests =(userAddress:string)=>{
    return {abi:CoinCredAbi,
        address:CoinCredContract as `0x${string}`,
        functionName:"getAllUserLoanRequests",
        args:[userAddress]
        }
}

const getAllLenderRequest =(lenderAddress:string)=>{
    return {abi:CoinCredAbi,
        address:CoinCredContract as `0x${string}`,
        functionName:"getAllLenderRequest",
        args:[lenderAddress]
        }
}


const getCurrentBlockTimeStamp =()=>{
    return{abi:CoinCredAbi,
        address:CoinCredContract,
        functionName:"getCurrentBlockTimeStamp",
        args:[]
        
    }
}

const getAllLoanRequestIssued =()=>{
    return{abi:CoinCredAbi,
        address:CoinCredContract,
        functionName:"getAllLoanRequestIssued",
        args:[]
    }
}

     return {createRequest,
        approve,getAllLenderRequest,
        getAllLoanRequestIssued,
        getAllRequest,
        cancelLoanRequest,
        RepayLoan,lendToken
        ,getAllUserLoanRequests,
        getCurrentBlockTimeStamp,
        liquidate}
     


}