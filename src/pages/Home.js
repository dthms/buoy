import React, { Component } from 'react';

import TitleSection from "../components/TitleSection";
import Article from "../components/Article";
import Buy from "../components/Buy";

import Video from "../video.png";
import Test from "../test.mp4"

class Home extends Component {
  render() {
    return (
        <div className="space-y-20 lg:space-y-28">
          <TitleSection
            title="Utility first design system"
            subtitle="A comprehensive design system built with implemention in mind. Buoy is an extremely scalable system built in Figma using Auto Layout V3 and Variants."
            buttonOne="Buy Now"
          />
          <div className="p-8 lg:p-20 rounded-lg text-center relative bg-gradient-to-r from-purple-400 via-red-300 to-alt-600">
            <video autoplay="autoplay" loop muted className="rounded-md shadow-lg">
              <source src={Test} type="video/mp4" />
            </video>
          </div>
          <Article />
          <Buy />
        </div>
    );
  }
}

export default Home;