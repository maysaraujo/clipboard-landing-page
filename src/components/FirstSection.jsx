import ImageComputer from '../assets/images/image-computer.png';
import SectionText from './SectionText';
import TextFirstSection from './TextFirstSection';

const FirstSection = () => {
  return (
    <section className='bg-white pt-20'>
      <div className='pageCenter lg:hidden'>
        <SectionText
          title='Keep track of your snippets'
          text='Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.'
        />

        <div className='lg:flex lg:gap-32'>
          <img
            className='lg:ml-[-2rem]'
            src={ImageComputer}
            alt='Image Computer'
          />

          <div className=''>
            <TextFirstSection
              title='Quick Search'
              text='Easily search your snippets by content, category, web address,
                application, and more.'
            />
            <TextFirstSection
              title='iCloud Sync'
              text='Instantly saves and syncs snippets across all your devices.'
            />
            <TextFirstSection
              title='Complete History'
              text='Retrieve any snippets from the first moment you started using
                the app.'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
