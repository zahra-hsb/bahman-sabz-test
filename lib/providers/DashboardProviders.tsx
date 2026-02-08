"use client"
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BiUser } from "react-icons/bi";
import { AiFillProduct } from "react-icons/ai";
import { DashboardMenuItemType } from "../schema/types";


const SidebarContext = createContext<{
    dashboardMenuItems: DashboardMenuItemType[];
    pageData: DashboardMenuItemType;
    setPageData: (pageData: DashboardMenuItemType) => void;
}>({
    dashboardMenuItems: [],
    pageData: {} as DashboardMenuItemType,
    setPageData: () => { },
})

const DashboardProviders = ({ children }: {
    children: ReactNode
}) => {

    const dashboardMenuItems = [
        {
            id: 0,
            icon: <AiFillProduct />,
            title: "Products",
            path: "/products"
        },
        {
            id: 1,
            icon: <BiUser />,
            title: "Users",
            path: "/users"
        },
    ]
    const [pageData, setPageData] = useState({} as DashboardMenuItemType)
    const pathname = usePathname();

    useEffect(() => {
        function findPageData() {
            const foundPageData = dashboardMenuItems.find(menuItem => pathname.includes(menuItem.path))
            setPageData(foundPageData ? foundPageData : {} as DashboardMenuItemType)
        }
        findPageData()
    }, [pathname])

    return (
        <SidebarContext.Provider value={{ pageData, setPageData, dashboardMenuItems }}>
            {children}
        </SidebarContext.Provider>
    )
}

export default DashboardProviders;

export const useDashboardSidebar = () => useContext(SidebarContext)