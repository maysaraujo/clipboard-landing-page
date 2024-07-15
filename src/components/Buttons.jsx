const Buttons = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-5 md:flex-row'>
      <button
        className='w-60	bg-strong-cyan text-white py-2.5 rounded-3xl font-semibold border-b-[3px]
          border-[#358478] shadow-[0_2px_5px_1px_rgba(38, 186, 164, 0.3)]'
      >
        Download for iOS
      </button>
      <button
        className='w-60	bg-light-blue text-white py-2.5 rounded-3xl font-semibold border-b-[3px]
          border-[#525BA5] shadow-[0_2px_5px_1px_rgba(97, 115, 255, 0.3)]'
      >
        Download for Mac
      </button>
    </div>
  );
};

export default Buttons;
