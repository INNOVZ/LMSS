import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type AccordionItem = {
  /** Title displayed in the header */
  title: string;
  /** Content shown when expanded */
  content: React.ReactNode;
};

export type AccordionProps = {
  /** List of accordion items */
  items: AccordionItem[];
  /** Allow multiple panels to be open simultaneously */
  allowMultiple?: boolean;
};


const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
}) => {
  // Track which indices are open
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices(allowMultiple ? [...openIndices, index] : [index]);
    }
  };

  return (
    <div className="border rounded-lg divide-y">
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);
        return (
          <div key={idx}>
            <button
              onClick={() => toggleIndex(idx)}
              aria-expanded={isOpen}
              className="pointer w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500"
            >
              <span className="font-medium text-gray-900">{item.title}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
              >
                <path fill="currentColor" d="M10 12l-4-4h8l-4 4z" />
              </svg>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { height: "auto", opacity: 1 },
                    collapsed: { height: 0, opacity: 0 },
                  }}
                  transition={{ duration: 0.1, ease: "easeInOut" }}
                  className="overflow-hidden px-4"
                >
                  <div className="py-2 text-gray-700">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;

/* Usage Example (e.g., in pages/index.tsx):

import React from 'react';
import Accordion, { AccordionItem } from '@/components/Accordion';

const items: AccordionItem[] = [
  { title: 'What is Next.js?', content: <p>Next.js is a React framework for production.</p> },
  { title: 'Why use an Accordion?', content: <p>It helps organize content into expandable sections.</p> },
  { title: 'How to customize?', content: <p>Adjust Tailwind classes or framer-motion settings as needed.</p> },
];

const HomePage: React.FC = () => (
  <div className="max-w-xl mx-auto mt-10">
    <Accordion items={items} allowMultiple />
  </div>
);

export default HomePage;
*/
