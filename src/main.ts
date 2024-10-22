import { app, BrowserWindow } from "electron";
import registerListeners from "./helpers/ipc/listeners-register";
// "electron-squirrel-startup" seems broken when packaging with vite
//import started from "electron-squirrel-startup";
import path from "path";

import { DEFAULT_HEIGHT, DEFAULT_MIN_HEIGHT, DEFAULT_MIN_WIDTH, DEFAULT_WIDTH } from "./constants/SharedConstants";

const inDevelopment = process.env.NODE_ENV === "development";
let mainWindow: Electron.CrossProcessExports.BrowserWindow | null = null;

if (require("electron-squirrel-startup")) {
	app.quit();
}

function createWindow() {
	const preload = path.join(__dirname, "preload.js");
	mainWindow = new BrowserWindow({
		width: DEFAULT_WIDTH,
		height: DEFAULT_HEIGHT,
		minWidth: DEFAULT_MIN_WIDTH,
		minHeight: DEFAULT_MIN_HEIGHT,
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
		mainWindow.on("will-resize", (
			_: Electron.Event,
			newBounds: Electron.Rectangle,
			details: Electron.WillResizeDetails) =>
		{
			const event_info = {
				...newBounds,
				...details,
			}
			if(mainWindow){
				mainWindow.webContents.send('window-status', 'window_resize', JSON.stringify(event_info));
			}
		})
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
