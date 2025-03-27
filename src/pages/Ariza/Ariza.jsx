import React from "react";
import "./Ariza.css";

const Ariza = () => {
  const applications = [
    {
      id: "0000013",
      name: "Toronto University",
      date: "19.02.2025",
      status: "Rad etildi",
      action: "Ko'rib chiqish",
    },
    {
      id: "0000012",
      name: "Cambridge University",
      date: "24.02.2025",
      status: "Ko'rib chiqilmoqda",
      action: "Bekor qilish",
    },
    {
      id: "0000013",
      name: "Toronto University",
      date: "20.02.2025",
      status: "Qabul qilindi",
      action: "Bekor qilish",
    },
  ];

  const handleActionClick = (action, id) => {
    // You would typically handle actions here
    console.log(`Action: ${action} for application ${id}`);
    // Add your action logic here (API calls, state updates, etc.)
  };

  const getStatusClass = (status) => {
    const statusMap = {
      "Rad etildi": "rejected",
      "Ko'rib chiqilmoqda": "in-progress",
      "Qabul qilindi": "accepted",
    };
    return statusMap[status] || "";
  };

  const getActionClass = (action) => {
    const actionMap = {
      "Ko'rib chiqish": "review",
      "Bekor qilish": "cancel",
    };
    return actionMap[action] || "";
  };

  return (
    <div className="ariza-container">


      <div className="table-responsive">
        <table className="ariza-table">
          <thead>
            <tr>
              <th scope="col">Ariza raqami</th>
              <th scope="col">Ta'lim muassasi</th>
              <th scope="col">Yuborilgan sana</th>
              <th scope="col">Holati</th>
              <th scope="col">Amal</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={`${app.id}-${index}`}>
                <td data-label="Ariza raqami">{app.id}</td>
                <td data-label="Nomi">{app.name}</td>
                <td data-label="Sana">{app.date}</td>
                <td data-label="Holati">
                  <span
                    className={`status-badge status-${getStatusClass(
                      app.status
                    )}`}
                    aria-label={`Status: ${app.status}`}
                  >
                    {app.status}
                  </span>
                </td>
                <td data-label="Amal">
                  <button
                    className={`action-btn action-${getActionClass(
                      app.action
                    )}`}
                    onClick={() => handleActionClick(app.action, app.id)}
                    aria-label={`${app.action} ${app.id}`}
                  >
                    {app.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ariza;
