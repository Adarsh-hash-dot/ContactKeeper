import "./App.css";
import { Contacts, Navbar } from "./components";
import { useEffect, useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(()=> {
    async function fetchContacts() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")

      if (response.ok) {
        const data = await response.json()
        setContacts(data)
      } else {
        console.log("Something went wrong")
      }
    }

    fetchContacts()
  }, [])

  function deleteContacts(id) {
    const newContacts = contacts.filter((c) => c.id !== id);
    setContacts(newContacts);
  }

  function editContact(id, contact) {
    const newContacts = contacts.map((c) => c.id === id ? contact : c);
    setContacts(newContacts);
  }


  return (
    <div className="max-w-xl mx-auto">
      <Navbar></Navbar>

      {contacts.map((c) => {
        return <Contacts key={c.id} contact={c} deleteContacts={deleteContacts} editContact={editContact} />
      })}


    </div>
  );
}

export default App;
