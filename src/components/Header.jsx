import Logo from '../assets/images/logo.svg';
import Buttons from './Buttons';

const Header = () => {
  return (
    <header className='bg-header-mobile bg-no-repeat bg-[length:100%] lg:bg-header-desktop'>
      <div className='pageCenter'>
        <div className='flex justify-center pt-[7.375rem] pb-16'>
          <img className='' src={Logo} alt='Logo' />
        </div>
        <h1 className='text-dark-grayish-blue text-center text-4xl font-semibold'>
          A history of everything you copy
        </h1>
        <div className='flex justify-center'>
          <p className='text-grayish-blue text-center mt-4 mb-12 max-w-[19.375rem] lg:max-w-[33.75rem]'>
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
        </div>
        <Buttons />
      </div>
    </header>
  );
};

export default Header;
