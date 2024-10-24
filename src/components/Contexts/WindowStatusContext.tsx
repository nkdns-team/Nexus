import React, { createContext, ReactNode, useEffect, useState } from "react";

import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from "@/constants/SharedConstants";
import { ipcRenderer } from "electron";

const defaultVal: WindowStatus = {
	size: {height: DEFAULT_HEIGHT, width: DEFAULT_WIDTH },
	position: { x: 0, y: 0 },
	status: { isMaximized: false, isMinimized: false, isResizable: false, isFullScreen: false, isVisible: false},
	title: '',
	opacity: 0,
}

export const WindowStatusContext = createContext<WindowStatus>(defaultVal);

export default function WindowStatusProvider({ children }: { children: ReactNode }) {
	const default_status: WindowStatus = defaultVal;

	const [status, setStatus] = useState<WindowStatus>(default_status);

	useEffect(() => {
		const updateStatus = (event_type: string, status: string) => {
			console.log(event_type)
			const window_status = JSON.parse(status) as WindowStatus;
			setStatus(window_status);
		};
		return window.chromeTools.ipc.on("set-window-status", updateStatus);
	}, []);

	return (
		<WindowStatusContext.Provider value={status}>
			{children}
		</WindowStatusContext.Provider>
	);
}
