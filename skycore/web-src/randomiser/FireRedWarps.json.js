export const FIRE_RED_WARPS = 
{
/* PALLET TOWN - EXT */
// NOT RANDOMISED

/* PALLET TOWN - INT */
// NOT RANDOMISED 
// But we still need data for the stairs warp
    "FR,4,0,2" : {
        "name": "PALLET TOWN - INSIDE - home stairs - A,2",
        "level": "1",
        "ignore": true, 
        "to" : "FR,4,1,0"
    },
/* VIRIDIAN CITY - EXT */
    "FR,3,1,0" : {
        // PK
        "name": "VIRIDIAN CITY - OUTSIDE - PkCenter - 1A,1A",
        "level": "1", 
        "to": "FR,5,4,1",
        "connections" : {
            "FR,3,1,1": true,
            "FR,3,1,3": true,
            "FR,3,1,4": true,
            "FR,3,41,0": true,
            "FR,3,20,2": "KANTO_CUT",
            "FR,3,8,3": "KANTO_SURF",
            "FR,3,1,2": "UNLOCK_VIRIDIAN_GYM"
        },
    },
    "FR,3,1,1" : {
        "name": "VIRIDIAN CITY - OUTSIDE - Top - 19,B",
        "level": "1", 
        "to" : "FR,5,0,1",
        "connections" : {
            "FR,3,1,0": true
        }
        
    },
    "FR,3,1,2" : {
        "name": "VIRIDIAN CITY - OUTSIDE - GYM - 24,A",
        "to" : "FR,5,1,1",
        "level": "8", 
        "tags": ["no_return"]
    },
    "FR,3,1,3" : {
        "name": "VIRIDIAN CITY - OUTSIDE - Bottom (School) - 19,12",
        "level": "1", 
        "to" : "FR,5,2,1",
        "connections" : {
            "FR,3,1,0": true
        }
    },
    "FR,3,1,4" : {
        "name": "VIRIDIAN CITY - OUTSIDE - Mart - 24,13",
        "level": "1", 
        "to" : "FR,5,3,1",
        "connections" : {
            "FR,3,1,0": true
        }
    },
/* VIRIDIAN CITY - INT */
    "FR,5,0,0" : {
        "name": "VIRIDIAN CITY - INSIDE - Top - 4,7",
        "level": "1", 
        "to" : "FR,3,1,1",
        "grouped" : ["FR,5,0,1", "FR,5,0,2"],
        "tags": ["removeable"]
    },
    "FR,5,0,1" : {
        "name": "VIRIDIAN CITY - INSIDE - Top - 5,7",
        "level": "1", 
        "to" : "FR,3,1,1",
        "grouped" : ["FR,5,0,0", "FR,5,0,2"],
        "groupMain" : true,
        "tags": ["removeable"]
    },
    "FR,5,0,2" : {
        "name": "VIRIDIAN CITY - INSIDE - Top - 6,7",
        "level": "1", 
        "to" : "FR,3,1,1",
        "grouped" : ["FR,5,0,0", "FR,5,0,1"],
        "tags": ["removeable"]
    },
    "FR,5,1,0" : {
        // GYM
        "name": "VIRIDIAN CITY - INSIDE - Gym - 10,16",
        "to" : "FR,3,1,2",
        "level": "8", 
        "grouped" : ["FR,5,1,1", "FR,5,1,2"]
    },
    "FR,5,1,1" : {
        // GYM
        "name": "VIRIDIAN CITY - INSIDE - Gym - 11,16",
        "to" : "FR,3,1,2",
        "level": "8", 
        "grouped" : ["FR,5,1,0", "FR,5,1,2"],
        "groupMain" : true
    },
    "FR,5,1,2" : {
        // GYM
        "name": "VIRIDIAN CITY - INSIDE - Gym - 12,16",
        "to" : "FR,3,1,2",
        "level": "8", 
        "grouped" : ["FR,5,1,0", "FR,5,1,1"]
    },
    "FR,5,2,0" : {
        "name": "VIRIDIAN CITY - INSIDE - Bottom (School) - 3,7",
        "level": "1", 
        "to" : "FR,3,1,3",
        "grouped" : ["FR,5,2,1", "FR,5,2,2"],
        "tags": ["removeable"]
    },
    "FR,5,2,1" : {
        "name": "VIRIDIAN CITY - INSIDE - Bottom (School) - 4,7",
        "level": "1", 
        "to" : "FR,3,1,3",
        "grouped" : ["FR,5,2,0", "FR,5,2,2"],
        "groupMain" : true,
        "tags": ["removeable"]
    },
    "FR,5,2,2" : {
        "name": "VIRIDIAN CITY - INSIDE - Bottom (School) - 5,7",
        "level": "1", 
        "to" : "FR,3,1,3",
        "grouped" : ["FR,5,2,0", "FR,5,2,1"],
        "tags": ["removeable"]
    },
    "FR,5,3,0" : {
        // MART
        "name": "VIRIDIAN CITY - INSIDE - Mart - 3,7",
        "level": "1", 
        "to" : "FR,3,1,4",
        "grouped" : ["FR,5,3,1", "FR,5,3,2"]
    },
    "FR,5,3,1" : {
        // MART
        "name": "VIRIDIAN CITY - INSIDE - Mart - 4,7",
        "level": "1", 
        "to" : "FR,3,1,4",
        "grouped" : ["FR,5,3,0", "FR,5,3,2"],
        "groupMain" : true
    },
    "FR,5,3,2" : {
        // MART
        "name": "VIRIDIAN CITY - INSIDE - Mart - 5,7",
        "level": "1", 
        "to" : "FR,3,1,4",
        "grouped" : ["FR,5,3,0", "FR,5,3,1"]
    },
    "FR,5,4,0" : {
        // PK
        "name": "VIRIDIAN CITY - INSIDE - PkCenter - 6,8",
        "level": "1", 
        "to" : "FR,3,1,0",
        "grouped" : ["FR,5,4,1", "FR,5,4,2"]
    },
    "FR,5,4,1" : {
        // PK
        "name": "VIRIDIAN CITY - INSIDE - PkCenter - 7,8",
        "level": "1", 
        "to" : "FR,3,1,0",
        "grouped" : ["FR,5,4,0", "FR,5,4,2"],
        "groupMain" : true,
        "connections" : {
            "FR,5,4,3": true
        }
    },
    "FR,5,4,2" : {
        // PK
        "name": "VIRIDIAN CITY - INSIDE - PkCenter - 8,8",
        "level": "1", 
        "to" : "FR,3,1,0",
        "grouped" : ["FR,5,4,0", "FR,5,4,1"]
    },
    "FR,5,4,3" : {
        "name": "VIRIDIAN CITY - INSIDE - PkCenter (stairs) - 1,6",
        "level": "1", 
        "to" : "FR,5,5,0",
        "connections" : {
            "FR,5,4,1": true
        }
    },
    "FR,5,5,0" : {
        // PK (upstairs)
        "name": "VIRIDIAN CITY - INSIDE - PkCenter (upstairs) (stairs) - 1,6",
        "level": "1", 
        "to" : "FR,5,5,0",
        "ignore": true
    },
/* PEWTER CITY - EXT */
    "FR,3,2,0" : {
        // MUSEUM
        "name": "PEWTER CITY - OUTSIDE - Museum (Main) - 11,6",
        "level": "1", 
        "to": "FR,6,0,1",
        "connections" : {
            "FR,3,2,5": true,
        }
    },
    "FR,3,2,1" : {
        // MUSEUM BACK
        "name": "PEWTER CITY - OUTSIDE - Museum (Back) - 19,4",
        "level": "1", 
        "to" : "FR,6,0,3",
        "connections" : {
            "FR,3,2,5": true
        }
    },
    "FR,3,2,2" : {
        // GYM
        "name": "PEWTER CITY - OUTSIDE - Gym - F,10",
        "level": "1", 
        "to" : "FR,6,2,1",
        "connections" : {
            "FR,3,2,5": true
        }
    },
    "FR,3,2,3" : {
        // MART
        "name": "PEWTER CITY - OUTSIDE - Mart - 1C,12",
        "level": "1", 
        "to" : "FR,6,3,1",
        "connections" : {
            "FR,3,2,5": true,
        }
    },
    "FR,3,2,4" : {
        "name": "PEWTER CITY - OUTSIDE - Top Right - 21,B",
        "level": "1", 
        "to" : "FR,6,4,1",
        "connections" : {
            "FR,3,2,5": true,
        }
    },
    "FR,3,2,5" : {
        // PK
        "name": "PEWTER CITY - OUTSIDE - PkCenter - 11,19",
        "level": "1", 
        "to" : "FR,6,5,1",
        "connections" : {
            "FR,3,2,0": true,
            "FR,3,2,1": "KANTO_CUT",
            "FR,3,2,2": true,
            "FR,3,2,3": true,
            "FR,3,2,4": true,
            "FR,3,2,6": true,
            "FR,3,20,0": true,
        }
    },
    "FR,3,2,6" : {
        "name": "PEWTER CITY - OUTSIDE - Bottom Left - 9,1E",
        "level": "1", 
        "to" : "FR,6,7,1",
        "connections" : {
            "FR,3,2,5": true
        }
    },
/* PEWTER CITY - INT */
    "FR,6,0,0" : {
        "name": "PEWTER CITY - INSIDE - Museum (Main) - D,9",
        "level": "1", 
        "to" : "FR,3,2,0",
        "grouped" : ["FR,6,0,1", "FR,6,0,2"]
    },
    "FR,6,0,1" : {
        "name": "PEWTER CITY - INSIDE - Museum (Main) - E,9",
        "level": "1", 
        "to" : "FR,3,2,0",
        "grouped" : ["FR,6,0,0", "FR,6,0,2"],
        "groupMain" : true,
        "connections" : {
            "FR,6,0,5": true
        }
    },
    "FR,6,0,2" : {
        "name": "PEWTER CITY - INSIDE - Museum (Main) - F,9",
        "level": "1", 
        "to" : "FR,3,2,0",
        "grouped" : ["FR,6,0,0", "FR,6,0,1"]
    },
    "FR,6,0,3" : {
        "name": "PEWTER CITY - INSIDE - Museum (Back) - 15,9",
        "level": "1", 
        "to" : "FR,3,2,1",
        "grouped" : ["FR,6,0,4"],
        "groupMain" : true,
        "tags": ["extraDeadend"]
    },
    "FR,6,0,4" : {
        "name": "PEWTER CITY - INSIDE - Museum (Back) - 16,9",
        "level": "1", 
        "to" : "FR,3,2,1",
        "grouped" : ["FR,6,0,3"],
        "tags": ["extraDeadend"]
    },
    "FR,6,0,5" : {
        "name": "PEWTER CITY - INSIDE - Museum (Stairs) - 16,9",
        "level": "1", 
        "to": "FR,6,1,0",
        "connections" : {
            "FR,6,0,1": true
        }
    },
    "FR,6,1,0" : {
        "name": "PEWTER CITY - INSIDE - Museum (Upstairs) (Stairs) - B,8",
        "level": "1", 
        "to": "FR,6,0,5",
        "tags": ["removeable"]
    },
    "FR,6,2,0" : {
        // GYM
        "name": "PEWTER CITY - INSIDE - Gym - 5,E",
        "level": "1", 
        "to" : "FR,3,2,2",
        "grouped" : ["FR,6,2,1", "FR,6,2,2"]
    },
    "FR,6,2,1" : {
        // GYM
        "name": "PEWTER CITY - INSIDE - Gym - 6,E",
        "level": "1", 
        "to" : "FR,3,2,2",
        "grouped" : ["FR,6,2,0", "FR,6,2,2"],
        "groupMain" : true
    },
    "FR,6,2,2" : {
        // GYM
        "name": "PEWTER CITY - INSIDE - Gym - 7,E",
        "level": "1", 
        "to" : "FR,3,2,2",
        "grouped" : ["FR,6,2,0", "FR,6,2,1"]
    },
    "FR,6,3,0" : {
        // MART
        "name": "PEWTER CITY - INSIDE - Mart - 3,7",
        "level": "1", 
        "to" : "FR,3,2,3",
        "grouped" : ["FR,6,3,1", "FR,6,3,2"]
    },
    "FR,6,3,1" : {
        // MART
        "name": "PEWTER CITY - INSIDE - Mart - 4,7",
        "level": "1", 
        "to" : "FR,3,2,3",
        "grouped" : ["FR,6,3,0", "FR,6,3,2"],
        "groupMain" : true
    },
    "FR,6,3,2" : {
        // MART
        "name": "PEWTER CITY - INSIDE - Mart - 5,7",
        "level": "1", 
        "to" : "FR,3,2,3",
        "grouped" : ["FR,6,3,0", "FR,6,3,1"]
    },
    "FR,6,4,0" : {
        "name": "PEWTER CITY - INSIDE - Top Right - 3,7",
        "level": "1", 
        "to" : "FR,3,2,4",
        "grouped" : ["FR,6,4,1", "FR,6,4,2"],
        "tags": ["removeable"]
    },
    "FR,6,4,1" : {
        "name": "PEWTER CITY - INSIDE - Top Right - 4,7",
        "level": "1", 
        "to" : "FR,3,2,4",
        "grouped" : ["FR,6,4,0", "FR,6,4,2"],
        "groupMain" : true,
        "tags": ["removeable"]
    },
    "FR,6,4,2" : {
        "name": "PEWTER CITY - INSIDE - Top Right - 5,7",
        "level": "1", 
        "to" : "FR,3,2,4",
        "grouped" : ["FR,6,4,0", "FR,6,4,1"],
        "tags": ["removeable"]
    },
    "FR,6,5,0" : {
        // PK
        "name": "PEWTER CITY - INSIDE - PkCenter - 6,8",
        "level": "1", 
        "to" : "FR,3,2,5",
        "grouped" : ["FR,6,5,1", "FR,6,5,2"]
    },
    "FR,6,5,1" : {
        // PK
        "name": "PEWTER CITY - INSIDE - PkCenter - 7,8",
        "level": "1", 
        "to" : "FR,3,2,5",
        "grouped" : ["FR,6,5,0", "FR,6,5,2"],
        "groupMain" : true,
        "connections" : {
            "FR,6,5,3": true
        }
    },
    "FR,6,5,2" : {
        // PK
        "name": "PEWTER CITY - INSIDE - PkCenter - 9,8",
        "level": "1", 
        "to" : "FR,3,2,5",
        "grouped" : ["FR,6,5,0", "FR,6,5,1"]
    },
    "FR,6,5,3" : {
        "name": "PEWTER CITY - INSIDE - PkCenter (Stairs) - 1,6",
        "level": "1", 
        "to" : "FR,6,6,0",
        "connections" : {
            "FR,6,5,1": true
        }
    },
    "FR,6,6,0" : {
        "name": "PEWTER CITY - INSIDE - PkCenter (Upstairs) (Stairs) - 1,6",
        "level": "1", 
        "to" : "FR,6,5,3",
        "ignore" : true
    },
    "FR,6,7,0" : {
        "name": "PEWTER CITY - INSIDE - Bottom Left - 3,7",
        "level": "1", 
        "to" : "FR,3,2,6",
        "grouped" : ["FR,6,7,1", "FR,6,7,2"],
        "tags": ["removeable"]
    },
    "FR,6,7,1" : {
        "name": "PEWTER CITY - INSIDE - Bottom Left - 4,7",
        "level": "1", 
        "to" : "FR,3,2,6",
        "grouped" : ["FR,6,7,0", "FR,6,7,2"],
        "groupMain" : true,
        "tags": ["removeable"]
    },
    "FR,6,7,2" : {
        "name": "PEWTER CITY - INSIDE - Bottom Left - 5,7",
        "level": "1", 
        "to" : "FR,3,2,6",
        "grouped" : ["FR,6,7,0", "FR,6,7,1"],
        "tags": ["removeable"]
    },
/* ROUTE 22 - EXT */
    "FR,3,41,0" : {
        "name": "ROUTE 22 - OUTSIDE - League Front Gate - 8,5",
        "level": "1", 
        "to" : "FR,28,0,2",
        "connections" : {
            "FR,3,1,0": true
        }
    },
/* ROUTE 22 - INT */ 
    "FR,28,0,0" : {
        "name": "ROUTE 22 - INSIDE - League Front Gate (Guard Door) - 7,1",
        "level": "1", 
        "to" : "FR,3,42,2",
        "connections" : {
            "FR,28,0,2": true,
        },
        "tags": ["no_return"]
    },   
    "FR,28,0,1" : {
        "name": "ROUTE 22 - INSIDE - League Front Gate  - 6,A",
        "level": "1", 
        "to" : "FR,3,41,0",
        "grouped" : ["FR,28,0,2", "FR,28,0,3"]
    },
    "FR,28,0,2" : {
        "name": "ROUTE 22 - INSIDE - League Front Gate  - 6,B",
        "level": "1", 
        "to" : "FR,3,41,0",
        "grouped" : ["FR,28,0,1", "FR,28,0,3"],
        "groupMain" : true,
        "connections" : {
            "FR,28,0,0": true,
        }
    },
    "FR,28,0,3" : {
        "name": "ROUTE 22 - INSIDE - League Front Gate  - 6,C",
        "level": "1", 
        "to" : "FR,3,41,0",
        "grouped" : ["FR,28,0,1", "FR,28,0,2"]
    },
/* ROUTE 2 - EXT */
    "FR,3,20,0" : {
        "name": "ROUTE 2 - OUTSIDE - Left Route Connector (PEWTER side) - 5,D",
        "level": "1", 
        "to" : "FR,15,3,3",
        "grouped" : ["FR,3,20,1"],
        "groupMain" : true,
        "connections" : {
            "FR,3,2,5": true,
            "FR,3,20,3": "KANTO_CUT"
        }
    },
    "FR,3,20,1" : {
        "name": "ROUTE 2 - OUTSIDE - Left Route Connector (PEWTER side) - 6,D",
        "level": "1", 
        "to" : "FR,15,3,3",
        "grouped" : ["FR,3,20,0"]
    },
    "FR,3,20,2" : {
        "name": "ROUTE 2 - OUTSIDE - Left Route Connector (VIRIDIAN side) - 5,33",
        "level": "1", 
        "to" : "FR,15,0,1",
        "grouped" : ["FR,3,20,9"],
        "groupMain" : true,
        "connections" : {
            "FR,3,1,0": true,
            "FR,3,20,5": "KANTO_CUT"
        }
    },
    "FR,3,20,9" : {
        "name": "ROUTE 2 - OUTSIDE - Left Route Connector (VIRIDIAN side) - 6,33",
        "level": "1", 
        "to" : "FR,15,0,1",
        "grouped" : ["FR,3,20,2"]
    },
    "FR,3,20,4" : {
        "name": "ROUTE 2 - OUTSIDE - House (abra, mr mime trade) - 11,16",
        "to" : "FR,15,1,1",
        "level": "3",
    },
    "FR,3,20,5" : {
        "name": "ROUTE 2 - OUTSIDE - Right Route Connector (VIRIDIAN Side) - 12,2E",
        "to" : "FR,15,2,1",
        "grouped" : ["FR,3,20,8"],
        "groupMain" : true,
        "level": "3",
        "connections" : {
            "FR,3,20,2": "KANTO_CUT"
        }
    },
    "FR,3,20,8" : {
        "name": "ROUTE 2 - OUTSIDE - Right Route Connector (VIRIDIAN Side) - 13,2E",
        "to" : "FR,15,2,1",
        "level": "3",
        "grouped" : ["FR,3,20,5"],
    },
    "FR,3,20,6" : {
        "name": "ROUTE 2 - OUTSIDE - Right Route Connector (PEWTER Side) - 12,29",
        "to" : "FR,15,2,3",
        "grouped" : ["FR,3,20,7"],
        "level": "3",
        "groupMain" : true
    },
    "FR,3,20,7" : {
        "name": "ROUTE 2 - OUTSIDE - Right Route Connector (PEWTER Side) - 13,29",
        "to" : "FR,15,2,3",
        "grouped" : ["FR,3,20,6"],
        "level": "3",
    },
    "FR,3,20,3" : {
        "name": "ROUTE 2 - OUTSIDE - Digglet Cave Enterance - 11,B",
        "to" : "FR,1,36,1",
        "level": "3",
        "connections" : {
            "FR,3,20,0": "KANTO_CUT",
            "FR,3,20,6": "KANTO_CUT"
        }
    },    
/* ROUTE 2 - INT */
    "FR,15,0,0" : {
        "name": "ROUTE 2 - INSIDE - Left Route Connector (VIRIDIAN Side) - 6,A",
        "level": "1", 
        "to" : "FR,3,20,2",
        "grouped" : ["FR,15,0,1", "FR,15,0,2"]
    },
    "FR,15,0,1" : {
        "name": "ROUTE 2 - INSIDE - Left Route Connector (VIRIDIAN Side) - 7,A",
        "level": "1", 
        "to" : "FR,3,20,2",
        "grouped" : ["FR,15,0,0", "FR,15,0,2"],
        "groupMain" : true,
        "connections" : {
            "FR,15,0,3": true
        }
    },
    "FR,15,0,2" : {
        "name": "ROUTE 2 - INSIDE - Left Route Connector (VIRIDIAN Side) - 8,A",
        "level": "1", 
        "to" : "FR,3,20,2",
        "grouped" : ["FR,15,0,0", "FR,15,0,1"]
    },
    "FR,15,0,3" : {
        "name": "ROUTE 2 - INSIDE - Left Route Connector (VIRIDIAN Side) (Woods Enterance) - 7,1",
        "level": "1", 
        "to" : "FR,1,0,0",
        "connections" : {
            "FR,15,0,1": true
        }
    },
    "FR,15,1,0" : {
        "name": "ROUTE 2 - INSIDE - House (abra, mr mime trade) - 3,7",
        "to" : "FR,3,20,4",
        "level": "3",
        "grouped" : ["FR,15,1,1", "FR,15,1,2"],
        "tags": ["extraDeadend"]
    },
    "FR,15,1,1" : {
        "name": "ROUTE 2 - INSIDE - House (abra, mr mime trade) - 4,7",
        "to" : "FR,3,20,4",
        "level": "3",
        "grouped" : ["FR,15,1,0", "FR,15,1,2"],
        "groupMain" : true,
        "tags": ["extraDeadend"]
    },
    "FR,15,1,2" : {
        "name": "ROUTE 2 - INSIDE - House (abra, mr mime trade) - 5,7",
        "to" : "FR,3,20,4",
        "level": "3",
        "grouped" : ["FR,15,1,0", "FR,15,1,1"],
        "tags": ["extraDeadend"]
    },
    "FR,15,2,0" : {
        "name": "ROUTE 2 - INSIDE - Right Route Connector - 6,A",
        "to" : "FR,3,20,5",
        "level": "3",
        "grouped" : ["FR,15,2,1", "FR,15,2,2"]
    },
    "FR,15,2,1" : {
        "name": "ROUTE 2 - INSIDE - Right Route Connector - 7,A",
        "to" : "FR,3,20,5",
        "level": "3",
        "grouped" : ["FR,15,2,0", "FR,15,2,2"],
        "groupMain" : true
    },
    "FR,15,2,2" : {
        "name": "ROUTE 2 - INSIDE - Right Route Connector - 8,A",
        "to" : "FR,3,20,5",
        "level": "3",
        "grouped" : ["FR,15,2,0", "FR,15,2,1"]
    },
    "FR,15,2,3" : {
        "name": "ROUTE 2 - OUTSIDE - Right Route Connector - 7,1",
        "to" : "FR,3,20,6",
        "level": "3",
    },
    "FR,15,3,0" : {
        "name": "ROUTE 2 - INSIDE - Left Route Connector (PEWTER Side) (Woods Exit) - 6,A",
        "level": "1", 
        "to" : "FR,1,0,2",
        "grouped" : ["FR,15,3,1", "FR,15,3,2"]
    },
    "FR,15,3,1" : {
        "name": "ROUTE 2 - INSIDE - Left Route Connector (PEWTER Side) (Woods Exit) - 7,A",
        "level": "1", 
        "to" : "FR,1,0,2",
        "grouped" : ["FR,15,3,0", "FR,15,3,2"],
        "groupMain" : true,
        "connections" : {
            "FR,15,3,3" : true
        }
    },
    "FR,15,3,2" : {
        "name": "ROUTE 2 - INSIDE - Left Route Connector (PEWTER Side) (Woods Exit) - 8,A",
        "level": "1", 
        "to" : "FR,1,0,2",
        "grouped" : ["FR,15,3,0", "FR,15,3,1"]
    },
    "FR,15,3,3" : {
        "name": "ROUTE 2 - INSIDE - Left Route Connector (PEWTER Side) - 7,1",
        "level": "1", 
        "to" : "FR,3,20,0",
        "connections" : {
            "FR,15,3,1" : true
        }
    },
/* VIRIDIAN FOREST */
    "FR,1,0,5" : {
        "name": "VIRIDIAN FOREST - OUTSIDE - PEWTER CITY SIDE (Exit) - 4,9",
        "level": "1", 
        "to" : "FR,15,3,1",
        "grouped" : ["FR,1,0,2", "FR,1,0,3"],
    },
    "FR,1,0,2" : {
        "name": "VIRIDIAN FOREST - OUTSIDE - PEWTER CITY SIDE (Exit) - 5,9",
        "level": "1", 
        "to" : "FR,15,3,1",
        "grouped" : ["FR,1,0,5", "FR,1,0,3"],
        "groupMain" : true,
        "connections" : {
            "FR,1,0,0" : true
        }
    },
    "FR,1,0,3" : {
        "name": "VIRIDIAN FOREST - OUTSIDE - PEWTER CITY SIDE (Exit) - 6,9",
        "level": "1", 
        "to" : "FR,15,3,1",
        "grouped" : ["FR,1,0,2", "FR,1,0,5"],
    },
    "FR,1,0,1" : {
        "name": "VIRIDIAN FOREST - OUTSIDE - VIRIDIAN SIDE (Enterance) - 1C,3E",
        "level": "1", 
        "to" : "FR,15,0,3",
        "grouped" : ["FR,1,0,0", "FR,1,0,4"],
    },
    "FR,1,0,0" : {
        "name": "VIRIDIAN FOREST - OUTSIDE - VIRIDIAN SIDE (Enterance) - 1D,3E",
        "level": "1", 
        "to" : "FR,15,0,3",
        "grouped" : ["FR,1,0,1", "FR,1,0,4"],
        "groupMain" : true,
        "connections" : {
            "FR,1,0,2" : true
        }
    },
    "FR,1,0,4" : {
        "name": "VIRIDIAN FOREST - OUTSIDE - VIRIDIAN SIDE (Enterance) - 1E,3E",
        "level": "1", 
        "to" : "FR,15,0,3",
        "grouped" : ["FR,1,0,0", "FR,1,0,1"],
    },
/* ROUTE 4 - EXT */
    "FR,3,22,0" : {
        "name": "ROUTE 4 - OUTSIDE - Mt Moon (Pewter Side) - 13,5",
        "level": "2", 
        "to" : "FR,1,1,3",
        "connections" : {
            "FR,3,22,2" : true
        }
    },
    "FR,3,22,1" : {
        "name": "ROUTE 4 - OUTSIDE - Mt Moon (Cerulean Side) - 20,5",
        "level": "2", 
        "to" : "FR,1,2,7",
        "connections" : {
            "FR,3,3,3" : true
        }
    },
    "FR,3,22,2" : {
        "name": "ROUTE 4 - OUTSIDE - PkCenter - C,5",
        "level": "2", 
        "to" : "FR,16,0,1",
        "connections" : {
            "FR,3,22,0" : true,
            "FR,3,2,5" : true
        }
    },
/* ROUTE 4 - INT */
    "FR,16,0,1" : {
        "name": "ROUTE 4 - INSIDE - PkCenter (Enterance) - 7,8",
        "level": "2", 
        "to" : "FR,3,22,2",
        "grouped" : ["FR,16,0,0", "FR,16,0,2"],
        "groupMain" : true,
        "connections" : {
            "FR,16,0,3" : true
        }
    },
    "FR,16,0,0" : {
        "name": "ROUTE 4 - INSIDE - PkCenter (Enterance) - 6,8",
        "level": "2", 
        "to" : "FR,3,22,2",
        "grouped" : ["FR,16,0,1", "FR,16,0,2"]
    },
    "FR,16,0,2" : {
        "name": "ROUTE 4 - INSIDE - PkCenter (Enterance) - 8,8",
        "level": "2", 
        "to" : "FR,3,22,2",
        "grouped" : ["FR,16,0,1", "FR,16,0,0"]
    },
    "FR,16,0,3" : {
        "name": "ROUTE 4 - INSIDE - PkCenter (Stairs) - 1,6",
        "level": "2", 
        "to" : "FR,16,1,0",
        "connections" : {
            "FR,16,0,1" : true
        }
    },
/* MT MOON */
//F1
    "FR,1,1,0" : {
        "name": "MT MOON - INSIDE - F1 TOP LEFT - 5,6",
        "level": "2", 
        "to" : "FR,1,2,0",
        "connections" : {
            "FR,1,1,1" : true,
            "FR,1,1,2" : true,
            "FR,1,1,3" : true
        }
    },
    "FR,1,1,1" : {
        "name": "MT MOON - INSIDE - F1 TOP Center - 13,E",
        "level": "2", 
        "to" : "FR,1,2,1",
        "connections" : {
            "FR,1,1,0" : true,
            "FR,1,1,2" : true,
            "FR,1,1,3" : true
        }
    },
    "FR,1,1,2" : {
        "name": "MT MOON - INSIDE - F1 TOP Right - 1F,10",
        "level": "2", 
        "to" : "FR,1,2,2",
        "connections" : {
            "FR,1,1,0" : true,
            "FR,1,1,1" : true,
            "FR,1,1,3" : true
        }
    },
    "FR,1,1,3" : {
        "name": "MT MOON - INSIDE - F1 Enterance - 12,25",
        "level": "2", 
        "to" : "FR,3,22,0",
        "connections" : {
            "FR,1,1,0" : true,
            "FR,1,1,1" : true,
            "FR,1,1,2" : true
        }
    },
// F2
    "FR,1,2,0" : {
        "name": "MT MOON - INSIDE - F2 'L' Room Top - 3,3",
        "level": "2", 
        "to" : "FR,1,1,0",
        "connections" : {
            "FR,1,2,3" : true
        }
    },
    "FR,1,2,1" : {
        "name": "MT MOON - INSIDE - F2 '-' Water Room Right - 19,4",
        "level": "2", 
        "to" : "FR,1,1,1",
        "connections" : {
            "FR,1,2,4" : true
        }
    },
    "FR,1,2,2" : {
        "name": "MT MOON - INSIDE - F2 Reverse 'L' Room Top - 2B,15",
        "level": "2", 
        "to" : "FR,1,1,2",
        "connections" : {
            "FR,1,2,5" : true
        }
    },
    "FR,1,2,3" : {
        "name": "MT MOON - INSIDE - F2 'L' Room Bottom - 16,12",
        "level": "2", 
        "to" : "FR,1,3,0",
        "connections" : {
            "FR,1,2,0" : true
        }
    },
    "FR,1,2,4" : {
        "name": "MT MOON - INSIDE - F2 '-' Water Room Left - 11,5",
        "level": "2", 
        "to" : "FR,1,3,1",
        "connections" : {
            "FR,1,2,1" : true
        }
    },
    "FR,1,2,5" : {
        "name": "MT MOON - INSIDE - F2 Reverse 'L' Room Bottom - 1A,24",
        "level": "2", 
        "to" : "FR,1,3,2",
        "connections" : {
            "FR,1,2,2" : true
        }
    },
    "FR,1,2,6" : {
        "name": "MT MOON - INSIDE - F2 '-' Rock Room Left - 27,4",
        "level": "2", 
        "to" : "FR,1,3,3",
        "connections" : {
            "FR,1,2,7" : true
        }
    },
    "FR,1,2,7" : {
        "name": "MT MOON - INSIDE - F2 '-' Rock Room Right - 2D,4",
        "level": "2", 
        "to" : "FR,3,22,1",
        "connections" : {
            "FR,1,2,6" : true
        }
    },
// F3
    "FR,1,3,0" : {
        "name": "MT MOON - INSIDE - F3 Center Ladder  - 19,15",
        "level": "2", 
        "to" : "FR,1,2,3",
        "connections" : {
            "FR,1,3,3" : true
        }
    },
    "FR,1,3,1" : {
        "name": "MT MOON - INSIDE - F3 Top Right Ladder  - 1F,B",
        "level": "2", 
        "to" : "FR,1,2,4",
        "tags": ["extraDeadend"]
    },
    "FR,1,3,2" : {
        "name": "MT MOON - INSIDE - F3 Top Bottom Left Ladder  - 11,1F",
        "level": "2", 
        "to" : "FR,1,2,5",
        "tags": ["extraDeadend"]
    },
    "FR,1,3,3" : {
        "name": "MT MOON - INSIDE - F3 Top Left Ladder  - 5,A",
        "level": "2", 
        "to" : "FR,1,2,6",
        "connections" : {
            "FR,1,3,0" : true
        }
    },
/* CERULEAN - EXT */
    "FR,3,3,0" : {
        "name": "CERULEAN CITY - OUTSIDE - Top Left  - 19,15",
        "level": "2", 
        "to" : "FR,7,0,1",
        "connections" : {
            "FR,3,3,3" : true
        }
    },
    "FR,3,3,1" : {
        "name": "CERULEAN CITY - OUTSIDE - Top Right (Robbed House)  - 1E,B",
        "to" : "FR,7,1,1",
        "level" : "2",
        "connections" : {
            "FR,3,3,3" : true
        },
        "tags": ["no_return"]
    },
    "FR,3,3,2" : {
        "name": "CERULEAN CITY - OUTSIDE - Left of PkCenter  - F,11",
        "to" : "FR,7,2,1",
        "level": "2", 
        "connections" : {
            "FR,3,3,3" : true
        }
    },
    "FR,3,3,3" : {
        "name": "CERULEAN CITY - OUTSIDE - PkCenter  - 16,13",
        "level": "2", 
        "to" : "FR,7,3,1",
        "connections" : {
            "FR,3,3,0" : true,
            "FR,3,3,1" : "SS_ANNE_TICKET",
            "FR,3,3,2" : true,
            "FR,3,3,4" : true,
            "FR,3,3,5" : true,
            "FR,3,3,6" : true,
            "FR,3,3,12" : true,
            "FR,3,3,13" : true,
            "FR,3,44,0" : true,
            "FR,3,23,0" : "KANTO_CUT"
        }
    },
    "FR,3,3,4" : {
        "name": "CERULEAN CITY - OUTSIDE - GYM  - 1F,15",
        "level": "2", 
        "to" : "FR,7,5,1",
        "connections" : {
            "FR,3,3,3" : true
        }
    },
    "FR,3,3,5" : {
        "name": "CERULEAN CITY - OUTSIDE - Bike Shop  - D,1C",
        "level": "2", 
        "to" : "FR,7,6,1",
        "groupMain" : true,
        "grouped" : ["FR,3,3,11"],
        "connections" : {
            "FR,3,3,3" : true
        }
    },
    "FR,3,3,11" : {
        "name": "CERULEAN CITY - OUTSIDE - Bike Shop  - E,1C",
        "level": "2", 
        "to" : "FR,7,6,1",
        "grouped" : ["FR,3,3,5"]
    },
    "FR,3,3,6" : {
        "name": "CERULEAN CITY - OUTSIDE - Mart  - 1D,1C",
        "level": "2", 
        "to" : "FR,7,7,1",
        "connections" : {
            "FR,3,3,3" : true
        }
    },
    "FR,3,3,7" : {
        "name": "CERULEAN CITY - OUTSIDE - Cerulean Cave Enterance  - 1,C",
        "to" : "FR,1,72,0",
        "level": "9", 
        "connections" : {
            "FR,3,3,3" : "KANTO_SURF"
        }
    },
    "FR,3,3,8" : {
        "name": "CERULEAN CITY - OUTSIDE - Top Left (Backdoor)  - A,8",
        "level": "2", 
        "to" : "FR,7,0,3",
        "tags": ["extraDeadend"]
    },
    "FR,3,3,9" : {
        "name": "CERULEAN CITY - OUTSIDE - Top Right (Robbed) (Backdoor)  - 1F,8",
        "to" : "FR,7,1,3",
        "level" : "3",
        "connections" : {
            "FR,3,3,3" : true,
            "FR,3,28,3" : "KANTO_CUT"
        }
    },
    "FR,3,3,12" : {
        "name": "CERULEAN CITY - OUTSIDE - Bottom  - 17,1C",
        "level": "2", 
        "to" : "FR,7,8,0",
        "connections" : {
            "FR,3,3,3" : true
        }
    },
    "FR,3,3,13" : {
        "name": "CERULEAN CITY - OUTSIDE - Top Center  - 11,B",
        "level": "2", 
        "to" : "FR,7,9,0",
        "connections" : {
            "FR,3,3,3" : true
        }
    },
/* CERULEAN - INT */
    "FR,7,0,1" : {
        "name": "CERULEAN CITY - INSIDE - Top Left (Enterance)  - 3,8",
        "level": "2", 
        "to" : "FR,3,3,0",
        "connections" : {
            "FR,7,0,3" : true
        }
    },
    "FR,7,0,3" : {
        "name": "CERULEAN CITY - INSIDE - Top Left (Backdoor)  - 3,1",
        "level": "2", 
        "to" : "FR,3,3,8",
        "connections" : {
            "FR,7,0,1" : true
        }
    },
    "FR,7,1,1" : {
        "name": "CERULEAN CITY - INSIDE - Top Right (Enterance)  - 3,7",
        "to" : "FR,3,3,1",
        "level" : "3",
        "connections" : {
            "FR,7,1,3" : true
        }
    },
    "FR,7,1,3" : {
        "name": "CERULEAN CITY - INSIDE - Top Right (Bakcdoor)  - 4,1",
        "to" : "FR,3,3,9",
        "level" : "3",
        "connections" : {
            "FR,7,1,1" : true
        }
    },
    "FR,7,2,1" : {
        "name": "CERULEAN CITY - INSIDE - Center - 4,7",
        "level": "2", 
        "to" : "FR,3,3,2",
        "tags": ["extraDeadend"]
    },
    "FR,7,3,1" : {
        "name": "CERULEAN CITY - INSIDE - PkCenter (Enterance)  - 7,8",
        "to" : "FR,3,3,3",
        "level": "2", 
        "connections" : {
            "FR,7,3,3" : true,
        }
    },
    "FR,7,3,3" : {
        "name": "CERULEAN CITY - INSIDE - PkCenter (Stairs)  - 1,6",
        "to" : "FR,7,4,0",
        "level": "2", 
        "connections" : {
            "FR,7,3,1" : true
        }
    },
    "FR,7,4,1" : {
        "name": "CERULEAN CITY - INSIDE - PkCenter (UpStairs)  - 1,6",
        "to" : "FR,7,3,3",
        "level": "2", 
        "ignore": true
    },
    "FR,7,5,1" : {
        "name": "CERULEAN CITY - INSIDE - GYM  - 8,12",
        "to" : "FR,3,3,4",
        "level": "2"
    },
    "FR,7,6,1" : {
        "name": "CERULEAN CITY - INSIDE - Bike Shop  - 5,8",
        "to" : "FR,3,3,5",
        "level": "2"
    },
    "FR,7,7,1" : {
        "name": "CERULEAN CITY - INSIDE - Mart  - 4,7",
        "to" : "FR,3,3,6",
        "level": "2"
    },
    "FR,7,8,0" : {
        "name": "CERULEAN CITY - INSIDE - Bottom - 4,7",
        "to" : "FR,3,3,12",
        "level": "2",
        "tags": ["removeable"]
    },
    "FR,7,9,0" : {
        "name": "CERULEAN CITY - INSIDE - Top Center  - 4,7",
        "to" : "FR,3,3,13",
        "level": "2",
        "tags": ["extraDeadend"]
    },
/* ROUTE 25 - EXT */
    "FR,3,44,0" : {
        "name": "ROUTE 25 - OUTSIDE - Bill's House  - 33,4",
        "level": "2", 
        "to" : "FR,30,0,1",
        "connections" : {
            "FR,3,3,3" : true
        }
    },
/* ROUTE 25 - INT */
    "FR,30,0,1" : {
        "name": "ROUTE 25 - INSIDE - Bill's House - 7,9",
        "level": "2", 
        "to" : "FR,3,44,0",
        "grouped" : ["FR,30,0,0", "FR,30,0,2"],
        "groupMain" : true
    },
    "FR,30,0,0" : {
        "name": "ROUTE 25 - INSIDE - Bill's House - 6,9",
        "level": "2", 
        "to" : "FR,3,44,0",
        "grouped" : ["FR,30,0,1", "FR,30,0,2"],
    },
    "FR,30,0,2" : {
        "name": "ROUTE 25 - INSIDE - Bill's House - 8,9",
        "level": "2", 
        "to" : "FR,3,44,0",
        "grouped" : ["FR,30,0,0", "FR,30,0,1"]
    },
/* ROUTE 5 - EXT */   
    "FR,3,23,0" : {
        "name": "ROUTE 5 - OUTSIDE - Underground Pass - 1F,1F",
        "level": "3", 
        "to" : "FR,1,30,1",
        "connections" : {
            "FR,3,3,3" : true,
            "FR,3,23,2" : true,
            "FR,3,23,1" : true,
            "FR,3,3,3" : "KANTO_CUT"
        }
    }, 
    "FR,3,23,1" : {
        "name": "ROUTE 5 - OUTSIDE - Day Care - 17,19",
        "level": "3", 
        "to" : "FR,17,0,1",
        "connections" : {
            "FR,3,23,0": true
        }
    },
    "FR,3,23,2" : {
        "name": "ROUTE 5 - OUTSIDE - Route Connector - 18,20",
        "level": "3", 
        "to" : "FR,17,1,1",
        "grouped" : ["FR,3,23,3"],
        "groupMain" : true,
        "connections" : {
            "FR,3,23,0": true
        }
    },
    "FR,3,23,3" : {
        "name": "ROUTE 5 - OUTSIDE - Route Connector - 19,20",
        "level": "3", 
        "to" : "FR,17,1,1",
        "grouped" : ["FR,3,23,2"]
    },
/* ROUTE 5 - INT */
    "FR,17,0,1" : {
        "name": "ROUTE 5 - INSIDE - Day Care - 3,7",
        "level": "3", 
        "to" : "FR,3,23,1",
        "tags": ["extraDeadend"]
    },
    "FR,17,1,1" : {
        "name": "ROUTE 5 - INSIDE - Route Connector Top - 4,1",
        "level": "3", 
        "to" : "FR,3,23,2",
        "connections" : {
            "FR,17,1,2": "TEA"
        }
    },
    "FR,17,1,2" : {
        "name": "ROUTE 5 - INSIDE - Route Connector Bottom - 4,9",
        "level": "3", 
        "to" : "FR,3,10,9",
        "connections" : {
            "FR,17,1,1": true
        }
    },
/* Underground Path */
// Route 5 Side
    "FR,1,30,1" : {
        "name": "UNDERGROUND PATH - INSIDE - Route 5 Side Enterance - 6,8",
        "level": "3", 
        "to" : "FR,3,23,0",
        "connections" : {
            "FR,1,30,3": true
        }
    },
    "FR,1,30,3" : {
        "name": "UNDERGROUND PATH - INSIDE - Route 5 Side Stairs - 7,4",
        "level": "3", 
        "to" : "FR,1,31,0",
        "connections" : {
            "FR,1,30,1": true
        }
    },
// Underground Vertical   
    "FR,1,31,0" : {
        "name": "UNDERGROUND PATH - INSIDE - Vertical Top - 4,3",
        "level": "3", 
        "to" : "FR,1,30,3",
        "connections" : {
            "FR,1,31,1": true
        }
    },
    "FR,1,31,1" : {
        "name": "UNDERGROUND PATH - INSIDE - Vertical Bottom - 3,3C",
        "level": "3", 
        "to" : "FR,1,32,3",
        "connections" : {
            "FR,1,31,0": true
        }
    },
// Route 6 Side
    "FR,1,32,1" : {
        "name": "UNDERGROUND PATH - INSIDE - Route 6 Side Enterance - 6,8",
        "level": "3", 
        "to" : "FR,3,24,0",
        "connections" : {
            "FR,1,32,3": true
        }
    },
    "FR,1,32,3" : {
        "name": "UNDERGROUND PATH - INSIDE - Route 6 Side Stairs - 7,4",
        "level": "3", 
        "to" : "FR,1,31,1",
        "connections" : {
            "FR,1,32,1": true
        }
    },
/* ROUTE 6 - EXT */
    "FR,3,24,0" : {
        "name": "ROUTE 6 - OUTSIDE - Underground Path - 13,D",
        "level": "3", 
        "to" : "FR,1,32,1",
        "connections" : {
            "FR,3,24,1": true,
            "FR,3,5,4" : true
        }
    },
    "FR,3,24,1" : {
        "name": "ROUTE 6 - OUTSIDE - Route Connector - C,5",
        "level": "3", 
        "to" : "FR,18,0,2",
        "grouped" : ["FR,3,24,2"],
        "groupMain" : true,
        "connections" : {
            "FR,3,24,0": true,
            "FR,3,5,4" : true
        }
    },
    "FR,3,24,2" : {
        "name": "ROUTE 6 - OUTSIDE - Route Connector - D,5",
        "level": "3", 
        "to" : "FR,18,0,2",
        "grouped" : ["FR,3,24,1"]
    },
/* ROUTE 6 - INT */
    "FR,18,0,0" : {
        "name": "ROUTE 6 - INSIDE - Route Connector Top - 4,1",
        "level": "3", 
        "to" : "FR,3,10,11",
        "connections" : {
            "FR,18,0,2": true
        }
    },
    "FR,18,0,2" : {
        "name": "ROUTE 6 - INSIDE - Route Connector Bottom - 4,9",
        "level": "3", 
        "to" : "FR,3,24,1",
        "connections" : {
            "FR,18,0,1": "TEA"
        }
    },
/* VERMILION CITY - EXT */
    "FR,3,5,0" : {
        "name": "VERMILLION CITY - OUTSIDE - S.S.Anne - 16,22",
        "level": "3", 
        "to" : "FR,1,4,1",
        "grouped" : ["FR,3,5,1", "FR,3,5,2"],
        "groupMain" : true,
        "connections" : {
            "FR,3,5,4": true
        },
        "tags": ["no_return"]
    },
    "FR,3,5,1" : {
        "name": "VERMILLION CITY - OUTSIDE - S.S.Anne - 17,22",
        "level": "3", 
        "to" : "FR,1,4,1",
        "grouped" : ["FR,3,5,0"]
    },
    "FR,3,5,2" : {
        "name": "VERMILLION CITY - OUTSIDE - S.S.Anne - 18,22",
        "level": "3", 
        "to" : "FR,1,4,1",
        "grouped" : ["FR,3,5,0"],
    },
    "FR,3,5,3" : {
        "name": "VERMILLION CITY - OUTSIDE - Top Left - 9,6",
        "level": "3", 
        "to" : "FR,9,0,1",
        "connections" : {
            "FR,3,5,4": true
        }
    },
    "FR,3,5,4" : {
        "name": "VERMILLION CITY - OUTSIDE - PkCenter - F,6",
        "level": "3", 
        "to" : "FR,9,1,1",
        "connections" : {
            "FR,3,5,3": true,
            "FR,3,5,5": true,
            "FR,3,5,6": true,
            "FR,3,5,7": true,
            "FR,3,5,8": true,
            "FR,3,5,9": true,
            "FR,3,24,0": true,
            "FR,3,24,1": true,
            "FR,3,29,0": true,
            "FR,3,29,1": true,
            "FR,3,5,0": "SS_ANNE_TICKET",
            "FR,3,5,9": "KANTO_CUT"
        }
    },
    "FR,3,5,5" : {
        "name": "VERMILLION CITY - OUTSIDE - Fan Club - C,11",
        "level": "3", 
        "to" : "FR,9,3,1",
        "connections" : {
            "FR,3,5,4": true
        }
    },
    "FR,3,5,6" : {
        "name": "VERMILLION CITY - OUTSIDE - Center - 13,11",
        "level": "3", 
        "to" : "FR,9,4,1",
        "connections" : {
            "FR,3,5,4": true
        }
    },
    "FR,3,5,7" : {
        "name": "VERMILLION CITY - OUTSIDE - Mart - 1D,11",
        "level": "3", 
        "to" : "FR,9,5,1",
        "connections" : {
            "FR,3,5,4": true
        }
    },
    "FR,3,5,8" : {
        "name": "VERMILLION CITY - OUTSIDE - Bottom Right - 1C,18",
        "level": "3", 
        "to" : "FR,9,7,1",
        "connections" : {
            "FR,3,5,4": true
        }
    },
    "FR,3,5,9" : {
        "name": "VERMILLION CITY - OUTSIDE - GYM - E,19",
        "level": "3", 
        "to" : "FR,9,6,1",
        "connections" : {
            "FR,3,5,4": "KANTO_CUT"
        }
    },
/* VERMILION CITY - INT */
    "FR,9,0,1" : {
        "name": "VERMILLION CITY - INSIDE - Top, Left - 3,7",
        "level": "3", 
        "to" : "FR,3,5,3",
        "tags": ["extraDeadend"]
    },
    "FR,9,1,1" : {
        "name": "VERMILLION CITY - INSIDE - PkCenter Enterance - 6,8",
        "level": "3", 
        "to" : "FR,3,5,4",
        "connections" : {
            "FR,9,1,3": true,
        }
    },
    "FR,9,1,3" : {
        "name": "VERMILLION CITY - INSIDE - PkCenter Stairs - 1,6",
        "level": "3", 
        "to" : "FR,9,2,0",
        "connections" : {
            "FR,9,1,1": true
        }
    },
    "FR,9,2,0" : {
        "name": "VERMILLION CITY - INSIDE - PkCenter Upstairs Stairs - 1,6",
        "level": "3", 
        "to" : "FR,9,1,3",
        "ignore": true
    },
    "FR,9,3,1" : {
        "name": "VERMILLION CITY - INSIDE - Fan Club - 4,A",
        "level": "3", 
        "to" : "FR,3,5,5"
    },
    "FR,9,4,1" : {
        "name": "VERMILLION CITY - INSIDE - Center House - 4,7",
        "level": "3", 
        "to" : "FR,3,5,6",
        "tags": ["extraDeadend"]
    },
    "FR,9,5,1" : {
        "name": "VERMILLION CITY - INSIDE - Mart - 3,7",
        "level": "3", 
        "to" : "FR,3,5,7"
    },
    "FR,9,6,1" : {
        "name": "VERMILLION CITY - INSIDE - GYM - 4,13",
        "level": "3", 
        "to" : "FR,3,5,9"
    },
    "FR,9,7,1" : {
        "name": "VERMILLION CITY - INSIDE - Bottom Right - 4,7",
        "level": "3", 
        "to" : "FR,3,5,8",
        "tags": ["removeable"]
    },
/* ROUTE 11 - EXT */
    "FR,3,29,0" : {
        "name": "ROUTE 11 - OUTSIDE - Digglet Cave Enterance - 6,7",
        "level": "3", 
        "to" : "FR,1,38,0",
        "connections" : {
            "FR,3,5,4": true,
            "FR,3,29,1": true
        }
    },
    "FR,3,29,1" : {
        "name": "ROUTE 11 - OUTSIDE - Route Connector Left - 3A,A",
        "level": "3", 
        "to" : "FR,22,0,0",
        "connections" : {
            "FR,3,5,4": true,
            "FR,3,29,0": true
        }
    },
    "FR,3,29,2" : {
        "name": "ROUTE 11 - OUTSIDE - Route Connector Right - 3A,A",
        "level": "3", 
        "to" : "FR,22,0,2",
        "connections" : {
            "FR,3,30,3": "POKE_FLUTE",
            "FR,3,33,1": "POKE_FLUTE"
        }
    },
/* ROUTE 11 - INT */
    "FR,22,0,0" : {
        "name": "ROUTE 11 - INSIDE - Route Connector Left - 1,6",
        "level": "3", 
        "to" : "FR,3,29,1",
        "connections" : {
            "FR,22,0,2": true,
            "FR,22,0,4": true
        }
    },
    "FR,22,0,2" : {
        "name": "ROUTE 11 - INSIDE - Route Connector Right - 9,A",
        "level": "3", 
        "to" : "FR,3,29,2",
        "connections" : {
            "FR,22,0,0": true,
            "FR,22,0,4": true
        }
    },
    "FR,22,0,4" : {
        "name": "ROUTE 11 - INSIDE - Route Connector Stairs - B,6",
        "level": "3", 
        "to" : "FR,22,1,0",
        "connections" : {
            "FR,22,0,0": true,
            "FR,22,0,2": true
        }
    },
    "FR,22,1,0" : {
        "name": "ROUTE 11 - INSIDE - Route Connector Upstairs - A,9",
        "level": "3", 
        "to" : "FR,22,0,4",
        "tags": ["extraDeadend"]
    },
/* Digglet Cave */
// Pewter Side
    "FR,1,36,0" : {
        "name": "DIGGLET CAVE - INSIDE - Pewter Side Ladder - 6,4",
        "level": "3", 
        "to" : "FR,1,37,0",
        "connections" : {
            "FR,1,36,1": true
        }
    },
    "FR,1,36,1" : {
        "name": "DIGGLET CAVE - INSIDE - Pewter Side Enterance - 6,4",
        "level": "3", 
        "to" : "FR,3,20,3",
        "connections" : {
            "FR,1,36,0": true
        }
    },
// Long Cave
    "FR,1,37,0" : {
        "name": "DIGGLET CAVE - INSIDE - Long Cave Top - 3,3",
        "level": "3", 
        "to" : "FR,1,36,0",
        "connections" : {
            "FR,1,37,1": true
        }
    },
    "FR,1,37,1" : {
        "name": "DIGGLET CAVE - INSIDE - Long Cave Bottom - 52,47",
        "level": "3", 
        "to" : "FR,1,38,1",
        "connections" : {
            "FR,1,37,0": true
        }
    },
// Pewter Side
    "FR,1,38,0" : {
        "name": "DIGGLET CAVE - INSIDE - Vermillion Side Enterance - 4,6",
        "level": "3", 
        "to" : "FR,3,29,0",
        "connections" : {
            "FR,1,38,1": true
        }
    },
    "FR,1,38,1" : {
        "name": "DIGGLET CAVE - INSIDE - Vermillion Side Ladder - 6,4",
        "level": "3", 
        "to" : "FR,1,37,1",
        "connections" : {
            "FR,1,38,0": true
        }
    },
/* S.S ANNE */
// F1
    "FR,1,5,0" : {
        "name": "S.S ANNE - INSIDE - F1 Top Right Stairs - 3,8",
        "level": "3", 
        "to" : "FR,1,6,0",
        "connections" : {
            "FR,3,5,4": true,
            "FR,1,5,1": true,
            "FR,1,5,2": true,
            "FR,1,5,5": true,
            "FR,1,5,6": true,
            "FR,1,5,7": true,
            "FR,1,5,8": true,
            "FR,1,5,9": true,
            "FR,1,5,10": true,
            "FR,1,5,11": true,
            "FR,1,5,12": true,
        }
    },
    "FR,1,5,1" : {
        "name": "S.S ANNE - INSIDE - F1 Kitchen Door - 2,12",
        "level": "3", 
        "to" : "FR,1,10,0",
        "connections" : {
            "FR,1,5,0": true,
        }
    },
    "FR,1,5,2" : {
        "name": "S.S ANNE - INSIDE - Exit - 13,1",
        "level": "3", 
        "to" : "FR,1,4,2",
        "connections" : {
            "FR,1,5,0": true,
        }
    },
    "FR,1,5,5" : {
        "name": "S.S ANNE - INSIDE - F1 Bottom Right Stairs - 1C,11",
        "level": "3", 
        "to" : "FR,1,8,0",
        "connections" : {
            "FR,1,5,0": true,
        }
    },
    "FR,1,5,6" : {
        "name": "S.S ANNE - INSIDE - F1 Cabin 1 - 5,A",
        "level": "3", 
        "to" : "FR,1,12,0",
        "connections" : {
            "FR,1,5,0": true,
        }
    },
    "FR,1,5,7" : {
        "name": "S.S ANNE - INSIDE - F1 Cabin 2 - 8,A",
        "level": "3", 
        "to" : "FR,1,13,0",
        "connections" : {
            "FR,1,5,0": true,
        }
    },
    "FR,1,5,8" : {
        "name": "S.S ANNE - INSIDE - F1 Cabin 3 - B,A",
        "level": "3", 
        "to" : "FR,1,14,0",
        "connections" : {
            "FR,1,5,0": true,
        }
    },
    "FR,1,5,9" : {
        "name": "S.S ANNE - INSIDE - F1 Cabin 4 - E,A",
        "level": "3", 
        "to" : "FR,1,15,0",
        "connections" : {
            "FR,1,5,0": true,
        }
    },
    "FR,1,5,10" : {
        "name": "S.S ANNE - INSIDE - F1 Cabin 5 - 11,A",
        "level": "3", 
        "to" : "FR,1,16,0",
        "connections" : {
            "FR,1,5,0": true,
        }
    },
    "FR,1,5,11" : {
        "name": "S.S ANNE - INSIDE - F1 Cabin 7 - 17,A",
        "level": "3", 
        "to" : "FR,1,17,0",
        "connections" : {
            "FR,1,5,0": true,
        }
    },
    "FR,1,5,12" : {
        "name": "S.S ANNE - INSIDE - F1 Cabin 6 - 14,A",
        "level": "3", 
        "to" : "FR,1,29,0",
        "connections" : {
            "FR,1,5,0": true,
        }
    },
// F2
    "FR,1,6,0" : {
        "name": "S.S ANNE - INSIDE - F2 Stairs Top Left - 2,2",
        "level": "3", 
        "to" : "FR,1,5,0",
        "connections" : {
            "FR,1,6,1": true,
            "FR,1,6,2": true,
            "FR,1,6,3": true,
            "FR,1,6,4": true,
            "FR,1,6,5": true,
            "FR,1,6,6": true,
            "FR,1,6,7": true,
            "FR,1,6,8": true
        }
    },
    "FR,1,6,1" : {
        "name": "S.S ANNE - INSIDE - F2 Stairs Bottom Left - 3,C",
        "level": "3", 
        "to" : "FR,1,7,1",
        "connections" : {
            "FR,1,6,0": true
        }
    },
    "FR,1,6,2" : {
        "name": "S.S ANNE - INSIDE - F2 Stairs Top right - 1E,2",
        "level": "3", 
        "to" : "FR,1,11,0",
        "connections" : {
            "FR,1,6,0": true
        }
    },
    "FR,1,6,3" : {
        "name": "S.S ANNE - INSIDE - F2 Cabin 1 - 6,A",
        "level": "3", 
        "to" : "FR,1,18,0",
        "connections" : {
            "FR,1,6,0": true
        }
    },
    "FR,1,6,4" : {
        "name": "S.S ANNE - INSIDE - F2 Cabin 2 - A,A",
        "level": "3", 
        "to" : "FR,1,19,0",
        "connections" : {
            "FR,1,6,0": true
        }
    },
    "FR,1,6,5" : {
        "name": "S.S ANNE - INSIDE - F2 Cabin 3 - E,A",
        "level": "3", 
        "to" : "FR,1,20,0",
        "connections" : {
            "FR,1,6,0": true
        }
    },
    "FR,1,6,6" : {
        "name": "S.S ANNE - INSIDE - F2 Cabin 4 - A,A",
        "level": "3", 
        "to" : "FR,1,21,0",
        "connections" : {
            "FR,1,6,0": true
        }
    },
    "FR,1,6,7" : {
        "name": "S.S ANNE - INSIDE - F2 Cabin 5 - 16,A",
        "level": "3", 
        "to" : "FR,1,22,0",
        "connections" : {
            "FR,1,6,0": true
        }
    },
    "FR,1,6,8" : {
        "name": "S.S ANNE - INSIDE - F2 Cabin 6 - 1A,A",
        "level": "3", 
        "to" : "FR,1,23,0",
        "connections" : {
            "FR,1,6,0": true
        }
    },
// F3
    "FR,1,7,0" : {
        "name": "S.S ANNE - INSIDE - F3 (Corridor) Left door - 1,4",
        "level": "3", 
        "to" : "FR,1,9,0",
        "connections" : {
            "FR,1,7,1": true
        }
    },
    "FR,1,7,1" : {
        "name": "S.S ANNE - INSIDE - F3 (Corridor) Right stairs - 12,2",
        "level": "3", 
        "to" : "FR,1,6,1",
        "connections" : {
            "FR,1,7,0": true
        }
    },
// F4
    "FR,1,8,0" : {
        "name": "S.S ANNE - INSIDE - F4 (Bellow Deck) Stairs - 13,3",
        "level": "3", 
        "to" : "FR,1,5,5",
        "connections" : {
            "FR,1,8,1": true,
            "FR,1,8,2": true,
            "FR,1,8,3": true,
            "FR,1,8,4": true,
            "FR,1,8,5": true
        }
    },
    "FR,1,8,1" : {
        "name": "S.S ANNE - INSIDE - F4 (Bellow Deck) Cabin 1 - 2,2",
        "level": "3", 
        "to" : "FR,1,24,0",
        "connections" : {
            "FR,1,8,0": true
        }
    },
    "FR,1,8,2" : {
        "name": "S.S ANNE - INSIDE - F4 (Bellow Deck) Cabin 2 - 6,2",
        "level": "3", 
        "to" : "FR,1,25,0",
        "connections" : {
            "FR,1,8,0": true
        }
    },
    "FR,1,8,3" : {
        "name": "S.S ANNE - INSIDE - F4 (Bellow Deck) Cabin 3 - 6,2",
        "level": "3", 
        "to" : "FR,1,26,0",
        "connections" : {
            "FR,1,8,0": true
        }
    },
    "FR,1,8,4" : {
        "name": "S.S ANNE - INSIDE - F4 (Bellow Deck) Cabin 4 - E,2",
        "level": "3", 
        "to" : "FR,1,27,0",
        "connections" : {
            "FR,1,8,0": true
        }
    },
    "FR,1,8,5" : {
        "name": "S.S ANNE - INSIDE - F4 (Bellow Deck) Cabin 5 - 12,2",
        "level": "3", 
        "to" : "FR,1,28,0",
        "connections" : {
            "FR,1,8,0": true
        }
    },
// Bow
    "FR,1,9,0" : {
        "name": "S.S ANNE - INSIDE - Bow - 10,8",
        "level": "3", 
        "to" : "FR,1,7,0",
        "grouped" : ["FR,1,9,1"],
        "groupMain" : true,
        "tags": ["extraDeadend"]
    },
    "FR,1,9,1" : {
        "name": "S.S ANNE - INSIDE - Bow - 10,9",
        "level": "3", 
        "to" : "FR,1,7,0",
        "grouped" : ["FR,1,9,0"],
        "tags": ["extraDeadend"]
    },
// Kitchen
    "FR,1,10,0" : {
        "name": "S.S ANNE - INSIDE - Kitchen - 7,1",
        "level": "3", 
        "to" : "FR,1,5,1"
    },
// Rooms
    "FR,1,11,0" : {
        "name": "S.S ANNE - INSIDE - Capains Cabin (cut) - 3,7",
        "level": "3", 
        "to" : "FR,1,6,2"
    },
    "FR,1,12,0" : {
        "name": "S.S ANNE - INSIDE - F1 Cabin 1 - 2,1",
        "level": "3", 
        "to" : "FR,1,5,6",
        "tags": ["removeable"]
    },
    "FR,1,13,0" : {
        "name": "S.S ANNE - INSIDE - F1 Cabin 2 - 2,1",
        "level": "3", 
        "to" : "FR,1,5,7",
        "tags": ["removeable"]
    },
    "FR,1,14,0" : {
        "name": "S.S ANNE - INSIDE - F1 Cabin 3 - 2,1",
        "level": "3", 
        "to" : "FR,1,5,8",
        "tags": ["removeable"]
    },
    "FR,1,15,0" : {
        "name": "S.S ANNE - INSIDE - F1 Cabin 4 - 2,1",
        "level": "3", 
        "to" : "FR,1,5,9",
        "tags": ["removeable"]
    },
    "FR,1,16,0" : {
        "name": "S.S ANNE - INSIDE - F1 Cabin 5 - 2,1",
        "level": "3", 
        "to" : "FR,1,5,10",
        "tags": ["removeable"]
    },
    "FR,1,17,0" : {
        "name": "S.S ANNE - INSIDE - F1 Cabin 7 - 2,1",
        "level": "3", 
        "to" : "FR,1,5,11",
        "tags": ["removeable"]
    },
    "FR,1,29,0" : {
        "name": "S.S ANNE - INSIDE - F1 Cabin 6 - 2,1",
        "level": "3", 
        "to" : "FR,1,5,12",
        "tags": ["removeable"]
    },
    "FR,1,18,0" : {
        "name": "S.S ANNE - INSIDE - F2 Cabin 1 - 4,7",
        "level": "3", 
        "to" : "FR,1,6,3",
        "tags": ["removeable"]
    },
    "FR,1,19,0" : {
        "name": "S.S ANNE - INSIDE - F2 Cabin 2 - 4,7",
        "level": "3", 
        "to" : "FR,1,6,4",
        "tags": ["removeable"]
    },
    "FR,1,20,0" : {
        "name": "S.S ANNE - INSIDE - F2 Cabin 3 - 4,7",
        "level": "3", 
        "to" : "FR,1,6,5",
        "tags": ["removeable"]
    },
    "FR,1,21,0" : {
        "name": "S.S ANNE - INSIDE - F2 Cabin 4 - 4,7",
        "level": "3", 
        "to" : "FR,1,6,6",
        "tags": ["removeable"]
    },
    "FR,1,22,0" : {
        "name": "S.S ANNE - INSIDE - F2 Cabin 5 - 4,7",
        "level": "3", 
        "to" : "FR,1,6,7",
        "tags": ["removeable"]
    },
    "FR,1,23,0" : {
        "name": "S.S ANNE - INSIDE - F2 Cabin 6 - 4,7",
        "level": "3", 
        "to" : "FR,1,6,8",
        "tags": ["removeable"]
    },
    "FR,1,24,0" : {
        "name": "S.S ANNE - INSIDE - F4 (Bellow Deck) Cabin 1 - 4,7",
        "level": "3", 
        "to" : "FR,1,8,1",
        "ignore": true
    },
    "FR,1,25,0" : {
        "name": "S.S ANNE - INSIDE - F4 (Bellow Deck) Cabin 2 - 4,7",
        "level": "3", 
        "to" : "FR,1,8,2",
        "ignore": true
    },
    "FR,1,26,0" : {
        "name": "S.S ANNE - INSIDE - F4 (Bellow Deck) Cabin 3 - 4,7",
        "level": "3", 
        "to" : "FR,1,8,3",
        "ignore": true
    },
    "FR,1,27,0" : {
        "name": "S.S ANNE - INSIDE - F4 (Bellow Deck) Cabin 4 - 4,7",
        "level": "3", 
        "to" : "FR,1,8,4",
        "ignore": true
    },
    "FR,1,28,0" : {
        "name": "S.S ANNE - INSIDE - F4 (Bellow Deck) Cabin 5 - 4,7",
        "level": "3", 
        "to" : "FR,1,8,5",
        "ignore": true
    },
    /* ROUTE 10 - EXT */
    "FR,3,28,0" : {
        "name": "ROUTE 10 - OUTSIDE - Rock Tunnel Top enterance - 8,13",
        "level": "3", 
        "to" : "FR,1,81,0",
        "connections" : {
            "FR,3,28,3": true
        }
    },
    "FR,3,28,1" : {
        "name": "ROUTE 10 - OUTSIDE - Rock Tunnel Bottom enterance - 8,39",
        "level": "4", 
        "to" : "FR,1,81,5",
        "connections" : {
            "FR,3,4,1": true
        }
    },
    "FR,3,28,2" : {
        "name": "ROUTE 10 - OUTSIDE - Power Plant Front - 7,28",
        "level": "6", 
        "to" : "FR,1,95,1",
        "connections" : {
            "FR,3,28,3": "KANTO_SURF"
        }
    },
    "FR,3,28,3" : {
        "name": "ROUTE 10 - OUTSIDE - Route 10 PkCenter - D,14",
        "level": "3", 
        "to" : "FR,21,0,1",
        "connections" : {
            "FR,3,28,0": true,
            "FR,3,3,9": "KANTO_CUT",
            "FR,3,28,2": "KANTO_SURF"
        }
    },
    "FR,3,28,4" : {
        "name": "ROUTE 10 - OUTSIDE - Power Plant Side Enterance - 2,25",
        "level": "4", 
        "to" : "FR,1,95,3",
        "connections" : {
            "FR,3,28,2": true
        }
    },
    /* ROUTE 10 - INT */
    "FR,21,0,1" : {
        "name": "ROUTE 10 - INSIDE - PkCenter Enterance - 7,8",
        "level": "3", 
        "to" : "FR,3,28,3",
        "connections" : {
            "FR,21,0,3": true,
        }
    },
    "FR,21,0,3" : {
        "name": "ROUTE 10 - INSIDE - PkCenter Stairs - 1,6",
        "level": "3", 
        "to" : "FR,21,1,0",
        "connections" : {
            "FR,21,0,1": true
        }
    },
    "FR,21,1,0" : {
        "name": "ROUTE 10 - INSIDE - PkCenter Upstairs - 1,6",
        "level": "3", 
        "to" : "FR,21,0,3",
        "ignore": true
    },
    /* ROCK TUNNEL */
        // F1
        "FR,1,81,0" : {
            "name": "ROCK TUNNLE - INSIDE - F1 Ladder top center - 11,2",
            "level": "4", 
            "to" : "FR,3,28,0",
            "connections" : {
                "FR,1,81,1": true
            }
        },
        "FR,1,81,1" : {
            "name": "ROCK TUNNLE - INSIDE - F1 Ladder top right - 2D,2",
            "level": "4", 
            "to" : "FR,1,82,0",
            "connections" : {
                "FR,1,81,0": true
            }
        },
        "FR,1,81,2" : {
            "name": "ROCK TUNNLE - INSIDE - F1 Ladder top left - 4,2",
            "level": "4", 
            "to" : "FR,1,82,1",
            "connections" : {
                "FR,1,81,3": true
            }
        },
        "FR,1,81,3" : {
            "name": "ROCK TUNNLE - INSIDE - F1 Ladder middle center - 14,D",
            "level": "4", 
            "to" : "FR,1,82,2",
            "connections" : {
                "FR,1,81,2": true
            }
        },
        "FR,1,81,4" : {
            "name": "ROCK TUNNLE - INSIDE - F1 Ladder middle right - 2D,15",
            "level": "4", 
            "to" : "FR,1,82,3",
            "connections" : {
                "FR,1,81,5": true
            }
        },
        "FR,1,81,5" : {
            "name": "ROCK TUNNLE - INSIDE - F1 Bottom Enterance - 12,25",
            "level": "4", 
            "to" : "FR,3,28,1",
            "connections" : {
                "FR,1,81,4": true
            }
        },
        // F2
        "FR,1,82,0" : {
            "name": "ROCK TUNNLE - INSIDE - F2 Ladder bottom right - 21,3",
            "level": "4", 
            "to" : "FR,1,81,1",
            "connections" : {
                "FR,1,82,1": true
            }
        },
        "FR,1,82,1" : {
            "name": "ROCK TUNNLE - INSIDE - F2 Ladder top right - 21,3",
            "level": "4", 
            "to" : "FR,1,81,2",
            "connections" : {
                "FR,1,82,0": true
            }
        },
        "FR,1,82,2" : {
            "name": "ROCK TUNNLE - INSIDE - F2 Ladder middle center - 1B,C",
            "level": "4", 
            "to" : "FR,1,81,3",
            "connections" : {
                "FR,1,82,3": true
            }
        },
        "FR,1,82,3" : {
            "name": "ROCK TUNNLE - INSIDE - F2 Ladder left top - 2,3",
            "level": "4", 
            "to" : "FR,1,81,4",
            "connections" : {
                "FR,1,82,2": true
            }
        },
    /* LAVENDER TOWN - EXT */
    "FR,3,4,0" : {
        "name": "LAVENDER TOWN - OUTSIDE - Pokemon Tower - 12,6",
        "level": "4", 
        "to" : "FR,1,88,1",
        "connections" : {
            "FR,3,4,1": true
        }
    },
    "FR,3,4,1" : {
        "name": "LAVENDER TOWN - OUTSIDE - PkCenter - 6,5",
        "level": "4", 
        "to" : "FR,8,0,1",
        "connections" : {
            "FR,3,4,0": true,
            "FR,3,4,2": true,
            "FR,3,4,3": true,
            "FR,3,4,4": true,
            "FR,3,4,5": true,
            "FR,3,28,1": true,
            "FR,3,30,1": true,
            "FR,3,26,0": true,
            "FR,3,26,1": true
        }
    },
    "FR,3,4,2" : {
        "name": "LAVENDER TOWN - OUTSIDE - Center House - A,B",
        "level": "4", 
        "to" : "FR,8,2,1",
        "connections" : {
            "FR,3,4,1": true
        }
    },
    "FR,3,4,3" : {
        "name": "LAVENDER TOWN - OUTSIDE - Bottom Left - 5,10",
        "level": "4", 
        "to" : "FR,8,3,1",
        "connections" : {
            "FR,3,4,1": true
        }
    },
    "FR,3,4,4" : {
        "name": "LAVENDER TOWN - OUTSIDE - Bottom - A,10",
        "level": "4", 
        "to" : "FR,8,4,1",
        "connections" : {
            "FR,3,4,1": true
        }
    },
    "FR,3,4,5" : {
        "name": "LAVENDER TOWN - OUTSIDE - Mart - 14,F",
        "level": "4", 
        "to" : "FR,8,5,1",
        "connections" : {
            "FR,3,4,1": true
        }
    },
    /* LAVENDER TOWN - INT */
    "FR,8,0,1" : {
        "name": "LAVENDER TOWN - INSIDE - PkCenter Enterance - 7,8",
        "level": "4", 
        "to" : "FR,3,4,1",
        "connections" : {
            "FR,8,0,3": true,
        }
    },
    "FR,8,0,3" : {
        "name": "LAVENDER TOWN - INSIDE - PkCenter Stairs - 1,6",
        "level": "4", 
        "to" : "FR,8,1,0",
        "connections" : {
            "FR,8,0,1": true
        }
    },
    "FR,8,1,0" : {
        "name": "LAVENDER TOWN - INSIDE - PkCenter Upstairs - 1,6",
        "level": "4", 
        "to" : "FR,8,0,3",
        "ignore" : "true"
    },
    "FR,8,2,1" : {
        "name": "LAVENDER TOWN - INSIDE - Center House - 4,7",
        "level": "4", 
        "to" : "FR,3,4,2"
    },
    "FR,8,3,1" : {
        "name": "LAVENDER TOWN - INSIDE - Bottom Left - 4,7",
        "level": "4", 
        "to" : "FR,3,4,3",
        "tags": ["removeable"]
    },
    "FR,8,4,1" : {
        "name": "LAVENDER TOWN - INSIDE - Bottom - 4,7",
        "level": "4", 
        "to" : "FR,3,4,4",
        "tags": ["extraDeadend"]
    },
    "FR,8,5,1" : {
        "name": "LAVENDER TOWN - INSIDE - Mart - 4,7",
        "level": "4", 
        "to" : "FR,3,4,5"
    },
    /* ROUTE 12 - EXT */
    "FR,3,30,0" : {
        "name": "ROUTE 12 - INSIDE - House - C,56",
        "level": "5", 
        "to" : "FR,23,2,1",
        "connections" : {
            "FR,3,33,1": true,
            "FR,3,30,3": "KANTO_SURF"
        }
    },
    "FR,3,30,1" : {
        "name": "ROUTE 12 - INSIDE - Route Connector Top - E,F",
        "level": "4", 
        "to" : "FR,23,0,0",
        "connections" : {
            "FR,3,4,0": true
        }
    },
    "FR,3,30,3" : {
        "name": "ROUTE 12 - INSIDE - Route Connector Bottom - E,15",
        "level": "4", 
        "to" : "FR,23,0,2",
        "connections" : {
            "FR,3,33,1": "POKE_FLUTE",
            "FR,3,29,2": "POKE_FLUTE",
            "FR,3,30,0": "KANTO_SURF"
        }
    },
    /* ROUTE 12 - INT */
    "FR,23,0,0" : {
        "name": "ROUTE 12 - INSIDE - Route Connector Top - 5,1",
        "level": "4", 
        "to" : "FR,3,30,1",
        "connections" : {
            "FR,23,0,2": true,
            "FR,23,0,4": true
        }
    },
    "FR,23,0,2" : {
        "name": "ROUTE 12 - INSIDE - Route Connector Bottom - 5,B",
        "level": "4", 
        "to" : "FR,3,30,3",
        "connections" : {
            "FR,23,0,0": true,
            "FR,23,0,4": true
        }
    },
    "FR,23,0,4" : {
        "name": "ROUTE 12 - INSIDE - Route Connector Stairs - 8,A",
        "level": "4", 
        "to" : "FR,23,1,0",
        "connections" : {
            "FR,23,0,0": true,
            "FR,23,0,2": true
        }
    },
    "FR,23,1,0" : {
        "name": "ROUTE 12 - INSIDE - Route Connector Upstairs - A,9",
        "level": "4", 
        "to" : "FR,23,0,4",
        "tags": ["extraDeadend"]
    },
    "FR,23,2,1" : {
        "name": "ROUTE 12 - INSIDE - House - 3,7",
        "level": "4", 
        "to" : "FR,3,30,0",
        "tags": ["extraDeadend"]
    },
    /* ROUTE 8  - EXT */
    "FR,3,26,0" : {
        "name": "ROUTE 8 - OUTSIDE - Underground Enterance - D,4",
        "level": "4", 
        "to" : "FR,1,35,1",
        "connections" : {
            "FR,3,26,1": true
        }
    },
    "FR,3,26,1" : {
        "name": "ROUTE 8 - OUTSIDE - Route Connector - 7,A",
        "level": "4", 
        "to" : "FR,20,0,2",
        "connections" : {
            "FR,3,26,0": true
        }
    },
    /* ROUTE 8  - INT */
    "FR,20,0,1" : {
        "name": "ROUTE 8 - INSIDE - Route Connector Left - 1,5",
        "level": "6", 
        "to" : "FR,3,10,10",
        "connections" : {
            "FR,20,0,2": true
        }
    },
    "FR,20,0,2" : {
        "name": "ROUTE 8 - INSIDE - Route Connector Right - B,5",
        "level": "4", 
        "to" : "FR,3,26,1",
        "connections" : {
            "FR,20,0,1": "TEA"
        }
    },
    /* UNDERGROUND PATH - INT */
    // Route 8 Side
    "FR,1,35,1" : {
        "name": "UNDERGROUND PATH - INSIDE - Underground Path Enterance (ROUTE 8 Side) - 6,8",
        "level": "4", 
        "to" : "FR,3,26,0",
        "connections" : {
            "FR,1,35,3": true
        }
    },
    "FR,1,35,3" : {
        "name": "UNDERGROUND PATH - INSIDE - Underground Path Stairs (ROUTE 8 Side) - 7,4",
        "level": "4", 
        "to" : "FR,1,34,0",
        "connections" : {
            "FR,1,35,1": true
        }
    },
    // Horizontal
    "FR,1,34,0" : {
        "name": "UNDERGROUND PATH - INSIDE - Underground Path Right - 4C,3",
        "level": "4", 
        "to" : "FR,1,35,3",
        "connections" : {
            "FR,1,34,1": true
        }
    },
    "FR,1,34,1" : {
        "name": "UNDERGROUND PATH - INSIDE - Underground Path Left - 3,4",
        "level": "4", 
        "to" : "FR,1,33,3",
        "connections" : {
            "FR,1,34,0": true
        }
    },
    // Route 7 Side
    "FR,1,33,1" : {
        "name": "UNDERGROUND PATH - INSIDE - Underground Path Enterance (ROUTE 7 Side) - 6,8",
        "level": "4", 
        "to" : "FR,3,25,0",
        "connections" : {
            "FR,1,33,3": true
        }
    },
    "FR,1,33,3" : {
        "name": "UNDERGROUND PATH - INSIDE - Underground Path Stairs (ROUTE 7 Side) - 6,8",
        "level": "4", 
        "to" : "FR,1,34,1",
        "connections" : {
            "FR,1,33,1": true
        }
    },
    /* ROUTE 7  - EXT */
    "FR,3,25,0" : {
        "name": "ROUTE 7 - OUTSIDE - Underground Path Enterance - 7,E",
        "level": "4", 
        "to" : "FR,1,33,1",
        "connections" : {
            "FR,3,25,1": true
        }
    },
    "FR,3,25,1" : {
        "name": "ROUTE 7 - OUTSIDE - Route Connector - F,A",
        "level": "4", 
        "to" : "FR,19,0,0",
        "connections" : {
            "FR,3,25,0": true
        }
    },
    /* ROUTE 7  - INT */
    "FR,19,0,0" : {
        "name": "ROUTE 7 - INSIDE - Route Connector Left - 1,5",
        "level": "4", 
        "to" : "FR,3,25,1",
        "connections" : {
            "FR,19,0,2": "TEA"
        }
    },
    "FR,19,0,2" : {
        "name": "ROUTE 7 - INSIDE - Route Connector Right - B,5",
        "level": "6", 
        "to" : "FR,3,10,8",
        "connections" : {
            "FR,19,0,0": true
        }
    },
    /* CELADON CITY - EXT */
    "FR,3,6,0" : {
        "name": "CELADON CITY - OUTSIDE - Gamer Corner - 22,15",
        "level": "4", 
        "to" : "FR,10,14,0",
        "connections" : {
            "FR,3,6,4": true
        }
    },
    "FR,3,6,1" : {
        "name": "CELADON CITY - OUTSIDE - Dept Left - B,E",
        "level": "4", 
        "to" : "FR,10,0,1",
        "connections" : {
            "FR,3,6,4": true
        }
    },
    "FR,3,6,2" : {
        "name": "CELADON CITY - OUTSIDE - Dept Right - F,E",
        "level": "4", 
        "to" : "FR,10,0,4",
        "connections" : {
            "FR,3,6,4": true
        }
    },
    "FR,3,6,3" : {
        "name": "CELADON CITY - OUTSIDE - Appartments Front - 1E,B",
        "level": "4", 
        "to" : "FR,10,7,1",
        "connections" : {
            "FR,3,6,4": true
        }
    },
    "FR,3,6,4" : {
        "name": "CELADON CITY - OUTSIDE - PkCenter - 22,15",
        "level": "4", 
        "to" : "FR,10,12,1",
        "connections" : {
            "FR,3,6,0": true,
            "FR,3,6,1": true,
            "FR,3,6,2": true,
            "FR,3,6,3": true,
            "FR,3,6,5": true,
            "FR,3,6,7": true,
            "FR,3,6,8": true,
            "FR,3,6,9": true,
            "FR,3,6,11": true,
            "FR,3,25,0": true,
            "FR,3,25,1": true,
            "FR,3,6,6": "KANTO_CUT",
            "FR,3,34,2": "KANTO_CUT",
            "FR,3,34,4": "POKE_FLUTE"
        }
    },
    "FR,3,6,5" : {
        "name": "CELADON CITY - OUTSIDE - Prize Collection - 27,14",
        "level": "4", 
        "to" : "FR,10,15,1",
        "connections" : {
            "FR,3,6,4": true
        }
    },
    "FR,3,6,6" : {
        "name": "CELADON CITY - OUTSIDE - Gym - B,1E",
        "level": "4", 
        "to" : "FR,10,16,1",
        "connections" : {
            "FR,3,6,4": "KANTO_CUT"
        }
    },
    "FR,3,6,7" : {
        "name": "CELADON CITY - OUTSIDE - Bottom Left - 25,1D",
        "level": "4", 
        "to" : "FR,10,17,1",
        "connections" : {
            "FR,3,6,4": true
        }
    },
    "FR,3,6,8" : {
        "name": "CELADON CITY - OUTSIDE - Bottom Center - 29,1D",
        "level": "4", 
        "to" : "FR,10,18,1",
        "connections" : {
            "FR,3,6,4": true
        }
    },
    "FR,3,6,9" : {
        "name": "CELADON CITY - OUTSIDE - Bottom Right - 31,1D",
        "level": "4", 
        "to" : "FR,10,19,1",
        "connections" : {
            "FR,3,6,4": true
        }
    },
    "FR,3,6,9" : {
        "name": "CELADON CITY - OUTSIDE - Bottom Right - 31,1D",
        "level": "4", 
        "to" : "FR,10,19,1",
        "connections" : {
            "FR,3,6,4": true
        }
    },
    "FR,3,6,11" : {
        "name": "CELADON CITY - OUTSIDE - Appartments Back - 1E,4",
        "level": "4", 
        "to" : "FR,10,7,5",
        "connections" : {
            "FR,3,6,4": true
        }
    },
    /* CELADON CITY - INT */
    // Dept. Store
    // F1
    "FR,10,0,1" : {
        "name": "CELADON CITY - INSIDE - Dept F1 Left enterance - 2,E",
        "level": "4", 
        "to" : "FR,3,6,1",
        "connections" : {
            "FR,10,0,4": true,
            "FR,10,0,7": true,
        }
    },
    "FR,10,0,4" : {
        "name": "CELADON CITY - INSIDE - Dept F1 Right enterance - A,E",
        "level": "4", 
        "to" : "FR,3,6,2",
        "connections" : {
            "FR,10,0,1": true,
            "FR,10,0,7": true,
        }
    },
    "FR,10,0,7" : {
        "name": "CELADON CITY - INSIDE - Dept F1 Stairs - 2,E",
        "level": "4", 
        "to" : "FR,10,1,1",
        "connections" : {
            "FR,10,0,1": true,
            "FR,10,0,4": true,
            "FR,10,1,1": true,
            "FR,10,2,1": true,
            "FR,10,3,1": true,
            "FR,10,4,1": true,  
        }
    },
    // F2
    "FR,10,1,1" : {
        "name": "CELADON CITY - INSIDE - Dept F2 Left - 3,2",
        "level": "4", 
        "to" : "FR,10,0,7",
        "connections" : {
            "FR,10,0,7": true,
            "FR,10,1,2": true,
        }
    },
    "FR,10,1,2" : {
        "name": "CELADON CITY - INSIDE - Dept F2 Right - 9,2",
        "level": "4", 
        "to" : "FR,10,2,1",
        "connections" : {
            "FR,10,0,7": true,
            "FR,10,1,1": true,
        }
    },
    // F3
    "FR,10,2,1" : {
        "name": "CELADON CITY - INSIDE - Dept F3 Right - 9,2",
        "level": "4", 
        "to" : "FR,10,1,2",
        "connections" : {
            "FR,10,0,7": true,
            "FR,10,3,1": true,
        }
    },
    "FR,10,2,2" : {
        "name": "CELADON CITY - INSIDE - Dept F3 Left - 3,2",
        "level": "4", 
        "to" : "FR,10,3,1",
        "connections" : {
            "FR,10,0,7": true,
            "FR,10,1,1": true,
        }
    },
    // F4
    "FR,10,3,1" : {
        "name": "CELADON CITY - INSIDE - Dept F4 Left - 3,2",
        "level": "4", 
        "to" : "FR,10,2,2",
        "connections" : {
            "FR,10,0,7": true,
            "FR,10,3,2": true,
        }
    },
    "FR,10,3,2" : {
        "name": "CELADON CITY - INSIDE - Dept F4 Right - 9,2",
        "level": "4", 
        "to" : "FR,10,4,1",
        "connections" : {
            "FR,10,0,7": true,
            "FR,10,3,1": true,
        }
    },
    // F5
    "FR,10,4,1" : {
        "name": "CELADON CITY - INSIDE - Dept F5 Right - 9,2",
        "level": "4", 
        "to" : "FR,10,3,2",
        "connections" : {
            "FR,10,0,7": true,
            "FR,10,4,2": true,
        }
    },
    "FR,10,4,2" : {
        "name": "CELADON CITY - INSIDE - Dept F5 Left - 3,2",
        "level": "4", 
        "to" : "FR,10,5,0",
        "connections" : {
            "FR,10,0,7": true,
            "FR,10,4,1": true,
        }
    },
    // ROOF 
    "FR,10,5,0" : {
        "name": "CELADON CITY - INSIDE - Dept Roof - F,6",
        "level": "4", 
        "to" : "FR,10,4,2",
        "tags": ["extraDeadend"]
    },
    // Appartements
    // F1
    "FR,10,7,1" : {
        "name": "CELADON CITY - INSIDE - Appartments F1 Enterance - C,12",
        "level": "4", 
        "to" : "FR,3,6,3",
        "connections" : {
            "FR,10,7,4": true,
        }
    },
    "FR,10,7,4" : {
        "name": "CELADON CITY - INSIDE - Appartments F1 Right Stairs - C,2",
        "level": "4", 
        "to" : "FR,10,8,3",
        "connections" : {
            "FR,10,7,1": true,
        }
    },
    "FR,10,7,5" : {
        "name": "CELADON CITY - INSIDE - Appartments F1 Back Enterance - 2,1",
        "level": "4", 
        "to" : "FR,3,6,11",
        "connections" : {
            "FR,10,7,3": true,
        }
    },
    "FR,10,7,3" : {
        "name": "CELADON CITY - INSIDE - Appartments F1 Left Stairs - 4,2",
        "level": "4", 
        "to" : "FR,10,8,0",
        "connections" : {
            "FR,10,7,5": true,
        }
    },
    // F2
    "FR,10,8,0" : {
        "name": "CELADON CITY - INSIDE - Appartments F2 Left Side Right Stairs - 4,2",
        "level": "4", 
        "to" : "FR,10,7,3",
        "connections" : {
            "FR,10,8,1": true,
        }
    },
    "FR,10,8,1" : {
        "name": "CELADON CITY - INSIDE - Appartments F2 Left Side Left Stairs - 2,2",
        "level": "4", 
        "to" : "FR,10,9,0",
        "connections" : {
            "FR,10,8,0": true,
        }
    },
    "FR,10,8,2" : {
        "name": "CELADON CITY - INSIDE - Appartments F2 Right Side Left Stairs - B,2",
        "level": "4", 
        "to" : "FR,10,9,3",
        "connections" : {
            "FR,10,8,3": true,
        }
    },
    "FR,10,8,3" : {
        "name": "CELADON CITY - INSIDE - Appartments F2 Right Side Right Stairs - C,2",
        "level": "4", 
        "to" : "FR,10,7,4",
        "connections" : {
            "FR,10,8,2": true,
        }
    },
    // F3
    "FR,10,9,0" : {
        "name": "CELADON CITY - INSIDE - Appartments F3 Left Side Left Stairs - 2,2",
        "level": "4", 
        "to" : "FR,10,8,1",
        "connections" : {
            "FR,10,9,1": true,
        }
    },
    "FR,10,9,1" : {
        "name": "CELADON CITY - INSIDE - Appartments F3 Left Side Right Stairs - 4,2",
        "level": "4", 
        "to" : "FR,10,10,0",
        "connections" : {
            "FR,10,9,0": true,
        }
    },
    "FR,10,9,2" : {
        "name": "CELADON CITY - INSIDE - Appartments F3 Right Side Right Stairs - C,2",
        "level": "4", 
        "to" : "FR,10,10,1",
        "connections" : {
            "FR,10,9,3": true,
        }
    },
    "FR,10,9,3" : {
        "name": "CELADON CITY - INSIDE - Appartments F3 Right Side Left Stairs - B,2",
        "level": "4", 
        "to" : "FR,10,8,2",
        "connections" : {
            "FR,10,9,2": true,
        }
    },
    // Roof
    "FR,10,10,0" : {
        "name": "CELADON CITY - INSIDE - Appartments Roof Left Stairs - 4,2",
        "level": "4", 
        "to" : "FR,10,9,1",
        "connections" : {
            "FR,10,10,2": true,
        }
    },
    "FR,10,10,1" : {
        "name": "CELADON CITY - INSIDE - Appartments Roof Right Stairs - A,2",
        "level": "4", 
        "to" : "FR,10,9,2",
        "tags": ["extraDeadend"]
    },
    "FR,10,10,2" : {
        "name": "CELADON CITY - INSIDE - Appartments Roof Room - A,2",
        "level": "4", 
        "to" : "FR,10,11,1",
        "connections" : {
            "FR,10,10,0": true,
        }
    },
    // Roof Room
    "FR,10,11,1" : {
        "name": "CELADON CITY - INSIDE - Appartments Roof Stairs - 4,7",
        "level": "4", 
        "to" : "FR,10,10,2",
    },
    "FR,10,12,1" : {
        "name": "CELADON CITY - INSIDE - PkCenter Enterance - 7,8",
        "level": "4", 
        "to" : "FR,3,6,4",
        "connections" : {
            "FR,10,12,3": true,
        }
    },
    "FR,10,12,3" : {
        "name": "CELADON CITY - INSIDE - PkCenter Stairs - 1,6",
        "level": "4", 
        "to" : "FR,10,13,0",
        "connections" : {
            "FR,10,12,1": true,
        }
    },
    "FR,10,13,0" : {
        "name": "CELADON CITY - INSIDE - PkCenter Upstairs - 1,6",
        "level": "4", 
        "to" : "FR,10,12,3",
        "ignore": "true"
    },
    "FR,10,14,0" : {
        "name": "CELADON CITY - INSIDE - Game Corner Enterance - 9,D",
        "level": "4", 
        "to" : "FR,3,6,0",
        "connections" : {
            "FR,10,14,3": true,
        }
    },
    "FR,10,14,3" : {
        "name": "CELADON CITY - INSIDE - Game Corner Secret Stairs - F,2",
        "level": "4", 
        "to" : "FR,1,42,0",
        "connections" : {
            "FR,10,14,0": true,
        }
    },
    "FR,10,15,1" : {
        "name": "CELADON CITY - INSIDE - Prize Room - 4,8",
        "level": "4", 
        "to" : "FR,3,6,5",
        "tags": ["extraDeadend"]
    },
    "FR,10,16,1" : {
        "name": "CELADON CITY - INSIDE - Gym - 6,12",
        "level": "4", 
        "to" : "FR,3,6,6",
    },
    "FR,10,17,1" : {
        "name": "CELADON CITY - INSIDE - Left House - 6,9",
        "level": "4", 
        "to" : "FR,3,6,7",
        "tags": ["extraDeadend"]
    },
    "FR,10,18,1" : {
        "name": "CELADON CITY - INSIDE - Center House - 4,7",
        "level": "4", 
        "to" : "FR,3,6,8",
        "tags": ["removeable"]
    },
    "FR,10,19,1" : {
        "name": "CELADON CITY - INSIDE - Right House - 4,9",
        "level": "4", 
        "to" : "FR,3,6,9",
        "tags": ["removeable"]
    },
    /* ROCKET HIDEOUT */
    // F1
    "FR,1,42,0" : {
        "name": "ROCKET HIDEOUT - INSIDE - F1 Top Left Stairs - C,2",
        "level": "4", 
        "to" : "FR,10,14,3",
        "connections" : {
            "FR,1,42,1": true,
            "FR,1,43,0": "LIFT_KEY",
        }
    },
    "FR,1,42,1" : {
        "name": "ROCKET HIDEOUT - INSIDE - F1 Top Right Stairs - 11,2",
        "level": "4", 
        "to" : "FR,1,43,1",
        "connections" : {
            "FR,1,42,0": true,
        }
    },
    "FR,1,42,2" : {
        "name": "ROCKET HIDEOUT - INSIDE - F1 Bottom Stairs - F,1E",
        "level": "4", 
        "to" : "FR,1,43,2"
    },
    // F2
    "FR,1,43,0" : {
        "name": "ROCKET HIDEOUT - INSIDE - F2 Top Left Stairs - 15,2",
        "level": "4", 
        "to" : "FR,1,44,0",
        "connections" : {
            "FR,1,43,1": true,
            "FR,1,43,2": true,
            "FR,1,42,0": "LIFT_KEY"
        }
    },
    "FR,1,43,1" : {
        "name": "ROCKET HIDEOUT - INSIDE - F2 Top Right Stairs - 1C,2",
        "level": "4", 
        "to" : "FR,1,42,1",
        "connections" : {
            "FR,1,43,0": true,
            "FR,1,43,2": true,
        }
    },
    "FR,1,43,2" : {
        "name": "ROCKET HIDEOUT - INSIDE - F2 Bottom Stairs - 17,C",
        "level": "4", 
        "to" : "FR,1,42,2",
        "connections" : {
            "FR,1,43,0": true,
            "FR,1,43,1": true,
        }
    },
    // F3
    "FR,1,44,0" : {
        "name": "ROCKET HIDEOUT - INSIDE - F3 Top Stairs - 12,2",
        "level": "4", 
        "to" : "FR,1,43,0",
        "connections" : {
            "FR,1,44,1": true,
        }
    },
    "FR,1,44,1" : {
        "name": "ROCKET HIDEOUT - INSIDE - F3 Bottom Stairs - F,12",
        "level": "4", 
        "to" : "FR,1,45,0",
        "connections" : {
            "FR,1,44,0": true,
        }
    },
    // F4
    "FR,1,45,0" : {
        "name": "ROCKET HIDEOUT - INSIDE - F4 Stairs - B,F",
        "level": "4", 
        "to" : "FR,1,44,1",
    },
    /* Pokemon TOWER */
    // F1
    "FR,1,88,1" : {
        "name": "POKEMON TOWER - INSIDE - F1 Enterance - B,12",
        "level": "4", 
        "to" : "FR,3,4,0",
        "connections" : {
            "FR,1,88,3": true,
        }
    },
    "FR,1,88,3" : {
        "name": "POKEMON TOWER - INSIDE - F1 Stairs - 12,9",
        "level": "4", 
        "to" : "FR,1,89,1",
        "connections" : {
            "FR,1,88,1": true,
        }
    },
    // F2
    "FR,1,89,0" : {
        "name": "POKEMON TOWER - INSIDE - F2 Left - 4,A",
        "level": "4", 
        "to" : "FR,1,90,0",
        "connections" : {
            "FR,1,89,1": true,
        }
    },
    "FR,1,89,1" : {
        "name": "POKEMON TOWER - INSIDE - F2 Right - 12,A",
        "level": "4", 
        "to" : "FR,1,88,3",
        "connections" : {
            "FR,1,89,0": true,
        }
    },
    // F3
    "FR,1,90,0" : {
        "name": "POKEMON TOWER - INSIDE - F3 Left - 4,A",
        "level": "4", 
        "to" : "FR,1,89,0",
        "connections" : {
            "FR,1,90,1": true,
        }
    },
    "FR,1,90,1" : {
        "name": "POKEMON TOWER - INSIDE - F3 Right - 12,A",
        "level": "4", 
        "to" : "FR,1,91,1",
        "connections" : {
            "FR,1,90,0": true,
        }
    },
    // F4
    "FR,1,91,0" : {
        "name": "POKEMON TOWER - INSIDE - F4 Left - 4,A",
        "level": "4", 
        "to" : "FR,1,92,0",
        "connections" : {
            "FR,1,91,1": true,
        }
    },
    "FR,1,91,1" : {
        "name": "POKEMON TOWER - INSIDE - F4 Right - 12,A",
        "level": "4", 
        "to" : "FR,1,90,1",
        "connections" : {
            "FR,1,91,0": true,
        }
    },
    // F5
    "FR,1,92,0" : {
        "name": "POKEMON TOWER - INSIDE - F5 Left - 4,A",
        "level": "4",  
        "to" : "FR,1,91,0",
        "connections" : {
            "FR,1,92,1": true,
        }
    },
    "FR,1,92,1" : {
        "name": "POKEMON TOWER - INSIDE - F5 Right - 12,A",
        "level": "4", 
        "to" : "FR,1,93,1",
        "connections" : {
            "FR,1,92,0": true,
        }
    },
    // F6
    "FR,1,93,0" : {
        "name": "POKEMON TOWER - INSIDE - F6 Left - B,10",
        "level": "5", 
        "to" : "FR,1,94,0",
        "connections" : {
            "FR,1,93,1": true,
        },
        "tags": ["no_return"]
    },
    "FR,1,93,1" : {
        "name": "POKEMON TOWER - INSIDE - F6 Right - 12,A",
        "level": "4", 
        "to" : "FR,1,92,1",
        "connections" : {
            "FR,1,93,0": "SILPH_SCOPE",
        }
    },
    // F7
    "FR,1,94,0" : {
        "name": "POKEMON TOWER - INSIDE - F7 Stairs - B,10",
        "level": "5", 
        "to" : "FR,1,93,0",
    },
    /* ROUTE 16 - EXT */
    "FR,3,34,0" : {
        "name": "ROUTE 16 - OUTSIDE - House - A,5",
        "level": "4", 
        "to" : "FR,25,0,1",
        "connections" : {
            "FR,3,34,1": true,
        }
    },
    "FR,3,34,1" : {
        "name": "ROUTE 16 - OUTSIDE - Top Route Connector Left - 14,6",
        "level": "4", 
        "to" : "FR,25,1,0",
        "connections" : {
            "FR,3,34,0": true,
        }
    },
    "FR,3,34,2" : {
        "name": "ROUTE 16 - OUTSIDE - Top Route Connector Right - 1B,6",
        "level": "4", 
        "to" : "FR,25,1,1",
        "connections" : {
            "FR,3,6,4": "KANTO_CUT"
        }
    },
    "FR,3,34,3" : {
        "name": "ROUTE 16 - OUTSIDE - Bottom Route Connector Left - 14,D",
        "level": "5", 
        "to" : "FR,25,1,2",
        "connections" : {
            "FR,26,0,0": true,
        }
    },
    "FR,3,34,4" : {
        "name": "ROUTE 16 - OUTSIDE - Bottom Route Connector Right - 1B,D",
        "level": "5", 
        "to" : "FR,25,1,3",
        "connections" : {
            "FR,3,6,4": "POKE_FLUTE",
        }
    },
    /* ROUTE 16 - INT */
    "FR,25,0,1" : {
        "name": "ROUTE 16 - INSIDE - House - 4,7",
        "level": "4", 
        "to" : "FR,3,34,0",
    },
    "FR,25,1,0" : {
        "name": "ROUTE 16 - INSIDE - Top Left - 1,3",
        "level": "4", 
        "to" : "FR,3,34,1",
        "connections" : {
            "FR,25,1,1": true,
        }
    },
    "FR,25,1,1" : {
        "name": "ROUTE 16 - INSIDE - Top Right - B,3",
        "level": "4", 
        "to" : "FR,3,34,2",
        "connections" : {
            "FR,25,1,0": true,
        }
    },
    "FR,25,1,2" : {
        "name": "ROUTE 16 - INSIDE - Bottom Left - 1,C",
        "level": "5", 
        "to" : "FR,3,34,3",
        "connections" : {
            "FR,25,1,3": true,
            "FR,25,1,4": true,
        }
    },
    "FR,25,1,3" : {
        "name": "ROUTE 16 - INSIDE - Bottom Right - B,C",
        "level": "5", 
        "to" : "FR,3,34,4",
        "connections" : {
            "FR,25,1,4": true,
            "FR,25,1,2": "BIKE",
        }
    },
    "FR,25,1,4" : {
        "name": "ROUTE 16 - INSIDE - Bottom Stairs - 9,10",
        "level": "5", 
        "to" : "FR,25,2,0",
        "connections" : {
            "FR,25,1,3": true,
        }
    },
    "FR,25,2,0" : {
        "name": "ROUTE 16 - INSIDE - Upstairs - A,9",
        "level": "5", 
        "to" : "FR,25,1,4",
        "tags": ["extraDeadend"]
    },
    /* ROUTE 18 - EXT */
    "FR,3,36,0" : {
        "name": "ROUTE 18 - OUTSIDE - Route Connector Left - 29,9",
        "level": "5", 
        "to" : "FR,26,0,0",
        "connections" : {
            "FR,3,34,3": true,
        }
    },
    "FR,3,36,1" : {
        "name": "ROUTE 18 - OUTSIDE - Route Connector Right - 30,9",
        "level": "5", 
        "to" : "FR,26,0,1",
        "connections" : {
            "FR,3,7,6": true,
        }
    },
    /* ROUTE 18 - INT */
    "FR,26,0,0" : {
        "name": "ROUTE 18 - INSIDE - Left - 1,6",
        "level": "5", 
        "to" : "FR,3,36,0",
        "connections" : {
            "FR,26,0,1": true,
            "FR,26,0,2": true
        }
    },
    "FR,26,0,1" : {
        "name": "ROUTE 18 - INSIDE - Right - B,6",
        "level": "5", 
        "to" : "FR,3,36,1",
        "connections" : {
            "FR,26,0,2": true,
            "FR,26,0,2": "BIKE"
        }
    },
    "FR,26,0,2" : {
        "name": "ROUTE 18 - INSIDE - Stairs - 9,A",
        "level": "5", 
        "to" : "FR,26,1,0",
        "connections" : {
            "FR,26,0,1": true
        }
    },
    "FR,26,1,0" : {
        "name": "ROUTE 18 - INSIDE - Upstairs - A,9",
        "level": "5", 
        "to" : "FR,26,0,2",
        "tags": ["extraDeadend"]
    },
    /* FUCHSIA CITY - EXT */
    "FR,3,7,0" : {
        "name": "FUCHSIA CITY - OUTSIDE - Safari Zone - 18,5",
        "level": "5", 
        "to" : "FR,11,0,2",
        "connections" : {
            "FR,3,7,6": true,
        }
    },
    "FR,3,7,1" : {
        "name": "FUCHSIA CITY - OUTSIDE - Bottom Right Left - 21,1F",
        "level": "5", 
        "to" : "FR,11,7,1",
        "connections" : {
            "FR,3,7,6": true,
        }
    },
    "FR,3,7,2" : {
        "name": "FUCHSIA CITY - OUTSIDE - Mart - B,F",
        "level": "5", 
        "to" : "FR,11,1,1",
        "connections" : {
            "FR,3,7,6": true,
        }
    },
    "FR,3,7,3" : {
        "name": "FUCHSIA CITY - OUTSIDE - Center House - 1C,10",
        "level": "5", 
        "to" : "FR,11,2,1",
        "connections" : {
            "FR,3,7,6": true,
        }
    },
    "FR,3,7,4" : {
        "name": "FUCHSIA CITY - OUTSIDE - Gym - 9,20",
        "level": "5", 
        "to" : "FR,11,3,1",
        "connections" : {
            "FR,3,7,6": true,
        }
    },
    "FR,3,7,5" : {
        "name": "FUCHSIA CITY - OUTSIDE - Right of Gym - E,1F",
        "level": "5", 
        "to" : "FR,11,4,1",
        "connections" : {
            "FR,3,7,6": true,
        }
    },
    "FR,3,7,6" : {
        "name": "FUCHSIA CITY - OUTSIDE - PkCenter - 19,1F",
        "level": "5", 
        "to" : "FR,11,5,1",
        "connections" : {
            "FR,3,7,0": true,
            "FR,3,7,1": true,
            "FR,3,7,2": true,
            "FR,3,7,3": true,
            "FR,3,7,4": true,
            "FR,3,7,5": true,
            "FR,3,7,7": true,
            "FR,3,7,10": true,
            "FR,3,36,1": true,
            "FR,3,33,0": true,
            "FR,3,38,0": "KANTO_SURF"
        }
    },
    "FR,3,7,7" : {
        "name": "FUCHSIA CITY - OUTSIDE - Bottom Right Right - 26,1F",
        "level": "5", 
        "to" : "FR,11,8,1",
        "connections" : {
            "FR,3,7,6": true,
        }
    },
    "FR,3,7,8" : {
        "name": "FUCHSIA CITY - OUTSIDE - House Backdoor - 27,1C",
        "level": "5", 
        "to" : "FR,11,8,3",
        "tags": ["extraDeadend"]
    },
    "FR,3,7,10" : {
        "name": "FUCHSIA CITY - OUTSIDE - PkCenter Left - 13,1F",
        "level": "5", 
        "to" : "FR,11,9,0",
        "connections" : {
            "FR,3,7,6": true,
        }
    },
    /* FUCHSIA  - INT */
    "FR,11,0,2" : {
        "name": "FUCHSIA CITY - INSIDE - Safari Zone - 4,7",
        "level": "5", 
        "to" : "FR,3,7,0",
    },
    "FR,11,1,1" : {
        "name": "FUCHSIA CITY - INSIDE - Mart - 4,7",
        "level": "5", 
        "to" : "FR,3,7,2",
    },
    "FR,11,2,1" : {
        "name": "FUCHSIA CITY - INSIDE - Center House - 6,9",
        "level": "5", 
        "to" : "FR,3,7,3",
        "tags": ["removeable"]
    },
    "FR,11,3,1" : {
        "name": "FUCHSIA CITY - INSIDE - Gym - 7,15",
        "level": "5", 
        "to" : "FR,3,7,4",
    },
    "FR,11,4,1" : {
        "name": "FUCHSIA CITY - INSIDE - Right of Gym - 4,7",
        "level": "5", 
        "to" : "FR,3,7,5",
        "tags": ["removeable"]
    },
    "FR,11,5,1" : {
        "name": "FUCHSIA CITY - INSIDE - PkCenter Enterance - 6,8",
        "level": "5", 
        "to" : "FR,3,7,6",
        "connections" : {
            "FR,11,5,3": true,
        }
    },
    "FR,11,5,3" : {
        "name": "FUCHSIA CITY - INSIDE - PkCenter Stairs - 1,6",
        "level": "5", 
        "to" : "FR,11,6,0",
        "connections" : {
            "FR,11,5,1": true,
        }
    },
    "FR,11,6,0" : {
        "name": "FUCHSIA CITY - INSIDE - PkCenter Upstairs - 1,6",
        "level": "5", 
        "to" : "FR,11,5,3",
        "ignore" : "true"
    },
    "FR,11,7,1" : {
        "name": "FUCHSIA CITY - INSIDE - Bottom Right Left - 6,9",
        "level": "5", 
        "to" : "FR,3,7,1",
    },
    "FR,11,8,1" : {
        "name": "FUCHSIA CITY - INSIDE - Bottom Right Right Enterance - 3,8",
        "level": "5", 
        "to" : "FR,3,7,7",
        "connections" : {
            "FR,11,8,3": true,
        }
    },
    "FR,11,8,3" : {
        "name": "FUCHSIA CITY - INSIDE - Bottom Right Right Back - 3,1",
        "level": "5", 
        "to" : "FR,3,7,8",
        "connections" : {
            "FR,11,8,1": true,
        }
    },
    "FR,11,9,0" : {
        "name": "FUCHSIA CITY - INSIDE - Left of PkCenter - 13,1F",
        "level": "5", 
        "to" : "FR,3,7,10",
    },
    /* ROUTE 15 - EXT */
    "FR,3,33,0" : {
        "name": "ROUTE 15 - INSIDE - Route Connector Left - 9,B",
        "level": "5", 
        "to" : "FR,24,0,0",
        "connections" : {
            "FR,3,7,6": true,
        }
    },
    "FR,3,33,1" : {
        "name": "ROUTE 15 - INSIDE - Route Connector Right - 10,B",
        "level": "5", 
        "to" : "FR,24,0,2",
        "connections" : {
            "FR,3,30,0": true,
            "FR,3,30,3": "POKE_FLUTE",
            "FR,3,29,2": "POKE_FLUTE"
        }
    },
    /* ROUTE 15 - INT */
    "FR,24,0,0" : {
        "name": "FUCHSIA CITY - INSIDE - Route Connector Left - 1,6",
        "level": "5", 
        "to" : "FR,3,33,0",
        "connections" : {
            "FR,24,0,2": true,
            "FR,24,0,4": true,
        }
    },
    "FR,24,0,2" : {
        "name": "FUCHSIA CITY - INSIDE - Route Connector Right - B,6",
        "level": "5", 
        "to" : "FR,3,33,1",
        "connections" : {
            "FR,24,0,4": true,
            "FR,24,0,0": true,
        }
    },
    "FR,24,0,4" : {
        "name": "FUCHSIA CITY - INSIDE - Route Connector Stairs - 9,A",
        "level": "5", 
        "to" : "FR,24,1,0",
        "connections" : {
            "FR,24,0,2": true,
            "FR,24,0,0": true,
        }
    },
    "FR,24,1,0" : {
        "name": "FUCHSIA CITY - INSIDE - Route Connector Upstairs - A,9",
        "level": "5", 
        "to" : "FR,24,0,4",
    },
    /* POWER PLANT */
    "FR,1,95,1" : {
        "name": "POWER PLANT - INSIDE - Main Enterance - 5,26",
        "level": "6", 
        "to" : "FR,3,28,2",
        "connections" : {
            "FR,1,95,3": true,
        }
    },
    "FR,1,95,3" : {
        "name": "POWER PLANT - INSIDE - Back Door - 1,B",
        "level": "6", 
        "to" : "FR,3,28,4",
        "connections" : {
            "FR,1,95,1": true,
        }
    },
    /* ROUTE 20 - EXT */
    "FR,3,38,0" : {
        "name": "ROUTE 20 - OUTSIDE - Seafoam Left - 3C,8",
        "level": "6", 
        "to" : "FR,1,83,3",
        "connections" : {
            "FR,3,7,6" : "KANTO_SURF"
        }
    },
    "FR,3,38,1" : {
        "name": "ROUTE 20 - OUTSIDE - Seafoam Right - 48,E",
        "level": "7", 
        "to" : "FR,1,83,4",
        "connections" : {
            "FR,3,8,3" : "KANTO_SURF"
        }
    },
    /* SEAFOAM ISLANDS */
    // F1
    "FR,1,83,0" : {
        "name": "SEAFOAM ISLAND - INSIDE - Top Left Ladder - A,6",
        "level": "6", 
        "to" : "FR,1,84,0",
        "connections" : {
            "FR,1,83,3": true,
            "FR,1,83,5": true,
            "FR,1,83,6": true,
            "FR,1,83,1": true,
        }
    },
    "FR,1,83,1" : {
        "name": "SEAFOAM ISLAND - INSIDE - Top Right Ladder - 1F,4",
        "level": "6", 
        "to" : "FR,1,84,1",
        "connections" : {
            "FR,1,83,3": true,
            "FR,1,83,5": true,
            "FR,1,83,6": true,
            "FR,1,83,0": true,
        }
    },
    "FR,1,83,1" : {
        "name": "SEAFOAM ISLAND - INSIDE - Top Right Ladder - 1F,4",
        "level": "6", 
        "to" : "FR,1,84,1",
        "connections" : {
            "FR,1,83,3": true,
            "FR,1,83,5": true,
            "FR,1,83,6": true,
            "FR,1,83,0": true,
        }
    },
    "FR,1,83,2" : {
        "name": "SEAFOAM ISLAND - INSIDE - Bottom Right Ladder - 1C,13",
        "level": "6", 
        "to" : "FR,1,84,2",
        "connections" : {
            "FR,1,83,4": true,
        }
    },
    "FR,1,83,3" : {
        "name": "SEAFOAM ISLAND - INSIDE - Bottom Left Enterance - 6,15",
        "level": "6", 
        "to" : "FR,3,38,0",
        "connections" : {
            "FR,1,83,0": true,
            "FR,1,83,5": true,
            "FR,1,83,6": true,
            "FR,1,83,1": true,
        }
    },
    "FR,1,83,4" : {
        "name": "SEAFOAM ISLAND - INSIDE - Bottom Right Enterance - 20,15",
        "level": "6", 
        "to" : "FR,3,38,1",
        "connections" : {
            "FR,1,83,2": true,
        }
    },
    "FR,1,83,5" : {
        "name": "SEAFOAM ISLAND - INSIDE - Center Hole - 15,8",
        "level": "6", 
        "to" : "FR,1,84,9",
        "connections" : {
            "FR,1,83,0": true,
            "FR,1,83,3": true,
            "FR,1,83,6": true,
            "FR,1,83,1": true,
        }
    },
    "FR,1,83,6" : {
        "name": "SEAFOAM ISLAND - INSIDE - Right Hole - 1E,8",
        "level": "6", 
        "to" : "FR,1,84,10",
        "connections" : {
            "FR,1,83,0": true,
            "FR,1,83,3": true,
            "FR,1,83,5": true,
            "FR,1,83,1": true,
        }
    },
    // F2
    "FR,1,84,0" : {
        "name": "SEAFOAM ISLAND - INSIDE - Left Ladder Up - A,6",
        "level": "6", 
        "to" : "FR,1,83,0",
        "connections" : {
            "FR,1,84,3": true,
            "FR,1,84,4": true,
            "FR,1,84,7": true
        }
    },
    "FR,1,84,1" : {
        "name": "SEAFOAM ISLAND - INSIDE - Top Right Ladder Up - 1F,4",
        "level": "6", 
        "to" : "FR,1,83,1",
        "connections" : {
            "FR,1,84,8": true,
        }
    },
    "FR,1,84,2" : {
        "name": "SEAFOAM ISLAND - INSIDE - Bottom Right - 1C,13",
        "level": "6", 
        "to" : "FR,1,83,2",
        "connections" : {
            "FR,1,84,6": true,
        }
    },
    "FR,1,84,3" : {
        "name": "SEAFOAM ISLAND - INSIDE - Top Right Ladder Down - 7,3",
        "level": "6", 
        "to" : "FR,1,85,3",
        "connections" : {
            "FR,1,84,0": true,
            "FR,1,84,4": true,
            "FR,1,84,7": true
        }
    },
    "FR,1,84,4" : {
        "name": "SEAFOAM ISLAND - INSIDE - Center Ladder - 11,9",
        "level": "6", 
        "to" : "FR,1,85,4",
        "connections" : {
            "FR,1,84,0": true,
            "FR,1,84,3": true,
            "FR,1,84,7": true
        }
    },
    "FR,1,84,5" : {
        "name": "SEAFOAM ISLAND - INSIDE - Bottom Left - 19,13",
        "level": "6", 
        "to" : "FR,1,85,5"
    },
    "FR,1,84,6" : {
        "name": "SEAFOAM ISLAND - INSIDE - Center Right - 20,E",
        "level": "6",  
        "to" : "FR,1,85,6",
        "connections" : {
            "FR,1,84,2": true,
        }
    },
    "FR,1,84,7" : {
        "name": "SEAFOAM ISLAND - INSIDE - Center Hole - 17,8",
        "level": "6", 
        "to" : "FR,1,85,7",
        "connections" : {
            "FR,1,84,0": true,
            "FR,1,84,3": true,
            "FR,1,84,4": true
        }
    },
    "FR,1,84,8" : {
        "name": "SEAFOAM ISLAND - INSIDE - Top Right Hole - 1C,8",
        "level": "6", 
        "to" : "FR,1,85,8",
        "connections" : {
            "FR,1,84,1": true,
        }
    },
    "FR,1,84,9" : {
        "name": "SEAFOAM ISLAND - INSIDE - Center Drop - 15,8",
        "level": "6", 
        "to" : "FR,1,83,5",
        "connections" : {
            "FR,1,84,0": true,
            "FR,1,84,3": true,
            "FR,1,84,4": true,
            "FR,1,84,7": true
        },
        "ignore": true,
    },
    "FR,1,84,10" : {
        "name": "SEAFOAM ISLAND - INSIDE - Top Right Drop - 1D,8",
        "level": "6",  
        "to" : "FR,1,83,6",
        "connections" : {
            "FR,1,84,8": true,
            "FR,1,84,1": true,
        },
        "ignore": true,
    },
    // F3
    "FR,1,85,0" : {
        "name": "SEAFOAM ISLAND - INSIDE - Bottom Left - 7,11",
        "level": "6", 
        "to" : "FR,1,86,0",
        "connections" : {
            "FR,1,85,4": true,
            "FR,1,85,5": true,
        }
    },
    "FR,1,85,1" : {
        "name": "SEAFOAM ISLAND - INSIDE - Top Right - 20,4",
        "level": "6", 
        "to" : "FR,1,86,1",
        "connections" : {
            "FR,1,85,10": true,
        }
    },
    "FR,1,85,2" : {
        "name": "SEAFOAM ISLAND - INSIDE - Bottom Right Ladder Down - 1F,11",
        "level": "6", 
        "to" : "FR,1,86,2",
        "connections" : {
            "FR,1,85,6": true,
        }
    },
    "FR,1,85,3" : {
        "name": "SEAFOAM ISLAND - INSIDE - Top Left Ladder Up - 7,4",
        "level": "6", 
        "to" : "FR,1,84,3",
        "connections" : {
            "FR,1,85,9": true,
        }
    },
    "FR,1,85,4" : {
        "name": "SEAFOAM ISLAND - INSIDE - Center Ladder Up - 11,9",
        "level": "6", 
        "to" : "FR,1,84,4",
        "connections" : {
            "FR,1,85,0": true,
            "FR,1,85,5": true,
        }
    },
    "FR,1,85,5" : {
        "name": "SEAFOAM ISLAND - INSIDE - Bottom Right Center Ladder - 19,13",
        "level": "6", 
        "to" : "FR,1,84,5",
        "connections" : {
            "FR,1,85,0": true,
            "FR,1,85,4": true,
        }
    },
    "FR,1,85,6" : {
        "name": "SEAFOAM ISLAND - INSIDE - Bottom Right Ladder Up - 20,E",
        "level": "6", 
        "to" : "FR,1,84,6",
        "connections" : {
            "FR,1,85,2": true,
        }
    },
    "FR,1,85,7" : {
        "name": "SEAFOAM ISLAND - INSIDE - Center Drop - 16,7",
        "level": "6", 
        "to" : "FR,1,84,7",
        "ignore": true,
        "connections" : {
            "FR,1,85,9": true,
            "FR,1,85,3": true,
        }
    },
    "FR,1,85,8" : {
        "name": "SEAFOAM ISLAND - INSIDE - Right Drop - 1D,8",
        "level": "6", 
        "to" : "FR,1,84,8",
        "connections" : {
            "FR,1,85,10": true,
            "FR,1,85,1": true,
        },
        "ignore": true,
    },
    "FR,1,85,9" : {
        "name": "SEAFOAM ISLAND - INSIDE - Center Hole - 18,8",
        "level": "6", 
        "to" : "FR,1,86,5",
        "connections" : {
            "FR,1,85,3": true,
        }
    },
    "FR,1,85,10" : {
        "name": "SEAFOAM ISLAND - INSIDE - Right Hole - 1B,8",
        "level": "6", 
        "to" : "FR,1,86,6",
        "connections" : {
            "FR,1,85,1": true,
        }
    },
    // F4
    "FR,1,86,0" : {
        "name": "SEAFOAM ISLAND - INSIDE - Bottom Left Ladder Up - 8,E",
        "level": "6", 
        "to" : "FR,1,85,0",
        "connections" : {
            "FR,1,86,3": true,
            "FR,1,86,8": true,
            "FR,1,86,7": true,
            "FR,1,86,2": "KANTO_SURF"
        }
    },
    "FR,1,86,1" : {
        "name": "SEAFOAM ISLAND - INSIDE - Top Right Ladder Up - 1F,4",
        "level": "6", 
        "to" : "FR,1,85,1",
        "connections" : {
            "FR,1,86,4": true,
        }
    },
    "FR,1,86,2" : {
        "name": "SEAFOAM ISLAND - INSIDE - Bottom Right Ladder - 1F,10",
        "level": "6", 
        "to" : "FR,1,85,2",
        "connections" : {
            "FR,1,86,0": "KANTO_SURF"
        }
    },
    "FR,1,86,3" : {
        "name": "SEAFOAM ISLAND - INSIDE - Top Left Ladder Down - C,9",
        "level": "6", 
        "to" : "FR,1,87,0",
        "connections" : {
            "FR,1,86,0": true,
            "FR,1,86,8": true,
            "FR,1,86,7": true,
        }
    },
    "FR,1,86,4" : {
        "name": "SEAFOAM ISLAND - INSIDE - Top Right Ladder Down - 1D,5",
        "level": "6", 
        "to" : "FR,1,87,1",
        "connections" : {
            "FR,1,86,1": true,
        }
    },
    "FR,1,86,5" : {
        "name": "SEAFOAM ISLAND - INSIDE - Water Drop - 17,9",
        "level": "6", 
        "to" : "FR,1,85,9",
        "grouped" : ["FR,1,86,6"],
        "groupMain" : true,
        "ignore": true,
        "connections" : {
            "FR,1,86,2": true,
            "FR,1,86,3": true,
            "FR,1,86,0": true,
            "FR,1,86,8": true,
            "FR,1,86,7": true,
        }
    },
    "FR,1,86,6" : {
        "name": "SEAFOAM ISLAND - INSIDE - Water Drop - 18,9",
        "level": "6", 
        "ignore": true,
        "to" : "FR,1,85,10",
        "grouped" : ["FR,1,86,5"]
    },
    "FR,1,86,7" : {
        "name": "SEAFOAM ISLAND - INSIDE - Bottom Left Left Drop - 6,12",
        "level": "6", 
        "to" : "FR,1,87,2",
        "connections" : {
            "FR,1,86,0": true,
            "FR,1,86,8": true,
            "FR,1,86,3": true,
        }
    },
    "FR,1,86,8" : {
        "name": "SEAFOAM ISLAND - INSIDE - Bottom Left Right Drop - 9,12",
        "level": "6", 
        "to" : "FR,1,87,3",
        "connections" : {
            "FR,1,86,0": true,
            "FR,1,86,7": true,
            "FR,1,86,3": true,
        }
    },
    // F5
    "FR,1,87,0" : {
        "name": "SEAFOAM ISLAND - INSIDE - Center Ladder - F,9",
        "level": "6", 
        "to" : "FR,1,86,3",
        "connections" : {
            "FR,1,87,1": true,
        }
    },
    "FR,1,87,1" : {
        "name": "SEAFOAM ISLAND - INSIDE - Top Right - 20,5",
        "level": "6", 
        "to" : "FR,1,86,4",
        "connections" : {
            "FR,1,87,0": true,
        }
    },
    "FR,1,87,2" : {
        "name": "SEAFOAM ISLAND - INSIDE - Water Drop - 8,11",
        "level": "6", 
        "to" : "FR,1,86,7",
        "ignore": true,
        "grouped" : ["FR,1,87,3"],
        "groupMain" : true,
        "connections" : {
            "FR,1,86,2": true,
            "FR,1,86,3": true,
        }
    },
    "FR,1,87,3" : {
        "name": "SEAFOAM ISLAND - INSIDE - Water Drop - 9,11",
        "level": "6", 
        "to" : "FR,1,86,8",
        "ignore": true,
        "grouped" : ["FR,1,87,2"]
    },
    /* SAFFRON CITY - EXT */
    "FR,3,10,0" : {
        "name": "SAFFRON CITY - OUTSIDE - Silph Co. - 21,1E",
        "level": "6", 
        "to" : "FR,1,47,1",
        "connections" : {
            "FR,3,10,6": true,
        }
    },
    "FR,3,10,1" : {
        "name": "SAFFRON CITY - OUTSIDE - Top Left - 16,E",
        "level": "6", 
        "to" : "FR,14,0,1",
        "connections" : {
            "FR,3,10,6": true,
        },
        "tags": ["no_return"]
    },
    "FR,3,10,2" : {
        "name": "SAFFRON CITY - OUTSIDE - Top Right Dojo - 28,C",
        "level": "6", 
        "to" : "FR,14,2,1",
        "connections" : {
            "FR,3,10,6": true,
        }
    },
    "FR,3,10,3" : {
        "name": "SAFFRON CITY - OUTSIDE - Gym - 2E,C",
        "level": "6", 
        "to" : "FR,14,3,1",
        "connections" : {
            "FR,3,10,6": true,
        },
        "tags": ["no_return"]
    },
    "FR,3,10,4" : {
        "name": "SAFFRON CITY - OUTSIDE - Center Left - 1B,15",
        "level": "6", 
        "to" : "FR,14,4,1",
        "connections" : {
            "FR,3,10,6": true,
        },
        "tags": ["no_return"]
    },
    "FR,3,10,5" : {
        "name": "SAFFRON CITY - OUTSIDE - Mart - 28,15",
        "level": "6", 
        "to" : "FR,14,5,1",
        "connections" : {
            "FR,3,10,6": true,
        }
    },
    "FR,3,10,6" : {
        "name": "SAFFRON CITY - OUTSIDE - PkCenter - 18,26",
        "level": "6", 
        "to" : "FR,14,6,1",
        "connections" : {
            "FR,3,10,7": true,
            "FR,3,10,11": true,
            "FR,3,10,8": true,
            "FR,3,10,10": true,
            "FR,3,10,9": true,
            "FR,3,10,0": true,
            "FR,3,10,5": true,
            "FR,3,10,14": true,
            "FR,3,10,2": true,
            "FR,3,10,4": "SAFFRON_DOORS",
            "FR,3,10,3": "SAFFRON_DOORS",
            "FR,3,10,1": "SAFFRON_DOORS",
        }
    },
    "FR,3,10,7" : {
        "name": "SAFFRON CITY - OUTSIDE - Bottom Right - 2B,26",
        "level": "6", 
        "to" : "FR,14,8,1",
        "connections" : {
            "FR,3,10,6": true,
        }
    },
    "FR,3,10,8" : {
        "name": "SAFFRON CITY - OUTSIDE - Left Route Connector - 8,1B",
        "level": "6", 
        "to" : "FR,19,0,2",
        "connections" : {
            "FR,3,10,6": true,
        }
    },
    "FR,3,10,9" : {
        "name": "SAFFRON CITY - OUTSIDE - Top Route Connector - 22,5",
        "level": "6", 
        "to" : "FR,17,1,2",
        "grouped" : ["FR,3,10,13"],
        "groupMain" : true,
        "connections" : {
            "FR,3,10,6": true,
        }
    },
    "FR,3,10,10" : {
        "name": "SAFFRON CITY - OUTSIDE - Left Route Connector - 3A,1B",
        "level": "6", 
        "to" : "FR,20,0,1",
        "connections" : {
            "FR,3,10,6": true,
        }
    },
    "FR,3,10,11" : {
        "name": "SAFFRON CITY - OUTSIDE - Bottom Route Connector - 22,2E",
        "level": "6", 
        "to" : "FR,18,0,0",
        "grouped" : ["FR,3,10,12"],
        "groupMain" : true,
        "connections" : {
            "FR,3,10,6": true,
        }
    },
    "FR,3,10,12" : {
        "name": "SAFFRON CITY - OUTSIDE - Bottom Route Connector - 23,2E",
        "level": "6", 
        "to" : "FR,0,18,0",
        "grouped" : ["FR,3,10,11"],
    },
    "FR,3,10,13" : {
        "name": "SAFFRON CITY - OUTSIDE - Top Route Connector - 23,5",
        "level": "6", 
        "to" : "FR,17,1,2",
        "grouped" : ["FR,3,10,9"],
    },
    "FR,3,10,14" : {
        "name": "SAFFRON CITY - OUTSIDE - Left Of Mart - 2F,15",
        "level": "6", 
        "to" : "FR,14,9,0",
    },
    /* SAFFRON - INT */
    "FR,14,0,1" : {
        "name": "SAFFRON CITY - INSIDE - Top Right House Enterance - 4,8",
        "level": "6", 
        "to" : "FR,3,10,1",
        "connections" : {
            "FR,14,0,3": true,
        }
    },
    "FR,14,0,3" : {
        "name": "SAFFRON CITY - INSIDE - Top Right House Stairs - A,2",
        "level": "6", 
        "to" : "FR,14,1,0",
        "connections" : {
            "FR,14,0,1": true,
        }
    },
    "FR,14,1,0" : {
        "name": "SAFFRON CITY - INSIDE - Upstairs - A,2",
        "level": "6", 
        "to" : "FR,14,0,3",
        "tags": ["removeable"]
    },
    "FR,14,2,1" : {
        "name": "SAFFRON CITY - INSIDE - Dojo - 6,E",
        "level": "6", 
        "to" : "FR,3,10,2",
        "tags": ["extraDeadend"]
    },
    "FR,14,3,1" : {
        "name": "SAFFRON CITY - INSIDE - GYM - E,7",
        "level": "6", 
        "to" : "FR,3,10,3",
    },
    "FR,14,4,1" : {
        "name": "SAFFRON CITY - INSIDE - Center Left - 4,7",
        "level": "6", 
        "to" : "FR,3,10,4",
        "tags": ["removeable"]
    },
    "FR,14,5,1" : {
        "name": "SAFFRON CITY - INSIDE - Mart - 4,7",
        "level": "6", 
        "to" : "FR,3,10,5",
    },
    "FR,14,6,1" : {
        "name": "SAFFRON CITY - INSIDE - PkCenter Enterance - 7,8",
        "level": "6", 
        "to" : "FR,3,10,6",
        "connections" : {
            "FR,14,6,3": true,
        }
    },
    "FR,14,6,3" : {
        "name": "SAFFRON CITY - INSIDE - PkCenter Stairs - 1,6",
        "level": "6", 
        "to" : "FR,14,7,0",
        "connections" : {
            "FR,14,6,1": true,
        }
    },
    "FR,14,7,0" : {
        "name": "SAFFRON CITY - INSIDE - PkCenter Upstairs - 1,6",
        "level": "6", 
        "to" : "FR,14,6,3",
        "ignore": "true"
    },
    "FR,14,8,0" : {
        "name": "SAFFRON CITY - INSIDE - Bottom Right - 4,7",
        "level": "6", 
        "to" : "FR,3,10,7",
        "tags": ["extraDeadend"]
    },
    "FR,14,9,0" : {
        "name": "SAFFRON CITY - INSIDE - Center Right - 5,F",
        "level": "6", 
        "to" : "FR,3,10,14",
        "tags": ["extraDeadend"]
    },
    /* SILPH CO. */
    // F1
    "FR,1,47,1" : {
        "name": "SILPH CO. - INSIDE - F1 Enterance - 8,14",
        "level": "6", 
        "to" : "FR,3,10,0",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,47,3" : {
        "name": "SILPH CO. - INSIDE - F1 Stairs - 1F,2",
        "level": "6", 
        "to" : "FR,1,48,3",
        "connections" : {
            "FR,1,47,1": true,
            "FR,1,48,0": true,
            "FR,1,48,1": true,
            "FR,1,48,2": true,
            "FR,1,48,3": true,
            "FR,1,48,4": true,
            "FR,1,48,5": true,
            "FR,1,49,0": true,
            "FR,1,49,1": true,
            "FR,1,49,2": true,
            "FR,1,49,3": true,
            "FR,1,49,4": true,
            "FR,1,49,5": true,
            "FR,1,49,6": true,
            "FR,1,49,7": true,
            "FR,1,49,8": true,
            "FR,1,50,0": true,
            "FR,1,50,1": true,
            "FR,1,50,2": true,
            "FR,1,50,3": true,
            "FR,1,50,4": true,
            "FR,1,50,5": true,
            "FR,1,51,0": true,
            "FR,1,51,1": true,
            "FR,1,51,2": true,
            "FR,1,51,3": true,
            "FR,1,51,4": true,
            "FR,1,51,5": true,
            "FR,1,52,0": true,
            "FR,1,52,1": true,
            "FR,1,52,2": true,
            "FR,1,52,3": true,
            "FR,1,53,0": true,
            "FR,1,53,2": true,
            "FR,1,53,3": true,
            "FR,1,54,0": true,
            "FR,1,54,1": true,
            "FR,1,54,2": true,
            "FR,1,54,3": true,
            "FR,1,54,4": true,
            "FR,1,54,5": true,
            "FR,1,55,0": true,
            "FR,1,55,1": true,
            "FR,1,55,2": true,
            "FR,1,55,3": true,
            "FR,1,56,0": true,
            "FR,1,56,1": true,
            "FR,1,56,2": true,
            "FR,1,56,3": true,
            "FR,1,56,4": true,
            "FR,1,57,0": true,
        }
    },
    // F2
    "FR,1,48,0" : {
        "name": "SILPH CO. - INSIDE - F2 Right Stairs - 1C,2",
        "level": "6", 
        "to" : "FR,1,49,0",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,48,1" : {
        "name": "SILPH CO. - INSIDE - F2 Top Right Warp - 2,6",
        "level": "6", 
        "to" : "FR,1,49,8",
    },
    "FR,1,48,2" : {
        "name": "SILPH CO. - INSIDE - F2 Top Center Warp - F,6",
        "level": "6", 
        "to" : "FR,1,54,5",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,48,3" : {
        "name": "SILPH CO. - INSIDE - F2 Left Stairs - 1E,2",
        "level": "6", 
        "to" : "FR,1,47,3",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,48,4" : {
        "name": "SILPH CO. - INSIDE - F2 Bottom Left - 7,13",
        "level": "6", 
        "to" : "FR,1,52,1",
    },
    "FR,1,48,5" : {
        "name": "SILPH CO. - INSIDE - F2 Bottom Right - 21,13",
        "level": "6", 
        "to" : "FR,1,54,2",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    // F3
    "FR,1,49,0" : {
        "name": "SILPH CO. - INSIDE - F3 Stairs Left - 1C,2",
        "level": "6", 
        "to" : "FR,1,48,0",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,49,1" : {
        "name": "SILPH CO. - INSIDE - F3 Top Left Warp - 4,6",
        "level": "6", 
        "to" : "FR,1,51,1",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,49,2" : {
        "name": "SILPH CO. - INSIDE - F3 Center Warp - D,E",
        "level": "6", 
        "to" : "FR,1,53,4",
    },
    "FR,1,49,3" : {
        "name": "SILPH CO. - INSIDE - F3 Top Right Stairs - 1E,2",
        "level": "6", 
        "to" : "FR,1,50,2",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,49,4" : {
        "name": "SILPH CO. - INSIDE - F3 Center Left Warp - 2,E",
        "level": "6", 
        "to" : "FR,1,55,2",
    },
    "FR,1,49,5" : {
        "name": "SILPH CO. - INSIDE - F3 Bottom Left Warp - 3,14",
        "level": "6", 
        "to" : "FR,1,51,4",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,49,6" : {
        "name": "SILPH CO. - INSIDE - F3 Center Right Warp - 1D,E",
        "level": "6", 
        "to" : "FR,1,49,7",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,49,7" : {
        "name": "SILPH CO. - INSIDE - F3 Bottom Right Warp - 20,14",
        "level": "6", 
        "to" : "FR,1,49,6",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,49,8" : {
        "name": "SILPH CO. - INSIDE - F3 Top Right Warp - 21,5",
        "level": "6", 
        "to" : "FR,1,48,1",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    // F4
    "FR,1,50,0" : {
        "name": "SILPH CO. - INSIDE - F4 Right Stairs - 1C,2",
        "level": "6", 
        "to" : "FR,1,51,0",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,50,1" : {
        "name": "SILPH CO. - INSIDE - F4 Top Center Right Warp - 12,6",
        "level": "6", 
        "to" : "FR,1,52,3",
        "connections" : {
            "FR,1,50,3": true,
        }
    },
    "FR,1,50,2" : {
        "name": "SILPH CO. - INSIDE - F4 Right Stairs - 1E,2",
        "level": "6", 
        "to" : "FR,1,49,3",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,50,3" : {
        "name": "SILPH CO. - INSIDE - F4 Top Center Left Warp - C,9",
        "level": "6", 
        "to" : "FR,1,56,1",
        "connections" : {
            "FR,1,50,1": true,
        }
    },
    "FR,1,50,4" : {
        "name": "SILPH CO. - INSIDE - F4 Bottom Left Warp - 2,14",
        "level": "6", 
        "to" : "FR,1,56,4",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,50,5" : {
        "name": "SILPH CO. - INSIDE - F4 Center Center Warp - 12,E",
        "level": "6", 
        "to" : "FR,1,56,2",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    // F5
    "FR,1,51,0" : {
        "name": "SILPH CO. - INSIDE - F5 Left Stairs - 1C,2",
        "level": "6", 
        "to" : "FR,1,50,0",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,51,1" : {
        "name": "SILPH CO. - INSIDE - F5 Center Top - F,7",
        "level": "6", 
        "to" : "FR,1,49,1",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,51,2" : {
        "name": "SILPH CO. - INSIDE - F5 Right Stairs - 1E,2",
        "level": "6", 
        "to" : "FR,1,52,2",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,51,3" : {
        "name": "SILPH CO. - INSIDE - F5 Center Bottom - A,14",
        "level": "6", 
        "to" : "FR,1,55,1",
        "connections" : {
            "FR,1,47,3": true,
        },
        "tags": ["needs_return"]
    },
    "FR,1,51,4" : {
        "name": "SILPH CO. - INSIDE - F5 Bottom Left - 2,14",
        "level": "6", 
        "to" : "FR,1,49,5",
    },
    "FR,1,51,5" : {
        "name": "SILPH CO. - INSIDE - F5 Top Right - 21,5",
        "level": "6", 
        "to" : "FR,1,53,2",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    // F6
    "FR,1,52,0" : {
        "name": "SILPH CO. - INSIDE - F6 Right Stairs - E,2",
        "level": "6", 
        "to" : "FR,1,53,0",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,52,1" : {
        "name": "SILPH CO. - INSIDE - F6 Top Right - 1D,5",
        "level": "6", 
        "to" : "FR,1,48,4",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,52,2" : {
        "name": "SILPH CO. - INSIDE - F6 Right Stairs - 1A,2",
        "level": "6", 
        "to" : "FR,1,51,2",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,52,3" : {
        "name": "SILPH CO. - INSIDE - F6 Top Left - 2,6",
        "level": "6", 
        "to" : "FR,1,50,1",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    // F7
    "FR,1,53,0" : {
        "name": "SILPH CO. - INSIDE - F7 Left Stairs - 13,2",
        "level": "6", 
        "to" : "FR,1,52,0",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,53,1" : {
        "name": "SILPH CO. - INSIDE - F7 Top Left Bottom Warp - 5,8",
        "level": "6", 
        "to" : "FR,1,57,1",
        "connections" : {
            "FR,1,53,4": true,
        }
    },
    "FR,1,53,2" : {
        "name": "SILPH CO. - INSIDE - F7 Bottom Right - 19,11",
        "level": "6", 
        "to" : "FR,1,51,5",
    },
    "FR,1,53,3" : {
        "name": "SILPH CO. - INSIDE - F7 Right Stairs - 1B,2",
        "level": "6", 
        "to" : "FR,1,54,3",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,53,4" : {
        "name": "SILPH CO. - INSIDE - F7 Top Right Top Warp - 5,4",
        "level": "6", 
        "to" : "FR,1,49,2",
        "connections" : {
            "FR,1,53,1": true,
        }
    },
    // F8
    "FR,1,54,0" : {
        "name": "SILPH CO. - INSIDE - F8 Left Stairs - 10,2",
        "level": "6", 
        "to" : "FR,1,55,0",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,54,1" : {
        "name": "SILPH CO. - INSIDE - F8 Center Bottom - B,A",
        "level": "6", 
        "to" : "FR,1,54,4",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,54,2" : {
        "name": "SILPH CO. - INSIDE - F8 Center Top - A,6",
        "level": "6", 
        "to" : "FR,1,48,5",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,54,3" : {
        "name": "SILPH CO. - INSIDE - F8 Right Stairs - 1C,2",
        "level": "6", 
        "to" : "FR,1,53,3",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,54,4" : {
        "name": "SILPH CO. - INSIDE - F8 Center Left - 2,C",
        "level": "6", 
        "to" : "FR,1,54,1",
    },
    "FR,1,54,5" : {
        "name": "SILPH CO. - INSIDE - F8 Bottom Left - 2,11",
        "level": "6", 
        "to" : "FR,1,48,2",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    // F9
    "FR,1,55,0" : {
        "name": "SILPH CO. - INSIDE - F9 Left Stairs - 10,2",
        "level": "6", 
        "to" : "FR,1,54,0",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,55,1" : {
        "name": "SILPH CO. - INSIDE - F9 Bottom Right - 16,12",
        "level": "6", 
        "to" : "FR,1,51,3",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,55,2" : {
        "name": "SILPH CO. - INSIDE - F9 Top Left - 9,4",
        "level": "6", 
        "to" : "FR,1,49,4",
    },
    "FR,1,55,3" : {
        "name": "SILPH CO. - INSIDE - F9 Right Stairs - 12,2",
        "level": "6", 
        "to" : "FR,1,56,3",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    // F10
    "FR,1,56,0" : {
        "name": "SILPH CO. - INSIDE - F10 Left Stairs - 6,2",
        "level": "6", 
        "to" : "FR,1,57,0",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,56,1" : {
        "name": "SILPH CO. - INSIDE - F10 Bottom Right Top - A,E",
        "level": "6", 
        "to" : "FR,1,50,3",
        "connections" : {
            "FR,1,50,4": true,
        }
    },
    "FR,1,56,2" : {
        "name": "SILPH CO. - INSIDE - F10 Top Right - E,9",
        "level": "6", 
        "to" : "FR,1,50,5",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,56,3" : {
        "name": "SILPH CO. - INSIDE - F10 Right Stairs - 8,2",
        "level": "6", 
        "to" : "FR,1,55,3",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,56,4" : {
        "name": "SILPH CO. - INSIDE - F10 Bottom Right Bottom - E,11",
        "level": "6", 
        "to" : "FR,1,50,4",
        "connections" : {
            "FR,1,56,1": true,
        }
    },
    // F11
    "FR,1,57,0" : {
        "name": "SILPH CO. - INSIDE - F11 Stairs - 7,2",
        "level": "6", 
        "to" : "FR,1,56,0",
        "connections" : {
            "FR,1,47,3": true,
        }
    },
    "FR,1,57,1" : {
        "name": "SILPH CO. - INSIDE - F11 Top Right - 2,5",
        "level": "6", 
        "to" : "FR,1,53,1"
    },
    /* CINNABAR ISLAND - EXT */
    "FR,3,8,0" : {
        "name": "CINNABAR ISLAND - OUTSIDE - Pokemon Mansion - 8,3",
        "level": "7", 
        "to" : "FR,1,59,1",
        "connections" : {
            "FR,3,8,3": true,
        }
    },
    "FR,3,8,1" : {
        "name": "CINNABAR ISLAND - OUTSIDE - Gym - 14,4",
        "level": "7", 
        "to" : "FR,12,0,1",
        "connections" : {
            "FR,3,8,3": true,
        },
        "tags": ["no_return"]
    },
    "FR,3,8,2" : {
        "name": "CINNABAR ISLAND - OUTSIDE - Research Lab - 8,9",
        "level": "7", 
        "to" : "FR,12,1,1",
        "connections" : {
            "FR,3,8,3": true,
        }
    },
    "FR,3,8,3" : {
        "name": "CINNABAR ISLAND - OUTSIDE - PkCenter - E,B",
        "level": "7", 
        "to" : "FR,12,5,0",
        "connections" : {
            "FR,3,8,0": true,
            "FR,3,8,1": "CINNABAR_GYM_KEY",
            "FR,3,8,2": true,
            "FR,3,8,4": true,
            "FR,3,1,0": "KANTO_SURF",
            "FR,3,38,1": "KANTO_SURF"
        }
    },
    "FR,3,8,4" : {
        "name": "CINNABAR ISLAND - OUTSIDE - Mart - 13,B",
        "level": "7", 
        "to" : "FR,12,7,1",
        "connections" : {
            "FR,3,8,3": true,
        }
    },
    /* CINNABAR ISLAND - INT */
    "FR,12,0,1" : {
        "name": "CINNABAR ISLAND - INSIDE - Gym - 19,17",
        "level": "7", 
        "to" : "FR,3,8,1",
    },
    "FR,12,1,1" : {
        "name": "CINNABAR ISLAND - INSIDE - Research Lab - 4,9",
        "level": "7", 
        "to" : "FR,3,8,2",
        "connections" : {
            "FR,12,1,3": true,
            "FR,12,1,4": true,
            "FR,12,1,5": true,
        }
    },
    "FR,12,1,3" : {
        "name": "CINNABAR ISLAND - INSIDE - Research Lab Corridor Left - D,5",
        "level": "7", 
        "to" : "FR,12,2,0",
        "connections" : {
            "FR,12,1,1": true
        }
    },
    "FR,12,1,4" : {
        "name": "CINNABAR ISLAND - INSIDE - Research Lab Corridor Center - 13,5",
        "level": "7", 
        "to" : "FR,12,3,0",
        "connections" : {
            "FR,12,1,1": true
        }
    },
    "FR,12,1,4" : {
        "name": "CINNABAR ISLAND - INSIDE - Research Lab Corridor Center - 13,5",
        "level": "7", 
        "to" : "FR,12,3,0",
        "connections" : {
            "FR,12,1,1": true
        }
    },
    "FR,12,1,5" : {
        "name": "CINNABAR ISLAND - INSIDE - Research Lab Corridor Right - 19,5",
        "level": "7", 
        "to" : "FR,12,4,0",
        "connections" : {
            "FR,12,1,1": true
        }
    },
    "FR,12,2,0" : {
        "name": "CINNABAR ISLAND - INSIDE - Research Lab Left - 7,9",
        "level": "7", 
        "to" : "FR,12,1,3",
        "tags": ["extraDeadend"]
    },
    "FR,12,3,0" : {
        "name": "CINNABAR ISLAND - INSIDE - Research Lab Center - 7,9",
        "level": "7", 
        "to" : "FR,12,1,4",
        "tags": ["extraDeadend"]
    },
    "FR,12,4,0" : {
        "name": "CINNABAR ISLAND - INSIDE - Research Lab Right - 7,9",
        "level": "7", 
        "to" : "FR,12,1,5",
        "tags": ["extraDeadend"]
    },
    "FR,12,5,0" : {
        "name": "CINNABAR ISLAND - INSIDE - PkCenter Enterance - 7,8",
        "level": "7", 
        "to" : "FR,3,8,3",
        "connections" : {
            "FR,12,5,3": true,
        }
    },
    "FR,12,5,3" : {
        "name": "CINNABAR ISLAND - INSIDE - PkCenter Stairs - 1,6",
        "level": "7", 
        "to" : "FR,12,6,0",
        "connections" : {
            "FR,12,5,0": true,
        }
    },
    "FR,12,6,0" : {
        "name": "CINNABAR ISLAND - INSIDE - PkCenter Upstairs - 1,6",
        "level": "7", 
        "to" : "FR,12,5,3",
        "ignore": "true"
    },
    "FR,12,7,1" : {
        "name": "CINNABAR ISLAND - INSIDE - Mart - 3,7",
        "level": "7", 
        "to" : "FR,3,8,4",
    },
    /* POKEMON MANSION */
    // F1
    "FR,1,59,1" : {
        "name": "POKEMON MANSION - INSIDE - F1 Enterance - 8,21",
        "level": "7", 
        "to" : "FR,3,8,0",
        "connections" : {
            "FR,1,59,9": true,
        }
    },
    "FR,1,59,5" : {
        "name": "POKEMON MANSION - INSIDE - F1 Exit - 22,21",
        "level": "7", 
        "to" : "FR,3,8,50",
    },
    "FR,1,59,9" : {
        "name": "POKEMON MANSION - INSIDE - F1 Top Left Stairs - B,D",
        "level": "7", 
        "to" : "FR,1,60,2",
        "grouped" : ["FR,1,59,3"],
        "groupMain" : true,
        "connections" : {
            "FR,1,59,1": true,
        }
    },
    "FR,1,59,3" : {
        "name": "POKEMON MANSION - INSIDE - F1 Top Left Stairs - A,D",
        "level": "7", 
        "to" : "FR,1,60,2",
        "grouped" : ["FR,1,59,9"],
    },
    "FR,1,59,4" : {
        "name": "POKEMON MANSION - INSIDE - F1 Bottom Right Stairs - 19,1B",
        "level": "7", 
        "to" : "FR,1,62,0"
    },
    "FR,1,59,7" : {
        "name": "POKEMON MANSION - INSIDE - F1 Bottom Right Drop - 13,16",
        "level": "7", 
        "to" : "FR,1,61,3",
        "ignore": true,
        "grouped" : ["FR,1,59,8"],
        "groupMain" : true,
        "connections" : {
            "FR,1,59,4": true,
        }
    },
    "FR,1,59,8" : {
        "name": "POKEMON MANSION - INSIDE - F1 Bottom Right Drop - 14,16",
        "level": "7", 
        "to" : "FR,1,61,4",
        "ignore": true,
        "grouped" : ["FR,1,59,7"],
    },
    // F2
    "FR,1,60,0" : {
        "name": "POKEMON MANSION - INSIDE - F2 Top Left Stairs - 9,3",
        "level": "7", 
        "to" : "FR,1,61,0",
        "connections" : {
            "FR,1,60,2": true,
            "FR,1,60,3": true,
        }
    },
    "FR,1,60,1" : {
        "name": "POKEMON MANSION - INSIDE - F2 Bottom Left Stairs - 22,16",
        "level": "7", 
        "to" : "FR,1,61,1"
    },
    "FR,1,60,2" : {
        "name": "POKEMON MANSION - INSIDE - F2 Center Stairs Left - 6,E",
        "level": "7", 
        "to" : "FR,1,59,3",
        "connections" : {
            "FR,1,60,0": true,
            "FR,1,60,3": true,
        }
    },
    "FR,1,60,3" : {
        "name": "POKEMON MANSION - INSIDE - F2 Center Stairs Right - 9,E",
        "level": "7", 
        "to" : "FR,1,61,2",
        "connections" : {
            "FR,1,60,2": true,
            "FR,1,60,3": true,
        }
    },
    "FR,1,60,4" : {
        "name": "POKEMON MANSION - INSIDE - F2 Drop - 1B,11",
        "level": "7", 
        "ignore": true,
        "to" : "FR,1,61,5",
    },
    // F3
    "FR,1,61,0" : {
        "name": "POKEMON MANSION - INSIDE - F3 Top Left Stairs - 8,3",
        "level": "7", 
        "to" : "FR,1,60,0",
        "connections" : {
            "FR,1,61,3": true,
            "FR,1,61,5": true,
            "FR,1,61,1": true,
        }
    },
    "FR,1,61,1" : {
        "name": "POKEMON MANSION - INSIDE - F3 Bottom Right Stairs - 22,12",
        "level": "7", 
        "to" : "FR,1,60,1",
        "connections" : {
            "FR,1,61,3": true,
            "FR,1,61,5": true,
        }
    },
    "FR,1,61,2" : {
        "name": "POKEMON MANSION - INSIDE - F3 Bottom Left Stairs - B,B",
        "level": "7", 
        "to" : "FR,1,60,3",
        "tags": ["extraDeadend"]
    },
    "FR,1,61,3" : {
        "name": "POKEMON MANSION - INSIDE - F3 Left Drop - 12,12",
        "level": "7", 
        "to" : "FR,1,59,7",
        "grouped" : ["FR,1,61,4", "FR,1,61,6"],
        "groupMain" : true,
        "connections" : {
            "FR,1,61,1": true,
            "FR,1,61,5": true,
        }
    },
    "FR,1,61,4" : {
        "name": "POKEMON MANSION - INSIDE - F3 Left Drop - 13,12",
        "level": "7", 
        "grouped" : ["FR,1,61,3", "FR,1,61,6"],
        "to" : "FR,1,59,8",
    },
    "FR,1,61,6" : {
        "name": "POKEMON MANSION - INSIDE - F3 Left Drop - 14,12",
        "level": "7", 
        "grouped" : ["FR,1,61,3", "FR,1,61,4"],
        "to" : "FR,1,59,8",
    },
    "FR,1,61,5" : {
        "name": "POKEMON MANSION - INSIDE - F3 Right Drop - 17,12",
        "level": "7", 
        "to" : "FR,1,60,4",
        "grouped" : ["FR,1,61,7"],
        "groupMain" : true,
        "connections" : {
            "FR,1,61,3": true,
            "FR,1,61,1": true,
        }
    },
    "FR,1,61,7" : {
        "name": "POKEMON MANSION - INSIDE - F3 Right Drop - 18,12",
        "level": "7", 
        "to" : "FR,1,60,4",
        "grouped" : ["FR,1,61,5"],
    },
    // F4
    "FR,1,62,0" : {
        "name": "POKEMON MANSION - INSIDE - F4 Stairs - 22,1D",
        "level": "7", 
        "to" : "FR,1,59,4",
    },
// LEVEL 9
    /* ROUTE 23  - EXT */
    "FR,3,42,0" : {
        "name": "ROUTE 23 - OUTSIDE - Victory Road Left Enterance - 5,1C",
        "level": "9", 
        "to" : "FR,1,39,1",
    },
    "FR,3,42,1" : {
        "name": "ROUTE 23 - OUTSIDE - Victory Road Right Enterance - 12,1C",
        "level": "9", 
        "to" : "FR,1,40,6",
        "connections" : {
            "FR,13,0,0": true,
        }
    },
    "FR,3,42,2" : {
        "name": "ROUTE 23 - OUTSIDE - Route 22 Connector - 8,99",
        "level": "9", 
        "to" : "FR,28,0,0",
    },
    /* INDIGO PLATEAU - EXT */
    "FR,3,9,0" : {
        "name": "ROUTE 23 - OUTSIDE - Indigo Plateau - 5,1C",
        "level": "9", 
        "to" : "FR,13,0,0",
    },
    /* INDIGO PLATEAU - INT */
    "FR,13,0,0" : {
        "name": "INDIGO PLATEAU - INSIDE - Indigo Plateau Enterance - B,10",
        "level": "9", 
        "to" : "FR,3,9,0",
        "connections" : {
            "FR,13,0,2": true,
            "FR,13,0,1": true,
            "FR,3,9,0": true
        }
    },
    "FR,13,0,1" : {
        "name": "INDIGO PLATEAU - INSIDE - Indigo Plateau E4 Enterance - 4,1",
        "level": "9", 
        "to" : "FR,1,75,0",
        "connections" : {
            "FR,13,0,0": true,
            "FR,13,0,1": true,
        },
        "tags": ["no_return"]
    },
    "FR,13,0,2" : {
        "name": "INDIGO PLATEAU - INSIDE - Indigo Plateau Stairs - 1,E",
        "level": "9", 
        "to" : "FR,13,1,0",
        "connections" : {
            "FR,13,0,0": true,
            "FR,13,0,1": true,
        }
    },
    "FR,13,1,0" : {
        "name": "INDIGO PLATEAU - INSIDE - Indigo Plateau Upstairs - 1,6",
        "level": "9", 
        "to" : "FR,13,0,2",
        "ignore": "true"
    },
    /* VICTORY ROAD */
    // F1
    "FR,1,39,0" : {
        "name": "VICTORY ROAD - INSIDE - Victory Road F1 Top Left - 3,2",
        "level": "9", 
        "to" : "FR,1,40,0",
        "connections" : {
            "FR,1,39,1": "KANTO_STRENGTH",
        }
    },
    "FR,1,39,1" : {
        "name": "VICTORY ROAD - INSIDE - Victory Road F1 Enterance - B,14",
        "level": "9", 
        "to" : "FR,3,42,0",
        "connections" : {
            "FR,1,39,0": "KANTO_STRENGTH",
        }
    },
    // F2
    "FR,1,40,0" : {
        "name": "VICTORY ROAD - INSIDE - Victory Road F2 Center Left - 1,9",
        "level": "9", 
        "to" : "FR,1,39,0",
        "connections" : {
            "FR,1,40,2": "KANTO_STRENGTH",
        }
    },
    "FR,1,40,1" : {
        "name": "VICTORY ROAD - INSIDE - Victory Road F2 Top Left - 3,3",
        "level": "9", 
        "to" : "FR,1,41,0",
        "connections" : {
            "FR,1,40,0": "KANTO_STRENGTH",
        }
    },
    "FR,1,40,2" : {
        "name": "VICTORY ROAD - INSIDE - Victory Road F2 Center Top - 22,9",
        "level": "9", 
        "to" : "FR,1,41,1",
        "connections" : {
            "FR,1,40,0": "KANTO_STRENGTH",
        }
    },
    "FR,1,40,3" : {
        "name": "VICTORY ROAD - INSIDE - Victory Road F2 Center Right - 26,9",
        "level": "9", 
        "to" : "FR,1,41,2",
        "connections" : {
            "FR,1,40,6": true,
        }
    },
    "FR,1,40,4" : {
        "name": "VICTORY ROAD - INSIDE - Victory Road F2 Center Bottom - 24,11",
        "level": "9", 
        "to" : "FR,1,41,3"
    },
    "FR,1,40,6" : {
        "name": "VICTORY ROAD - INSIDE - Victory Road F2 Left Exit - 30,C",
        "level": "9", 
        "to" : "FR,3,42,1",
        "connections" : {
            "FR,1,40,3": true,
        }
    },
    "FR,1,40,8" : {
        "name": "VICTORY ROAD - INSIDE - Victory Road F2 Drop - 22,13",
        "level": "9", 
        "to" : "FR,1,41,4",
        "ignore": true,
        "connections" : {
            "FR,1,40,2": true,
            "FR,1,40,0": "KANTO_STRENGTH",
        }
    },
    // F3
    "FR,1,41,0" : {
        "name": "VICTORY ROAD - INSIDE - Victory Road F3 Top Left - 5,2",
        "level": "9", 
        "to" : "FR,1,40,1",
        "connections" : {
            "FR,1,41,1": true,
            "FR,1,41,4": "KANTO_STRENGTH",
        }
    },
    "FR,1,41,1" : {
        "name": "VICTORY ROAD - INSIDE - Victory Road F3 Center Top - 22,9",
        "level": "9", 
        "to" : "FR,1,40,2",
        "connections" : {
            "FR,1,41,0": true,
            "FR,1,41,4": "KANTO_STRENGTH",
        }
    },
    "FR,1,41,2" : {
        "name": "VICTORY ROAD - INSIDE - Victory Road F3 Right Top - 25,A",
        "level": "9", 
        "to" : "FR,1,40,3",
        "connections" : {
            "FR,1,41,3": true,
            "FR,1,41,4": "KANTO_STRENGTH",
        }
    },
    "FR,1,41,3" : {
        "name": "VICTORY ROAD - INSIDE - Victory Road F3 Right Bottom - 27,11",
        "level": "9", 
        "to" : "FR,1,40,4",
        "connections" : {
            "FR,1,41,2": true,
        }
    },
    "FR,1,41,4" : {
        "name": "VICTORY ROAD - INSIDE - Victory Road F3 Center Bottom Hole - 22,12",
        "level": "9", 
        "to" : "FR,1,40,8",
        "connections" : {
            "FR,1,41,1": true,
            "FR,1,41,0": true,
        }
    },
    /* E4 */
    // E4 1
    "FR,1,75,0" : {
        "name": "E4 - INSIDE - E4 1 Bottom - 6,C",
        "level": "9", 
        "to" : "FR,13,0,1",
    },
    "FR,1,75,1" : {
        "name": "E4 - INSIDE - E4 1 Top - 6,2",
        "level": "9", 
        "to" : "FR,1,76,0",
    },
    // E4 2
    "FR,1,76,0" : {
        "name": "E4 - INSIDE - E4 2 Bottom - 6,C",
        "level": "9", 
        "to" : "FR,1,75,1",
    },
    "FR,1,76,1" : {
        "name": "E4 - INSIDE - E4 2 Top - 6,2",
        "level": "9", 
        "to" : "FR,1,77,0",
    },
    // E4 3
    "FR,1,77,0" : {
        "name": "E4 - INSIDE - E4 3 Bottom - 6,C",
        "level": "9", 
        "to" : "FR,1,76,1",
    },
    "FR,1,77,1" : {
        "name": "E4 - INSIDE - E4 3 Top - 6,2",
        "level": "9", 
        "to" : "FR,1,78,0",
    },
    // E4 4
    "FR,1,78,0" : {
        "name": "E4 - INSIDE - E4 4 Bottom - 17,D",
        "level": "9", 
        "to" : "FR,1,77,1",
    },
    "FR,1,78,1" : {
        "name": "E4 - INSIDE - E4 4 Top - 6,5",
        "level": "9", 
        "to" : "FR,1,79,0",
    },
    // E4 Champ
    "FR,1,79,0" : {
        "name": "E4 - INSIDE - Champ - 6,13",
        "level": "9", 
        "to" : "FR,1,78,1",
    },
    /* ALTERING CAVE  */
    // Added when there's an odd number of warps
    "FR,1,122,0" : {
        "ignore": true,
        "name" : "ALTERING CAVE - INSIDE - Enterance - 12,16",
        "to" : "FR,3,58,0"
    },
    /* CERULEAN CAVE  */
    // F1
    "FR,1,72,0" : {
        "name": "CERULEAN CAVE - INSIDE - F1 Enterance - 21,15",
        "level": "9", 
        "to" : "FR,3,3,7",
        "connections" : {
            "FR,1,72,1": "KANTO_SURF",
            "FR,1,72,3": "KANTO_SURF",
        }
    },
    "FR,1,72,1" : {
        "name": "CERULEAN CAVE - INSIDE - F1 Ladder Top Right - 22,2",
        "level": "9", 
        "to" : "FR,1,73,0",
        "connections" : {
            "FR,1,72,0": "KANTO_SURF",
            "FR,1,72,3": "KANTO_SURF",
        }
    },
    "FR,1,72,2" : {
        "name": "CERULEAN CAVE - INSIDE - F1 Top Left Ladder Down - 1,7",
        "level": "9", 
        "to" : "FR,1,74,0",
        "connections" : {
            "FR,1,72,7": true,
        }
    },
    "FR,1,72,3" : {
        "name": "CERULEAN CAVE - INSIDE - F1 Ladder Top Middle - A,2",
        "level": "9", 
        "to" : "FR,1,73,1",
        "connections" : {
            "FR,1,72,0": "KANTO_SURF",
            "FR,1,72,1": "KANTO_SURF",
            "FR,1,72,4": true,
            "FR,1,72,5": true,
            "FR,1,72,6": true,

        }
    },
    "FR,1,72,4" : {
        "name": "CERULEAN CAVE - INSIDE - F1 Bottom Left - 5,F",
        "level": "9", 
        "to" : "FR,1,73,2",
        "connections" : {
            "FR,1,72,3": true,
        }
    },
    "FR,1,72,5" : {
        "name": "CERULEAN CAVE - INSIDE - F1 Middle Right - 1E,A",
        "level": "9", 
        "to" : "FR,1,73,3",
        "connections" : {
            "FR,1,72,3": true,
        }
    },
    "FR,1,72,6" : {
        "name": "CERULEAN CAVE - INSIDE - F1 Center - 18,B",
        "level": "9", 
        "to" : "FR,1,73,4",
        "connections" : {
            "FR,1,72,3": true,
        }
    },
    "FR,1,72,7" : {
        "name": "CERULEAN CAVE - INSIDE - F1 Top Left Ladder Up - 2,4",
        "level": "9", 
        "to" : "FR,1,73,5",
        "connections" : {
            "FR,1,72,2": true,
        }
    },
    // F2
    "FR,1,73,0" : {
        "name": "CERULEAN CAVE - INSIDE - F2 Top Right - 21,4",
        "level": "9", 
        "to" : "FR,1,72,1",
        "tags": ["extraDeadend"]
    },
    "FR,1,73,1" : {
        "name": "CERULEAN CAVE - INSIDE - F2 Top Middle - D,4",
        "level": "9", 
        "to" : "FR,1,72,3",
        "tags": ["extraDeadend"]
    },
    "FR,1,73,2" : {
        "name": "CERULEAN CAVE - INSIDE - F2 Bottom Left - 7,E",
        "level": "9", 
        "to" : "FR,1,72,4",
        "tags": ["extraDeadend"]
    },
    "FR,1,73,3" : {
        "name": "CERULEAN CAVE - INSIDE - F2 Middle Right - 1A,9",
        "level": "9", 
        "to" : "FR,1,72,5",
        "tags": ["extraDeadend"]
    },
    "FR,1,73,4" : {
        "name": "CERULEAN CAVE - INSIDE - F2 Middle Middle - 17,A",
        "level": "9", 
        "to" : "FR,1,72,6",
        "connections" : {
            "FR,1,73,5": true,
        }
    },
    "FR,1,73,5" : {
        "name": "CERULEAN CAVE - INSIDE - F2 Top Left - 5,6",
        "level": "9", 
        "to" : "FR,1,72,7",
        "connections" : {
            "FR,1,73,4": true,
        }
    },
    // F3
    "FR,1,74,0" : {
        "name": "CERULEAN CAVE - INSIDE - F3 Ladder - 5,7",
        "level": "9", 
        "to" : "FR,1,72,2"
    },
}