import fs from "fs";

// Read the text file containing the words
fs.readFile("solutions.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Split the data into an array of words
  const words = data.split("\n").map((word) => word.trim());

  // Convert the array into a string format
  const arrayAsString = JSON.stringify(words);

  // Write the array as a string to a JavaScript file
  fs.writeFile(
    "words_array.js",
    `const wordArray = ${arrayAsString};`,
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Array of words successfully written to word_array.js");
    }
  );
});
