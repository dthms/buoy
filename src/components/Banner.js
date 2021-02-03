import React from "react"

function Banner() {
    return (
        <section className="w-full bg-blue-900 py-4 space-x-3 text-white text-center text-sm">
            <span className="py-1 px-1.5 bg-green-100 text-green-700 text-xs font-bold rounded-md">50% OFF</span>
            <span>Become one of our first 100 early access adopters</span>
            <a href="#scroll" className="text-blue-200">Learn more</a>
        </section>
    )
}

export default Banner