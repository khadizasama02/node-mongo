const express = require('express');





const app = express();


// with normal function
// function rootCall(req, res)
// {
//     res.send('thank you very much')
// }


// with arrow function
// const rootCall= (req, res)=>res.send('thank you very much');



// function calling normally
// app.get('/', rootCall)



app.get('/', (req, res)=>{
    res.send('thank you very much');
})
app.listen(3000, ()=>console.log('listening to port 3000'));