import { FC, StrictMode } from "react";

export const Main: FC = () => {
  return (
    <div className="text-[#c6e2e6] beyazbg space-y-4">  
      <div className="flex bg-[#fbfbfb] justify-center items-center py-20 text-[#1d1d1f]">
        <div className="flex w-10/12 items-center justify-center">
          <div className="flex items-center">
            <div className="grid space-y-3 justify-items-center ">
              <p className="md:text-5xl text-4xl font-semibold tracking-tight">MacBook Air</p>
                <div className="flex space-x-4 items-center">
                  <p className=" font-light text-2xl">Supercharged by</p>
                  <img className="" src="https://www.apple.com/v/home/takeover/c/images/overview/macbook-air/supercharged_mba__d3aczbb0h4ia_large" alt="" />
                </div>
                <p className="text-gray-500 font-medium text-xl">Available next month</p>
                <div className="flex space-x-2 font-medium text-xl">
                  <a className="flex items-center text-blue-600" href="">Learn more <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></a>
                  <a className="flex items-center text-blue-600" href="">View pricing <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></a>
                </div>
            </div>
          </div>
              <div className="flex w-1/2 justify-items-center">
                <img className="" src="/assets/macbookair.png" alt="" />
              </div>
        </div>
      </div>
      <div className="flex bg-[#fbfbfd] justify-center items-center pt-16 text-[#1d1d1f]">
        <div className="grid justify-items-center space-y-1">
          <p className="text-5xl font-semibold">iPhone 13</p>
          <p className="text-2xl">Your new superpower.</p>
          <div className="flex space-x-4 text-xl">
            <a className="flex items-center text-blue-600" href="">Learn more <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></a>
            <a className="flex items-center text-blue-600" href="">Buy <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></a>
          </div>
          <div>
            <img src="/assets/iphone.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="grid space-y-1.5 justify-items-center bg-rgb bg-cover py-8 airpods">
        <p className="text-5xl font-semibold">AirPods</p>
        <p className="text-2xl font-medium">with Spatial Audio</p>
        <div className="flex space-x-4 text-lg">
            <a className="flex items-center" href="">Learn more <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></a>
            <a className="flex items-center" href="">Buy <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></a>
          </div>
      </div>
    </div>
  );
};