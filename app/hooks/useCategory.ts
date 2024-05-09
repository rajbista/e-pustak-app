import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Category {
    id: number;
    name: string;
    slug: string;
}

interface FetchCategoryResponse {
    count: number;
    results: Category[];
}

const useCategory = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient
            .get<FetchCategoryResponse>("/genres", { signal: controller.signal })
            .then((res) => {
                setCategories(res.data.results);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            })

        return () => controller.abort();
    }, []);
    return { categories, isLoading, error };
};

export default useCategory;
