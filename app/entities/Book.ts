import { Category } from "./Category";
import { Publisher } from "./Publisher";

export interface Book {
    id: string;
    name: string;
    slug: string;
    background_image: string;
    parent_platforms: { platform: Category; }[];
    description_raw: string;
    Publishers: Publisher[];
    rating_top: number
}
