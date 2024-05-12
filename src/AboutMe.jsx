import React, { useEffect } from 'react';
import $ from 'jquery';
import { HorizontalSlider } from './HorizontalSlider';

export function AboutMe() {
  return (
    <div className="flex-col mb-4">
      <div className="aboutmecontainer h-auto w-full text-white font-nunito flex flex-col md:flex-row justify-around items-center p-9 md:space-y-0 space-y-9">
        <div className="flex flex-col md:w-1/2 w-full p-4">
          <h1 className="font-sarabun font-bold text-4xl md:text-6xl mb-5">
            About Me
          </h1>
          <p className="font-nunito text-lg md:text-xl">
            Hey there! 👋 I'm Awin, a seasoned{" "}
            <span className="bg-red-600 rounded-lg px-1 py-1">
              web developer
            </span>{" "}
            with a flair for{" "}
            <span className="bg-blue-600 rounded-lg px-1 py-1">
              frontend wizardry
            </span>
            . Over the past three years, I've been passionately crafting
            visually stunning and intuitively{" "}
            <span className="bg-pink-600 rounded-lg px-1 py-1">
              functional websites
            </span>
            . For me, coding is more than just a profession – it's a playground
            where I can unleash my creativity and explore the latest in web
            technologies. From experimenting with cutting-edge frameworks to
            optimizing performance for seamless{" "}
            <span className="bg-red-600 rounded-lg px-1 py-1">
              user experiences
            </span>
            , I thrive on the thrill of pushing the boundaries of what's
            possible on the web. Let's collaborate and turn your{" "}
            <span className="bg-yellow-400 rounded-lg px-1 py-1">
              digital dreams into reality!
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="flex flex-col sm:flex-row sm:space-x-5 sm:space-y-[-4] space-y-4">
            <StatItem value="4+" label="Coding experience" />
            <StatItem value="3+" label="Developing Websites" />
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-5 sm:space-y-[-4] space-y-4">

          <StatItem value="15+" label="Projects" />
          <StatItem value="345+" label="Coding Hours" />
          </div>
        </div>
      </div>
    </div>
  );
}

const StatItem = ({ value, label }) => {
  return (
    <div className="">
      <h3 className="text-8xl font-bold font-sarabun text-green-400 text-center">
        {value}
        <br />
        <span className="text-white text-xl ">{label}</span>
      </h3>
    </div>
  );
};



function Stats() {

  useEffect(() => {
    $.fn.jQuerySimpleCounter = function (options) {
      var settings = $.extend(
        {
          start: 0,
          end: 100,
          easing: "swing",
          complete: "",
        },
        options
      );

      var thisElement = $(this);

      $({ count: settings.start }).animate(
        { count: settings.end },
        {
          duration: settings.duration,
          easing: settings.easing,
          step: function () {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
          },
          complete: settings.complete,
        }
      );
    };

    $("#number1").jQuerySimpleCounter({ end: 345, duration: 3000 });
    $("#number2").jQuerySimpleCounter({ end: 946, duration: 3700 });
    $("#number3").jQuerySimpleCounter({ end: 81, duration: 3100 });
    $("#number4").jQuerySimpleCounter({ end: 16, duration: 3450 });
    $("#number5").jQuerySimpleCounter({ end: 472, duration: 3300 });
    $("#number6").jQuerySimpleCounter({ end: 224, duration: 2175 });
  }, []);

  return (
    <div className="container text-white sm:flex-row text-[1.4rem] items-center justify-center">
      <div className="counter flex flex-col sm:flex-row justify-around items-center">
        <div className="item">
          <i className="fas fa-laptop"></i>
          <p id="number1" className="number">0</p>
          <p className="label">Hours coding</p>
        </div>
        <div className="item">
          <i className="fas fa-camera"></i>
          <p id="number2" className="number">0</p>
          <p className="label">Photos taken</p>
        </div>
        <div className="item">
          <i className="fas fa-car"></i>
          <p id="number3" className="number">0</p>
          <p className="label">Hours commuting</p>
        </div>
        <div className="item">
          <i className="fas fa-briefcase"></i>
          <p id="number4" className="number">0</p>
          <p className="label">Projects done</p>
        </div>
        <div className="item">
          <i className="fab fa-twitter"></i>
          <p id="number5" className="number">0</p>
          <p className="label">Tweets sent</p>
        </div>
        <div className="item">
          <i className="fas fa-coffee"></i>
          <p id="number6" className="number">0</p>
          <p className="label">Cups of coffee</p>
        </div>
      </div>
    </div>
  );
}



