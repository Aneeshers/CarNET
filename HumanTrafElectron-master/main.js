const electron = require("electron");
const url = require("url");
const path = require("path");

const {app, BrowserWindow, Menu} = electron;

let mainWindow;
process.env.NODE_ENV = 'development';

app.on('ready', function () {

    mainWindow = new BrowserWindow({
        width: 960,
        height: 720,
        resizable: true,
        maximizable: true,
        minHeight: 600,
        minWidth: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'userAuth.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainWindow.on('closed', function () {
        app.quit();
    });

    // Set main menu bar
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
    // End app.on ready
});

const mainMenuTemplate = [
    {
        label: "File",
        submenu: [
            {
                label: "Quit",
                click() {
                    app.quit();
                }
            }

        ]
    },
    {
        label: "Dev Tools",

    }
];

/*if(process.platform == 'darwin') {
    mainMenuTemplate.unshift({});
}*/

if(process.env.NODE_ENV !== 'production') {
    mainMenuTemplate.push(
        {
            label:"Dev Tools",
            submenu: [
                {
                    label: "Toggle Dev Tools",
                    click(item, focusedWindow) {
                        focusedWindow.toggleDevTools();
                    }
                }
            ]

        })
};


