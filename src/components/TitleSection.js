import React from "react"

import Wiggle from "../wiggle.svg";

function TitleSection(props) {
    return (
        <section className="mt-12 lg:mt-20 lg:px-20 relative">
            <h1 className="w-3/5">{props.title}</h1>
            <p className="xl mt-7 text-gray-600">{props.subtitle}</p>
            <div className="w-full lg:w-36 mt-12 lg:mt-16 relative">
                <div className="absolute py-1 -right-3 lg:-right-1 -top-3 rotate-12 transform px-2 bg-green-100 rounded-lg text-body-xs font-bold text-green-800 border border-green-300 shadow-sm">Save 50%</div>
                <a href="https://onkickoff.myshopify.com/cart/37414900334755:1?channel=buy_button" target="_blank" className="py-3 px-8 text-center block text-white text-base font-semibold bg-purple-600 rounded-md lg:inline-block">{props.buttonOne}</a>
                <a href="#">{props.buttonTwo}</a>
            </div>
            <img src={Wiggle} className="z-0 absolute -top-240 -right-176" />
        </section>
    )
}

export default TitleSection