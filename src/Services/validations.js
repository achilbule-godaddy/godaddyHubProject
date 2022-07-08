export const validateNoCharacter = (event) => {
  if (
    (event.charCode > 96 && event.charCode < 123) ||
    (event.charCode > 64 && event.charCode < 91) ||
    (event.charCode > 47 && event.charCode < 58) ||
    event.charCode === 46 ||
    event.charCode === 45 ||
    event.charCode === 189 ||
    event.charCode === 8 ||
    event.charCode === 13
  ) {
    return true;
  }
  event.preventDefault();
  return false;
};
