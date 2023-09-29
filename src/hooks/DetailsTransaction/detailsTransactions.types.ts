export type TransactionDetailsProps = {
  id:string,
  date:string,
  status:string
  grossAmount:number,
  netAmount:number,
  mdrFeeAmount:number,
  paymentType:string,
  channel:string,
  channelCode:number,
  authorizationCode:string,
  truncatedCardNumber:string,
  cardBrand:string,
}