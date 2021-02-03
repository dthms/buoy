import React from "react"

function Banner() {
    return (
        <section className="w-full bg-purple-100 py-4 space-x-3 text-purple-700 font-medium text-center text-sm relative z-10">
            <span className="py-1 px-1.5 bg-green-600 text-white text-xs font-bold rounded-md">50% OFF</span>
            <span>Become one of our first 100 early access adopters</span>
            <a href="#scroll" className="text-purple-500">Learn more</a>
        </section>
    )
}

export default Banner