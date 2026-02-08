"use client";
import { GameType } from "@/lib/schema/types";
import { Button, Card, Container, Flex, Grid, HStack, Image, Link, Skeleton, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsArrowRight, BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs";
import useSWR from "swr";


const fetcher = async (url: string) => {
    const res = await fetch(url);
    return res.json();
}


export default function ProductsGrid() {
    const [page, setPage] = useState(1);
    const pageSize = 9;
    const url = "https://api.rawg.io/api/games?key=e47aec3858284518ae37af75d75f8ee4&page=" + page + "&page_size=" + pageSize;
    const router = useRouter();

    const { data, error, isLoading } = useSWR(url, fetcher);

    if (error) return <Text color={"red"}>{error}</Text>

    const totalGames = data?.count
    const totalPages = (totalGames / pageSize).toFixed();
    console.log(data)
    const handlePrevPage = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNextPage = () => {
        setPage(page + 1);
    };

    return (
        <Container>
            {
                isLoading ? (
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
                ) : (
                    <>
                        <Grid md={{
                            gridTemplateColumns: "repeat(3, 1fr)"
                        }} templateColumns="repeat(1, 1fr)" gap={6}>
                            {data?.results?.map((game: GameType) => (
                                <Card.Root borderRadius={"xl"} key={game.id}>
                                    <Card.Body>
                                        <Stack overflow={"hidden"} borderRadius={"xl"} mb={5} minHeight={"150px"} alignItems={"center"} justifyContent={"center"} bg={"gray.100"} >
                                            <Image src={game.background_image} alt={game.name} />
                                        </Stack>
                                        <Card.Title>
                                            <Link href={"/products/" + game.slug}>
                                                {game.name}
                                            </Link>
                                        </Card.Title>
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