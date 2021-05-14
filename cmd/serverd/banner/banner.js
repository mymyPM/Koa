const colors = require('colors');

function consoleLog(x, y) {
    console.log(`------------------------------------------------`.rainbow)
    console.log(`██╗  ██╗ ██████╗  █████╗      █████╗ ██████╗ ██╗`.cyan)
    console.log(`██║ ██╔╝██╔═══██╗██╔══██╗    ██╔══██╗██╔══██╗██║`.cyan)
    console.log(`█████╔╝ ██║   ██║███████║    ███████║██████╔╝██║`.cyan)
    console.log(`██╔═██╗ ██║   ██║██╔══██║    ██╔══██║██╔═══╝ ██║`.cyan)
    console.log(`██║  ██╗╚██████╔╝██║  ██║    ██║  ██║██║     ██║`.cyan)
    console.log(`╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝    ╚═╝  ╚═╝╚═╝     ╚═╝`.cyan)
    console.log(`------------------------------------------------`.rainbow)
}

module.exports = {consoleLog};
