import React, { useState } from 'react';
import { ChevronDown, Mail, Phone, MapPin, BookOpen, Clock, Zap, MessageSquare, Briefcase } from 'lucide-react';

// --- 1. Theme Constants (Updated to Blue/Indigo palette) ---
const PRIMARY_BLUE = "text-blue-700";
const ACCENT_BLUE_LIGHT = "bg-blue-50";
const PRIMARY_BLUE_DARK = "text-blue-600";
const ACCENT_COLOR = "text-indigo-600"; // Used for distinct Technical support section
const BORDER_COLOR = "border-blue-200";

// --- 2. Mock Data for FAQ (Remains the same) ---
const faqs = [
    {
        question: "How do I update my Council Member profile?",
        answer: "Profile updates are handled through the *Member Portal*. Log in and navigate to 'Account Settings' -> 'Profile Management'. All changes require Executive Office approval, usually within 24 hours."
    },
    {
        question: "Where can I find the latest meeting minutes and resolutions?",
        answer: "All official documents, including Governing Body resolutions and committee meeting minutes, are stored in the secure *Document Archive*, accessible via your main dashboard."
    },
    {
        question: "I'm having trouble logging into the WTITC Member Portal.",
        answer: "Ensure you are using your registered official email and the correct password. If login issues persist, please contact *Technical Support* immediately using the details provided below."
    },
    {
        question: "What are the submission deadlines for quarterly reports?",
        answer: "Quarterly reports are due on the 15th of the month following the quarter end (April 15, July 15, October 15, and January 15). Please submit them through the secure Reporting module."
    },
    {
        question: "How do I request a new WTITC domain email address?",
        "answer": "Submit a request to the Technical Support Desk via email, specifying the required name and justification. Access is usually granted within one business day."
    },
    {
        question: "What are the guidelines for using the WTITC logo in official documents?",
        answer: "The *Brand & Communications Guidelines* document, available in the Resources tab, outlines proper logo usage, color palettes, and required disclaimers for all internal and external materials."
    },
    {
        question: "Can I propose an item for the next Governing Body agenda?",
        answer: "Yes. Agenda items must be submitted to the Executive Secretary at least four weeks prior to the scheduled meeting date using the official 'Agenda Item Proposal' form."
    },
    {
        question: "Where can I find contact details for regional task forces?",
        answer: "Regional Task Force contacts are listed in the Internal Directory, which is exclusively available to logged-in members. For general inquiries, start with the WTITC Secretariat."
    }
];

// --- 3. Supporting Component: FAQ Item ---
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 last:border-b-0 py-4">
            <button
                className="flex justify-between items-center w-full text-left font-bold text-gray-800 focus:outline-none hover:text-blue-600 transition duration-150"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                {question}
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'transform rotate-180 text-blue-600' : 'text-gray-400'}`} />
            </button>
            {isOpen && (
                <div className="mt-2 text-gray-600 pl-4 pr-8 bg-gray-50 p-2 rounded-lg">
                    {answer}
                </div>
            )}
        </div>
    );
};

// --- 4. Supporting Component: Technical Support Contact (Indigo contrast) ---
const TechSupportContact = () => (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-indigo-200 h-full">
        <h2 className={'text-2xl font-extrabold text-gray-900 mb-4 flex items-center'}>
            Technical Support Desk
            <Zap className={'w-5 h-5 ml-2 ' + ACCENT_COLOR} />
        </h2>
        <p className="text-gray-600 mb-6 border-b pb-4">
            For login issues, Member Portal errors, API access, and IT support requests.
        </p>
        
        <div className="space-y-4">
            <div className="flex items-start">
                <Mail className={'w-5 h-5 mt-1 mr-3 ' + ACCENT_COLOR} />
                <div>
                    <span className="block font-semibold text-gray-800">IT Support Email</span>
                    <a href="mailto:it.helpdesk@wtitc.org" className="text-indigo-600 hover:text-indigo-800 transition duration-150">it.helpdesk@wtitc.org</a>
                </div>
            </div>

            <div className="flex items-start">
                <Phone className={'w-5 h-5 mt-1 mr-3 ' + ACCENT_COLOR} />
                <div>
                    <span className="block font-semibold text-gray-800">Support Hotline</span>
                    <p className="text-gray-700">+1 (800) 555-0199</p>
                </div>
            </div>

            <div className="flex items-start">
                <Clock className={'w-5 h-5 mt-1 mr-3 ' + ACCENT_COLOR} />
                <div>
                    <span className="block font-semibold text-gray-800">Hours of Operation</span>
                    <p className="text-gray-700">Monday - Friday, 9:00 AM - 5:00 PM EST</p>
                </div>
            </div>
        </div>
    </div>
);


// --- 5. Supporting Component: Contact Details Block (Secretariat/Executive Office - Blue) ---
const SecretariatContact = () => (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-blue-200 h-full">
        <h2 className={'text-2xl font-extrabold text-gray-900 mb-4 flex items-center'}>
            WTITC Executive Office
            <Briefcase className="w-5 h-5 ml-2 text-blue-500" />
        </h2>
        <p className="text-gray-600 mb-6 border-b pb-4">
            Contact the Secretariat for official WTITC council business, governance questions, and media inquiries.
        </p>
        
        <div className="space-y-4">
            <div className="flex items-start">
                <Mail className={'w-5 h-5 mt-1 mr-3 ' + PRIMARY_BLUE_DARK} />
                <div>
                    <span className="block font-semibold text-gray-800">Executive Secretary</span>
                    <a href="mailto:secretary@wtitc.org" className="text-blue-600 hover:text-blue-800 transition duration-150">secretary@wtitc.org</a>
                </div>
            </div>

            <div className="flex items-start">
                <Phone className={'w-5 h-5 mt-1 mr-3 ' + PRIMARY_BLUE_DARK} />
                <div>
                    <span className="block font-semibold text-gray-800">Main Office Line</span>
                    <p className="text-gray-700">+1 (555) 888-9900</p>
                </div>
            </div>

            <div className="flex items-start">
                <MapPin className={'w-5 h-5 mt-1 mr-3 ' + PRIMARY_BLUE_DARK} />
                <div>
                    <span className="block font-semibold text-gray-800">Official Address</span>
                    <address className="not-italic text-gray-700">
                        WTITC Headquarters, 2100 Council Plaza, New York, NY 10001, USA
                    </address>
                </div>
            </div>
        </div>
    </div>
);


// --- 6. Main App Component (The Support Page) ---
const App = () => {
    return (
        <div>
            <div>
                
                {/* --- Header Section --- */}
                <div className="text-center py-12 sm:py-16 bg-white rounded-xl shadow-md border-b-4 border-blue-500/80 mb-12">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3">
                        WTITC Member <span className={PRIMARY_BLUE}>Support Center</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Your central hub for policy documents, technical help, and contact information for the Executive Office.
                    </p>
                </div>

                {/* --- Content: Row 1 (Contact Cards) --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <TechSupportContact />
                    <SecretariatContact />
                </div>

                {/* --- Content: Row 2 (FAQ Section - Full Width) --- */}
                <div>
                    <div className={`${ACCENT_BLUE_LIGHT} p-6 sm:p-8 rounded-xl shadow-lg border ${BORDER_COLOR}`}>
                        <h2 className="text-2xl font-extrabold text-gray-900 mb-6 flex items-center">
                            Frequently Asked Questions
                            <BookOpen className="w-5 h-5 ml-2 text-blue-500" />
                        </h2>
                        <div className="space-y-0">
                            {faqs.map((item, index) => (
                                <FAQItem key={index} question={item.question} answer={item.answer} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- Footer Placeholder --- */}
                <div className="mt-20 text-center text-sm text-gray-500 pb-8">
                    Please direct all correspondence to the Executive Office unless it is a specific technical issue.
                </div>
            </div>
        </div>
    );
};

export default App;
