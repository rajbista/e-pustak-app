import useData from "./useData";

export interface Category {
    id: number;
    name: string;
    slug: string;
}

const useCategory = () => useData<Category>('/genres');

export default useCategory;
