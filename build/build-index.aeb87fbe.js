var earlyBalls=!1;function patchGameIssues(){IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C")&&(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15012333,128),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15012338,2),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15012453,128),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15012456,5),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15012458,2),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15012468,240),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15012469,99),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15976872,118),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15976873,115),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15976874,232),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15141505,13),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15141508,28),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15141510,1),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15141553,13),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15141556,28),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15141558,1),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(16091277,208),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(16091292,241),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(16091293,218),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(16091294,232),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(16091112,36),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15283181,203),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15283196,118),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15283197,115),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15283198,232),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15304780,17),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15304782,24),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15304782,16),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15304972,28),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15304974,23),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15304998,23),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15305044,27),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15305046,11),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15305068,27),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15305070,11),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15988206,199),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15988207,6),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15988384,199),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15988385,6),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15988622,199),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15988623,6),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15988688,199),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15988689,6),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(2260775,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(2260776,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(2260777,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(2260798,156),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(2261380,156),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(2261382,1),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(2261428,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(2261429,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(2261430,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(2262050,156),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(2262052,2),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(2262098,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(2262099,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(2262100,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(2262700,156),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(2262702,3),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(2262748,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(2262749,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(2262750,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15814874,14),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15814900,22),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15814901,50),patchSectionOfRom(15815330,[121,48,121,48,121,48,121,48,8,6,121,48,129,48],"C"),patchSectionOfRom(15815344,[121,48,8,6,121,48,121,48,121,48,121,48,129,48,129,48],"C"),patchSectionOfRom(15815360,[129,48,129,48,129,48,136,48,137,48,138,48,129,48,129,48],"C"),patchSectionOfRom(15815376,[129,48,129,48,129,48,8,4,8,4,8,4,8,4,8,4],"C"),patchSectionOfRom(15815392,[26,4,27,4,28,4,8,4,8,4,8,4,8,4,8,4],"C"),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(16142170,14),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(16142196,22),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(16142197,50),patchSectionOfRom(16142626,[121,48,121,48,121,48,121,48,8,6,121,48,129,48],"C"),patchSectionOfRom(16142640,[121,48,8,6,121,48,121,48,121,48,121,48,129,48,129,48],"C"),patchSectionOfRom(16142656,[129,48,129,48,129,48,136,48,137,48,138,48,129,48,129,48],"C"),patchSectionOfRom(16142672,[129,48,129,48,129,48,8,4,8,4,8,4,8,4,8,4],"C"),patchSectionOfRom(16142688,[26,4,27,4,28,4,8,4,8,4,8,4,8,4,8,4],"C"),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(16142742,14),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(16142768,22),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(16142769,50),patchSectionOfRom(16143198,[121,48],"C"),patchSectionOfRom(16143200,[121,48,121,48,121,48,8,6,121,48,129,48,121,48,8,6],"C"),patchSectionOfRom(16143216,[121,48,121,48,121,48,121,48,129,48,129,48,129,48,129,48],"C"),patchSectionOfRom(16143232,[129,48,136,48,137,48,138,48,129,48,129,48,129,48,129,48],"C"),patchSectionOfRom(16143248,[129,48,8,4,8,4,8,4,8,4,8,4,26,4,27,4],"C"),patchSectionOfRom(16143264,[28,4,8,4,8,4,8,4,8,4,8,4,8,4,3,7],"C"),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(16145934,14),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(16145960,22),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(16145961,50),patchSectionOfRom(16146390,[121,48,121,48,121,48,121,48,8,6],"C"),patchSectionOfRom(16146400,[121,48,129,48,121,48,8,6,121,48,121,48,121,48,121,48],"C"),patchSectionOfRom(16146416,[129,48,129,48,129,48,129,48,129,48,136,48,137,48,138,48],"C"),patchSectionOfRom(16146432,[129,48,129,48,129,48,129,48,129,48,8,4,8,4,8,4],"C"),patchSectionOfRom(16146448,[8,4,8,4,26,4,27,4,28,4,8,4,8,4,8,4],"C"),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15948716,201),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15948717,159),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(15948718,157),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(546008,8),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(353578,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(353581,208),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(353806,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(353809,208)),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E")&&(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(5416604,37),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4379965,50),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4421796,112),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4421797,17),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(5403413,133),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(5403416,32),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(5403418,33),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(5403428,111),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(5403429,100),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(5403800,32),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2534674,11),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2534676,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(5413240,27),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(5413242,28),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(5413245,8),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(5413360,30),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(5413362,28),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(5413365,8),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(5403200,41),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(5403216,40),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(5403232,58),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(5403234,29),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(5403248,57),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(5403250,29),patchSectionOfRom(5421868,[24,94,31,8],"E"),patchSectionOfRom(5421916,[24,94,31,8],"E"),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(1828844,169),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4384996,70),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4385056,78),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4385057,50),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4379938,68),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4379939,7),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4379964,69),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4379965,51),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4380334,68),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4380335,7),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4380360,69),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4380361,51),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4380730,68),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4380731,7),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4380756,69),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4380757,51),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4380730,68),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4380731,7),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4380756,69),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4380757,51),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4381126,68),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4381127,7),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4381152,69),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4381153,51),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4381126,68),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4381127,7),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4381152,69),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4381153,51),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4381806,34),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4381808,71),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(4381810,34),patchSectionOfRom(4380222,[1,50,68,51,3,50,215,6,213,6,214,6,213,6,214,6,72,7,73,7,72,7,73,7,230,6,9,50,69,51,11,50,223,6],"E"),patchSectionOfRom(4380618,[1,50,68,51,3,50],"E"),patchSectionOfRom(4380644,[9,50,69,51,11,50,223,6,72,7,73,7],"E"),patchSectionOfRom(4381014,[1,50,68,51,3,50,215,6,213,6],"E"),patchSectionOfRom(4381040,[9,50,69,51,11,50,223,6,72,7,73,7,72,7,73,7],"E"),patchSectionOfRom(4381410,[1,50,68,51,3,50,215,6,213,6,214,6,213,6],"E"),patchSectionOfRom(4381436,[9,50,69,51,11],"E"),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2260775,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2260776,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2260777,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2260798,156),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2261380,156),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2261382,1),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2261428,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2261429,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2261430,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2262050,156),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2262052,2),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2262098,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2262099,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2262100,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2262700,156),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2262702,3),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2262748,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2262749,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2262750,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2565255,1),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2565264,68),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2565265,3),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2565266,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2565273,3),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2565282,9),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2565289,13),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2565291,69),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2565292,3),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2565293,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2565300,11),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2263612,15),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(2263618,39),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(5453584,69),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(5453585,138),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(5453586,34),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(5453587,8),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(546008,8),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(353578,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(353581,208),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(353806,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(353809,208)),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR")&&(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").ROM[188]?(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3887900,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3272917,50),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3959110,200),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3959112,200),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3959114,200),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3959116,200),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1445785,209),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1445786,2),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1445787,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1445794,225),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1445795,2),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1445796,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1445932,209),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1445933,2),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1445934,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1445941,225),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1445942,2),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1445943,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1445951,209),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1445952,2),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1445953,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1445960,225),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1445961,2),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1445962,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1446201,209),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1446202,2),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1446203,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1446210,225),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1446211,2),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1446212,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(186006,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(186009,208),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(186234,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(186237,208),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3275838,138),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3275839,2),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3275840,142),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3275841,2),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3275842,140),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3275843,2),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3275864,149),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3275865,2),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3275866,150),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3275867,50),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3275868,151),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3275869,2),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3873272,238),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3873273,43),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3873274,22),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3873275,8),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1452901,61),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1452902,38),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1453047,97),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1453048,118),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1453049,26),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1734169,138),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1734178,142),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1734180,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1734187,140),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1734196,149),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1734205,150),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1734207,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1734214,151),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3274510,64),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3274511,7),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3274512,54),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3274513,7),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3274566,72),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3274567,7),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3274568,62),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3274569,7),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3274620,16),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3274621,51),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3274622,16),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3274623,51),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3274624,16),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3274625,51),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3274626,16),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3274627,51),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3274754,150),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3274755,50),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3272890,142),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3272916,150),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3272917,50),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3273266,142),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3273292,150),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3273293,50),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3273642,142),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3273668,150),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3273669,50),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3274216,142),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3274272,150),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3274273,50),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1451566,104),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1451567,64),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1451838,104),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1451839,64),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1451840,1),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1452233,104),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1452234,64),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1452235,2),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1452518,104),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1452519,64),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1452520,3),earlyBalls&&(patchSectionOfRom(1480016,[0,150,150,22,8,33,2,64,2,0,7,1,150,150,22,8],"FR"),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1480039,150),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(1480040,150)),document.getElementById("earlyBalls").setAttribute("disabled",!0),document.getElementById("earlyBallsHolder").style.filter="saturate(0)"):(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3887788,0),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(3272805,50)))}function patchOutInstantCatch(){IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(186006,1),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(186009,209),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(186234,1),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(186237,209),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(353578,1),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(353581,209),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(353806,1),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(353809,209),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(353578,1),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(353581,209),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(353806,1),IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(353809,209)}
//# sourceMappingURL=build-index.aeb87fbe.js.map
