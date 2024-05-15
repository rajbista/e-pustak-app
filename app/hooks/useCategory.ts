import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Category } from "../entities/Category";



export const getCategory = async () => {
    const { data: { results } } = await apiClient.get('/genres');
    return results as Category[];
};

export const useCategory = () => {
    return useQuery({
        queryKey: ["category"],
        queryFn: getCategory,
        staleTime: 10 * 1000,
    });
}

export default useCategory;
