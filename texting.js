const fetch = require('node-fetch');
// async function





(async function () {
    console.log('start');
    const tasks = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json());
        console.log(data, new Date())
        const data2 = await fetch('https://jsonplaceholder.typicode.com/todos/2').then(response => response.json());
        console.log(data2, new Date())
        const data3 = await fetch('https://jsonplaceholder.typicode.com/todos/3').then(response => response.json());
        console.log(data3, new Date())
        return { data, data2, data3 }
    }

    for (let i = 0; i < 30; i++) {
        console.log(i);
        tasks();

    }




    console.log('end');

    return "done";











}
)();