const { app, BrowserWindow } = require('electron')
function mostrarJanela() {
    const janela = new BrowserWindow({
        width: 1280,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    })
    janela.loadURL('https://krunker.io');
    janela.once("ready-to-show", ()=>{
        janela.show()
    })
    janela.setMenuBarVisibility(false)
}
app.whenReady().then(mostrarJanela)

let scripts = [() => {
    (require("./Scripts/script.js"));
}]
const runScripts = () => { 
    scripts.forEach(script => {
        (script)()
    }); 
}

runScripts()



