export default async function getTmdbData(
  endpoint: string,
  resolve: Function | null = null
) {
  "use server";
  return fetch(`https://api.themoviedb.org/3/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
      accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      const result = (json.results || []).slice(0, 5);
      return resolve ? resolve(result) : result;
    });
}
