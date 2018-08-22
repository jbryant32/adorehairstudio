const express = require('express')
const app = express()
app.use(express.static('public'))//Service static files out of the public folder your web pages
app.use(express.json()); //parse json data from posts

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => res.send('/public/index.html'));

app.listen(PORT, () => console.log('Example app listening on port 3000!'))