

interface DSOitem {
    [name: string]: number
}

interface DSOitems {
    "Szymon B.": DSOitem;
    "Bogdan T.": DSOitem;
    SkillList: string[]
}


const designerSkillObject: DSOitems = {
    "Szymon B.": {
        "css/sass": 2, 'react/typescript': 1, "node/express": 4
    },
    "Bogdan T.": {
        "css/sass": 1, "react/typescript": 1, "node/express": 2
    },
    SkillList:["css/sass", "react/typescript", "node/express"]
}

export default designerSkillObject;