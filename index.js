const userInfo = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, i'm  ${userInfo.name} from ${userInfo.campus}!`,
    e : "oO",
    T : "U "
}));
