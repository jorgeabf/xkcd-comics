function TheContainer({ children }) {
   return (
      <div className="the-container">
         {children}
         <style jsx>{`
            .the-container {
               width: 90%;
               max-width: 1300px;
               margin-inline: auto;
            }
         `}</style>
      </div>
   );
}

export default TheContainer;
