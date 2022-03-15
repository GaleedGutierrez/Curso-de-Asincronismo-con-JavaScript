const somethingWillHappend = () => {
    return new Promise(
        (resolve, reject) => {
            (true)
               ? resolve('Hey!')
               : reject('Whoooop!');
        }
    );
}

// somethingWillHappend()
//     .then(response => console.log(response))
//     .catch(error => console.error(error));


const somethingWillHappend2 = () => {
    return new Promise(
        (resolve, reject) => {
            if (true) {
                setTimeout(() => {resolve('True')}, 2000)
            } else {
                const error = new Error('Whooop!');
                reject(error);
            }
        }
    );
}

// somethingWillHappend2()
//     .then(response => console.log(response))
//     .catch(error => console.error(error));

Promise.all([somethingWillHappend(), somethingWillHappend2()])
    .then(responce => console.log('Array of result: ', responce))
    .catch(error => console.error(error));