import { Box, Button, Container, Field, Fieldset, Flex, Input, Text } from "@chakra-ui/react";


export default function LoginPage() {
    return (
        <Container paddingY={20} maxHeight={"svh"} maxWidth={"xl"}>
            {/* <Box > */}
            <Flex direction={"column"} width={"full"} justifyContent={"center"} background={"gray.950"} shadow={"inner"} padding={5} borderRadius={"3xl"} alignItems={"center"}>
                <Text fontSize={"2xl"}>Login</Text>
                <Fieldset.Root padding={5} spaceY={8}>
                    <Field.Root>
                        <Field.Label>username</Field.Label>
                        <Input type="text" placeholder="Enter your username..." variant={"outline"} />
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>password</Field.Label>
                        <Input type="password" placeholder="Enter your password..." variant={"outline"} />
                    </Field.Root>
                    <Field.Root>
                        <Button width={"full"}>Login</Button>
                    </Field.Root>
                </Fieldset.Root>
            </Flex>
            {/* </Box> */}
        </Container>
    );
}
