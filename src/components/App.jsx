import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import FilterName from './Filter/Filter';
import { Phonebook, PhonebookTitle, PhonebookSubTitle } from './App.styled';

export const App = () => {
  return (
    <Phonebook>
      <PhonebookTitle>PhoneBook</PhonebookTitle>
      <ContactForm />
      <PhonebookSubTitle>Contacts</PhonebookSubTitle>
      <FilterName />
      <ContactList />
    </Phonebook>
  );
};