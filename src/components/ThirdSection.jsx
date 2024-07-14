import IconBlackList from '../assets/images/icon-blacklist.svg';
import IconText from '../assets/images/icon-text.svg';
import IconPreview from '../assets/images/icon-preview.svg';

const ThirdSection = () => {
  return (
    <section className='bg-white pt-20'>
      <div className='pageCenter'>
        <h2 className='text-dark-grayish-blue text-center text-3xl font-semibold'>
          Superchange your workflow
        </h2>
        <div className='flex justify-center'>
          <p className='text-grayish-blue text-center mt-4 mb-16 max-w-[19.375rem]'>
            We've got the tools to boost your productivity.
          </p>
        </div>

        <div className='flex justify-center'>
          <img src={IconBlackList} alt='Blacklist icon' />
        </div>
        <h3 className='text-dark-grayish-blue text-center text-2xl font-semibold mt-8'>
          Create blacklists
        </h3>
        <div className='flex justify-center'>
          <p className='text-grayish-blue text-center mt-4 mb-12 max-w-[19.375rem]'>
            Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources.
          </p>
        </div>

        <div className='flex justify-center'>
          <img src={IconText} alt='Text icon' />
        </div>
        <h3 className='text-dark-grayish-blue text-center text-2xl font-semibold mt-8'>
          Plain text snippets
        </h3>
        <div className='flex justify-center'>
          <p className='text-grayish-blue text-center mt-4 mb-12 max-w-[19.375rem]'>
            Remove unwanted formatting from copied text for a consistent look.
          </p>
        </div>

        <div className='flex justify-center'>
          <img src={IconPreview} alt='Preview icon' />
        </div>
        <h3 className='text-dark-grayish-blue text-center text-2xl font-semibold mt-8'>
          Sneak preview
        </h3>
        <div className='flex justify-center'>
          <p className='text-grayish-blue text-center mt-4 max-w-[19.375rem]'>
            Quick preview of all snippets on your Clipboard for easy access.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
