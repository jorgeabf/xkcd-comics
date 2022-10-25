import TheLayout from "../layouts/TheLayout.jsx";
import fs from "fs/promises";
import Link from "next/link";

export default function Home({ latestComics }) {
   return (
      <TheLayout>
         <h2>Latest Comics</h2>
         <div
            style={{
               display: "flex",
               flexWrap: "wrap",
               gap: "3rem",
               justifyContent: "space-between",
            }}>
            {latestComics.map((comic) => {
               return (
                  <Link
                     href={`/comic/${comic.id}`}
                     key={comic.id}>
                     <a>
                        <h3>{comic.title}</h3>
                        <img
                           height="300"
                           src={comic.img}
                           alt={comic.alt}
                        />
                     </a>
                  </Link>
               );
            })}
         </div>
      </TheLayout>
   );
}

export async function getStaticProps(context) {
   const files = await fs.readdir("./comics");

   const latestComicsFiles = files.slice(-8, files.length);

   const promisesReadFiles = latestComicsFiles.map(
      async (file) => {
         const content = await fs.readFile(
            `./comics/${file}`,
            "utf8"
         );
         return JSON.parse(content);
      }
   );

   const latestComics = await Promise.all(
      promisesReadFiles
   );

   return {
      props: { latestComics },
   };
}
