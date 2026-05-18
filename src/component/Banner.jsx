import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="h-[93vh]  bg-[url('/assets/dog-and-cat.jpg')] bg-center bg-cover bg-no-repeat ">
        <div className="border   container h-[90vh] mx-auto py-10  flex justify-between items-center ">
          <div className="border h-full w-1/2 rounded-4xl backdrop-blur-xs backdrop-brightness-90 flex items-center  bg-[#fef6f6]/50 ">
            <h2 className="font-extrabold  text-[#f76c8b] text-4xl ">
              A loving home <br /> chages <br /> everything.
            </h2>
          </div>
          <div className=" w-1/2 border border-red-500 flex flex-col items-end justify-end self-end">
            {/* <Image src={dog}  className="" alt="dog" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
