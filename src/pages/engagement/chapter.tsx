import React, { useState } from 'react';

// Define the 6 steps for joining the partnership ecosystem
const steps = [
  {
    number: 1,
    title: "Review Guidelines",
    description: "Understand our ecosystem requirements, brand standards, and collaboration rules to ensure smooth participation.",
  },
  {
    number: 2,
    title: "Prepare Chapter Details",
    description: "Gather your organization’s information, primary contact, and a clear summary of your chapter’s objectives.",
  },
  {
    number: 3,
    title: "Submit Interest Form",
    description: "Send your initial request for collaboration through our official communication channel or partner portal.",
  },
  {
    number: 4,
    title: "Internal Review & Vetting",
    description: "Our review team evaluates your alignment with our global mission within 3–5 working days.",
  },
  {
    number: 5,
    title: "Orientation & Approval",
    description: "Once approved, you’ll receive onboarding guidance, access to communication tools, and chapter setup materials.",
  },
  {
    number: 6,
    title: "Launch & Engage",
    description: "Begin your activities, connect with other chapters, and participate in upcoming global conclaves and initiatives.",
  },
];

// Define FAQ data
const faqs = [
    {
        question: "How long does the review process take?",
        answer: "The Internal Review (Step 4) typically takes 3 to 5 working days from the submission of the Interest Form."
    },
    {
        question: "Is there a cost to join the ecosystem?",
        answer: "No, participation in our global ecosystem and chapter program is currently free of charge."
    },
    {
        question: "What support is provided after launch?",
        answer: "Approved chapters receive ongoing support through dedicated communication channels, access to marketing resources, and priority invites to global events."
    }
];

// Main Component (joinchapter)
const joinchapter: React.FC = () => {
    // State to manage which step is currently active/clicked
    const [activeStep, setActiveStep] = useState<number | null>(null);
    // State to manage the collapse of the FAQ section
    const [faqOpen, setFaqOpen] = useState(false);

    const toggleStep = (stepNumber: number) => {
        setActiveStep(activeStep === stepNumber ? null : stepNumber);
    };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-8 font-sans">
      {/* Main Content Container (Centered Guide Block) */}
      <div className="max-w-4xl w-full bg-white p-8 rounded-2xl shadow-2xl border-t-4 border-blue-600">
        
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Steps to Join
          </h1>
          <p className="text-lg text-gray-600 mt-2 border-b pb-4">
            Follow these essential steps to become part of our global ecosystem.
          </p>
        </header>

        {/* Steps List */}
        <div className="space-y-4">
          {steps.map((step) => (
            <div
              key={step.number}
              onClick={() => toggleStep(step.number)}
              // Conditional styling for the active step
              className={`
                flex flex-col sm:flex-row items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300
                ${activeStep === step.number 
                    ? 'bg-blue-50 border-l-4 border-blue-600 shadow-md' 
                    : 'border-b border-gray-100 hover:bg-gray-50'
                }
              `}
            >
              {/* Step Number Badge */}
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center text-lg shadow-md">
                {step.number}
              </div>
              
              {/* Title and Description */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 mt-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- Collapsible FAQ Section --- */}
        <div className="mt-10 pt-4 border-t border-gray-200">
            <h2 
                className="text-2xl font-bold text-gray-800 cursor-pointer flex justify-between items-center"
                onClick={() => setFaqOpen(!faqOpen)}
            >
                Frequently Asked Questions
                <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${faqOpen ? 'transform rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </h2>
            
            {/* FAQ Content Area */}
            {faqOpen && (
                <div className="mt-4 space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-l-4 border-blue-400 pl-4 py-2 bg-gray-50 rounded-md">
                            <p className="font-semibold text-gray-700">{faq.question}</p>
                            <p className="text-sm text-gray-600 mt-1">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>

        {/* Footer */}
        <footer className="text-center mt-10 text-gray-500 text-sm">
          <p>
            For more information, visit the{" "}
            <a href="#" className="text-blue-600 hover:underline font-medium">
              Global Conclaves & Partner Documentation
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
};

export default joinchapter;