import React, { useState } from "react";
import {
	Scale,
	LayoutDashboard,
	Users,
	Zap,
	CreditCard,
	MessageSquare,
	LogOut,
	User,
	Star,
	MessageCircle,
	ChevronDown,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useNavigate, useLocation } from "react-router-dom";

// Mock Data
const ratings = [
	{ id: 1, name: "Lora Jane", rating: 4, status: "Select status" },
	{ id: 2, name: "Jhon Doe", rating: 4, status: "Pending" },
	{ id: 3, name: "Jhon Doe", rating: 4, status: "Pending" },
	{ id: 4, name: "Jhon Doe", rating: 4, status: "Pending" },
	{ id: 5, name: "Jhon Doe", rating: 4, status: "Pending" },
	{ id: 6, name: "Jhon Doe", rating: 4, status: "Pending" },
	{ id: 7, name: "Jhon Doe", rating: 4, status: "Pending" },
	{ id: 8, name: "Jhon Doe", rating: 4, status: "Pending" },
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
	const isActive = location.pathname === path;

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

const Ratings = () => {
	const [timerValue, setTimerValue] = useState("10");

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
					<SidebarItem
						icon={CreditCard}
						label="Subscriptions"
						path="/subscriptions"
					/>
					<SidebarItem
						icon={MessageSquare}
						label="Ratings"
						path="/ratings"
					/>
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

				<h2 className="text-3xl font-bold font-serif text-gray-800 mb-8">
					Ratings Management
				</h2>

				{/* Stats & Timer */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
					{/* Total Ratings */}
					<Card className="rounded-xl shadow-sm border-none overflow-hidden relative">
						<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500" />
						<CardContent className="p-6 flex justify-between items-center">
							<div>
								<p className="text-sm font-medium text-gray-500 mb-1">
									Total Ratings
								</p>
								<div className="text-3xl font-bold text-blue-600">
									20
								</div>
							</div>
							<div className="bg-blue-50 p-3 rounded-full">
								<MessageSquare className="h-6 w-6 text-blue-500" />
							</div>
						</CardContent>
					</Card>

					{/* Published Ratings */}
					<Card className="rounded-xl shadow-sm border-none overflow-hidden relative">
						<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-green-500" />
						<CardContent className="p-6 flex justify-between items-center">
							<div>
								<p className="text-sm font-medium text-gray-500 mb-1">
									Published Ratings
								</p>
								<div className="text-3xl font-bold text-green-600">
									15
								</div>
							</div>
							<div className="bg-green-50 p-3 rounded-full">
								<MessageCircle className="h-6 w-6 text-green-500" />
							</div>
						</CardContent>
					</Card>

					{/* Pending Ratings */}
					<Card className="rounded-xl shadow-sm border-none overflow-hidden relative">
						<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-500" />
						<CardContent className="p-6 flex justify-between items-center">
							<div>
								<p className="text-sm font-medium text-gray-500 mb-1">
									Pending Ratings
								</p>
								<div className="text-3xl font-bold text-red-600">
									5
								</div>
							</div>
							<div className="bg-red-50 p-3 rounded-full">
								<MessageCircle className="h-6 w-6 text-red-500" />
							</div>
						</CardContent>
					</Card>

					{/* Review Popup Timer */}
					<Card className="rounded-xl shadow-sm border-none overflow-hidden relative">
						<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-400" />
						<CardContent className="p-4 flex flex-col justify-center h-full">
							<p className="text-sm font-medium text-gray-500 mb-2">
								Review Popup Timer
							</p>
							<div className="flex items-center gap-3">
								<Input
									type="number"
									value={timerValue}
									onChange={(e) =>
										setTimerValue(e.target.value)
									}
									className="text-2xl font-bold border-gray-200 h-10 w-20 text-center p-1"
								/>
								<span className="text-gray-500 text-sm">
									min
								</span>
								<Button className="bg-green-600 hover:bg-green-700 text-white h-9 px-4 ml-auto text-xs font-normal">
									save
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Ratings Table */}
				<Card className="rounded-xl shadow-sm border-none">
					<div className="p-6 border-b border-gray-100">
						<h3 className="text-xl font-bold font-serif text-gray-800">
							Rating Details
						</h3>
					</div>
					<div className="overflow-x-auto">
						<table className="w-full text-left border-collapse">
							<thead>
								<tr className="bg-gray-50 text-gray-500 text-xs uppercase border-b border-gray-100">
									<th className="p-4 font-medium pl-6">
										User Name
									</th>
									<th className="p-4 font-medium text-center">
										Ratings
									</th>
									<th className="p-4 font-medium text-center">
										Comments
									</th>
									<th className="p-4 font-medium text-right pr-6">
										Progress Status
									</th>
								</tr>
							</thead>
							<tbody className="text-sm">
								{ratings.map((rating, index) => (
									<tr
										key={index}
										className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
									>
										<td className="p-4 pl-6">
											<div className="flex items-center gap-3">
												<Avatar className="h-8 w-8 bg-pink-50 text-pink-500">
													<AvatarFallback>
														<User className="h-4 w-4" />
													</AvatarFallback>
												</Avatar>
												<span className="font-medium text-gray-900">
													{rating.name}
												</span>
											</div>
										</td>
										<td className="p-4 text-center">
											<div className="flex justify-center gap-1">
												{[1, 2, 3, 4, 5].map((star) => (
													<Star
														key={star}
														className={`h-4 w-4 ${
															star <=
															rating.rating
																? "fill-yellow-400 text-yellow-400"
																: "text-gray-200"
														}`}
													/>
												))}
											</div>
										</td>
										<td className="p-4 text-center">
											<button className="text-gray-500 underline decoration-gray-400 underline-offset-2 hover:text-blue-600 text-xs">
												View Comment
											</button>
										</td>
										<td className="p-4 text-right pr-6">
											<DropdownMenu>
												<DropdownMenuTrigger asChild>
													<Button
														variant="outline"
														className={`w-40 justify-between font-normal ml-auto ${
															rating.status ===
															"Pending"
																? "text-orange-500 border-gray-200"
																: "text-gray-600 border-gray-200"
														}`}
													>
														{rating.status}
														<ChevronDown className="h-4 w-4 opacity-50" />
													</Button>
												</DropdownMenuTrigger>
												<DropdownMenuContent
													align="end"
													className="w-[180px] p-4 flex flex-col gap-3 rounded-xl shadow-xl border-gray-100"
												>
													<div className="text-center font-normal text-xl mb-1 text-gray-700 font-sans">
														Action
													</div>
													<Button
														variant="outline"
														className="text-green-600 border-gray-200 hover:bg-green-50 hover:text-green-700 hover:border-green-200 h-11 text-base font-normal rounded-xl"
													>
														Publish
													</Button>
													<Button
														variant="outline"
														className="text-yellow-500 border-gray-200 hover:bg-yellow-50 hover:text-yellow-600 hover:border-yellow-200 h-11 text-base font-normal rounded-xl"
													>
														Pending
													</Button>
													<Button
														variant="outline"
														className="text-red-500 border-gray-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200 h-11 text-base font-normal rounded-xl"
													>
														Delete
													</Button>
												</DropdownMenuContent>
											</DropdownMenu>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					{/* Pagination */}
					<div className="p-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 pl-6 pr-6">
						<div>Showing 1 to 8 of 8 results</div>
						<div className="flex gap-1">
							<Button
								variant="outline"
								size="icon"
								className="h-8 w-8 text-gray-400 border-gray-200"
								disabled
							>
								<ChevronLeft className="h-4 w-4" />
							</Button>
							<Button
								variant="default"
								size="sm"
								className="h-8 w-8 bg-blue-100 text-blue-600 hover:bg-blue-200 border-none p-0 rounded-md font-normal"
							>
								1
							</Button>
							<Button
								variant="outline"
								size="sm"
								className="h-8 w-8 p-0 text-gray-600 border border-gray-200 rounded-md font-normal"
							>
								2
							</Button>
							<Button
								variant="outline"
								size="icon"
								className="h-8 w-8 text-gray-600 border-gray-200"
							>
								<ChevronRight className="h-4 w-4" />
							</Button>
						</div>
					</div>
				</Card>
			</main>
		</div>
	);
};

export default Ratings;
