import React, { createContext, ReactNode, useEffect, useState } from "react";

import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from "@/constants/SharedConstants";

export interface WindowStatus {
	height: number,
	width: number,
	x: number,
	y: number,
}

export const WindowStatusContext = createContext<WindowStatus>({
	height: 0,
	width: 0,
	x: 0,
	y: 0,
});

export default function WindowStatusProvider({ children }: { children: ReactNode }) {
	const default_status: WindowStatus = {
		height: DEFAULT_HEIGHT,
		width: DEFAULT_WIDTH,
		x: 0,
		y: 0,
	};

	const [status, setStatus] = useState<WindowStatus>(default_status);

	useEffect(() => {
		const updateStatus = (event_type: string, status: string) => {
			if (event_type !== "window_resize") return;
			const window_status = JSON.parse(status) as WindowStatus;
			setStatus(window_status);
		};
		return window.chromeTools.ipc.on("window-status", updateStatus);
	}, []);

	return (
		<WindowStatusContext.Provider value={status}>
			{children}
		</WindowStatusContext.Provider>
	);
}
