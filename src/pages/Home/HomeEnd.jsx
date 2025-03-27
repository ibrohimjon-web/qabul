import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./HomeEnd.css";

const HomeEnd = () => {
  // Consolidated FAQ data
  const faqSections = [
    {
      items: [
        {
          question:
            "These are short, famous texts in English from classic sources?",
          answer:
            "Written English will both improve your vocabulary and understanding.",
        },
        {
          question: "Like the Bible or Shakespeare?",
          answer:
            "The texts below are designed to help you develop while giving you an instant evaluation of your progress.",
        },
        {
          question:
            "Some texts have word definitions and explanations to help you?",
          answer:
            "Of course, not all these texts were originally written in English. The Bible, for example, is a translation.",
        },

        /////////////////////////////////////

        {
          question:
            "These are short, famous texts in English from classic sources?",
          answer:
            "Written English will both improve your vocabulary and understanding.",
        },
        {
          question: "Like the Bible or Shakespeare?",
          answer:
            "The texts below are designed to help you develop while giving you an instant evaluation of your progress.",
        },
        {
          question:
            "Some texts have word definitions and explanations to help you?",
          answer:
            "Of course, not all these texts were originally written in English. The Bible, for example, is a translation.",
        },
      ],
    },
    {
      items: [
        {
          question: "These texts are written in an old style of English?",
          answer:
            "But they are all well known in English today, and many of them express beautiful thoughts.",
        },
        {
          question:
            "Try to understand them, because the English that we speak today is based on?",
          answer:
            "English texts for beginners to practice reading and comprehension.",
        },
        {
          question:
            "What our great, great, great, great grandparents spoke before!",
          answer: "Online and for free. Practicing your comprehension.",
        },

        /////////////////////////////////////////////////

        {
          question: "These texts are written in an old style of English?",
          answer:
            "But they are all well known in English today, and many of them express beautiful thoughts.",
        },
        {
          question:
            "Try to understand them, because the English that we speak today is based on?",
          answer:
            "English texts for beginners to practice reading and comprehension.",
        },
        {
          question:
            "What our great, great, great, great grandparents spoke before!",
          answer: "Online and for free. Practicing your comprehension.",
        },
      ],
    },
  ];

  const [expandedItems, setExpandedItems] = useState({});

 const [activeItem, setActiveItem] = useState(null);

 const toggleAccordion = (sectionIndex, itemIndex) => {
   const key = `${sectionIndex}-${itemIndex}`;
   setActiveItem(activeItem === key ? null : key);
 };

  return (
    <section
      className="accordion-container"
      aria-label="Frequently Asked Questions"
    >
      <h2 className="title">Ko'p so'raladigan savollar</h2>
      <div className="accordion-wrapper">
        {faqSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="accordion-section">
            <div className="accordion">
              {section.items.map((item, itemIndex) => {
                const key = `${sectionIndex}-${itemIndex}`;
                const isExpanded = activeItem === key;

                return (
                  <div key={key} className="accordion-item">
                    <button
                      className={`accordion-header ${
                        isExpanded ? "expanded" : ""
                      }`}
                      onClick={() => toggleAccordion(sectionIndex, itemIndex)}
                      aria-expanded={isExpanded}
                      aria-controls={`content-${key}`}
                    >
                      <span>{item.question}</span>
                      <span className="toggle-icon">
                        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    </button>
                    {isExpanded && (
                      <div
                        id={`content-${key}`}
                        className="accordion-content"
                        role="region"
                      >
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeEnd;
