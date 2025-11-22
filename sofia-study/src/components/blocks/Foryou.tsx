
export default function Foryou() {
	return (
<section className="px-4 py-20 sm:px-6 lg:px-8 relative bg-white">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 29px, #2B4A6F 29px, #2B4A6F 31px)",
          }}
        />

        <div className="mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 sm:text-4xl">
              Cette formation est faite pour toi si :
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { text: "tu veux progresser dans toutes les matières", emoji: "📚" },
              { text: "tu veux arrêter de perdre du temps", emoji: "⏰" },
              { text: "tu veux être accompagné et guidé", emoji: "🤝" },
              { text: "tu veux une méthode simple", emoji: "✨" },
              { text: "tu veux être régulier", emoji: "📅" },
              { text: "tu veux arrêter le stress", emoji: "😌" },
              // { text: "tu veux gagner en confiance", emoji: "💪" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border-2 border-[#C3CCD5] hover:border-[#5C83C1] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3 text-center">{item.emoji}</div>
                <p className="text-gray-800 text-center font-medium">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in-up">
            <div className="inline-block bg-gradient-to-r from-[#FCD581] to-[#FCD581]/70 px-8 py-4 rounded-2xl shadow-lg border-2 border-[#5C83C1]">
              <p className="text-xl font-bold text-gray-900">Si tu veux progresser rapidement : c&apos;est pour toi.</p>
            </div>
          </div>
        </div>
      </section>
    )}