"use client";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    const BUTTON = document.querySelector("button")! as HTMLButtonElement;
    const SYNC = document.querySelector("#sync")! as HTMLInputElement;

    const TOGGLE = () => {
      const IS_PRESSED = BUTTON.matches("[aria-pressed=true]");
      if (SYNC.checked)
        document.body.setAttribute(
          "data-dark-mode",
          IS_PRESSED ? "false" : "true"
        );
      BUTTON.setAttribute("aria-pressed", IS_PRESSED ? "false" : "true");
    };
    BUTTON.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    BUTTON.addEventListener("click", TOGGLE);

    return () => {
      BUTTON.removeEventListener("click", TOGGLE);
    };
  }, [theme]);

  return (
    <div className="h-[10vh] py-0" aria-label="button to toggle themes">
      <div className="controls hidden">
        {/* <label htmlFor="sync"></label> */}
        <input id="sync" type="checkbox" className="hidden" />
      </div>
      <button
        className="toggle link"
        aria-pressed="false"
        title="Toggle Dark Mode"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <span className="toggle__content">
          <svg
            aria-hidden="true"
            className="toggle__backdrop"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 290 228"
          >
            <g className="clouds">
              <path
                fill="#D9D9D9"
                d="M335 147.5c0 27.89-22.61 50.5-50.5 50.5a50.78 50.78 0 0 1-9.29-.853c-2.478 12.606-10.595 23.188-21.615 29.011C245.699 243.749 228.03 256 207.5 256a50.433 50.433 0 0 1-16.034-2.599A41.811 41.811 0 0 1 166 262a41.798 41.798 0 0 1-22.893-6.782A42.21 42.21 0 0 1 135 256a41.82 41.82 0 0 1-19.115-4.592A41.84 41.84 0 0 1 88 262c-1.827 0-3.626-.117-5.391-.343C74.911 270.448 63.604 276 51 276c-23.196 0-42-18.804-42-42s18.804-42 42-42c1.827 0 3.626.117 5.391.343C64.089 183.552 75.396 178 88 178a41.819 41.819 0 0 1 19.115 4.592C114.532 176.002 124.298 172 135 172a41.798 41.798 0 0 1 22.893 6.782 42.066 42.066 0 0 1 7.239-.773C174.137 164.159 189.749 155 207.5 155c.601 0 1.199.01 1.794.031A41.813 41.813 0 0 1 234 147h.002c.269-27.66 22.774-50 50.498-50 27.89 0 50.5 22.61 50.5 50.5Z"
              />
            </g>
          </svg>
          <span aria-hidden="true" className="pilot__container">
            <span className="pilot-bear">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="none"
                viewBox="0 0 1448 938"
              >
                <mask id="a" fill="#fff">
                  <path
                    fillRule="evenodd"
                    d="M869.02 210.61c16.067-3.967 27.98-18.476 27.98-35.768C897 154.495 880.505 138 860.158 138c-14.337 0-26.761 8.19-32.85 20.146C815.313 151.674 801.586 148 787 148h-20c-14.52 0-28.19 3.641-40.146 10.059C720.749 146.15 708.351 138 694.048 138c-20.347 0-36.842 16.495-36.842 36.842 0 17.222 11.818 31.685 27.787 35.72A85.104 85.104 0 0 0 682 233v225c0 12.15 9.85 22 22 22h44c12.15 0 22-9.85 22-22v-28.69a41.072 41.072 0 0 0 14 .174V458c0 12.15 9.85 22 22 22h44c12.15 0 22-9.85 22-22v-74.797a28.992 28.992 0 0 0 6.946-5.137l44.548-44.548c11.325-11.325 11.325-29.687 0-41.012s-29.687-11.325-41.012 0L872 302.988V233a85.094 85.094 0 0 0-2.98-22.39Z"
                    clipRule="evenodd"
                  />
                </mask>
                <path
                  fill="#AF7128"
                  fillRule="evenodd"
                  d="M869.02 210.61c16.067-3.967 27.98-18.476 27.98-35.768C897 154.495 880.505 138 860.158 138c-14.337 0-26.761 8.19-32.85 20.146C815.313 151.674 801.586 148 787 148h-20c-14.52 0-28.19 3.641-40.146 10.059C720.749 146.15 708.351 138 694.048 138c-20.347 0-36.842 16.495-36.842 36.842 0 17.222 11.818 31.685 27.787 35.72A85.104 85.104 0 0 0 682 233v225c0 12.15 9.85 22 22 22h44c12.15 0 22-9.85 22-22v-28.69a41.072 41.072 0 0 0 14 .174V458c0 12.15 9.85 22 22 22h44c12.15 0 22-9.85 22-22v-74.797a28.992 28.992 0 0 0 6.946-5.137l44.548-44.548c11.325-11.325 11.325-29.687 0-41.012s-29.687-11.325-41.012 0L872 302.988V233a85.094 85.094 0 0 0-2.98-22.39Z"
                  clipRule="evenodd"
                />
                <path
                  fill="#000"
                  d="m869.02 210.61-5.789 1.577-1.614-5.929 5.965-1.473 1.438 5.825Zm-41.712-52.464 5.347 2.723-2.789 5.476-5.407-2.918 2.849-5.281Zm-100.454-.087 2.838 5.287-5.388 2.892-2.789-5.442 5.339-2.737Zm-41.861 52.503 1.47-5.817 5.928 1.498-1.61 5.899-5.788-1.58ZM770 429.31h-6v-7.218l7.097 1.319L770 429.31Zm14 .174-.95-5.925 6.95-1.114v7.039h-6Zm88-46.281h-6v-3.613l3.194-1.69 2.806 5.303Zm6.946-5.137 4.243 4.243-4.243-4.243Zm44.548-44.548-4.243-4.242 4.243 4.242Zm0-41.012 4.243-4.242-4.243 4.242Zm-41.012 0 4.242 4.243-4.242-4.243ZM872 302.988l4.243 4.243L866 317.473v-14.485h6Zm31-128.146c0 20.116-13.859 36.98-32.541 41.593l-2.877-11.65c13.45-3.321 23.418-15.476 23.418-29.943h12ZM860.158 132C883.819 132 903 151.181 903 174.842h-12C891 157.808 877.192 144 860.158 144v-12Zm-38.197 23.424C829.034 141.535 843.478 132 860.158 132v12c-11.993 0-22.399 6.845-27.503 16.869l-10.694-5.445ZM787 142c15.605 0 30.309 3.933 43.157 10.866l-5.698 10.561C813.318 157.415 800.567 154 787 154v-12Zm-20 0h20v12h-20v-12Zm-42.984 10.773C736.823 145.897 751.465 142 767 142v12c-13.506 0-26.203 3.384-37.308 9.346l-5.676-10.573ZM694.048 132c16.64 0 31.054 9.488 38.145 23.322l-10.678 5.474C716.397 150.812 706.013 144 694.048 144v-12Zm-42.842 42.842c0-23.661 19.181-42.842 42.842-42.842v12c-17.033 0-30.842 13.808-30.842 30.842h-12Zm32.317 41.537c-18.569-4.692-32.317-21.502-32.317-41.537h12c0 14.409 9.888 26.524 23.257 29.903l-2.94 11.634ZM676 233c0-8.305 1.114-16.36 3.205-24.018l11.576 3.16A79.096 79.096 0 0 0 688 233h-12Zm0 133V233h12v133h-12Zm0 45v-45h12v45h-12Zm0 47v-47h12v47h-12Zm28 28c-15.464 0-28-12.536-28-28h12c0 8.837 7.163 16 16 16v12Zm44 0h-44v-12h44v12Zm28-28c0 15.464-12.536 28-28 28v-12c8.837 0 16-7.163 16-16h12Zm0-28.69V458h-12v-28.69h12Zm1.5 6.69c-2.925 0-5.798-.27-8.597-.791l2.194-11.798a34.98 34.98 0 0 0 6.403.589v12Zm7.45-.592a47.08 47.08 0 0 1-7.45.592v-12c1.887 0 3.74-.151 5.55-.441l1.9 11.849ZM778 458v-28.516h12V458h-12Zm28 28c-15.464 0-28-12.536-28-28h12c0 8.837 7.163 16 16 16v12Zm44 0h-44v-12h44v12Zm28-28c0 15.464-12.536 28-28 28v-12c8.837 0 16-7.163 16-16h12Zm0-47v47h-12v-47h12Zm0-27.797V411h-12v-27.797h12Zm-8.806-5.303a23.032 23.032 0 0 0 5.51-4.076l8.485 8.485a35.013 35.013 0 0 1-8.382 6.197l-5.613-10.606Zm5.51-4.076 44.547-44.548 8.486 8.485-44.548 44.548-8.485-8.485Zm44.547-44.548c8.982-8.982 8.982-23.545 0-32.527l8.486-8.485c13.668 13.668 13.668 35.829 0 49.497l-8.486-8.485Zm0-32.527c-8.982-8.982-23.545-8.982-32.527 0l-8.485-8.485c13.668-13.669 35.829-13.669 49.498 0l-8.486 8.485Zm-32.527 0-10.481 10.482-8.486-8.486 10.482-10.481 8.485 8.485ZM878 233v69.988h-12V233h12Zm-3.191-23.966A91.065 91.065 0 0 1 878 233h-12c0-7.212-.965-14.189-2.769-20.813l11.578-3.153Z"
                  mask="url(#a)"
                />
                <path
                  fill="#FF1E1E"
                  d="M821.678 205.665h-88.371v13.25h88.371z"
                />
                <path
                  fill="#000"
                  fillRule="evenodd"
                  d="M709.7 164.481c-17.939 14.394-28.018 37.148-28.018 57.504h61.648c.087-13.669 11.194-24.723 24.883-24.723h18.56c13.689 0 24.796 11.054 24.883 24.723H873c0-20.356-10.078-43.11-28.018-57.504C827.043 150.086 802.711 142 777.341 142c-25.37 0-49.701 8.086-67.641 22.481Z"
                  clipRule="evenodd"
                />
                <path
                  fill="url(#b)"
                  fillOpacity=".4"
                  fillRule="evenodd"
                  d="M709.7 164.481c-17.939 14.394-28.018 37.148-28.018 57.504h61.648c.087-13.669 11.194-24.723 24.883-24.723h18.56c13.689 0 24.796 11.054 24.883 24.723H873c0-20.356-10.078-43.11-28.018-57.504C827.043 150.086 802.711 142 777.341 142c-25.37 0-49.701 8.086-67.641 22.481Z"
                  clipRule="evenodd"
                />
                <circle
                  cx="8.079"
                  cy="8.079"
                  r="8.079"
                  fill="#000"
                  transform="matrix(-1 0 0 1 730.414 240)"
                />
                <circle
                  cx="8.079"
                  cy="8.079"
                  r="8.079"
                  fill="#000"
                  transform="matrix(-1 0 0 1 839 240)"
                />
                <path
                  fill="#000"
                  d="M755.835 262.683c0 8.21 9.868 17.451 20.845 17.451 10.977 0 20.845-9.241 20.845-17.451s-9.868-12.281-20.845-12.281c-10.977 0-20.845 4.071-20.845 12.281Z"
                />
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeWidth="6"
                  d="M738 464v12m-24-12v12m127-12v12m-24-12v12"
                />
                <path
                  fill="#707070"
                  stroke="#000"
                  strokeWidth="6"
                  d="M687 370v16h183v-16zm0-54v16h183v-16z"
                />
                <path
                  fill="#D9D9D9"
                  stroke="#000"
                  strokeWidth="6"
                  d="M795 370h-28v16h28zm76-69h-16v95h16zm-172 0h-16v95h16z"
                />
                <rect
                  width="74.266"
                  height="52"
                  x="-3"
                  y="3"
                  fill="#AF7128"
                  stroke="#000"
                  strokeWidth="6"
                  rx="26"
                  transform="matrix(-1 0 0 1 732 316)"
                />
                <path
                  fill="#000"
                  d="M722 354a3 3 0 1 1 0-6v6Zm12 0h-12v-6h12v6Zm-12-12a3 3 0 1 1 0-6v6Zm12 0h-12v-6h12v6Z"
                />
                <path
                  fill="#494949"
                  d="m323.749 728.949 12.392-12.694 157.087 153.35-12.392 12.694z"
                />
                <path
                  fill="#494949"
                  d="m468.695 876.651-11.898-13.158 162.83-147.237 11.899 13.158z"
                />
                <path
                  fill="#6FB7D6"
                  fillOpacity=".53"
                  d="M415 372.657 643.398 213v159.657H415Z"
                />
                <path
                  fill="url(#c)"
                  fillOpacity=".4"
                  d="M415 372.657 643.398 213v159.657H415Z"
                />
                <path fill="#000" d="M59.871 212.892H95.35v656.367H59.871z" />
                <path fill="#000" d="M106.438 523.336v35.479H59.871v-35.479z" />
                <path
                  fill="#FE1616"
                  d="M59.871 212.892H95.35v35.479H59.871zm0 620.888H95.35v35.479H59.871z"
                />
                <ellipse
                  cx="59.871"
                  cy="539.966"
                  fill="url(#d)"
                  rx="59.871"
                  ry="38.806"
                />
                <path
                  fill="#5B5B5B"
                  d="M106.438 441.29h53.219v199.571h-53.219z"
                />
                <path
                  fill="#D9D9D9"
                  fillRule="evenodd"
                  d="M1359.3 372.549H159.657v337.053H949.06l410.24-236.853v-100.2Z"
                  clipRule="evenodd"
                />
                <path
                  fill="url(#e)"
                  fillOpacity=".4"
                  fillRule="evenodd"
                  d="M1359.3 372.549H159.657v337.053H949.06l410.24-236.853v-100.2Z"
                  clipRule="evenodd"
                />
                <path
                  fill="url(#f)"
                  d="M281.617 408.028h263.877v263.877H281.617z"
                />
                <path
                  fill="#FF0B0B"
                  d="M192.919 709.602h443.492V798.3H192.919z"
                />
                <path
                  fill="url(#g)"
                  fillOpacity=".3"
                  d="M192.919 709.602h443.492V798.3H192.919z"
                />
                <path fill="#FF0B0B" d="M192.919.016h443.492v88.698H192.919z" />
                <path
                  fill="url(#h)"
                  fillOpacity=".28"
                  d="M192.919.016h443.492v88.698H192.919z"
                />
                <path
                  fill="#FF0B0B"
                  d="M1175.25 396.941h221.746v44.349H1175.25z"
                />
                <path
                  fill="url(#i)"
                  fillOpacity=".2"
                  d="M1175.25 396.941h221.746v44.349H1175.25z"
                />
                <path
                  fill="#F20000"
                  d="M1301.65 212.892H1448l-90.92 159.657h-148.57l93.14-159.657Z"
                />
                <path
                  fill="url(#j)"
                  fillOpacity=".2"
                  d="M1301.65 212.892H1448l-90.92 159.657h-148.57l93.14-159.657Z"
                />
                <circle cx="476.754" cy="869.259" r="68.741" fill="url(#k)" />
                <path
                  fill="#494949"
                  d="M223.963 88.714h33.262v620.888h-33.262zm345.923 0h33.262v620.888h-33.262z"
                />
                <defs>
                  <linearGradient
                    id="b"
                    x1="682"
                    x2="860"
                    y1="205"
                    y2="182"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" />
                    <stop offset=".375" stopColor="#fff" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="c"
                    x1="444"
                    x2="643"
                    y1="325"
                    y2="321"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" />
                    <stop offset=".443" stopColor="#fff" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="d"
                    x1="0"
                    x2="119.743"
                    y1="541.075"
                    y2="541.075"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".25" stopColor="#FF2626" />
                    <stop offset=".25" />
                  </linearGradient>
                  <linearGradient
                    id="e"
                    x1="1232"
                    x2="160"
                    y1="521"
                    y2="521"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop />
                    <stop offset="1" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="g"
                    x1="626"
                    x2="208"
                    y1="754"
                    y2="754"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop />
                    <stop offset="1" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="h"
                    x1="636"
                    x2="193"
                    y1="44"
                    y2="44"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop />
                    <stop offset="1" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="i"
                    x1="1380"
                    x2="1028"
                    y1="419"
                    y2="419"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop />
                    <stop offset="1" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="j"
                    x1="1362"
                    x2="1156"
                    y1="273"
                    y2="279"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop />
                    <stop offset="1" stopOpacity="0" />
                  </linearGradient>
                  <radialGradient
                    id="k"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(90 -196.253 673.007) scale(68.7412)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".51" stopColor="#fff" />
                    <stop offset=".51" />
                  </radialGradient>
                  <pattern
                    id="f"
                    width="1"
                    height="1"
                    patternContentUnits="objectBoundingBox"
                  >
                    <use xlinkHref="#l" transform="scale(.0033)" />
                  </pattern>
                  <image
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7J13fBxXub+fme2r3psl23J33HtJHKcnpAdISIXL5ccldC4XuIGQKNwAAS5wSbiU0ELJJSRASEglzcR2irsd23G3bKtL1kqr1fad+f0xkuOyZXZ3Zos8z+ezWXl35pwTaeY773nPe94XDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDNJByPYADHKPyZMn2wYHB8tMJlO5KIrlgF0QhFJAkCTJBjgBBEEoAURBEKyyLBfEaM4LBARBCEmS5BEEwSPLckAQhEFRFIeAflmW+9vb2/sBORP/fwb5iyFYZxmNjY31kUhkoizLzcA4QRBqBUFokGW5DmgAKoFY4qM3LqAH6AaOybLcLYpimyzLHaIoHg6Hw4e7urp6szQ2gxzAEKwxSH19vVOW5RnATEEQzgFmApOAZsCe1cGlzxBwCDgkCMIeSZJ2CYKw22q1vtva2urP9uAM9MUQrDynvLy82Ol0LpBleaEsy4uAhSjiJGZ5aJkmgiJkW4HNgiBsslgsW1pbWweyPC4DDTEEK88YN25cgyRJq4DzgFXADM4+cVKLDBwA3gDWCoKwtr29fV+Wx2SQBoZg5Tjl5eXFNpvtIuAyQRAuRrGeDFKnC1gry/JLgiC82NHRcTTbAzJQjyFYOUhDQ8NUWZZvAK4AVgDmLA9pLPOuIAgvSpL0Qnl5+Wu7du0KZntABrExBCtHqKmpmWUymd4PvB+Yne3xnKUMCILwjCRJTwqC8EJHR4c32wMyOBVDsLJIVVVVrdVqvUWW5Y9giFSu4QWeEQTh9+3t7S8A4WwPyMAQrGxgrquru0YQhI8Cl2FM9/KBHkEQ/ijL8u86Ojq2ZHswZzOGYGWImpqaapPJ9C/AncD4bI/HIGU2y7L8sCRJj3Z3dw9nezBnG4Zg6UxNTc0ss9n8ZVmWbwRs2R6PgWb0y7L8iCRJ/9vd3X0o24M5WzAESyfq6+vnC4LwBVmWb8WIkxrLSMBzoij+V1tb24ZsD2asYwiWxjQ0NCyTZfmbwIXZHotBxnlRkqRvd3V1/TPbAxmrGIKlEfX19dOBbwAfwPi9nu2sl2X5rs7OzrXZHshYw7ix0qS6urrGbDZ/E/gIYMrycAxyBxl4KhKJfL27u3tntgczVjAEK3XMdXV1HxUE4VtARbYHY5CzSIIgPBoOh/+ju7u7J9uDyXcMwUqB+vr6c4H/BeZkeywGeUM/cG9HR8fPMIJQU8YQrCSor693At8GPo2x8meQGjtEUfx4W1vb29keSD5iCJZK6uvrVwC/AaZmeywGeY8kCMIvg8HgF3t7ez3ZHkw+YTiJE7Bw4UKLIAjfBn6Jkj7YwCBdBGChyWS6qbi4+J2hoaHWbA8oX8gJC6tlNWZxiBmSzBQEpgJNyBSiFDsoQcAFeBHwCDKHkdkniuyLbGJ/ixK4pwv19fVNwP8BK/Xqw+CsRwYeKisr+1ImUtu0zKFatDFDjjBVFpkClCBThnKvyQgMA4PIHBdk9ssm9tr8vHvXO7j0HpsasiZYLYuYJchcLcP5KIJQmEIzLmTWAq9h4umWjWi2RaKuru4GQRB+BZRq1aaBQRw2iaJ4S1tb234tG21ZiBOZq4ALETgfmJ5CMxKwE1gjyLwsB3ixZRdZyRuWUcH61nyqQgIfkQVuQ/sVNhmZNxF41GHn919Zz1CK7Yh1dXXfEAThq+SIBWpw1uCRZfmTnZ2dv0+3ofvmc5Es8GEEric1YyAe/cg8IQr85p7NZHTxICM3ZMs8JmDiC8DHGKlppzNu4BEkvtOylQ61J1VVVRVaLJbfAdfrNzQDg/gIgvBwbW3tpzdv3hxK5rwWEIUFXCkL3A0s0Wd0Z7BekPnOvVt4hgzUldRVsL43h4JhK19C5i7AqmdfMfAi8D0KeaBlDXFLQNXV1Y0XBOHvGIn0DHKD14AbOzo6+tQc/I3FnC9JPES2rl+BTUh8pmULb+nbjU60LOJDyPwQqNWrjyQ4gMidLRt5OdqXtbW154ii+CJKIVEDg1zhiCiKV7e1tb0T64BvzacqaOIhZG7K5MBiIAEP4+dLLbvQJVxDc8H6wXIc7iAPAJ/Vuu00kYGHRn6ZJxyG48aNWyJJ0rMYIQsGuckQ8IGOjo5/nP7FfQu5QIY/APWZH1ZcWpG5WQ9rS1PB+q95TImYeIZcDq4UeJMg17XsoKe2tvYKURT/TGb8amMCkyBjHnFVmAUZU5x4/7AEEfnUSyyMcMZnBgkJCIJwR3t7++OjH9y3kK/L0ELu7rgIIvOZli08rGWjml05LYtYgszfgWqt2tSRw8/1l3+zLWD/Mflful0TRGRKzWFKzBEKTREKTWEKTRGcJgmrIGETJGyijEnQzq8qyRCURYKSoLzLIr6IyLBkYjhiwhMx4Q6bGAibiRgLthLw+f9Z2fGT3Qf5XwT+LdsDUsmDLZv5PBo55DW5Cu6bz0WyyNNoYakIAoWllRSWVmC22rDanQT9XsLBAO7jXXjd6Vcebw/aeKG/XI7Iwll5F4gClJtD1FiDVJmDVFjDlJnDiPov8qSEJMNQxEx/2MzxkIXekJWeoIWAnKvGhX7MLfDsWlrsPkeLtsw2O8UVNTiLSjFZrSBJhIJBfEODDPZ1IoWTWqSMxy9bNvNxNBCttG/YEcvqZaAotREI1DVPp2nGAuqnzKKqsRmTJfaCYijgo6d1Px0Hd3F4xwaOt7cm1V1n0Mrz/RWEz6JpiUOUqLYEqbYGqbEEqbKGsGhoKWUDGXCHzXQHLXSFbHQGrQyGz44CRMuK3cwpSN6nbXMWMnHuMsZNmU3dpBkUllfFPFaWZNzHu+g4uJv2vTtofWcjoYAv9UHL/LhlC59JvQGFtO7aloVMB9YD5cmea3MWMuu8K5ix/GKKKlKfRQ50tfHO68+xZ8NrhANxIxfoD1t4uq+C4Bh+MpuQqbCEqLaGqLIEqbaGKDGdHdlMvJKJzoCVzqCVzqAN1xgWsKVFbuYWqhOt+imzmHP+lYyftRjRlNr24UgoyOEdb7Pt1afoPXowpTaAu1o280CqJ0MagvW9ORQMW9gAzEzmPLPVxoJLbmDOBddgsWnnPvJ73Gx8/jF2r/8HUiRyxveeiImnjlcyHBk7+72toky5OUSFJUTF6Lsld6d2mcYniXQGrIoFFrDSH7aMqd/MeSWDzHDGrjRWPWEqK677CHWTZmja79HdW3njb7/B1Xks2VMlZK5s2cILqfadsmC1LOT/gJuTOadh2hwuvOXTcU3RdDne3sorv//RKVPFoCzy9PFK+kP5/cQtMYWpswWpsyrTu2JT2HBFJ0FAFmkP2Gj12znqt+W9pS0KcFFpPxPtp84szDY7y6+5g3POuxxBJzetFImw7ZW/sfG5P0Y1EOLQZxZZcPdGklY7SFGw7lvATbLAY6o7EQWWvO8W5l/yfgRR/1tMCodZ++dfKNaWDC+4KmgL5GdJQLMgM8nhY6ZzmCqLZk5QVYgyWE/KheE4aWZplZTvAcwSWE46LixC6DQtkIGACSRBeY8IZx6TSSQE2gI2dngK6Ajm57UBSpjJFWXHqbcpoYWl1fVc/vGvUlaTmRjoniP7eeFX32XYpSogf5QXWzZzeSr9Ja0eDyykxA+7URmsJpotXHT755i8IPMZWna89nd++Ns/s82j9d7PzDDJ4WN5sRunmNQT7ARmCYpCitDYI+CIKO/2k/898vPoa/RYMUNzp7AI4RERG335T3v3miEkgCkCAzZw2aHfBiGNZvc9QQubPcUcy9OHmlWQuLayj5nTpnLFv30Vm6Mgo/0PDxzn2Z/dn9wCmMDNLZvUGz3vnZYkLQt4CIFPqzlWNJm4/GP/yfhZi5LtRhNefmsrX/7+L5HzzHFhFWUuLHXRZIu9iGCWoDQIpYGR96AiTkVBKAwpP9tT07mcxQ8MAqP/W8LIfyRxROAsMGSDATsct0NXAQwlsYP1gM/Bm+4SfFL+TRXLHSb+/KP7KCsvy0r/Aa+Hv/3obvo7jqg9pQs/U5LdwpOUYLUsZRxhDqCy5PpFd3yeqYvPT6YLzTjc1sXtd32PYV/8lcNco0CMcEVFP+XmEGYJKgJQ4VdelSM/lwahILOzw5xBBlwQfyf7SQgAIgTM4LWAywHdBdBWqFhqp+ONiPzDVU5PKBt79dNjxbyZPPjVOzGJ2RFcr3uAv3z/y3j6e9WdIPCVlk18N5k+khOsJKyrOedfycoPfCyZ5jUjFA5z+39+j72tbVnpP1Xsgsz9Uh8LvSGqfVASNBJyxcIFpBEVBCh7WiIm8FpHhMwJh0qgzybw2kAph/0ODUaaWe645mK+cEf2siP1Hj3AX3/4VbVBp334mZiMlaXaC/Dt2ZRFzDwKJFxqK69r4rJ//QpClpT+wT88xatvb8tK3+nws34X1w8EqQgo0zlDrGJjBwKklx9bBgQZrGEo9kG9G87phaVdcJXHz067lQ4xv1aWt+89xNTxDUwcl50kKQUl5ZjMZtr2bldzuFMw0bGmk41q21etKAErN6Ni350gCpz/oTsRzdn5Q294Zy9/eOaVrPSdDu/z+7nCn1/T12wiAMU6tS3JYA/Bf/f0MyWUf3Pv+376KF192UvBPvfCa6gc16zqWBk+nEzb6k0gmY+oOWzSvBXUNqeSNjp9PF4/9/z4d0hSfnnZzcA9g4PZHkbeYUPfsk9OWeYbLheWPFu1cXu83P3gb4lIutVniYsomlh27e3qDhZY/I2F6pMOqhKsloU0IbA4cecCCy/7oNq+NefBR/9G9/H0N0dnmvf5fDQmF3xnMILedvzkcJiPevKvdODm3fv51V9ezFr/jdPnUTNBXZYpWeYGte2qEixB5iI1x9VPPofy+vFq+9aU7XsP8ZeX1mWl73S51evN9hDylkzYPrd6PJRnyVpJh1/8+fmsLjzNWvU+VcfJgjp9AZWCpbbB6UsvVNuvpoTDEe7/+R/zbioI4JQllgWzUjEp75GBTHiYHLLMzXloZYUjEe77yR8IZ8l6b567DItN1Urrsu+sVJftRa0PK2EFDkEUmJClANHfP/MKB46qLo6TU8wiiDnPfCS5gpfMWFgAV3u9uk8/9eDdQ8f4/d+zswhlttoYN32umkMtAR/z1ByYULBazsEKTEx0XGXDRGwFqaXESof+wSF+/dcz0l3nDZPl/FuFygUikHLhyVSokCSWBgIZ7FE7fv74cxzp6MlK3+Omqis/Kqss8JpQsEQnU1Dh26xsnKSmP835yWPP4PGmG0KYPeoNwUqaCHCc9GKwUmFJnoadBIIhvvWLpLftaUJ1kzpdkAWNBEuK0KimobKacWoO05QDRzv42ytvZLxfLanM+G2X34SAPiAbKQkX5bGvccM7e1m7ZVfG+y1RnzWiSc1BCQVLENQ5wwpKK9Qcpik/+v3fshZrohW2MZJSTkZff5KMUs67j/c2P2ea5nB+J0f8wSN/IRzJ7P1icxSodbyr0pmEUz1ZoEjN38hqz+y+q537W1m3NfNPDK0xZegGCIrgNyspW0ZfvpP/PfKzb+TfwZMiMv0n/RwcyWUF6nNaWSPvPRkdYSVK3TaSwubEu/Re6hvbSKobm6T87AyAJQCylDknezTMskyZEOG4nI/ud2jt6OZPz6/h1qsyu5pvtTsS54OXNRIsZHUl5lPNFZ0qP3/8uYz2pxfp/tYCJhiwKnmi3BYYtijvHgsMjbx7zUrivGwRS/xSwRaBMr+SVqckAIVBJaWOM6RspzFJ6OrccgoSx/PXyOLhJ57nmguXU+TMnIEhmi2JDxLUZYBRI1geNbtww8HMraDsPniU9dt2Z6w/PfGp+OUOWaBvJMfTcZsiTqMila4A5BsBk5LnqitBjjpnCGqHodoH5V4l84UjBOYwaeVHK8hzn6N72Mujz7zKJ268MmN9Bv2qAqNVLfomFCxBZEjNH9g/nLnAup8/8RzyGIldGjzJjThohW4H9DiU9+MjIhXMv3xyWcdrgUOlyut0RAkahmHcEFQPQ3FAsc4EFVPOfC+PBvDoM69yy5UXUFygf8FzWZYIqREsGbea9hILlkS/mhJ+g32davpLm8Pt3azdvDMjfemNTZQ45BR4pFQRqLPNWsoWkgjHipTXyQgy1Hlh4gDUeaDED6bwqSI2FupZerx+fv/0K3zq5qt172voeI+6IhUCqtJLJBQsycR+NVZwCiV/UuKPz72Wt9aVVZCoswaptwWptwYot4QQANVJZQ10RRago0B5ncy4IWgeUKaYXlHMfACYDjz2/D+5/eqLKC7U18pydancyyizT81hCQWrZSNdLQtxAXGTRXcc3I0sybpWxXEPe3nmnxt0a19rLIJMrTVAgy1InTVAhTlEBooGGWhMW5HyApgfclPut3MsYKMvpMKZnKN4vD7+/NI6Pnr9pbr203FA9Ur+HjUHqV2f3QWcG++AwPAQfW2HqFIZ2ZoKf3lpHT5/bm+PsIsSTfYATTY/jTb/mPB5GLxHtSVItSXI4qKRQq1BG+0BG0cCdryR/HI2PvbcGu64+iLMZv18Ecf2qMv8axJRpWzqBEvmnwjxBQtg/+a1ugmWJMn85aX1urSdLqXmMBPsfsbb/VRbgkZq47MEhyjRbPfRbPexUoa+sJWjfhutAUdeFO3tdQ3y0ptbuOK8xKnuUsHVeUxt6a+Or29SNyVUlw9LQNV2730b/4kU1mfTxObd+2nvTqpYo66UmcMsLnJzY1UPN1b1sKTITY0hVmctoqBYX4uKhvhAZQ8fqOxhQeEQpeZsbCJSz6PPvKZb2+++pTpLxMuojAlW9RgoG+SN/hLcJEij7RsaYM/brzBz5WVqmk2Kp197S/M2k8UuSkxy+Jhi91JtNTYtG8Sm3BKm3DLEoqIhjoctHPI5OOiz447kluW16+ARduw7zJypCROyJEXA6+HdN15Se7jq1KiqLKzPHiAAPKHm2M0v/oVISNtNoh6vj5ff2qppm2oRkRlv93NJWT+31XSzsnjQECuDpKgwh1hc5OZD1T1cX9nLrIJhbELuLDU+qUMCgW0vP6k2YNSDn6fVtpuMl/ARVb27etn0oiptU81Lb2zBH8jsTvliU5jlxW5urenmsrJ+Jtr9eb3x1SA3qLKEWFE8yK013VxQOkCtNfsZIF56YwteDRezBno62Pba39UdLPN4MnUJVQtWy2bWA6oiNre98jd6jx5U23RCnlu7SbO2ElFrDXJxmYsbq3qYXeDBIebOk9Bg7GAWZKY4vFxT0ceNVT3MK/Rgz9K1Nuzz89KbWzRpS4pEeO0PD6ktpIoo8HAy7SdjYckIfFPNgVI4zAu//A6B4fRzQrrcHrbt0U78oiGiXDw3VPZyTUUfzXafES9lkDFKzWGWFLm5tbqb1SUuKi2Zdzk89eqbmrTz5lO/o+uwqpAqgBfv2czbybSfXODIJh5HpZXlcfXy3M+/RTiQXpbGV9/eplsSfbsosaBwiFuqFfM8GxeKgcEoJkFmqtPHDZW9XFlxnHG2zMUcbttzKO1V+F3rXmTHa6rdUQD3J9tHUhFja0C+oIFW4FY1x3sG+jje1krzvGUpp5956P+eok3jcAarKDO7YJiLy1w02gJYRMM3ZZBbFJsiTHH4mODwE0HEFbbo7kGtrihj3nR1FZtPZ9/GNfzzsZ8kk7DsiZbNfD/ZfpJWkTUdHFhdzznAOWqOH+ztpH3fTprnLMVsVZXy5gRuj5cHfvknJI32DlpFmbkFHi4uc9Fk82MyotANchynKDHB7meyw0dEZkS49PFXeHx+brh4ZdLnbX35r6x94hfJ5O1xm8Nc82p38nVEUjJ7LqlnnQT/AqjKAuYZ6GPf5rVUNU6iqLxadT9rNu7gH2+k7wy0CDJzCoe5qNRFkz1gCJVB3mETJcbbA0x3eInIAsdD2gtXr2uQay9cRqHK5H5Bn5dX//AgO9Y8k1Q/Anzhnq28msoYUxKsVzvxrG5gJ3Cz0n9iQn4v+zaswe/1UDNxGmZL4kSmf/j7q2lVrhWRmVXg5eKyfibY/ZgNoTLIcyyiTJM9wGSnH19EmSpqSV1luaog0gNb1vPCL75N1+G9yXbxeMtmvpLS4EgjQ++aDvavrscCrFJ/lkxP6z72vPUKyFBe34QpRvpUWZZ54JePM+xLzWnfYA1wWXk/Uxw+YwOywZjDJko0O/w02f0Mhc0MaRRBHwyFueaCZTG/P/buVl579CG2v/o0QX/S5fX2YebqNe2kvJqQrk0ptCzk18BHUjnZ5ihg0oKVTFm0irpJMxCE9xYtDxzt4IP/riqK4hScYoSlxUNMdniNfX0GZw3tARtvDxWnnfLGbBJ57TffPWVaOHS8hwNb17Nvwxr6O4+m2nSPSWDV1zeRtEl2Mmnf0z9fiKUT/gpclU47VruTukkzqBzXTGlNAy+908Yvn1O/ZUBE8VPNLxxKyqKS0eCXYGCQA8jAXq+TDUPF+KXUU9189UMXMqXMhKurjY4Du3D3daU7tEFR4IJ7NpH2/jpN7tUfLMfhDvJH4Fot2gN40VXOEb9d1bHjbAFWFA/m/M54A4NM4JNE3nYXs8+XWjbRmc5hzi0Z1Go43Uhc1bIVTbaraJK568U2wp88lyd6B6gAlqTbngy84S5JmD/bLMgsLXazsmRQ9RYaw6IyGOtYBJkJdj/1tgC9IWvS1lZAEplVMKzFUA6aIlx07zZ1weZq0CzV4BO7kdd08NzqenqBi1CfzfQMBsNmtg8Xxj2m1hrkfeXHabIHkhIgQ6wMzhaKTBGmF3gxCdAdsqoOgwjIIlMcXmzpBVQ/hZWr7t1EezqNnI4u9+83FjJbgseAmamcv8fr5PXBKPWZUHxVi4qGmFPgMfb7GRioZDBiZu1gKR0BVXWRuaDUxRRH0quAAH4EvtSyif9Fh0LduiRzfq2Tnpvr+cUwHAdWgrqqrqPsHC7geJT4knJLmMvL+2l2+BEMsTIwUI1dlEasJomOgC2hteUcqU2QFDIvm+C6ezejW1l23W/7+xfTGJb4L+AWQNWa65/7qs/IiT27wMOS4iFMRk4qA4MzSMY32xuy8OpAGYPh2F6bCkuI91f2qu1+qwBfv3czz6o9IVUyZqe0LKQJ+CLKlp6iWMeFZYFHuuuQRnTJJMisKhlkikNV9kIDAwMVhGWBDUPF7BwuiPq9KMAd1Z1YY/uxZGCNIPOde7eoT3GcLhmfWP1gOY6hANfIIrciczGn7UfsCVr42/EqAIrNES4t66fcbKR9MTDQg8N+O2sHS6OuJF5ZcZwG6xnTwh3I/AmJ/2vZRmsmxngyWfUEPTgZW38RSwWBC2SRhchMfXfYOXmtu9TUaAtwYakLm5Hx08BAV4YlEy+7yugOnuqQX1Q0NLSgYGgLArsEmddlE/9s2UjaUaTpkHOu63njK1+ttwUvWFToNlYBDQwyRASB9YMl7PGeEmz6aEdHx23ZGlM0cqvmEHBuyWC1kfnTwCCzmJBZVTJAuTnEW0MlSDKIMC/b4zqdnLJhWuazCpF/ZnscBgZnM51BKy+7yvFLYsThdBYcOHAgc7maE5D6Dkk9EPlMtodgYHC2U2cNcm1lH8XmSMjr9aYU/K0XugSOpsJI2MNPyTURNTA4C7GJElMdXnO5NbJpR29ImxpgGpA7PiyZjyMo4xkOw1AIvCEISsorEDnpJUFExeKhWQTLSfJnjyLPVhFMp0mkKCifj/5sE8FuVj6zmpT3aG0ZGMQifNJ17B+5jkdjDSOy8t0oMsr3p58fOu2aD0nKudHwR2KnWBcE5foVAJsJTCP/dprfexVYwG6SmWz33gL8MoX/ZV3Ilg+rHpgFTALGAU2NBXxgOIzdHVL+OPmAbUS8LCMCduLfJkXkHGblM9vIv0/8bAKHSfneEL78ZygEg0EYCMBAUPnZPfLA9YRhOHSqIOULJgEKLeCLsCEYYRdwCDg88joIdGd6THoLVhFKdZ3ZJ73mAOU695s32E1QYoVSK5Ta3vu5xAplNuVpZ5B9BoPQ54dev/I+Kk4Dwfx5wOpAH7AN2AFsH3nfDQT16lBLwWoA5p/0mgtM1LiPs45CC1Q7oMYB1Xbl52rHqVNdA22QAVcAun0j4jTy3ufPTwspS4SAd1GEbOvIaxugSUbAVMREAJqBBbwnTgsA9fW7DNJCQLG+ap1Q74SGAqhzGtPLZAhJijB1+6DL+97Pp/uODDRBRplCbgW28J6Q9STbUCLBMgPTeU+U5qMEk5Uk25GBvghAhf09AasvgDqHsvBwthOUoNMLHcMj717oD7zn9DbIGu2cKWJH4p1wsmBZUfxLo8K0AMXnpK6qokHOYRGhsRAmFkFzkSJiY31+HpEVQeoYVt47vcqUzhCnvKGfUwVsK7APkODU63chaJMo3iA3KbLAzDI4p0wRsrEgXpIMx4ahdQiODCk/n778b5D3LAE2wqnXbBGKYywvr2OTyYTNZsNisWAymTCZTJjN5hM/X3rppVx33XVYLBYKCpQcQDabDZvt1GSo999/P1u2qIuTkyQJWZaRZRlJkrBardx99914PB4kSWJwcBBJkhgYGACgv78fAJfLRXt7O/v27cPtdmv4W1BPiRXmVsD8CsUflk8EJTgwCHsHYf8geDNYLMlisWC1WjGbzYiiMt82mUwn3gVBQBAERFFEEIRTvgNOfK4FkYjicJNlmUgkcuIVDodP/BwMBgkGg0hSXqt4CeCGUwNHh4AOlNW+nEQQBOx2O06nE4fDgc1mw2q1YrPZTlwQsbj99ts577zz4h4TDAbp6OiguLg4pfGtWLGCO+64I6lz+vr6OHbsGK2trRw6dIgdO3awceNG9uzZgxwr8k8DBoPweqfyqnfCwiqYU567q49hCQ4OwW4XvOvSd9VOFEXsdjsOh+PEdTb6GhWpfCMUChEIBAgGgwQCAbxeL16vl2BQtwgErehgRKzgzEj3veSYYNlsNkpKSiguLqawsDChMMVqY/HixQmP27JlC15vrRXMTAAAIABJREFU6plNV6xYkfQ5lZWVVFZWMn/+/FM+93g87Nmzh3feeYd169bx6KOPEgjoswe1wwsdR+ClNmW6uLBKEbFsE5bhoFsRqT0D+qzgCYKA0+mksLCQgoKCEwKllRWUK1gsFiyWMzOUB4NBhoaGcLvduN1uwuGcq+15SqXo0wVrD3Chmlbq6+tZsWIFs2bNoqKiArvdjt/vx+VysWvXLtavX09bW1tKI7RYLFRUVFBWVobTmf6ds2jRIuz2xEVZ161bl1Y/K1euTOv8kyksLGTRokUsWrSI+vp6tm/fTigUwuPxMDQ0xNDQEH6/X7P+QNnOsblPedU6YW45zCpXfF+ZIizBoSHYpZNICYJAQUEBRUVFFBYWUlhYmLdWkxZYrVYqKiqoqKhAlmXcbjculwuXy5XyNHLevHksXryYyZMnU1RUhMViYXBwkN7eXrZu3cr69esZHlZd9/AUwTr9MfJZ4EeJWrjuuuv48Ic/jNkcOww7Eonw2GOP8dhjj6kdGA6Hg5qaGsrLyzV9wn3lK1/hgx/8YMLjrr/+eo4dO5ZSH+PHj+cvf/lLSucm4p577uG5584sRDL6gBgYGEjLMoyHKCgrjDPLYFopFOgQee8NK76ovYOKb0rr6Z4gCBQVFVFWVkZpaWnc69ZAIRwO09vbS09Pj2qry2q18rWvfY0FCxbEPc7lcvHAAw+we/duNc1+Afif0X9EmxIm5Oqrr074RzeZTFxzzTWqBMtisdDQ0EBFRYWa7pNGjeVz+PDhlMVKbR+pIEkSb731VtTv7HY7dXV11NXVEQgEGBgYoK+vT1PLS5LhgFt5CUdgXIEiXE2FSrBqKj4vXwSOepSVvdYhJXBTD29dcXExFRUVlJSUpORKOJsxm83U1dVRXV1NZ2cnPT09CX2qTU1NCcUKoKysjNWrV6sVrLhTQlWC9YMf/IDPfOYzNDTEdnd1d3fz0EMPJWyroqKCxsZG3S6oyZMnU19fn/C4XJoOnszu3btPrC7Gw2azUVNTQ01NDW63m97e3hOrk1oho4QNHBux5kVB2SbU4IQiKxSala1EDrOSTcMfUUIMAhE4HhjZh+dTNgbrhclkoqKigqqqKlVuAIP4mEwmxo0bR2VlJYcPH45ryR84cIBf//rX3HLLLXF/9xs3bkxm5hVXsI4CXiCu42jXrl3ceeedTJ48+YQPy+l04vV66e/vZ9euXezfvz/uHFgURcaPH095ub77oM8991xVx6UjWA6H4wynuVa88cYbSZ9TXFxMcXExgUCA3t5e+vr6TiyBa4kkK9ZRVw5UYBsV7PLycsOa0gG73c706dNpa2ujpyf2jponn3yS559/ntmzZzNp0iRKSkqw2WwMDg7S1dXF9u3b6epSXcfCz2mR76cLlgQcQIl4j4ssy+zfv5/9+/er7fwEoiiecMjpjRrB8ng8bN++PeU+lixZgtWqrgR4sqQjpDabjXHjxlFbW0tvby/d3d26CFc2sVqt1NXVUVFRMeZW9nINQRBobGzEYrHQ3t4e8zi/38/GjRvZuHFjul3uB065YKM5ovaiQrBSRRRFpk2bpsnqXyKKi4uZPXt2wuPeeOONtJZz9ZoO9vf3s2fPnrTbGfVHVFZW0tbWpmqKmeuIokhdXR01NTWGUGWY2tpaBEFIOQogCc5wUcUSLN2YMGFCRsQKFCFRMz1I13+1fPnytM6Pxfr16zWNULZYLEycOJGqqiqOHDmieVhEpigtLaWxsVE3q9YgMTU1Nfh8Po4fP65nN2doUbQ1Ht0Eq6amhrKyMr2aPwM108F4q3BqmDx5MnV1dSmfH49U/FdqKCwsZMaMGVRX51dGIJPJxIQJE5g0aZIhVjnA+PHj9TY+VAlW+nOQKFitVlWrdVohiiLLli1LeNzOnTvTmiLpGc7w9ttv69I2KL+fxsZGJk+enBdxSU6nk5kzZ+oW+mKQPKM+LR05Q4tiWViah8U0NDRkNKJ43rx5lJQkTtuVq+EM27Zty8jG6JKSEqZPn47DkbtZhCoqKpg2bZphVeUghYWFej5EzljRi6YgQ0Cnlr3abDbdwxdOJxPhDAUFBcyZo8/6hF7TwWjYbDamT5+e8qZvPamtrWXChAln9faZXKe2tlaPZjuBMwIJY10FmvqxKisrtWxOFWoEq6enJ6WwjFGWL1+u23Rq/fr1urQbi9FQk9LS0oz2G4/Gxsa4wckGuYHdbqewsFDrZqNqUEYEK9N+h9raWpqbmxMet3bt2rRSuOg1Hezp6eHAgQO6tB0PQRBobm5WNZXWm8bGxrxbFDib0cEoyY5gjSbVyySrVq1SdVw600FBEHQLZ1i3bp2uubDiMSpamQjqjcXoHjaD/CHbFpZmK4XZcOaqmQ4GAoG0InFnzJih21Q3k/6raIiiyMSJE7MSkOl0OjO6mmygDWqSaCZJVA2K5YB5DViFUlvwPOAyUqyUk6kg0VEcDgeLFi1KeNymTZvSCpzUazoYCoXYsGGDLm0ng8VioaioKOMpnDO9OGOgHXa7PZk8V6dzGHgOeBPYBeyMdlAswQoAa0dePwYswOXA14ClyYwi0xbW4sWLVS1/pxvOkEp2UTVs3bpVt9xWyVJeXm4IloFqnE5nsoIVAf4EfBelcnRC1K4Vh4C/A8uA61BKVKsi04KlNpwhnVW40tJSzjnnnJTPj0e6QqolpaWlGQ0nGM1OaZCfJHmvbwRmAbeiUqxAvWCdzFPASqA30YGjlWwyhSAIqgTrwIEDdHR0pNzPihUrdLuRMx3OEA+TyZTRKX0uxoEZqCcJwXodxeWUtK881btuH/CpRAdl2rqaOnWqqtWlXJ0OdnR0cORI3MK3GUeH1Z+YjJZfM8hPVN7vQ8AtKLmukiYdM+EJ4IV4B2RasBKV8RolHcESRVG3cIa1a9fq0m46ZEpERotDGOQvJpNJjf+4BaVEfUqkO6/5arwvM733S8100O12884776Tcx6xZs3QLrMyl6eAomUozbLFYjO03Y4AE93wb8GA67ad7hWxFWYKMSiYFq6ysjJkzZyY8bv369Wll3dQrnCEQCKiuOJ1JMpXJwXC2jw0S3POPAWkVPtTikfZErC8yKVgrV65U9YTO1ewMGzduzMmEeqPl1/UmH1LcGCQmwT0fUyvUosVVsjnWF5l8amYiWd9omhM9yHZ0eyySEStRgPGFUONQquUcHoJ+lcWqjTTHY4M4ghUGtqXbvhaCFXPfYaYsLLPZzNKlieNZt23bxuDgYMr9rFy5UrcbK1cFS5ZlVfsaJxXDlU1QfloUS+sQPH0ksXCNteIYZytx7vlWIJhu+1pMCaNWH7VYLBl7as6fP1/VZt10p4Nqg1KT5fDhw5lI6J8SaoRkfgXcNuVMsQKYUASfmKkUYE23H4PcJ86sKvUqxSehhWAFiJKhNJP+q0wk6zObzSxZsiTl8+ORi6uDo4RC8aueNhXC1eMh3qPJKsLNk6EkziWRqB+D/CDOfa+Jg1YLwZKJYurlmv+qq6uLQ4cOpdzHvHnzdAuizNXpIIDP54v5nUmAa8YrvqtEFJjhgjhJGEKhkGFljQHMZnOsmVXa00HQRrAAzsgrkanquw0NDYwfPz7hca+//npa/egV3e71etm2LW1fpG7EW7mcXwmVSYRpzSmPPm1U05dB/hDj3tdEELQQLCtRnPeZEqzzzz9f1XG56r966623CAY1efjoQqzMEQKwvCa5tkQB5sRJPpsrWSoM0iPGva/JthctBCvq7thMCZYaIfH5fGzatCnlPmpqalSlXE6FXJ4OAng8nqifTy+FihT2tc+Jkz0mVl8G+UWMe1+TXfRaCFZU5cyEYDmdTubNm5fwuA0bNqRlxajdo5gssizntGD5fL6YfqUVKRZKKbdBXYxLd2hoKLVGDXKKXBesqAPJREjDsmXL8jpZ3/79++np6dGlbS2IJSC1TmhMY5/yrBhWVigUIhBQGWlqkLPEuPcNwVIzHZRlOa2wAavVqirlcirkUrK+aMQSrLlpJgU9pyz2d5nOcGqgPTHu/ZzxYUU1cfQWLFEUVe3r27dvX1pWzMKFC3VLYpfL00FZlqMKlijEtpDUUmpVtu9Ew5gW5j8x7n1NMnlqIVhZyQkyffp0VfUO080xpdd0MN00N3rj9Xqj+q+ai6BIgxC7GTHqtRqClf/EECxNLBgtxCbqQPSuq5eJ6HbQLzvDW2+9ldOBkrGEI13rapTpMQQrHA4b4Q15Tox7XxPDRjfrSG/BUrNy53K52L17d8p9NDQ00NTUlPL58cjl7TgQ3ZckCjBVo9yFtU4oizFJMKys/EaSJN3a1kKwogbP6ClYlZWVTJ8+PeFx69evT+uXp7aCdLJIksSbb76pS9taIElS1HJNEwrBqWHaqljTQsPxnt/EuPc1CbLTQrCi5mvRU7DUpnnJ1XCGd999l/7+fl3a1oKhoaGoQj89zupeKsQSLI/Ho+tT2kBfYtz7qed1OgndBCscTisTalzU+K/C4TBvv/12yn04HA4WLlyY8vnxyPXp4MDAQNTPp2mcyn5cYXQHviRJaeUtM8guMe59TcxmLQRrGKXQ6ino5VC2WCyqkvVt3bo1LV+I2grSqZDL8VeyLEcVrIaC+OlhUkEgtvM9lmga5D4x7v2csbBkopTt0cvCUhsXlaurgy6Xiz17kq4fmTE8Hk/Uv10sYUmXWNPCwcFBY1qYp8S493MmgR9EGYxegqU2nCFX46/SXQjQG5fLFfXzWMKSLhOKojvyI5GIsVqYh0iSFMuHlVOCdfT0D/RKmaLG8mlra+Po0TOGpJpJkyZRV1eX8vnxyOXodkmSoi4GVNqTy3uVDPFCJfr6+vTp1EA34tz3uS1YoVBI85XCiRMn0tjYmPC4dJP16TUdTLdqj9709/dH9T/M1Hh1UG37g4ODOZ0rzOBM4vy9jmjRvm5TQlmWNc/Tne/R7du3b8/pGKNYFs0snQVrcjEURlktlGXZsLLyjDiClfqU5yR0EyzQflqoRrDSTTlcUFDA3LlzUz4/Hrk8HfR6vVGDRWscUK3JPvvYiELsxH59fX2675ow0I4Y6YEkoizMpYJWghW1ukO8AgbJUlhYqEpI0k05vGzZMt2qEOdy/FVXV1fUz+OlgtGSeTH2sYdCoZwOsjU4lRj3fBs5VoTiAFFisbQsKrBixQpVQpKr08G+vj7279+vS9vp4vf7Y64OarXZORHVDqiPEa3S2dlpWFl5Qox7PvUNvaehlWAFgYOnf6ilhaW2FH06VowgCCxfvjzl8+Oxdu3anL3pOjs7o37eXBy/yo3WLKmO/nkgEDCsrDxAkqRYU8KcEyyIMiitBEsURZYtW5bwuD179nD8+PGU+5k2bRpVVVUpnx+PXPVf+f3+mGKwqDKzY5ldDsUxoum7urpyVvANFOLc7+9q1YeughUOhzWZFs6aNYvy8sRzk1ydDoZCobT2NepJe3t0X2ihBabpFCwaC5MQWyT9fn9aDyMD/YlT9SgnLayoKqpF6aZMRbfrJVhbt27NyaR0brc75p69+RWKgGSaxVVKaftotLe367qp3iA94tzrOWlhbY/2YaYEq6+vL609esXFxcyaNSvl8+ORi6uDsixz7Fj04GOzGNufpDcOMyyMMSsPh8N0dHRkdkAGqolxrx8Foq/opIDWU8IzHtfp7gerqqpiypQpCY9bt25dWj6OlStXIor6JGDNRcHq7u6OOV1fVKlN3vZUWVUHjhhlLfv6+nLSWj3b8fl8saxfTTNVanmHysDG0z8MBoNpOd/PO++8vE7W19HRQWtrqy5tp0ogEIi5MmgWUy+SqhUOEyyvif6dLMscPXrUcMDnGHF2cGi6F01rkyLq4NJJxqZmOhgMBtmwYUPKfYiiqCrHVirkWu4rWZY5fPhwzIwRi6ugOIvW1SjLa2KvGA4PD8cUXIPsEOcez2nBiroUlqpgWa1WlixZkvC4LVu2pDVNULsKmQq5Nh3s6uqKugUHwGaClTEsm0xjEWF1nIQZ8f4/DDJLJBKJ5b8KAKnvk4uCHhbWGY9uj8eT0naZxYsXY7cnzmuSq9PBQCDA5s2bdWk7Fbxeb1zLZHVd9E3I2WJ+pVIHMRqjlmIul0o7W3C5XLGm6FsA7ba7oL1gHQc2Rfsi1taPeKgNZ0jXitErnGHTpk2abk9Kh3A4zKFDh2L6fmocsDRLK4OxEIBrJsQOcwgEAhw5oknWEoM0iLML4R9a96XHstjz0T5MJehPjZAcPnw45vK8GioqKlSVDEuFXJkOjlojMbZNIApw7QTlPdcotcIl42J/73K5Ym7cNtCfYDAYLxLgOa37y5hg+Xy+pPxMkydPpr6+PuFxWkS3q1mFTIVc2Y7T3t4eNw/X6rrYG49zgUVVMDHG1BCUldhczjM2loljiPQSY7aVDnoI1kagJ9oXPT1RP45KppL16eW/am1tpa2tTZe2k+H48eN0d3fH/H5SMZyb5TCGRAjA+yfGXr2UZZlDhw7lzPT7bEGWZXp7e2N9/SJR/NnpoodgScCz0b7o7+9XnYVUjWB5PB62b48aYK8Kk8mkWzhDLkwHBwcH4/p4ym3wgebcnAqeTqFFGWus7UKRSIT9+/cbKZUziMvlinc//12PPvUJ7YY/RPswgSKfoLi4mNmzZyc87o033khrb9ncuXMpKooz10iDbAvW0NBQXCe7VYSbJsWOKM9Fmgrh8jgp/YPBIPv27dM8NbdBdOLMmAbJM8FaQ4yk8729vQmXoleuXInJlPhOytXsDD6fL600zekyPDzMwYMH45YTu3aCsjKYbyyuggVx0t4EAgH2799vhDvojNvtjhcH9xigXTK8k9BLsCRiWFnhcDiuTwXUJ+tLtwKNXoL19ttvZ21q4vF4Et6wl47LXOpjPbiyKXZpMFAeGPv27TMyO+hIrLREIzyiV796CRYog476iO/u7o5ptqtN1rdz5860slBWV1czadKklM+PR7amg4ODgwnFalUdrMiRaPZUMQnwwWYYXxj7GK/Xy549e2KGchikjsvlirfi/y4ab8c5GT0F6wDwVLQvJEmKGXE9d+5cSkriPD5HSHc6eO655+oWzvDmm5puUFdFf39/wmng4iq4MHGkSF5gEeGWyfHDMQKBAHv37tU0VffZjizLiayr/9azfz0FC+Dbsb7o7e2NOgfOVDiD2n6SZd++fRkPZOzs7OTw4cNxMxjMrYD3NWVwUBnAZoJbp0BVnN1boVCIffv2GXFaGtHV1RXPam0jhitIK/QWrI3Ay7G+PHLkyBk32XnnnZew0Z6enrQq0FitVhYtWpTy+fHI5HQwEolw8ODBhEntFlfBdROUeKaxRoEZPjodGgtiHxMOh9m/f38iy8AgAX6/P9HD+PtoVM4rFnoLFkALSq6sM/D5fKf8Ampra2lubk7YYLoVaBYsWIDTqU9od6ai230+H3v27ImZ4niU8+sUJ/VYFKtRHCa4bUr8aHhQrIODBw8aK4gpcvTo0Xguh3bgF3qPIROCtR74fawvOzs7T6SmWLVqlaoGczW63e12s2PHDl3aPpne3l727NmTMLL70nFwwRjxWSXCNiJaMxOsfg4MDPDuu+9qkrr7bKKzszNR9uB/B3TP96NPieMz+TJwDXBGHZbRbRXTp09X5VcKBAJs3HhGYtOk0Mt/9dZbb+n69A4Gg7S2tiZMO20VlSlgoptXLZIMQyFwBWAgCAMB5d/+CIQk5RWIQEBSjjUJyhjsZsU5bhXBboISK5TZRl5WJX+7lpgE+MBEeNkKb8SJnBl1xldWVtLY2KhbauyxwuDgYCK3w8vA45kYS6YEqxu4C/hptC9DoRCHDh1i2rRpCRtKN2VLQ0MDTU36eJ/1nA729vbS3t6eUBDLbfChSUol5WSRgeN+6PBCpxe6veAKgjsIER0yEttNinhV2qGhQFnxq3MqIpcqoqBYlnVOePqIIqax6Ovrw+PxMH78eAoL48RInMV4vV4OHz4c9xDg0xkaTsYEC+BnwErgtmhfDg8Pc/XVV/Pss89SVhbbNEh3OqjGqZ8KkiTpIlhDQ0O0tbWpynQxuRje36x+u40rAEc9ijh1eKHLC0HNt6vGxh9R+u70wjsjIXWioIhtg1MRsfFFUJFC9enZ5VDlgD8dVP4/Y47B72fv3r2UlJTQ2NiIzZbBUtc5jsfj4cCBA4kekp8C9mZoSBn3xRahrBzGNKXmzp3Lk08+ycSJE6N+f/XVV6eVz/vBBx/UxYe1e/du7rjjDs3a8/v9tLW1qUovbRKUgNDzauNvZPaFYb8bDrmhdUiZ3uUDpVYlq8TkEkWUk7HAvGH4+xF4N/7aBKAELVdXV1NbW6tqa9hYZmBgIG7u/xF+BXwsQ0MCsrN4NNMisjEkEXOZrri4mN/+9rdcd911p3x+8OBBbrrpppQ7ttlsvPrqq7o8RR9++GEefvjhtNvx+Xx0d3fT39+vaiW0yg7XT4wdQDkYhF0u2DeoWFNSnhebsYowpUTxz00rBbPKK3jbcXjhmGLVJcJkMlFRUUFtbS0WSw7ljM4AkiTR3t6eMBWUxcTmUITz0GnPYCwyOSUcZfeFDXx5bSc/9sbY6uV2u7n++uu56aab+P73v09DQwMAr7/+elodL1myRDeTP93poNvtpru7O6kAx4WVSvaC0y0OfwR29ivTrKOeGDEleUpQUgR4l0tx2s8uVzZD1ybw2c2rUMIe/tYKhxOUyoxEIvT09NDX10d5eTk1NTWqagvkO263m7a2toQ7A+qdBDu8XEiGxQogK3bv7c3sn1jMl3cPIITjWJy7du3iZz/7GT6fj1mzZvHII4+kFUV+8803c84556R8fixcLhc//OEPk44NCwQC9PT0cOTIEXp6elTve6t1wo3NSnXmk/ND9fnhn53w5GFlCjSYJ1O+VAlL0D4Mm3rh0BA4LVBhjz1tsJuUiP8iC7QNx3fIg7KC7fV66e3tZWhoCFmWsdvtY25V0ev10traSmdnZ8IN4+MK4JYp/PWNbn0j2mORtXjCloXsHgwy408HFYdvIux2O4WFhZSXl6ecw+qpp546Ya1pybPPPsu9996r6lifz4fb7cblciVdpsphgvPrYUnVqb6qbh+83qlYHWc7DQVwSQNMSHCJ+CPwWgds7E1umiwIAiUlJZSWllJcXJy3U0ZJknC5XDG3yEVjdjlcMx4sIne2bOZnOg8xKtmYEirIvFliZcZHpinLzzsTJF7w+/34/X76+vqwWCyUlpZSWlpKYWGhqidec3OzLmIFsbfjyLKM3+/H6/XidrsZGhpKKbmcSVCmPRfWnxq7NBCEF4+pcyifLbQPwyP7YEapEuEfq2yZ3QRXNCq/1xeOJZ4mjiLLMgMDAyd2GDgcDoqKiigqKsLhcOT0KmMoFMLtdjMwMIDb7U7kUD+BWYCLx8Gy0apKEun5ZtIga4IliLwhy3zUKirBfnPK4bmj6lauQqEQvb299Pb2IgjCCevL4XBgt9ux2WxYraeWDdYy95UkSXg8nhNi9Morr+ByuQiHw4TDYfx+Pz6fD7/fn9YWIpMAs8qVFcCTl/Zl4O0eeLU9s2EI+cS7A3DEA1c1xQ+grXHAh6cqvr51XcriRDL4fD58Pt8JJ7XJZMJut58QL7PZfOJlsVgwmUwIgqDrKqQsywQCAfx+P4FAAK/Xm3Jt0PGFcNX4UzaY97Rs5V0tx5sM2ZsSzmMCJk6JSAtKsL5LuRnVrObEQxCEExeJ2WxmyZIlNDU1UVxcfMIiKy0tJRwOn9imMfr0lGUZt9t9Yvo2+vPAwABDQ0O651gyC0oR0XNrlejwkwlK8NfDsMewqlRzbi1crNK4PupR/IAHM5DcQRTFE9epIAiIoniKoI1+Hw9JkpAkiUgkQjgcJhQKaZK4sNKu7EOdVX6aSMj8vmUL2sXvJElW98S2LOQAcEYWvUBE8S1s6AH3WZSeu8ymTFHmV0SfynhC8Lv90GOkd0qalQ1WLqlVb2F0+WBzL+zoV67Hs4WGAiXB48yyGOIgcHPLJh7L9LhGyWp03Op6ZgBn5Hkxi0rBgWU1ivNURFnxCo+l9fkRTAJML1XCE65oVExwa5S/SkiC/zso0Km+tKPBSRwbinDx9Tdz7sqViGYLnoE+pEhsS6TQoqRhXlqtPEg8YWX/5Fik3AaLq+Hq8UrwcbUjpiUTsZq485X2zIczjJJVC+u+RbxflvmzmmMlWVlNHI3S7vCmP23MFnYTNBcrQjWlJP5WGrPVRsO0OTzfGubxNVszN8gxiN1mZcOff0ZNRRmRcIjOg7tp3bmJw9vexDOQuDK5K6D4xvYOKGEReuyvzAQlVsWSai5SrsNy9esE61o2o8/eNpVkd0o4j1JM9JGipecKKPvQ+vzKz/0B5X04nDsXk0VUHJZVDiW4cUKR4uiNt4XG6nAyecG5NM9dRsOU2XS7Bln6wTsJBMfoIz6DfOa2G7j7k7ef8pksy/QeO8iRnRs5sHkdAz3xEyKCYvEe8yiO/R4f9Ixcg7myk8AiKoVnS22KIJXbFMupzgnO1Jfa7mrZzAMaDjNpsp7XrWUhbwNLtG7XE1KEayik/HzyayikpEIJRMAffi8tSio4zUrWS6dZmUYUWJTAxCq7coGU2dT/kquaJjFzxaVMXbQKs+29ZZmfP/Y09zz4m9QGaHAKjXXVbPrLz+Me03v0IHs3rmHfhjUEvOrzZoUl6PUrr+P+kestDN6Ra9ETSn1V1yyCTVTyftlNSnhLoQUKzVBkVa7B4pH3IotynObIzG3Zgv4J3+KQvTis93gBHQSr0KK81NbeC0qKVRaMvCdeJwuZWXhvC4x95LdmFWNXIlaLo6iUyQvPZebyiymvHx/1mIPHEj/xDdTR1tVLOBLBHCesoKppElVNk1h+7R20vrORvRvXcHTnZmQ5vtqYRcWCqYuTzDYkKb5YaeRaA+XBOdryydeZWVReWlxnGnCkZQvvZHsQWRcsUeBvksyTdwzfAAAWl0lEQVQ92R6HdeQiyVQl5NLqeuZfcgNTF69GTBCTU1qsT3Xqs5EChz2uWJ2MyWxh0vwVTJq/gsHeTra/+hR73nqVSDj1qblFhNEF4IKs331JIPA4ObAtNeu/sns2sbVlIYeB6PlkxhjldU3Mv+R6Ji88D1FUd+NMGa9PhP7ZSHNjXUrnlVTVseqmT7DkylvY+frz7PjnM0lNF/MdUeJP2R4D5IBgASDwFDKfz/Yw9KSqaRKLLr+R8bMWJ10P8aJlC7BaLART2NZjcCoXLJ2f1vn2wmIWve8m5l50DbvXv8T2155mWMUKY55z6J4tbMn2ICDLcVijrK7Bh8C/ZHscemArKGLZtXew+kOfoqx2XErFWx12G7sPtLKv9ZgOIzy7+O6XPkFlWeJCvYkwmS3UTpzGrPMux2J30N26P25cV14j8NM1HbyS7WFAZqrmJGYr64DMVh/VGVE0MXv1Vdx278+Yc/6VCPHiGFTwyVuu1a1S9dnCygWzmd6sbT5/k8XK/Itv4Oav/5iZKy9FEHLjltKUHJkOQo5YWGtAHol6X5DtsWhBw9TZvO/f7mLakgswaZR+pK66giMd3ew60KpJe2cjP7vv36mvrtSlbavdwYRZixl/ziJc3W14XL269JMF9rRsyf6i2Ci58zgQs7c/SStEs4WVH/gYV3/6Pspqta/Mc/cnb6e4UJ8CsGOdqy9YwaJZiasypUtV0ySu/dz9nP+hO0+JpctjfpvtAZxMTlhYAKs7aKWefwWKsz2WVCitbuCqT36diXOW6jZ1K3Q6mDiujqdfzUx16bFCSWEBv/3uVykqyIzYC4JAVdMkmucup6d1H8ODCZK95S5hJP5lTRcqs4XpT84I1hqQVzdQh1IKLK+YtuQCrvj4XRSVV+nf18RGunr72bH3kO59jRX+56ufZsmcGRnv11FYzPTlF2Gx2eg4sCut3GhZ4qmWLfwy24M4mdyZEgKikFvmZyJEs5kLbv0MF97+WSwZNP/v//y/Mnf6GVl5DKJw3cXncsOlq7LWvyiamH/xDVz72ftxFmtUijtDCAK/yPYYTifnlp1aFrINmJvtcSTC5izk8o99hfops7LSf8/xAa74f1+mrWvMOHc1Z+bkCTz782/jdOSGL2l4sJ8XfvEAPUf2Z3soamib2cyEG58gp3Ki5MyUcJQL6ikALs32OOLhLC7lus/eT/X4KVkbQ4HTzgVL5vHkS2vxp5D6dqxTWlzInx+8j6ry0mwP5QRWu4Npi8+nr72VQRUZIbKJIPODT73Ca9kex+nk1JQQQBZ5FMjZO9BZXMo1n/4GZXWN2R4KUyc28uj376bQqXKH91mC3Wblt9+5iwkNtdkeyhmYLFau+PhdzFh2UbaHEo+QbOFX2R5ENHLOwlrTgWd1HecgkJ25VhzshcVc+7lvUlY7LttDOUF9dSXL553D06+sJ6RBLu98xySK/PwbX+TCZeltwdETQRAYP3sxw4P99B3LycWTx1o28ki2BxGNnLOwAET4SbbHcDoWm50rP3E3ZTW5txF5yZzp/OF7X8sZX022EASB//7PT3Ll6mXZHkpCBEHg/A99gskLcnBRXODBbA8hFjlnYQG81snR1fXcANRkeywACAIX3/EFGqfPy/ZIYtJYV83qJfN4/vW38fn1reqTiwiCwLf+/f9xx3U57f48BUEQmDhnKZ0H32WovyfbwxllTctmvpXtQcQiJy2sEX6a7QGMMv+i65k0f0W2h5GQeTMm89wvvpOTvhs9EUWBH371U3z0/VdkeyhJI5pMXPbR/6C4IkeezTI/yPYY4pG7guXnD0CSZS21p7ppMkuuuiXbw1DNhIZa/vaT+5k15axIL4bFbOKhr3+Om6/MaSd2XOyFxVzx8bswmbNe9n6/vIVnsz2IeOTklBBgTS/B1fXUAUuzNQaz1cZVn2rBUZR+OpJMUlTg5ENXXsixzh52HzyS7eHoRoHDzq+//Z9ctXp5toeSNo6iUiw2O8fezV5lJEHgay0dbMraAFSQs4IFcPE4dkkynyZL41xy1a1MnK15uvmMYDaZeN/5S7Hbrazb/A75tyskPjUVZTz+o/tYPm9mtoeiGdUTptJxYHe2/FlHywf51+f7cytQ9HRyWrBe7cC9uo4pCJmPfC+urOXiOz6HoDKNcS4iCAJL58xg7vTJrNmwbcw44+fNmMwTP7pvzKWOFgSB2olT2f3GS8hSiuV1UkXmy1/ZxYbMdpo8uevDGsEE3+a9oiIZY+nVtyFm36egCZesWMjrf/gR5y/J+R1PCfnAZefz1E++SUONPnmtsk1pdQOzzrs8090eJZCbcVenk/Pmw2ud9K2uYyEC+iczGqG0dhyrPvjxMZXhs8BhP7EJeOOOPUh5Nke0WS088MWP89VP3IbZnPOXbVpUN05i17oXM5ly+T9atrMxU52lQ85bWACIfDOT3c2/6Pq0UxrnIiZR5Msfu5l//Oa/82oVcerERp77xXe447rLsj2UjGAvLGbmyozFkx3Bz+8y1Vm65MWjak0H7avrOZ8MlAKz2p1ceNtnEE25UVBID6rLS7nl6otxOmy8uXUXUq7UVz8NQRC4/dpL+c23vjJmp4CxKKtp4J1/PovepQAF+HzL9tyoiKOG/LCwAAT+kwwUcpy0YCVmq03vbrKOxWziM7fdwAu/+h5L52Y+uV0iJjTU8vj/3Mt/f+VOHPax//c4ncLyKhpn6L6zYpu8md/r3YmW5IWFBSNWVh0L9PZlLb3qNkqqUiu2mY9UV5TxoSsvZFpzE5t37mVo2JfV8VjMJj51y/X88ptfYlJTfVbHkm2kSJjWd/RbuBMkbmvpIid3X8cifywsAJGvgX5xIhabnXFTcy5JhO4IgsA1F67g9Ucf5IsfvTFr6WouPXcxr/3uf7j7k7djs46NFdp0mDh7ierq4Cnw5L1bc6PWYDLkjYUFsKaDntV1TNYrLqt+yjlMz+08Rbpis1pYuWA2d1x7KYIgsGPvQcIR/eMI506fxE9bvsDn7vgAFaV5WYNEF8xWG0d2btSjiEXQFOGG17rIu+oYeSVYAKtr2IrInYDmXvHJC89j3NQ5WjebdzjsNlYtnsvt115KeWkRB4606zJVXDJnOg988ePc++mP0FSfG5t/c43+rmP0tO7Tutkf3buVP2rdaCbIO8Fa08XA6gYqAM2THs1a9T7K67SvJ5ivOB12ls6Zwb++/300N9UzOOSlo7svreovRQVOrr/kXH5416f5wkc+yKSmhjEV76Y1/mE3h7e/rWWTXUS4cU0Xfi0bzRT5uXZv4l7C3ARo6h0vrjSe8tGwWMx88PLVfPDy1fQcH+DpV9fz/Otvs2X3fry+xNd9WUkRy+edw3UXreSy85Zgt1kzMOqxQXGFtqmCBJnP37uNAU0bzSB5+2hrWcRHkbXNO/0v3/4t9kLDh6KWcCTCrv2tbNm9j57jA/Qcd/H/27v34LjK847j3/esbpZt2ZZsbMkXQDbgC8QxMpg4IQjGJQ0kFJrgoRemCW2dcWjSJs20JdTSgU4goTNkxqXuTNoxBAjQ2hDHsQM4Bq/B4NuuJFsXbCTLlmRJtmRJu5JW8novb/+w0zr2rrSSds/unn0+/573HD2zo/3N2XPe9336B33MmDaVWYXTmXvNTFbefBM3XDdP7qLGaai/j58/+Vh8LqZ526zivvhcLDnS8w4LwMVLlLGOOG4/kzNpcrwulRGyHA6WL14oPRITKDd+/5NDjiwej9fFkiW9pjVcxoSwoXmcOC2MNgwHhiPtHukJm3Nk58RrasOGDYc4GY8LJVPaBhZARRVu4MW4XMxI649C2NnE/zfdTE3dxhJjkf7f0hA/ANoneplwMIDWlu9iI8SIwqEQ4WBgIpfwG/BN04ktesClfWCZNXiUZn08rhXwp+WbXmFjAf/E5r8p+McKN7VxKifp0j6wACqr+DXwPxO9js/bF4dqhIifwb5z4z9Zs7vSbY+fgr9ji8C65HFgQpthD/SkTG84IQDo7zk73lM9KP4SC3Y4sZJtAst0cw743kSu4e2a8KMwIeKq78zp8Z2oWG+6aY1vNclnm8ACMN28BmwZ7/ldrSfiWI0QE3d2POsINZtNF2/Ev5rks1VgARBiHYxvvklXS2OcixFi/LTW4wmsoyi+k4h6UoHtAsuswYPiEWDM74I9Xe0M9nYnoCohxq677QTDA2Na9udxwB+bboYSVVOy2S6wAEwXh5TiqfGc25rEzrtCXK6lbkyNbLTSPLbBja2fa9gysAC0i2dRY99RsfnIgUSUI8SYNVV/HPtgzTOVVfwycdWkBtsGlgnhbM2jQMdYzjt9vAafpycxRQkRo84Tn+CJ9Q2h5u2lC6lMbEWpwbaBBfCkm040XwNi7tGuw5pG14cJrEqI0TV8tCvWofV5ij9ZuyVxvQ5Sia0DC8Cs4gCKdWM5p3bvDsIW7GUuRCSDfedoqt4Xy9AzwH3/5Mab4JJShu0DC8B08TKaF2IdP+jpofnI/kSWJERUNe9tIxwcda3ysAEP2nFy6EgyIrAAKOB7wJ5Yhx/e+QbhsNxlCWsN9JyN5edgWGn+rMJNXDd7TwcZE1iXttdYCxyPZbynq53Gwx8ktighrnBg+yuERtlORmm+mwlvBCPJmMCCS+sNs1gDxPT65dDO1wnKljPCIh2NdaNOZVDww8oq/t2iklJORgUWgHmQ0wbcB6N3Dhns68b1zriXJgoRs1DgAs7XN8FILdQUz1S6eda6qlJPxgUWQIWbWhQPEcN0hyN7fkVP+6nEFyUy2sEdr+Ht7hxpyCbTxZNW1ZOqMjKwAEwXTuAxRmliEQ6F+O1LPx31uYIQ49XaUM1R5/aRhrxkuvkbq+pJZRndJsbZSe3dxbSh+Coj9Gg8P+glGPAzf8kKC6sTmcDn6WHHpqcI+qPe7P8nbtY5bbYR33hldGABODupKZ/LaRg5tM6e+pTC4vkUzplvXXHC1kLBADv+41/wdkVdPbbJdPNtp4TV/8n4wAJwdlAdS2i1NlRx/S2rmDR1mnXFCVvSWvP+qxtpa6iKNuQnppvvW1lTOpDAusTZQfXdc2kHvkKU0AqHgrQdr+GGsjvJysm1tkBhKwe3v0L9vncjHlMa06xig8UlpQUJrMs4O6i+9EzrfqK8kPD7BmlvrOPGlV/EyMqyuEJhB1W73sT1TsQmT0E0680qnre6pnQhgXUFZyc15cVUo3gQyI40ZsjbS0/7KRZ+djVKOkaLMah17mD/r16OdGhQwdfNKnvuxR4vElgRODv59J4S3tPwIJAfaYy3u5PuthMsWrEaZcjHKEZXs3sbH//yxUiHOoB7TTeyFmwU8k2LYk8n7eVz2IniASDiU3Zvdyc9HS2UfmYVhkM+ShGZ1ppDO1/j8M7XIx2uzTK4p8IV2xrXTCffshE4z9C9Zh5bw5pyoDjSGE9XO23Hj3L9LbeTnZtnbYEi5YWCAd5/dSP1H74d6fBWzvNARQ0TaO+cWaK+whf/zywnj35+huLRaGMKimZz/7c3MP2auVaWJlKYz9vL2z97lu7WpisPhRQ8WenmOWSO1ZjIHVYMnKcIOjvZdncJw8A9RAh6/7CPRtcHzCldwtTCWdYXKVLKufaTbP+3Sjxnr9oY5BwGD5kuXklGXelOAmsMnJ18VD4XFxfnal31+y8UuEBT1T4Kiq6hqORa6wsUKeHYgfd4579+gt838PsHFK6sMGsq3EgvuXGSwBojZweN5SVsA+4E5lx5PBwK0XzkAAM9XcxbvByHzNXKGP5hH3t+8QJV725F//5utSHgOc7zaMVRepNUni3IM6xx2riI3N5pPAd8hyif49Si2fzBN77P7OtutLY4Ybm2YzXs+cULkVrEtRgGf1FxmL3JqMtuJLAmyFzJA2g2A0WRjhuGg7IvPUzZH65FGfJx200ocIH921+hdu/OSJvvbcm9wLeeqKUvGbXZkXyD4sBcxTyCvAzcHW3M3Js+wxfXrpO3iDbSUufio7c2R9p4r1sp1le6eDMZddmZBFb8KPNW/hrFvwIFkQYYDgfL7vwyq77yp2TnTrK4PBEvnq4OPn5rMy317isPaTSv5mj+/ofVdCejNruTwIqzH5VRHIBNXFzWE9Hk6UXc8cCfc+Nt5dYVJibMP+yjetdbHHFuj9Q3sAmD9eZhdiejtkwhgZUgT5XxsL4YXDOjjZm/ZAWff+ibzCiWTQFTWTgYpGH/bzn8mzc4P9h/5eEA8Hyhl8rvNo3eI0BMjARWApllzASeBtYRZQqJMhQLlq3k9vseYea8UkvrEyMLBwMcO7gH17tb8PVdtXpGA1sd8MQGNyeSUF5GksCygFnGYjTPo/hytDESXKkj4D/PJwfeo3rXmwz1R3zBd8jQ/KCiig+tri3TSWBZyLyNNYTZCCyJNkYZitLln6PsSw9TNPc664oTDA94qf3gN9Tt3Yl/2BdpSCuKDZeW1cgawCSQwLKYuYwc8vgr4Alg3khjZy1YyNLV93LjbXfJlswJosOa9sajfHpoL03VHxEKXIg0rFlpfqz9/NysJ+IAYQ0JrCQxl5FDLt9AUQGMODkrZ1I+i279ArfcdT+FxQssqtDehvr7OH5oDw37dtHfczbasJNofkwBm00nV70WFNaTwEoys5w8NcC3NPwDUDLiYKWYe8PNLL7jHq69+TZyJ022pkibuHB+iLb6Ko679tJaX4XWUXvo1gPPLC3lv9duIRRtkLCeBFaKMJeRo/L4I635OxSrRxuvlMGc0psoXfF5Fq1YTX7BDCvKTDt+3wAtDW6aqj+m7ZMawtE7eIfRvK9gY2UVO5BnVClJAisFPX0rZWH4WxSPEKURxuWUMihetJTS5Xdw/S23MyXD9+PydnVyqu4QJ48e5MzJY+jwiNnjAV4mxE/NGk5ZU6EYLwmsFGaWsQDFY2geBWKe6zB5WiFzShcz76blFJcusf3E1P6es5w+doQzzcdob6pjsHfUVTEhYDeaVylgq+nkvAVlijiQwEoTT99KWdhgHZpHiLJWMZop04sovmEZJQuXMWvBIgqL5+PIGvXGLSX5hwbp6Wih61QjHSfqOdN8DP/QYKynN6DYkhXixX+upiWRdYrEkMBKM2YZ+UrzkFZ8DbgXGNeT98nTCpm5YCGFs+dTWDKfGbPnU1SyACNFgiwcDODtPkP36RP0drTRe7aNvo5W+nu7Im3jMpJaNNsxeMN0UZeoeoU1JLDSmFlOHj6+QJivAl9ntLeMozCysikonEV+wQwmzygif+p0pkyfSf60GUyeVkh+wQwmTZlGzqSIrRpjEg4G8Q8PMtTvYdDbw1C/B19fD8MDHgY9PQz19+Hz9kbaCC9WIeCAgl8bim0bpH2WrUhg2YQJhrGCVdpgjYZy4HNAwvawycnLJzs3D0dWNlk5uTiyI9+Z+Yd8oDX+YR+BC+cj7XIwUWGgDnCi2Us2u82DXLVCWdiDBJZNmcvIMXJZpRXlWnEXmpVEaQibZvxojgL7MHCSzT5zv+yTnikksDKIuYISpSjTBmVoyoCljOHtYxJ4uXj35EZTj6Kh0Mth2cYlc0lgZTjzs0zHQamChUCphoUoStFcC8wGpibwz/uALqAFTbMyaObiur3mrDDNsmunuJIElhjRxkXk9k9mZthgpnZwjdbMQjMFhaEu/cTUF99U5lx2WkDB7+Ya9GtNCMUgF5uIdmFwjkmck/lPQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEtf4XNOWUxf6O/NsAAAAASUVORK5CYII="
                    id="l"
                    width="300"
                    height="300"
                  />
                </defs>
              </svg>
            </span>
          </span>
          <svg
            aria-hidden="true"
            className="toggle__backdrop"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 290 228"
          >
            <g className="clouds">
              <path
                fill="#fff"
                d="M328 167.5c0 15.214-7.994 28.56-20.01 36.068.007.31.01.621.01.932 0 23.472-19.028 42.5-42.5 42.5-3.789 0-7.461-.496-10.957-1.426C249.671 263.676 233.141 277 213.5 277a42.77 42.77 0 0 1-7.702-.696C198.089 284.141 187.362 289 175.5 289a42.338 42.338 0 0 1-27.864-10.408A42.411 42.411 0 0 1 133.5 281c-4.36 0-8.566-.656-12.526-1.876C113.252 287.066 102.452 292 90.5 292a42.388 42.388 0 0 1-15.8-3.034A42.316 42.316 0 0 1 48.5 298C25.028 298 6 278.972 6 255.5S25.028 213 48.5 213a42.388 42.388 0 0 1 15.8 3.034A42.316 42.316 0 0 1 90.5 207c4.36 0 8.566.656 12.526 1.876C110.748 200.934 121.548 196 133.5 196a42.338 42.338 0 0 1 27.864 10.408A42.411 42.411 0 0 1 175.5 204c2.63 0 5.204.239 7.702.696C190.911 196.859 201.638 192 213.5 192c3.789 0 7.461.496 10.957 1.426 2.824-10.491 9.562-19.377 18.553-24.994-.007-.31-.01-.621-.01-.932 0-23.472 19.028-42.5 42.5-42.5s42.5 19.028 42.5 42.5Z"
              />
            </g>
          </svg>
          <span className="toggle__indicator-wrapper">
            <span className="toggle__indicator">
              <span className="toggle__star">
                <span className="sun">
                  <span className="moon">
                    <span className="moon__crater"></span>
                    <span className="moon__crater"></span>
                    <span className="moon__crater"></span>
                  </span>
                </span>
              </span>
            </span>
          </span>
          <svg
            aria-hidden="true"
            className="toggle__backdrop"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 290 228"
          >
            <g>
              <g className="stars">
                <g>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M61 11.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.749 3.749 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.749 3.749 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813a3.749 3.749 0 0 0 2.576-2.576l.813-2.846A.75.75 0 0 1 61 11.5Z"
                    clipRule="evenodd"
                  />
                </g>
                <g>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M62.5 45.219a.329.329 0 0 1 .315.238l.356 1.245a1.641 1.641 0 0 0 1.127 1.127l1.245.356a.328.328 0 0 1 0 .63l-1.245.356a1.641 1.641 0 0 0-1.127 1.127l-.356 1.245a.328.328 0 0 1-.63 0l-.356-1.245a1.641 1.641 0 0 0-1.127-1.127l-1.245-.356a.328.328 0 0 1 0-.63l1.245-.356a1.641 1.641 0 0 0 1.127-1.127l.356-1.245a.328.328 0 0 1 .315-.238Z"
                    clipRule="evenodd"
                  />
                </g>
                <g>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M32 31.188a.28.28 0 0 1 .27.204l.305 1.067a1.405 1.405 0 0 0 .966.966l1.068.305a.28.28 0 0 1 0 .54l-1.068.305a1.405 1.405 0 0 0-.966.966l-.305 1.068a.28.28 0 0 1-.54 0l-.305-1.068a1.406 1.406 0 0 0-.966-.966l-1.067-.305a.28.28 0 0 1 0-.54l1.067-.305a1.406 1.406 0 0 0 .966-.966l.305-1.068a.281.281 0 0 1 .27-.203Z"
                    clipRule="evenodd"
                  />
                </g>
                <g>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M41.5 74.219a.329.329 0 0 1 .315.238l.356 1.245a1.641 1.641 0 0 0 1.127 1.127l1.245.356a.328.328 0 0 1 0 .63l-1.245.356a1.641 1.641 0 0 0-1.127 1.127l-.356 1.245a.328.328 0 0 1-.63 0l-.356-1.245a1.641 1.641 0 0 0-1.127-1.127l-1.245-.356a.328.328 0 0 1 0-.63l1.245-.356a1.641 1.641 0 0 0 1.127-1.127l.356-1.245a.328.328 0 0 1 .315-.238Z"
                    clipRule="evenodd"
                  />
                </g>
                <g>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M34 83.188a.28.28 0 0 1 .27.203l.305 1.068a1.405 1.405 0 0 0 .966.966l1.068.305a.28.28 0 0 1 0 .54l-1.068.305a1.405 1.405 0 0 0-.966.966l-.305 1.068a.28.28 0 0 1-.54 0l-.305-1.068a1.406 1.406 0 0 0-.966-.966l-1.068-.305a.28.28 0 0 1 0-.54l1.068-.305a1.406 1.406 0 0 0 .966-.966l.305-1.068a.281.281 0 0 1 .27-.204Z"
                    clipRule="evenodd"
                  />
                </g>
                <g>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M63 89.25a.375.375 0 0 1 .36.272l.407 1.423a1.874 1.874 0 0 0 1.288 1.288l1.423.406a.374.374 0 0 1 0 .722l-1.423.406a1.874 1.874 0 0 0-1.288 1.288l-.407 1.423a.374.374 0 0 1-.72 0l-.407-1.423a1.874 1.874 0 0 0-1.288-1.288l-1.423-.406a.374.374 0 0 1 0-.722l1.423-.406a1.874 1.874 0 0 0 1.288-1.288l.407-1.423a.376.376 0 0 1 .36-.272Z"
                    clipRule="evenodd"
                  />
                </g>
                <g>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M110.5 53.156a.236.236 0 0 1 .225.17l.254.89a1.174 1.174 0 0 0 .805.805l.89.254a.23.23 0 0 1 .122.084.233.233 0 0 1-.122.366l-.89.254a1.167 1.167 0 0 0-.805.805l-.254.89a.232.232 0 0 1-.225.17.235.235 0 0 1-.225-.17l-.254-.89a1.174 1.174 0 0 0-.805-.805l-.89-.254a.23.23 0 0 1-.122-.084.233.233 0 0 1 .122-.366l.89-.254a1.167 1.167 0 0 0 .805-.805l.254-.89a.232.232 0 0 1 .225-.17Z"
                    clipRule="evenodd"
                  />
                </g>
                <g>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M120 27.188a.279.279 0 0 1 .27.204l.305 1.067a1.41 1.41 0 0 0 .966.966l1.067.305a.283.283 0 0 1 .148.1.286.286 0 0 1 0 .34.283.283 0 0 1-.148.1l-1.067.305a1.403 1.403 0 0 0-.966.966l-.305 1.067a.279.279 0 0 1-.439.147.275.275 0 0 1-.101-.147l-.305-1.067a1.41 1.41 0 0 0-.966-.966l-1.068-.305a.284.284 0 0 1-.147-.1.286.286 0 0 1 0-.34.284.284 0 0 1 .147-.1l1.068-.305a1.405 1.405 0 0 0 .966-.966l.305-1.067a.279.279 0 0 1 .27-.204Z"
                    clipRule="evenodd"
                  />
                </g>
                <g>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M155 28.5a.753.753 0 0 1 .721.544l.813 2.846a3.746 3.746 0 0 0 2.576 2.576l2.846.813a.747.747 0 0 1 .543.721.75.75 0 0 1-.543.721l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.747.747 0 0 1-.721.543.749.749 0 0 1-.721-.543l-.813-2.846a3.746 3.746 0 0 0-2.576-2.576l-2.846-.813a.747.747 0 0 1-.543-.721.75.75 0 0 1 .543-.721l2.846-.813a3.75 3.75 0 0 0 2.576-2.576l.813-2.846A.751.751 0 0 1 155 28.5Z"
                    clipRule="evenodd"
                  />
                </g>
                <g>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M147 60.25a.377.377 0 0 1 .36.272l.407 1.423a1.883 1.883 0 0 0 1.288 1.288l1.423.407a.375.375 0 0 1 0 .72l-1.423.407a1.875 1.875 0 0 0-1.288 1.288l-.407 1.423a.371.371 0 0 1-.36.272.377.377 0 0 1-.36-.272l-.407-1.423a1.883 1.883 0 0 0-1.288-1.288l-1.423-.406a.375.375 0 0 1 0-.722l1.423-.406a1.875 1.875 0 0 0 1.288-1.288l.407-1.423a.372.372 0 0 1 .36-.272Z"
                    clipRule="evenodd"
                  />
                </g>
                <g>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M125.5 76.344a.513.513 0 0 1 .496.374l.559 1.956a2.574 2.574 0 0 0 1.771 1.771l1.956.56a.514.514 0 0 1 .27.805.514.514 0 0 1-.27.186l-1.956.559a2.57 2.57 0 0 0-1.771 1.77l-.559 1.957a.514.514 0 0 1-.806.27.514.514 0 0 1-.186-.27l-.559-1.956a2.574 2.574 0 0 0-1.771-1.771l-1.956-.56a.514.514 0 0 1-.27-.805.514.514 0 0 1 .27-.186l1.956-.559a2.57 2.57 0 0 0 1.771-1.77l.559-1.957a.515.515 0 0 1 .496-.374Z"
                    clipRule="evenodd"
                  />
                </g>
              </g>
            </g>
          </svg>
          <span className="astrobear__container">
            <span className="astrobear">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 316 432"
              >
                <circle cx="158" cy="143" r="140" fill="#444" />
                <circle
                  cx="158"
                  cy="143"
                  r="140"
                  fill="url(#aa)"
                  fillOpacity=".2"
                />
                <circle
                  cx="158"
                  cy="143"
                  r="140"
                  stroke="#000"
                  strokeWidth="6"
                />
                <path
                  fill="#AF7128"
                  fillRule="evenodd"
                  d="M65.98 159.61C49.913 155.643 38 141.134 38 123.842 38 103.495 54.495 87 74.842 87c14.337 0 26.761 8.19 32.85 20.146C119.687 100.674 133.414 97 148 97h20c14.52 0 28.19 3.641 40.146 10.059C214.251 95.15 226.65 87 240.952 87c20.347 0 36.842 16.495 36.842 36.842 0 17.222-11.818 31.685-27.787 35.72A85.104 85.104 0 0 1 253 182v66.56l10.054-10.054c11.325-11.325 29.687-11.325 41.012 0s11.325 29.687 0 41.012l-44.548 44.548a29.004 29.004 0 0 1-6.518 4.906V407c0 12.15-9.85 22-22 22h-44c-12.15 0-22-9.85-22-22v-28.69a41.072 41.072 0 0 1-14 .174V407c0 12.15-9.85 22-22 22H85c-12.15 0-22-9.85-22-22v-77.797a28.99 28.99 0 0 1-6.946-5.137l-44.548-44.548c-11.325-11.325-11.325-29.687 0-41.012 11.326-11.325 29.687-11.325 41.013 0L63 248.988V182a85.106 85.106 0 0 1 2.98-22.39Z"
                  clipRule="evenodd"
                />
                <path
                  fill="#000"
                  d="m65.98 159.61 2.894.789a3.002 3.002 0 0 0-2.175-3.701l-.72 2.912Zm41.712-52.464-2.673 1.362a3 3 0 0 0 4.098 1.279l-1.425-2.641Zm100.454-.087-1.419 2.643a3 3 0 0 0 4.089-1.274l-2.67-1.369Zm41.861 52.503-.735-2.908a2.997 2.997 0 0 0-2.159 3.698l2.894-.79ZM253 248.56h-3a3 3 0 0 0 5.121 2.121L253 248.56Zm10.054-10.054-2.121-2.121 2.121 2.121Zm41.012 0-2.121 2.122 2.121-2.122Zm0 41.012 2.121 2.122-2.121-2.122ZM253 328.972l-1.448-2.627a3 3 0 0 0-1.552 2.627h3Zm-88 49.338h3a3 3 0 0 0-3.548-2.949l.548 2.949Zm-14 .174.475-2.963a3 3 0 0 0-3.475 2.963h3Zm-88-49.281h3a3 3 0 0 0-1.597-2.651L63 329.203Zm-6.946-5.137-2.121 2.121 2.121-2.121Zm-44.548-44.548-2.121 2.122 2.121-2.122Zm0-41.012 2.122 2.122-2.122-2.122Zm41.013 0-2.122 2.122 2.122-2.122ZM63 248.988l-2.121 2.121A2.999 2.999 0 0 0 66 248.988h-3ZM35 123.842c0 18.704 12.886 34.391 30.26 38.681l1.439-5.825C51.941 153.054 41 139.721 41 123.842h-6ZM74.842 84C52.838 84 35 101.838 35 123.842h6C41 105.151 56.151 90 74.842 90v-6Zm35.524 21.785C103.785 92.862 90.351 84 74.842 84v6c13.165 0 24.58 7.517 30.177 18.508l5.347-2.723ZM148 94c-15.095 0-29.311 3.803-41.733 10.506l2.85 5.281C120.685 103.544 133.924 100 148 100v-6Zm20 0h-20v6h20v-6Zm41.565 10.416C197.183 97.769 183.027 94 168 94v6c14.013 0 27.196 3.512 38.727 9.702l2.838-5.286ZM240.952 84c-15.471 0-28.878 8.82-35.476 21.691l5.34 2.737C216.427 97.481 227.819 90 240.952 90v-6Zm39.842 39.842c0-22.004-17.838-39.842-39.842-39.842v6c18.69 0 33.842 15.151 33.842 33.842h6Zm-30.052 38.629c17.269-4.364 30.052-20 30.052-38.629h-6c0 15.816-10.853 29.104-25.522 32.812l1.47 5.817ZM256 182a88.09 88.09 0 0 0-3.099-23.228l-5.788 1.58A82.082 82.082 0 0 1 250 182h6Zm0 66.56V182h-6v66.56h6Zm-.879 2.121 10.054-10.053-4.242-4.243-10.054 10.054 4.242 4.242Zm10.054-10.053c10.154-10.154 26.616-10.154 36.77 0l4.242-4.243c-12.496-12.497-32.758-12.497-45.254 0l4.242 4.243Zm36.77 0c10.153 10.153 10.153 26.615 0 36.769l4.242 4.243c12.497-12.497 12.497-32.758 0-45.255l-4.242 4.243Zm0 36.769-44.548 44.548 4.243 4.242 44.547-44.547-4.242-4.243Zm-44.548 44.548a26.013 26.013 0 0 1-5.845 4.4l2.896 5.255a32.006 32.006 0 0 0 7.192-5.413l-4.243-4.242ZM256 360v-31.028h-6V360h6Zm0 47v-47h-6v47h6Zm-25 25c13.807 0 25-11.193 25-25h-6c0 10.493-8.506 19-19 19v6Zm-44 0h44v-6h-44v6Zm-25-25c0 13.807 11.193 25 25 25v-6c-10.493 0-19-8.507-19-19h-6Zm0-28.69V407h6v-28.69h-6Zm-4.5 3.69c2.74 0 5.429-.253 8.048-.74l-1.096-5.899c-2.261.42-4.583.639-6.952.639v6Zm-6.975-.554c2.279.365 4.608.554 6.975.554v-6c-2.047 0-4.058-.163-6.025-.479l-.95 5.925ZM154 407v-28.516h-6V407h6Zm-25 25c13.807 0 25-11.193 25-25h-6c0 10.493-8.506 19-19 19v6Zm-44 0h44v-6H85v6Zm-25-25c0 13.807 11.193 25 25 25v-6c-10.493 0-19-8.507-19-19h-6Zm0-47v47h6v-47h-6Zm0-30.797V360h6v-30.797h-6Zm-6.067-3.016a32.008 32.008 0 0 0 7.664 5.668l2.806-5.303a26.002 26.002 0 0 1-6.228-4.607l-4.242 4.242ZM9.385 281.64l44.548 44.547 4.242-4.242-44.547-44.548-4.243 4.243Zm0-45.255c-12.497 12.497-12.497 32.758 0 45.255l4.243-4.243c-10.154-10.154-10.154-26.616 0-36.769l-4.243-4.243Zm45.255 0c-12.497-12.497-32.758-12.497-45.255 0l4.243 4.243c10.153-10.154 26.616-10.154 36.77 0l4.242-4.243Zm10.481 10.481L54.64 236.385l-4.243 4.243 10.482 10.481 4.242-4.243ZM60.001 182v66.988h6V182h-6Zm3.084-23.178A88.1 88.1 0 0 0 60 182h6c0-7.48 1.001-14.722 2.874-21.601l-5.789-1.577Z"
                />
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M267.721 234.712C241.49 266.061 202.073 286 158 286c-43.749 0-82.91-19.647-109.141-50.598-11.328-8.104-27.18-7.069-37.353 3.104-11.325 11.325-11.325 29.687 0 41.012l44.548 44.548A28.99 28.99 0 0 0 63 329.203V407c0 12.15 9.85 22 22 22h44c12.15 0 22-9.85 22-22v-28.517c2.123.341 4.293.517 6.5.517 2.555 0 5.06-.236 7.5-.69V407c0 12.15 9.85 22 22 22h44c12.15 0 22-9.85 22-22V328.972a29.004 29.004 0 0 0 6.518-4.906l44.548-44.548c11.325-11.325 11.325-29.687 0-41.012-9.875-9.875-25.099-11.139-36.345-3.794Z"
                  clipRule="evenodd"
                />
                <path
                  fill="url(#bb)"
                  fillOpacity=".5"
                  fillRule="evenodd"
                  d="M267.721 234.712C241.49 266.061 202.073 286 158 286c-43.749 0-82.91-19.647-109.141-50.598-11.328-8.104-27.18-7.069-37.353 3.104-11.325 11.325-11.325 29.687 0 41.012l44.548 44.548A28.99 28.99 0 0 0 63 329.203V407c0 12.15 9.85 22 22 22h44c12.15 0 22-9.85 22-22v-28.517c2.123.341 4.293.517 6.5.517 2.555 0 5.06-.236 7.5-.69V407c0 12.15 9.85 22 22 22h44c12.15 0 22-9.85 22-22V328.972a29.004 29.004 0 0 0 6.518-4.906l44.548-44.548c11.325-11.325 11.325-29.687 0-41.012-9.875-9.875-25.099-11.139-36.345-3.794Z"
                  clipRule="evenodd"
                />
                <path
                  fill="#000"
                  d="m267.721 234.712-1.64-2.511c-.248.162-.47.359-.66.586l2.3 1.925Zm-218.862.69 2.289-1.94a3.026 3.026 0 0 0-.544-.5l-1.745 2.44Zm-37.353 3.104 2.122 2.121-2.122-2.121Zm0 41.012-2.121 2.122 2.121-2.122Zm44.548 44.548-2.121 2.121 2.121-2.121ZM63 329.203h3a2.999 2.999 0 0 0-1.597-2.651L63 329.203Zm88 49.28.475-2.962a3 3 0 0 0-3.475 2.962h3Zm14-.173h3a3 3 0 0 0-3.548-2.949l.548 2.949Zm88-49.338-1.448-2.627a3 3 0 0 0-1.552 2.627h3Zm51.066-49.454 2.121 2.122-2.121-2.122Zm0-41.012-2.121 2.121 2.121-2.121Zm-38.645-5.719C239.735 263.484 201.148 283 158 283v6c44.999 0 85.245-20.361 112.022-52.362l-4.601-3.851ZM158 283c-42.831 0-81.167-19.23-106.852-49.538l-4.578 3.879C73.347 268.937 113.332 289 158 289v-6ZM13.628 240.627c9.118-9.118 23.331-10.049 33.486-2.785l3.49-4.88c-12.502-8.944-29.991-7.805-41.219 3.423l4.243 4.242Zm0 36.77c-10.154-10.154-10.154-26.616 0-36.77l-4.243-4.242c-12.497 12.497-12.497 32.758 0 45.255l4.243-4.243Zm44.547 44.548-44.547-44.548-4.243 4.243 44.548 44.547 4.242-4.242Zm6.228 4.607a26.002 26.002 0 0 1-6.228-4.607l-4.242 4.242a32.008 32.008 0 0 0 7.664 5.668l2.806-5.303ZM66 360v-30.797h-6V360h6Zm0 47v-47h-6v47h6Zm19 19c-10.493 0-19-8.507-19-19h-6c0 13.807 11.193 25 25 25v-6Zm44 0H85v6h44v-6Zm19-19c0 10.493-8.506 19-19 19v6c13.807 0 25-11.193 25-25h-6Zm0-28.517V407h6v-28.517h-6Zm9.5-2.483c-2.047 0-4.058-.163-6.025-.479l-.95 5.925c2.279.365 4.608.554 6.975.554v-6Zm6.952-.639c-2.261.42-4.583.639-6.952.639v6c2.74 0 5.429-.253 8.048-.74l-1.096-5.899ZM168 407v-28.69h-6V407h6Zm19 19c-10.493 0-19-8.507-19-19h-6c0 13.807 11.193 25 25 25v-6Zm44 0h-44v6h44v-6Zm19-19c0 10.493-8.506 19-19 19v6c13.807 0 25-11.193 25-25h-6Zm0-47v47h6v-47h-6Zm0-31.028V360h6v-31.028h-6Zm7.397-7.027a26.043 26.043 0 0 1-5.845 4.4l2.896 5.255a32.036 32.036 0 0 0 7.192-5.413l-4.243-4.242Zm44.548-44.548-44.548 44.548 4.243 4.242 44.547-44.547-4.242-4.243Zm0-36.77c10.153 10.154 10.153 26.616 0 36.77l4.242 4.243c12.497-12.497 12.497-32.758 0-45.255l-4.242 4.242Zm-32.583-3.403c10.081-6.585 23.732-5.447 32.583 3.403l4.242-4.242c-10.898-10.899-27.697-12.29-40.106-4.184l3.281 5.023Z"
                />
                <path
                  fill="#000"
                  d="M292.654 245.606a3 3 0 1 1-4.243-4.242l4.243 4.242Zm8.485-8.485-8.485 8.485-4.243-4.242 8.485-8.486 4.243 4.243ZM301.208 254.161a3 3 0 1 1-4.242-4.243l4.242 4.243Zm8.486-8.485-8.486 8.485-4.242-4.243 8.485-8.485 4.243 4.243ZM21.919 246.606a3 3 0 1 0 4.242-4.242l-4.242 4.242Zm-8.486-8.485 8.486 8.485 4.242-4.242-8.485-8.486-4.243 4.243ZM13.364 255.161a3 3 0 1 0 4.243-4.243l-4.243 4.243Zm-8.485-8.485 8.485 8.485 4.243-4.243-8.486-8.485-4.242 4.243Z"
                />
                <path
                  fill="#FF1E1E"
                  d="M113.322 154.665h88.371v13.25h-88.371z"
                />
                <path
                  fill="#000"
                  fillRule="evenodd"
                  d="M225.3 113.481c17.939 14.394 28.018 37.148 28.018 57.504H191.67c-.087-13.669-11.194-24.723-24.883-24.723h-18.56c-13.689 0-24.796 11.054-24.883 24.723H62c0-20.356 10.078-43.11 28.018-57.504C107.957 99.087 132.289 91 157.659 91c25.37 0 49.701 8.087 67.641 22.481Z"
                  clipRule="evenodd"
                />
                <circle cx="212.665" cy="197.079" r="8.079" fill="#000" />
                <circle cx="104.079" cy="197.079" r="8.079" fill="#000" />
                <path
                  fill="#000"
                  d="M179.165 211.683c0 8.21-9.868 17.451-20.845 17.451-10.977 0-20.845-9.241-20.845-17.451 0-8.211 9.868-12.281 20.845-12.281 10.977 0 20.845 4.07 20.845 12.281Z"
                />
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeWidth="6"
                  d="M198 417v12M222 417v12M95 417v12M119 417v12"
                />
                <circle
                  cx="158"
                  cy="143"
                  r="140"
                  fill="url(#cc)"
                  stroke="#000"
                  strokeWidth="6"
                />
                <g clipPath="url(#dd)">
                  <path
                    fill="#F5D949"
                    stroke="#000"
                    strokeWidth="6"
                    d="m217.543 305.943.704 1.692 1.826.146 12.818 1.027h.001a.17.17 0 0 1 .059.011l.002.001a.147.147 0 0 1 .037.065.15.15 0 0 1 .008.075l-.001.002c0 .001-.01.017-.041.044h-.001l-9.765 8.365-1.391 1.192.425 1.782 2.981 12.506h.001c.009.04.008.058.008.06l-.001.002a.148.148 0 0 1-.05.056.146.146 0 0 1-.069.031h-.002c-.002-.001-.02-.005-.054-.026l-10.974-6.702-1.564-.955-1.564.955-10.974 6.702a.177.177 0 0 1-.053.025l-.002.001c-.004-.001-.032-.005-.069-.032a.146.146 0 0 1-.051-.056l-.001-.002s-.001-.018.008-.058l.001-.001 2.981-12.506.425-1.782-1.391-1.192-9.765-8.365h-.001c-.031-.027-.04-.043-.041-.044l-.001-.002a.15.15 0 0 1 .008-.075.147.147 0 0 1 .037-.065l.002-.001a.17.17 0 0 1 .059-.011h.001l12.818-1.027 1.826-.146.704-1.692 4.938-11.875a.161.161 0 0 1 .028-.051l.001-.001a.146.146 0 0 1 .076-.016c.047 0 .072.013.076.016l.001.001c.001 0 .012.013.028.051l4.938 11.875Z"
                  />
                </g>
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeWidth="16"
                  d="M56.884 247.116A143.01 143.01 0 0 0 158 289a143.002 143.002 0 0 0 101.116-41.884"
                />
                <path
                  stroke="#000"
                  strokeWidth="6"
                  d="M65.035 404s25.382-6.618 41.965-6.5c17.059.121 43.035 7.5 43.035 7.5M164.012 403.977s25.961-5.606 42.932-5.472C224.402 398.642 251 405 251 405M25 290l7.769-4.072a57.001 57.001 0 0 0 25.067-26.121L62 251M254.363 252l3.867 7.873a57.002 57.002 0 0 0 25.452 25.746l8.694 4.394"
                />
                <defs>
                  <linearGradient
                    id="aa"
                    x1="158"
                    x2="158"
                    y1="0"
                    y2="286"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".219" />
                    <stop offset="1" stopColor="#fff" />
                  </linearGradient>
                  <linearGradient
                    id="bb"
                    x1="254"
                    x2="100"
                    y1="419"
                    y2="325"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopOpacity=".98" />
                    <stop offset="1" stopOpacity="0" />
                  </linearGradient>
                  <radialGradient
                    id="cc"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(165.9998 58.9999 -60.6938 170.7657 210 171)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".771" stopColor="#D9D9D9" stopOpacity="0" />
                    <stop offset="1" stopColor="#fff" stopOpacity=".63" />
                  </radialGradient>
                  <clipPath id="dd">
                    <path fill="#fff" d="M189 291h47v45h-47z" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </span>
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;
