

const Footer = () => {
    return (
        <footer className="bg-white shadow mt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <p className="text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} VICTUS. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    )
}

export default Footer