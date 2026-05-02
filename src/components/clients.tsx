// Témoignages

const ClientSection = () => {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Nuestros Clientes</h2>
                <p className="text-lg text-gray-700 mb-6">
                    En VICTUS, hemos tenido el privilegio de trabajar con una amplia variedad de clientes, desde startups innovadoras hasta grandes corporaciones. Nos enorgullece haber ayudado a nuestros clientes a alcanzar sus objetivos de negocio a través de soluciones tecnológicas personalizadas y de alta calidad.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Cliente A</h3>
                        <p className="text-gray-700">
                            "Trabajar con VICTUS ha sido una experiencia increíble. Su equipo es altamente profesional, creativo y siempre dispuesto a ir más allá para asegurarse de que nuestros proyectos sean un éxito."
                        </p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Cliente B</h3>
                        <p className="text-gray-700">
                            "La calidad del trabajo de VICTUS es excepcional. Han sido un socio clave en el desarrollo de nuestras aplicaciones móviles, y su atención al detalle y compromiso con la excelencia es evidente en cada proyecto."
                        </p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Cliente C</h3>
                        <p className="text-gray-700">
                            "VICTUS ha sido fundamental para el éxito de nuestra transformación digital. Su experiencia y enfoque colaborativo nos han permitido implementar soluciones tecnológicas que han mejorado significativamente nuestros procesos de negocio."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientSection