import Buttons from './Buttons';

const ClipboardSection = () => {
  return (
    <section className='bg-white py-20'>
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

        <Buttons />
      </div>
    </section>
  );
};

export default ClipboardSection;
