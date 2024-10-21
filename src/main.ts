import { app, BrowserWindow } from "electron";
import registerListeners from "./helpers/ipc/listeners-register";
// "electron-squirrel-startup" seems broken when packaging with vite
//import started from "electron-squirrel-startup";
import path from "path";

const inDevelopment = process.env.NODE_ENV === "development";
let mainWindow: Electron.CrossProcessExports.BrowserWindow | null = null;

if (require("electron-squirrel-startup")) {
	app.quit();
}

function createWindow() {
	const preload = path.join(__dirname, "preload.js");
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			// devTools: inDevelopment,
			contextIsolation: true,
			nodeIntegration: true,
			nodeIntegrationInSubFrames: false,

			preload: preload,
		},
		titleBarStyle: "hidden",
	});
	registerListeners(mainWindow);

	if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
		mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
	} else {
		mainWindow.loadFile(
			path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`)
		);
	}

	if(mainWindow){
		mainWindow.on('maximize', () => {
			if(mainWindow){
				mainWindow.webContents.send('window-status', 'window_size', 'maximize');
			}
		});

		mainWindow.on('unmaximize', () => {
			if(mainWindow){
				mainWindow.webContents.send('window-status', 'window_size', 'restore');
			}
		});
	}

	if(inDevelopment) {
		mainWindow.webContents.openDevTools()
	}
}

app.whenReady().then(createWindow);

//osX only
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
//osX only ends
