import React, { useState, useEffect } from 'react';

// --- Theme & Utility Constants ---
const PRIMARY_BLUE = "text-blue-700";
const PRIMARY_BLUE_BG = "bg-blue-600";
const ACCENT_BG = "bg-blue-50"; 
const BORDER_COLOR = "border-blue-200";

// --- Icon Function ---
const getIcon = (stage: number) => {
    const iconClass = "w-6 h-6";
    switch (stage) {
        case 1: return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>; 
        case 2: return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13a4.755 4.755 0 010 6.5M18 13v-3a2 2 0 00-2-2h-4v-3a1 1 0 00-1-1H7a1 1 0 00-1 1v12a1 1 0 001 1h5m0-1v1m0-1a2 2 0 100-4M5 8h4"/></svg>; 
        case 3: return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.104A9.993 9.993 0 0012 2C7.266 2 3.233 5.432 2.378 10.158.91 16.793 6.94 22 12 22s11.09-5.207 9.622-11.842z"/></svg>; 
        case 4: return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11l-8 4 8 4 8-4-8-4zM4 15l8 4m-4-8l4-4m4 4l-4 4"/></svg>; 
        case 5: return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.962 8.962 0 0112 20c-4.418 0-8-3.582-8-8s3.582-8 8-8v1m0 0l-2.4 2.4m2.4-2.4L14.4 7M10 17l-4 4m4-4l4 4m-4-4v4"/></svg>; 
        default: return null;
    }
};

// --- Data Structure for Pipeline Stages ---
interface ProgramStage {
    id: number;
    name: string;
    focus: string;
    outcome: string;
}

const accreditationProgram: ProgramStage[] = [
    {
        id: 1,
        name: "Application & Eligibility Screening",
        focus: "Verify candidate credentials, review pre-requisite experience, and submit initial registration fees.",
        outcome: "Approved application status and access keys to the mandatory training portal."
    },
    {
        id: 2,
        name: "Mandatory Training & Preparation",
        focus: "Complete all required course modules (online or in-person), attend workshops, and conduct self-study using official materials.",
        outcome: "Minimum score achieved on all module quizzes and successful completion of a Capstone training project."
    },
    {
        id: 3,
        name: "Proctored Examination & Assessment",
        focus: "Pass the proctored certification examination, and submit evidence of competency through a peer-reviewed practical assignment or audit.",
        outcome: "Official 'Certified' status granted and eligibility for program benefits activated."
    },
    {
        id: 4,
        name: "Official Certification & Recognition",
        focus: "Receive the official digital credential, utilize the program marks for marketing, and gain access to member-only resources and communities.",
        outcome: "Public listing on the Accredited Professionals directory and issuance of a formal certificate."
    },
    {
        id: 5,
        name: "Continuous Maintenance & Renewal",
        focus: "Fulfill Continuing Education (CE) requirements, adhere to the Code of Ethics, and complete the annual renewal registration process.",
        outcome: "Renewal of certification status, ensuring compliance and continuous professional growth."
    },
];

// --- Sub-Component for a Single Accordion Item ---
interface AccordionItemProps {
    stage: ProgramStage;
    isOpen: boolean;
    onToggle: () => void;
}

const AccreditationItem: React.FC<AccordionItemProps> = ({ stage, isOpen, onToggle }) => {
    
    const borderColor = isOpen ? "border-blue-600" : BORDER_COLOR;
    const numberBg = isOpen ? PRIMARY_BLUE_BG : "bg-blue-100";
    const numberText = isOpen ? "text-white" : PRIMARY_BLUE;

    // We use a ref and state to calculate the dynamic height for smooth transition
    const contentRef = React.useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState('0px');

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
        }
    }, [isOpen]);


    return (
        <div className={`border-l-4 ${borderColor} ${isOpen ? 'bg-white shadow-lg' : 'bg-gray-50 hover:bg-white'} rounded-xl transition-all duration-300 overflow-hidden mb-5`}>
            {/* Header (Always Visible) */}
            <button 
                className="flex items-center w-full p-5 text-left focus:outline-none"
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                {/* Step Number Circle */}
                <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full font-extrabold text-xl mr-4 transition-colors ${numberBg} ${numberText}`}>
                    {stage.id}
                </div>
                
                {/* Stage Title */}
                <div className="flex-1">
                    <h3 className={'text-xl font-semibold text-gray-800 transition-colors'}>
                        {stage.name}
                    </h3>
                </div>

                {/* Toggle Icon */}
                <div className="text-gray-500 transform transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>

            {/* Content (Accordion Body) */}
            <div 
                ref={contentRef}
                className={`transition-max-height duration-500 ease-in-out`}
                style={{ maxHeight: contentHeight }}
            >
                <div className={`px-5 pt-2 pb-5 pl-14 border-t ${BORDER_COLOR}`}>
                    <div className="pt-2">
                        <p className="text-sm font-bold text-blue-600 mb-2 uppercase tracking-wider">
                            Primary Focus:
                        </p>
                        <p className="text-gray-700 mb-4">
                            {stage.focus}
                        </p>
                        <p className="text-sm font-bold text-blue-600 mb-2 uppercase tracking-wider">
                            Mandatory Outcome:
                        </p>
                        <p className="text-gray-700 font-medium">
                            {stage.outcome}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


// --- Main Component ---
const Accreditation: React.FC = () => {
    // Open Step 1 by default for better user guidance
    const [openStep, setOpenStep] = useState<number | null>(1); 

    const handleToggle = (id: number) => {
        setOpenStep(openStep === id ? null : id);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div >
            <div>

                {/* Responsive Grid: Stacks on mobile, 4/8 split on desktop */}
                <div className="md:grid md:grid-cols-12 md:gap-12">
                    
                    {/* --- Left-Aligned Header/Intro (Cols 1-4) --- */}
                    <div className="md:col-span-4 mb-10 md:mb-0 md:sticky md:top-8 md:h-full">
                        <div className="md:pr-8">
                            <span className={`inline-block text-base font-semibold uppercase text-blue-600 mb-2 tracking-widest`}>
                                Official 5-Step Program
                            </span>
                            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                                Professional <span className={PRIMARY_BLUE}>Accreditation</span> Path
                            </h1>
                            <p className="text-lg text-gray-600 mt-4"> 
                                Navigate your journey to certification with clarity. Each step below outlines the requirements and the mandatory outcome you will achieve.
                            </p>
                            <div className="mt-8">
                                <button
                                    className={`w-full md:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-xl shadow-lg text-white ${PRIMARY_BLUE_BG} hover:bg-blue-700 transition duration-300 transform hover:scale-[1.01]`}
                                    onClick={() => console.log('Download Program Handbook')}
                                >
                                    Start Your Application
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* --- Right-Aligned Stepped Accordion (Cols 5-12) --- */}
                    <div className="md:col-span-8">
                        {accreditationProgram.map((stage) => (
                            <AccreditationItem 
                                key={stage.id}
                                stage={stage} 
                                isOpen={openStep === stage.id}
                                onToggle={() => handleToggle(stage.id)}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Accreditation;