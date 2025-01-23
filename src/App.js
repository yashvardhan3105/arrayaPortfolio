import "./App.css";
import one from "../src/Assets/1.jpeg";
import two from "../src/Assets/2.jpeg";
import three from "../src/Assets/3.jpeg";
import four from "../src/Assets/4.jpeg";
import five from "../src/Assets/5.jpeg";
import six from "../src/Assets/6.jpeg";
import seven from "../src/Assets/7.jpeg";
import eight from "../src/Assets/8.jpeg";
import nine from "../src/Assets/9.jpeg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function App() {
  return (
    <div>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <div>
      <nav>
        <div className="links-1">
          <a href="/works">Works</a>
          <a href="/archive">Archive</a>
        </div>
        <div className="logo">
          <a href="/">Arraya</a>
        </div>
        <div className="links-2">
          <a href="/info">Info</a>
          <a href="mailto:vg.arrayakumar@gmail.com">Contact</a>
        </div>
      </nav>
    </div>
  );
}

function Body() {
  gsap.registerPlugin(ScrollTrigger);
  window.addEventListener("load", function () {
    const slides = gsap.utils.toArray(".slide");
    const activeSlideImages = gsap.utils.toArray(".active-slide img");

    function getInitialTranslateZ(slide) {
      const style = window.getComputedStyle(slide);
      const matrix = style.transform.match(/matrix3d\((.+)\)/);

      if (matrix) {
        const values = matrix[1].split(", ");
        return parseFloat(values[14] || 0);
      }
      return 0;
    }

    function mapRange(value, inMin, inMax, outMin, outMax) {
      return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }

    slides.forEach((slide, index) => {
      const initialZ = getInitialTranslateZ(slide);

      ScrollTrigger.create({
        trigger: ".container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const zIncrement = progress * 22500;
          const currentZ = initialZ + zIncrement;

          let opacity;

          if (currentZ > -2500) {
            opacity = mapRange(currentZ, -2500, 0, 0.5, 1);
          } else {
            opacity = mapRange(currentZ, -5000, -2500, 0, 0.5);
          }

          slide.style.opacity = opacity;

          slide.style.transform = `translateX(-50px) translateY(-50px) translateZ(${currentZ}px)`;

          if (currentZ > 100) {
            gsap.to(activeSlideImages[index], 1.5, {
              opacity: 1,
              ease: "power3.out",
            });
          } else {
            gsap.to(activeSlideImages[index], 1.5, {
              opacity: 0,
              ease: "power3.out",
            });
          }
        },
      });
    });
  });
  return (
    <div className="container">
      <div className="active-slide">
        <img alt="pic" src={one}></img>
        <img alt="pic" src={two}></img>
        <img alt="pic" src={three}></img>
        <img alt="pic" src={four}></img>
        <img alt="pic" src={five}></img>
        <img alt="pic" src={six}></img>
        <img alt="pic" src={seven}></img>
        <img alt="pic" src={eight}></img>
        <img alt="pic" src={nine}></img>
      </div>

      <div className="slider">
        <div className="slide" id="slide-1">
          <div className="slide-copy">
            <p>Arraya Kumar</p>
            <p>CyberSecurity Expert</p>
          </div>
          <div className="slide-img">
            <img alt="pic" src={one}></img>
          </div>
        </div>
        <div className="slide" id="slide-2">
          <div className="slide-copy">
            <p>School</p>
            <p>10th & 12th from ST. Francis School</p>
          </div>
          <div className="slide-img">
            <img alt="pic" src={two}></img>
          </div>
        </div>
        <div className="slide" id="slide-3">
          <div className="slide-copy">
            <p>College</p>
            <p>GEC Autonomous College, BBSR</p>
          </div>
          <div className="slide-img">
            <img alt="pic" src={three}></img>
          </div>
        </div>
        <div className="slide" id="slide-4">
          <div className="slide-copy">
            <p>Skills</p>
            <p>HTML, CSS, JAVASCRIPT</p>
          </div>
          <div className="slide-img">
            <img alt="pic" src={four}></img>
          </div>
        </div>
        <div className="slide" id="slide-5">
          <div className="slide-copy">
            <p>PYTHON</p>
            <p>ADVANCED OFFICE</p>
          </div>
          <div className="slide-img">
            <img alt="pic" src={five}></img>
          </div>
        </div>
        <div className="slide" id="slide-6">
          <div className="slide-copy">
            <p>WINDOWS INSIDER</p>
            <p>REACTJS</p>
          </div>
          <div className="slide-img">
            <img alt="pic" src={six}></img>
          </div>
        </div>
        <div className="slide" id="slide-7">
          <div className="slide-copy">
            <p>NODEJS</p>
            <p>GIT</p>
          </div>
          <div className="slide-img">
            <img alt="pic" src={seven}></img>
          </div>
        </div>
        <div className="slide" id="slide-8">
          <div className="slide-copy">
            <p>GIHUB</p>
            <p>DOCKER</p>
          </div>
          <div className="slide-img">
            <img alt="pic" src={eight}></img>
          </div>
        </div>
        <div className="slide" id="slide-9">
          <div className="slide-copy">
            <p>Hobbies</p>
            <p>Gaming, Editing, Photography, Graphic Designing</p>
          </div>
          <div className="slide-img">
            <img alt="pic" src={nine}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <p>&#169;</p>
      <p>Arraya</p>
    </div>
  );
}
