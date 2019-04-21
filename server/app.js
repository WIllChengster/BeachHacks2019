const express = require('express');
const app = express();

const exaple_request = {
    package_id: 123,
    description: 'fuck'
}

app.get('/big_daddy', function(req, res){
    console.log(req)
    res.send( 'hello' )
})

app.listen(3000, () => {
    console.log('listening to port 3000')
} )