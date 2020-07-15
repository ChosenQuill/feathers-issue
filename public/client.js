// Establish a Socket.io connection
const socket = io();
// Initialize our Feathers client application through Socket.io
// with hooks and authentication.
const client = feathers();

client.configure(feathers.socketio(socket));
// Use localStorage to store our login token
client.configure(feathers.authentication({
  storage: window.localStorage
}));

const main = async () => {
  try {
    let user = await client.reAuthenticate();
    console.log('User is authenticated.', user);
  } catch(error) {
    console.log('User is not logged in.', error);
  }
};
  
main();