import IconBlackList from '../assets/images/icon-blacklist.svg';
import IconText from '../assets/images/icon-text.svg';
import IconPreview from '../assets/images/icon-preview.svg';
import SectionText from './SectionText';
import Tools from './Tools';

const ThirdSection = () => {
  return (
    <section className='bg-white pt-20'>
      <div className='pageCenter'>
        <SectionText
          title='Superchange your workflow'
          text="We've got the tools to boost your productivity."
        />

        <div className='lg:flex lg:justify-center lg:items-baseline lg:gap-8'>
          <Tools
            image={IconBlackList}
            alt='Blacklist icon'
            title='Create blacklists'
            text='Ensure sensitive information never makes its way to your clipboard
              by excluding certain sources.'
          />
          <Tools
            image={IconText}
            alt='Text icon'
            title='Plain text snippets'
            text='Remove unwanted formatting from copied text for a consistent look.'
          />
          <Tools
            image={IconPreview}
            alt='Preview icon'
            title='Sneak preview'
            text='Quick preview of all snippets on your Clipboard for easy access.'
          />
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
