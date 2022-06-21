import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Grid } from "swiper";
import "../../../node_modules/swiper/swiper-bundle.css";
import "../../../node_modules/swiper/swiper-bundle.js";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";
import { useState, useEffect } from "react";

import NavArrowLogo from "../Logos/NavArrowLogo";
import { getAllCategories } from "../../Services/api";

SwiperCore.use([Navigation, Pagination]);

function CategoryBox(props) {
  {
    var [tldData, setTldData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        var categorydata = await getAllCategories();
        setTldData(categorydata);
      };
      fetchData();
    }, []);

    var category = [];
    tldData.map((domainCategory, index) => {
      category.push(
        <SwiperSlide key={`slide-${index}`} tag="div">
          <a href="#" class="tld-category-box">
            <div class="tld-category-img" 
              style={{
                backgroundImage: `url(${process.env.REACT_APP_TLD_IMAGE_URL}${domainCategory.category_image}`,
              }}
            >
            </div>
            <div class="tld-category-info">
              <h5>
                {domainCategory.category_name}
                <NavArrowLogo />
              </h5>
            </div>
          </a>
        </SwiperSlide>
      );
    });
  }

  return (
    <>
      <div className="section-row overflow-hidden">
        <div className="container">
          <div class="row">
            <div class="col-md-6">
              <div class="section-title">
                <h3>Categories to help you decide.</h3>
                <p>
                  Find the right extension for your industry, interest, or
                  location.
                </p>
              </div>
            </div>
          </div>
          <div className="tld-category-slider-box">
            <Swiper
              id="main"
              tag="div"
              wrapperTag="div"
              slidesPerView={3}
              grid={{
                rows: 3,
              }}
              breakpoints={{
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
                  slidesPerView:3,
                },
              }}
              spaceBetween={24}
              navigation={true}
              modules={[Grid, Navigation]}
              className="tld-category-slider"
            >
              {category}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryBox;
