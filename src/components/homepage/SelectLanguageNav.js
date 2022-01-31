import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Button from '@mui/material/Button';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'



const SelectLanguageNav = (props) => {
  const [boolinOnScroll, setboolinOnScroll] = useState(true)
  const [languageColor, setLanguageColor] = useState(false)


  useScrollPosition(({ prevPos, currPos }) => {
    const isShow = currPos.y < prevPos.y
    if (isShow !== languageColor) setLanguageColor(isShow)
  }, [languageColor])


  const languageTag = {
    fa: "SV - Svarige",
    en: "EN - English"
  }
  const links = props.langs.map((lang, index) => {
    return (
      <Link key={index}
        to={lang.link}
        alt={lang.langKey}
      >
        {lang.selected ? "" : <Button color="primary">
          {languageTag[`${lang.langKey}`]}
        </Button>}

      </Link>
    );
  });
  return (
    <div>
      <div onMouseOver={(event) => setLanguageColor(true)} onScroll={(event) => setLanguageColor(true)} onMouseOut={(event) => setLanguageColor(false)}><svg id="langauge" sx={languageColor ? {
        '& > *': {
          '& #z1': {
            fill: "#f5f5f5"
          },
          '& #z2': {
            fill: "#eee"
          },
          '& #z3': {
            fill: "#607d8b"
          },
          '& #z4': {
            fill: "#2196f3"
          },
          '& #z5': {
            fill: "#1565c0"
          },
          '& #z6': {
            fill: "#f5f5f5"
          }
        }
      } : ""} enableBackground="new 0 0 512 512" height={24} viewBox="0 0 512 512" width={24} xmlns="http://www.w3.org/2000/svg"><g>
          <path id="z1" d="m285.426 506h195.668c17.069 0 30.906-13.822 30.906-30.871v-348.169c0-17.05-13.837-30.871-30.905-30.871h-252.915z" fill="#f5f5f5" />
          <path id="z2" d="m481.095 96.088h-30.905c17.069 0 30.905 13.822 30.905 30.871v348.169c0 17.05-13.837 30.871-30.905 30.871h30.905c17.068.001 30.905-13.821 30.905-30.87v-348.169c0-17.05-13.837-30.872-30.905-30.872z" fill="#eee" />
          <path id="z3" d="m457.576 245.384h21.458c1.138 0 2.06-.922 2.06-2.06v-26.785c0-1.138-.922-2.06-2.06-2.06h-70.483c-1.138 0-2.06-.922-2.06-2.06v-19.291c0-1.138-.922-2.06-2.06-2.06h-26.785c-1.138 0-2.06.922-2.06 2.06v19.291c0 1.138-.922 2.06-2.06 2.06h-70.482c-1.138 0-2.06.922-2.06 2.06v26.785c0 1.138.922 2.06 2.06 2.06h115.969c1.534 0 2.537 1.615 1.844 2.983-6.056 11.955-15.209 27.311-28.242 42.919-.82.982-2.35.982-3.17 0-7.965-9.539-14.479-18.979-19.712-27.596-.588-.969-1.841-1.285-2.815-.705l-23.018 13.696c-.982.584-1.31 1.853-.718 2.83 6.433 10.617 14.582 22.341 24.699 34.138.742.865.661 2.171-.206 2.91-14.575 12.44-32.139 23.861-53.152 32.444-1.047.427-1.562 1.611-1.146 2.662l9.87 24.9c.422 1.064 1.635 1.589 2.695 1.157 23.176-9.439 44.622-22.734 63.71-39.357.776-.676 1.919-.678 2.694-.002 17.26 15.068 38.307 28.988 63.79 39.358 1.06.431 2.274-.091 2.696-1.155l9.871-24.902c.417-1.051-.099-2.234-1.146-2.662-21.027-8.589-38.592-20.015-53.166-32.45-.867-.739-.952-2.039-.209-2.903 6.103-7.098 11.859-14.6 17.231-22.49 12.175-17.884 19.903-34.043 24.261-44.504.32-.768 1.068-1.271 1.902-1.271z" fill="#868e96d1" />
          <path id="z4" d="m367.178 404.876-133.968-393.543c-1.086-3.189-4.083-5.333-7.455-5.333h-194.85c-17.068 0-30.905 13.822-30.905 30.871v337.134c0 17.05 13.837 30.871 30.905 30.871z" fill='rgb(84, 89, 95)' />
          <path id="z5" d="m367.178 404.876-81.752 101.124-43.989-101.124z" fill="#343a40" />
          <path id="z6" d="m229.056 196.764c.76 0 1.375.616 1.375 1.375v14.442c0 5.405-.502 10.69-1.465 15.817-7.449 39.823-42.533 69.918-84.585 69.628-47.186-.325-84.949-38.451-84.845-85.638.104-47.102 38.321-85.255 85.448-85.255 23.089 0 44.037 9.16 59.418 24.038.555.537.57 1.422.023 1.968l-20.431 20.431c-.526.526-1.376.54-1.915.027-9.653-9.189-22.714-14.83-37.095-14.83-29.697 0-53.611 23.744-53.812 53.44-.203 29.891 23.968 54.186 53.812 54.186 24.214 0 44.694-15.996 51.447-37.996h-50.072c-.76 0-1.375-.616-1.375-1.375v-28.882c0-.76.616-1.375 1.375-1.375h82.697z" fill="#f5f5f5" /></g></svg> {links}
      </div>
    </div>
  );
};

SelectLanguageNav.propTypes = {
  langs: PropTypes.array,
};

export default SelectLanguageNav;
