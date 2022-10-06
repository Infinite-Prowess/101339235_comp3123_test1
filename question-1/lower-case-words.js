/*  Omar Nabi
    101339235
    COMP3123
    Test #1
    Question #1*/

//Function (Promise)
lowerCaseWords = (mixedArray) =>
   new Promise((resolve, reject) => {
        (!Array.isArray(mixedArray)) ? reject("ERROR---INVALID ARRAY")
        : resolve(mixedArray.filter(checkString => typeof checkString === 'string' && !!checkString)
                            .map(lowerCase => lowerCase.toLowerCase()))
    })

//Input Array
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

//Call Function (Promise)
lowerCaseWords(mixedArray).then(response => console.log(response))
                          .catch(error => console.log(error))