history.scrollRestoration = "manual";

const percentage = document.querySelector(".percentage");
const progress = document.querySelector(".progress");
const loader = document.querySelector(".loader");
const website = document.querySelector(".website");
const video = document.querySelector("#introVideo");
const videos = ["video/benedata.mp4", "video/kadita.mp4", "video/1.kagura.mp4"];
const randomIndex = Math.floor(Math.random() * videos.length);
/* mathiko Generate a random index to select a video from the array */
/* mathiko Math.floor() rounds down the random number to the nearest whole number, ensuring it is a valid index for the videos array. */
/* mathiko Math.random() generates a random number between 0 and 1. Multiplying it by videos.length gives a random index within the range of the array. */

const secondPart = document.querySelector(".second-part");
const secondstripimage = document.querySelector(".second-strip-image");
const track = document.querySelector(".track");
const second2stripimage = document.querySelector(".second-2ndstrip-image");
const track2 = document.querySelector(".track2");

//thirdpart
const thirdpart = document.querySelector(".third-part");
const thirdcontent = document.querySelector(".third-content");

/*document.addEventListener("mousemove", (event) => {
  cursor.style.left =
    event.clientX + "px"; /*update the cursor with clientX and client Y
  cursor.style.top = event.clientY + "px";
});*/
/*console.log(
  "Scroll position:",
  window.scrollY,
); /*tells us the document is scrolled approximately 2685 pixel down from the its starting position*/
/* 1,2 are used to debug the scroll restoration */
/* 2...console.log(
  "Second section position:",
  secondPart.getBoundingClientRect().top,
);secondPart.getBoundingClientRect().top = -300 means the top edge of the second section is 300px above the viewport.*/

const secondPartContent = document.querySelector(".second-part-content");

const observer = new IntersectionObserver(
  /* calculate scrollY of the document */ (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        secondPartContent.classList.add("show");

        secondPart.classList.add("reveal-content");

        track.innerHTML += track.innerHTML;

        const strip = track.querySelectorAll("span");
        strip.forEach((span, index) => {
          /* forEach is a javascript array method that allows to perform an operation on evet item in a collection*/
          span.style.transitionDelay = (index % 16) * 0.2 + "s";
        }); /*Using % 16 makes the delay pattern repeat for the second set.*/

        observer.unobserve(secondPart);
      }
    }); /*The only code that knows about your 0.4 threshold is the observer.*/
  },
  {
    threshold: 0.2 /* the observer triggers when appoximately 10% of the section section is visible*/,
  },
  /*.second-part tells JavaScript when the user reaches the second section.*/
  /*.second-part-content is the element we actually want to animate.*/
);
observer.observe(
  secondPart,
); /*when 40% of .second-part is visible, the browser calls the observer’s function, which adds show to the panel. */

const stripObserver = new IntersectionObserver(
  /*IntersectionObserver is a built-in JavaScript API. Important: IntersectionObserver does not calculate window.scrollY for you. It observes visibility, not the number of pixels scrolled.*/ (
    entries,
  ) => {
    /*array containing IntersectionObserverEntry objects.*/
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        /*checks whether the observed element currently intersects the viewport.*/
        secondstripimage.classList.add("shows");

        setTimeout(() => {
          second2stripimage.classList.add("shows");
        }, 3000);

        track2.innerHTML += track2.innerHTML;

        const strip2 = track2.querySelectorAll("span");
        strip2.forEach((span, index) => {
          /* forEach is a javascript array method that allows to perform an operation on evet item in a collection*/
          span.style.transitionDelay =
            (index % 16) * 0.2 + "s"; /* each image with this transitionDelay*/
        });

        stripObserver.unobserve(
          secondPart,
        ); /*Without unobserve(), the observer continues watching the element and can trigger again when its intersection crosses the threshold*/
      }
    });
  },
  { threshold: 0.5 },
);

stripObserver.observe(secondPart);

secondstripimage.classList.add("hidden");

second2stripimage.classList.add("hidden");

secondstripimage.classList.add("strip-animation");

second2stripimage.classList.add("strip-animation2");

let i = 0;

let loading = setInterval(() => {
  i++;

  percentage.textContent = i + "%"; /* Update the percentage text */
  progress.style.width = i + "%"; /* Update the width of the progress bar */

  if (i >= 100) {
    clearInterval(loading); /* Stop the loading when it reaches 100% */
    /* mathiko (loading) identifies the timer we want to stop, and clearInterval stops it*/
    loader.classList.add("hide"); /* Hide the loader */

    website.classList.add("show"); /* Show the website content */

    document.body.classList.remove(
      "loading",
    ); /* Remove the loading class from the body to allow scrolling */

    video.src = videos[randomIndex];
    /*mathiko Set the video source to a random video from the array */
    video.load(); /* Load the new video source */

    setTimeout(() => {
      video.currentTime = 0; /* Reset the video to the beginning */
      video.play(); /* Play the video */

      website.classList.add("reveal-title");
    }, 1000); /* tells when to play the animation when the loader is disappear (after 1millisecond)*/
  }
}, 20); /* Set the interval to 50 milliseconds for a smooth loading effect */

//third part

thirdcontent.innerHTML =
  thirdcontent.innerHTML + thirdcontent.innerHTML + thirdcontent.innerHTML;
/*
const laneScroller = document.querySelector(".fourth-content");
const laneBackground = document.querySelector(".data-parallax");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

laneScroller.addEventListener("scroll", () => {
  const distance = laneScroller.scrollLeft;

  const backgroundX = reduceMotion.matches ? 0 : -distance * 0.15;

  laneBackground.style.transform = `translateX(${backgroundX}px)`;
});*/ // for the parallax effect

const fourthContent = document.querySelector(".fourth-content");

fourthContent.addEventListener("scroll", () => {
  console.log(fourthContent.scrollLeft);
});
