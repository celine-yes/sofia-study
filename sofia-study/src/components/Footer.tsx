import { GraduationCap } from "lucide-react"

export default function Footer() {
	return (
		<footer className="border-t-4 border-[#5C83C1] bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
					<div className="flex items-center gap-2">
						<GraduationCap className="h-5 w-5 text-[#5C83C1]" />
						<p className="text-sm text-gray-600">© 2025 StudyMethod. Tous droits réservés.</p>
					</div>
					<div className="flex gap-6">
						<a href="#" className="text-sm text-gray-600 hover:text-[#5C83C1] transition-colors">Mentions légales</a>
						<a href="#" className="text-sm text-gray-600 hover:text-[#5C83C1] transition-colors">Politique de confidentialité</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
