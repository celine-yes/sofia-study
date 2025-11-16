import { Lightbulb } from "lucide-react"

export default function About() {
	return (
		<section id="apropos" className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8 relative">
			<div className="absolute inset-0 opacity-5 pointer-events-none" style={{
				backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 29px, #5C83C1 29px, #5C83C1 30px)',
			}} />

			<div className="mx-auto max-w-4xl relative z-10">
				<div className="grid gap-12 md:grid-cols-2 md:items-center">
					<div className="animate-fade-in-left">
						<div className="overflow-hidden rounded-2xl shadow-lg border-4 border-[#5C83C1]">
							<img
								src="/professional-educator-portrait.jpg"
								alt="À propos"
								className="h-full w-full object-cover"
							/>
						</div>
					</div>
					<div className="animate-fade-in-right">
						<div className="mb-4 inline-flex items-center gap-2">
							<Lightbulb className="h-7 w-7 text-[#FCD581]" />
							<h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">À propos</h2>
						</div>
						<div className="space-y-4 text-gray-600 leading-relaxed">
							<p>
								Passionné par l'éducation et la science de l'apprentissage, j'ai créé ce programme pour aider les étudiants à développer des méthodes de travail efficaces et durables.
							</p>
							<p>
								Avec plus de 10 ans d'expérience dans l'enseignement et la formation, j'ai accompagné des centaines d'étudiants vers la réussite académique. Mon approche combine les dernières recherches en neurosciences avec des techniques pratiques éprouvées.
							</p>
							<p>
								Ma mission est simple : te donner les outils pour apprendre mieux, plus vite, et avec plus de confiance.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
