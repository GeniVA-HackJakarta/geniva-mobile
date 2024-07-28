export const formatCurrency = (
  amount: number,
  prefix: string = "Rp",
  includeLastTwoDigits: boolean = false,
  includeSpace: boolean = true
) => {
  // Convert amount to string and split into parts (before and after decimal)
  const parts = amount.toString().split(".");
  let integerPart = parts[0];

  // Add commas to separate thousands
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Format the prefix
  let formattedPrefix = prefix;
  if (includeSpace) {
    formattedPrefix += " ";
  }

  // Append ",00" to the integer part
  if (includeLastTwoDigits) {
    integerPart += ",00";
  }

  // Combine integer and decimal parts
  let formattedAmount = formattedPrefix + integerPart;

  return formattedAmount;
};

export const convertStringToNumber = (input: string): number => {
  // Remove all non-digit characters except for the decimal point
  const cleanedString = input.replace(/[^\d.]/g, "");

  // Parse the cleaned string into a float
  const result = parseFloat(cleanedString);

  // Check if the result is a valid number
  if (isNaN(result)) {
    throw new Error("Invalid number format");
  }

  return result;
}

export function convertToInteger(amountString: string): number {
  // Remove non-numeric characters
  const cleanedAmount = amountString.replace(/[^0-9]/g, '');

  // Convert to integer
  const amount = parseInt(cleanedAmount, 10);

  return amount;
}

const amountString = "Rp20,000";
const amount = convertToInteger(amountString);
console.log(amount); // Output: 20000
