export default function Myresult() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 relative bg-gradient-to-b from-white to-[#C3CCD5]/10">
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 29px, #2B4A6F 29px, #2B4A6F 30px)",
        }}
      />

      <div className="mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl font-bold text-[#5C83C1] mb-4 text-center sm:text-4xl animate-fade-in-up">
          Mes Résultats Concrets
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">La preuve que ces méthodes fonctionnent vraiment</p>

        {/* Résultats du Bac */}
        <div className="mb-16 animate-fade-in-up">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-4 border-[#5C83C1] shadow-xl">
            <h3 className="text-2xl font-bold text-center mb-6 text-[#5C83C1]">Résultats du Baccalauréat</h3>

            <div className="flex justify-center">
              <div className="w-full max-w-2xl h-[450px] bg-gray-100 rounded-xl border-2 border-dashed border-[#5C83C1] overflow-hidden flex items-center justify-center">

                <img
                  src="/bac.webp"
                  alt="Résultats Bac"
                  className="w-full h-full object-contain"
                />

              </div>
            </div>
          </div>
        </div>


        {/* Évolution Mathématiques */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h3 className="text-2xl font-bold text-center mb-8 text-[#5C83C1]">
            Mon Évolution en Mathématiques
          </h3>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              { label: "Début d'année", img: "/maths1.webp" },
              { label: "Milieu d'année", img: "/maths2.webp" },
              { label: "Fin d'année", img: "/maths3.webp" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border-2 border-[#5C83C1]/30 shadow-lg hover:border-[#5C83C1] hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-center font-semibold text-gray-700 mb-4">
                  {item.label}
                </h4>

                {/* Conteneur adaptatif */}
                <div className="bg-gray-100 rounded-lg border-2 border-dashed border-[#5C83C1] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            ))}

          </div>
        </div>



        {/* Évolution Français */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-2xl font-bold text-center mb-8 text-[#5C83C1]">
            Mon Évolution en Français
          </h3>

          {/* Grille 2 blocs */}
          <div className="grid md:grid-cols-2 gap-6">

            {[
              { label: "Avant les méthodes", img: "/francais1.webp" },
              { label: "Après les méthodes", img: "/francais2.webp" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border-2 border-[#5C83C1]/30 shadow-lg hover:border-[#5C83C1] hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-center font-semibold text-gray-700 mb-4">{item.label}</h4>

                {/* Conteneur adaptatif */}
                <div className="bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            ))}

          </div>

          {/* Bloc du bas : résultats bac */}
          <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-xl p-8 border-2 border-[#5C83C1] shadow-xl">
            <h4 className="text-xl font-bold text-center mb-6 text-[#5C83C1]">
              Résultats au Bac – Français
            </h4>

            {/* Conteneur adaptatif */}
            <div className="w-full max-w-3xl mx-auto bg-gray-100 rounded-lg border-2 border-dashed border-[#5C83C1] overflow-hidden">
              <img
                src="/francais3.webp"
                alt="Résultats du bac français"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>



        {/* Évolution Physique */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <h3 className="text-2xl font-bold text-center mb-8 text-[#5C83C1]">
            Mon Évolution en Physique
          </h3>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              { label: "Avant les méthodes", img: "/physique1.webp" },
              { label: "Après les méthodes", img: "/physique2.webp" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border-2 border-[#5C83C1]/30 shadow-lg hover:border-[#5C83C1] hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-center font-semibold text-gray-700 mb-4">
                  {item.label}
                </h4>

                <div className="bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            ))}

          </div>
        </div>



        {/* Call to action */}
        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="bg-[#FCD581]/20 border-l-4 border-[#5C83C1] p-6 rounded-r-lg inline-block">
            <p className="text-lg font-semibold text-gray-800">
              Ces résultats ne sont pas un hasard. C'est le résultat d'une méthode éprouvée.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}