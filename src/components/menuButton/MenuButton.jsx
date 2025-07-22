import { useState } from 'react';
import { SideBar } from '../sideBar/SideBar';
import "./menuButton.css";

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(prev => !prev);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="menuButton"
        aria-label="Toggle Menu"
      >
        {isOpen ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
      </button>

      <SideBar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}