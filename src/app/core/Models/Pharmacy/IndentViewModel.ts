export interface SalesIndentViewModel {
	salesIndentId : number,
	salesIndentItemId : number,
	issueDate : Date,
	quantity : number,
	totalTradeOfferPerItem : number,
	totalTradePricePerItem : number,
	tradeOfferPricePerUnit : number,
	dosage : number,
	isPaid : boolean,
	treatmentTimeInDays : number,
	treatmentStart : Date,
	treatmentEnd : Date,
	inventoryItemName : string,
	costPrice : number,
	retailPrice : number,
	itemCode : string,
	unitName : string,
	packTypeName : string,
	packSize : number,
	productTypeName : string
}