import Image from "next/image";

export default function Contact() {
    return(
        <div>
            <section className="contact py-20 bg-white">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between mb-10">
                    <h2 className="text-6xl font-extrabold mb-4 text-gray-800">Contact Me
                    </h2>
                <div className="md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0 md:ml-4">
                <Image src="/bg-04-free-img.jpg"alt="Contact Image" width={300} height={300} /></div>
                
                </div>
                <div className="flex justify-center">
                    <form className="max-w-lg w-full mx-auto bg-sky-300 p-6 rounded-lg shadow-lg">
                        <div className="mb-4">
                            <label className="block text-gray-700">Name</label>
                            <input className="w-full p-3 border border-gray-300 rounded-lg"type="text"placeholder="Your Name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email
                            </label>
                            <input className="w-full p-3 border border-gray-300 rounded-lg" type="text"placeholder="Your Email" />
                        </div> 
                        <div className="mb-4">
                            <label className="block text-gray-700">Message
                            </label>
                            <textarea className="w-full p-3 border border-gray-300 rounded-lg"placeholder="Your Message"></ textarea>
                        </div> 
                        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition" type="submit">
                            Send Message
                        </button>
                        
                    </form>
                </div>
                
                </div>
            </section>
        </div>
    );
}