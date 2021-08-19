//  Module: validates the text from user
export default function validateDescription(text) {
  if (text === null || text === '') {
    return false;
  }
  return true;
}