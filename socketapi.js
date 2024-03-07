const io = require( "socket.io" )();
const socketapi = {
    io: io
};

// Add your socket.io logic here!
io.on( "connection", function( socket ) {
    console.log( "A user connected" );

    socket.on("sony",message =>{
        console.log(message)
        // io.emit('max',message)// jitne users connect hai sabko send kr deta hai
        socket.broadcast.emit('max',message) // jisne send kiya usko chodkr sabko bhej dega
    })
});
// end of socket.io logic

module.exports = socketapi;