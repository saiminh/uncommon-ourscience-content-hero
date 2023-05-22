import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
export default function save({ attributes }) {
	return (
		<div { ...useBlockProps.save({
      className: `uncommon-ourscience-content-hero`
    }) }>
			<h1 className='uncommon-ourscience-content-hero-title' dangerouslySetInnerHTML={{__html: attributes.title}}></h1>
      <div className='uncommon-ourscience-content-hero-images'>
        <InnerBlocks.Content />
      </div>
		</div>
	);
}
