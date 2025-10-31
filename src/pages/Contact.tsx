import ContactForm from "../components/ContactForm";
import leader from "@/assets/about-banner.jpg"

const Contact = () => {
    return (
        <div className="">
            <div>
                
                <div className="space-y-12">
                    {/* --- Header Section (Blue Theme) --- */}
                    <section className="relative h-80 rounded-xl overflow-hidden shadow-xl" style={{ "--primary": "#1d4ed8" } as React.CSSProperties}>
                        <img
                            src={leader}
                            alt="Global Alliance Strategic Pillars"
                            className="w-full h-full object-cover"
                        />
                        {/* Gradient is blue-700 */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/90 to-blue-700/0 flex items-center">
                            <div className="container mx-auto px-6">
                                <h1 className="text-5xl font-bold text-white">Contact Us</h1>
                                <p className="text-xl text-white/90 mt-2">Fill out the form below to get in touch with us.</p>
                            </div>
                        </div>
                    </section>
                      <ContactForm />
                </div>
            </div>
        </div>    
    );
};

export default Contact;