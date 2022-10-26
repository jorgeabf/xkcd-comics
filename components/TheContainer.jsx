function TheContainer({ children }) {
   return (
      <div className="the-container">
         {children}
         <style jsx>{`
            .the-container {
               width: 90%;
               max-width: 1400px;
               margin-inline: auto;
            }
         `}</style>
      </div>
   );
}

export default TheContainer;
