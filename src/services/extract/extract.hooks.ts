import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import extractService from "./extract.services";
import { ExtractList } from "./extract.types";

export function useExtracts() {
  return useQuery<ExtractList, AxiosError>(['items'], () => extractService.list(),
  {
    onError(error) {
      console.log(error);
    },
  })
}