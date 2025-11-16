import { Pencil } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Contact() {
	return (
		<section id="contact" className="px-4 py-20 sm:px-6 lg:px-8 relative">
			<div className="mx-auto max-w-2xl">
				<div className="mb-12 text-center animate-fade-in-up">
					<div className="mb-4 inline-flex items-center gap-2">
						<Pencil className="h-7 w-7 text-[#5C83C1]" />
						<h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact</h2>
					</div>
					<p className="text-lg text-gray-600 text-pretty">
						Des questions ? N'hésite pas à nous contacter
					</p>
				</div>

				<Card className="border-none shadow-lg rounded-2xl animate-fade-in-up border-4 border-[#FCD581]" style={{ animationDelay: '0.2s' }}>
					<CardContent className="p-8">
						<form className="space-y-6" onSubmit={(e) => { e.preventDefault(); /* hook serveur ici */ }}>
							<div>
								<label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900">Nom</label>
								<Input id="name" type="text" placeholder="Ton nom" className="rounded-lg border-2 focus:border-[#5C83C1] transition-colors" />
							</div>
							<div>
								<label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900">Email</label>
								<Input id="email" type="email" placeholder="ton.email@exemple.com" className="rounded-lg border-2 focus:border-[#5C83C1] transition-colors" />
							</div>
							<div>
								<label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-900">Message</label>
								<Textarea id="message" placeholder="Ton message..." rows={5} className="rounded-lg border-2 focus:border-[#5C83C1] transition-colors" />
							</div>
							<Button type="submit" className="w-full bg-[#FCD581] text-gray-900 hover:bg-[#FCD581]/90 font-semibold py-6 rounded-lg shadow-md transition-all hover:scale-[1.02] hover:shadow-xl border-2 border-gray-900/10">
								Envoyer le message
							</Button>
						</form>
					</CardContent>
				</Card>
			</div>
		</section>
	)
}
