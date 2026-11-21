/**
 * All of the information about a single portfolio
 */
export type Portfolio = {
    friendlyName: string,
    aliases?: string[]
}

// All of the hard-coded information about each of my portfolios -- I figure the best thing I can do to make maintaining several portfolios easy is to make as much of it as possible data-driven

export const portfolios: { [portfolioId: string]: Portfolio } = {
    "gameplay-programming": {
        friendlyName: "Gameplay Programming"
    },
    "graphics-programming": {
        friendlyName: "Graphics Programming"
    },
    "web-development": {
        friendlyName: "Full-Stack Web Development"
    }
}