import ImageDevices from '../assets/images/image-devices.png';
import SectionText from './SectionText';

const SecondSection = () => {
  return (
    <section>
      <div className='pageCenter pt-20'>
        <SectionText
          title='Access Clipboard Anywhere'
          text="Whether you're on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks."
        />

        <div className='flex justify-center'>
          <img src={ImageDevices} alt='Image Devices' />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
