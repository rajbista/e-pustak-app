import { use } from "react";
import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Category } from "../entities/Category";

const useCategory = () => useData<Category>('/genres');


// useQuery({
//     queryKey: ['category'],
//     queryFn: () => apiClient
//         .get<Category[]>('/genres')
//         .then(res => res.data)
// })



export default useCategory;
