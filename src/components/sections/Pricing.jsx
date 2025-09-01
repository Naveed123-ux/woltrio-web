import Data from "@data/sections/pricing.json";
import Link from "next/link";

const PricingSection = () => {
  return (
    <div className="mil-gray-bg mil-p-120-90">
      <div className="container">
        <div className="row justify-content-between mil-mb-120">
          <div className="col-xl-5">
            <h3 className="mil-link mil-appearance mil-accent mil-mb-30">
              Contact
            </h3>
            <h3 className="mil-mb-30 mil-appearance">
              Need a custom plan? Contact us for the best price.
            </h3>
          </div>
          <div className="col-xl-6">
            <p className="mil-appearance mil-mt-55-adapt mil-mb-30">
              {Data.description}
            </p>

            <div className="mil-appearance">
              <Link href={Data.button.link} className="mil-link-hover">
                {Data.button.label}
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="row">
          {Data.items.map((item, key) => (
            <div className="col-lg-4" key={`pricing-item-${key}`}>
              
              <div className="mil-price-card mil-appearance mil-mb-30">
                <h5 className="mil-mb-15">{item.name}</h5>
                <p className="mil-h6 mil-bold mil-mb-30">{item.subname}</p>

                <div className="mil-price-number mil-mb-10">{item.price}</div>
              

                <div className="mil-divider mil-mb-30"></div>

                <div className="pricing-scroll pr-2">
                  <ul className="mil-mb-30 space-y-2">
                    {item.list.map((element, key2) => (
                      <li
                        className={`flex gap-2 items-start ${
                          element.active != 1 ? "mil-empty" : ""
                        }`}
                        key={`pricing-item-${key}-list-${key2}`}
                      >
                        <div className="w-5 shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 mt-1"
                            viewBox="0 0 24 24"
                          >
                            <path d="M11.707,15.707C11.512,15.902,11.256,16,11,16s-0.512-0.098-0.707-0.293l-4-4c-0.391-0.391-0.391-1.023,0-1.414 s1.023-0.391,1.414,0L11,13.586l8.35-8.35C17.523,3.251,14.911,2,12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10 c0-1.885-0.531-3.642-1.438-5.148L11.707,15.707z" />
                          </svg>
                        </div>
                        <span className="text-sm">{element.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={item.button.link}
                  className="mil-button mil-button-lg mil-scale-down-trigger mil-buttons-space mt-3"
                >
                  <span>{item.button.label}</span>
                </Link>
              </div>
             
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default PricingSection;
