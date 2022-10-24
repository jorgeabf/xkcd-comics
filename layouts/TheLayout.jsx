import { Container } from "@nextui-org/react";
import { Header } from "../components/Header.js";

export default function TheLayout({ children }) {
   return (
      <>
         <Header />
         <Container>
            <main>{children}</main>
         </Container>
      </>
   );
}
