export const trimText = (text: string, maxCharacter: number): string => {
  if (text.length <= maxCharacter) {
    return text;
  }
  return text.slice(0, maxCharacter - 3) + "...";
};

export const transformKYC = (input: string): string => {
  if (input == "Rendah") {
    return "Low";
  } else if (input == "Sedang") {
    return "Medium";
  } else if (input == "Tinggi") {
    return "High";
  } else {
    return input;
  }
};
