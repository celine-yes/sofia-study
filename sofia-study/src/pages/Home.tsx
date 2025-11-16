import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Hero from "@/components/blocks/Hero"
import Programme from "@/components/blocks/Programme"
import Testimonials from "@/components/blocks/testimonial/Testimonials"
import About from "@/components/blocks/About"
import Contact from "@/components/blocks/Contact"
import Footer from "@/components/Footer"

export default function Home() {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 10)
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<div className="min-h-screen bg-white relative overflow-hidden">
			<Header isScrolled={isScrolled} />

			<main>
				<Hero />
				<Programme />
				<Testimonials />
				<About />
				<Contact />
			</main>

			<Footer />
		</div>
	)
}
