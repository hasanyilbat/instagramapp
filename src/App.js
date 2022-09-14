import "./App.css";
import { useRef } from "react";
import { useEffect } from "react";

function App() {
  const ref = useRef();

  useEffect(() => {
    let images = ref.current.querySelectorAll("img");
    const total = images.length;
    let current = 0;

    const imageSlider = () => {
      if (current > 0) {
        images[current - 1].classList.add("opacity-0");
      } else {
        images[total - 1].classList.add("opacity-0");
      }
      images[current].classList.remove("opacity-0");
      if (current === total - 1) {
        current = 0;
      } else {
        current += 1;
      }
    };
    let interval = setInterval(imageSlider, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  return (
    <div className="h-full w-full flex items-center justify-center " ref={ref}>
      <div className="w-[380px] h-[581px] relative  bg-logo-pattern bg-length:[468.32px_634.15px] bg-[top_left_-46px]">
        <div className="w-[250px] h-[581px] absolute top-[27px] right-[18px]">
          <img
            className="absolute top-0 left-0 opacity-0 transition-opacity duration-750 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"
            alt=""
          />
          <img
            className="absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png"
            alt=""
          />
          <img
            className="absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png"
            alt=""
          />
          <img
            className="absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
