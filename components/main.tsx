import { FC, StrictMode } from "react";

export const Main: FC = () => {
  return (
    <div className="text-[#c6e2e6] beyazbg">
          <div className="">
            <div className="flex w-screen bg-gradient-to-b from-[#020d1f] to-black pt-40 justify-center">
                <img className="w-4/6" src="assets/wwdc21_faces.png" alt="" />
              </div>
              <div className="bg-black pb-40">
                <div className="flex justify-center mb-2">
                      <svg fill="#d6d6d6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="70"><path d="M 16.125 1 C 14.972 1.067 13.648328 1.7093438 12.861328 2.5273438 C 12.150328 3.2713438 11.589359 4.3763125 11.818359 5.4453125 C 13.071359 5.4783125 14.329031 4.8193281 15.082031 3.9863281 C 15.785031 3.2073281 16.318 2.12 16.125 1 z M 16.193359 5.4433594 C 14.384359 5.4433594 13.628 6.5546875 12.375 6.5546875 C 11.086 6.5546875 9.9076562 5.5136719 8.3476562 5.5136719 C 6.2256562 5.5146719 3 7.4803281 3 12.111328 C 3 16.324328 6.8176563 21 8.9726562 21 C 10.281656 21.013 10.599 20.176969 12.375 20.167969 C 14.153 20.154969 14.536656 21.011 15.847656 21 C 17.323656 20.989 18.476359 19.367031 19.318359 18.082031 C 19.922359 17.162031 20.170672 16.692344 20.638672 15.652344 C 17.165672 14.772344 16.474672 9.1716719 20.638672 8.0136719 C 19.852672 6.6726719 17.558359 5.4433594 16.193359 5.4433594 z"/></svg>
                      <p className="text-7xl font-semibold">WWDC22</p>
                  </div>
                  <div className="flex justify-center">
                    <p className="md:w-5/12 w-10/12 md:text-2xl text-xl font-medium text-center">Introducing the all-new MacBook Air and 13-inch MacBook Pro, now supercharged with the Apple M2 chip. And preview exciting updates to iOS, iPadOS, macOS, and watchOS — packed with all-new features and capabilities.</p>
                  </div>
                  <div className="flex justify-center mt-6">
                    <div className="transition duration-500 p-2 px-4 rounded-full border-2 border-[#c6e2e6] hover:bg-[#c6e2e6] hover:text-black">
                      <a href="" className="font-medium">Watch the keynote</a>
                    </div>
                  </div>
              </div>
          </div>
          
          <div className="grid justify-items-center py-40 text-[#1d1d1f] space-y-10">
            <p className="md:text-6xl text-4xl font-semibold">MacBook Air</p>
            <img className="md:w w-4/6" src="https://www.apple.com/v/home/takeover/c/images/overview/macbook-air/macbookair__fwraic3xooa6_large.jpg" alt="" />
            <p className="md:w-5/12 w-10/12 text-2xl font-medium text-center">All-new strikingly thin design and next-generation M2 chip. Featuring a beautiful Liquid Retina display, 1080p FaceTime HD camera, four-speaker sound system, and up to 18 hours of battery life.</p>
            <div className="flex space-x-4 items-center">
              <p className="font-semibold text-2xl">Supercharged by</p>
              <img src="https://www.apple.com/v/home/takeover/c/images/overview/macbook-air/supercharged_mba__d3aczbb0h4ia_large.jpg" alt="" />
            </div>
            <p className="text-2xl font-semibold text-[#87868c]">Available next month</p>
            <div className="flex space-x-4">
              <div className="transition duration-500 p-2 px-4 rounded-full border-2 border-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white">
                <a href="" className="font-medium text-lg">Learn more</a>
              </div>
              <div className="transition duration-500 p-2 px-4 rounded-full border-2 border-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white">
                <a href="" className="font-medium text-lg">View pricing</a>
              </div>
            </div>
          </div>

    </div>
  );
};