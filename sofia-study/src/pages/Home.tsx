import Header from "@/components/Header"
import Hero from "@/components/blocks/Hero"
import Footer from "@/components/Footer"
import BackgroundDecorations from "@/components/BackgroundDecoration"
import Yourcase from "@/components/blocks/Yourcase"

export default function Home() {
	return (
		<div className="min-h-screen bg-white relative overflow-hidden">
			<BackgroundDecorations />
			<Header />

			<main>
				<Hero />
				<Yourcase />
			</main>

			<Footer />
		</div>
	)
}
