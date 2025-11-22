export default function Qui() {
    return (
        <section id="qui-je-suis" className="px-4 py-20 sm:px-6 lg:px-8 relative bg-white">
            <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(0deg, transparent, transparent 29px, #2B4A6F 29px, #2B4A6F 30px)",
                }}
            />

            <div className="mx-auto max-w-6xl relative z-10">
                <h2 className="text-3xl font-bold text-[#5C83C1] mb-12 text-center sm:text-4xl animate-fade-in-up">
                    Pourquoi tu peux me faire confiance?
                </h2>

                <div className="grid md:grid-cols-2 gap-36 items-center">
                    {/* Photo bubble */}
                    <div className="flex justify-center animate-fade-in-up">
                        <div className="relative">
                            {/* Decorative elements around photo */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FCD581] rounded-full opacity-20 animate-float" />
                            <div
                                className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#5C83C1] rounded-full opacity-10 animate-float"
                                style={{ animationDelay: "1s" }}
                            />

                            {/* Photo container */}
                            <div className="relative w-96 h-96 rounded-full overflow-hidden border-8 border-[#5C83C1] shadow-2xl bg-white">
                                <img
                                    src="/sofia.webp"
                                    alt="Sofia Dong"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Decorative school elements */}
                            <div className="absolute top-0 right-0 text-4xl animate-float" style={{ animationDelay: "0.5s" }}>
                                ✏️
                            </div>
                            <div className="absolute bottom-8 left-0 text-3xl animate-float" style={{ animationDelay: "1.5s" }}>
                                📚
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p className="text-lg font-medium text-gray-900">Je m&apos;appelle Sofia Dong.</p>

                            <p>Quand je suis arrivée au Lycée Louis-le-Grand en seconde, j&apos;avais environ 12 de moyenne.</p>

                            <p>
                                J&apos;ai vite compris que{" "}
                                <strong className="text-[#5C83C1]">
                                    travailler plus ne suffisait pas : il fallait travailler mieux.
                                </strong>
                            </p>

                            <p>
                                J&apos;ai passé des mois à chercher, tester et améliorer des méthodes simples pour apprendre plus
                                vite, comprendre rapidement, et devenir réellement efficace.
                            </p>

                            <div className="bg-[#FCD581]/20 border-l-4 border-[#FCD581] p-6 rounded-r-lg my-6">
                                <p className="font-semibold text-gray-900 mb-3">Grâce à ces stratégies :</p>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#5C83C1] font-bold mt-1">•</span>
                                        <span>
                                            j&apos;ai obtenu plus de <strong>18 de moyenne en terminale</strong>
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#5C83C1] font-bold mt-1">•</span>
                                        <span>
                                            j&apos;ai décroché la <strong>mention Très Bien au bac</strong>
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#5C83C1] font-bold mt-1">•</span>
                                        <span>
                                            je suis aujourd&apos;hui étudiante à <strong>l&apos;Université Paris Dauphine</strong>
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <p className="text-lg font-medium text-[#5C83C1]">
                                Les méthodes que je t&apos;enseigne sont exactement celles qui m&apos;ont permis de transformer mes
                                résultats.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}