import Link from "next/link";
import { Container, Text } from "@nextui-org/react";

export function Header() {
   return (
      <Container
         css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1em",
            backgroundColor: "hsl(0,0%,95%)",
         }}>
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
                  <a>Home</a>
               </Link>
               <Link href="/about">
                  <a>About</a>
               </Link>
               <Link href="/search">
                  <a>Search</a>
               </Link>
            </Container>
         </nav>
      </Container>
   );
}
