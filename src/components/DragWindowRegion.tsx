import { closeWindow, maximizeWindow, minimizeWindow } from "@/helpers/window_helpers";
import React, { type ReactNode } from "react";
import MaxRestoreButton from "@/components/MaxRestoreButton";

interface DragWindowRegionProps {
    title?: ReactNode;
}

export default function DragWindowRegion({ title }: DragWindowRegionProps) {
    return (
        <div className="flex w-screen items-stretch justify-between">
            <div className="draglayer w-full">
                {title && (
                    <div className="flex flex-1 select-none whitespace-nowrap p-2 text-xs text-gray-400">
                        {title}
                    </div>
                )}
            </div>
            <WindowButtons />
        </div>
    );
}

function WindowButtons() {
    return (
        <div className="flex">
            <button
                title="Minimize"
                type="button"
                className="p-2 hover:bg-slate-300"
                onClick={minimizeWindow}
            >
                <svg aria-hidden="true" role="img" width="12" height="12" viewBox="0 0 12 12">
                    <rect fill="currentColor" width="10" height="1" x="1" y="6"></rect>
                </svg>
            </button>
			<MaxRestoreButton
				maximizeWindow={maximizeWindow}
			/>
            <button
                type="button"
                title="Close"
                className="p-2 hover:bg-red-300"
                onClick={closeWindow}
            >
                <svg aria-hidden="true" role="img" width="12" height="12" viewBox="0 0 12 12">
                    <polygon
                        fill="currentColor"
                        fillRule="evenodd"
                        points="11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"
                    ></polygon>
                </svg>
            </button>
        </div>
    );
}
