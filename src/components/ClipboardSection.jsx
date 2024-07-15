import Buttons from './Buttons';
import SectionText from './SectionText';

const ClipboardSection = () => {
  return (
    <section className='bg-white py-20'>
      <div className='pageCenter'>
        <SectionText
          title='Clipboard for iOS and Mac OS'
          text="Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you're ready to start adding to your clipboard."
        />

        <Buttons />
      </div>
    </section>
  );
};

export default ClipboardSection;
