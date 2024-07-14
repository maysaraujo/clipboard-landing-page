import Google from '../assets/images/logo-google.png';
import IBM from '../assets/images/logo-ibm.png';
import Microsoft from '../assets/images/logo-microsoft.png';
import HP from '../assets/images/logo-hp.png';
import VectorGraphichs from '../assets/images/logo-vector-graphics.png';

const Partners = () => {
  return (
    <section className='bg-white pt-20'>
      <div className='pageCenter'>
        <div className='flex items-center flex-col gap-12'>
          <img width={100} src={Google} alt='Google icon' />
          <img width={100} src={IBM} alt='IBM icon' />
          <img width={100} src={Microsoft} alt='Microsoft icon' />
          <img width={100} src={HP} alt='HP icon' />
          <img width={100} src={VectorGraphichs} alt='VectorGraphichs icon' />
        </div>
      </div>
    </section>
  );
};

export default Partners;
