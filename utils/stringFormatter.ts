export const trimText = (text: string, maxCharacter: number): string => {
  if (text.length <= maxCharacter) {
    return text;
  }
  return text.slice(0, maxCharacter - 3) + "...";
};
