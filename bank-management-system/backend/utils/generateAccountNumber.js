export function generateAccountNumber() {
  const prefix = "bank-";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let accountNumber = prefix;

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    accountNumber += characters[randomIndex];
  }

  return accountNumber;
}
