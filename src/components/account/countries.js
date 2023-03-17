const countries = [
  { code: "US", label: "English", LangCode: "en" },
  { code: "SV", label: "Swedish", LangCode: "sv" },
  { code: "DE", label: "German", LangCode: "de" },
  { code: "FI", label: "Finnish", LangCode: "fi" },
  { code: "NO", label: "Norwegian", LangCode: "no" },
  { code: "CN", label: "Chinese", LangCode: "zh" },
  { code: "ES", label: "Spanish", LangCode: "es" },
  { code: "IN", label: "Hindi", LangCode: "hi" },
  { code: "RU", label: "Russian", LangCode: "ru" },
  { code: "BR", label: "Portuguese", LangCode: "pt" },
  { code: "FR", label: "French", LangCode: "fr" },
  { code: "AR", label: "Arabic", LangCode: "ar" },
  { code: "BD", label: "Bengali", LangCode: "bn" },
  { code: "ID", label: "Indonesian", LangCode: "id" },
  { code: "JP", label: "Japanese", LangCode: "ja" },
  { code: "KR", label: "Korean", LangCode: "ko" },
  { code: "TR", label: "Turkish", LangCode: "tr" },
  { code: "IT", label: "Italian", LangCode: "it" },
  { code: "NL", label: "Dutch", LangCode: "nl" },
  { code: "PL", label: "Polish", LangCode: "pl" },
  { code: "EN", label: "English", LangCode: "en" },
  { code: "PK", label: "Urdu", LangCode: "ur" },
  { code: "PH", label: "Tagalog", LangCode: "tl" },
  { code: "VN", label: "Vietnamese", LangCode: "vi" },
  { code: "IL", label: "Hebrew", LangCode: "he" },
  { code: "PL", label: "Polish", LangCode: "pl" },
  { code: "UA", label: "Ukrainian", LangCode: "uk" },
  { code: "RO", label: "Romanian", LangCode: "ro" },
  { code: "HU", label: "Hungarian", LangCode: "hu" },
  { code: "GR", label: "Greek", LangCode: "el" },
  { code: "SE", label: "Swedish", LangCode: "sv" },
  { code: "DK", label: "Danish", LangCode: "da" },
  { code: "CZ", label: "Czech", LangCode: "cs" },
  { code: "RS", label: "Serbian", LangCode: "sr" },
  { code: "HR", label: "Croatian", LangCode: "hr" },
  { code: "BG", label: "Bulgarian", LangCode: "bg" },
  { code: "SI", label: "Slovenian", LangCode: "sl" },
  { code: "SK", label: "Slovak", LangCode: "sk" },
  { code: "US", label: "English", LangCode: "en" },
  { code: "CN", label: "Chinese (Simplified)", LangCode: "zh" },
  { code: "TW", label: "Chinese (Traditional)", LangCode: "zh-Hant" },
  { code: "CA", label: "Catalan", LangCode: "ca" },
  { code: "EE", label: "Estonian", LangCode: "et" },
  { code: "TH", label: "Thai", LangCode: "th" },
  { code: "MY", label: "Malay", LangCode: "ms" },
  { code: "AL", label: "Albanian", LangCode: "sq" },
  { code: "BA", label: "Bosnian", LangCode: "bs" },
  { code: "IR", label: "Persian", LangCode: "fa" },
  { code: "LT", label: "Lithuanian", LangCode: "lt" },
  { code: "LV", label: "Latvian", LangCode: "lv" },
  { code: "ES-GA", label: "Galician", LangCode: "gl" },
  { code: "ZA", label: "Afrikaans", LangCode: "af" },
  { code: "IL", label: "Hebrew", LangCode: "iw" },
  { code: "IS", label: "Icelandic", LangCode: "is" },
  { code: "IE", label: "Irish", LangCode: "ga" },
  { code: "CY", label: "Welsh", LangCode: "cy" },
  { code: "IN-TA", label: "Tamil", LangCode: "ta" },
  { code: "IN-ML", label: "Malayalam", LangCode: "ml" },
  { code: "RW", label: "Kinyarwanda", LangCode: "rw" },
  { code: "IN-MR", label: "Marathi", LangCode: "mr" },
  { code: "AZ", label: "Azerbaijani", LangCode: "az" },
  { code: "GE", label: "Georgian", LangCode: "ka" },
  { code: "SE-SW", label: "Sami", LangCode: "se" }
];



// function that get the LangCode and return language name
export const getCountryName = code => {
  const country = countries.find(country => country.code === code);
  return country ? country.label : "";
};



export default countries;
