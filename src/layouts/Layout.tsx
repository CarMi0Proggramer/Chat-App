import { ReactNode } from "react";
import BottomNavigation from "../components/BottomNavigation";
import NavBar from "../components/NavBar";

export default function Layout({ children }: { children?: ReactNode }) {
    return (
        <>
            <NavBar />
            {children}
            <BottomNavigation />
        </>
    );
}
