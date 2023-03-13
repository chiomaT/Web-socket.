export  interface BuyProducts {
     product: string;
     quantity: number;
     price: number;
     action:string
}
export  interface SellProducts {
     product: string;
     quantity: number;
     price: number;
     action:string
}

export  interface TradeLog {
     security: string;
     board: string;
     orderType: string;
     matchedPrice:number;
     quantity: number;
     date: string;
     time: string;
}

export  interface MonthlyValues {
     cashBalance: string;
     cashBalanceValue:number;
     securitiesValue:string;
     securitiesValueValue:number;
     loanBalance:string;
     loanBalanceValue:number;

}