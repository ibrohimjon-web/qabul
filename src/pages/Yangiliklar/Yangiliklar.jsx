import "./Yangiliklar.css";
import { useState } from "react";

const Yangiliklar = () => {
  const newsItems = [
    {
      id: 1,
      title: "Imtihonda tushishi mumkin bo'lgan TOP-10 bog'liq asar ro'yxati",
      source: "Büströsl",
      status: "e'lon qilingan",
      details:
        "Bu yilgi imtihonda tushishi mumkin bo'lgan eng muhim asarlar ro'yxati e'lon qilindi. Ro'yxatda 10 ta asar mavjud bo'lib, ularning barchasi o'quv dasturiga kiritilgan.",
    },
    {
      id: 2,
      title: "Davlat OTMlarida kontrakt to'lov muddatlari",
      source: "Büströsl",
      status: "e'lon qilingan",
      details:
        "Yangi o'quv yili uchun kontrakt to'lovlari 3 qismga bo'lingan holda amalga oshiriladi. Birinchi to'lov 15 sentyabrgacha, ikkinchi to'lov 15 dekabrgacha, uchinchi to'lov esa 15 martgacha amalga oshirilishi kerak.",
    },
    // ... (other news items with added details)
  ];

  const [expandedItems, setExpandedItems] = useState({});

  const toggleDetails = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="yangiliklar-container">
      <h1>Ta'lim yangiliklari</h1>
      <div className="yangiliklar-list">
        {newsItems.map((item) => (
          <div key={item.id} className="yangilik-card">
            <div className="yangilik-content">
              <h3>{item.title}</h3>
              <p className="source">Manba: {item.source}</p>

              {item.status && (
                <p className="meta-info">Status: {item.status}</p>
              )}
              {item.details && expandedItems[item.id] && (
                <div className="details-content">
                  <p>{item.details}</p>
                </div>
              )}

              <button
                className="batafsil-btn"
                onClick={() => toggleDetails(item.id)}
              >
                {expandedItems[item.id] ? "Yopish" : "Batafsil"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Yangiliklar;
