import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

type Props = {
	text: string
	name: string
	role: string
}

export default function TestimonialCard({ text, name, role }: Props) {
	return (
		<Card className="flex-shrink-0 w-80 border-none bg-gray-50 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 rounded-2xl border-t-4 border-t-[#FCD581]">
			<CardContent className="p-8">

				<div className="mb-4 flex gap-1">
					{[...Array(5)].map((_, i) => (
						<Star key={i} className="h-5 w-5 fill-[#FCD581] text-[#FCD581]" />
					))}
				</div>

				<p className="mb-4 text-gray-700 leading-relaxed min-h-24">{text}</p>

				<p className="font-semibold text-gray-900">{name}</p>
				<p className="text-sm text-gray-500">{role}</p>
			</CardContent>
		</Card>
	)
}
