

interface DSOitem {
    [name: string]: number
}

interface DSOitems {
    [key: string]: DSOitem

}
export let skillList = ["css/sass", "react/typescript", "node/express","database/SQL"]

export const designerSkillObject: DSOitems = {
    "Szymon B.": { "css/sass": 4, "react/typescript": 3, "node/express": 2, "database/SQL":1 }
    ,
    "Bogdan T.": { "css/sass": 2, "react/typescript": 2, "node/express": 2,"database/SQL":1 },
}