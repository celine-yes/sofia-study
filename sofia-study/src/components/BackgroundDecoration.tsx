import { Pencil, GraduationCap, BookOpen, Award, Lightbulb, Brain } from "lucide-react"

export default function BackgroundDecorations() {
	return (
		<div className="pointer-events-none fixed inset-0 overflow-hidden opacity-20">
			<Pencil className="absolute top-20 left-10 h-8 w-8 text-[#5C83C1] animate-float" style={{ animationDelay: '0s' }} />
			<GraduationCap className="absolute top-40 right-20 h-10 w-10 text-[#FCD581] animate-float" style={{ animationDelay: '1s' }} />
			<BookOpen className="absolute top-60 left-1/4 h-7 w-7 text-[#5C83C1] animate-float" style={{ animationDelay: '2s' }} />
			<Award className="absolute top-80 right-1/3 h-9 w-9 text-[#FCD581] animate-float" style={{ animationDelay: '0.5s' }} />
			<Lightbulb className="absolute bottom-40 left-1/3 h-8 w-8 text-[#5C83C1] animate-float" style={{ animationDelay: '1.5s' }} />
			<Brain className="absolute bottom-60 right-1/4 h-7 w-7 text-[#FCD581] animate-float" style={{ animationDelay: '2.5s' }} />
		</div>
	)
}
