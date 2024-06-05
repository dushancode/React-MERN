
const express = require('express'); 
const app = express();
const PORT = process.env.PORT || 3500

app.use(express.json())

app.use('/',express.static('/public'))

app.use('/',require('./routes/root'))

app.all('*',(req,res)=>{
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname,'views','404.html'))
    }else if(req.accepts('json')){
        res.json({messge:"Not found"})
    }else{
        res.type('txt').send('404 not found ')
    }
    })

app.listen(PORT,()=> console.log(`Server runing on PORT ${PORT}`))


// const express = require('express');

// // Creating an Express app
// const app = express();

// // Define a route handler for the default route '/'
// app.get('/', (req, res) => {
//   res.send('Hello, World!'); // Send "Hello, World!" as the response
// });

// // Define the port to listen on (e.g., 3000)
// const PORT = 3000;

// // Start the server on the defined port
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });