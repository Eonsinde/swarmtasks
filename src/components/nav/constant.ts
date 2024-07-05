import { Calendar, CalendarDays, Grid2X2, Inbox } from "lucide-react"

export const NAV_LINKS = [
    {
        name: "Inbox",
        link: "/dashboard",
        icon: Inbox
    },
    {
        name: "Today",
        link: "/dashboard/today",
        icon: Calendar
    },
    {
        name: "Upcoming",
        link: "/dashboard/upcoming",
        icon: CalendarDays
    },
    {
        name: "Filters",
        link: "/dashboard/filters",
        icon: Grid2X2
    },
];