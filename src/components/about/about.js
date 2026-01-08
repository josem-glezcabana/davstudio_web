// import owner from '../../assets/cara_david.JPG';
import ownerPhoto from '../../assets/david_sesi.jpg';

export default function About() {
    return (
        <div className="max-w-screen-xl mx-auto p-5">
            <div className="grid">
                {/* Imaxe do CEO */}
                <div className="col-12 lg:col-4 flex justify-content-center">
                    <img src={ownerPhoto} alt="David" className="w-8 border-round-sm" />
                </div>
                {/* Información do CEO */}
                <div className="col-12 md:col-8 text-justify text-lg pr-7">
                    <p>
                        <strong>David Prol</strong> es diseñador de interiores y director creativo de su propio estudio.
                        Desde sus inicios, ha desarrollado una trayectoria centrada en la creación de espacios cuidadosamente diseñados,
                        donde la funcionalidad y la estética conviven en equilibrio.
                    </p>
        
                    <p>
                        Con una visión creativa y contemporánea, David dirige y desarrolla todas las fases del proceso de diseño,
                        desde el concepto inicial hasta la ejecución final del proyecto. Su trabajo se caracteriza por una atención
                        meticulosa al detalle, el uso consciente de materiales y la búsqueda constante de soluciones espaciales que
                        respondan a las necesidades reales de cada cliente.
                    </p>

                    <p>
                        A lo largo de su carrera ha diseñado proyectos residenciales y comerciales que reflejan su enfoque personal
                        del diseño: espacios con identidad, carácter y una clara sensibilidad artística. Además, David concibe cada
                        proyecto como una experiencia integral, cuidando la coherencia visual y conceptual en todos los elementos que lo componen.
                    </p>
                </div>
            </div>
        </div>
    );
}