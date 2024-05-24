
const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

function tenMostFrequentWords(paragraph){
    const pattern = /[^\w\s']/g
    const words = paragraph.toLowerCase().split(/\s+/);
    const patternMatch = paragraph.match(pattern);
    const cleanedWords = words.map(word => word.replace(pattern, ''));

    // Create a map to store word frequencies
      const mostFrequent = cleanedWords.reduce((map, word) => {
        if (word) {
            map.set(word, (map.get(word) || 0) + 1);
        }
        return map;
    }, new Map());

    const wordFrequencyPairs = Array.from(mostFrequent.entries());
    wordFrequencyPairs.sort((a, b) => b[1] - a[1]);
     // Extract the top 10 most frequent words
     const topTen = wordFrequencyPairs.slice(0, 10).map(pair => pair[0]);

     return topTen;

}

console.log(tenMostFrequentWords(paragraph))