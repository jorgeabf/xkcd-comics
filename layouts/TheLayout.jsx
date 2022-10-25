import TheContainer from "../components/TheContainer.jsx";
import TheHeader from "../components/TheHeader.jsx";

export default function TheLayout({ children }) {
   return (
      <div className="the-layout">
         <TheHeader />
         <TheContainer>
            <main className="main-content">{children}</main>
         </TheContainer>

         <style jsx>
            {`
               .the-layout {
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
