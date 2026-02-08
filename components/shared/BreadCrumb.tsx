"use client"
import { useDashboardSidebar } from "@/lib/providers/DashboardProviders";
import { Container, Flex, Stack, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { MdDashboard } from "react-icons/md";



const BreadCrumb = () => {
    const { pageData } = useDashboardSidebar()
    const pathname = usePathname();

    useEffect(() => {

    }, [pathname])
    return (
        pageData ?
            <Stack>
                <Flex alignItems={"center"} gap={1}>
                    {pageData.icon ? pageData.icon : <MdDashboard />}
                    <Text>{pageData.title && pathname !== "/dashboard" ? pageData.title : "Dashboard"}</Text>
                </Flex>
                <Text>
                    {pathname.includes("dashboard") && pageData.title ? "Dashboard / " : " "}
                    {pageData.title ? pageData.title : ""}
                </Text>
            </Stack>
            : <></>
    )
}

export default BreadCrumb;