const readline = require('node:readline');
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// For client-side routing, always return index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let port = process.env.PORT || 3000;
let host = process.env.HOST || "localhost";
const server = app.listen(port, host);
server
function start_msg() {
console.log(`
\x1b[0m  ╭────────────────────────────────╮\x1b[0m
  │                                │
  │  \x1b[48;5;94mQ\x1b[41mS\x1b[44mI\x1b[30m\x1b[43mS\x1b[0m \x1b[2m--\x1b[0m \x1b[1m\x1b[42mProduction\x1b[0m mode\x1b[0m       │
  │                                │
  │  \x1b[0m\x1b[1m➜ \x1b[0m\x1b[2mHost: \x1b[32m${host}\x1b[0m             │
  │  \x1b[0m\x1b[1m➜ \x1b[0m\x1b[2mPort: \x1b[32m${port}\x1b[0m                  │
  │                                │
  │  \x1b[0m\x1b[1m➜ \x1b[0mEnter \x1b[1m\`\x1b[2mhelp\x1b[0m\` for help list. │
  │                                │
  ╰────────────────────────────────╯
`)
}

function prompt() {
  rl.question('',input => {
  switch (input) {
    case "help":
      console.log("\nHELP:\n`help` for calling this help menu.\n`host` for setting new host for next restart.\n`port` for setting new port for next restart.\n`restart` for restarting the QSIS frontend.\n`quit` for quiting the QSIS frontend.\n")
      prompt()
      break
    case "host":
      rl.question('New host for next restart: ',h=>{
        host = h
        prompt()
      })
      break
    case "port":
      rl.question('New port for next restart: ',i=>{
        port = i;
        prompt()
      })
      break
    case "restart":
      server.close()
      app.listen(port, "localhost")
      start_msg()
      console.log("\nINFO: App restarted.\n")
      prompt()
      break
    case "quit":
      server.close()
      process.exit()
      break
    default:
      console.log("Invalid input")
      prompt()
  }
})
}

start_msg()
prompt()
