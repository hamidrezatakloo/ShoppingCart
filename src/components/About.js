const About = () => {
  return (
    <div className="grid grid-cols-12 w-11/12 mx-auto gap-[20px] flex-1">
      <img alt="actionFigure" src="./about.webp" className="col-span-6" />
      <div className="col-span-6 flex justify-center items-center flex-col gap-20">
        <h2 className="font-PassionOne text-4xl">what is an action figure</h2>
        <p className="font-[Poppins] text-2xl capitalize">
          An action figure is a poseable character model figure made most
          commonly of plastic, and often based upon characters from a film,
          comic book, military, video game or television program; fictional or
          historical. These figures are usually marketed toward boys and adult
          collectors.
        </p>
      </div>
    </div>
  );
};

export default About;
