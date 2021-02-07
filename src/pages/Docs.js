import React from 'react';
import Navigation from '../components/NavigationDocs';

function Documents() {
    return (
        <div className="flex flex-row lg:px-20 lg:space-x-12">
            <Navigation />

            <div className="flex flex-grow w-full flex-col space-y-12">
                <div className="space-y-4">
                    <h2>Getting started with Buoy</h2>
                    <p className="lg">Stop reinventing the wheel with Buoy - a comprehensive design system optimized for scalability, accessibility, and developers. Built in Figma using Auto Layout 3.0 and Variants.</p>
                </div>
                <h4>What's new</h4>  
            </div>
        </div>
    )
}

export default Documents;