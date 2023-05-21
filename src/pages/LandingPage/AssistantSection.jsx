const AssistantSection = () => {
  return (
    <>
      <div className=" block absolute  overflow-hidden object-fill">
        <img
          src="https://assets.website-files.com/63e15df811f9df22b231e58f/6400c41fffb999a7b855b9b1_Stars.svg"
          loading="lazy"
          alt=""
        />
      </div>
      <div
        id="assistant"
        className="px-[3%] flex justify-center items-center flex-col  w-full h-full relative"
      >
        <div className="w-[65rem] flex flex-col items-center pt-[32]">
          <div className="flex flex-col items-center justify-center ">
            <h1 className="flex text-[#ecedee] text-[5rem] font-semibold">
              Your AI personal
            </h1>
            <div className="flex text-[#ecedee] text-[5rem] font-semibold">
              assistant.
            </div>
            <div className="flex justify-center flex-col text-[20px]">
              <p className=" flex justify-center text-[#aab1b4]">
                Lindy is an AI assistant that can help with all your tasks,
              </p>
              <p className=" flex justify-center text-[#aab1b4]">
                from calendar management and email drafting to
              </p>
              <p className="flex justify-center text-[#aab1b4]">
                contract sending and beyond.
              </p>
            </div>
            <div className="flex justify-center items-center pt-[20px]">
              <div className="rounded-full border py-2 px-4">
                <input
                  type="text "
                  className="bg-transparent border-none outline-none"
                  placeholder="Email address*"
                />
              </div>
              <button className="font-semibold  py-2 px-4 text-[#11181c] bg-[#fff]  hover:shadow-inner ease-out duration-300 rounded-full">
                Join Beta
              </button>
            </div>
          </div>

          <div className=" flex justify-center items-center mt-8 flex-col ">
            <img
              src="./assets/imgs/bg/1.png"
              alt="1"
              className="w-[80%] backdrop-blur-[8px]"
            />
            <div
              className="w-full bg-[#09101b] h-[5rem] absolute bottom-[-5%]"
              style={{ filter: "blur(20px)" }}
            ></div>
          </div>
        </div>
        <div
          className="z-[-1]  bg-center bg-cover bg-no-repeat absolute top-0 bottom-0 left-0 right-0"
          style={{ backgroundImage: `url("/assets/imgs/svg/1.svg")` }}
        ></div>
      </div>
    </>
  );
};

export default AssistantSection;
