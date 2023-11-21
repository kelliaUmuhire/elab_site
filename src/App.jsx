import { useEffect, useState } from "react";
import { CHALLENGES, TEAM } from "./data";

export default function App() {
  const [challenge, setChallenge] = useState();
  const [active, setActive] = useState();

  useEffect(() => {
    setActive(0);
    setChallenge(CHALLENGES[0].content);
  }, []);
  return (
    <div className="text-white relative">
      <div className="relative min-h-[100vh]">
        {/* Nav */}
        <div className="flex lg:flex-row flex-col justify-between lg:px-14 px-10 py-8">
          <div className="font-logo text-3xl text-teal-500 uppercase">
            Alchemists
          </div>
          <div className="flex lg:space-x-8 space-x-5 text-base items-center pt-4 lg:pt-0">
            <a href="#team">Team</a>
            <a href="#mission">Mission</a>
            <a href="#challenges">Challenges</a>
            <a
              href="https://www.figma.com/file/qaGp3LOYtxqkEHB59RMSDa/E-Lab?type=design&node-id=42%3A828&mode=design&t=vCwmgn9WrgQpLblS-1"
              target="_blank"
              rel="noreferrer"
            >
              Our Solution
            </a>
            <hr className="border-t border-t-white w-7 rotate-90 lg:block hidden" />
            <a
              href="https://instagram.com/the___alchemists"
              className="lg:relative absolute lg:top-0 top-10 right-10 lg:right-0"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/insta.svg" />
            </a>
          </div>
        </div>
        {/* Intro */}
        <div className="flex lg:flex-row flex-col flex-wrap justify-between px-14 mt-20 items-center">
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <div className="text-2xl text-gray-300 tracking-wide">
              Hi there! We&#39;re,
            </div>
            <div className="uppercase tracking-wider text-5xl font-bold lg:mt-3 mt-10">
              the Alchemists 👨‍🔬
            </div>
          </div>
          <div className="flex flex-col space-y-6 lg:w-1/2 w-full relative lg:mt-0 mt-14 lg:pr-10">
            <div
              className="border-green lg:w-[30%] w-[50%] aspect-square lg:absolute relative lg:top-[30%] left-[7%] bg-contain bg-center"
              style={{ backgroundImage: `url(/Musa.jpg)` }}
            ></div>
            <div className="flex space-x-6 justify-end">
              <div
                className="border-green lg:w-[30%] w-[50%] aspect-square bg-contain bg-center"
                style={{ backgroundImage: `url(/Ratifa.jpg)` }}
              ></div>
              <div
                className="border-green lg:w-[30%] w-[50%] aspect-square bg-contain bg-center"
                style={{ backgroundImage: `url(/Sheryl.jpg)` }}
              ></div>
            </div>
            <div className="flex space-x-6 justify-end">
              <div
                className="border-green lg:w-[30%] w-[50%] aspect-square bg-contain bg-center"
                style={{ backgroundImage: `url(/Kellia.jpg)` }}
              ></div>
              <div
                className="border-green lg:w-[30%] w-[50%] aspect-square bg-contain bg-center"
                style={{ backgroundImage: `url(/Angelo.jpeg)` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 w-full opacity-[0.07] lg:h-[100vh] h-full overflow-hidden -z-10">
          <img src="/pattern.svg" className="w-[100%]" />
        </div>
      </div>
      {/* Mission */}
      <div
        className="min-h-[90vh] flex flex-col items-center justify-center px-14 bg-cover bg-center closing"
        style={{ backgroundImage: "url(/team.jpg)" }}
        id="mission"
      >
        <div className="text-4xl tracking-widest text-teal-500">
          Our Mission
        </div>
        <div className="mt-14 font-light lg:w-[60%] w-[100%] text-center text-lg">
          Our mission is to improve Rwanda&#39;s agriculture sector by enhancing
          the use of innovative technological infrastructure in order to
          increase the quality and quantity of Rwanda&#39;s agricultural output.
        </div>
      </div>
      <div className="min-h-[80vh] flex flew-wrap items-center justify-center px-14 tblack w-full">
        <div className="lg:w-1/2 w-full lg:px-10 px-8">
          <div className="text-2xl tracking-wide text-teal-500">
            The Problem
          </div>
          <div className="mt-8 font-light lg:w-[90%] w-[100%] text-justify text-base">
            Rwanda is a country of few natural resources, and the economy is
            based mostly on subsistence agriculture by local farmers using
            simple tools. Because Rwanda imports more products than it exports,
            using modern and sustainable technology can increase the
            productivity of the agriculture sector hence reducing the reliance
            of Rwanda on foreign imports.
          </div>
        </div>
        <div className="lg:w-1/2 w-full lg:pl-20 lg:pr-8 px-8 border-l border-l-gray-600">
          <div className="text-2xl tracking-wide text-teal-500">
            The Solution
          </div>
          <div className="mt-8 font-light lg:w-[90%] w-[100%] text-justify text-base">
            We aim to create a mobile application that links farmers to
            consumers of their farm produce alongside connecting them with
            organizations and individual that offer agricultural technological
            infrastructure such as tractors, combine harvesters for hire. This
            will enable the farmers get easy access to the market therefore able
            to generate more income.
          </div>
        </div>
      </div>
      {/* Challenges */}
      <div className="min-h-[80vh] relative" id="challenges">
        <div className="py-24 lg:px-14 px-10 relative z-5">
          <div className="text-4xl tracking-widest text-teal-500">
            Challenges
          </div>
          <div className="lg:flex justify-between mt-14">
            <div className="flex lg:flex-col flex-row lg:space-y-6 lg:w-[35%] w-full justify-between">
              {CHALLENGES.map((item, i) => (
                <div
                  key={i}
                  className={`tblack border-2 border-gray-800 rounded-lg flex lg:py-6 py-4 lg:px-10 px-4 cursor-pointer ${
                    active === i && "border-teal-700"
                  }`}
                  onClick={() => (setChallenge(item.content), setActive(i))}
                >
                  <div
                    className={`font-bold lg:text-6xl text-3xl w-[20%] text-gray-500 ${
                      active === i && "text-teal-500"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <div className="w-[80%] lg:block hidden">
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
              <div className="lg:w-[55%] w-full border-black tblack rounded-lg p-8 h-fit lg:mt-0 mt-10">
                {challenge.introType === "video" ? (
                  <video
                    src={challenge.intro}
                    controls
                    autoPlay
                    muted
                    className="lg:h-auto min-h-[18vh]"
                  ></video>
                ) : (
                  <div
                    style={{ backgroundImage: `url("${challenge.intro}")` }}
                    className="bg-cover bg-center w-full min-h-[60vh] rounded"
                  ></div>
                )}
                {challenge.link && (
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
                )}
                <div className="mt-6">{challenge.details}</div>
              </div>
            )}
          </div>
        </div>
        <div className="absolute top-0 w-full opacity-5 h-[100vh] overflow-hidden -z-30">
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
        <div className="flex flex-wrap items-center justify-center mt-20 lg:space-x-12">
          {TEAM.map((item, i) => (
            <div key={i} className="lg:w-[25%] w-full my-8">
              <div
                style={{ backgroundImage: `url("${item.picture}")` }}
                className="bg-cover bg-center w-full h-[50vh]"
              ></div>
              <div className="mt-2 text-base font-semibold">{item.name}</div>
              <div className="mt-0.5 text-gray-300 font-light text-sm">
                {item.email}
              </div>
              {/* <div className="text-sm mt-2 font-light text-gray-200">
                {item.intro}
              </div> */}
            </div>
          ))}
        </div>
      </div>
      {/* A Word */}
      <div className="min-h-[90vh] flex flex-col items-center justify-center px-14 bg-cover bg-center closing">
        <div className="font-light lg:w-[60%] w-full text-center text-xl relative ">
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
