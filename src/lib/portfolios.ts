import type { PieceId } from './pieces';

/**
 * All of the information about a single portfolio
 */
export type Portfolio = {
	friendlyName: string;
	aliases?: string[];
	aboutMe: string;
	highlightedPieceId?: PieceId;
	featuredPieceIds?: PieceId[];
	supplementalPieceIds?: PieceId[];
};

export type PortfolioId = 'gameplay-programming' | 'graphics-programming' | 'web-development';

// "Why are the PortfolioIds duplicated between the PortfolioId type and the portfolios record?" you may be asking. Put simply... it's a compromise with Typescript
// I would *like* to have the PortfolioId be defined by "keyof typeof portfolios", but doing that on a Record<string, Portfolio> just returns string, which means
//   that I wouldn't get any fancy autocomplete to help make sure I don't typo any ID names. This way, easy mistakes like that will be caught
//   by the type-checker!... I just have to write each ID twice. A sacrifice I am willing to make

// All of the hard-coded information about each of my portfolios -- I figure the best thing I can do to make maintaining several portfolios easy is to make as much of it as possible data-driven

export const portfolios: Readonly<Record<PortfolioId, Portfolio>> = {
	'gameplay-programming': {
		friendlyName: 'Gameplay Programming',
		aliases: [
			'gameplay-programmer',
			'gameplay-engineering',
			'gameplay-engineer',
			'programming',
			'programmer',
			'gameplay'
		],
		aboutMe: 'GAMEPLAY PROGRAMMING ABOUT ME'
	},
	'graphics-programming': {
		friendlyName: 'Graphics Programming',
		aliases: ['graphics-programmer', 'graphics'],
		aboutMe: 'GRAPHICS PROGRAMMING ABOUT ME'
	},
	'web-development': {
		friendlyName: 'Full-Stack Web Development',
		aliases: [
			'web-dev',
			'frontend',
			'backend',
			'full-stack',
			'web-engineering',
			'web-engineer',
			'web'
		],
		aboutMe: 'WEB DEVELOPMENT ABOUT ME'
	}
};
