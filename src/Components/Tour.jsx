import React from 'react'

const Tour = ({id,img,title,country,days,amount,date,info}) => {
  return (
    <>
    <article class="tour-card">
          <div class="tour-img-container">
            <img src={`./images/${img}`} class="tour-img" alt="" />
            <p class="tour-date">{date}</p>
          </div>
          <div class="tour-info">
            <div class="tour-title">
              <h4>{title}</h4>
            </div>
            <p>
              {info}
            </p>
            <div class="tour-footer">
              <p>
                <span><i class="fas fa-map"></i></span> {country}
              </p>
              <p> {days} Days</p>
              <p>${amount}</p>
            </div>
          </div>
        </article>
    </>
  )
}

export default Tour;