const os = require("os");

const userInfo = os.userInfo();
console.log(userInfo);
const upTime = os.uptime();
console.log(upTime);

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalSpace : os.totalmem(),
    FreeSpace : os.freemem(),
};

console.log(currentOS);