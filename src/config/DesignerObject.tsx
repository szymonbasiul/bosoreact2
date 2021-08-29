

interface DSOitem {
    [name: string]: number
}

interface DSOitems {
    [key: string]: DSOitem

}
export let skillList = ["css/sass", "react/typescript", "node/express"]

export const designerSkillObject: DSOitems = {
    "Szymon B.": { "css/sass": 3, "react/typescript": 2, "node/express": 1 }
    ,
    "Bogdan T.": { "css/sass": 2, "react/typescript": 1, "node/express": 1 },
}
