import React, { useState } from "react";
import "../styles/ContactCard.css";

type Props = {
  contact: { id: number; name: string; city: string };
  isEditing: boolean;
  onEdit: () => void;
  onCancel: () => void;
  onSave: (
    id: number,
    updated: { id: number; name: string; city: string }
  ) => void;
  onDelete: (id: number) => void;
};

const ContactCard: React.FC<Props> = ({
  contact,
  isEditing,
  onEdit,
  onCancel,
  onSave,
  onDelete,
}) => {
  const [name, setName] = useState(contact.name);
  const [city, setCity] = useState(contact.city);

  return (
    <div className="contact-card">
      {isEditing ? (
        <div>
          <div className="label-input" id="label-input-edit">
            <label htmlFor="Name">Name: </label>
            <input
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="name"
            />
          </div>
          <div className="label-input" id="label-input-edit">
            <label htmlFor="City">City: </label>
            <input
              value={city}
              type="text"
              onChange={(e) => setCity(e.target.value)}
              placeholder="city"
            />
          </div>
          <div id="edit-buttons">
            <button id="delete-button" onClick={() => onDelete(contact.id)}>
              Delete
            </button>
            <div>
              <button onClick={onCancel}>Cancel</button>
              <button
                id="save-button"
                onClick={() =>
                  onSave(contact.id, { id: contact.id, name, city })
                }
              >
                Save
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p id="contact-name">{contact.name}</p>
          <p id="contact-location">{contact.city}</p>
          <button className="edit-btn" onClick={onEdit}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactCard;
