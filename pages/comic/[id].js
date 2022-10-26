import TheLayout from "layouts/TheLayout.jsx";
import TituloPagina from "components/TituloPagina.jsx";
import Link from "next/link";
import { readFile, readdir, stat } from "fs/promises";
import { basename } from "path";

export default function Comic({
   id,
   img,
   alt,
   title,
   hasPrevious,
   hasNext,
   prevId,
   nextId,
}) {
   return (
      <TheLayout title={`Comic ${id} | Comics XKCD`}>
         <section className="comic-page">
            <TituloPagina>
               {id} - {title}
            </TituloPagina>
            <img
               className="comic-img"
               src={img}
               alt={alt}
            />
            <p className="comic-parrafo">{alt}</p>
            <div className="pagination">
               {hasPrevious && (
                  <Link href={`/comic/${prevId}`}>
                     <a>⇐ PREV</a>
                  </Link>
               )}

               {hasNext && (
                  <Link href={`/comic/${nextId}`}>
                     <a>NEXT ⇒</a>
                  </Link>
               )}
            </div>

            <style jsx>{`
               .comic-page {
                  width: 100%;
                  max-width: 70rem;
                  margin-inline: auto;
                  padding: 2em 1em;
                  background-color: #fff;
               }
               .comic-img {
                  margin-inline: auto;
                  display: block;
               }

               .comic-parrafo {
                  max-width: 80ch;
                  margin-inline: auto;
                  padding: 1em;
                  text-align: center;
               }

               .pagination {
                  margin-inline: auto;
                  background-color: #fff;
                  display: flex;
                  justify-content: space-between;
                  gap: 1em;
               }
            `}</style>
         </section>
      </TheLayout>
   );
}

export async function getStaticPaths() {
   const files = await readdir("./comics");

   const paths = files.map((file) => {
      const id = basename(file, ".json");
      return { params: { id } };
   });

   return {
      paths,
      fallback: false,
   };
}

export async function getStaticProps({ params }) {
   const { id } = params;

   const content = await readFile(
      `./comics/${id}.json`,
      "utf8"
   );
   const comic = JSON.parse(content);

   const idNumber = +id;
   const prevId = idNumber - 1;
   const nextId = idNumber + 1;

   const [prevResult, nextResult] =
      await Promise.allSettled([
         stat(`./comics/${prevId}.json`),
         stat(`./comics/${nextId}.json`),
      ]);

   const hasPrevious = prevResult.status === "fulfilled";
   const hasNext = nextResult.status === "fulfilled";

   return {
      props: {
         ...comic,
         hasPrevious,
         hasNext,
         prevId,
         nextId,
      },
   };
}
