export const ContactSearch = ({ items}) => {
     
    return (
   <div style={{marginLeft:'150px'}}>
  <h3>Find contacts by name</h3>
  
      <ul>
          {items.map(item => (
             <li key={item.id}  > 
            {item.name} : {item.number}
  
            {/* <Recipe item={item} onDelete={onDelete} onSelect={onSelect}/> */}
         </li>
           ))}
         </ul>
         </div>
       );
  
  
    };