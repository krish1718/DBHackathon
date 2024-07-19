import React, { useState, useEffect, useRef, useCallback } from "react";
import "../Styles/DementiaDiaries.css";

const testimonials = [
  {
    text: "When my mother was diagnosed with dementia, I felt lost and overwhelmed. Joining a support group and hearing others' stories made me realize I'm not alone. We've had tough days, but the moments of joy, like when she recognized an old song, make it all worth it.",
    name: "Jane",
    title: "Author",
    img: "https://user-images.githubusercontent.com/13468728/234031693-6bbaba7d-632c-4d7d-965f-75a76a549ce2.jpg",
  },
  {
    text: "My dad was my hero, and watching dementia change him was heartbreaking. But through the tough times, I found new ways to connect with him. Simple things, like sharing old family photos, brought smiles and sparked memories.",
    name: "Jonathan",
    title: "Treymont Inc.",
    img: "https://user-images.githubusercontent.com/13468728/234031617-2dfb19ea-01d0-4370-b63b-bb6bdfb4f78e.jpg",
  },
  {
    text: "Caring for my grandmother taught me the true meaning of patience and love. Her stories may have faded, but our bond grew stronger. We created new memories, even if they were fleeting for her.",
    name: "Charlie",
    title: "Hallmark Inc.",
    img: "https://user-images.githubusercontent.com/13468728/234031646-10533999-39e5-4c7b-ab54-d0299b13ce74.jpg",
  },
  {
    text: "I found solace in connecting with others in similar situations. Sharing our struggles and triumphs reminded me that we are not alone. The community became my extended family, offering advice, support, and understanding.",
    name: "Sarah",
    title: "Zara Inc.",
    img: "https://github.com/ecemgo/ecemgo/assets/13468728/55116c98-5f9a-4b0a-9fdb-4911b52d5ef3",
  },
];

const DementiaDiaries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRowRef = useRef(null);
  const mainRef = useRef(null);

  const updateSlide = useCallback(() => {
    if (mainRef.current) {
      const mainWidth = mainRef.current.offsetWidth;
      const translateValue = currentIndex * -mainWidth;
      slideRowRef.current.style.transform = `translateX(${translateValue}px)`;
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleResize = () => updateSlide();
    window.addEventListener("resize", handleResize);
    updateSlide(); // Initial update after component mounts

    return () => window.removeEventListener("resize", handleResize);
  }, [updateSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="parent-container">
      <main id="sagarka-main" ref={mainRef}>
        <div className="sagarka-slider">
          <div className="sagarka-slide-row" ref={slideRowRef}>
            {testimonials.map((testimonial, index) => (
              <div className="sagarka-slide-col" key={index}>
                <div className="sagarka-content">
                  <p>{testimonial.text}</p>
                  <h2>{testimonial.name}</h2>
                  <p>{testimonial.title}</p>
                </div>
                <div className="sagarka-hero">
                  <img src={testimonial.img} alt={testimonial.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="sagarka-indicator">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`sagarka-btn ${
                index === currentIndex ? "sagarka-active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DementiaDiaries;
