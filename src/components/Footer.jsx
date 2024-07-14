import Logo from '../assets/images/logo.svg';
import Facebook from '../assets/images/icon-facebook.svg';
import Twitter from '../assets/images/icon-twitter.svg';
import Instagram from '../assets/images/icon-instagram.svg';

const Footer = () => {
  return (
    <footer className='bg-light-gray py-10'>
      <div className='pageCenter'>
        <div className='flex justify-center'>
          <img width={70} className='' src={Logo} alt='Logo' />
        </div>
        <ul className='flex flex-col items-center gap-4 mt-8 text-grayish-blue font-semibold'>
          <li>FAQs</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Press Kit</li>
          <li>Install Guide</li>
        </ul>
        <div className='flex gap-8 justify-center mt-8'>
          <img src={Facebook} alt='Facebook icon' />
          <img src={Twitter} alt='Twitter icon' />
          <img src={Instagram} alt='Instagram icon' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
