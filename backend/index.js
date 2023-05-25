const express = require('express');
const app = express();
const profile = require('./profile');
const cors = require('cors');

// Enable CORS
app.use(cors());

app.use('/profile', profile)

const port = +process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`server running at ${port}`)
})
