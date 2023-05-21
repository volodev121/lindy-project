const SummonSection = () => {
  return (
    <div className="w-full px-12 pt-12 pb-[7rem] flex justify-between">
      <div className="pt-[30vh] pb-[30vh]">
        <h2>Summon from anywhere.</h2>
      </div>
      <div>
        <div className="video-list w-[600px]">
          <div className="video-item is-active">
            <div className="html-embed-4 w-embed">
              <video src="./assets/video/3.mp4" autoPlay></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummonSection;
