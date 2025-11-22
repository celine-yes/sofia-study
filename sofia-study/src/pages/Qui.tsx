import Header from "@/components/Header"
import Footer from "@/components/Footer"
import BackgroundDecorations from "@/components/BackgroundDecoration"
import Qui from "@/components/blocks/Qui"
import Myresult from "@/components/blocks/Myresult"


export default function QuiSuisJePage() {

    return (
        <div className="min-h-screen bg-white relative overflow-hidden mt-18">
            <BackgroundDecorations />
            <Header />
            <main>
                <Qui />
                <Myresult/>
            </main>
            <Footer />
        </div>
    )
}
