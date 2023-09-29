import { useQuery } from "@tanstack/react-query";


const fetchTransactionDetails = async (transactionId: string) => {
  const response = await fetch(`http://localhost:3001/items/${transactionId}`);
  console.log(response);
  if (!response.ok) {
    throw new Error('Não foi possível buscar os detalhes da transação.');
  }
  return response.json();
};

export const useTransactionDetails = (transactionId: string) => {
  return useQuery(['transaction', transactionId], () => fetchTransactionDetails(transactionId));
};