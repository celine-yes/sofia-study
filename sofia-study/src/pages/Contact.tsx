import Header from "@/components/Header"
// import Footer from "@/components/Footer"
import BackgroundDecorations from "@/components/BackgroundDecoration"
import Instagram from "@/components/blocks/Instagram"

export default function Contact() {
    return (
        <div className="min-h-screen bg-white relative overflow-hidden">
            <BackgroundDecorations />
            <Header />

            <main>
                <div className=" mx-auto px-4 py-20 sm:px-6 lg:px-8">
                    <Instagram />
                </div>
            </main>
            {/* <Footer /> */}
        </div>
    )
}
