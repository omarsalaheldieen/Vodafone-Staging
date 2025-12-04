// =========== Change This ===========
const deviceIP = "localhost";
// ===================================
const socket = io(`https://arena-backend-staging.gamersloungeme.app`);
/**
 * Connection to the client.
 */
socket.on("connect", () => console.log("Connected to Web APP"));
