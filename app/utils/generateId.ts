const randomLetter = () => {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomIndex =
    window.crypto.getRandomValues(new Uint8Array(1))[0] %
    uppercaseLetters.length;
  return uppercaseLetters[randomIndex];
};

const randomNumber = () => {
  const numbers = "0123456789";
  const randomIndex =
    window.crypto.getRandomValues(new Uint8Array(1))[0] % numbers.length;
  return numbers[randomIndex];
};

const generateID = () => {
  const randomLetters = randomLetter() + randomLetter();
  const randomNumbers =
    randomNumber() + randomNumber() + randomNumber() + randomNumber();
  return randomLetters + randomNumbers;
};

export default generateID;
