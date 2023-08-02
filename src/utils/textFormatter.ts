export function kebabToProperCase(kebabCaseStr: string) {
  // Split the kebab case string into an array of words
  const words = kebabCaseStr.split("-");

  // Capitalize the first letter of each word and make the rest lowercase
  const properCaseWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );

  // Join the proper case words back together with a space between them
  const properCaseStr = properCaseWords.join(" ");

  return properCaseStr;
}
