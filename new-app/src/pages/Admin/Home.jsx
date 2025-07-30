
import Statcard from "../../components/Admin/Statcard";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";


import {
    FaUserFriends,
    FaUserCheck,
    FaUserMinus,
    FaFile,
} from "react-icons/fa";
const stats = [
    {
        title: "Total Employee",
        count: 222,
        icon: FaUserFriends,
        color: "text-primary",
    },
    {
        title: "Present Today",
        count: 200,
        icon: FaUserCheck,
        color: " text-primary",
    },
    {
        title: "On Leave",
        count: 22,
        icon: FaUserMinus,
        color: "text-primary",
    },
    {
        title: "Pending approvel",
        count: 222,
        icon: FaFile,
        color: " text-primary",
    },
];

export default function AdminHome() {
    return (
        <div className="flex flex-col h-screen">
            <Topbar />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-6 overflow-auto">
                    <h1 className="text-2xl font-bold text-gray-950 mb-5">Dashboard Overview</h1>
                    <div className="flex items-center justify-between">
                        {stats.map((item, index) => {
                            return (
                                <Statcard
                                    key={index}
                                    title={item.title}
                                    count={item.count}
                                    icon={<item.icon />}
                                    color={item.color}
                                />
                            );
                        })}
                    </div>
                </main>
            </div>
        </div>
    )
}