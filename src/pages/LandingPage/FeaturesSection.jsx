import Typist from "react-text-typist";
const FeaturesSection = () => {
  return (
    <div
      className="w-full "
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, .04), rgba(0, 0, 0, 0) 14%)",
      }}
    >
      <div
        className="h-[1px] w-full "
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255, 255, 255, .5), rgba(255, 255, 255, 0) 54%)",
        }}
      ></div>
      <div className="mt-[7rem] pb-6 flex justify-center items-center">
        <div className="w-[64rem] flex-col">
          <div
            className="rounded-lg flex justify-between items-center p-8"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 0, rgba(255, 255, 255, .05), rgba(255, 255, 255, 0)), linear-gradient(183deg, rgba(146, 127, 127, .1), rgba(25, 17, 77, 0))",
            }}
          >
            <div className="flex flex-col ">
              <h2 className="text-[32px] text-[#c9c9c9]">
                Lindy triages your email
              </h2>
              <p className="w-[80%]">
                She learns from your inbox and automatically surfaces the
                highest-priority emails for you.
              </p>
            </div>
            <div className="w-[45%]">
              <img src="./assets/imgs/bg/2.png" alt="" />
            </div>
          </div>
          <div className=" grid gap-6 grid-cols-2 justify-between pt-[24px]">
            <div className="flex flex-col">
              <div
                className="rounded-lg p-8 h-[14.88em]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 100% 0, rgba(255, 255, 255, .05), rgba(255, 255, 255, 0)), linear-gradient(68deg, rgba(19, 16, 36, .15), rgba(7, 64, 77, .3))",
                }}
              >
                <h1 className="text-[32px] text-[#c9c9c9] pb-[20px]">
                  Automatic conflict handling
                </h1>
                <img src="./assets/imgs/bg/3.png" alt="3" />
              </div>
              <div
                className="rounded-lg p-8 mt-[20px] h-[14.88em]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 100% 0, rgba(255, 255, 255, .1), rgba(255, 255, 255, 0)), linear-gradient(68deg, rgba(19, 16, 36, .3), rgba(74, 16, 65, .3))",
                }}
              >
                <h1 className="text-[32px] text-[#c9c9c9] pb-[20px]">
                  Contract
                  <br /> management
                </h1>
                <img src="./assets/imgs/bg/5.png" alt="5" />
              </div>
              <div
                className="rounded-lg p-8 mt-[20px] flex justify-between relative overflow-hidden h-[14.88em]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 50% 0, rgba(255, 255, 255, .05), rgba(255, 255, 255, 0)), linear-gradient(183deg, rgba(146, 127, 127, .1), rgba(25, 17, 77, 0))",
                }}
              >
                <div className="flex flex-col ">
                  <h1 className="text-[32px] text-[#c9c9c9] pb-[20px]">
                    Meeting
                    <br /> note taking
                  </h1>
                  <p className="w-[14rem]">
                    Lindy can join your meetings and take notes for you.
                  </p>
                </div>
                <div className="w-[20em] left-[53%] absolute">
                  <img src="./assets/imgs/bg/6.png" alt="5" />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div
                className="rounded-lg p-8 h-[31.34em]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(138deg, rgba(146, 127, 127, .2), rgba(25, 17, 77, 0))",
                }}
              >
                <h1 className="text-[32px] text-[#c9c9c9] pb-[20px]">
                  Daily briefing
                </h1>

                <img
                  src="./assets/imgs/bg/4.png"
                  alt="4"
                  style={{ width: "125%" }}
                />
              </div>
              <div
                className="rounded-lg h-[14.88em] p-8 mt-[20px] flex justify-between relative overflow-hidden"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 50% 0, rgba(255, 255, 255, .05), rgba(255, 255, 255, 0)), linear-gradient(186deg, rgba(82, 176, 143, .15), rgba(25, 17, 77, 0))",
                }}
              >
                <div className="flex flex-col ">
                  <h1 className="text-[32px] text-[#c9c9c9] pb-[20px]">
                    Summarization
                  </h1>
                  <p className="w-[14rem]">
                    Summarize podcasts, YouTube videos, emails, or web articles.
                  </p>
                </div>
                <div className="w-[50%]  top-[0%] bottom-0  absolute right-[-16%] left-auto">
                  <img
                    src="./assets/imgs/bg/7.png"
                    alt="5"
                    className="w-auto h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="rounded-lg flex justify-between items-center p-8 mt-[24px]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 0, rgba(255, 255, 255, .05), rgba(255, 255, 255, 0)), linear-gradient(183deg, rgba(146, 127, 127, .1), rgba(25, 17, 77, 0))",
            }}
          >
            <div className="flex flex-col items-center w-full  justify-center ">
              <div className="flex ">
                <h2 className="text-[32px] text-[#c9c9c9] mb-[1rem]">
                  Infinite personalization
                </h2>
              </div>
              <div className="border rounded-lg h-[50px] w-[50%]">
                <Typist
                  sentences={[
                    "First Sentence",
                    "Second Sentence",
                    "Third Sentence",
                  ]}
                  loop={true}
                  startDelay={200}
                  pauseTime={1000}
                  deletingSpeed={200}
                  typingSpeed={200}
                  cursorBlinkSpeed={800}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
