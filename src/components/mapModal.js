// MapModal.js

import React from 'react';
import Modal from 'react-modal';

const MapModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Map Modal"
      className="modal"
      overlayClassName="modal-overlay"
    >
      {/* Содержимое модального окна */}
      <div className="flex justify-end">
        <button onClick={closeModal} className="text-xl font-bold p-2">
          &times;
        </button>
      </div>
      <div className="p-4">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23392.93607424794!2d74.694656!3d42.8703744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1700891957198!5m2!1sru!2skg"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Modal>
  );
};

export default MapModal;
