import { useState } from "react";
import "./Hujjat.css";
import { BiImageAdd } from "react-icons/bi";

const Hujjat = () => {
  const [images, setImages] = useState({
    passport: null,
    diploma: null,
    additional: null,
  });
  const [noAdditionalDocs, setNoAdditionalDocs] = useState(false);

  const handleImageChange = (type) => (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImages((prev) => ({
        ...prev,
        [type]: URL.createObjectURL(file),
      }));
    }
  };

  const handleCheckboxChange = () => {
    setNoAdditionalDocs(!noAdditionalDocs);
    if (!noAdditionalDocs) {
      setImages((prev) => ({ ...prev, additional: null }));
    }
  };

  return (
    <div className="hujjat-container">
      <div className="hujjat-section">
        <h4 className="section-title">Filialni tanlash</h4>
        <select className="custom-select">
          <option value="">Masalan: Oxford</option>
          <option value="1">Oxford markazi</option>
          <option value="2">London filiali</option>
          <option value="3">Manchester filiali</option>
        </select>

        <h4 className="section-title">Shahrning filialini tanlash</h4>
        <select className="custom-select">
          <option value="">Masalan: London</option>
          <option value="1">London markazi</option>
          <option value="2">Birmingham filiali</option>
          <option value="3">Liverpool filiali</option>
        </select>

        <h4 className="section-title">Kerakli yo'nalishni tanlash</h4>
        <select className="custom-select">
          <option value="">Masalan: Science</option>
          <option value="1">Dasturiy injiniring</option>
          <option value="2">Biznes boshqaruvi</option>
          <option value="3">Tibbiyot</option>
        </select>

        <h4 className="section-title">Passport yoki ID karta</h4>
        <div className="upload-box">
          <label htmlFor="passportInput" className="upload-label">
            <span className="upload-icon">
              <BiImageAdd />
            </span>
            <p>Rasm qabul qilinadigan formatlar</p>
            <p className="format-text">JPG, PNG</p>
          </label>
          <input
            id="passportInput"
            type="file"
            accept=".png,.jpg,.jpeg"
            onChange={handleImageChange("passport")}
            className="file-input"
          />
          {images.passport && (
            <img
              src={images.passport}
              alt="Passport"
              className="preview-image"
            />
          )}
        </div>

        <h4 className="section-title">Diplom/Atestat yuklash</h4>
        <div className="upload-box">
          <label htmlFor="diplomaInput" className="upload-label">
            <span className="upload-icon">
              <BiImageAdd />
            </span>
            <p>Rasm qabul qilinadigan formatlar</p>
            <p className="format-text">JPG, PNG</p>
          </label>
          <input
            id="diplomaInput"
            type="file"
            accept=".png,.jpg,.jpeg"
            onChange={handleImageChange("diploma")}
            className="file-input"
          />
          {images.diploma && (
            <img src={images.diploma} alt="Diploma" className="preview-image" />
          )}
        </div>
      </div>

      <div className="hujjat-section">
        <h4 className="section-title">Qo'shimcha hujjatlar yuklash</h4>
        <div className="upload-box">
          <label
            htmlFor="additionalInput"
            className={`upload-label ${noAdditionalDocs ? "disabled" : ""}`}
          >
            <span className="upload-icon">
              <BiImageAdd />
            </span>
            <p>Rasm qabul qilinadigan formatlar</p>
            <p className="format-text">JPG, PNG</p>
          </label>
          <input
            id="additionalInput"
            type="file"
            accept=".png,.jpg,.jpeg"
            onChange={handleImageChange("additional")}
            className="file-input"
            disabled={noAdditionalDocs}
          />
          {images.additional && (
            <img
              src={images.additional}
              alt="Additional"
              className="preview-image"
            />
          )}
        </div>
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="noAdditionalDocs"
            checked={noAdditionalDocs}
            onChange={handleCheckboxChange}
            className="custom-checkbox"
          />
          <label htmlFor="noAdditionalDocs">Qo'shimcha hujjatlar yo'q</label>
        </div>
        <button className="ariz-submit-btn">Ariza jo’natish</button>
      </div>
    </div>
  );
};

export default Hujjat;
