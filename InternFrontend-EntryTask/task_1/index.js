import {encoded, translations} from './data.js'

console.log("Let's rock")
console.log(encoded, translations)

const unique=[]
const excludedFields = ['groupId', 'service', 'formatSize', 'ca'];

function decode(encoded, translations) {
    const elements = encoded;
    elements.forEach(elem => {
        for (let key in elem){
        if (!unique.includes(elem[key])) {
            unique.push(elem[key]);
          }
          if(!excludedFields.includes(key) )
            elem[key]=translations[elem[key]]
        }
    });
    return elements
}
const decoded=decode(encoded, translations)

console.log(decoded)

console.log(unique)