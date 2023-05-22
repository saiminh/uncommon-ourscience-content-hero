import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	return (
		<div { ...useBlockProps({
      className: `uncommon-ourscience-content-hero`
    }) }>
      <RichText
        tagName='h1'
        className='uncommon-ourscience-content-hero-title'
        value={attributes.title}
        onChange={(value) => setAttributes({ title: value })}
      />
      <div className='uncommon-ourscience-content-hero-images'>
        <InnerBlocks
          allowedBlocks={['core/image']}
          template={[
            ['core/image', { className: 'uncommon-ourscience-content-hero-image-one', caption: 'hankenstein' } ],
            ['core/image', { className: 'uncommon-ourscience-content-hero-image-two', caption: 'hankenstein' } ]
          ]}
        />
      </div>
		</div>
	);
}
