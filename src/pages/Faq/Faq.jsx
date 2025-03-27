import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./Faq.css";

const Faq = () => {
  const faqItems = [
    {
      question: "Mohirdev kurslari qanday usulda o'tiladi?",
      answer:
        "Bizning kurslarimiz onlayn tarzda o'tiladi va siz istalgan vaqtda darslarni ko'rishingiz mumkin.",
    },
    {
      question: "Kurs narxlari qancha?",
      answer:
        "Kurs narxlari turi va davomiyligiga qarab farq qiladi. Batafsil ma'lumot uchun saytimizdagi kurslar bo'limiga qarang.",
    },
    {
      question: "Kursni tugatgandan keyin sertifikat olish mumkinmi?",
      answer:
        "Ha, barcha kurslarni muvaffaqiyatli tamomlagan talabagalar sertifikat bilan taqdirlanadi.",
    },
    {
      question: "To'lovni qanday amalga oshirish mumkin?",
      answer:
        "To'lovni bank orqali, plastik karta yoki elektron hamyonlar orqali amalga oshirishingiz mumkin.",
    },
    {
      question: "Dars materiallariga qanday kirish mumkin?",
      answer:
        "Ro'yxatdan o'tganingizdan so'ng, shaxsiy kabinetingiz orqali barcha dars materiallariga kirishingiz mumkin.",
    },
    {
      question: "Mentorlar bilan bog'lanish imkoniyati bormi?",
      answer:
        "Ha, har bir kurs uchun alohida chat guruhlari mavjud bo'lib, unda mentorlar bilan bevosita muloqot qilishingiz mumkin.",
    },
    {
      question: "Kurs davomiyligi qancha?",
      answer:
        "Kurslar odatda 2 oydan 6 oygacha davom etadi, lekin bu kursning murakkabligiga bog'liq.",
    },
    {
      question: "Darslar qanday tilda o'tiladi?",
      answer:
        "Darslar asosan o'zbek tilida, ba'zi maxsus kurslar esa ingliz tilida o'tiladi.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-container">
      <h2 className="faq-title">Ko'p so'raladigan savollar</h2>
      <div className="faq-list">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() => toggleItem(index)}
              aria-expanded={activeIndex === index}
            >
              <span>{item.question}</span>
              <span className="faq-icon">
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </button>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
