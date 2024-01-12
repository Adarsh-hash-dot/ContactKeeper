import { React, useState } from "react";
import ContactAvatar from "./ContactAvatar";
import { PencilIcon } from "@heroicons/react/outline";
import { TrashIcon } from "@heroicons/react/outline";
import { InformationCircleIcon } from "@heroicons/react/solid";

const Contacts = ({ contact, deleteContacts, handleEdit }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className="border-solid border-2">
        <div className="flex p-3 items-center justify-between  cursor-pointer">
          <div className="flex items-center" onClick={handleDropdownToggle}>
            <ContactAvatar name={contact.name} />
            <div className="p-2">{contact.name}</div>
            <div>
              <InformationCircleIcon className="w-6 h-6 text-blue-100" />
            </div>
          </div>
          <div className="flex p-3 items-center justify-between">
            <div onClick={() => handleEdit(contact)}>
              <PencilIcon className="w-6 h-6 m-1" />
            </div>
            <div
              className="text-red-500 ml-3"
              onClick={() => deleteContacts(contact.id)}
            >
              <TrashIcon className="w-6 h-6 m-1" />
            </div>
          </div>
        </div>
        {isDropdownOpen && (
          <div className="bg-white borde rounded overflow-hidden">
            <div className="p-4">
              <p className="text-gray-700">Email: {contact.email}</p>
              <p className="text-gray-700">Phone: {contact.phone}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contacts;
