import { useQuery } from "@tanstack/react-query";
import { Book } from "../entities/Book";
import apiClient from "../services/api-client";


export const getBooks = async () => {
    const { data: { results } } = await apiClient.get('/games');
    return results as Book[];
};

export const useBooks = (category?: string) => {
    return useQuery({
        queryKey: ["books"],
        queryFn: getBooks,
        staleTime: 10 * 1000,
    });
}