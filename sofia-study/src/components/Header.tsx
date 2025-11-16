import { GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header({ isScrolled }: { isScrolled: boolean }) {
	return (
		<nav className={`fixed top-0 left-0 right-0 z-50 border-b border-gray-200 transition-all duration-300 ${isScrolled ? 'bg-[#C3CCD5]/80 backdrop-blur-md shadow-md' : 'bg-[#C3CCD5]'
			}`}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div className="flex items-center gap-2 flex-shrink-0">
						<GraduationCap className="h-6 w-6 text-gray-800" />
						<span className="text-xl font-semibold text-gray-800">StudyMethod</span>
					</div>

					<div className="hidden md:block absolute left-1/2 -translate-x-1/2">
						<div className="flex items-center space-x-8">
							<a href="#programme" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Programme</a>
							<a href="#temoignages" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Témoignages</a>
							<a href="#apropos" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">À propos</a>
							<a href="#contact" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
						</div>
					</div>

					<div className="flex-shrink-0">
						<Button
							size="sm"
							asChild
							className="bg-[#FCD581] text-gray-900 hover:bg-[#FCD581]/90 font-semibold px-6 rounded-lg shadow-sm transition-all hover:scale-105 border-2 border-gray-900/10"
						>
							<a href="#contact">Nous contacter</a>
						</Button>
					</div>
				</div>
			</div>
		</nav>
	)
}
