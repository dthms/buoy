import React, { Component } from 'react';

import TitleSection from "../components/TitleSection";
import Article from "../components/Article";
import Buy from "../components/Buy";

import Video from "../video.png";

class Home extends Component {
  render() {
    return (
        <div className="space-y-20 lg:space-y-28">
          <TitleSection
            title="Utility first design system"
            subtitle="A comprehensive design system built with implemention in mind. Buoy is an extremely scalable system built in Figma using Auto Layout V3 and Variants."
            buttonOne="Buy Now"
          />
          <div className="p-8 lg:p-20 bg-video-bg bg-cover rounded-lg text-center">
            <img src={Video} alt="video" />
          </div>
          <Article />
          <Buy />
        </div>
    );
  }
}

export default Home;