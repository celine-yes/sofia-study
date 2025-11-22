import { Link } from "react-router-dom";
import { Button } from "../ui/button";

{/* Est-ce que c'est ton cas ? Section */ }
export default function Yourcase() {
    return (<section
        id="identification"
        className="px-4 py-20 sm:px-6 lg:px-8 relative bg-gradient-to-br from-blue-50 to-purple-50"
    >
        <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
                backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 29px, #2B4A6F 29px, #2B4A6F 30px)",
            }}
        />

<div className="mx-auto max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left side - Est-ce que c'est ton cas ? */}
            <div className="animate-fade-in-up">
              <div className="text-center mb-8">
                <p className="text-[#5C83C1] font-semibold text-lg mb-4">Est-ce que c'est ton cas ?</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 sm:text-3xl">
                  Tu travailles… mais tu n'as pas les résultats que tu veux ?
                </h2>
                <p className="text-base text-gray-700 mb-6">Dis-moi si ça te parle :</p>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-[#5C83C1] p-6">
                <ul className="space-y-4 text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-2xl flex-shrink-0">✗</span>
                    <span className="text-gray-800">tu relis ton cours mais tu oublies tout</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-2xl flex-shrink-0">✗</span>
                    <span className="text-gray-800">tu passes des heures à réviser pour rien</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-2xl flex-shrink-0">✗</span>
                    <span className="text-gray-800">tu n'es pas organisé</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-2xl flex-shrink-0">✗</span>
                    <span className="text-gray-800">tu ne sais pas comment réviser correctement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-2xl flex-shrink-0">✗</span>
                    <span className="text-gray-800">tu stresses avant les contrôles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-2xl flex-shrink-0">✗</span>
                    <span className="text-gray-800">tu veux progresser, mais tu ne sais juste pas comment</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right side - Ce que tu veux vraiment changer */}
            <div className="animate-fade-in-up">
              <div className="text-center mb-8">
                <p className="text-[#5C83C1] font-semibold text-lg mb-4">Ce que tu veux vraiment changer</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 sm:text-3xl">
                  Imagine si… tu savais exactement quoi faire chaque semaine.
                </h2>
                <p className="text-base text-gray-700 mb-6 font-medium">Dans quelques semaines :</p>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-green-500 p-6 mb-6">
                <ul className="space-y-4 text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-2xl flex-shrink-0">✓</span>
                    <span className="text-gray-800">tu comprends ton cours rapidement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-2xl flex-shrink-0">✓</span>
                    <span className="text-gray-800">tu retiens ce que tu apprends</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-2xl flex-shrink-0">✓</span>
                    <span className="text-gray-800">tu sais t'organiser en 10 minutes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-2xl flex-shrink-0">✓</span>
                    <span className="text-gray-800">tu arrives en contrôle en étant vraiment prêt</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-2xl flex-shrink-0">✓</span>
                    <span className="text-gray-800">tu gagnes des points dans TOUTES les matières</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-2xl flex-shrink-0">✓</span>
                    <span className="text-gray-800">tu stresses moins</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-2xl flex-shrink-0">✓</span>
                    <span className="text-gray-800">tu deviens plus confiant et autonome</span>
                  </li>
                </ul>
              </div>

              <p className="text-base text-center text-gray-700 mb-6 font-medium">
                Avec mon système, ce n'est pas un rêve : c'est ce qui arrive à mes élèves.
              </p>

              
            </div>
            
          </div>
          <div className="text-center">
      <Button
        size="lg"
        className="bg-[#FCD581] text-gray-900 hover:bg-[#FCD581]/90 font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        asChild
      >
        <Link to="/programme">Comment ça fonctionne ?</Link>
      </Button>
    </div>
        </div>
      </section>)
}
