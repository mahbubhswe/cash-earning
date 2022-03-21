import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/PaymentProofSlider.module.css";
export default function PaymentSlider() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleText}>Earn And Get Instant Payment</div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={500}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className={styles.item}>
          Mahbub Hasan<br></br>$66
        </div>
        <div className={styles.item}>
          {" "}
          Bayjid Hasan<br></br>$87
        </div>
        <div className={styles.item}>
          {" "}
          Jhon Rok<br></br>$90
        </div>
        <div className={styles.item}>
          {" "}
          Nahid Khan<br></br>$56
        </div>
      </Carousel>
    </div>
  );
}
