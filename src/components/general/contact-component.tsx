import React from "react";

const ContactComponent = () => {
  return (
    <div
      className={"h-80 bg- mt-32 relative"}
      style={{
        backgroundImage: 'url("./contact.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className={"bg-black/40 absolute w-full h-full z-10"} />
      <div
        className={"relative z-[100] flex items-center justify-center h-full"}
      >
        <div className={"text-center"}>
          <h2 className={"text-5xl text-white font-bold "}>
            Get in touch with us
          </h2>
          <p className={"text-white text-lg font-bold my-5"}>
            Contact us today for more information or to request a quote.
          </p>
          <button className={"bg-black text-white px-4 py-2"}>
            Contact US
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
