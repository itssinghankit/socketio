# Web Sockets and Socket.IO

- Persisting protocols
- Web sockets - TCP based independent protocol
- Long polling and SSE(Server sent events) based on HTTP
- Socket.IO

## Persisting Protocols/ Networks
- Connection open once.
- Client and Server transfers data without making connection again and again.
- Connection closes when disconnects

## Web Sockets
- Each connection has unique `id`
- From `HTTP 1.1` - upgrage: `HTTP/2.0`
- request Header 

```bash
 connection : upgrade
 upgrade    : WebSocket
```

## Socket.IO

- Not complete implementation of web sockets.
- Engine.io
- ws - complete implementation of web sockets
- io is Server(socker.io) intance and all the connection disconnection and other events handled through this
- cdn and io() script in html code

### Server side events
1. connection
2. disconnect
3. message
4. reconnect
5. ping
6. join
7. leave

### Client side events
1. connect
2. disconnect
3. 
4.

- socket.send() - server, "message" event on client
- custom event on client side and catch on server side
- custom event on server side and catch on client side
- Broadcasting 
    1. io.sockets.emit -to all
    2. socket.emit -  to sender
    3. socket.broadcast.emit - to all except sender