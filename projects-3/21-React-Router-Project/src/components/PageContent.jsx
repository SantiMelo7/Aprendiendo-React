
// content de la pagina damos el titulo y todos los hijos
function PageContent({ title, children }) {
  
    return (
  
    <div className="content">
    
      <h1>{title}</h1>
    
      {children}
    
    </div>
  
  );

}

export default PageContent;