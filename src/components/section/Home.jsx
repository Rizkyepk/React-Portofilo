
export const Home = () => {
    return <section id="home" className="min-h-screen item-center justify-center relative">
        <div className="test-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradien-to-r from-blue-500 to-purple-600 bg-clip-text gradiet-text leading-right">
                Hi, I'm Rizky
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                I'm a Software developer, interest with crafting smooth, sclacle web
                aplications.
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg=blue-500 text-white pt-3 px-6 rounded font-meduim transition relative overflow-hidden hover:-translate-y-0.5 
                hover:shadow=[0_0_15px_rgba(59, 130, 346, 0.4)]"
                >
                    View Projects
                </a>

                <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                hover:-translate-y-0.5 hover:shadow=[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
                >
                    Contact
                </a>
            </div>
        </div>
    </section>

}