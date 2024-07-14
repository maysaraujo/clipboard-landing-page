import Logo from '../assets/images/logo.svg';

const Header = () => {
  return (
    <header className='bg-header-mobile bg-no-repeat bg-right bg-cover md:hidden'>
      <div className='pageCenter'>
        <div className='flex justify-center pt-[9.375rem] pb-16'>
          <img className='' src={Logo} alt='Logo' />
        </div>
        <h1 className='text-dark-grayish-blue text-center text-4xl font-semibold'>
          A history of everything you copy
        </h1>
        <div className='flex justify-center'>
          <p className='text-grayish-blue text-center mt-4 mb-12 max-w-[19.375rem]'>
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
        </div>
        <div className='flex justify-center items-center flex-col gap-5'>
          <button className='bg-strong-cyan text-white py-2.5 rounded-3xl w-4/5 font-semibold'>
            Download for iOS
          </button>
          <button className='bg-light-blue text-white py-2.5 rounded-3xl w-4/5 font-semibold'>
            Download for Mac
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
