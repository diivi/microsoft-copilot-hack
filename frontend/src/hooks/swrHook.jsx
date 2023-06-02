import useSWR, { mutate } from "swr";
import axios from "axios";

const useData = (url, headers = {}) => {
  const { data, error } = useSWR(url, async () => {
    const response = await axios.get(url, { headers });
    return response.data;
  });

  const updateData = async (newData) => {
    await axios.post(url, newData, { headers });
    mutate(url);
  };

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    updateData,
  };
};

export default useData;
