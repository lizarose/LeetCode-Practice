

reverse(string)


//reverse space separated sentence
let sentence = "Hello World"
console.log(sentence)

function reverseSentence(sentence) {

    return console.log(sentence.split(' ').reverse().join(' '))
}

reverseSentence(sentence)
