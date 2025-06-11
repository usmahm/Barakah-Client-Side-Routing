import React, { useState } from "react";
import ContactCard from "../components/ContactCard";
import "../styles/ContactBook.css";

type Contact = { id: number; name: string; city: string };

const ContactBook: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  const addContact = () => {
    if (name && city) {
      setContacts([...contacts, { id: Date.now(), name, city }]);
      setName("");
      setCity("");
    }
  };

  const updateContact = (id: number, updated: Contact) => {
    setContacts(contacts.map((c) => (c.id === id ? updated : c)));
    setEditingId(null);
  };

  const deleteContact = (id: number) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <div className="contact-book">
      <h2>Contact Book</h2>
      <p>Keep track of where your friends live</p>
      <div className="add-contact-container">
        <div className="add-contact">
          <div className="label-input">
            <label htmlFor="Name">Name: </label>
            <input
              required
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="label-input">
            <label htmlFor="City">City: </label>
            <input
              required
              value={city}
              type="text"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <button className="add-contact-btn" onClick={addContact}>
            Add contact
          </button>
        </div>
      </div>
      <div className="contact-list">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            isEditing={editingId === contact.id}
            onEdit={() => setEditingId(contact.id)}
            onCancel={() => setEditingId(null)}
            onSave={updateContact}
            onDelete={deleteContact}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactBook;
