import { Category } from "./Category";

export interface Book {
    id: string;
    name: string;
    slug: string;
    background_image: string;
    parent_platforms: { platform: Category; }[];
    description_raw: string;
}
