
function getLatinCharacterList(str) {
    words = str.split("")
    return words


}
getLatinCharacterList('hello world')




function translateLatinCharacter(a){
    
    const latinToMorse = {
        'A':'.-',
        'B':'-...',
        'C':'-.-.',
        'D':'-..',
        'E':'.',
        'F':'..-.',
        'G':'--.',
        'H':'....',
        'I':'..',
        'J':'.---',
        'K':'-.-',
        'L':'.-..',
        'M':'--',
        'N':'-.',
        'O':'---',
        'P':'.--.',
        'Q':'--.-',
        'R':'.-.',
        'S':'...',
        'T':'-',
        'U':'..-',
        'V':'...-',
        'W':'.--',
        'X':'-..-',
        'Y':'-.--',
        'Z':'--..'
    }
     return latinToMorse[a]
 
}
translateLatinCharacter()


function encode(str1) {    
let array = []
let list = getLatinCharacterList(str1)

for(i = 0; i < list.length; i++ ){   
    array.push(translateLatinCharacter(str1[i].toUpperCase()))
    }
return array.toString()

}
console.log(encode("steve"))