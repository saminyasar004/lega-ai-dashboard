import React from "react";
import {
	Scale,
	LayoutDashboard,
	Users,
	Zap,
	CreditCard,
	MessageSquare,
	LogOut,
	User,
	Search,
	Bell,
	DollarSign,
	MessageCircle,
} from "lucide-react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	LineChart,
	Line,
} from "recharts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock Data for Charts
const userGrowthData = [
	{ name: "Jan", users: 50 },
	{ name: "Feb", users: 100 },
	{ name: "Mar", users: 200 },
	{ name: "Apr", users: 150 },
	{ name: "May", users: 300 },
	{ name: "Jun", users: 250 },
	{ name: "Jul", users: 350 },
	{ name: "Aug", users: 200 },
	{ name: "Sep", users: 150 },
	{ name: "Oct", users: 200 },
	{ name: "Nov", users: 100 },
	{ name: "Dec", users: 300 },
];

const revenueData = [
	{ name: "Jan", revenue: 1000 },
	{ name: "Feb", revenue: 1200 },
	{ name: "Mar", revenue: 900 },
	{ name: "Apr", revenue: 2000 },
	{ name: "May", revenue: 2800 },
	{ name: "Jun", revenue: 1800 },
	{ name: "Jul", revenue: 2400 },
];

// Mock Data for Recent Activity
const recentActivity = [
	{
		user: "Jane Cooper",
		email: "jane.cooper@example.com",
		avatar: "https://i.pravatar.cc/150?u=jane",
		activity: "Signed up",
		status: "Active",
		date: "Sep 14, 7:25 PM",
	},
	{
		user: "Cody Fisher",
		email: "cody.fisher@example.com",
		avatar: "https://i.pravatar.cc/150?u=cody",
		activity: "Checked Query",
		status: "Active",
		date: "Sep 12, 3:41 PM",
	},
	{
		user: "Esther Howard",
		email: "esther.howard@example.com",
		avatar: "https://i.pravatar.cc/150?u=esther",
		activity: "Purchased Subscription",
		status: "Inactive",
		date: "Sep 1, 9:12 PM",
	},
	{
		user: "Jenny Wilson",
		email: "jenny.wilson@example.com",
		avatar: "https://i.pravatar.cc/150?u=jenny",
		activity: "Checked Query",
		status: "Banned",
		date: "Aug 29, 5:05 PM",
	},
	{
		user: "Kristin Watson",
		email: "kristin.watson@example.com",
		avatar: "https://i.pravatar.cc/150?u=kristin",
		activity: "Signed up",
		status: "Active",
		date: "Sep 14, 2:30 PM",
	},
];

import { useNavigate } from "react-router-dom";

const SidebarItem = ({
	icon: Icon,
	label,
	path,
	active = false,
}: {
	icon: React.ElementType;
	label: string;
	path?: string;
	active?: boolean;
}) => {
	const navigate = useNavigate();
	return (
		<div
			onClick={() => path && navigate(path)}
			className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
				active
					? "bg-white text-[#1e88e5] font-medium"
					: "text-white hover:bg-white/10"
			}`}
		>
			<Icon className="h-5 w-5" />
			<span>{label}</span>
		</div>
	);
};

const Dashboard = () => {
	return (
		<div className="flex min-h-screen bg-gray-50 font-sans">
			{/* Sidebar */}
			<aside className="w-64 bg-[#1e88e5] text-white flex flex-col fixed h-full shadow-xl">
				{/* Logo */}
				<div className="p-6 flex items-center gap-2">
					<Scale className="h-8 w-8 text-white" />
					<span className="text-2xl font-bold font-serif tracking-wide">
						LegaAI
					</span>
				</div>

				{/* Menu */}
				<nav className="flex-1 px-4 py-4 space-y-2">
					<SidebarItem
						icon={LayoutDashboard}
						label="Dashboard"
						active
						path="/"
					/>
					<SidebarItem
						icon={Users}
						label="User Management"
						path="/users"
					/>
					<SidebarItem
						icon={Zap}
						label="AI Performance"
						path="/ai-performance"
					/>
					<SidebarItem
						icon={CreditCard}
						label="Subscriptions"
						path="/subscriptions"
					/>
					<SidebarItem icon={MessageSquare} label="Ratings" />
				</nav>

				{/* Logout */}
				<div className="p-4 mb-4">
					<div className="border border-white/30 rounded-lg p-3 flex items-center gap-3 cursor-pointer hover:bg-white/10 transition-colors">
						<LogOut className="h-5 w-5" />
						<span>Log Out</span>
					</div>
				</div>
			</aside>

			{/* Main Content */}
			<main className="flex-1 ml-64 p-8">
				{/* Header */}
				<header className="flex justify-between items-start mb-8">
					<div>
						<h1 className="text-2xl font-semibold text-[#1e88e5]">
							Hi Admin !
						</h1>
						<p className="text-gray-500">
							Let's make your work easy
						</p>
					</div>
					<div className="flex items-center gap-3">
						<span className="text-[#1e88e5] font-medium border-r border-gray-300 pr-3 h-6 flex items-center">
							Admin User
						</span>
						<div className="bg-[#1e88e5] rounded-full p-1">
							<User className="h-5 w-5 text-white" />
						</div>
					</div>
				</header>

				{/* Title Section */}
				<section className="mb-6">
					<h2 className="text-3xl font-bold font-serif text-gray-800">
						Dashboard Overview
					</h2>
				</section>

				{/* Stats Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
					<Card className="rounded-xl shadow-sm border-none">
						<CardContent className="p-6 flex justify-between items-center">
							<div>
								<p className="text-sm font-medium text-gray-500 mb-1">
									Total Users
								</p>
								<div className="text-3xl font-bold text-gray-900 mb-2">
									150
								</div>
								<div className="flex items-center text-xs">
									<span className="text-green-500 font-bold mr-1">
										+12.5%
									</span>
									<span className="text-gray-400">
										vs last month
									</span>
								</div>
							</div>
							<div className="bg-blue-50 p-3 rounded-full">
								<Users className="h-6 w-6 text-[#1e88e5]" />
							</div>
						</CardContent>
					</Card>

					<Card className="rounded-xl shadow-sm border-none">
						<CardContent className="p-6 flex justify-between items-center">
							<div>
								<p className="text-sm font-medium text-gray-500 mb-1">
									Monthly Revenue
								</p>
								<div className="text-3xl font-bold text-gray-900 mb-2">
									$ 2,345
								</div>
								<div className="flex items-center text-xs">
									<span className="text-green-500 font-bold mr-1">
										+12.5%
									</span>
									<span className="text-gray-400">
										vs last month
									</span>
								</div>
							</div>
							<div className="bg-green-50 p-3 rounded-full">
								<DollarSign className="h-6 w-6 text-green-500" />
							</div>
						</CardContent>
					</Card>

					<Card className="rounded-xl shadow-sm border-none">
						<CardContent className="p-6 flex justify-between items-center">
							<div>
								<p className="text-sm font-medium text-gray-500 mb-1">
									Total Query
								</p>
								<div className="text-3xl font-bold text-gray-900 mb-2">
									2,000
								</div>
								<div className="flex items-center text-xs">
									<span className="text-green-500 font-bold mr-1">
										+12.5%
									</span>
									<span className="text-gray-400">
										vs last month
									</span>
								</div>
							</div>
							<div className="bg-purple-50 p-3 rounded-full">
								<MessageCircle className="h-6 w-6 text-purple-500" />
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Charts Section */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
					{/* User Growth Chart - Spans 2 cols */}
					<Card className="lg:col-span-2 rounded-xl shadow-sm border-none">
						<CardHeader className="flex flex-row items-center justify-between pb-2">
							<CardTitle className="text-lg font-medium text-gray-600">
								User Growth
							</CardTitle>
							<div className="flex gap-2 text-xs bg-gray-100 p-1 rounded-md">
								<span className="bg-white px-2 py-1 rounded shadow-sm text-blue-600 font-medium cursor-pointer">
									Monthly
								</span>
								<span className="px-2 py-1 text-gray-500 cursor-pointer">
									Weekly
								</span>
								<span className="px-2 py-1 text-gray-500 cursor-pointer">
									Daily
								</span>
							</div>
						</CardHeader>
						<CardContent>
							<div className="h-[250px] w-full">
								<ResponsiveContainer width="100%" height="100%">
									<BarChart
										data={userGrowthData}
										barSize={20}
									>
										<CartesianGrid
											strokeDasharray="3 3"
											vertical={false}
											stroke="#f0f0f0"
										/>
										<XAxis
											dataKey="name"
											tick={{
												fill: "#9ca3af",
												fontSize: 12,
											}}
											axisLine={false}
											tickLine={false}
										/>
										<YAxis
											tick={{
												fill: "#9ca3af",
												fontSize: 12,
											}}
											axisLine={false}
											tickLine={false}
										/>
										<Tooltip
											cursor={{ fill: "#f3f4f6" }}
											contentStyle={{
												borderRadius: "8px",
												border: "none",
												boxShadow:
													"0 4px 6px -1px rgb(0 0 0 / 0.1)",
												backgroundColor: "#fff",
											}}
										/>
										<Bar
											dataKey="users"
											fill="#3b82f6"
											radius={[4, 4, 0, 0]}
										/>
									</BarChart>
								</ResponsiveContainer>
							</div>
							<div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
								<div className="w-2 h-2 rounded-full bg-[#3b82f6]"></div>
								Total Users
								<div className="ml-auto font-medium">
									150 Users
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Monthly Revenue Chart */}
					<Card className="rounded-xl shadow-sm border-none">
						<CardHeader className="pb-2">
							<CardTitle className="text-lg font-medium text-gray-600">
								Monthly Revenue
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="mb-4">
								<div className="bg-[#e0f2fe] inline-block px-3 py-1 rounded-lg">
									<span className="text-2xl font-bold text-[#0c4a6e]">
										$2,345
									</span>
								</div>
							</div>
							<div className="h-[200px] w-full">
								<ResponsiveContainer width="100%" height="100%">
									<LineChart data={revenueData}>
										<Line
											type="monotone"
											dataKey="revenue"
											stroke="#3b82f6"
											strokeWidth={3}
											dot={false}
										/>
										<XAxis
											dataKey="name"
											tick={{
												fill: "#9ca3af",
												fontSize: 12,
											}}
											axisLine={false}
											tickLine={false}
											interval={0}
										/>
										<Tooltip
											content={({ active, payload }) => {
												if (
													active &&
													payload &&
													payload.length
												) {
													return (
														<div className="bg-[#ccfbf1] px-4 py-2 rounded-xl shadow-sm border-none">
															<span className="text-xl font-bold text-gray-900">
																$
																{payload[0].value?.toLocaleString()}
															</span>
														</div>
													);
												}
												return null;
											}}
											cursor={false}
										/>
									</LineChart>
								</ResponsiveContainer>
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Recent Activity Section */}
				<section>
					<h2 className="text-3xl font-bold font-serif text-gray-800 mb-6">
						Recent Activity
					</h2>
					<Card className="rounded-xl shadow-sm border-none overflow-hidden">
						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse">
								<thead>
									<tr className="bg-gray-50 text-gray-600 text-sm border-b border-gray-100">
										<th className="p-4 font-semibold">
											User
										</th>
										<th className="p-4 font-semibold">
											Activity
										</th>
										<th className="p-4 font-semibold">
											Account Status
										</th>
										<th className="p-4 font-semibold">
											Last Active
										</th>
									</tr>
								</thead>
								<tbody className="text-sm">
									{recentActivity.map((item, index) => (
										<tr
											key={index}
											className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
										>
											<td className="p-4">
												<div className="flex items-center gap-3">
													<Avatar>
														<AvatarImage
															src={item.avatar}
														/>
														<AvatarFallback>
															{item.user.charAt(
																0
															)}
														</AvatarFallback>
													</Avatar>
													<div>
														<div className="font-medium text-gray-900">
															{item.user}
														</div>
														<div className="text-gray-500 text-xs">
															{item.email}
														</div>
													</div>
												</div>
											</td>
											<td className="p-4 text-gray-600">
												{item.activity}
											</td>
											<td className="p-4">
												<Badge
													variant="secondary"
													className={`
                            ${
								item.status === "Active"
									? "bg-green-100 text-green-700 hover:bg-green-100"
									: ""
							}
                            ${
								item.status === "Inactive"
									? "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
									: ""
							}
                            ${
								item.status === "Banned"
									? "bg-red-100 text-red-700 hover:bg-red-100"
									: ""
							}
                            font-normal px-3 py-1 rounded-full
                          `}
												>
													{item.status}
												</Badge>
											</td>
											<td className="p-4 text-gray-500">
												{item.date}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div className="p-4 flex justify-end">
							<Button
								variant="outline"
								className="text-blue-600 border-none hover:text-blue-700 hover:bg-blue-50 font-medium"
							>
								View All
							</Button>
						</div>
					</Card>
				</section>
			</main>
		</div>
	);
};

export default Dashboard;
