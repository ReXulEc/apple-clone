import { FC, StrictMode } from "react";

export const Footer: FC = () => {
  return (
     <div className="flex justify-center bg-[#f5f5f7] p-4">
         <div className="w-8/12">
            <div>
                <p className="mb-4 text-xs text-gray-500">Features are subject to change. Some features, applications, and services may not be available in all regions or languages.</p>
            </div>
            <div className="mb-4 w-full h-0.5 bg-gray-300"></div>
            <div className="mb-4 flex justify-between">
                <div>
                    <p className="text-[#2d2d2f] text-xs font-semibold">Shop and Learn</p>
                    {CONFIG.one.map((r) => (
                        <div>
                            <a href={'#' + r.title + 'Footer'} className=" text-xs text-[#424245]">{r.title}</a>
                        </div>
                    ))}
                </div>
                <div>
                    <p className="text-[#2d2d2f] text-xs font-semibold">Services</p>
                    {CONFIG.two.map((r) => (
                        <div>
                            <a href={'#' + r.title + 'Footer'} className=" text-xs text-[#424245]">{r.title}</a>
                        </div>
                    ))}
                    <p className="text-[#2d2d2f] text-xs font-semibold mt-5">Account</p>
                    {CONFIG.three.map((r) => (
                        <div>
                            <a href={'#' + r.title + 'Footer'} className=" text-xs text-[#424245]">{r.title}</a>
                        </div>
                    ))}
                </div>
                <div>
                    <p className="text-[#2d2d2f] text-xs font-semibold">Apple Store</p>
                    {CONFIG.four.map((r) => (
                        <div>
                            <a href={'#' + r.title + 'Footer'} className=" text-xs text-[#424245]">{r.title}</a>
                        </div>
                    ))}
                </div>
                <div>
                    <p className="text-[#2d2d2f] text-xs font-semibold">For Bussines</p>
                    {CONFIG.five.map((r) => (
                        <div>
                            <a href={'#' + r.title + 'Footer'} className=" text-xs text-[#424245]">{r.title}</a>
                        </div>
                    ))}
                    <p className="text-[#2d2d2f] text-xs font-semibold mt-5">For Education</p>
                    {CONFIG.six.map((r) => (
                        <div>
                            <a href={'#' + r.title + 'Footer'} className=" text-xs text-[#424245]">{r.title}</a>
                        </div>
                    ))}
                    <p className="text-[#2d2d2f] text-xs font-semibold mt-5">For Healthcare</p>
                    {CONFIG.seven.map((r) => (
                        <div>
                            <a href={'#' + r.title + 'Footer'} className=" text-xs text-[#424245]">{r.title}</a>
                        </div>
                    ))}
                    <p className="text-[#2d2d2f] text-xs font-semibold mt-5">For Governmant</p>
                    {CONFIG.eight.map((r) => (
                        <div>
                            <a href={'#' + r.title + 'Footer'} className=" text-xs text-[#424245]">{r.title}</a>
                        </div>
                    ))}
                </div>
                <div>
                    <p className="text-[#2d2d2f] text-xs font-semibold">Apple Values</p>
                    {CONFIG.nine.map((r) => (
                        <div>
                            <a href={'#' + r.title + 'Footer'} className=" text-xs text-[#424245]">{r.title}</a>
                        </div>
                    ))}
                    <p className="text-[#2d2d2f] text-xs font-semibold mt-5">About Apple</p>
                    {CONFIG.ten.map((r) => (
                        <div>
                            <a href={'#' + r.title + 'Footer'} className=" text-xs text-[#424245]">{r.title}</a>
                        </div>
                    ))}
                </div>
            </div>
            <div>
              <p className="mb-1 text-xs text-gray-500">More ways to shop: <a className="text-blue-500">Find an Apple Store</a> or <a className="text-blue-500">other retailer</a> near you. Or call 1-800-MY-APPLE..</p>
            </div>
            <div className="w-full h-0.5 bg-gray-300 mb-1"></div>
            <div className="flex justify-between w-full">
              <div>
                <p className="text-xs text-gray-500">Coded {"&"} barely designed by ReXulEc. All rights reserved.</p>
              </div>
              <div className="flex space-x-2">
                <a className="text-xs text-stone-700">Privacy Policy</a>
                <div className="h-full w-0.5 bg-stone-400"></div>
                <a className="text-xs text-stone-700">Terms of Use</a>
                <div className="h-full w-0.5 bg-stone-400"></div>
                <a className="text-xs text-stone-700">Sales and Returns</a>
                <div className="h-full w-0.5 bg-stone-400"></div>
                <a className="text-xs text-stone-700">Legal</a>
                <div className="h-full w-0.5 bg-stone-400"></div>
                <a className="text-xs text-stone-700">Site Map</a>
              </div>
              <div>
                <p className="text-xs text-gray-500">United States</p>
              </div>
            </div>
         </div>
     </div>
  );
};

export const CONFIG = {

    one: [
      {
        title: "Store"
      },
      {
        title: "Mac"
      },
      {
        title: "iPad"
      },
      {
        title: "iPhone"
      },
      {
        title: "Watch"
      },
      {
        title: "Airpods"
      },
      {
        title: "TV & Home"
      },
      {
        title: "AirTag"
      },
      {
        title: "Accessories"
      },
      {
        title: "Gift Cards"
      }
    ] as one[],

  
  two: [
    {
      title: "Apple Music"
    },
    {
      title: "Apple TV+"
    },
    {
      title: "Apple Fitness+"
    },
    {
      title: "Apple News+"
    },
    {
      title: "Apple Arcade"
    },
    {
      title: "iCloud"
    },
    {
      title: "Apple One"
    },
    {
      title: "Apple Card"
    },
    {
      title: "Apple Books"
    },
    {
      title: "Apple Podcasts"
    },
    {
      title: "App Store"
    }
  ] as two[],

  three: [
    {
      title: "Manage Your Apple ID"
    },
    {
      title: "Apple Store Account"
    },
    {
      title: "iCloud.com"
    }
  ] as three[],


  four: [
    {
      title: "Find a Store"
    },
    {
      title: "Genius Bar"
    },
    {
      title: "Today at Apple"
    },
    {
      title: "Apple Camp"
    },
    {
      title: "Apple Store App"
    },
    {
      title: "Refurbished and Clearance"
    },
    {
      title: "Financing"
    },
    {
      title: "Apple Trade In"
    },
    {
      title: "Order Status"
    },
    {
      title: "Shopping Help"
    }
  ] as four[],

  five: [
    {
      title: "Apple and Business"
    },
    {
      title: "Shop for Business"
    }
  ] as five[],

  six: [
    {
      title: "Apple and Education"
    },
    {
      title: "Shop for K12"
    },
    {
      title: "Shop for Collage"
    }
  ] as six[],

  seven: [
    {
      title: "Apple in Healthcare"
    },
    {
      title: "Health on Apple Watch"
    },
    {
      title: "Health Records on iPhone"
    }
  ] as seven[],

  eight: [
    {
      title: "Shop for Governmant"
    },
    {
      title: "Shop for Vetarans and Military"
    }
  ] as eight[],

  nine: [
    {
      title: "Accessibility"
    },
    {
      title: "Education"
    },
    {
      title: "Environment"
    },
    {
      title: "Inclusion and Diversity"
    },
    {
      title: "Privacy"
    },
    {
      title: "Racial Equity and Justice"
    },
    {
      title: "Supplier Responsibility"
    },
  ] as nine[],

  ten: [
    {
      title: "Newsroom"
    },
    {
      title: "Apple Leadership"
    },
    {
      title: "Career Opportunities"
    },
    {
      title: "Investors"
    },
    {
      title: "Ethics & Compliance"
    },
    {
      title: "Events"
    },
    {
      title: "Contact Apple"
    },
  ] as ten[],
}


  interface one {
    title: string;
  }

  interface two {
    title: string;
  }

  interface three {
    title: string;
  }

  interface four {
    title: string;
  }

  interface five {
    title: string;
  }

  interface six {
    title: string;
  }

  interface seven {
    title: string;
  }

  interface eight {
    title: string;
  }

  interface nine {
    title: string;
  }

  interface ten {
    title: string;
  }