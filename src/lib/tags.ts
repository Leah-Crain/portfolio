import type { FontAwesomeIconProps } from '@fortawesome/svelte-fontawesome';

/**
 * A tag, used to categorize different portfolio pieces so that potential recruiters can more easily find pieces that are relevant to their interests
 */
export type Tag = {
	friendlyName: string;
	icon: FontAwesomeIconProps;
};

/**
 * A unique ID that corresponds to a specific tag. Always a string, but there are a limited number of valid options
 */
export type TagId = 'unreal';

// "Why are the TagIds duplicated between the TagId type and the tags record?" you may be asking. Put simply... it's a compromise with Typescript
// I would *like* to have the TagId be defined by "keyof typeof tags", but doing that on a Record<string, Tag> just returns string, which means
//   that I wouldn't get any fancy autocomplete to help make sure I don't typo any ID names. This way, easy mistakes like that will be caught
//   by the type-checker!... I just have to write each ID twice. A sacrifice I am willing to make

/**
 * All of the tags
 */
export const tags: Readonly<Record<TagId, Tag>> = {
	unreal: {
		friendlyName: 'Unreal',
		icon: {
			icon: 'unreal-engine'
		}
	}
};
