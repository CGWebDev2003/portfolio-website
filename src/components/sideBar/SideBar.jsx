// components/Sidebar.jsx
import { motion } from 'framer-motion';
import "./sideBar.css";

export function SideBar({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar Panel */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-120%' }}
        exit={{ x: '-100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="sideBar"
      >
        <div className="sideBarContent">
            <h1 className='sideBarTitle'>MENÜ</h1>
            <nav class="sideBarNavigation">
                <a className="sideBarNavLink" href="/">Home</a>
            </nav>
        </div>
      </motion.div>
    </>
  );
}
