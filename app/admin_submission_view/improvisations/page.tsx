
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
  const router = useRouter();


  useEffect(() => {
    fetch('/api/improvise')
      .then((response) => response.json())
      .then((data) => setEntries(data));
  }, []);

  const handleCardClick = (entry: Entry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEntry(null);
  };

  
  return (
    <div className="flex min-h-screen flex-col  bg-[#1c1c62] text-white">
     

      <h1 style={{marginTop: '25px', marginLeft: '20px', fontWeight: 'bold', fontSize: '22px' }}>Improvisations suggested by users:</h1>
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
            <h2><strong>Title:</strong>{selectedEntry.title}</h2>
            <p><strong>User Name:</strong> {selectedEntry.name}</p>
            <p><strong>Contact:</strong> {selectedEntry.contact}</p>
            <p><strong>Email:</strong> {selectedEntry.email}</p>
            <p><strong>Description:</strong> {selectedEntry.description}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}
