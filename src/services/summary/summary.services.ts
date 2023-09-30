import { axiosInstance } from "@/core/configs/axios";

const URL_CONTROLLER = '/summary';

export default {
  async list() {
    const result = await axiosInstance.get<Summary>(URL_CONTROLLER);

    return result.data;
  }
}