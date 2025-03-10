import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {

    const frontendskills = [
        "React", "Flutter",
        "Tailwindcss", "Html",
        "Css", "Javascrip"
    ];

    const backendskills = [
        "Python",
        "AWS",
    ];

    return (
        <section id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>

                <div className="max-w-3xl mx-auto px-4">
                    <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text 
                    text-transparent text-center"
                    >
                        About Me
                    </h1>

                    <div className="grass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-grey-300 mb-6">
                            passionete developer with expertise in building web aplication
                            and creating innovative UI UX.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Front-End</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendskills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Back-End</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendskills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold md-4"> Education </h3>
                            <ul className="list-disc list-inside text-grey-300 space-y-2">
                                <li>
                                    <strong> Computer Enggineer </strong> - Telkom University (2020 - 2024)
                                </li>
                                <li>
                                    Part Of Comunity Service...
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold md-4"> Work Experince </h3>
                            <div className="space-y-4 text-grey-300">
                            </div>
                            <div>
                                <h4 className="font-semibold"> AI Reasearch Intern at ProCodeCG (2023)</h4>
                                <p>
                                    Reasearch for calculate entry and exit vehicle on toll roads using severals framework likes TensorFlow.
                                    make a compare between framewors that effective on two differnt time.
                                </p>
                            </div>
                            <br />
                            <div>
                                <h4 className="font-semibold"> Software Engginer ( March 2025 - present )</h4>
                                <p>
                                    as a part team we Rebuild Klearence App using Next.Js with Tailwindcss for the feont-end and than
                                    use Supabase for the database.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}