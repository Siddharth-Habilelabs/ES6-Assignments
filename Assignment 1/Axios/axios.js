// work - call api using axios and use async / await and render data in table using map 
// comments - json.placeholder (remove body)


// ----- USING ASYNC / AWAIT -----
const getData = async () => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments`);

        let container = document.getElementById('container')

        container.innerHTML = (response.data).map(comment =>
            `<div>
                <tr>
                    <td>${comment['name']}</td>
                    <td>${comment['email']}</td>
                    <td>${comment['body']}</td>
                </tr>
            </div>`
        ).join('')
    }
    catch (error) {
        console.log(error);
    }
};
getData()




// ----- USING .then() -----
// axios.get('https://jsonplaceholder.typicode.com/comments')
//     .then(response) => {
//         console.log(response.data[0]);

//         let container = document.getElementById('container')

//         container.innerHTML = (response.data).map(comment =>
//             `<div>
//                 <tr>
//                     <td>${comment['name']}</td>
//                     <td>${comment['email']}</td>
//                     <td>${comment['body']}</td>
//                 </tr>
//             </div>`
//         ).join('')
//     })




// ----- TEMPLATE -----
// axios.get('https://jsonplaceholder.typicode.com/comments')
//     .then((response) => {

//         console.log(response);
//     })
//     .catch((error) => {

//         console.log(error);
//     })