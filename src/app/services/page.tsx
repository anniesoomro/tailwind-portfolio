import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilRuler, faComments, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

export default function Services() {
    return (
        <section className="services-section bg-white bg-center py-20 text-gray-800">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                <h2 className="text-5xl font-extrabold text-center mb-4">Services</h2>
                <p className="text-center mb-8">From understanding your requirements, designing a blueprint and delivering the final product, I do everything that falls in between these lines.</p>
                </div>

                <div className="md:w-1/2 flex justify-center md:justify-end">
                <Image src="/bg-03-free-img.jpg"alt="Services Image" width={300} height={300} />
                </div>
                </div>
                <div className="mx-auto mt-12">
                    <div className="flex flex-wrap justify-center gap-8">
                    {/* Web Development Card */}
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
                        <FontAwesomeIcon icon={faLaptopCode} className="text-blue-500 text-4xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                        <p>Building responsive and scalable websites using modern technologies.</p>
                    </div>
                    {/* UI/UX Design Card */}
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
                        <FontAwesomeIcon icon={faPencilRuler} className="text-purple-500 text-4xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                        <p>Creating user-friendly designs that prioritize a smooth experience.</p>
                    </div>
                    {/* Consulting Card */}
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
                        <FontAwesomeIcon icon={faComments} className="text-green-500 text-4xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Consulting</h3>
                        <p>Offering technical consultations to help you navigate your web projects.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}