import { BookOpen, Brain, Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Programme() {
	return (
		<section id="programme" className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8 relative">
			<div
				className="absolute inset-0 opacity-5 pointer-events-none"
				style={{
					backgroundImage:
						"repeating-linear-gradient(0deg, transparent, transparent 29px, #5C83C1 29px, #5C83C1 30px)",
				}}
			/>

			<div className="mx-auto max-w-7xl relative z-10">

				{/* Title */}
				<div className="mb-12 text-center animate-fade-in-up">
					<div className="mb-4 inline-flex items-center gap-2">
						<BookOpen className="h-8 w-8 text-[#5C83C1]" />
						<h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Notre Programme</h2>
					</div>
					<p className="mx-auto max-w-2xl text-lg text-gray-600 text-pretty">
						{`Un accompagnement complet \npour gagner +2 à +4 points de moyenne en 3 mois*`}
					</p>
				</div>

				{/* 3 blocs */}
				<div className="grid gap-8 md:grid-cols-3">

					{/* BLOC 1 – MÉTHODES */}
					<Card
						className="border-none shadow-lg transition-all hover:shadow-xl hover:-translate-y-2 rounded-2xl animate-fade-in-up border-l-4 border-l-[#5C83C1]"
						style={{ animationDelay: "0.1s" }}
					>
						<CardContent className="p-8">
							<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#5C83C1]/10 border-2 border-[#5C83C1]">
								<BookOpen className="h-7 w-7 text-[#5C83C1]" />
							</div>
							<h3 className="mb-3 text-xl font-semibold text-gray-900">Méthodes d’Étude</h3>

							<ul className="text-gray-600 leading-relaxed space-y-2">
								<li>• Programme vidéo complet : compréhension de cours, mémorisation rapide, organisation, prise de notes</li>
								<li>• Supports PDF guidés : méthodes, modèles de fiches, plans de révisions</li>
								<li>• Bibliothèque de ressources évolutive selon les progrès de la communauté</li>
								<li>• Les bases solides dont tu as besoin pour réussir et travailler intelligemment</li>

							</ul>
						</CardContent>
					</Card>

					{/* BLOC 2 – COACHING */}
					<Card
						className="border-none shadow-lg transition-all hover:shadow-xl hover:-translate-y-2 rounded-2xl animate-fade-in-up border-l-4 border-l-[#FCD581]"
						style={{ animationDelay: "0.2s" }}
					>
						<CardContent className="p-8">
							<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FCD581]/20 border-2 border-[#FCD581]">
								<Brain className="h-7 w-7 text-[#5C83C1]" />
							</div>
							<h3 className="mb-3 text-xl font-semibold text-gray-900">Coaching Personnalisé</h3>

							<ul className="text-gray-600 leading-relaxed space-y-2">
								<li>• Analyse de ta situation chaque semaine</li>
								<li>• Plan clair : quoi réviser, quand, et comment</li>
								<li>• Organisation et méthodes adaptées à tes matières</li>
								<li>• Conseils pour débloquer rapidement en cas de difficulté</li>
								<li>• Zéro perte de temps grâce à un suivi précis</li>
							</ul>
						</CardContent>
					</Card>

					{/* BLOC 3 – DEEPWORK */}
					<Card
						className="border-none shadow-lg transition-all hover:shadow-xl hover:-translate-y-2 rounded-2xl animate-fade-in-up border-l-4 border-l-[#5C83C1]"
						style={{ animationDelay: "0.3s" }}
					>
						<CardContent className="p-8">
							<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#5C83C1]/10 border-2 border-[#5C83C1]">
								<Trophy className="h-7 w-7 text-[#5C83C1]" />
							</div>
							<h3 className="mb-3 text-xl font-semibold text-gray-900">Deepwork en Groupe</h3>

							<ul className="text-gray-600 leading-relaxed space-y-2">
								<li>• Sessions de travail de 50 min en visio</li>
								<li>• Motivation x10 grâce à la caméra allumée</li>
								<li>• Impossible de procrastiner</li>
								<li>• Rythme régulier qui fait vraiment progresser</li>
								<li>• Tu avances pour de vrai, semaine après semaine</li>
							</ul>
						</CardContent>
					</Card>

				</div>
				<p className="mx-auto max-w-2xl text-lg text-gray-400 text-pretty mt-8 italic text-center">
					* A condition d'appliquer les méthodes et conseils donnés dans le programme.
				</p>
			</div>
		</section>
	)
}
