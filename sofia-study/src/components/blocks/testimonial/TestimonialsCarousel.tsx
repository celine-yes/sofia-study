import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import TestimonialCard from "./TestimonialCard"
import { testimonials } from "@/data/testimonials"

export default function TestimonialsCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isDragging, setIsDragging] = useState(false)
	const [startX, setStartX] = useState(0)
	const [scrollLeft, setScrollLeft] = useState(0)

	const carouselRef = useRef<HTMLDivElement>(null)

	const cardWidth = 320 + 24 // largeur + gap

	const scrollToIndex = (index: number) => {
		if (!carouselRef.current) return
		carouselRef.current.scrollTo({
			left: index * cardWidth,
			behavior: "smooth",
		})
		setCurrentIndex(index)
	}

	const handlePrevious = () => {
		const index = Math.max(0, currentIndex - 1)
		scrollToIndex(index)
	}

	const handleNext = () => {
		const index = Math.min(testimonials.length - 1, currentIndex + 1)
		scrollToIndex(index)
	}

	// ----- Drag souris -----
	const handleMouseDown = (e: React.MouseEvent) => {
		if (!carouselRef.current) return
		setIsDragging(true)
		setStartX(e.pageX - carouselRef.current.offsetLeft)
		setScrollLeft(carouselRef.current.scrollLeft)
	}

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDragging || !carouselRef.current) return
		e.preventDefault()
		const x = e.pageX - carouselRef.current.offsetLeft
		const walk = (x - startX) * 2
		carouselRef.current.scrollLeft = scrollLeft - walk
	}

	const endDrag = () => {
		if (!carouselRef.current) return
		setIsDragging(false)

		const newIndex = Math.round(carouselRef.current.scrollLeft / cardWidth)
		scrollToIndex(Math.max(0, Math.min(testimonials.length - 1, newIndex)))
	}

	// ----- Drag tactile -----
	const handleTouchStart = (e: React.TouchEvent) => {
		if (!carouselRef.current) return
		setIsDragging(true)
		setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft)
		setScrollLeft(carouselRef.current.scrollLeft)
	}

	const handleTouchMove = (e: React.TouchEvent) => {
		if (!isDragging || !carouselRef.current) return
		const x = e.touches[0].pageX - carouselRef.current.offsetLeft
		const walk = (x - startX) * 2
		carouselRef.current.scrollLeft = scrollLeft - walk
	}

	return (
		<div className="relative ">

			{/* Bouton gauche */}
			<button
				onClick={handlePrevious}
				disabled={currentIndex === 0}
				className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 disabled:opacity-50 disabled:hover:scale-100"
			>
				<ChevronLeft className="h-6 w-6 text-[#5C83C1]" />
			</button>

			{/* Bouton droite */}
			<button
				onClick={handleNext}
				disabled={currentIndex === testimonials.length - 1}
				className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 disabled:opacity-50 disabled:hover:scale-100"
			>
				<ChevronRight className="h-6 w-6 text-[#5C83C1]" />
			</button>

			{/* Carrousel */}
			<div
				ref={carouselRef}
				className="flex gap-6 overflow-x-hidden cursor-grab active:cursor-grabbing px-12 select-none"
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={endDrag}
				onMouseLeave={endDrag}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={endDrag}
			>
				{testimonials.map((t, i) => (
					<TestimonialCard key={i} {...t} />
				))}
			</div>

			{/* Indicateurs */}
			<div className="flex justify-center gap-2 mt-8">
				{testimonials.map((_, i) => (
					<button
						key={i}
						onClick={() => scrollToIndex(i)}
						className={`h-2 rounded-full transition-all ${i === currentIndex ? "w-8 bg-[#5C83C1]" : "w-2 bg-gray-300 hover:bg-gray-400"
							}`}
					/>
				))}
			</div>

		</div>
	)
}
