import useSWR, { mutate } from "swr";
import axios from "axios";

const useData = (url, queryParams = {}, headers = {}) => {
  const { data, error } = useSWR(url, async () => {
    const response = await axios.get(url, { params: queryParams, headers });
    return response.data;
  });

  const postData = async (postUrl, newData) => {
    await axios.post(postUrl, newData, { params: queryParams, headers });
    mutate(url);
  };

  const putData = async (putUrl, updatedData) => {
    await axios.put(putUrl, updatedData, { params: queryParams, headers });
    mutate(url);
  };

  const deleteData = async (deleteUrl) => {
    await axios.delete(deleteUrl, { params: queryParams, headers });
    mutate(url);
  };

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    postData,
    putData,
    deleteData,
  };
};

export default useData;
