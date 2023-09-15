export type Anime = {
  id: number;
  name: string;
  gender: string;
  episodes: number;
  seasons: number;
};

export type CreateAnime = Omit<Anime, "id">;

export type Error = {
  code: number;
  message: string;
};
