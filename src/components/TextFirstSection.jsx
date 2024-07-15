const TextFirstSection = ({ title, text }) => {
  return (
    <div>
      <h3 className='text-dark-grayish-blue text-center text-2xl font-semibold mt-8 lg:text-left'>
        {title}
      </h3>
      <div className='flex justify-center'>
        <p className='text-grayish-blue text-center mt-4 max-w-[21.25rem] lg:text-left'>
          {text}
        </p>
      </div>
    </div>
  );
};

export default TextFirstSection;
