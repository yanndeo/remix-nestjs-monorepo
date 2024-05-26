import { Outlet } from "@remix-run/react"

export default function Layout() {
    return <main className="p-8"><Outlet /></main>
}