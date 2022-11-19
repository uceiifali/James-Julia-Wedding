import React from "react";

const Story = () => {
  return (
    <div
      id="story"
      className="h-[70vh] flex items-center flex-col lg:flex-row justify-evenly w-full mt-20"
    >
      <div className="flex items-center justify-center">
        <h1 className="lg:text-6xl text-5xl font-bold font-inter lg:w-[20%]">
          Our Story
        </h1>
      </div>
      <div className="flex items-center  flex-col w-[50%] lg:w-[20%]">
        <p className="text-[#777777] font-semibold text-sm ">
          Nunc euismod facilisis rutrum. Morbi viverra libero nisl, non placerat
          justo auctor sed. Donec et facilisis sem, nec cursus massa.
        </p>
        <p className="text-[#777777] font-semibold text-sm mt-6">
          Duis in felis sit amet velit malesuada feugiat in ut mauris. Vivamus
          vel sagittis elit, eu cursus augue. Nullam sollicitudin est sed urna
          ullamcorper, id interdum mi viverra. Vivamus dictum varius massa a
          pretium. Integer nec mattis neque. Nullam euismod ipsum ante, non
          aliquet lacus ullamcorper eu. Fusce quis neque sit amet odio tincidunt
          tempus id maximus neque.
        </p>
        <button className="border-b font-inter font-bold text-xs text-[#555555] items-start justify-start mt-4">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Story;
