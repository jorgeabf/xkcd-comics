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
         }}>
         <Text
            h1
            size={30}
            weight="bold"
            css={{
               textGradient:
                  "45deg, $blue700 0%, $red700 50%",
            }}>
            Comics App
         </Text>
         <nav>
            <Container
               css={{ display: "flex", gap: "1em" }}>
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
