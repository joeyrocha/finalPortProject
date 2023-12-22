import React from 'react'
import ProfilePic from '/src/assets/images/profile.jpg'

export default function AboutMe2() {
  return (
    <section className="about-container" id="about">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <img
          src={ProfilePic}
          alt="Me sitting"
          className="about-image"
        />
        <ul className="aboutItems">
          <li className="aboutItem">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"/></svg>

            <div className="aboutItemText">
              <h3>Problem Solver</h3>
              <p>
                I do not shy away from problem solving and when confronted with an issue I will effectively devise a process that will resolve the issue.
              </p>
            </div>
          </li>
          <li className="aboutItem">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 640 512"><path d="M152.7 135.9l-10.4 57.2c6.8-.7 13.6-1.1 20.5-1.1h10.7c39.4 0 77.8 12.1 110.1 34.7L562.4 421.8l35.1 24.6c24.4-6 42.5-28.1 42.5-54.4c0-75.8-94.7-126.6-134.6-144.7L474 83.9C468.2 53.8 441.8 32 411.1 32h-2.7c-5.6 0-11.1 .7-16.5 2.2L199.2 85.5c-23.9 6.4-42 26-46.5 50.4zM0 384c0 35.3 28.7 64 64 64H544L265.3 252.9c-26.9-18.8-58.9-28.9-91.8-28.9H162.9c-60.6 0-116 34.2-143.1 88.4L13.5 325C4.6 342.7 0 362.3 0 382.2V384z"/></svg>
            <div className="aboutItemText">
              <h3>Curious</h3>
              <p>
                My curiosity fuels my passion for learning,driving me to explore diverse subjects and acquire new skills.
              </p>
            </div>
          </li>
          <li className="aboutItem">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/></svg>
            <div className="aboutItemText">
              <h3>Motivated</h3>
              <p>
              Whether diving into full-stack development or crafting data reports, I stay motivated and focused by consistently reminding myself of the ultimate objective.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
