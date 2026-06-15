import React from 'react'

function Banner() {
  return (
    <div>
         <div
        
  id="bannerCarousel"
  className="carousel slide"
  data-bs-ride="carousel"
  data-bs-interval="2000"
>
        {/* Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#bannerCarousel"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#bannerCarousel"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#bannerCarousel"
            data-bs-slide-to="2"
          ></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/image/bn.jpg" 
              className="d-block w-100"
              alt="Banner 1"  height={300}
            />
            <div className="carousel-caption">
              <h3>Latest Game</h3>
              
            </div>
          </div>

          <div className="carousel-item">
            <img src="/image/b.jpg" 
              className="d-block w-100"
              alt="Banner 2" height={300}
            />
            <div className="carousel-caption">
              <h3>Electronics Sale</h3>
              <p>Up to 50% off</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="/image/b5.jpg" height={300}
              className="d-block w-100"
              alt="Banner 3"
            />
            <div className="carousel-caption">
              <h3>50% off</h3>
              <p>Best quality products</p>
            </div>
          </div>
        </div>

        {/* Previous Button */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        {/* Next Button */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
    
  )
}

export default Banner