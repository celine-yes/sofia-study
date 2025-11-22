import Header from "@/components/Header"
import Programme from "@/components/blocks/Programme"
import Testimonials from "@/components/blocks/testimonial/Testimonials"
import Footer from "@/components/Footer"
import BackgroundDecorations from "@/components/BackgroundDecoration"
import Foryou from "@/components/blocks/Foryou"
import Garantee from "@/components/blocks/Garantee"


export default function ProgrammePage() {

    return (
        <div className="min-h-screen bg-white relative overflow-hidden mt-18">
            <BackgroundDecorations />
            <Header />

            <main>
                <Programme />
                <Testimonials />
                <Foryou/>
                <Garantee/>
            </main>

            <Footer />
        </div>
    )
}
