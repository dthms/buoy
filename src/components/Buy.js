import React from "react"

export default function Buy() {
    return (
        <section className="flex flex-col items-center space-y-10 p-8 bg-gray-100 rounded-lg lg:space-x-16 lg:flex-row lg:p-20 lg:space-y-0">
            <div className="w-full lg:w-1/2">
                <h1 className="tracking-tight text-6xl lg:text-7xl font-bold">Early access for all</h1>
                <h6 className="text-lg lg:text-xl mt-7 text-gray-600">Product design is tricky business, Buoy takes care of the fundamentals for you and makes it easy to add your visual flare.</h6>
                <h6 className="text-lg lg:text-xl mt-7 text-gray-600">This is the early access special, I’ve currently built ~25% of the system. I expect to complete 1.0.0 by the end of Q2 2021.</h6>
            </div>
            <div className="w-full h-full relative p-12 bg-white rounded-md text-center space-y-12 lg:w-auto">
                <div className="bg-green-50 text-green-700 text-base text-center absolute -right-5 -top-5 font-bold border-4 border-white rounded-full pt-6 transform rotate-12 w-20 h-20">-50%</div>
                <span className="text-lg text-gray-600">Pay once, own forever</span>
                <div className="space-y-6">
                    <div className="space-x-2">
                        <span className="inline-block text-2xl text-gray-600 line-through">$99</span>
                        <h3 className="inline-block text-4xl font-bold">$49</h3>
                        <span className="inline-block text-2xl text-gray-600">USD</span>
                    </div>
                    <a href="https://onkickoff.myshopify.com/cart/37414900334755:1?channel=buy_button" target="_blank" className="py-3 px-4 inline-block text-white text-base font-medium bg-blue-600 rounded-md">Buy Now on Gumroad</a>
                </div>
                <div className="space-y-1 text-center">
                    <span className="block text-sm font-medium text-gray-600">You're one step away from lifetime access to Buoy.</span>
                    <span className="text-sm text-gray-500">Reduced for a limited time.</span>
                </div>
            </div>
        </section>
    )
}