import {Server} from 'socket.io'

const io = new Server(5000,{
    cors:{
        origin:'https://whatsapp-web-clone-eight.vercel.app/'
    }
})

let users= [];

const addUser=(userData,socketId)=>{
    !users.some(user=>user.sub==userData.sub)&& users.push({...userData,socketId})
}

const getUser=(userId)=>{
    return users.find(user=>user.sub === userId);
}

io.on('connection',(socket)=>{
    console.log('User Connected');

    socket.on("addUser",(userData)=>{
        addUser(userData,socket.id)
        io.emit("getUsers",users)
    })

    socket.on("sendMessage",(data)=>{
      const user = getUser(data.reciverId);
      io.to(user.socketId).emit('getMessage',data)
    })
})