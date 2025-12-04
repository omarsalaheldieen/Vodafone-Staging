// =========== Change This ===========
const deviceIP = "localhost";
// ===================================
const socket = io(`https://arena-backend-staging.gamersloungeme.app`);
/**
 * Connection to the client.
 */
socket.on("connect", () => console.log("Connected to Web APP"));

// // ===================================
// const controllerSocket = io(`http://${deviceIP}:3500/controller`);

// /**
//  * Connection to the client.
//  */
// controllerSocket.on("connect", () => console.log("Connected to Controller"));
