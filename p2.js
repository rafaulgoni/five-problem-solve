const text = 'This is a text'
const makeEachWordsFirstCharacterCapitalized = (text) => {
    const wordsArray = text.split(' ')
    const expectedWordsArrayWithCapitalized = wordsArray.map((word) => `${ word[0].toUpperCase()}${word.split('').slice(1).join('')} `)
    
    console.log(expectedWordsArrayWithCapitalized.join(''))
}
makeEachWordsFirstCharacterCapitalized(text)