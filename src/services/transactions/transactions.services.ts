import { TransactionList} from './transactions.types';
import { axiosInstance } from "@/core/configs/axios";

const URL_CONTROLLER = '/items';

export default {
  async list() {
    const result = await axiosInstance.get<TransactionList>(URL_CONTROLLER);

    return result.data;
  }
}