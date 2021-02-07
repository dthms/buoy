import React from "react"

export default function Buy() {
    return (
        <section className="flex flex-col items-center space-y-10 p-8 bg-gray-100 rounded-lg lg:space-x-16 lg:flex-row lg:p-20 lg:space-y-0">
            <div className="w-full lg:w-1/2">
                <h2>Early access</h2>
                <p className="lg mt-7 text-gray-600">Product design is tricky business. Buoy takes care of the fundamentals for you, leaving you to add your visual flare easily.</p>
                <p className="lg mt-7 text-gray-600">This is an early access offering, We've built ~25% of the system. Expected completion of 1.0.0 is the end of Q2 2021.</p>
            </div>
            <div className="w-full h-full relative p-12 bg-white rounded-md text-center border shadow-sm border-gray-300 lg:w-auto">
                <div className="bg-green-100 text-green-700 text-body-lg text-center absolute -right-6 -top-6 font-bold border-1 border-green-300 border rounded-full shadow-md leading-384 transform rotate-12 w-20 h-20">-50%</div>
                <div className="space-y-6">
                    <p className="lg text-gray-600">Pay once, own forever</p>
                    <div className="space-x-2">
                        <p className="lg inline-block text-gray-600 line-through">$99</p>
                        <h3 className="inline-block">$49</h3>
                        <p className="lg inline-block text-gray-600">USD</p>
                    </div>
                    <a href="https://onkickoff.myshopify.com/cart/37414900334755:1?channel=buy_button" target="_blank" className="w-full py-3 px-4 inline-block text-white text-body font-semibold bg-purple-600 rounded-md">Buy Now</a>
                    <div className="space-y-1 text-center">
                        <p className="sm block font-medium text-gray-600">You're one step away from lifetime access to Buoy.</p>
                        <p className="sm text-gray-500">Reduced for a limited time.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}