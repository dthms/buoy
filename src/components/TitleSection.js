import React from "react"

import Wiggle from "../wiggle.svg";

function TitleSection(props) {
    return (
        <section className="mt-12 lg:mt-20 lg:px-20 relative">
            <h1 className="tracking-tight text-7xl w-3/5 font-bold">{props.title}</h1>
            <h6 className="text-2xl mt-7 text-gray-600 leading-9">{props.subtitle}</h6>
            <div className="mt-12 lg:mt-16 relative">
                <div className="absolute py-1 -left-3 lg:-left-5 -top-5 -rotate-6 transform px-2 bg-green-100 rounded-lg text-xs font-semibold text-green-700 border-4 border-white">Save 50%</div>
                <a href="https://onkickoff.myshopify.com/cart/37414900334755:1?channel=buy_button" target="_blank" className="py-3 px-8 text-center block text-white text-base font-medium bg-blue-600 rounded-md lg:inline-block">{props.buttonOne}</a>
                <a href="#">{props.buttonTwo}</a>
            </div>
            <img src={Wiggle} className="z-0 absolute -top-176 -right-176" />
        </section>
    )
}

export default TitleSection