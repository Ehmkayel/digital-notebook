//solution 1
const word = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
const loveCount = word.match(/love/gi);
console.log(loveCount.length);

//solution 2
const sentence = 'You cannot end a sentence with because because because is a conjunction';
const becauseCount = sentence.match(/because/gi);
console.log(becauseCount.length);

//solution 3
const sentences = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
const cleanSentences = sentences.replace(/[^\w\s]|/g, '');
console.log(cleanSentences);

//solution 4
const howMuchHeEarns = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month';
const totalAmountHeEarns = howMuchHeEarns.match(/\d+/g);
console.log(totalAmountHeEarns);


