import Sidebar from "@/components/pages/dashboard/Sidebar";
import BreadCrumb from "@/components/shared/BreadCrumb";
import DashboardProviders from "@/lib/providers/DashboardProviders";
import { Box, Container, Flex, Text } from "@chakra-ui/react";


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <DashboardProviders>
            <Container padding={10}>
                <Flex gap={5}>
                    {/* sidebar section */}
                    <Sidebar />
                    <Container maxWidth={"3/4"}>
                        <Flex direction={"column"} gap={5}>
                            <Box padding={5} borderRadius={"2xl"} background={"gray.800"}>
                                <BreadCrumb />
                            </Box>
                            <Box padding={5} borderRadius={"2xl"} background={"gray.800"}>
                                {children}
                            </Box>
                        </Flex>
                    </Container>
                </Flex>
            </Container>
        </DashboardProviders>
    );
}
