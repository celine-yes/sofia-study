import { BookOpen, Brain, Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Programme() {
	return (
		<section id="programme" className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8 relative">
			<div className="absolute inset-0 opacity-5 pointer-events-none" style={{
				backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 29px, #5C83C1 29px, #5C83C1 30px)',
			}} />

			<div className="mx-auto max-w-7xl relative z-10">
				<div className="mb-12 text-center animate-fade-in-up">
					<div className="mb-4 inline-flex items-center gap-2">
						<BookOpen className="h-8 w-8 text-[#5C83C1]" />
						<h2 className="text-3xl font-bold text-[#5C83C1] sm:text-4xl">Notre Programme</h2>
					</div>
					<p className="mx-auto max-w-2xl text-lg text-gray-600 text-pretty">
						Un parcours complet pour maîtriser les méthodes d'apprentissage les plus efficaces
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-3">
					<Card className="border-none shadow-lg transition-all hover:shadow-xl hover:-translate-y-2 rounded-2xl animate-fade-in-up border-l-4 border-l-[#5C83C1]" style={{ animationDelay: '0.1s' }}>
						<CardContent className="p-8">
							<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#5C83C1]/10 border-2 border-[#5C83C1]">
								<BookOpen className="h-7 w-7 text-[#5C83C1]" />
							</div>
							<h3 className="mb-3 text-xl font-semibold text-gray-900">Techniques de Mémorisation</h3>
							<p className="text-gray-600 leading-relaxed">
								Apprends les méthodes de mémorisation scientifiques comme la répétition espacée et les palais de mémoire.
							</p>
						</CardContent>
					</Card>

					<Card className="border-none shadow-lg transition-all hover:shadow-xl hover:-translate-y-2 rounded-2xl animate-fade-in-up border-l-4 border-l-[#FCD581]" style={{ animationDelay: '0.2s' }}>
						<CardContent className="p-8">
							<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FCD581]/20 border-2 border-[#FCD581]">
								<Brain className="h-7 w-7 text-[#5C83C1]" />
							</div>
							<h3 className="mb-3 text-xl font-semibold text-gray-900">Organisation Efficace</h3>
							<p className="text-gray-600 leading-relaxed">
								Optimise ton temps et ta planification avec des stratégies éprouvées pour une productivité maximale.
							</p>
						</CardContent>
					</Card>

					<Card className="border-none shadow-lg transition-all hover:shadow-xl hover:-translate-y-2 rounded-2xl animate-fade-in-up border-l-4 border-l-[#5C83C1]" style={{ animationDelay: '0.3s' }}>
						<CardContent className="p-8">
							<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#5C83C1]/10 border-2 border-[#5C83C1]">
								<Trophy className="h-7 w-7 text-[#5C83C1]" />
							</div>
							<h3 className="mb-3 text-xl font-semibold text-gray-900">Préparation aux Examens</h3>
							<p className="text-gray-600 leading-relaxed">
								Maîtrise l'art de la révision stratégique et développe la confiance nécessaire pour exceller.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	)
}
