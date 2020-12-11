const { io } = require('../index');

// Mensajes de sockets
// Client es un dispositivo que se acaba de conectar
io.on('connection', client => {
    console.log('Cliente conectado');

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

    client.on('mensaje', (payload) => {
        console.log('Mensaje!!!', payload);

        io.emit('mensaje', { admin: 'Ya vamos a cerrar' });
    });
});