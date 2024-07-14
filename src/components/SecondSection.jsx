import ImageDevices from '../assets/images/image-devices.png';

const SecondSection = () => {
  return (
    <section>
      <div className='pageCenter pt-20'>
        <h2 className='text-dark-grayish-blue text-center text-3xl font-semibold'>
          Access Clipboard Anywhere
        </h2>
        <div className='flex justify-center'>
          <p className='text-grayish-blue text-center mt-4 mb-12 max-w-[19.375rem]'>
            Whether you're on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
        </div>

        <img src={ImageDevices} alt='Image devices' />
      </div>
    </section>
  );
};

export default SecondSection;
