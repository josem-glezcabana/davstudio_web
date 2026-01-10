export default function Home() {
    return (
        <div className="flex flex-column">
            {/* Video de fondo */}
            <div className="w-full">
                <video
                    style={{ objectFit: 'cover' }}
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/assets/home_background/FULL.mp4" type="video/mp4" />
                    Tu navegador no soporta vídeo HTML5.
                </video>
            </div>

            {/* Texto de bienvenida */}
            <div className='flex flex-column justify-content-center text-center px-5 py-6'>
                <p className="m-4 line-height-3 text-justify text-xl">
                    Bienvenido/a a DAVSTUDIO, tu estudio de interiorismo de confianza. En DAVSTUDIO, nos apasiona transformar espacios en hogares y ambientes que reflejen tu estilo y personalidad.
                </p>
                <p className="m-4 line-height-3 text-justify text-xl">
                    Nuestro equipo de expertos en diseño de interiores está comprometido en ofrecer soluciones creativas y funcionales para cada proyecto, desde renovaciones completas hasta detalles decorativos.
                </p>
                <p className="m-4 line-height-3 text-justify text-xl">
                    Explora nuestra amplia gama de productos de alta calidad, cuidadosamente seleccionados para satisfacer tus necesidades y gustos. Ya sea que busques muebles elegantes, accesorios modernos o soluciones de iluminación innovadoras, en DAVSTUDIO encontrarás todo lo que necesitas para darle vida a tus ideas.
                </p>
            </div>
        </div>
    );
} 