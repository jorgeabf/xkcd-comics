import TheLayout from "layouts/TheLayout.jsx";
import TituloPagina from "components/TituloPagina.jsx";
import fs from "fs/promises";
import Link from "next/link";

export default function Home({ latestComics }) {
   return (
      <TheLayout title="Comics XKCD">
         <TituloPagina>Latest Comics</TituloPagina>
         <div className="comics-grid">
            {latestComics.map((comic) => {
               return (
                  <Link
                     href={`/comic/${comic.id}`}
                     key={comic.id}>
                     <a>
                        <article className="comic-box">
                           <h3 className="comic-title">
                              {comic.title}
                           </h3>
                           <img
                              className="comic-img"
                              height="300"
                              src={comic.img}
                              alt={comic.alt}
                           />
                        </article>
                     </a>
                  </Link>
               );
            })}
         </div>
         <style jsx>
            {`
               .comics-grid {
                  display: flex;
                  flex-wrap: wrap;
                  gap: 3rem;
                  justify-content: space-between;
               }
               .comic-box {
                  overflow: hidden;
                  padding: 1em;
                  background-color: #fff;
                  box-shadow: 0 0 0 3px hsl(0, 0%, 0%, 0.6);
               }
               .comic-title {
                  margin-block: 0 1em;
                  text-align: center;
               }
               .comic-img {
                  margin-inline: auto;
                  display: block;
               }
            `}
         </style>
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
