const axios = require("axios");

const getTodos = () => {

    const url = "https://jsonplaceholder.typicode.com/todos";
    
    return axios
        .get(url)
            .then((response) => {
                console.log('response');
            console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
};


getTodos();