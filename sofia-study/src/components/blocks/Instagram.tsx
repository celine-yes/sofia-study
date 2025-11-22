import { Pencil } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export default function Instagram() {
    return (
        <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8 ">
            <div className="mx-auto max-w-4xl">
                <div className="mb-12 text-center animate-fade-in-up">
                    <div className="mb-4 inline-flex items-center gap-2">
                        <Pencil className="h-7 w-7 text-[#5C83C1]" />
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Me contacter</h2>
                    </div>
                    <p className="text-lg text-gray-600 text-pretty">Des questions ? N'hésite pas à me contacter</p>
                </div>

                {/* Instagram contact card */}
                <div className="mb-8 animate-fade-in-up">
                    <Card className="border-2 border-[#5C83C1] shadow-lg rounded-2xl hover:shadow-xl transition-all hover:scale-[1.02] bg-white/90 backdrop-blur-sm">
                        <CardContent className="p-8">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex items-center gap-4">
                                    <img
                                        src="/sofia.webp"
                                        alt="Sofia"
                                        className="h-24 w-24 rounded-full object-cover border border-gray-300"
                                    />
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">Instagram</h3>
                                        <p className="text-gray-600">Pose moi tes questions par DM!</p>
                                    </div>
                                </div>
                                <a
                                    href="https://www.instagram.com/sofia_study_academy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition-all hover:scale-105"
                                >
                                    Me suivre sur Instagram
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>)
}