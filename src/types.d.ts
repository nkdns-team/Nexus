// This allows TypeScript to pick up the magic constants that's auto-generated by Forge's Vite
// plugin that tells the Electron app where to look for the Vite-bundled app code (depending on
// whether you're running in development or production).
declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;
declare const MAIN_WINDOW_VITE_NAME: string;

// Preload types
interface IpcType {
	send(channel: any, value: any): void;
	on(channel: any, callback: (...args: any[]) => void): () => void;
}

interface ThemeModeContext {
    toggle: () => Promise<boolean>;
    dark: () => Promise<void>;
    light: () => Promise<void>;
    system: () => Promise<boolean>;
    current: () => Promise<"dark" | "light" | "system">;
}
interface ElectronWindow {
    minimize: () => Promise<void>;
    maximize: () => Promise<void>;
    close: () => Promise<void>;
}
interface ChromeTools {
	ipc: IpcType;
	open_dev_tools: () => Promise<void>;
}

declare interface Window {
	chromeTools: ChromeTools;
	themeMode: ThemeModeContext;
    electronWindow: ElectronWindow;
}
