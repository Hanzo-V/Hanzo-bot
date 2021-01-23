const fs = require("fs");
const dir = "./commands/";

module.exports = (prefix) =>{
    var commands = {};

    const scripts = fs.readdirSync(dir);
    scripts.forEach(script=>{
        try {
        commands[prefix+script.split(".".toLowerCase())[0]] = require("../"+dir+script);
        } catch (err) {
            console.log(`O comando ${script} está com problemas de arquivo e não pode ser carregado\n${err}`)
        };
    });
    
    return commands;
}