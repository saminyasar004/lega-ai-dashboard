import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	Github,
	Layers,
	Zap,
	Palette,
	Moon,
	Sun,
	Code2,
	Terminal,
} from "lucide-react";
import Dashboard from "@/pages/Dashboard";
import UserManagement from "@/pages/UserManagement";
import AIPerformance from "@/pages/AIPerformance";
import Subscriptions from "@/pages/Subscriptions";
import Ratings from "@/pages/Ratings";

const queryClient = new QueryClient();

const LandingPage = () => {
	return (
		<div className="min-h-screen bg-background text-foreground transition-colors duration-300">
			{/* Navigation */}
			<nav className="container mx-auto flex items-center justify-between p-4 md:p-6">
				<div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
					<Zap className="h-6 w-6 text-primary" />
					<span>ReactBoilerplate</span>
				</div>
				<div className="flex items-center gap-4">
					<a
						href="https://github.com/saminyasar004/react-ts-tailwind-boilerplate"
						target="_blank"
						rel="noreferrer"
						className="text-sm font-medium hover:underline underline-offset-4 hidden sm:block"
					>
						GitHub
					</a>
					<ModeToggle />
				</div>
			</nav>

			{/* Hero Section */}
			<main className="container mx-auto px-4 py-12 md:py-24 lg:py-32 flex flex-col items-center text-center space-y-8">
				<div className="space-y-4 max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
					<Badge
						variant="secondary"
						className="px-4 py-1 text-sm rounded-full"
					>
						v2.0 Now Available
					</Badge>
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent pb-2">
						Modern React Development{" "}
						<br className="hidden md:block" />
						Made Effortless.
					</h1>
					<p className="text-lg md:text-xl text-muted-foreground max-w-[700px] mx-auto">
						Jumpstart your next project with a production-ready
						template featuring Vite, TypeScript, Tailwind CSS, and
						shadcn/ui.
					</p>
				</div>

				<div className="flex flex-col sm:flex-row gap-4 w-full justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
					<Button
						size="lg"
						className="gap-2 h-12 px-8 text-base"
						asChild
					>
						<a
							href="https://github.com/saminyasar004/react-ts-tailwind-boilerplate/generate"
							target="_blank"
							rel="noreferrer"
						>
							<Terminal className="h-5 w-5" />
							Use Template
						</a>
					</Button>
					<Button
						size="lg"
						variant="outline"
						className="gap-2 h-12 px-8 text-base"
						asChild
					>
						<a
							href="https://github.com/saminyasar004/react-ts-tailwind-boilerplate"
							target="_blank"
							rel="noreferrer"
						>
							<Github className="h-5 w-5" />
							View on GitHub
						</a>
					</Button>
				</div>

				{/* Features Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-16 text-left animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
					<FeatureCard
						icon={<Zap className="h-10 w-10 text-yellow-500" />}
						title="Vite Powered"
						description="Instant server start and lightning-fast HMR for an incredible developer experience."
					/>
					<FeatureCard
						icon={<Code2 className="h-10 w-10 text-blue-500" />}
						title="TypeScript Ready"
						description="Built with strict type safety in mind to catch errors before they happen."
					/>
					<FeatureCard
						icon={<Palette className="h-10 w-10 text-pink-500" />}
						title="Tailwind CSS v3"
						description="Utility-first CSS framework packed with classes for rapid UI development."
					/>
					<FeatureCard
						icon={
							<Layers className="h-10 w-10 text-slate-500 dark:text-slate-400" />
						}
						title="shadcn/ui"
						description="Beautifully designed components built with Radix UI and Tailwind CSS."
					/>
					<FeatureCard
						icon={<Moon className="h-10 w-10 text-indigo-500" />}
						title="Dark Mode"
						description="Fully integrated dark mode support with next-themes and persistent storage."
					/>
					<FeatureCard
						icon={<Terminal className="h-10 w-10 text-green-500" />}
						title="Developer Experience"
						description="Pre-configured with ESLint, Prettier, and path aliases for a clean codebase."
					/>
				</div>
			</main>

			{/* Footer */}
			<footer className="border-t py-8 mt-12">
				<div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
					<p>
						© {new Date().getFullYear()} React Boilerplate. Open
						Source.
					</p>
					<div className="flex items-center gap-1">
						Created by
						<a
							href="https://github.com/saminyasar004"
							target="_blank"
							rel="noreferrer"
							className="font-medium text-foreground hover:underline"
						>
							@saminyasar004
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

const FeatureCard = ({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
}) => (
	<Card className="border-border/40 bg-card/50 backdrop-blur-sm hover:bg-accent/50 transition-colors">
		<CardHeader>
			<div className="mb-2 p-2 w-fit rounded-lg bg-background border">
				{icon}
			</div>
			<CardTitle>{title}</CardTitle>
		</CardHeader>
		<CardContent>
			<CardDescription className="text-base">
				{description}
			</CardDescription>
		</CardContent>
	</Card>
);

const App = () => (
	<QueryClientProvider client={queryClient}>
		<TooltipProvider>
			<Sonner />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/users" element={<UserManagement />} />
					<Route path="/ai-performance" element={<AIPerformance />} />
					<Route path="/subscriptions" element={<Subscriptions />} />
					<Route path="/ratings" element={<Ratings />} />
				</Routes>
			</BrowserRouter>
		</TooltipProvider>
	</QueryClientProvider>
);

export default App;
