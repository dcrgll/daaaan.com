const container = document.getElementById("rsf-container");
const frame = document.createElement("iframe");

const modalOpenStyle = [
  "z-index: 2147483000 !important",
  "background-color: transparent !important",
  "position: fixed !important",
  "bottom: 20px !important",
  "right: 20px !important",
  "height: 60px !important",
  "min-width: 60px !important",
  "border: none !important",
  "opacity: 1 !important",
  "transform-origin: right bottom !important",
  "transition: width 200ms ease 0s, height 200ms ease 0s, max-height 200ms ease 0s, transform 300ms cubic-bezier(0, 1.2, 1, 1) 0s, opacity 83ms ease-out 0s !important",
  "pointer-events: all !important",
  "overflow: hidden !important",
].join(";");

frame.setAttribute("src", "https://reallysimplefeedback.com/test-boolean");
frame.setAttribute("id", "rsf-frame");
frame.setAttribute("style", modalOpenStyle);
frame.setAttribute("scrolling", "no");

container.appendChild(frame);
