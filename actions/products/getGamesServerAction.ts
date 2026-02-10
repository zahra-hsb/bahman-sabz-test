"use server";


export default async function getGamesServerAction({
    page,
    pageSize
}: {
    page: number,
    pageSize: number
}) {
    const res = await fetch(process.env.NEXT_PUBLIC_GAME_API + "games?key=" + process.env.GAME_API_KEY + "&page=" + page + "&page_size=" + pageSize);

    const data = await res.json();
    return data;
}