import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

export interface BookDetail {
    id: string;
    name: string;
    description: string;
    slug: string;
    description_raw: string;
    background_image: string;
}


export const getBookDetail = async (slug: string) => {
    const { data } = await apiClient.get(`/games/${slug}`);
    return data as BookDetail;
};

export const useBookDetail = (id: string) => {
    return useQuery({
        queryKey: ["book-detail"],
        queryFn: () => getBookDetail(id),
        staleTime: 10 * 1000,
    });
}

export default useBookDetail;

