# GBAXG

> [!NOTE]
> This is a patch to give the ability to obtain Magby. It removes `"removeable"` tag from two locations.

> [!CAUTION]
> The patch does not work yet ;-;

Welcome to the GBA Cross-Game Pokemon Map Randomiser. This emulator mod loads and modifies Fire Red, Emerald and Crystal Dust ROMS so you can simultaneously play across Kanto, Johto and Hoenn. Memory is dynamically altered so you can keep your team, items, money and trainer data when moving between games/reigons.

A major new release is now (August 2023) available with a complete change of the emulation core to use skyemu. [Go To The Emulator](https://losttfox.github.io/GBAXG/skycore/build/bin/) . 


The older version can still be played [here](https://kittypboxx.github.io/GBAXG/build) but will no longer be updated.

<p align="center">
  <img src="https://user-images.githubusercontent.com/89883734/212461211-d80a84f4-8b99-48c8-aec2-0c0506ff77cc.gif" />
</p>

---

## Rules

If you've not played a map randomiser before the goal is to find and beat the Gyms, E4, Champion (and final boss). In this you start in Pallet Town where none of the loading zones have been randomised but that will change as soon as you get to Viridian. 

The randomisation logic should make it so that it's possible to beat the Gyms, E4 and Champion in order. The logic only guarantees order within each region. This means you should always be able to beat Kanto Gym 1 before Gym 2(/3/4/5 e.t.c) however you might need to beat Johto gyms 1,2 and 3 before you can get to Kanto Gym 1. 

If you are only randomising up to certain gyms you will never have to play beyond that point. 

In a full randomisation there are 24 Gyms, 12 E4, 3 Champions and 1 final boss (Steven). Red is not present in Crystal Dust V2.

---

## Setup

<p align="center">

  <a href="https://www.youtube.com/watch?v=R8K889-O7co">
    <img src="https://img.youtube.com/vi/R8K889-O7co/0.jpg" />
  </a>
  
</p>

1. Legally backup a copy *Fire Red 1.1 (U)* [^1] and *Emerald (U)* [^2]
2. Download Crystal Dust V2 patch from here [here](https://domoreaweso.me/games/pokemon-crystaldust). **Make sure to use V2 and not V3**  
3. Use a [rom patcher](https://www.marcrobledo.com/RomPatcher.js/) to apply the Crystal Dust V2 patch to a copy of your Emerald (U). You should now have 3 roms.
4. Open [the emulator](https://kittypboxx.github.io/GBAXG/skycore/build/bin/) in [Chrome](https://www.google.com/intl/en_uk/chrome/) (**Edge is not supported**) [^4]  
5. Load each rom into the correct slot. Crystal and Emerald will need to run some initialisation code when they are loaded
6. When all 3 roms are loaded press 'start' and it should boot into a new game of Fire Red 

ESC (or long swipe down) will bring up the emulation menu where you can change things like the seed.

<br>
[^1] (md5sum 51901a6e40661b3914aa333c802e24e8)
<br>
[^2] (md5sum 605b89b67018abcea91e693a4dd25be3)
<br>
[^3] (md5sum ef47f6528875dc3de037e75bba6a0ecb)
<br>
[^4] Firefox may work but is prone to lagging (especially during speedup)

---

## Tracker

A version of Sekii's tracker that supports all three game at once is now available at [https://sekii.gitlab.io/pokemon-tracker/](https://sekii.gitlab.io/pokemon-tracker/)

---

## How Does It Work?

<p align="center">
  <img src="https://kittypboxx.github.io/GBAXG/resources/warpBetweenGames.jpg" />
</p>

Data extraction can be broken into 3 main parts. 
1. Current Warp | (Length 0x3 bytes) | FR (0x2031dbc) / E (0x20322e4) 
2. Current Party | (Length 0x258 bytes) | FR (0x02024284) / E (0x020244EC)
3. Save Data (it's complicated).

From the save data we need to extract things like: Badges, Cross Game Flags (e.g running shoes/starter choice), Repel Steps, Play Time, Game Settings, Trainer Name/Gender/ID, Money, Bag Data, Boxed Pokemon e.t.c 

Gen 3 save data structure is well documented, however 2 main issues. Some data (e.g money and item counts) is obsfucated with an XOR key that gets frequently updated and will be different between games. We need to be careful that when going from Game 1 to Game 2 we XOR this data with Game 1's key then XOR it again with game two's key before we inject that data. This key can be fround inside save block 1.

In general Block 1 contains game flags and bag data, Block 2 contains trainer data and settings and Block 3 contains boxes pokemon and items.

The second, and larger problem, is that save data is split into 3 blocks that get randomly moved around in the EWRAM each time a warp is triggered or menu opened. This means we cannot hard code offsets in order to look up data. To resolve this we have to look up the pointers to those addresses in the IWRAM (which do have a constant offsets) to get the start of each block. Then we use the offset from the start of the block to find the save data we want. Pointers are 3 32-bit values starting at  FR (0x03005008) / E (0x03005D8C).

<br>

---

## Current Cross-Game limitations

- Currently only PC box 1 is shared between games
- Whiteout (and teleport e.t.c) will go the the last heal point in which ever region/game you are currently in. 
- Some items (mostly from Crystal Dust e.g rage candy bar) only work in the game they were designed for. TMs may be different in Crystal.
- When randomizing abilities and base stats with UPR these will change between regions. When randomising TMs/HMs these will not stay the same between games.

---

## Progress & Development

You can now see the latest fixes and tracked issues over on the [trello development page](https://trello.com/b/esQs4wx3/multi-game-random-warps) 

You can find older releases [here](https://kittypboxx.github.io/GBAXG/Historic) 

---

## F.A.Q

**I found a bug. What should I do?** 
>  If you find any issue please report them in the issues setion of the github [here](https://github.com/KittyPBoxx/GBAXG/issues). Preferably include as much details as possible and screenshots.

**Can I choose which reigon I start in?**
> Not at the moment. This may be added in future.

**Will Sevii Islands/Mt. Silver/Tin Tower/Battle Frontier e.t.c be included later?**
> I want to focus on making the experience as polished as possible for the first release so I'm not currently adding any more areas. Not every area is possible to add, however Sevii islands and the outside of the battle frontier may be added in a later release. 

**Can I randomise the pokemon?**
> Randomised roms have not had much testing and may produce bugs. However you can use [this](https://kittypboxx.github.io/GBAXG/skycore/upr/UniversalPokemonRandomizer-gbaxg-0.11.3-alpha.zip) randomiser to randomise the roms. You will need to modify each rom separately before loading them. The Randomiser is a copy of *Universal Pokemon Randomizer - ZX* that has been modified so that it hopfully won't crash when used on Crystal Dust V2. Compatibility with Crystal Dust V2 will probably not be 100% as I only made changes to help prevent crashing, I've not specifically added offsets e.t.c for things like static encounters.         

**Will this work with X Rom hack?**
> Simple binary hacks *may* be compatible. Decomp hacks will probably **not** work without making changes to some of the hard coded ROM and RAM addresses in the following files: `WarpFixes, EmulationCoreHacks, SpriteOffsetData`

**Can I play on mobile/tablet**
> Maybe. The mod has been designed for and tested on desktop and requires a reasonable processor. However it may be able to run within some mobile browsers. A long swipe down can be used to open/close the main menu. On-screen keys can be activated from the controls screen. Some additional performance may be gained by activating 'LOW SPEC PC' mode from the hacks screen. This will disable audio and may cause frames to be missed.  

**It gets stuck saying 'Initialising' for Emerald/Crystal**
> The first time Emerald/Crystal are loaded (after erasing data) save data needs to be loaded in the background. This isn't the case for Fire Red as you manually create a new game. Initialising the roms should generally not take more than 30 seconds the first time they are loaded and should be instant after. If the initilisation is taking a long time/appears to be stuck you should refresh the page and try again. Less powerful devices (such as tablets) may run out of resources during initilisation and fail. As a work-around you can start the game on a more powerful device, save the game and export the save file ('EXPORT LAST'). You can then import this on your less powerful device BEFORE loading the roms and initilisation will be skipped.   

--- 

## Credits

### Coding - `KittyPBoxx`
### Testers - `Sabata`
<br>
*Crystal Dust V2 was created by Sierraffinity (domoreaweso.me)*<br>
*IodineGBA (the core emulator) was created by Grant Galitz (taisel)* <br>
*Universal Pokemon Randomizer ZX was created by Ajarmar* <br>
*SkyEmu was created by skylersaleh*<br>

<br/>

The Source Code for the project can be found at [https://github.com/KittyPBoxx/GBAXG](https://github.com/KittyPBoxx/GBAXG)

---

## Licence 

MIT License (MIT)

Copyright © 2022, [KittyPBoxx](https://github.com/KittyPBoxx/).

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Search

As various terms such as pokemon combo map randomizer, combo warp randomizer, crossover map randomizer e.t.c are used interchangeably some people have had issues finding the repository. For this reason I've started added in alternate terms such as map randomiser, multigame map randomizer and Fire Red + Emerald map randomizer to help people find this when using different search terms.
