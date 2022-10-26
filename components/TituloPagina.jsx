function TituloPagina({ children }) {
   return (
      <h2 className="titulo-pagina">
         {children}
         <style jsx>
            {`
               .titulo-pagina {
                  max-width: 80ch;
                  margin-block: 0 1em;
                  text-transform: uppercase;
                  text-align: center;
                  font-size: 2.5rem;
                  font-weight: bold;
               }
            `}
         </style>
      </h2>
   );
}

export default TituloPagina;
