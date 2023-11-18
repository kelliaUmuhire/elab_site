import { useState } from "react";
import { CHALLENGES, TEAM } from "./data";

export default function App() {
  const [challenge, setChallenge] = useState();
  const [active, setActive] = useState();
  return (
    <div className="text-white relative">
      <div className="relative min-h-[100vh]">
        {/* Nav */}
        <div className="flex md:flex-row flex-col justify-between md:px-14 px-10 py-8">
          <div className="font-logo text-3xl text-teal-500 uppercase">
            Alchemists
          </div>
          <div className="flex md:space-x-8 space-x-5 text-base items-center pt-4 md:pt-0">
            <a href="#team">Team</a>
            <a href="#mission">Mission</a>
            <a href="#challenges">Challenges</a>
            <a href="/">Our Solution</a>
            <hr className="border-t border-t-white w-7 rotate-90 md:block hidden" />
            <a
              href="https://instagram.com/the___alchemists"
              className="md:relative absolute md:top-0 top-10 right-10 md:right-0"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/insta.svg" />
            </a>
          </div>
        </div>
        {/* Intro */}
        <div className="flex md:flex-row flex-col flex-wrap justify-between px-14 mt-20 items-center">
          <div className="md:w-1/2 w-full text-center md:text-left">
            <div className="text-2xl text-gray-300 tracking-wide">
              Hi there! We&#39;re,
            </div>
            <div className="uppercase tracking-wider text-5xl font-bold md:mt-3 mt-10">
              the Alchemists
            </div>
          </div>
          <div className="flex flex-col space-y-6 md:w-1/2 w-full relative md:mt-0 mt-14">
            <div
              className="border-green md:w-[25%] w-[50%] aspect-square md:absolute relative md:top-[30%] left-[25%] bg-contain bg-center"
              style={{ backgroundImage: `url(/Musa.jpeg)` }}
            ></div>
            <div className="flex space-x-6 justify-end">
              <div
                className="border-green md:w-[25%] w-[50%] aspect-square bg-contain bg-center"
                style={{ backgroundImage: `url(/Ratifa.jpeg)` }}
              ></div>
              <div
                className="border-green md:w-[25%] w-[50%] aspect-square bg-contain bg-center"
                style={{ backgroundImage: `url(/Sheryl.jpeg)` }}
              ></div>
            </div>
            <div className="flex space-x-6 justify-end">
              <div
                className="border-green md:w-[25%] w-[50%] aspect-square bg-contain bg-center"
                style={{ backgroundImage: `url(/Kellia.jpg)` }}
              ></div>
              <div className="border-green md:w-[25%] w-[50%] aspect-square bg-contain bg-center"></div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 w-full opacity-[0.07] md:h-[100vh] h-full overflow-hidden -z-10">
          <img src="/pattern.svg" className="w-[100%]" />
        </div>
      </div>
      {/* Team */}
      <div
        className="min-h-[80vh] flex flex-col items-center justify-center px-14 py-24"
        id="team"
      >
        <div className="text-4xl tracking-widest text-teal-500">
          Meet The Team
        </div>
        <div className="flex flex-wrap items-center justify-center mt-20 md:space-x-20">
          {TEAM.map((item, i) => (
            <div key={i} className="md:w-[30%] w-full my-8">
              <div
                style={{ backgroundImage: `url("${item.picture}")` }}
                className="bg-cover bg-center w-full h-[50vh]"
              ></div>
              <div className="mt-2 text-lg">{item.name}</div>
              <div className="mt-0.5 text-gray-200 font-light text-sm">
                Faculty: {item.faculty}
              </div>
              <div className="text-sm mt-2 font-light text-gray-200">
                {item.intro}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Mission */}
      <div
        className="min-h-[80vh] flex flex-col items-center justify-center px-14 tblack"
        id="mission"
      >
        <div className="text-4xl tracking-widest text-teal-500">
          Our Mission
        </div>
        <div className="mt-14 font-light md:w-[60%] w-[100%] text-center text-lg">
          Our mission is to improve Rwanda&#39;s agriculture sector by enhancing
          the use of innovative technological infrastructure in order to
          increase the quality and quantity of Rwanda&#39;s agricultural output.
        </div>
      </div>
      {/* Challenges */}
      <div className="min-h-[80vh] relative" id="challenges">
        <div className="py-24 md:px-14 px-10 relative z-5">
          <div className="text-4xl tracking-widest text-teal-500">
            Challenges
          </div>
          <div className="md:flex justify-between mt-14">
            <div className="flex md:flex-col flex-row md:space-y-6 md:w-[35%] w-full justify-between">
              {CHALLENGES.map((item, i) => (
                <div
                  key={i}
                  className={`tblack border-2 border-gray-800 rounded-lg flex md:py-6 py-4 md:px-10 px-4 cursor-pointer ${
                    active === i && "border-teal-700"
                  }`}
                  onClick={() => (setChallenge(item.content), setActive(i))}
                >
                  <div
                    className={`font-bold md:text-6xl text-3xl w-[20%] text-gray-500 ${
                      active === i && "text-teal-500"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <div className="w-[80%] md:block hidden">
                    <div className="text-lg font-semibold capitalize">
                      {item.name}
                    </div>
                    <div className="mt-1 text-gray-400 text-sm">
                      {item.intro}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {challenge && (
              <div className="md:w-[55%] w-full border-black tblack rounded-lg p-8 h-fit md:mt-0 mt-10">
                {challenge.introType === "video" ? (
                  <video
                    src={challenge.intro}
                    controls
                    autoPlay
                    muted
                    className="md:h-auto min-h-[18vh]"
                  ></video>
                ) : (
                  <div
                    style={{ backgroundImage: `url("${challenge.intro}")` }}
                    className="bg-cover bg-center w-full min-h-[50vh]"
                  ></div>
                )}
                <div className="flex space-x-3 mt-6 items-center">
                  <img src="/link.svg" className="w-5" />
                  <a
                    className="text-teal-500"
                    href={challenge.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {challenge.linkTo}
                  </a>
                </div>
                <div className="mt-6">{challenge.details}</div>
              </div>
            )}
          </div>
        </div>
        <div className="absolute top-0 w-full opacity-5 h-[100vh] overflow-hidden -z-30">
          <img src="/pattern.svg" className="w-[100%]" />
        </div>
      </div>
      {/* A Word */}
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-14 bg-cover bg-center closing">
        <div className="font-light md:w-[60%] w-full text-center text-xl relative ">
          <div className="absolute top-0 -left-1 text-teal-500">&#34;</div>
          E-Lab was a great opportunity for us to collaborate, challenge
          ourselves, and learn new things. We&#39;re incredibly grateful for the
          experience.
          <div className="absolute top-0 -right-1 text-teal-500">&#34;</div>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-black border-t border-t-gray-800 text-center p-8 text-gray-400 text-sm tracking-wide">
        Made by <b>The Alchemists</b> with <span className="text-lg">💚</span>
      </div>
    </div>
  );
}
