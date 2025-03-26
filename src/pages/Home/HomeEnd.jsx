import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./HomeEnd.css";

const HomeEnd = () => {
  // Data for the accordion items
  const faqs1 = [
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
  ];

  const faqs2 = [
    {
      question:
        "These are short, famous texts in English from classic0 sources?",
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
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to toggle the expansion of an accordion item
  const toggleAccordion = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className="accordion-container">
      <h2 className="title">Ko'p so'raladigan savollar</h2>
      <div className="accordion-wrapper">
        <div className="accordion">
          {faqs1.map((item, index) => (
            <div key={index} className="accordion-item">
              <div
                className={`accordion-header ${
                  expandedIndex === index ? "expanded" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.question}</span>
                <span className="toggle-icon">
                  {expandedIndex === index ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </span>
              </div>
              {expandedIndex === index && (
                <div className="accordion-content">{item.answer}</div>
              )}
            </div>
          ))}
        </div>

        <div className="accordion">
          {faqs2.map((item, index) => (
            <div key={index} className="accordion-item">
              <div
                className={`accordion-header ${
                  expandedIndex === index + 6 ? "expanded" : ""
                }`}
                onClick={() => toggleAccordion(index + 6)}
              >
                <span>{item.question}</span>
                <span className="toggle-icon">
                  {expandedIndex === index + 6 ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </span>
              </div>
              {expandedIndex === index + 6 && (
                <div className="accordion-content">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeEnd;
