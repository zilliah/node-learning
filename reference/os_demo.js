const os = require("os");

//get platform
console.log(os.platform());

//CPU architechure
console.log(os.arch());

//CPU core info
console.log(os.cpus());

// free memory
console.log(os.freemem());

// total memory
console.log(os.totalmem());

//home dir
console.log(os.homedir());

// uptime
console.log(os.uptime());