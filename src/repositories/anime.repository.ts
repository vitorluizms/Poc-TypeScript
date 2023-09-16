import db from "@/database/connection.database";
import { Anime, CreateAnime } from "@/protocols/protocol";

async function addAnime(body: CreateAnime) {
  const { name, gender, episodes, seasons } = body;
  return await db.query(
    `INSERT INTO animes (name, gender, episodes, seasons) VALUES ($1, $2, $3, $4);`,
    [name, gender, episodes, seasons]
  );
}

async function validateAnime(parameter: string | number): Promise<number> {
  let query = "";
  if (typeof parameter === "number") {
    query += "id";
  } else {
    query += "name";
  }

  const result = await db.query(`SELECT * FROM animes WHERE ${query} = $1;`, [
    parameter,
  ]);
  return result.rowCount;
}

async function getAnimes(): Promise<Anime[]> {
  const result = await db.query(`SELECT * FROM animes;`);
  return result.rows;
}

async function updateAnime(query: string, params: Array<number>) {
  return await db.query(`UPDATE animes SET ${query} WHERE id = $1;`, params);
}

async function deleteAnime(id: number) {
  return await db.query(`DELETE FROM animes WHERE id = $1;`, [id]);
}

export const animeRepository = {
  addAnime,
  validateAnime,
  getAnimes,
  updateAnime,
  deleteAnime,
};
