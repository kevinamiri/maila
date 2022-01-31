const select = (langKey) => {
  var res;
  switch (langKey) {
    case "en":
      res = 0;
      break;
    case "fa":
      res = 1;
      break;
    default:
      res = null;
  }
  return res;
};

export default select;
