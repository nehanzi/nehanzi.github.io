/*
    9. Import `express` and `axios`
*/
const express = require('express');
const axios = require('axios');

const app = express();

/*
    11. Write an asynchronous function to respond to requests at `localhost:3000/:query`
*/
app.get('/:searchTerm', async (req, res) => {
    const searchTerm = req.params.searchTerm;
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=a4cae43902da506229d8148bcfc7364c&language=en-US&query=${searchTerm}`)
        const foundMovies = response.data.results;

        if (foundMovies.length === 0){
            throw 'wtf? try again.'
        }
        res.status(200).json({
            message: 'success',
            payload: foundMovies,
        })
    } catch(error) {
        res.status(500).json({
            message: 'failure',
            payload: error,
        });
        console.log(error)
    }
})
/*
    10. Set up the server's ability to listen to requests
*/
const PORT = 3000;
app.listen(PORT, () => console.log('Server is listening on port ' + PORT));
