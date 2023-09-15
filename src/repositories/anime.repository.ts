import db from "@/database/connection.database";
import { Anime, CreateAnime } from "@/protocols/protocol";

async function addAnime(body: CreateAnime) {
  const { name, gender, episodes, seasons } = body;
  return await db.query(
    `INSERT INTO animes (name, gender, episodes, seasons) VALUES ($1, $2, $3, $4);`,
    [name, gender, episodes, seasons]
  );
}

async function validateAnime(name: string): Promise<number> {
  const result = await db.query(`SELECT * FROM animes WHERE name = $1;`, [
    name,
  ]);
  return result.rowCount;
}

async function getAnimes(): Promise<Anime[]> {
  const result = await db.query(`SELECT * FROM animes;`);
  return result.rows;
}
export const animeRepository = { addAnime, validateAnime, getAnimes };
