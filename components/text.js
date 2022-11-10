const navbar = {
    brand : "UofG Cup",
    WhatIsUofGCup : {
        WhatIsUofGCup : "What is UofG Cup?",
        Rules : "Rules",
        PastCompetitions : "Past Competitions"
    },
    UofGCup23 : {
        UofGCup23 : "UofG Cup '23",
        Tracks : "Tracks",
        Leaderboards : "Leaderboards",
        Apply : "Apply"
    },
    Contact : "Contact"
};

const pastComp = {
    title : "There are currently no past competitions right now",
    description: "Please check out our current competition",
    button: "UofG Cup '23"
};

const players = {
    Lewis : {
        name : "Lewis Trundle",
        country : "United Kingdom",
        times : {
            "round_1" : {
                one : 23.07,
                two : 21.45,
                three : 22.72,
                best: 21.45
            },
            "round_2" : {
                one : 23.07,
                two : 20.32,
                three : 22.72,
                best: 20.32
            },
            "round_3" : {
                one : 23.07,
                two : 21.45,
                three : 22.72,
                best: 21.45
            },
            "round_4" : {
                one : 23.07,
                two : 21.45,
                three : 22.72,
                best: 21.45
            },
            "round_5" : {
                one : 23.07,
                two : 21.45,
                three : 22.72,
                best: 21.45
            },
            "round_6" : {
                one : 23.07,
                two : 21.45,
                three : 22.72,
                best: 21.45
            },
            "round_7" : {
                one : 23.07,
                two : 21.45,
                three : 22.72,
                best: 21.45
            },
            "round_8" : {
                one : 23.07,
                two : 21.45,
                three : 22.72,
                best: 21.45
            },
            "round_9" : {
                one : 23.07,
                two : 21.45,
                three : 22.72,
                best: 21.45
            },
            "round_10" : {
                one : 23.07,
                two : 21.45,
                three : 22.72,
                best: 21.45
            },
            "round_11" : {
                one : 23.07,
                two : 21.45,
                three : 22.72,
                best: 21.45
            }
        }
    },
    Billy : {
        name : "Billy Joel",
        country : "United Kingdom",
        times : {
            "round_1" : {
                one : 23.07,
                two : 21.45,
                three : 19.03,
                best: 19.03
            },
            "round_2" : {
                one : 23.07,
                two : 21.45,
                three : 22.72,
                best: 21.45
            },
            "round_3" : {
                one : 23.07,
                two : 21.45,
                three : 22.72,
                best: 21.45
            }
        }
    },
    Bob : {
        name : "Bob Jones",
        country : "United Kingdom",
        times : {
            "round_1" : {
                one : 23.07,
                two : 21.45,
                three : 22.72,
                best: 21.45
            },
            "round_2" : {
                one : 20.65,
                two : 21.45,
                three : 22.72,
                best: 21.45
            },
            "round_3" : {
                one : 27.43,
                two : 21.45,
                three : 22.72,
                best: 21.45
            }
        }
    }
}


const compData = {
    "overall" : {
        "1" : players.Lewis,
    },
    "round_1" : {
        "1" : players.Lewis,
        "2" : players.Billy,
        "3" : players.Bob
    },
    "round_2" : {
        "1" : players.Lewis,
        "2" : players.Billy,
        "3": players.Bob
    },
    "round_3" : {
        "1" : players.Lewis,
        "2" : players.Billy,
        "3" : players.Bob
    },
    "round_4" : {
        "1" : players.Lewis,
    },
    "round_5" : {
        "1" : players.Lewis,
    },
    "round_6" : {
        "1" : players.Lewis,
    },
    "round_7" : {
        "1" : players.Lewis,
    },
    "round_8" : {
        "1" : players.Lewis,
    },
    "round_9" : {
        "1" : players.Lewis,
    },
    "round_10" : {
        "1" : players.Lewis,
    },
    "round_11" : {
        "1" : players.Lewis,
    }
}

export {navbar, pastComp, compData, players};