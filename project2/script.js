

// GET https://icanhazdadjoke.com/
// promisses in javascript. 

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');


// this is using promisses in javascript

// const generateJokes = () => {
//     const setHeader = {
//         headers : {
//             Accept : "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com/', setHeader).then((res) => res.json() )
//     .then( (data) => {
//         jokes.innerHTML = data.joke;
//     }).catch((error) => {
//         console.log(error);
//     })
// }

//promisses end



// using async await function 

const generateJokes = async () => {
    try{
        const setHeader = {
            headers : {
                Accept : "application/json"
            }
        }
    
        const res  = await fetch('https://icanhazdadjoke.com/', setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke;

    }catch(err){
        console.log(err);
    }
    
}
//async await function end 




jokeBtn.addEventListener('click', generateJokes);
generateJokes();