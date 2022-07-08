import React from "react";
import Swiper, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";

import { useState, useEffect } from "react";

import NavArrowLogo from "../Logos/NavArrowLogo";
import { getAllCategories } from "../../Services/homeApi";
Swiper.use([Navigation]);
function CategoryBox(props) {
  var [tldData, setTldData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      var categorydata = await getAllCategories();
      setTldData(categorydata);
    };
    fetchData();
  }, []);
  new Swiper(".tld-category-slider", {
    slidesPerView: 3,
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.33,
      },
      767: {
        slidesPerView: 2.1,
      },
      991: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  let category = [];
  for (let i = 0; i < tldData.length; i++) {
    if (i % 3 === 0) {
      let t = [];
      t.push(tldData[i]);
      t.push(tldData[i + 1]);
      t.push(tldData[i + 2]);
      category.push(t);
    }
  }

  var categorySlide = category.map((domainCategory, index) => {
    return (
      <div className="swiper-slide" key={index}>
        {domainCategory[0] ? (
          <a href="/#" className="tld-category-box">
            <div
              className="tld-category-img"
              style={{
                backgroundImage: `url(${process.env.REACT_APP_TLD_IMAGE_URL}${domainCategory[0].category_image}`,
              }}
            ></div>
            <div className="tld-category-info">
              <h5>
                {domainCategory[0].category_name}
                <NavArrowLogo />
              </h5>
            </div>
          </a>
        ) : (
          ""
        )}
        {domainCategory[1] ? (
          <a href="/#" className="tld-category-box">
            <div
              className="tld-category-img"
              style={{
                backgroundImage: `url(${process.env.REACT_APP_TLD_IMAGE_URL}${domainCategory[1].category_image}`,
              }}
            ></div>
            <div className="tld-category-info">
              <h5>
                {domainCategory[1].category_name}
                <NavArrowLogo />
              </h5>
            </div>
          </a>
        ) : (
          ""
        )}
        {domainCategory[2] ? (
          <a href="/#" className="tld-category-box">
            <div
              className="tld-category-img"
              style={{
                backgroundImage: `url(${process.env.REACT_APP_TLD_IMAGE_URL}${domainCategory[2].category_image}`,
              }}
            ></div>
            <div className="tld-category-info">
              <h5>
                {domainCategory[2].category_name}
                <NavArrowLogo />
              </h5>
            </div>
          </a>
        ) : (
          ""
        )}
      </div>
    );
  });
  return (
    <div className="section-row overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="section-title">
              <h3>Categories to help you decide.</h3>
              <p>
                Find the right extension for your industry, interest, or
                location.
              </p>
            </div>
          </div>
        </div>
        <div className="tld-category-slider-box">
          <div className="tld-category-slider swiper">
            <div className="swiper-wrapper">{categorySlide}</div>
          </div>
          <div className="swiper-nav">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBox;
