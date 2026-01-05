import { Card } from 'primereact/card';

export default function Home() {
    return (
        <div className='title flex justify-content-center text-center'>
            <Card title={"DAVSTUDIO"} className='text-xl'>
                <p className="m-4 line-height-3 text-justify">
                    Bienvenido/a a DAVSTUDIO, tu estudio de interiorismo de confianza. En DAVSTUDIO, nos apasiona transformar espacios en hogares y ambientes que reflejen tu estilo y personalidad.
                </p>
                <p className="m-4 line-height-3 text-justify">
                    Nuestro equipo de expertos en diseño de interiores está comprometido en ofrecer soluciones creativas y funcionales para cada proyecto, desde renovaciones completas hasta detalles decorativos.
                </p>
                <p className="m-4 line-height-3 text-justify">
                    Explora nuestra amplia gama de productos de alta calidad, cuidadosamente seleccionados para satisfacer tus necesidades y gustos. Ya sea que busques muebles elegantes, accesorios modernos o soluciones de iluminación innovadoras, en DAVSTUDIO encontrarás todo lo que necesitas para darle vida a tus ideas.
                </p>
            </Card>
        </div>
    );
} 