import { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

export default function Contact() {

    // formulario de contacto
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        city: '',
        country: null,
    });

    // lista de países (exemplo simple)
    const countries = [
        { label: 'Alemania', value: 'DE' },
        { label: 'Bélgica', value: 'BE' },
        { label: 'Dinamarca', value: 'DK' },
        { label: 'España', value: 'ES' },
        { label: 'Estados Unidos', value: 'US' },
        { label: 'Finlandia', value: 'FI' },
        { label: 'Francia', value: 'FR' },
        { label: 'Italia', value: 'IT' },
        { label: 'Noruega', value: 'NO' },
        { label: 'Países Bajos', value: 'NL' },
        { label: 'Portugal', value: 'PT' },
        { label: 'Reino Unido', value: 'UK' },
        { label: 'Suecia', value: 'SE' },
        { label: 'Suiza', value: 'CH' },
    ];
    
    return (
        <div className='grid px-5 py-6'>
            {/* Formulario de contacto */}
            <div className='col-12 lg:col-6 flex flex-column justify-content-center align-items-center'>
                <Card className="w-full md:w-10" style={{ fontFamily: '"Arial Unicode MS Regular", Arial, Helvetica, sans-serif' }}>

                    <h2 className="mb-4 text-center"  style={{ color: "var(--gray-900)" }}>Contacta con nosotros</h2>

                    <div className="flex flex-column gap-4">

                        <span className="p-float-label">
                            <InputText
                                id="name"
                                className="w-full"  style={{ color: "var(--gray-900)" }}
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                            />
                            <label htmlFor="name" style={{ color: "var(--gray-700)" }}>Nombre</label>
                        </span>

                        <span className="p-float-label">
                            <InputText
                                id="email"
                                type="email"
                                className="w-full" style={{ color: "var(--gray-900)" }}
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                            />
                            <label htmlFor="email" style={{ color: "var(--gray-700)" }}>Email</label>
                        </span>

                        <span className="p-float-label">
                            <InputText
                                id="city"
                                className="w-full" style={{ color: "var(--gray-900)" }}
                                value={formData.city}
                                onChange={(e) =>
                                    setFormData({ ...formData, city: e.target.value })
                                }
                            />
                            <label htmlFor="city" style={{ color: "var(--gray-700)" }}>Ciudad</label>
                        </span>

                        <span className="p-float-label">
                            <Dropdown
                                id="country"
                                value={formData.country}
                                options={countries}
                                className="w-full" style={{ color: "var(--gray-900)" }}
                                onChange={(e) =>
                                    setFormData({ ...formData, country: e.value })
                                }
                            />
                            <label htmlFor="country" style={{ color: "var(--gray-700)" }}>País</label>
                        </span>

                        <Button
                            label="Enviar"
                            className="davstudio-form-button mt-3"
                            severity="secondary"
                        />
                    </div>

                </Card>
            </div>

            {/* Texto descriptivo de Davstudio */}
            <div className='col 12 lg:col-6 flex flex-column justify-content-center'>
                <p className="m-4 line-height-3 text-justify text-lg">
                    ¡Estamos aquí para ayudarte! En DAVSTUDIO, valoramos la comunicación con nuestros clientes y estamos comprometidos
                    en brindarte el mejor servicio posible. Si tienes alguna pregunta, inquietud o simplemente deseas obtener más
                    información sobre nuestros productos y servicios, no dudes en ponerte en contacto con nosotros.
                </p>
                <p className="m-4 line-height-3 text-justify text-lg">
                    Email: davidprolgomez@gmail.com
                <br/>
                    Teléfono: +34 675 638 685.
                </p>
                <p className="m-4 line-height-3 text-justify text-lg">
                    En DAVSTUDIO, tu satisfacción es nuestra prioridad.
                </p>
            </div>
        </div>
    );
}