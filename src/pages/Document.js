import React from 'react';
import { useParams } from 'react-router-dom';

import Navigation from '../components/NavigationDocs';

function Document({ docs }) {
    let { slug } = useParams();
    const item = docs.find((item) => item.slug === slug)

    return (
        <div className="flex flex-row lg:px-20 lg:space-x-12">
            <Navigation />
            <div className="flex flex-grow w-full flex-col space-y-12">
                <div className="space-y-4">
                    <h2>{item.documentTitle}</h2>
                    <p className="lg">{item.shortDescription}</p>
                </div>
                <p>{item.article.text}</p>  
            </div>
        </div>
    )
}

export default Document;