import { ReactNode } from "react";




export interface DashboardMenuItemType {
    id: number;
    title: string;
    path: string;
    icon: ReactNode;
}


export interface GameType {
    id: number;
    name: string;
    background_image: string;
    slug: string;
}