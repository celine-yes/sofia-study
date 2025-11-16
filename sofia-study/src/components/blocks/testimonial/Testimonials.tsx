import { Award } from "lucide-react"
import TestimonialsCarousel from "./TestimonialsCarousel"

export default function Testimonials() {
	return (
		<section id="temoignages" className="px-4 py-20 relative overflow-hidden">

			<div className="mb-12 text-center">
				<div className="mb-4 inline-flex items-center gap-2">
					<Award className="h-8 w-8 text-[#FCD581]" />
					<h2 className="text-3xl font-bold text-gray-900">Témoignages</h2>
				</div>
				<p className="text-lg text-gray-600">
					Ce que disent nos étudiants sur leur transformation
				</p>
			</div>

			<TestimonialsCarousel />

		</section>
	)
}
