import type { TagId } from './tags';

export type Piece = {
	friendlyName: string;
	description: string;
	tagIds: TagId[];
	imageHrefs: string[];
};

export type PieceId = 'lanternbearer';

// "Why are the PieceIds duplicated between the PieceId type and the pieces record?" you may be asking. Put simply... it's a compromise with Typescript
// I would *like* to have the PieceId be defined by "keyof typeof pieces", but doing that on a Record<string, Piece> just returns string, which means
//   that I wouldn't get any fancy autocomplete to help make sure I don't typo any ID names. This way, easy mistakes like that will be caught
//   by the type-checker!... I just have to write each ID twice. A sacrifice I am willing to make

export const pieces: Readonly<Record<PieceId, Piece>> = {
	lanternbearer: {
		friendlyName: 'Lanternbearer: Elegy of Light',
		description:
			'A 2D precision platformer based around light. In this world, \
            anything that is not illuminated might as well not exist -- use your lantern to light up platforms you need and \
            darken obstacles as you explore this world of wizards and light.',
		tagIds: [],
		imageHrefs: []
	}
};
