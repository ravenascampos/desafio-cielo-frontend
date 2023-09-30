import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import summaryServices from "./summary.services";

export function useSummary() {
  return useQuery<Summary, AxiosError>(['summary'], () => summaryServices.list(),
  {
    onError(error) {
      console.log(error);
    },
  })
}