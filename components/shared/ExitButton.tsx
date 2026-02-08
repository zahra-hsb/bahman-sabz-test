import { Button, Text } from "@chakra-ui/react"
import { BiExit } from "react-icons/bi"


const ExitButton = () => {
    return (
        <Button>
            <BiExit />
            <Text>
                Exit
            </Text>
        </Button>
    )
}

export default ExitButton;