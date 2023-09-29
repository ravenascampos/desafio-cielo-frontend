import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { TransactionList } from "./transactions.types";
import transactionsServices from "./transactions.services";

export function useTransactions() {
  return useQuery<TransactionList, AxiosError>(['items'], () => transactionsServices.list(),
  {
    onError(error) {
      console.log(error);
    },
  })
}