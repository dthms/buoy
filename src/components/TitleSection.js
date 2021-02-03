import React from "react"

function TitleSection(props) {
    return (
        <section className="mt-12 lg:mt-20 lg:px-20">
            <h1 className="tracking-tight text-7xl w-1/2 font-bold">{props.title}</h1>
            <h6 className="text-2xl mt-7 text-gray-600 leading-9">{props.subtitle}</h6>
            <div className="mt-12 lg:mt-16">
                <a href="#" className="py-3 px-4 inline-block text-white text-base font-medium bg-blue-600 rounded-md">{props.buttonOne}</a>
                <a href="#">{props.buttonTwo}</a>
            </div>
        </section>
    )
}

export default TitleSection