"use server";


export default async function getGamesServerAction() {
    const res = await fetch("https://api.rawg.io/api/games?key=e47aec3858284518ae37af75d75f8ee4");
  const data = await res.json();
  return data;
}