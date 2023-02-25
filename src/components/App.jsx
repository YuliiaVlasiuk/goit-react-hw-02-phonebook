import { GlobalStyle } from "./GlobalStyle";
import  {Component} from 'react'
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";


export class App extends Component {
   state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: ''
  }
 
addContact=newContact=>
{  this.setState(prevState=>{

return{
 contacts:[...prevState.contacts,newContact]

}

  })
}

render(){
 
  return (
    <div >
  
    <ContactForm onSubmit={this.addContact}/>

    <ContactList items={this.state.contacts}/>
      <GlobalStyle/>
    </div>
  );}
};