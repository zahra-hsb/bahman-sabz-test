import ExitButton from "@/components/shared/ExitButton";
import Logo from "@/components/shared/Logo";
import { Center, Container, Flex, Link, LinkBox, Separator, Text } from "@chakra-ui/react";
import { AiFillProduct } from "react-icons/ai";
import { BiShoppingBag, BiUser } from "react-icons/bi";


const menuItems = [
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


const Sidebar = () => {
    return (
        <Container maxHeight={"3xl"} height={"xl"} maxWidth={"1/4"} borderRadius={"2xl"} background={"gray.800"} paddingY={5}>
            <Flex direction={"column"} height={"full"} justify={"space-between"}>
                <Container spaceY={5} paddingX={0}>
                    {/* logo section */}
                    <Logo />
                    <Separator colorPalette={"white"} />
                    <Flex direction={"column"} gap={3}>
                        {menuItems &&
                            menuItems.map(menu => (
                                <LinkBox key={menu.id} borderRadius={"3xl"} padding={2} paddingX={3} flex={"auto"} _hover={{ bg: "gray.600", cursor: "pointer" }}>
                                    <Link href={menu.path}>
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