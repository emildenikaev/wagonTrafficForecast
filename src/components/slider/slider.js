import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import './slider.scss';

function Slider() {
 const data = [
    {
      image: "https://naked-science.ru/wp-content/uploads/2021/12/258562326.jpg",
      caption: "Россия"
    },
    {
      image: "https://i.pinimg.com/originals/6c/63/df/6c63dfa0433d42b4b8f4c3bcc69f5438.jpg",
      caption: "Германия"
    },
    {
      image: "https://img-s3.onedio.com/id-571640a48ba7aa960b9648f0/rev-0/raw/s-e8f61ccecb63fc1623390446b49c6d36a0525c78.jpg",
      caption: "Франция"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="slider">
      <p className='slider-info'>Транспортировка — процесс перемещения груза /объекта в место назначения, посредством тех или иных транспортных средств, обычно термин применяется по отношению к штучным доставкам крупногабаритных объектов. Перевозки от нашей компании происходят в любую страну! <br></br> Главный филиал находится в Москве.</p>
      <div >
        <div style={{ textAlign: "center" }}>
          <div style={{
            padding: "0 20px"
          }}>
            <Carousel
              data={data}
              time={5000}
              width="850px"
              height="500px"
              captionStyle={captionStyle}
              radius="10px"
              slideNumber={true}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"

              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "850px",
                maxHeight: "500px",
                margin: "40px auto",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;