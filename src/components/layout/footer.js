export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="surface-100 mt-8">
            <div className="max-w-full px-4 py-6">
                <div className="flex flex-column md:flex-row justify-content-around">
                    {/* Texto izquierda */}
                    <p className="m-0 text-sm text-center md:text-left" style={{ color: "var(--gray-700)" }}>
                        © {year} DAVSTUDIO · Interiorismo y diseño urbano
                    </p>

                    {/* Enlaces derecha */}
                    <div className="flex gap-4">
                        <a href="/about" className="text-sm no-underline hover:underline" style={{ color: "var(--gray-700)" }}>
                            Sobre nosotros
                        </a>
                        <a href="/contact" className="text-sm no-underline hover:underline" style={{ color: "var(--gray-700)" }}>
                            Contacto
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
