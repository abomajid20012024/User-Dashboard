import { Data } from "./user.entity";

export interface UserResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Data[];
}