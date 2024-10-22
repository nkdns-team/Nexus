import { BrowserWindow, ipcMain } from "electron";
import {
	CHROME_OPEN_DEVTOOLS_CHANNEL,
} from "./chrome-channels";
import assert from "node:assert";

export function addChromeEventListeners(mainWindow: BrowserWindow) {
	ipcMain.handle(CHROME_OPEN_DEVTOOLS_CHANNEL, () => mainWindow.webContents.openDevTools());
}