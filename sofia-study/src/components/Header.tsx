import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Header({ }: {}) {
	return (
		<nav className={`fixed top-0 left-0 right-0 z-50 border-b border-gray-200 transition-all duration-300 bg-[#C3CCD5]`}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div className="flex items-center gap-3 flex-shrink-0">
						{/* Image ronde */}
						<img
							src="/sofia.webp"
							alt="Sofia"
							className="w-8 h-8 rounded-full object-cover border border-gray-300"
						/>

						{/* Texte */}
						<span className="text-xl font-semibold text-gray-800">Sofia's Study Academy</span>
					</div>


					<div className="hidden md:block absolute left-1/2 -translate-x-1/2">
						<div className="flex items-center space-x-8">
							<Link
								to="/"
								className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
							>
								Présentation
							</Link>

							<Link
								to="/programme"
								className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
							>
								Programme
							</Link>

							<Link
								to="/qui-suis-je"
								className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
							>
								Qui suis-je ?
							</Link>
						</div>

					</div>

					<div className="flex-shrink-0">
						<Button
							size="sm"
							asChild
							className="bg-[#FCD581] text-gray-900 hover:bg-[#FCD581]/90 font-semibold px-6 rounded-lg shadow-sm transition-all hover:scale-105 border-2 border-gray-900/10"
						>
							<Link to="/contact">
								Me contacter
							</Link>
						</Button>


					</div>
				</div>
			</div>
		</nav>
	)
}
