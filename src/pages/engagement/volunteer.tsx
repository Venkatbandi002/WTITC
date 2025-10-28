import React, { useState } from 'react';
import { text } from 'stream/consumers';

// --- 1. Theme Constants (Adopted from user's example) ---
const PRIMARY_BLUE = "text-blue-700";
const PRIMARY_BLUE_BG = "bg-blue-700";
const ACCENT_BLUE_LIGHT = "bg-blue-50";
const BORDER_COLOR = "border-blue-200";


// --- 2. Supporting Components (MetricBox) ---

const MetricBox = ({ value, label }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center border-b-4 border-blue-500/80 transition duration-300 hover:shadow-xl">
        <p className={`text-4xl font-extrabold ${PRIMARY_BLUE} mb-1`}>{value}</p>
        <p className="text-sm font-semibold uppercase text-gray-500 tracking-wider text-center">{label}</p>
    </div>
);


// --- 3. Component: Partnership Process Section (Retained) ---
const ProcessSection = () => {
    // Re-using the minimal inline icons from the original component for consistency
    const IconHandshake = ({ className = "w-6 h-6" }) => (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 10a7 7 0 0 0-7 7v2h16v-2a7 7 0 0 0-7-7h-2Z" />
            <path d="M11 10V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v7" />
            <path d="M13 10V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v7" />
        </svg>
    );

    const steps = [
        { id: 1, title: "Initial Inquiry", detail: "Start by reaching out to our dedicated alliance office." },
        { id: 2, title: "Discovery Call", detail: "A brief meeting to discuss mutual goals and confirm alignment." },
        { id: 3, title: "Agreement & Planning", detail: "Finalize the partnership scope, resources, and legal terms." },
        { id: 4, title: "Launch & Support", detail: "Execute the plan and begin our ongoing collaboration with dedicated support." },
    ];

    return (
        <section className="py-16 bg-blue-50 rounded-2xl shadow-inner my-12">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-4">
                Our Seamless Partnership Process
            </h2>
            <p className="text-lg text-center text-blue-600 mb-12 max-w-xl mx-auto">
                Four simple steps to start creating value together.
            </p>

            <div className="relative flex flex-col items-center max-w-5xl mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                    {steps.map(step => (
                        <div key={step.id} className="text-center p-4">
                            <div className="w-12 h-12 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold text-xl shadow-md ring-4 ring-blue-200 mb-4">
                                {step.id}
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-1">{step.title}</h3>
                            <p className="text-sm text-gray-600">{step.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


// --- 4. Main App Component ---
const Volunteer = () => {
    return (
        <div className="min-h-screen bg-white font-['Inter'] antialiased p-4 sm:p-8 lg:p-12">
            <div className="max-w-7xl mx-auto">
                
                {/* --- HEADER SECTION --- */}
                <div className="mb-16 sm:mb-20 lg:grid lg:grid-cols-12 lg:gap-12 items-start">
                    
                    {/* Left Column: Title and Description (7/12 width on desktop) */}
                    <div className="lg:col-span-7 text-left mb-10 lg:mb-0">
                        <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold uppercase text-white ${PRIMARY_BLUE_BG} mb-4 shadow-lg`}>
                            Strategic Alliance Network
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                            Driving Innovation Through <span className={PRIMARY_BLUE}>Collaboration</span>
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600 mt-4"> 
                            Our partnership strategy is built on five core pillars, connecting organizations to maximize impact and foster resilient, equitable, and sustainable global growth.
                        </p>
                        {/* Main CTA: Partner with Us */}
                        <button
                            onClick={() => console.log('CTA clicked: Direct to external contact method/page')}
                            className="mt-8 inline-flex items-center px-8 py-3 border border-transparent text-base font-semibold rounded-xl shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300 transform hover:scale-[1.02]"
                        >
                            Partner with Us
                        </button>
                    </div>

                    {/* Right Column: Mission Summary (5/12 width on desktop) */}
                    <div className="lg:col-span-5 p-6 sm:p-8 bg-blue-50 rounded-xl border border-blue-200 shadow-md">
                        <h3 className="text-xl font-extrabold text-gray-800 mb-3 border-b border-blue-200 pb-2">
                            Partnership Objectives
                        </h3>
                        <p className="text-base text-gray-700 leading-relaxed">
                            The Alliance Network serves as the primary engine for our *2030 Mandate*, connecting private sector giants, NGOs, and government bodies to achieve shared market expansion and technological integration.
                        </p>
                        <div className={`mt-4 text-lg font-bold ${PRIMARY_BLUE} text-right`}>#FutureForward</div>
                    </div>
                </div>

                {/* --- METRIC OVERVIEW SECTION --- */}
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20 p-6 ${ACCENT_BLUE_LIGHT} rounded-xl shadow-inner border ${BORDER_COLOR}`}>
                    <MetricBox value="150+" label="Active Global Partners" />
                    <MetricBox value="90" label="Countries Represented" />
                    <MetricBox value="5" label="Strategic Pillars" />
                </div>
                
                {/* Process Section */}
                <ProcessSection />

                {/* --- Final CTA Section (Updated for Volunteer Program) --- */}
                <div className="mt-20 pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-blue-200">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className={`text-2xl sm:text-3xl font-extrabold text-gray-900`}>
                            Join Our Mission as a Volunteer
                        </h2>
                        <p className="mt-4 text-base sm:text-lg text-gray-600 mb-8">
                            Contribute your time and expertise to our core initiatives and drive impact at the ground level.
                        </p>
                        <button
                            className={`inline-flex items-center px-8 sm:px-10 py-3.5 sm:py-4 border border-transparent text-base sm:text-lg font-semibold rounded-xl shadow-lg text-white ${PRIMARY_BLUE_BG} hover:bg-blue-800 transition duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50`}
                            onClick={() => console.log('Initiate Volunteer Program Inquiry - Final CTA')}
                        >
                            Explore Volunteer Opportunities
                        </button>
                    </div>
                </div>

                {/* Footer Placeholder */}
                <div className="mt-16 text-center text-sm text-gray-500 pb-8">
                    &copy; 2024 Alliance Partners. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Volunteer;