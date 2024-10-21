import React from "react";
import DragWindowRegion from "@/components/DragWindowRegion";
import NavigationMenu from "@/components/NavigationMenu";

import styles from "@/styles/BaseLayout.module.css";

export default function BaseLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div style={{height : '100%', display: 'flex',flexDirection:'column'}}>
                <div className={styles.container}>
                    <DragWindowRegion title="Nexus" />
                    {/* <NavigationMenu /> */}
                    <hr />
                </div>
                <main>{children}</main>
            </div>
        </>
    );
}
