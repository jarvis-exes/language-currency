// import React, { useState, useEffect } from "react";

// const languages = ["en", "es", "fr", "de"];

// const LanguageSwitcher = ({ onLanguageChange }) => {
//   const [selectedLanguage, setSelectedLanguage] = useState("en");

//   useEffect(() => {
//     const storedLang = localStorage.getItem("language");
//     if (storedLang) {
//       onLanguageChange(storedLang);
//       setSelectedLanguage(storedLang);
//     }
//   }, [onLanguageChange]);

//   const handleLanguageChange = (e) => {
//     const language = e.target.value;
//     onLanguageChange(language);
//     setSelectedLanguage(language);
//   };

//   return (
//     <select
//       value={selectedLanguage}
//       onChange={handleLanguageChange}
//       className="p-2 border rounded"
//     >
//       {languages.map((lang) => (
//         <option key={lang} value={lang}>
//           {lang.toUpperCase()}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default LanguageSwitcher;
