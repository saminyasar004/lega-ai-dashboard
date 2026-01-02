import React, { useState } from "react";
import {
	Scale,
	LayoutDashboard,
	Users,
	Zap,
	CreditCard,
	MessageSquare,
	LogOut,
	MoreVertical,
	Eye,
	Mail,
	Ban,
	Search,
	User,
	UserCheck,
	UserX,
	Crown,
	MapPin,
	Calendar,
	Activity,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useNavigate, useLocation } from "react-router-dom";

// Mock Data
const users = [
	{
		id: "SJ",
		name: "Sarah Johnson",
		email: "sarah.johnson@email.com",
		status: "Active",
		subscription: "Premium",
		queries: 145,
		lastActive: "2024-12-27",
		location: "New York, USA",
		registered: "27-12-2025",
	},
	{
		id: "MC",
		name: "Michael Chen",
		email: "m.chen@lawfirm.com",
		status: "Active",
		subscription: "Enterprise",
		queries: 312,
		lastActive: "2024-12-26",
		location: "San Francisco, USA",
		registered: "15-08-2025",
	},
	{
		id: "ER",
		name: "Emily Rodriguez",
		email: "emily.r@company.org",
		status: "Active",
		subscription: "Basic",
		queries: 67,
		lastActive: "2024-12-25",
		location: "Austin, USA",
		registered: "03-11-2025",
	},
	{
		id: "JW",
		name: "James Wilson",
		email: "j.wilson@gmail.com",
		status: "Inactive",
		subscription: "Free",
		queries: 12,
		lastActive: "2024-11-15",
		location: "London, UK",
		registered: "10-01-2025",
	},
	{
		id: "AF",
		name: "Amanda Foster",
		email: "amanda.foster@legal.io",
		status: "Active",
		subscription: "Premium",
		queries: 234,
		lastActive: "2024-12-27",
		location: "Toronto, Canada",
		registered: "22-09-2025",
	},
	{
		id: "DK",
		name: "David Kim",
		email: "d.kim@startup.tech",
		status: "Active",
		subscription: "Enterprise",
		queries: 456,
		lastActive: "2024-12-27",
		location: "Seoul, South Korea",
		registered: "05-05-2025",
	},
	{
		id: "LT",
		name: "Lisa Thompson",
		email: "lisa.t@corp.net",
		status: "Banned",
		subscription: "Basic",
		queries: 23,
		lastActive: "2024-10-30",
		location: "Sydney, Australia",
		registered: "14-07-2025",
	},
	{
		id: "RM",
		name: "Robert Martinez",
		email: "rob.martinez@firm.law",
		status: "Active",
		subscription: "Premium",
		queries: 189,
		lastActive: "2024-12-26",
		location: "Madrid, Spain",
		registered: "30-03-2025",
	},
];

const SidebarItem = ({
	icon: Icon,
	label,
	path,
}: {
	icon: React.ElementType;
	label: string;
	path?: string;
}) => {
	const navigate = useNavigate();
	const location = useLocation();
	const isActive =
		location.pathname === path ||
		(path === "/" && location.pathname === "/dashboard");

	return (
		<div
			onClick={() => path && navigate(path)}
			className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
				isActive
					? "bg-white text-[#1e88e5] font-medium"
					: "text-white hover:bg-white/10"
			}`}
		>
			<Icon className="h-5 w-5" />
			<span>{label}</span>
		</div>
	);
};

const UserManagement = () => {
	const [selectedUser, setSelectedUser] = React.useState<
		(typeof users)[0] | null
	>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleAction = (user: (typeof users)[0], action: string) => {
		if (action === "view") {
			setSelectedUser(user);
			setIsModalOpen(true);
		}
	};

	return (
		<div className="flex min-h-screen bg-gray-50 font-sans">
			{/* Sidebar */}
			<aside className="w-64 bg-[#1e88e5] text-white flex flex-col fixed h-full shadow-xl z-10">
				<div className="p-6 flex items-center gap-2">
					<Scale className="h-8 w-8 text-white" />
					<span className="text-2xl font-bold font-serif tracking-wide">
						LegaAI
					</span>
				</div>
				<nav className="flex-1 px-4 py-4 space-y-2">
					<SidebarItem
						icon={LayoutDashboard}
						label="Dashboard"
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
					<SidebarItem icon={CreditCard} label="Subscriptions" />
					<SidebarItem icon={MessageSquare} label="Ratings" />
				</nav>
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

				{/* Page Title */}
				<section className="mb-6">
					<h2 className="text-3xl font-bold font-serif text-gray-800">
						User Management
					</h2>
				</section>

				{/* Stats Cards */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
					{[
						{
							label: "Total Users",
							value: "150",
							icon: Users,
							color: "text-blue-500",
							bg: "bg-blue-50",
						},
						{
							label: "Active Users",
							value: "64",
							icon: UserCheck,
							color: "text-green-500",
							bg: "bg-green-50",
						},
						{
							label: "Banned Users",
							value: "4",
							icon: UserX,
							color: "text-red-500",
							bg: "bg-red-50",
						},
						{
							label: "Premium Users",
							value: "12",
							icon: Crown,
							color: "text-purple-500",
							bg: "bg-purple-50",
						},
					].map((stat, index) => (
						<Card
							key={index}
							className="rounded-xl shadow-sm border-none"
						>
							<CardContent className="p-6 flex justify-between items-center">
								<div>
									<p className="text-sm font-medium text-gray-500 mb-1">
										{stat.label}
									</p>
									<div className="text-3xl font-bold text-gray-900">
										{stat.value}
									</div>
								</div>
								<div className={`${stat.bg} p-3 rounded-full`}>
									<stat.icon
										className={`h-6 w-6 ${stat.color}`}
									/>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Users Table Section */}
				<Card className="rounded-xl shadow-sm border-none">
					<div className="p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
						<h3 className="text-xl font-bold font-serif text-gray-800">
							Users
						</h3>
						<div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
							<div className="relative">
								<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
								<input
									type="text"
									placeholder="Search users..."
									className="pl-9 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
								/>
							</div>
							<Select defaultValue="all">
								<SelectTrigger className="w-[130px]">
									<SelectValue placeholder="All Status" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="all">
										All Status
									</SelectItem>
									<SelectItem value="active">
										Active
									</SelectItem>
									<SelectItem value="inactive">
										Inactive
									</SelectItem>
									<SelectItem value="banned">
										Banned
									</SelectItem>
								</SelectContent>
							</Select>
							<Select defaultValue="all">
								<SelectTrigger className="w-[130px]">
									<SelectValue placeholder="All Plans" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="all">
										All Plans
									</SelectItem>
									<SelectItem value="premium">
										Premium
									</SelectItem>
									<SelectItem value="enterprise">
										Enterprise
									</SelectItem>
									<SelectItem value="basic">Basic</SelectItem>
									<SelectItem value="free">Free</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>

					<div className="overflow-x-auto">
						<table className="w-full text-left border-collapse">
							<thead>
								<tr className="bg-white text-gray-500 text-xs uppercase border-b border-gray-100">
									<th className="p-4 font-medium">User</th>
									<th className="p-4 font-medium">Status</th>
									<th className="p-4 font-medium">
										Subscription
									</th>
									<th className="p-4 font-medium">Queries</th>
									<th className="p-4 font-medium">
										Last Active
									</th>
									<th className="p-4 font-medium text-right">
										Actions
									</th>
								</tr>
							</thead>
							<tbody className="text-sm">
								{users.map((user, index) => (
									<tr
										key={index}
										className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
									>
										<td className="p-4">
											<div className="flex items-center gap-3">
												<Avatar
													className={`h-9 w-9 ${
														index % 3 === 0
															? "bg-blue-100 text-blue-600"
															: index % 3 === 1
															? "bg-purple-100 text-purple-600"
															: "bg-pink-100 text-pink-600"
													}`}
												>
													<AvatarFallback className="bg-transparent">
														{user.id}
													</AvatarFallback>
												</Avatar>
												<div>
													<div className="font-medium text-gray-900">
														{user.name}
													</div>
													<div className="text-gray-500 text-xs">
														{user.email}
													</div>
												</div>
											</div>
										</td>
										<td className="p-4">
											<Badge
												className={`
                        ${
							user.status === "Active"
								? "bg-green-100 text-green-700 hover:bg-green-100"
								: ""
						}
                        ${
							user.status === "Inactive"
								? "bg-gray-100 text-gray-700 hover:bg-gray-100"
								: ""
						}
                        ${
							user.status === "Banned"
								? "bg-red-100 text-red-700 hover:bg-red-100"
								: ""
						}
                        font-normal rounded-full px-3
                      `}
											>
												{user.status}
											</Badge>
										</td>
										<td className="p-4">
											<Badge
												variant="outline"
												className={`
                        ${
							user.subscription === "Premium"
								? "bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-100"
								: ""
						}
                        ${
							user.subscription === "Enterprise"
								? "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-100"
								: ""
						}
                         ${
								user.subscription === "Basic"
									? "bg-orange-50 text-orange-700 border-orange-100 hover:bg-orange-50"
									: ""
							}
                         ${
								user.subscription === "Free"
									? "bg-gray-50 text-gray-700 border-gray-100 hover:bg-gray-50"
									: ""
							}
                        font-normal border rounded-full px-3
                      `}
											>
												{user.subscription}
											</Badge>
										</td>
										<td className="p-4 text-gray-600">
											{user.queries}
										</td>
										<td className="p-4 text-gray-500">
											{user.lastActive}
										</td>
										<td className="p-4 text-right">
											<DropdownMenu>
												<DropdownMenuTrigger asChild>
													<Button
														variant="ghost"
														className="h-8 w-8 p-0 text-gray-400 hover:text-gray-600"
													>
														<MoreVertical className="h-4 w-4" />
													</Button>
												</DropdownMenuTrigger>
												<DropdownMenuContent
													align="end"
													className="w-48 bg-white"
												>
													<DropdownMenuItem
														className="gap-2 cursor-pointer"
														onClick={() =>
															handleAction(
																user,
																"view"
															)
														}
													>
														<Eye className="h-4 w-4 text-blue-500" />
														<span>
															View Details
														</span>
													</DropdownMenuItem>
													<DropdownMenuItem className="gap-2 cursor-pointer">
														<Mail className="h-4 w-4 text-blue-500" />
														<span>Send Mail</span>
													</DropdownMenuItem>
													<DropdownMenuItem className="gap-2 cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50">
														<Ban className="h-4 w-4" />
														<span>Ban User</span>
													</DropdownMenuItem>
												</DropdownMenuContent>
											</DropdownMenu>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					{/* Pagination */}
					<div className="p-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
						<div>Showing 1 to 8 of 24 entries</div>
						<div className="flex gap-1">
							<Button
								variant="outline"
								size="sm"
								className="h-8 px-3 text-gray-500"
								disabled
							>
								Previous
							</Button>
							<Button
								variant="default"
								size="sm"
								className="h-8 w-8 bg-blue-600 hover:bg-blue-700 text-white p-0"
							>
								1
							</Button>
							<Button
								variant="outline"
								size="sm"
								className="h-8 w-8 p-0 text-gray-600"
							>
								2
							</Button>
							<Button
								variant="outline"
								size="sm"
								className="h-8 w-8 p-0 text-gray-600"
							>
								3
							</Button>
							<Button
								variant="outline"
								size="sm"
								className="h-8 px-3 text-gray-600"
							>
								Next
							</Button>
						</div>
					</div>
				</Card>
			</main>

			{/* User Details Modal */}
			<Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
				<DialogContent className="sm:max-w-md bg-white p-0 overflow-hidden border-none rounded-2xl">
					<div className="p-8">
						<DialogHeader className="mb-6 text-left">
							<DialogTitle className="text-xl font-bold font-serif text-gray-800">
								User Details
							</DialogTitle>
						</DialogHeader>

						{selectedUser && (
							<div className="space-y-8">
								<div className="flex items-center gap-4">
									<Avatar className="h-20 w-20 bg-blue-100 text-blue-600 text-2xl">
										<AvatarFallback>
											{selectedUser.id}
										</AvatarFallback>
									</Avatar>
									<div>
										<h2 className="text-xl font-bold text-gray-900">
											{selectedUser.name}
										</h2>
										<p className="text-gray-500 mb-2">
											{selectedUser.email}
										</p>
										<div className="flex gap-2">
											<Badge className="bg-green-100 text-green-700 font-normal hover:bg-green-100 hover:text-green-700 border-none px-3 py-0.5">
												{selectedUser.status}
											</Badge>
											<Badge className="bg-purple-600 text-white font-normal hover:bg-purple-700 border-none px-3 py-0.5">
												{selectedUser.subscription}
											</Badge>
										</div>
									</div>
								</div>

								<div className="grid grid-cols-2 gap-y-6 gap-x-4">
									<div>
										<div className="text-gray-500 text-sm mb-1">
											Registered
										</div>
										<div className="font-semibold text-gray-900 flex items-center gap-2">
											{/* <Calendar className="h-4 w-4 text-gray-400" /> */}
											{selectedUser.registered}
										</div>
									</div>
									<div>
										<div className="text-gray-500 text-sm mb-1">
											Last Active
										</div>
										<div className="font-semibold text-gray-900 flex items-center gap-2">
											{/* <Activity className="h-4 w-4 text-gray-400" /> */}
											{selectedUser.registered}
										</div>
									</div>
									<div>
										<div className="text-gray-500 text-sm mb-1">
											Total Queries
										</div>
										<div className="font-semibold text-gray-900">
											{selectedUser.queries}
										</div>
									</div>
									<div>
										<div className="text-gray-500 text-sm mb-1">
											Location
										</div>
										<div className="font-semibold text-gray-900 flex items-center gap-2">
											{/* <MapPin className="h-4 w-4 text-gray-400" /> */}
											{selectedUser.location}
										</div>
									</div>
								</div>

								<div className="flex gap-3 pt-2">
									<Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white h-11 gap-2 text-base font-normal">
										<Mail className="h-5 w-5" />
										Send Mail
									</Button>
									<Button className="flex-1 bg-red-500 hover:bg-red-600 text-white h-11 gap-2 text-base font-normal">
										<Ban className="h-5 w-5" />
										Ban User
									</Button>
								</div>
							</div>
						)}
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default UserManagement;
