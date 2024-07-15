import Logo from '../assets/images/logo.svg';
import Facebook from '../assets/images/icon-facebook.svg';
import Twitter from '../assets/images/icon-twitter.svg';
import Instagram from '../assets/images/icon-instagram.svg';

const Footer = () => {
  return (
    <footer className='bg-light-gray py-10'>
      <div className='pageCenter'>
        <div className='lg:flex lg:justify-around lg:items-center'>
          <div className='flex justify-center lg:mt-[1.875rem]'>
            <img width={70} src={Logo} alt='Logo' />
          </div>
          <ul
            className='flex flex-col items-center gap-4 mt-8 text-dark-grayish-blue font-semibold
          lg:flex-row lg:items-baseline lg:gap-16 lg:font-normal'
          >
            <div className='flex flex-col items-center gap-4 lg:items-start'>
              <li className='cursor-pointer'>FAQs</li>
              <li className='cursor-pointer'>Contact Us</li>
            </div>
            <div className='flex flex-col items-center gap-4 lg:items-start'>
              <li className='cursor-pointer'>Privacy Policy</li>
              <li className='cursor-pointer'>Press Kit</li>
            </div>
            <li className='cursor-pointer'>Install Guide</li>
          </ul>
          <div className='flex gap-8 justify-center mt-8'>
            <img
              className='cursor-pointer'
              src={Facebook}
              alt='Facebook icon'
            />
            <img className='cursor-pointer' src={Twitter} alt='Twitter icon' />
            <img
              className='cursor-pointer'
              src={Instagram}
              alt='Instagram icon'
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
