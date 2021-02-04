import React from "react"

import Dan from "../dan.png";
import Josh from "../dan.png";

export default function Article() {
    return (
        <section id="scroll" className="lg:px-20 text-lg lg:text-xl leading-8 space-y-10">
            <p>
            I’m in the process of building Buoy. I’ve opened up 
            early access so you can help support the project and 
            gain access to the growing system. This is my progress 
            so far...
            </p>
            <div>Progress indication...</div>
            <p>
            Version 1.0.0 will contain all of the above and likely more. 
            Every component will have comprehesive documention on this 
            website and in Figma. Finally, I’ll also be building live 
            previews of each component in React, these will be used 
            in the documention to help illustrate how states work etc.
            </p>
            <p>
            The current version is 0.0.1, you can view my release 
            plan on the changelog page.
            </p>
            <p>
            Thanks for checking in,
            </p>
            <div className="w-1/5">
                <img className="inline w-1/2" src={Dan} />
                <img className="inline w-1/2" src={Josh} />
            </div>
        </section>
    )
}