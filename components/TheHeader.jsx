import Link from "next/link";
import { Container, Text } from "@nextui-org/react";
import TheContainer from "./TheContainer";

export default function TheHeader() {
   return (
      <header className="the-header">
         <TheContainer>
            <div className="header-container">
               <Text
                  h1
                  size={30}
                  weight="bold"
                  css={{
                     textGradient:
                        "45deg, $gray700 0%, $gray900 70%",
                  }}>
                  Comics xkcd
               </Text>
               <nav>
                  <Container
                     fluid
                     css={{
                        display: "flex",
                        gap: "1em",
                        padding: "0",
                     }}>
                     <Link href="/">
                        <a className="nav-link">Home</a>
                     </Link>
                     <Link href="/search">
                        <a className="nav-link">Search</a>
                     </Link>
                  </Container>
               </nav>
            </div>
         </TheContainer>

         <style jsx>
            {`
               .the-header {
                  padding-block: 0.5em;
                  background-color: hsl(0, 0%, 93%);
               }

               .header-container {
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  gap: 1em;
               }

               .nav-link {
                  text-transform: uppercase;
                  font-weight: bold;
                  color: hsl(0, 0%, 30%);
               }
            `}
         </style>
      </header>
   );
}
