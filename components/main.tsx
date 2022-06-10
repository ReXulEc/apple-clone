import { FC, StrictMode } from "react";

export const Main: FC = () => {
  return (
    <div className="text-[#c6e2e6] beyazbg">  
      <div className="flex justify-center items-center py-40 text-[#1d1d1f]">
        <div className="flex w-10/12 items-center justify-center">
          <div className="flex items-center">
            <div className="grid space-y-4 justify-items-center ">
              <p className="md:text-6xl text-xl font-semibold tracking-tight">MacBook Air</p>
                <div className="flex space-x-4 items-center">
                  <p className=" font-light text-2xl">Supercharged by</p>
                  <img src="https://www.apple.com/v/home/takeover/c/images/overview/macbook-air/supercharged_mba__d3aczbb0h4ia_large.jpg" alt="" />
                </div>
                <p className="text-gray-500 font-medium text-xl">Available next month</p>
            </div>
          </div>
              <div className="flex w-1/2 justify-items-center">
                <img className="" src="https://www.apple.com/v/home/takeover/c/images/overview/macbook-air/macbookair__fwraic3xooa6_large.jpg" alt="" />
              </div>
        </div>
      </div>
    </div>
  );
};