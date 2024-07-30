// pages/admin.tsx
'use client';

import { useEffect, useState } from 'react';
import Modal from '@/components/Modal';
import { useRouter } from "next/navigation";

interface Entry {
  _id: string;
  name: string;
  contact: string;
  email: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  [key: string]: any;
}

export default function EntriesPage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [selectedEntry, setSelectedEntry] = useState<Entry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch('/api/issue')
      .then((response) => response.json())
      .then((data) => setEntries(data));
  }, []);

  const handleCardClick = (entry: Entry) => {
    setSelectedEntry(entry);
    setEditTitle(entry.title);
    setEditDescription(entry.description);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEntry(null);
    setIsEditing(false);
  };

  const handleClick = () => {
    router.push("/admin_forms/issue_form");
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = async () => {
    if (!selectedEntry) return;
  
    try {
      const response = await fetch(`/api/issues/${selectedEntry._id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        setEntries((prevEntries) =>
          prevEntries.filter((entry) => entry._id !== selectedEntry._id)
        );
        handleCloseModal();
      } else {
        console.error("Failed to delete the entry.");
      }
    } catch (error) {
      console.error("An error occurred while deleting the entry:", error);
    }
  };

  const handleSaveClick = async () => {
    if (!selectedEntry) return;

    const updatedEntry = {
      ...selectedEntry,
      title: editTitle,
      description: editDescription,
    };

    try {
      const response = await fetch(`/api/issues/${selectedEntry._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedEntry),
      });

      if (response.ok) {
        setEntries((prevEntries) =>
          prevEntries.map((entry) =>
            entry._id === selectedEntry._id ? updatedEntry : entry
          )
        );
        handleCloseModal();
      } else {
        console.error("Failed to update the entry.");
      }
    } catch (error) {
      console.error("An error occurred while updating the entry:", error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col  bg-[#1c1c1c] text-white">
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleClick} className="px-6 py-2 text-2xl rounded-full bg-[#4d4dd3] text-white hover:bg-blue-500 mt-5">Add new issue</button>
      </div>

      <h1 style={{marginTop: '50px', marginLeft: '20px', fontWeight: 'bold', fontSize: '22px' }}>Modify issue:</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {entries.map((entry) => (
          <div 
            key={entry._id} 
            onClick={() => handleCardClick(entry)} 
            style={{
              border: '2px solid black',  // Thicker border
              margin: '10px',
              padding: '10px',
              cursor: 'pointer',
              width: '200px',
              backgroundColor: '#fff',  // White background
              color: 'black',           // Black text
              fontWeight: 500,       // Bold text
            }}>
            <h2 style={{ marginBottom: '10px' }}><strong>Title: </strong>{entry.title}</h2>
            <p 
              style={{
                
                bottom: '15px',
                left: '10px',
                fontSize: '12px',       // Smaller font size
                color: 'gray',          // Gray color for smaller text
              }}
            >
              Click to know more
            </p>
          </div>
        ))}
      </div>
      <Modal show={isModalOpen} onClose={handleCloseModal}>
        {selectedEntry && (
          <div style={{ color: 'black' }}>
            <h2><strong>Title:</strong></h2>
            {isEditing ? (
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                style={{ width: '100%', marginBottom: '10px' }}
              />
            ) : (
              <p>{selectedEntry.title}</p>
            )}
            <h2><strong>Description:</strong></h2>
            {isEditing ? (
              <textarea
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                style={{ width: '100%', marginBottom: '10px' }}
              />
            ) : (
              <p>{selectedEntry.description}</p>
            )}
            <p><strong>Name:</strong> {selectedEntry.name}</p>
            <p><strong>Contact:</strong> {selectedEntry.contact}</p>
            <p><strong>Email:</strong> {selectedEntry.email}</p>
            <p><strong>Created At:</strong> {new Date(selectedEntry.createdAt).toLocaleString()}</p>
            <p><strong>Updated At:</strong> {new Date(selectedEntry.updatedAt).toLocaleString()}</p>
            {isEditing ? (
              <button onClick={handleSaveClick} style={{ marginTop: '10px', padding: '10px', backgroundColor: '#4d4dd3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Save
              </button>
            ) : (
              <div>
              <button onClick={handleEditClick} style={{ marginTop: '10px', padding: '10px', backgroundColor: '#4d4dd3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Edit
              </button>
              <button
      onClick={handleDeleteClick}
      style={{ marginTop: '10px', padding: '10px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
    >
      Delete
    </button>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}
