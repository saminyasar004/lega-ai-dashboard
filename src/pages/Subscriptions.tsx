import React, { useState } from "react";
import {
	Scale,
	LayoutDashboard,
	Users,
	Zap,
	CreditCard,
	MessageSquare,
	LogOut,
	Search,
	User,
	MoreVertical,
	Eye,
	Download,
	DollarSign,
	CreditCard as CardIcon,
	Crown,
	CheckCircle2,
	Pencil,
	Plus,
	Trash2,
	Save,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
import { Input } from "@/components/ui/input";

// Mock Data
const subscriptions = [
	{
		id: "IN-23456",
		user: "Sarah Johnson",
		email: "sarah.johnson@email.com",
		plan: "Premium",
		amount: "$ 4.99",
		status: "Active",
		purchaseDate: "27-12-2025",
		renewalDate: "27-01-2026",
	},
	{
		id: "IN-23457",
		user: "Michael Chen",
		email: "m.chen@lawfirm.com",
		plan: "Enterprise",
		amount: "$ 49.99",
		status: "Active",
		purchaseDate: "26-12-2025",
		renewalDate: "26-01-2026",
	},
	{
		id: "IN-23458",
		user: "James Wilson",
		email: "j.wilson@gmail.com",
		plan: "Basic",
		amount: "$ 0.00",
		status: "Expired",
		purchaseDate: "15-11-2025",
		renewalDate: "15-12-2025",
	},
	{
		id: "IN-23459",
		user: "Emily Rodriguez",
		email: "emily.r@company.org",
		plan: "Premium",
		amount: "$ 4.99",
		status: "Active",
		purchaseDate: "25-12-2025",
		renewalDate: "25-01-2026",
	},
	{
		id: "IN-23460",
		user: "David Kim",
		email: "d.kim@startup.tech",
		plan: "Enterprise",
		amount: "$ 49.99",
		status: "Active",
		purchaseDate: "24-12-2025",
		renewalDate: "24-01-2026",
	},
];

const plans = [
	{
		name: "Free plan",
		price: "$0.0",
		billing: "Billed Monthly.",
		features: [
			"Access to all basic features",
			"Basic reporting and analytics",
			"Up to 10 individual users",
			"20GB individual data each user",
			"Basic chat and email support",
		],
		buttonText: "Edit Plan",
	},
	{
		name: "Plus plan",
		price: "$20",
		billing: "Billed Monthly.",
		features: [
			"200+ integrations",
			"Advanced reporting and analytics",
			"Up to 20 individual users",
			"40GB individual data each user",
			"Priority chat and email support",
		],
		buttonText: "Edit Plan",
	},
	{
		name: "Elite plan",
		price: "$40",
		billing: "Billed Monthly.",
		features: [
			"Advanced custom fields",
			"Audit log and data history",
			"Unlimited individual users",
			"Unlimited individual data",
			"Personalised+priotity service",
		],
		buttonText: "Edit Plan",
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

const Subscriptions = () => {
	const [activeTab, setActiveTab] = useState<"subscriptions" | "plans">(
		"plans"
	);
	const [selectedSubscription, setSelectedSubscription] = useState<
		(typeof subscriptions)[0] | null
	>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	// Edit Modal State
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [editingPlan, setEditingPlan] = useState<any>(null); // Ideally use a proper type
	const [featureInputs, setFeatureInputs] = useState<string[]>([]);
	const [activePlan, setActivePlan] = useState<any>(plans[1]); // Default to Plus plan for editing demo

	const handleViewDetails = (sub: (typeof subscriptions)[0]) => {
		setSelectedSubscription(sub);
		setIsModalOpen(true);
	};

	const handleEditPlan = (plan: any) => {
		setEditingPlan(plan);
		// Ensure at least 4 inputs for the UI
		const features = [...plan.features];
		while (features.length < 4) features.push("");
		setFeatureInputs(features);
		setIsEditModalOpen(true);
	};

	const handleFeatureChange = (index: number, value: string) => {
		const newFeatures = [...featureInputs];
		newFeatures[index] = value;
		setFeatureInputs(newFeatures);
	};

	const handleDeleteFeature = (index: number) => {
		const newFeatures = featureInputs.filter((_, i) => i !== index);
		setFeatureInputs(newFeatures);
	};

	const handleAddFeature = () => {
		setFeatureInputs([...featureInputs, ""]);
	};

	const handleAddNewPlan = () => {
		const emptyPlan = {
			name: "New Plan",
			price: "",
			billing: "Monthly",
			features: [],
		};
		setEditingPlan(emptyPlan);
		setFeatureInputs(["", "", "", ""]);
		setIsEditModalOpen(true);
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
					<SidebarItem
						icon={CreditCard}
						label="Subscriptions"
						path="/subscriptions"
					/>
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
						Subscription Management
					</h2>
				</section>

				{/* Stats Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
					{[
						{
							label: "Total Revenue",
							value: "$ 2,345",
							icon: DollarSign,
							color: "text-blue-500",
							bg: "bg-blue-50",
						},
						{
							label: "Monthly Revenue",
							value: "$ 640",
							icon: DollarSign,
							color: "text-green-500",
							bg: "bg-green-50",
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
							className="rounded-xl shadow-sm border-none relative overflow-hidden group"
						>
							<div
								className={`absolute left-0 top-0 bottom-0 w-1.5 ${
									index === 0
										? "bg-blue-500"
										: index === 1
										? "bg-blue-600"
										: "bg-blue-700"
								}`}
							/>
							<CardContent className="p-6 flex justify-between items-center">
								<div>
									<p className="text-sm font-bold text-gray-500 mb-2">
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

				{/* Subscription Management Content */}
				<div className="mb-4">
					<h3 className="text-2xl font-bold font-serif text-gray-800 mb-1">
						Subscription Management
					</h3>
					<div className="flex justify-between items-center">
						<p className="text-gray-500 text-sm">
							Manage user subscriptions, payments, and billing
							information
						</p>
						<div className="relative">
							<Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
							<input
								type="text"
								placeholder="Search by user or email..."
								className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-64 bg-white"
							/>
						</div>
					</div>
				</div>

				<div className="bg-white rounded-xl shadow-sm p-6 mb-8">
					{/* Tabs */}
					<div className="flex border-b border-gray-200 mb-6 justify-between items-center">
						<div className="flex gap-8">
							<button
								className={`pb-3 text-sm font-medium transition-colors border-b-2 ${
									activeTab === "subscriptions"
										? "border-blue-500 text-blue-600"
										: "border-transparent text-gray-500 hover:text-gray-700"
								}`}
								onClick={() => setActiveTab("subscriptions")}
							>
								Active Subscriptions
							</button>
							<button
								className={`pb-3 text-sm font-medium transition-colors border-b-2 ${
									activeTab === "plans"
										? "border-blue-500 text-blue-600"
										: "border-transparent text-gray-500 hover:text-gray-700"
								}`}
								onClick={() => setActiveTab("plans")}
							>
								Active Plan Card
							</button>
						</div>
						{activeTab === "plans" && (
							<Button
								className="bg-blue-500 hover:bg-blue-600 text-white mb-2"
								onClick={handleAddNewPlan}
							>
								+ Add New Plans
							</Button>
						)}
					</div>

					{/* Content Based on Tab */}
					{activeTab === "subscriptions" ? (
						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse">
								<thead>
									<tr className="bg-white text-gray-500 text-xs uppercase border-b border-gray-100">
										<th className="p-4 font-medium">
											Payment ID
										</th>
										<th className="p-4 font-medium">
											User
										</th>
										<th className="p-4 font-medium">
											Plan
										</th>
										<th className="p-4 font-medium">
											Amount
										</th>
										<th className="p-4 font-medium">
											Status
										</th>
										<th className="p-4 font-medium">
											Date
										</th>
										<th className="p-4 font-medium text-right">
											Actions
										</th>
									</tr>
								</thead>
								<tbody className="text-sm">
									{subscriptions.map((sub, index) => (
										<tr
											key={index}
											className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
										>
											<td className="p-4 text-gray-500 font-medium">
												{sub.id}
											</td>
											<td className="p-4">
												<div className="flex items-center gap-3">
													<Avatar
														className={`h-8 w-8 ${
															index % 2 === 0
																? "bg-blue-100 text-blue-600"
																: "bg-purple-100 text-purple-600"
														}`}
													>
														<AvatarFallback className="bg-transparent text-xs">
															{sub.user
																.split(" ")
																.map(
																	(n) => n[0]
																)
																.join("")}
														</AvatarFallback>
													</Avatar>
													<span className="text-gray-900 font-medium">
														{sub.user}
													</span>
												</div>
											</td>
											<td className="p-4 text-gray-600">
												{sub.plan}
											</td>
											<td className="p-4 font-medium text-gray-900">
												{sub.amount}
											</td>
											<td className="p-4">
												<Badge
													className={`
                                                        ${
															sub.status ===
															"Active"
																? "bg-green-100 text-green-700"
																: "bg-gray-100 text-gray-700"
														}
                                                        font-normal rounded-full px-3 hover:bg-opacity-80
                                                    `}
												>
													{sub.status}
												</Badge>
											</td>
											<td className="p-4 text-gray-500">
												{sub.purchaseDate}
											</td>
											<td className="p-4 text-right">
												<DropdownMenu>
													<DropdownMenuTrigger
														asChild
													>
														<Button
															variant="ghost"
															className="h-8 w-8 p-0 text-gray-400 hover:text-gray-600"
														>
															<MoreVertical className="h-4 w-4" />
														</Button>
													</DropdownMenuTrigger>
													<DropdownMenuContent
														align="end"
														className="w-40 bg-white"
													>
														<DropdownMenuItem
															className="gap-2 cursor-pointer"
															onClick={() =>
																handleViewDetails(
																	sub
																)
															}
														>
															<Eye className="h-4 w-4 text-blue-500" />
															<span>
																View Details
															</span>
														</DropdownMenuItem>
														<DropdownMenuItem className="gap-2 cursor-pointer">
															<Download className="h-4 w-4 text-gray-500" />
															<span>Invoice</span>
														</DropdownMenuItem>
													</DropdownMenuContent>
												</DropdownMenu>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{plans.map((plan, index) => (
								<div
									key={index}
									className="border border-blue-200 rounded-xl bg-gradient-to-b from-blue-50/50 to-white/50 p-6 flex flex-col items-center text-center shadow-sm"
								>
									<div className="text-4xl font-bold font-serif text-slate-900 mb-1">
										{plan.price}
										<span className="text-lg font-normal text-slate-500">
											/mth
										</span>
									</div>
									<div className="text-blue-500 font-medium mb-1">
										{plan.name}
									</div>
									<div className="text-gray-400 text-xs mb-6">
										{plan.billing}
									</div>

									<div className="space-y-4 w-full text-left mb-8 flex-1">
										{plan.features.map((feature, i) => (
											<div
												key={i}
												className="flex items-start gap-3 text-sm text-gray-700"
											>
												<CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
												<span className="leading-tight">
													{feature}
												</span>
											</div>
										))}
									</div>

									<Button
										variant="outline"
										className="w-full bg-gray-100 hover:bg-gray-200 border-none text-gray-700"
										onClick={() => handleEditPlan(plan)}
									>
										Edit Plan
									</Button>
								</div>
							))}
						</div>
					)}
				</div>
			</main>

			{/* Payment Details Modal */}
			<Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
				<DialogContent className="sm:max-w-[500px] bg-white p-0 overflow-hidden border-none rounded-2xl shadow-2xl">
					<div className="p-8 pb-6">
						<DialogHeader className="mb-8 text-left">
							<DialogTitle className="text-2xl font-bold font-serif text-slate-900">
								Payment Details
							</DialogTitle>
						</DialogHeader>

						{selectedSubscription && (
							<div className="space-y-8">
								<div className="flex items-center gap-5">
									<Avatar className="h-24 w-24 bg-blue-100 text-blue-600 text-3xl font-semibold">
										<AvatarFallback>
											{selectedSubscription.user
												.split(" ")
												.map((n) => n[0])
												.join("")}
										</AvatarFallback>
									</Avatar>
									<div className="space-y-1">
										<h3 className="text-xl font-bold text-slate-900">
											{selectedSubscription.user}
										</h3>
										<p className="text-gray-500 font-light">
											{selectedSubscription.email}
										</p>
										<div className="flex gap-3 pt-2">
											<Badge className="bg-green-100 text-green-700 font-normal hover:bg-green-100 text-sm px-4 py-1 rounded-full border-none shadow-none">
												{selectedSubscription.status}
											</Badge>
											<Badge className="bg-purple-600 text-white font-normal hover:bg-purple-700 text-sm px-4 py-1 rounded-full border-none shadow-none">
												{selectedSubscription.plan}
											</Badge>
										</div>
									</div>
								</div>

								<div className="grid grid-cols-2 gap-y-8 gap-x-4">
									<div>
										<div className="text-gray-500 font-light text-lg mb-1">
											Purchase Date
										</div>
										<div className="text-xl font-bold text-slate-900">
											{selectedSubscription.purchaseDate}
										</div>
									</div>
									<div>
										<div className="text-gray-500 font-light text-lg mb-1">
											Renewal Date
										</div>
										<div className="text-xl font-bold text-slate-900">
											{selectedSubscription.renewalDate}
										</div>
									</div>
									<div>
										<div className="text-gray-500 font-light text-lg mb-1">
											Payment ID
										</div>
										<div className="text-xl font-bold text-slate-900">
											{selectedSubscription.id}
										</div>
									</div>
									<div>
										<div className="text-gray-500 font-light text-lg mb-1">
											Amount
										</div>
										<div className="text-xl font-bold text-slate-900">
											{selectedSubscription.amount}
										</div>
									</div>
								</div>
							</div>
						)}
					</div>

					<div className="p-8 pt-2">
						<Button
							className="w-full bg-[#ef4444] hover:bg-[#dc2626] text-white h-14 text-lg font-normal rounded-lg shadow-sm transition-colors"
							onClick={() => setIsModalOpen(false)}
						>
							Close
						</Button>
					</div>
				</DialogContent>
			</Dialog>

			{/* Edit Plan Modal */}
			<Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
				<DialogContent className="sm:max-w-3xl bg-white p-8 max-h-[90vh] overflow-y-auto rounded-xl">
					<DialogHeader className="flex flex-row justify-between items-center mb-6">
						<div className="flex items-center gap-2">
							<DialogTitle className="text-3xl font-bold font-serif text-slate-900">
								{editingPlan
									? editingPlan.name.replace(" plan", "") +
									  " Plan"
									: "Edit Plan"}
							</DialogTitle>
						</div>
						<Pencil className="h-6 w-6 text-gray-400" />
					</DialogHeader>

					{editingPlan && (
						<div className="space-y-8">
							<div>
								<label className="block text-gray-600 text-sm mb-2 font-medium">
									Plan Name
								</label>
								<Input
									defaultValue={editingPlan.name}
									className="h-12 text-lg border-gray-200"
								/>
							</div>

							<div className="grid grid-cols-2 gap-6">
								<div>
									<label className="block text-gray-600 text-sm mb-2 font-medium">
										Price ($)
									</label>
									<Input
										defaultValue="0"
										className="h-12 text-lg border-gray-200"
									/>
								</div>
								<div>
									<label className="block text-gray-600 text-sm mb-2 font-medium">
										Duration
									</label>
									<Input
										defaultValue="30 days"
										className="h-12 text-lg border-gray-200"
									/>
								</div>
							</div>

							<div>
								<label className="block text-gray-600 text-sm mb-2 font-medium">
									Billing
								</label>
								<Input
									defaultValue="Monthly"
									className="h-12 text-lg border-gray-200"
								/>
							</div>

							<div>
								<h4 className="text-xl font-bold font-serif text-slate-900 mb-4">
									Features List
								</h4>
								<div className="grid grid-cols-2 gap-6 mb-4">
									{featureInputs.map((feature, idx) => (
										<div key={idx} className="relative">
											<label className="block text-gray-900 text-sm mb-2 font-bold">
												Main Feature -{idx + 1}
											</label>
											<div className="flex items-center gap-2">
												<Input
													value={feature}
													onChange={(e) =>
														handleFeatureChange(
															idx,
															e.target.value
														)
													}
													placeholder="Features condition"
													className="h-12 border-gray-200 text-gray-500"
												/>
												<button
													onClick={() =>
														handleDeleteFeature(idx)
													}
													className="text-red-400 hover:text-red-600"
												>
													<Trash2 className="h-5 w-5" />
												</button>
											</div>
										</div>
									))}
								</div>

								<div className="flex gap-2">
									<Input
										placeholder="Add new features (optional)"
										className="h-12 border-gray-200"
									/>
									<Button
										variant="outline"
										className="h-12 w-12 p-0 border-gray-200"
										onClick={handleAddFeature}
									>
										<Plus className="h-5 w-5 text-gray-600" />
									</Button>
								</div>
							</div>

							<Button className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white text-lg font-normal gap-2">
								<Save className="h-5 w-5" />
								Save Changes
							</Button>
						</div>
					)}
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default Subscriptions;
