const Buttons = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-5 md:flex-row'>
      <button
        className='w-48	bg-strong-cyan text-white py-2.5 rounded-3xl font-semibold border-b-[3px]
          border-[#358478] shadow-[0px_10px_27px_-12px_rgba(86,220,200,1)] transition ease-in-out delay-75 hover:opacity-60'
      >
        Download for iOS
      </button>
      <button
        className='w-48	bg-light-blue text-white py-2.5 rounded-3xl font-semibold border-b-[3px]
          border-[#525BA5] shadow-[0px_10px_27px_-12px_rgba(0,0,0,0.3)] transition ease-in-out delay-75 hover:opacity-60'
      >
        Download for Mac
      </button>
    </div>
  );
};

export default Buttons;
