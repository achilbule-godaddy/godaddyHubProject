import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "../../../node_modules/swiper/swiper-bundle.css";
import "../../../node_modules/swiper/swiper-bundle.js";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectFade, Thumbs, Controller } from "swiper";
import { useState, useEffect } from "react";
import ArrowLogo from "../Logos/ArrowLogo";
import SearchIcon from "../Logos/SearchIcon";
import env from "react-dotenv";

// Import Swiper styles

SwiperCore.use([Navigation]);

function TldsMenu({ data }) {
  var [thumbsSwiper, setThumbsSwiper] = useState(null);

  var tld = [];
  var tl = [];
  var tllist = [];
  data.map((tl) => {
    var t = [];

    t.push(tl.tld_name);
    t.push(tl.tld_bgimage);
    t.push(tl.tld_bgimage_mobile);
    t.push(tl.tld_placeholder);
    tld.push(t);
  });
  console.log(tld);
  tld.map((tldata, index) => {
    return tl.push(
      <SwiperSlide key={`slide-${index}`} tag="div">
        <div class="hero-banner-slider-box d-flex align-items-end align-items-md-center">
          <div
            class="banner-img d-none d-md-block"
            style={{
              backgroundImage: `url(${process.env.REACT_APP_TLD_IMAGE_URL}${tldata[1]})`,
            }}
          ></div>
          <div
            class="banner-img d-block d-md-none"
            style={{
              backgroundImage: `url(${process.env.REACT_APP_TLD_IMAGE_URL}${tldata[2]})`,
            }}
          ></div>
          <div class="container">
            <div class="row">
              <div class="col-xxl-6 col-xl-7 col-md-8">
                <div class="hero-text mt-md-auto text-white">
                  <h1>
                    Own what <br />
                    you do.
                  </h1>
                  <div class="hero-text-details">
                    <p>
                      Find the perfect domain name that lets folks know who you
                      are and what you're all about
                    </p>
                  </div>
                  <div class="tld-search">
                    <form action="#">
                      <div class="tld-search-form">
                        <span class="search-ico">
                          <SearchIcon />
                        </span>
                        <input
                          type="text"
                          class="form-control"
                          placeholder={tldata[3]}
                        />
                        <button
                          type="submit"
                          class="search-btn btn btn-primary"
                        >
                          <span class="search-ico">
                            <SearchIcon />
                          </span>
                          <span>Search Domains</span>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div class="tld-link">
                    <a href="#">
                      Learn more about <span>.{tldata[0]}</span>
                      <ArrowLogo />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });
  tld.map((tldata, index) => {
    tllist.push(
      <SwiperSlide key={`slide-${index}`} tag="div">
        <span class="tld-name">{tldata[0]}</span>
      </SwiperSlide>
    );
  });

  return (
    <main>
      <div class="home-slider-main-box">
        <div class="home-slider-box">
          <div class="home-slider swiper">
            <Swiper
              id="main"
              tag="div"
              wrapperTag="div"
              navigation={{
                nextEl: ".tld-button-next",
                prevEl: ".tld-button-prev",
              }}
              slidesPerView={1}
              loop
              observer
              observeParents
              modules={[EffectFade, Thumbs]}
              effect="fade"
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
            >
              {tl}
            </Swiper>
          </div>
        </div>

        <div class="tld-slider-main-box">
          <div class="tld-slider-box">
            <Swiper
              id="main"
              tag="div"
              wrapperTag="div"
              navigation={{
                nextEl: ".tld-button-next",
                prevEl: ".tld-button-prev",
              }}
              slidesPerView={14}
              loop
              direction="vertical"
              className="tld-slider"
              loopedSlides={90}
              mousewheel={true}
              keyboard={{
                enabled: true,
              }}
              observer
              observeParents
              onSwiper={setThumbsSwiper}
              breakpoints={{
                0: {
                  slidesPerView: 5,
                  spaceBetween: 6,
                },
                768: {
                  slidesPerView: 9,
                  spaceBetween: 8,
                },
                992: {
                  slidesPerView: 14,
                  spaceBetween: 8,
                },
              }}
            >
              {tllist}
              <div class="slider-nav">
                <div class="swiper-button-prev tld-button-prev"></div>
                <div class="swiper-button-next tld-button-next"></div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TldsMenu;
