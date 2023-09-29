import { ReactNode } from "react"

export type cardTransactionsProps = {
  id: string;
  date: ReactNode;
  netAmount: ReactNode;
  paymentType: ReactNode;
  cardBrand: ReactNode;
  status: ReactNode;
}