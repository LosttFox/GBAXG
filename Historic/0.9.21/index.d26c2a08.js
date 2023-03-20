"use strict";function GameBoyAdvanceBGMatrixRenderer(e){this.gfx=e}GameBoyAdvanceBGMatrixRenderer.prototype.initialize=function(){this.VRAM=this.gfx.VRAM,this.palette=this.gfx.palette256,this.screenSizePreprocess(0),this.screenBaseBlockPreprocess(0),this.characterBaseBlockPreprocess(0),this.displayOverflowProcess(0)},"function"==typeof Math.imul?GameBoyAdvanceBGMatrixRenderer.prototype.fetchTile=function(e,r){r|=0;var t=(0|(e|=0))+Math.imul(0|r,0|this.mapSize)|0;return 0|this.VRAM[(0|t)+(0|this.BGScreenBaseBlock)&65535]}:GameBoyAdvanceBGMatrixRenderer.prototype.fetchTile=function(e,r){var t=e+r*this.mapSize;return this.VRAM[t+this.BGScreenBaseBlock&65535]},GameBoyAdvanceBGMatrixRenderer.prototype.computeScreenAddress=function(e,r){e|=0,r|=0;var t=this.fetchTile(e>>3,r>>3)<<6;return 0|(t=(0|(t=(0|(t=(0|t)+(0|this.BGCharacterBaseBlock)|0))+((7&r)<<3)|0))+(7&e)|0)},GameBoyAdvanceBGMatrixRenderer.prototype.fetchPixelOverflow=function(e,r){e|=0,r|=0;var t=0|this.computeScreenAddress(e&this.mapSizeComparer,r&this.mapSizeComparer);return 0|this.palette[255&this.VRAM[65535&t]]},GameBoyAdvanceBGMatrixRenderer.prototype.fetchPixelNoOverflow=function(e,r){if(r|=0,(0|(e|=0))!=(e&this.mapSizeComparer)||(0|r)!=(r&this.mapSizeComparer))return 58720256;var t=0|this.computeScreenAddress(0|e,0|r);return 0|this.palette[255&this.VRAM[65535&t]]},GameBoyAdvanceBGMatrixRenderer.prototype.screenBaseBlockPreprocess=function(e){e|=0,this.BGScreenBaseBlock=e<<11},GameBoyAdvanceBGMatrixRenderer.prototype.characterBaseBlockPreprocess=function(e){e|=0,this.BGCharacterBaseBlock=e<<14},GameBoyAdvanceBGMatrixRenderer.prototype.screenSizePreprocess=function(e){e|=0,this.mapSize=16<<(0|e),this.mapSizeComparer=(this.mapSize<<3)-1|0},GameBoyAdvanceBGMatrixRenderer.prototype.displayOverflowPreprocess=function(e){(0|(e|=0))!=(0|this.BGDisplayOverflow)&&this.displayOverflowProcess(0|e)},GameBoyAdvanceBGMatrixRenderer.prototype.displayOverflowProcess=function(e){e|=0,this.BGDisplayOverflow=0|e,this.fetchPixel=0!=(0|e)?this.fetchPixelOverflow:this.fetchPixelNoOverflow};
//# sourceMappingURL=index.d26c2a08.js.map