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
	MessageCircle,
	ThumbsUp,
	ThumbsDown,
	FileText,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useLocation } from "react-router-dom";

// Mock Data
const feedbackData = [
	{
		user: "Emma Johnson",
		files: "Uploaded File",
		issueType: "Regulatory compliance",
		feedback: "Positive",
	},
	{
		user: "Michael Chen",
		files: "None",
		issueType: "Regulatory compliance",
		feedback: "Positive",
	},
	{
		user: "Sophia Rodriguez",
		files: "None",
		issueType: "Regulatory compliance",
		feedback: "Negative",
	},
	{
		user: "James Wilson",
		files: "Uploaded File",
		issueType: "Regulatory compliance",
		feedback: "Positive",
	},
	{
		user: "Olivia Martinez",
		files: "Uploaded File",
		issueType: "Regulatory compliance",
		feedback: "Negative",
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

const AIPerformance = () => {
	// State for the prompt text (editable)
	const [promptText, setPromptText] = React.useState(
		"You are an AI-based Legal Assistant that provides clear, general legal information to help users understand laws, rights, and common legal processes. Your responses should be simple, neutral, and easy to understand, avoiding complex legal jargon. You do not give definitive legal advice or replace a licensed lawyer; all information is for guidance only. When needed, encourage users to consult a qualified legal professional, ask clarifying questions if details are missing, and tailor responses to the user's jurisdiction when provided."
	);
	const [isEditing, setIsEditing] = React.useState(false);

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
						AI Performance
					</h2>
				</section>

				{/* Stats Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
					{/* Total Queries */}
					<Card className="rounded-xl shadow-sm border-none relative overflow-hidden group">
						<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500"></div>
						<CardContent className="p-6 flex justify-between items-center">
							<div>
								<p className="text-sm font-bold text-gray-500 mb-2">
									Total Queries
								</p>
								<div className="text-3xl font-bold text-gray-900">
									2,000
								</div>
							</div>
							<div className="bg-purple-100 p-3 rounded-xl">
								<MessageCircle className="h-6 w-6 text-purple-500" />
							</div>
						</CardContent>
					</Card>

					{/* Positive Feedback */}
					<Card className="rounded-xl shadow-sm border-none relative overflow-hidden group">
						<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600"></div>
						<CardContent className="p-6 flex justify-between items-center">
							<div>
								<p className="text-sm font-bold text-gray-500 mb-2">
									Positive Feedback
								</p>
								<div className="text-3xl font-bold text-gray-900">
									640
								</div>
							</div>
							<div className="bg-green-50 p-3 rounded-xl">
								<ThumbsUp className="h-6 w-6 text-green-500" />
							</div>
						</CardContent>
					</Card>

					{/* Negative Feedback */}
					<Card className="rounded-xl shadow-sm border-none relative overflow-hidden group">
						<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600"></div>
						<CardContent className="p-6 flex justify-between items-center">
							<div>
								<p className="text-sm font-bold text-gray-500 mb-2">
									Negative Feedback
								</p>
								<div className="text-3xl font-bold text-gray-900">
									40
								</div>
							</div>
							<div className="bg-red-50 p-3 rounded-xl">
								<ThumbsDown className="h-6 w-6 text-red-500" />
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Prompt Modify Section */}
				<section className="mb-8">
					<h2 className="text-2xl font-bold font-serif text-gray-800 mb-4">
						Prompt Modify
					</h2>
					<Card className="rounded-xl shadow-sm border-none p-6">
						<textarea
							className="w-full h-40 text-gray-600 text-lg leading-relaxed border-none focus:outline-none focus:ring-0 resize-none bg-transparent"
							value={promptText}
							onChange={(e) => setPromptText(e.target.value)}
							disabled={!isEditing}
						/>
					</Card>
					<div className="grid grid-cols-2 gap-4 mt-4">
						<Button
							variant="outline"
							className="w-full border-blue-500 text-blue-500 hover:bg-blue-50 h-12 text-lg font-normal"
							onClick={() => setIsEditing(!isEditing)}
						>
							{isEditing ? "Cancel" : "Edit"}
						</Button>
						<Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg font-normal">
							Save
						</Button>
					</div>
				</section>

				{/* Recent Feedbacks Section */}
				<section>
					<h2 className="text-2xl font-bold font-serif text-gray-800 mb-6">
						Recent Feedbacks
					</h2>
					<Card className="rounded-xl shadow-sm border-none overflow-hidden pb-4">
						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse">
								<thead>
									<tr className="bg-white text-gray-500 text-xs text-left border-b border-gray-100">
										<th className="p-6 font-normal w-1/5">
											User
										</th>
										<th className="p-6 font-normal w-1/5">
											Files
										</th>
										<th className="p-6 font-normal w-1/5">
											Issue Type
										</th>
										<th className="p-6 font-normal w-1/5">
											Feedback
										</th>
										<th className="p-6 font-normal w-1/5 text-center">
											Answer Details
										</th>
									</tr>
								</thead>
								<tbody className="text-sm">
									{feedbackData.map((item, index) => (
										<tr
											key={index}
											className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
										>
											<td className="p-6 font-medium text-gray-900">
												{item.user}
											</td>
											<td className="p-6 text-gray-600">
												{item.files ===
												"Uploaded File" ? (
													<span className="underline decoration-gray-400 cursor-pointer">
														{item.files}
													</span>
												) : (
													item.files
												)}
											</td>
											<td className="p-6 text-gray-600">
												{item.issueType}
											</td>
											<td className="p-6">
												<Badge
													className={`
                                                        ${
															item.feedback ===
															"Positive"
																? "bg-green-100 text-green-700 hover:bg-green-100"
																: "bg-red-100 text-red-700 hover:bg-red-100"
														}
                                                        font-normal rounded-full px-3 py-0.5 gap-1 border-none shadow-none
                                                    `}
												>
													{item.feedback ===
													"Positive" ? (
														<ThumbsUp className="h-3 w-3" />
													) : (
														<ThumbsDown className="h-3 w-3" />
													)}
													{item.feedback}
												</Badge>
											</td>
											<td className="p-6 text-center">
												<Button
													variant="secondary"
													className="bg-blue-100/50 text-blue-500 hover:bg-blue-100 text-xs px-4 h-8 rounded-full font-medium"
												>
													View Message
												</Button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div className="p-4 text-center">
							<a
								href="#"
								className="text-blue-500 text-sm font-medium hover:underline"
							>
								View All Feedbacks
							</a>
						</div>
					</Card>
				</section>
			</main>
		</div>
	);
};

export default AIPerformance;
