import ImageComputer from '../assets/images/image-computer.png';

const FirstSection = () => {
  return (
    <section className='bg-white pt-20'>
      <div className='pageCenter'>
        <h2 className='text-dark-grayish-blue text-center text-3xl font-semibold'>
          Keep track of your snippets
        </h2>
        <div className='flex justify-center'>
          <p className='text-grayish-blue text-center mt-4 mb-12 max-w-[19.375rem]'>
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
        <img src={ImageComputer} alt='Image computer' />

        <h3 className='text-dark-grayish-blue text-center text-2xl font-semibold mt-8'>
          Quick Search
        </h3>
        <div className='flex justify-center'>
          <p className='text-grayish-blue text-center mt-4 max-w-[19.375rem]'>
            Easily search your snippets by content, category, web address,
            application, and more.
          </p>
        </div>

        <h3 className='text-dark-grayish-blue text-center text-2xl font-semibold mt-8'>
          iCloud Sync
        </h3>
        <div className='flex justify-center'>
          <p className='text-grayish-blue text-center mt-4 max-w-[19.375rem]'>
            Instantly saves and syncs snippets across all your devices.
          </p>
        </div>

        <h3 className='text-dark-grayish-blue text-center text-2xl font-semibold mt-8'>
          Complete History
        </h3>
        <div className='flex justify-center'>
          <p className='text-grayish-blue text-center mt-4 max-w-[19.375rem]'>
            Retrieve any snippets from the first moment you started using the
            app.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
