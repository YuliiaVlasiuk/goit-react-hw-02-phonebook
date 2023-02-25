
export const ContactList = ({ items}) => {
     
  return (
    <ul>
        {items.map(item => (
           <li key={item.id}  style={{marginLeft:'150px'}}> 
          {item.name} : {item.number}

          {/* <Recipe item={item} onDelete={onDelete} onSelect={onSelect}/> */}
       </li>
         ))}
       </ul>
     );
  };
  
//   RecipeList.propTypes={
//   items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.string.isRequired})).isRequired,
//   onDelete:PropTypes.func.isRequired,
//   onSelect:PropTypes.func.isRequired
//   }