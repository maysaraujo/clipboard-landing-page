const SectionText = ({ title, text }) => {
  return (
    <>
      <h2 className='text-dark-grayish-blue text-center text-3xl font-semibold'>
        {title}
      </h2>
      <div className='flex justify-center'>
        <p className='text-grayish-blue text-center mt-4 mb-12 max-w-[19.375rem] lg:max-w-[38.125rem]'>
          {text}
        </p>
      </div>
    </>
  );
};

export default SectionText;
