const Tools = ({ image, alt, title, text }) => {
  return (
    <div className='flex flex-col items-center'>
      <img src={image} alt={alt} />
      <h3 className='text-dark-grayish-blue text-center text-2xl font-semibold mt-8'>
        {title}
      </h3>
      <p className='text-grayish-blue text-center mt-4 mb-12 max-w-[19.375rem] lg:max-w-[22.375rem]'>
        {text}
      </p>
    </div>
  );
};

export default Tools;
