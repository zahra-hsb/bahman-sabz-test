import { ReactNode } from "react";




export interface DashboardMenuItemType {
    id: number;
    title: string;
    path: string;
    icon: ReactNode;
}

export type GenreType = {
    id: string;
    name: string;
}

export interface GameType {
    id: number;
    name: string;
    background_image: string;
    rating: number;
    slug: string;
    genres: GenreType[]
}