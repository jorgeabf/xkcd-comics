import TheContainer from "../components/TheContainer.jsx";
import TheHeader from "../components/TheHeader.jsx";
import Head from "next/head";

export default function TheLayout({ children, title }) {
   return (
      <div className="the-layout">
         <Head>
            <title>{title}</title>
            <meta
               name="description"
               content="Comics for developers, new version."
            />
            <link
               rel="shortcut icon"
               href="/favicon.ico"
               type="image/x-icon"
            />
         </Head>
         <TheHeader />
         <TheContainer>
            <main className="main-content">{children}</main>
         </TheContainer>

         <style jsx>
            {`
               .the-layout {
                  min-height: 100vh;
                  background-color: hsl(0, 0%, 97%);
               }
               .main-content {
                  padding-block: 3em;
               }
            `}
         </style>
      </div>
   );
}
