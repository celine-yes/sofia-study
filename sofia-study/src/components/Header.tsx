import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Header() {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-[#C3CCD5]">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between relative">

					{/* MOBILE : Menu drawer */}
					<div className="md:hidden">
						<Sheet>
							<SheetTrigger className="p-2 rounded-md hover:bg-gray-300 transition">
								<Menu className="h-6 w-6 text-gray-800" />
							</SheetTrigger>

							<SheetContent side="left" className="w-64 bg-white p-6">
								<div className="flex flex-col space-y-6 mt-12">

									<Link to="/" className="text-lg font-medium text-gray-800 hover:text-[#5C83C1]">
										Présentation
									</Link>

									<Link to="/programme" className="text-lg font-medium text-gray-800 hover:text-[#5C83C1]">
										Programme
									</Link>

									<Link to="/qui-suis-je" className="text-lg font-medium text-gray-800 hover:text-[#5C83C1]">
										Qui suis-je ?
									</Link>

									<Button
										asChild
										className="bg-[#FCD581] text-gray-900 hover:bg-[#FCD581]/90 font-semibold"
									>
										<Link to="/contact">Me contacter</Link>
									</Button>

								</div>
							</SheetContent>
						</Sheet>
					</div>


					{/*  MOBILE : Logo + Titre centré */}
					<div className="md:hidden absolute left-1/2 -translate-x-1/2 flex items-center gap-3 whitespace-nowrap">
						<img
							src="/sofia.webp"
							alt="Sofia"
							className="w-8 h-8 rounded-full object-cover border border-gray-300"
						/>
						<span className="text-xl font-semibold text-gray-800">
							Sofia's Study Academy
						</span>
					</div>

					{/* DESKTOP : Logo + Titre à gauche */}
					<div className="hidden md:flex items-center gap-3 flex-shrink-0">
						<img
							src="/sofia.webp"
							alt="Sofia"
							className="w-8 h-8 rounded-full object-cover border border-gray-300"
						/>
						<span className="text-xl font-semibold text-gray-800 whitespace-nowrap">
							Sofia's Study Academy
						</span>
					</div>


					{/* DESKTOP NAVIGATION */}
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

					{/* DESKTOP BUTTON RIGHT */}
					<div className="flex-shrink-0 hidden md:block">
						<Button
							size="sm"
							asChild
							className="bg-[#FCD581] text-gray-900 hover:bg-[#FCD581]/90 font-semibold px-6 rounded-lg shadow-sm transition-all hover:scale-105 border-2 border-gray-900/10"
						>
							<Link to="/contact">Me contacter</Link>
						</Button>
					</div>

				</div>
			</div>
		</nav>
	)
}
