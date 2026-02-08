import { Center, Flex, Text } from "@chakra-ui/react";
import { BiShoppingBag } from "react-icons/bi";



const Logo = () => {
    return (
        <Flex gap={1}>
            <BiShoppingBag size={30} />
            <Text marginTop={1}>
                Shoppy
            </Text>
        </Flex>
    )
}

export default Logo;