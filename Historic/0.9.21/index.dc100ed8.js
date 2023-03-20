"use strict";var gfxBuffers=null,gfxCounters=null;function IodineGBAWorkerGfxShim(){this.gfx=null,gfxBuffers=[getSharedUint8Array(115200),getSharedUint8Array(115200)],gfxCounters=getSharedInt32Array(3),this.Iodine=new GameBoyAdvanceEmulator}IodineGBAWorkerGfxShim.prototype.play=function(){this.Iodine.play()},IodineGBAWorkerGfxShim.prototype.pause=function(){this.Iodine.pause()},IodineGBAWorkerGfxShim.prototype.restart=function(){this.Iodine.restart()},IodineGBAWorkerGfxShim.prototype.setIntervalRate=function(e){e=+e,this.Iodine.setIntervalRate(+e)},IodineGBAWorkerGfxShim.prototype.timerCallback=function(e){e>>>=0,this.Iodine.timerCallback(e)},IodineGBAWorkerGfxShim.prototype.attachGraphicsFrameHandler=function(e){this.gfx=e;var t=this;this.gfx.attachGfxCallback((function(){t.graphicsHeartBeat()})),this.Iodine.attachGraphicsFrameHandler(e)},IodineGBAWorkerGfxShim.prototype.attachAudioHandler=function(e){this.Iodine.attachAudioHandler(e)},IodineGBAWorkerGfxShim.prototype.enableAudio=function(){this.Iodine.enableAudio()},IodineGBAWorkerGfxShim.prototype.disableAudio=function(){this.Iodine.disableAudio()},IodineGBAWorkerGfxShim.prototype.toggleSkipBootROM=function(e){e|=0,this.Iodine.toggleSkipBootROM(0|e)},IodineGBAWorkerGfxShim.prototype.toggleDynamicSpeed=function(e){e|=0,this.Iodine.toggleDynamicSpeed(0|e)},IodineGBAWorkerGfxShim.prototype.toggleOffthreadGraphics=function(e){e|=0,this.Iodine.toggleOffthreadGraphics(0|e)},IodineGBAWorkerGfxShim.prototype.attachSpeedHandler=function(e){this.Iodine.attachSpeedHandler(e)},IodineGBAWorkerGfxShim.prototype.attachPlayStatusHandler=function(e){this.Iodine.attachPlayStatusHandler(e)},IodineGBAWorkerGfxShim.prototype.keyDown=function(e){e|=0,this.Iodine.keyDown(0|e)},IodineGBAWorkerGfxShim.prototype.keyUp=function(e){e|=0,this.Iodine.keyUp(0|e)},IodineGBAWorkerGfxShim.prototype.incrementSpeed=function(e){e=+e,this.Iodine.incrementSpeed(+e)},IodineGBAWorkerGfxShim.prototype.setSpeed=function(e){e=+e,this.Iodine.setSpeed(+e)},IodineGBAWorkerGfxShim.prototype.attachBIOS=function(e){this.Iodine.attachBIOS(e)},IodineGBAWorkerGfxShim.prototype.attachROM=function(e){this.Iodine.attachROM(e)},IodineGBAWorkerGfxShim.prototype.exportSave=function(){this.Iodine.exportSave()},IodineGBAWorkerGfxShim.prototype.attachSaveExportHandler=function(e){this.Iodine.attachSaveExportHandler(e)},IodineGBAWorkerGfxShim.prototype.attachSaveImportHandler=function(e){this.Iodine.attachSaveImportHandler(e)},IodineGBAWorkerGfxShim.prototype.graphicsHeartBeat=function(){this.gfx&&gfxCounters&&(this.consumeGraphicsBuffer(),Atomics.notify(gfxCounters,2,1))},IodineGBAWorkerGfxShim.prototype.consumeGraphicsBuffer=function(){var e=0|gfxCounters[0],t=0|Atomics.load(gfxCounters,1);if((0|t)!=(0|e)){do{this.gfx.copyBuffer(gfxBuffers[1&e]),e=1+(0|e)|0}while((0|e)!=(0|t));gfxCounters[0]=0|t}};
//# sourceMappingURL=index.dc100ed8.js.map