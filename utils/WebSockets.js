class WebSockets {
    users = [];
    connection(client){
        client.on("disconnect", ()=>{
            this.users = this.users.filter((user)=> user.socketId !== client.id)
        })
        client.on("identity", (userId)=>{
            this.users.push({
                socketId: client.id,
                userId: userId,
            })
        })
        client.on("subscribe", (room, otherUserId="")=>{
            this.subscribeOtherUser(room, otherUserId)
            client.join(room)
        })
        client.on("unsubscribe", (room)=>{
            client.leave(room)
        })
    }
}