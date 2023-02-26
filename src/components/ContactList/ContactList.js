
export const ContactList = ({ items}) => {
     
  return (
    <ul>
        {items.map(item => (
           <li key={item.id}  > 
          {item.name} : {item.number}
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