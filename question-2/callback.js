/*  Omar Nabi
    101339235
    COMP3123
    Test #1
    Question #2*/

//Function (Promise)
resolvedPromise = () =>
    new Promise((resolve, reject) => {
        const success = {'message': 'delayed success!'}
        setTimeout(resolve(success), 500)
    })

//Function (Promise)
rejectedPromise = () =>
    new Promise((resolve, reject) => {
         const exception = {'error': 'delayed exception!'}
         setTimeout(reject(exception), 500)
     })


//Call Functions (Promises)
resolvedPromise().then(response => console.log(response))
rejectedPromise().catch(error => console.log(error))