"use client";
import getGamesServerAction from "@/actions/products/getGamesServerAction";
import { GameType } from "@/lib/schema/types";
import { Box, Button, Card, Container, Field, Fieldset, Flex, Grid, HStack, Image, Input, Link, Skeleton, Stack, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiStar } from "react-icons/bi";
import { BsArrowRight, BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs";

export default function ProductsGrid() {
    const [page, setPage] = useState(1);
    const pageSize = 9;
    const router = useRouter();

    const { data, error, isLoading, refetch } = useQuery({
        queryKey: ["games", page, pageSize],
        queryFn: async () => await getGamesServerAction({
            page,
            pageSize
        }),

    })

    if (error) return <Text color={"red"}>something wrong happened</Text>

    const totalGames = data?.count
    const totalPages = (totalGames / pageSize).toFixed();
    console.log(data)
    const handlePrevPage = () => {
        if (page > 1) setPage(page - 1);
        refetch()
    };

    const handleNextPage = () => {
        setPage(page + 1);
        refetch();
    };

    return (
        <Container spaceY={5}>
            {
                isLoading ? (
                    <>
                        <HStack gap={6}>
                            <Skeleton variant="pulse"
                                width="full"
                                height="150px"
                                borderRadius={"xl"}
                            />
                        </HStack>
                        <Grid md={{
                            gridTemplateColumns: "repeat(3, 1fr)"
                        }} templateColumns="repeat(1, 1fr)" gap={6}>
                            {Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8]).map((ind, index) => (
                                <HStack gap={6} key={index}>
                                    <Skeleton variant="pulse"
                                        width="full"
                                        height="250px"
                                        borderRadius={"xl"}
                                    />
                                </HStack>
                            ))}
                        </Grid>
                    </>
                ) : (
                    <>
                        <Box background={"gray.950"} borderRadius={"xl"}>
                            <Stack padding={5}>
                                <Text>Search whatever you want</Text>
                            </Stack>
                            <Fieldset.Root flex={"auto"} padding={5} spaceY={8}>
                                <Field.Root>
                                    <Field.Label>Name</Field.Label>
                                    <Input type="text" placeholder="Search something" variant={"outline"} />
                                </Field.Root>
                            </Fieldset.Root>
                        </Box>
                        <Grid md={{
                            gridTemplateColumns: "repeat(3, 1fr)"
                        }} templateColumns="repeat(1, 1fr)" gap={6}>
                            {data?.results?.map((game: GameType) => (
                                <Card.Root borderRadius={"xl"} key={game.id}>
                                    <Card.Body>
                                        <Stack overflow={"hidden"} borderRadius={"xl"} mb={5} height={"200px"} alignItems={"center"} justifyContent={"center"} bg={"gray.100"} >
                                            <Image src={game.background_image} alt={game.name} />
                                        </Stack>
                                        <Flex justifyContent={"space-between"} alignItems={"center"}>
                                            <Card.Title>
                                                <Link href={"/products/" + game.slug}>
                                                    {game.name}
                                                </Link>
                                            </Card.Title>
                                            <Flex gap={1} alignItems={"center"}>
                                                {game.rating}
                                                <BiStar />
                                            </Flex>
                                        </Flex>
                                        <Flex paddingY={2}>
                                            {game.genres.map(genre => (
                                                <Stack fontSize={"sm"} color={"gray.400"} key={genre.id}>{genre.name}</Stack>
                                            ))}
                                        </Flex>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Button onClick={() => router.push("/products/" + game.slug)} width={"full"} variant={"subtle"}>Show Game
                                            <BsArrowRight />
                                        </Button>
                                    </Card.Footer>
                                </Card.Root>
                            ))}
                        </Grid>
                        <Flex width={"full"} justifyContent={"space-between"} alignItems={"center"} marginTop={5}>
                            <Button onClick={handlePrevPage} disabled={page === 1} variant={"ghost"}>
                                <BsFillArrowLeftSquareFill />
                                Previous
                            </Button>
                            <Text visibility={"hidden"} md={{
                                visibility: "visible"
                            }}>
                                Page {page} from {totalPages} pages
                            </Text>
                            <Button onClick={handleNextPage} variant={"ghost"}>
                                Next
                                <BsFillArrowRightSquareFill />
                            </Button>
                        </Flex>
                    </>
                )}
        </Container>
    )
}