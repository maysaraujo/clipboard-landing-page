import Google from '../assets/images/logo-google.png';
import IBM from '../assets/images/logo-ibm.png';
import Microsoft from '../assets/images/logo-microsoft.png';
import HP from '../assets/images/logo-hp.png';
import VectorGraphichs from '../assets/images/logo-vector-graphics.png';

const Partners = () => {
  return (
    <section className='bg-white pt-20'>
      <div className='pageCenter'>
        <div className='flex items-center flex-col gap-16 lg:flex-row lg:justify-center lg:gap-24'>
          <img src={Google} alt='Google icon' />
          <img src={IBM} alt='IBM icon' />
          <img src={Microsoft} alt='Microsoft icon' />
          <img src={HP} alt='HP icon' />
          <img src={VectorGraphichs} alt='VectorGraphichs icon' />
        </div>
      </div>
    </section>
  );
};

export default Partners;
