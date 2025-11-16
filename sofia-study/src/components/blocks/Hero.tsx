import { Pencil, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
	return (
		<section className="px-4 pt-28 pb-12 sm:px-6 lg:px-8 relative z-10">
			<div className="mx-auto max-w-6xl">
				<div className="grid gap-8 lg:grid-cols-2 lg:items-center">
					<div className="order-2 lg:order-1">
						<div className="overflow-hidden rounded-2xl shadow-2xl animate-fade-in-up border-4 border-[#FCD581]" style={{ animationDelay: '0.2s' }}>
							<div className="aspect-video w-full bg-gray-100">
								<video className="h-full w-full object-cover" controls poster="/effective-study-group.png">
									{/* TODO: intégrer vidéo youtube correctement */}
									<iframe
										src="https://www.youtube.com/embed/1D5c2jhlW_8"
										title="YouTube video player"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									></iframe>
								</video>
							</div>
						</div>
					</div>

					<div className="order-1 lg:order-2 text-center lg:text-left animate-fade-in-up">
						<div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FCD581]/20 px-4 py-2 border-2 border-[#FCD581]">
							<Pencil className="h-4 w-4 text-[#5C83C1]" />
							<span className="text-sm font-semibold text-gray-800">Méthodes scientifiques prouvées</span>
						</div>
						<h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl text-balance">
							Améliore ta méthode de travail et réussis tes cours
						</h1>
						<p className="mx-auto lg:mx-0 mb-8 max-w-2xl text-lg text-gray-600 leading-relaxed text-pretty">
							Découvre les techniques d'apprentissage scientifiquement prouvées qui transformeront ta façon d'étudier et maximiseront tes résultats académiques.
						</p>
						<Button
							size="lg"
							className="bg-[#FCD581] text-gray-900 hover:bg-[#FCD581]/90 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg transition-all hover:scale-105 hover:shadow-xl border-2 border-gray-900/10 animate-bounce-subtle"
						>
							<GraduationCap className="mr-2 h-5 w-5" />
							Commencer maintenant
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
