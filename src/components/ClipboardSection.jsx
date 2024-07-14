const ClipboardSection = () => {
  return (
    <section className='bg-white pt-20'>
      <div className='pageCenter'>
        <h2 className='text-dark-grayish-blue text-center text-3xl font-semibold'>
          Clipboard for iOS and Mac OS
        </h2>
        <div className='flex justify-center'>
          <p className='text-grayish-blue text-center mt-4 mb-12 max-w-[19.375rem]'>
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you're ready to start adding to your clipboard.
          </p>
        </div>

        <div className='flex justify-center items-center flex-col gap-5 pb-20'>
          <button className='bg-strong-cyan text-white py-2.5 rounded-3xl w-4/5 font-semibold'>
            Download for iOS
          </button>
          <button className='bg-light-blue text-white py-2.5 rounded-3xl w-4/5 font-semibold'>
            Download for Mac
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClipboardSection;
