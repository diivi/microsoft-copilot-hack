import useSWR, { mutate } from "swr";
import axios from "axios";

const useData = (url, headers = {}) => {
  const { data, error } = useSWR(url, async () => {
    const response = await axios.get(url, { headers });
    return response.data;
  });

  const postData = async (newData) => {
    await axios.post(url, newData, { headers });
    mutate(url);
  };

  const putData = async (id, updatedData) => {
    const putUrl = `${url}/${id}`;
    await axios.put(putUrl, updatedData, { headers });
    mutate(url);
  };

  const deleteData = async (id) => {
    const deleteUrl = `${url}/${id}`;
    await axios.delete(deleteUrl, { headers });
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
