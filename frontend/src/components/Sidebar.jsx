import React from 'react';
import DottedBackground from './DottedBackground';
import TypingAnimation from './TypingAnimation';

const Sidebar = ({ quote }) => (
  <aside className="hidden lg:block w-1/4 h-dvh bg-white dark:bg-gray-800 relative overflow-hidden">
    <DottedBackground />
    <div className="z-10 p-6 h-full flex items-center justify-center">
      <p className=" text-2xl font-bold text-purple-800 dark:text-purple-300">
        <TypingAnimation text={quote} />
      </p>
    </div>
  </aside>
);

export default Sidebar;