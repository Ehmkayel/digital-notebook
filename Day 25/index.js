//solution 1
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;


function cleanText(text) {
    const pattern = /[^\w\s]/g;
    const replacement = '';
    let cleanedText = text.replace(pattern, replacement);
    return cleanedText;
}

console.log(cleanText(sentence));

function findMostFrequentWords(text) {
    const cleanedText = cleanText(text);
    const words = cleanedText.split(/\s+/);
    const wordCounts = {};

    words.forEach(word => {
        word = word.toLowerCase();
        if (wordCounts[word]) {
            wordCounts[word]++;
        } else {
            wordCounts[word] = 1;
        }
    });

    const frequentWords = Object.keys(wordCounts).reduce((accumulator, word) => {
        accumulator.push({ word: word, count: wordCounts[word] });
        return accumulator;
    }, []);

    frequentWords.sort((a, b) => b.count - a.count); 
    return frequentWords.slice(0, 3);
}

console.log(findMostFrequentWords(sentence));



