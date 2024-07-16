import { Button } from "@mui/material";
import LiveEvent from "../components/LiveEvent";
import HostingContent from "../components/HostingContent";
import Footer from "../components/Footer1";

const SpeakersPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[96px] leading-[normal] tracking-[normal] mq450:gap-[24px] mq750:gap-[48px]">
      <section className="ml-[-1px] self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[56.8px] box-border relative gap-[32.1px] max-w-full mq450:pb-[37px] mq450:box-border mq750:gap-[16px]">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px]">
          <img
            className="absolute top-[0px] left-[-1px] w-full h-full object-cover"
            alt=""
            src="/rectangle-121@2x.png"
          />
          <img
            className="absolute top-[0px] left-[-1px] w-full h-full mix-blend-normal z-[1]"
            alt=""
            src="/rectangle-101.svg"
          />
        </div>
        <div className="self-stretch h-[5.4px] relative shadow-[0px_8px_20px_rgba(209,_209,_209,_0.19)] z-[2]" />
        <header className="w-[1414.5px] flex flex-row items-start justify-start py-0 px-[75px] box-border max-w-full text-left text-14xl-6 text-white font-sacramento lg:pl-[37px] lg:pr-[37px] lg:box-border">
          <div className="flex-1 flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border gap-[3px] max-w-full">
            <img
              className="h-[57.3px] w-[58.9px] relative z-[2]"
              loading="lazy"
              alt=""
              src="/group4.svg"
            />
            <div className="w-[460.4px] flex flex-col items-start justify-start pt-[1.5px] pb-0 pr-5 pl-0 box-border max-w-full">
              <a className="[text-decoration:none] w-[201.3px] h-[63.9px] relative text-[inherit] inline-block shrink-0 whitespace-nowrap z-[2]">
                SatsangSeva
              </a>
            </div>
            <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
              <img
                className="w-[18px] h-5 relative overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/iconsmappin.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0 box-border max-w-full">
              <nav className="m-0 w-[544px] flex flex-row items-start justify-between gap-[20px] max-w-full text-left text-base text-white font-dm-sans lg:hidden">
                <div className="relative text-sm font-medium font-poppins inline-block min-w-[69px] whitespace-nowrap z-[2]">{`New Delhi `}</div>
                <a className="[text-decoration:none] relative font-medium text-[inherit] whitespace-nowrap z-[2]">
                  Upcoming Events
                </a>
                <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[111px] whitespace-nowrap z-[2]">
                  List Your Event
                </a>
                <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[84px] z-[2]">
                  Categories
                </a>
              </nav>
            </div>
            <Button
              className="h-[41px] w-[123.5px] z-[2]"
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                borderColor: "#fff",
                borderRadius: "50px",
                "&:hover": { borderColor: "#fff" },
                width: 123.5,
                height: 41,
              }}
            >
              Login
            </Button>
          </div>
        </header>
        <LiveEvent />
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[31px] box-border max-w-full">
        <HostingContent />
      </section>
      <Footer
        group="/group1.svg"
        facebook="/facebook.svg"
        twitter="/twitter.svg"
        linkedin="/linkedin.svg"
        group1="/group1.svg"
        footerAlignSelf="stretch"
        footerWidth="unset"
      />
    </div>
  );
};

export default SpeakersPage;
