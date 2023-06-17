var RELEASE_NOTES = {
    "0.10.2-ALPHA" : [
        "FRLG V.Road Rocks / CD Ice Path Now Pre-Dropped",
        "Aqua R121 + Magma Mossdeep Grunts now removable from both sides",
        "Dynamic Player Repositioning for drop warps/escalators (i.e avoid getting locked behind saffron rockets from drop warps)",
        "All E4 Rooms and All champion rooms (except champ Lance) can now be walked out of",
        "New Keybindings: Second A, Second B, Turbo A, Turbo B, ToggleSpeedCodes (turbo delay now configurable)",
        "CD Sudowoodo and Suicune will now be automatically randomized if you load a randomized rom",
        "Early Balls Option (will trigger parcel delivery script as soon as the rival is defeated) (MUST BE ENABLED BEFORE LOADING ROMS!!!)",
        "SpeedCodes (Speedup games while keeping normal speed audio) (MUST BE ENABLED BEFORE LOADING ROMS IF YOU WANT THE OPTION TO TOGGLE IT LATER!!!)" + 
        "<BR> NB: If you use speedup codes and haven't loaded a genuine ninendo bios.bin (RECOMMENDED) before loading the roms the intro oak sprite will not be displayed."
    ],
    "0.10.1-ALPHA" : [
        "Various Bug Fixes",
        "Remove Darkness from all caves",
        "Rework Randomization and pathing algorithm"
    ],
    "0.9.25-ALPHA" : [
        "Fix incorrect connection mapping in sky pillar",
        "Fix incorrect connection mapping in whirlisland",
    ],
    "0.9.24-ALPHA" : [
        "Fix confilict between new bios and instant text",
        "Fix island cave outside warp broken",
        "Remove accidently included warp",
        "Fix volume getting switched between games"
    ],
    "0.9.23-ALPHA" : [
        "Fix various progression issues in Emerald randomisation"
    ],
    "0.9.22-ALPHA" : [
        "UI style updates for smaller screens",
        "Norman Battle available as soon as catch tutorial ends",
        "Getting Blue Flute in Emerald now gives Poke Flute in Fire Red",
        "BIOS issue fixed including sprite animations in emerald",
        "Waterfall always available and cave of origin always unlocked",
        "Fix trickmaster crashing when talking after final item",
        "Fix progression flags for gyms that need hms to complete",
        "Devon Corp F1 now always unlocked",
        "Add Crystal exclusive items to bag hacks menu",
        "Historic Versions and release note managment"
    ],
    "0.9.21-ALPHA" : [
       "Fix default acro bike sprites in Crytal",
       "Add Keybinds for volume"
    ],                  
};

var VERSION_COMPARITOR = function(version1, version2) {
    version1 = version1.split("-")[0];
    version2 = version2.split("-")[0];
    return version1.localeCompare(version2, undefined, { numeric: true, sensitivity: 'base' })
}