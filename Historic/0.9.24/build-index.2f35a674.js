"use strict";function GameBoyAdvanceBGTEXTRenderer(t,e){e|=0,this.gfx=t,this.BGLayer=0|e}__VIEWS_SUPPORTED__?(GameBoyAdvanceBGTEXTRenderer.prototype.initialize=function(){this.VRAM=this.gfx.VRAM,this.VRAM16=this.gfx.VRAM16,this.VRAM32=this.gfx.VRAM32,this.palette16=this.gfx.palette16,this.palette256=this.gfx.palette256,this.offset=256+(this.BGLayer<<8)|0,this.scratchBuffer=getInt32ViewCustom(this.gfx.buffer,0|this.offset,248+(0|this.offset)|0),this.tileFetched=getInt32ViewCustom(this.gfx.buffer,248+(0|this.offset)|0,256+(0|this.offset)|0),this.BGXCoord=0,this.BGYCoord=0,this.do256=0,this.doMosaic=0,this.screenSizePreprocess(0),this.priorityPreprocess(0),this.screenBaseBlockPreprocess(0),this.characterBaseBlockPreprocess(0)},GameBoyAdvanceBGTEXTRenderer.prototype.renderWholeTiles8BIT=function(t,e,i){t|=0,e|=0,i|=0;for(var s=8-(7&this.BGXCoord)|0;(0|s)<240;s=8+(0|s)|0)this.process8BitVRAM(0|this.fetchTile(0|e,0|t),0|i),this.scratchBuffer[0|s]=0|this.tileFetched[0],this.scratchBuffer[1+(0|s)|0]=0|this.tileFetched[1],this.scratchBuffer[2+(0|s)|0]=0|this.tileFetched[2],this.scratchBuffer[3+(0|s)|0]=0|this.tileFetched[3],this.scratchBuffer[4+(0|s)|0]=0|this.tileFetched[4],this.scratchBuffer[5+(0|s)|0]=0|this.tileFetched[5],this.scratchBuffer[6+(0|s)|0]=0|this.tileFetched[6],this.scratchBuffer[7+(0|s)|0]=0|this.tileFetched[7],t=1+(0|t)|0},GameBoyAdvanceBGTEXTRenderer.prototype.renderWholeTiles4BIT=function(t,e,i){t|=0,e|=0,i|=0;for(var s=8-(7&this.BGXCoord)|0;(0|s)<240;s=8+(0|s)|0)this.process4BitVRAM(0|this.fetchTile(0|e,0|t),0|i),this.scratchBuffer[0|s]=0|this.tileFetched[0],this.scratchBuffer[1+(0|s)|0]=0|this.tileFetched[1],this.scratchBuffer[2+(0|s)|0]=0|this.tileFetched[2],this.scratchBuffer[3+(0|s)|0]=0|this.tileFetched[3],this.scratchBuffer[4+(0|s)|0]=0|this.tileFetched[4],this.scratchBuffer[5+(0|s)|0]=0|this.tileFetched[5],this.scratchBuffer[6+(0|s)|0]=0|this.tileFetched[6],this.scratchBuffer[7+(0|s)|0]=0|this.tileFetched[7],t=1+(0|t)|0},GameBoyAdvanceBGTEXTRenderer.prototype.fetchVRAMStart=function(){var t=7&this.BGXCoord;switch(0|t){case 0:this.scratchBuffer[0]=0|this.tileFetched[0];case 1:this.scratchBuffer[1-(0|t)|0]=0|this.tileFetched[1];case 2:this.scratchBuffer[2-(0|t)|0]=0|this.tileFetched[2];case 3:this.scratchBuffer[3-(0|t)|0]=0|this.tileFetched[3];case 4:this.scratchBuffer[4-(0|t)|0]=0|this.tileFetched[4];case 5:this.scratchBuffer[5-(0|t)|0]=0|this.tileFetched[5];case 6:this.scratchBuffer[6-(0|t)|0]=0|this.tileFetched[6];default:this.scratchBuffer[7-(0|t)|0]=0|this.tileFetched[7]}}):(GameBoyAdvanceBGTEXTRenderer.prototype.initialize=function(){this.VRAM=this.gfx.VRAM,this.VRAM16=this.gfx.VRAM16,this.VRAM32=this.gfx.VRAM32,this.palette16=this.gfx.palette16,this.palette256=this.gfx.palette256,this.offset=256+(this.BGLayer<<8),this.offsetEnd=this.offset+240,this.scratchBuffer=this.gfx.buffer,this.tileFetched=getInt32Array(8),this.BGXCoord=0,this.BGYCoord=0,this.do256=0,this.doMosaic=0,this.screenSizePreprocess(0),this.priorityPreprocess(0),this.screenBaseBlockPreprocess(0),this.characterBaseBlockPreprocess(0)},GameBoyAdvanceBGTEXTRenderer.prototype.renderWholeTiles8BIT=function(t,e,i){for(var s=8-(7&this.BGXCoord)+this.offset;s<this.offsetEnd;)this.process8BitVRAM(this.fetchTile(e,t++),i),this.scratchBuffer[s++]=this.tileFetched[0],this.scratchBuffer[s++]=this.tileFetched[1],this.scratchBuffer[s++]=this.tileFetched[2],this.scratchBuffer[s++]=this.tileFetched[3],this.scratchBuffer[s++]=this.tileFetched[4],this.scratchBuffer[s++]=this.tileFetched[5],this.scratchBuffer[s++]=this.tileFetched[6],this.scratchBuffer[s++]=this.tileFetched[7]},GameBoyAdvanceBGTEXTRenderer.prototype.renderWholeTiles4BIT=function(t,e,i){for(var s=8-(7&this.BGXCoord)+this.offset;s<this.offsetEnd;)this.process4BitVRAM(this.fetchTile(e,t++),i),this.scratchBuffer[s++]=this.tileFetched[0],this.scratchBuffer[s++]=this.tileFetched[1],this.scratchBuffer[s++]=this.tileFetched[2],this.scratchBuffer[s++]=this.tileFetched[3],this.scratchBuffer[s++]=this.tileFetched[4],this.scratchBuffer[s++]=this.tileFetched[5],this.scratchBuffer[s++]=this.tileFetched[6],this.scratchBuffer[s++]=this.tileFetched[7]},GameBoyAdvanceBGTEXTRenderer.prototype.fetchVRAMStart=function(){var t=7&this.BGXCoord,e=t-this.offset;switch(0|t){case 0:this.scratchBuffer[e]=this.tileFetched[0];case 1:this.scratchBuffer[1-e]=this.tileFetched[1];case 2:this.scratchBuffer[2-e]=this.tileFetched[2];case 3:this.scratchBuffer[3-e]=this.tileFetched[3];case 4:this.scratchBuffer[4-e]=this.tileFetched[4];case 5:this.scratchBuffer[5-e]=this.tileFetched[5];case 6:this.scratchBuffer[6-e]=this.tileFetched[6];default:this.scratchBuffer[7-e]=this.tileFetched[7]}}),GameBoyAdvanceBGTEXTRenderer.prototype.renderScanLine=function(t){t|=0,0!=(0|this.doMosaic)&&(t=(0|t)-(0|this.gfx.mosaicRenderer.getMosaicYOffset(0|t))|0);var e=(0|t)+(0|this.BGYCoord)&7,i=(0|t)+(0|this.BGYCoord)>>3,s=this.BGXCoord>>3;0!=(0|this.do256)?this.render8BITLine(0|i,0|s,0|e):this.render4BITLine(0|i,0|s,0|e),0!=(0|this.doMosaic)&&this.gfx.mosaicRenderer.renderMosaicHorizontal(0|this.offset)},GameBoyAdvanceBGTEXTRenderer.prototype.render8BITLine=function(t,e,i){t|=0,e|=0,i|=0;var s=0|this.fetchTile(0|t,0|e);e=1+(0|e)|0,this.process8BitVRAM(0|s,0|i),this.fetchVRAMStart(),this.renderWholeTiles8BIT(0|e,0|t,0|i)},GameBoyAdvanceBGTEXTRenderer.prototype.render4BITLine=function(t,e,i){var s=0|this.fetchTile(0|t,0|e);e=1+(0|e)|0,this.process4BitVRAM(0|s,0|i),this.fetchVRAMStart(),this.renderWholeTiles4BIT(0|e,0|t,0|i)},__LITTLE_ENDIAN__?GameBoyAdvanceBGTEXTRenderer.prototype.fetchTile=function(t,e){t|=0,e|=0;var i=(0|this.computeTileNumber(0|t,0|e))+(0|this.BGScreenBaseBlock)|0;return 0|this.VRAM16[32767&i]}:GameBoyAdvanceBGTEXTRenderer.prototype.fetchTile=function(t,e){var i=this.computeTileNumber(t,e)+this.BGScreenBaseBlock<<1&65535;return this.VRAM[1|i]<<8|this.VRAM[i]},GameBoyAdvanceBGTEXTRenderer.prototype.computeTileNumber=function(t,e){t|=0;var i=31&(e|=0);switch(0|this.tileMode){case 0:i|=(31&t)<<5;break;case 1:i|=(32&e|31&t)<<5;break;case 2:i|=(63&t)<<5;break;default:i=i|(32&e|31&t)<<5|(32&t)<<6}return 0|i},GameBoyAdvanceBGTEXTRenderer.prototype.process4BitVRAM=function(t,e){e|=0;var i=(1023&(t|=0))<<3;i=(0|i)+(0|this.BGCharacterBaseBlock)|0,i=0==(2048&t)?(0|i)+(0|e)|0:(0|(i=7+(0|i)|0))-(0|e)|0,this.render4BitVRAM(t>>8,0|i)},__LITTLE_ENDIAN__?GameBoyAdvanceBGTEXTRenderer.prototype.render4BitVRAM=function(t,e){if(t|=0,(0|(e|=0))<16384){var i=240&t,s=0|this.VRAM32[0|e];0==(4&t)?(this.tileFetched[0]=this.palette16[i|15&s]|this.priorityFlag,this.tileFetched[1]=this.palette16[i|s>>4&15]|this.priorityFlag,this.tileFetched[2]=this.palette16[i|s>>8&15]|this.priorityFlag,this.tileFetched[3]=this.palette16[i|s>>12&15]|this.priorityFlag,this.tileFetched[4]=this.palette16[i|s>>16&15]|this.priorityFlag,this.tileFetched[5]=this.palette16[i|s>>20&15]|this.priorityFlag,this.tileFetched[6]=this.palette16[i|s>>24&15]|this.priorityFlag,this.tileFetched[7]=this.palette16[i|s>>>28]|this.priorityFlag):(this.tileFetched[0]=this.palette16[i|s>>>28]|this.priorityFlag,this.tileFetched[1]=this.palette16[i|s>>24&15]|this.priorityFlag,this.tileFetched[2]=this.palette16[i|s>>20&15]|this.priorityFlag,this.tileFetched[3]=this.palette16[i|s>>16&15]|this.priorityFlag,this.tileFetched[4]=this.palette16[i|s>>12&15]|this.priorityFlag,this.tileFetched[5]=this.palette16[i|s>>8&15]|this.priorityFlag,this.tileFetched[6]=this.palette16[i|s>>4&15]|this.priorityFlag,this.tileFetched[7]=this.palette16[i|15&s]|this.priorityFlag)}else this.addressInvalidRender()}:GameBoyAdvanceBGTEXTRenderer.prototype.render4BitVRAM=function(t,e){if((e<<=2)<65536){var i=240&t,s=this.VRAM[e];0==(4&t)?(this.tileFetched[0]=this.palette16[i|15&s]|this.priorityFlag,this.tileFetched[1]=this.palette16[i|s>>4]|this.priorityFlag,s=this.VRAM[1|e],this.tileFetched[2]=this.palette16[i|15&s]|this.priorityFlag,this.tileFetched[3]=this.palette16[i|s>>4]|this.priorityFlag,s=this.VRAM[2|e],this.tileFetched[4]=this.palette16[i|15&s]|this.priorityFlag,this.tileFetched[5]=this.palette16[i|s>>4]|this.priorityFlag,s=this.VRAM[3|e],this.tileFetched[6]=this.palette16[i|15&s]|this.priorityFlag,this.tileFetched[7]=this.palette16[i|s>>4]|this.priorityFlag):(this.tileFetched[7]=this.palette16[i|15&s]|this.priorityFlag,this.tileFetched[6]=this.palette16[i|s>>4]|this.priorityFlag,s=this.VRAM[1|e],this.tileFetched[5]=this.palette16[i|15&s]|this.priorityFlag,this.tileFetched[4]=this.palette16[i|s>>4]|this.priorityFlag,s=this.VRAM[2|e],this.tileFetched[3]=this.palette16[i|15&s]|this.priorityFlag,this.tileFetched[2]=this.palette16[i|s>>4]|this.priorityFlag,s=this.VRAM[3|e],this.tileFetched[1]=this.palette16[i|15&s]|this.priorityFlag,this.tileFetched[0]=this.palette16[i|s>>4]|this.priorityFlag)}else this.addressInvalidRender()},GameBoyAdvanceBGTEXTRenderer.prototype.process8BitVRAM=function(t,e){e|=0;var i=(1023&(t|=0))<<4;switch(i=(0|i)+(0|this.BGCharacterBaseBlock)|0,3072&t){case 0:i=(0|i)+(e<<1)|0,this.render8BitVRAMNormal(0|i);break;case 1024:i=(0|i)+(e<<1)|0,this.render8BitVRAMFlipped(0|i);break;case 2048:i=(0|(i=14+(0|i)|0))-(e<<1)|0,this.render8BitVRAMNormal(0|i);break;default:i=(0|(i=14+(0|i)|0))-(e<<1)|0,this.render8BitVRAMFlipped(0|i)}},__LITTLE_ENDIAN__?(GameBoyAdvanceBGTEXTRenderer.prototype.render8BitVRAMNormal=function(t){if((0|(t|=0))<16384){var e=0|this.VRAM32[0|t];this.tileFetched[0]=this.palette256[255&e]|this.priorityFlag,this.tileFetched[1]=this.palette256[e>>8&255]|this.priorityFlag,this.tileFetched[2]=this.palette256[e>>16&255]|this.priorityFlag,this.tileFetched[3]=this.palette256[e>>>24]|this.priorityFlag,e=0|this.VRAM32[1|t],this.tileFetched[4]=this.palette256[255&e]|this.priorityFlag,this.tileFetched[5]=this.palette256[e>>8&255]|this.priorityFlag,this.tileFetched[6]=this.palette256[e>>16&255]|this.priorityFlag,this.tileFetched[7]=this.palette256[e>>>24]|this.priorityFlag}else this.addressInvalidRender()},GameBoyAdvanceBGTEXTRenderer.prototype.render8BitVRAMFlipped=function(t){if((0|(t|=0))<16384){var e=0|this.VRAM32[0|t];this.tileFetched[4]=this.palette256[e>>>24]|this.priorityFlag,this.tileFetched[5]=this.palette256[e>>16&255]|this.priorityFlag,this.tileFetched[6]=this.palette256[e>>8&255]|this.priorityFlag,this.tileFetched[7]=this.palette256[255&e]|this.priorityFlag,e=0|this.VRAM32[1|t],this.tileFetched[0]=this.palette256[e>>>24]|this.priorityFlag,this.tileFetched[1]=this.palette256[e>>16&255]|this.priorityFlag,this.tileFetched[2]=this.palette256[e>>8&255]|this.priorityFlag,this.tileFetched[3]=this.palette256[255&e]|this.priorityFlag}else this.addressInvalidRender()}):(GameBoyAdvanceBGTEXTRenderer.prototype.render8BitVRAMNormal=function(t){(t<<=2)<65536?(this.tileFetched[0]=this.palette256[this.VRAM[t]]|this.priorityFlag,this.tileFetched[1]=this.palette256[this.VRAM[1|t]]|this.priorityFlag,this.tileFetched[2]=this.palette256[this.VRAM[2|t]]|this.priorityFlag,this.tileFetched[3]=this.palette256[this.VRAM[3|t]]|this.priorityFlag,this.tileFetched[4]=this.palette256[this.VRAM[4|t]]|this.priorityFlag,this.tileFetched[5]=this.palette256[this.VRAM[5|t]]|this.priorityFlag,this.tileFetched[6]=this.palette256[this.VRAM[6|t]]|this.priorityFlag,this.tileFetched[7]=this.palette256[this.VRAM[7|t]]|this.priorityFlag):this.addressInvalidRender()},GameBoyAdvanceBGTEXTRenderer.prototype.render8BitVRAMFlipped=function(t){(t<<=2)<65536?(this.tileFetched[7]=this.palette256[this.VRAM[t]]|this.priorityFlag,this.tileFetched[6]=this.palette256[this.VRAM[1|t]]|this.priorityFlag,this.tileFetched[5]=this.palette256[this.VRAM[2|t]]|this.priorityFlag,this.tileFetched[4]=this.palette256[this.VRAM[3|t]]|this.priorityFlag,this.tileFetched[3]=this.palette256[this.VRAM[4|t]]|this.priorityFlag,this.tileFetched[2]=this.palette256[this.VRAM[5|t]]|this.priorityFlag,this.tileFetched[1]=this.palette256[this.VRAM[6|t]]|this.priorityFlag,this.tileFetched[0]=this.palette256[this.VRAM[7|t]]|this.priorityFlag):this.addressInvalidRender()}),GameBoyAdvanceBGTEXTRenderer.prototype.addressInvalidRender=function(){var t=this.gfx.transparency|this.priorityFlag;this.tileFetched[0]=0|t,this.tileFetched[1]=0|t,this.tileFetched[2]=0|t,this.tileFetched[3]=0|t,this.tileFetched[4]=0|t,this.tileFetched[5]=0|t,this.tileFetched[6]=0|t,this.tileFetched[7]=0|t},GameBoyAdvanceBGTEXTRenderer.prototype.setMosaicEnable=function(t){t|=0,this.doMosaic=0|t},GameBoyAdvanceBGTEXTRenderer.prototype.paletteModeSelect=function(t){t|=0,this.do256=0|t},GameBoyAdvanceBGTEXTRenderer.prototype.screenSizePreprocess=function(t){t|=0,this.tileMode=0|t},GameBoyAdvanceBGTEXTRenderer.prototype.priorityPreprocess=function(t){t|=0,this.priorityFlag=t<<23|1<<(16|this.BGLayer)},GameBoyAdvanceBGTEXTRenderer.prototype.screenBaseBlockPreprocess=function(t){t|=0,this.BGScreenBaseBlock=t<<10},GameBoyAdvanceBGTEXTRenderer.prototype.characterBaseBlockPreprocess=function(t){t|=0,this.BGCharacterBaseBlock=t<<12},GameBoyAdvanceBGTEXTRenderer.prototype.writeBGCNT8_0=function(t){t|=0,this.setMosaicEnable(64&t),this.paletteModeSelect(128&t),this.priorityPreprocess(3&t),this.characterBaseBlockPreprocess((12&t)>>2)},GameBoyAdvanceBGTEXTRenderer.prototype.writeBGCNT8_1=function(t){t|=0,this.screenSizePreprocess((192&t)>>6),this.screenBaseBlockPreprocess(31&t)},GameBoyAdvanceBGTEXTRenderer.prototype.writeBGCNT16=function(t){t|=0,this.setMosaicEnable(64&t),this.paletteModeSelect(128&t),this.priorityPreprocess(3&t),this.characterBaseBlockPreprocess((12&t)>>2),this.screenSizePreprocess((49152&t)>>14),this.screenBaseBlockPreprocess(t>>8&31)},GameBoyAdvanceBGTEXTRenderer.prototype.writeBGHOFS8_0=function(t){t|=0,this.BGXCoord=256&this.BGXCoord|t},GameBoyAdvanceBGTEXTRenderer.prototype.writeBGHOFS8_1=function(t){t|=0,this.BGXCoord=t<<8|255&this.BGXCoord},GameBoyAdvanceBGTEXTRenderer.prototype.writeBGHOFS16=function(t){t|=0,this.BGXCoord=0|t},GameBoyAdvanceBGTEXTRenderer.prototype.writeBGVOFS8_0=function(t){t|=0,this.BGYCoord=256&this.BGYCoord|t},GameBoyAdvanceBGTEXTRenderer.prototype.writeBGVOFS8_1=function(t){t|=0,this.BGYCoord=t<<8|255&this.BGYCoord},GameBoyAdvanceBGTEXTRenderer.prototype.writeBGVOFS16=function(t){t|=0,this.BGYCoord=0|t},GameBoyAdvanceBGTEXTRenderer.prototype.writeBGOFS32=function(t){t|=0,this.BGXCoord=511&t,this.BGYCoord=t>>16};
//# sourceMappingURL=build-index.2f35a674.js.map
