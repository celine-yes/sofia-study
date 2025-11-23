import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export default function Garantee() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 relative">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-5xl mb-4 text-balance">Tu gardes l'accès en illimité.</h2>
        </div>

        <Card className="border-none shadow-2xl rounded-3xl animate-fade-in-up bg-gradient-to-br from-white via-[#FCD581]/10 to-white border-4 border-[#5C83C1]">
          <CardContent className="p-10">
            <div className="space-y-6 mb-8">
              <p className="text-xl font-semibold text-gray-900 mb-6">Tu as accès à :</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "toutes les vidéos et PDF",
                  "toutes les mises à jour",
                  "la communauté",
                  "les deepwork",
                  "le coaching chaque semaine",
                  "les messages illimités",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-[#5C83C1]/20 hover:border-[#5C83C1] transition-all hover:scale-[1.02] animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="w-8 h-8 rounded-full bg-[#5C83C1] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 p-6 bg-gradient-to-r from-[#FCD581]/30 via-[#FCD581]/20 to-[#FCD581]/30 rounded-2xl  ">
              <p className="text-2xl font-bold text-gray-900 text-center text-balance">
                Tu apprends à ton rythme. Tu appliques. Tu progresses.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Button
                asChild
                className="
      bg-[#FCD581] text-gray-900 hover:bg-[#FCD581]/90 font-bold 
      text-base sm:text-xl 
      py-6 
      px-10 
      rounded-2xl shadow-xl 
      transition-all hover:scale-105 hover:shadow-2xl 
      border-4 border-gray-900/10 
      w-full sm:w-auto                     
      max-w-full                           
    "
              >
                <Link to="/contact">
                  Je veux commencer maintenant
                </Link>
              </Button>
            </div>


          </CardContent>
        </Card>
      </div>
    </section>)
}
