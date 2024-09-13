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