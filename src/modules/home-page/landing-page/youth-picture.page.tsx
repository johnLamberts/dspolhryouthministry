const YouthPicture = () => {
  return (
    <div className="relative">
      <hr className="text-neutral-300" />
      <a href="/">
        {/* <div className="flex">
          <img
            src={"/for-bg.jpg"}
            alt="Get in touch"
            className="flex-1 w-48 h-1/2 object-fill"
          />
          <img
            src={"/for-bg2.jpg"}
            alt="Get in touch"
            className="flex-1 w-48 h-1/2 object-fill"
          />
          <img
            src={"/for-bg3.jpg"}
            alt="Get in touch"
            className="flex-1 w-48 h-1/2 object-fill"
          />
          <img
            src={"/for-bg4.jpg"}
            alt="Get in touch"
            className="flex-1 w-48 h-1/2 object-fill"
          />
        </div> */}

        <img
          src={"/cta-button.svg"}
          alt="Get in touch"
          className="absolute xl:left-28 lg:left-[44%] md:left-[42%] left-[35%] -top-16"
        />
      </a>
    </div>
  );
};
export default YouthPicture;
