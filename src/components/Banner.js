import React from "react"

function Banner() {
    return (
        <section className="w-full bg-purple-200 py-4 space-x-3 text-purple-700 font-medium text-center text-sm relative z-10">
            <span className="py-1 px-1.5 border border-green-300 shadow-sm bg-green-100 text-green-800 text-body-xs font-bold rounded-md">50% OFF</span>
            <p className="inline-block">Become one of our first 100 early access adopters</p>
            <a href="#scroll" className="text-body text-purple-600">Learn more</a>
        </section>
    )
}

export default Banner