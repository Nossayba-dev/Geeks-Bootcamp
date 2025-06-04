function starBox(sentence) {
  const words = sentence.split(' ');
  const maxLength = Math.max(...words.map(word => word.length));
  const border = '*'.repeat(maxLength + 4);

  console.log(border);
  for (const word of words) {
    const padding = ' '.repeat(maxLength - word.length);
    console.log(`* ${word}${padding} *`);
  }
  console.log(border);
}

const sentence = prompt("Enter a sentence:");
starBox(sentence);
