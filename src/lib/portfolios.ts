/**
 * All of the information about a single portfolio
 */
export type Portfolio = {
    friendlyName: string,
    aliases?: string[],
    highlightedProjectId: string
    featuredProjectIds: string[]
    supplementalProjectIds?: string[],
    aboutMe: string
}

// All of the hard-coded information about each of my portfolios -- I figure the best thing I can do to make maintaining several portfolios easy is to make as much of it as possible data-driven

export const portfolios: { [portfolioId: string]: Portfolio } = {
    "gameplay-programming": {
        friendlyName: "Gameplay Programming",
        aliases: [
            "gameplay-programmer",
            "gameplay-engineering",
            "gameplay-engineer",
            "programming",
            "programmer",
            "gameplay"
        ],
        highlightedProjectId: "none",
        featuredProjectIds: [],
        aboutMe: "GAMEPLAY PROGRAMMING ABOUT ME"
    },
    "graphics-programming": {
        friendlyName: "Graphics Programming",
        aliases: [
            "graphics-programmer",
            "graphics"
        ],
        highlightedProjectId: "none",
        featuredProjectIds: [],
        aboutMe: "GRAPHICS PROGRAMMING ABOUT ME"
    },
    "web-development": {
        friendlyName: "Full-Stack Web Development",
        aliases: [
            "web-dev",
            "frontend",
            "backend",
            "full-stack",
            "web-engineering",
            "web-engineer",
            "web"
        ],
        highlightedProjectId: "none",
        featuredProjectIds: [],
        aboutMe: "WEB DEVELOPMENT ABOUT ME"
    }
}