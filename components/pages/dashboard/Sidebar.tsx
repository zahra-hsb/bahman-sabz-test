"use client"
import ExitButton from "@/components/shared/ExitButton";
import Logo from "@/components/shared/Logo";
import { useDashboardSidebar } from "@/lib/providers/DashboardProviders";
import { Container, Flex, Link, LinkBox, Separator } from "@chakra-ui/react";


const Sidebar = () => {
    const { dashboardMenuItems } = useDashboardSidebar()
    return (
        <Container maxHeight={"3xl"} height={"xl"} maxWidth={"1/4"} borderRadius={"2xl"} background={"gray.800"} paddingY={5}>
            <Flex direction={"column"} height={"full"} justify={"space-between"}>
                <Container spaceY={5} paddingX={0}>
                    {/* logo section */}
                    <Logo />
                    <Separator colorPalette={"white"} />
                    <Flex direction={"column"} gap={3}>
                        {dashboardMenuItems &&
                            dashboardMenuItems.map(menu => (
                                <LinkBox key={menu.id} borderRadius={"xl"} padding={2} paddingX={3} flex={"auto"} _hover={{ bg: "gray.600", cursor: "pointer" }}>
                                    <Link href={"/dashboard" + menu.path}>
                                        {menu.icon}
                                        {menu.title}
                                    </Link>
                                </LinkBox>
                            ))
                        }
                    </Flex>
                </Container>
                <ExitButton />
            </Flex>
        </Container >
    )
}

export default Sidebar;