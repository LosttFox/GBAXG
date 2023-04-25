"use strict";function GameBoyAdvanceDMA2(t){this.IOCore=t}GameBoyAdvanceDMA2.prototype.DMA_ENABLE_TYPE=[1,2,4,16],GameBoyAdvanceDMA2.prototype.initialize=function(){this.enabled=0,this.pending=0,this.source=0,this.sourceShadow=0,this.destination=0,this.destinationShadow=0,this.wordCount=0,this.wordCountShadow=0,this.irqFlagging=0,this.dmaType=0,this.is32Bit=0,this.repeat=0,this.sourceControl=0,this.destinationControl=0,this.DMACore=this.IOCore.dma,this.memory=this.IOCore.memory,this.gfxState=this.IOCore.gfxState,this.irq=this.IOCore.irq,this.sound=this.IOCore.sound,this.wait=this.IOCore.wait},GameBoyAdvanceDMA2.prototype.validateDMASource=function(t){(0|(t|=0))>=33554432&&(this.source=0|t)},GameBoyAdvanceDMA2.prototype.validateDMADestination=function(t){(0|(t|=0))<=134217727&&(this.destination=0|t)},GameBoyAdvanceDMA2.prototype.writeDMASource8_0=function(t){t|=0;var e=268435200&this.source;e|=t&=255,this.validateDMASource(0|e)},GameBoyAdvanceDMA2.prototype.writeDMASource8_1=function(t){t|=0;var e=268370175&this.source;e|=(t&=255)<<8,this.validateDMASource(0|e)},GameBoyAdvanceDMA2.prototype.writeDMASource8_2=function(t){t|=0;var e=this.source;t&=255,e=ource|t<<16,this.validateDMASource(0|e)},GameBoyAdvanceDMA2.prototype.writeDMASource8_3=function(t){t|=0;var e=16777215&this.source;e|=(t&=15)<<24,this.validateDMASource(0|e)},GameBoyAdvanceDMA2.prototype.writeDMASource16_0=function(t){t|=0;var e=268369920&this.source;e|=t&=65535,this.validateDMASource(0|e)},GameBoyAdvanceDMA2.prototype.writeDMASource16_1=function(t){t|=0;var e=65535&this.source;e|=(t&=4095)<<16,this.validateDMASource(0|e)},GameBoyAdvanceDMA2.prototype.writeDMASource32=function(t){var e=268435455&(t|=0);this.validateDMASource(0|e)},GameBoyAdvanceDMA2.prototype.writeDMADestination8_0=function(t){t|=0;var e=268435200&this.destination;e|=t&=255,this.validateDMADestination(0|e)},GameBoyAdvanceDMA2.prototype.writeDMADestination8_1=function(t){t|=0;var e=268370175&this.destination;e|=(t&=255)<<8,this.validateDMADestination(0|e)},GameBoyAdvanceDMA2.prototype.writeDMADestination8_2=function(t){t|=0;var e=251723775&this.destination;e|=(t&=255)<<16,this.validateDMADestination(0|e)},GameBoyAdvanceDMA2.prototype.writeDMADestination8_3=function(t){t|=0;var e=16777215&this.destination;e|=(t&=15)<<24,this.validateDMADestination(0|e)},GameBoyAdvanceDMA2.prototype.writeDMADestination16_0=function(t){t|=0;var e=268369920&this.destination;e|=t&=65535,this.validateDMADestination(0|e)},GameBoyAdvanceDMA2.prototype.writeDMADestination16_1=function(t){t|=0;var e=65535&this.destination;e|=(t&=4095)<<16,this.validateDMADestination(0|e)},GameBoyAdvanceDMA2.prototype.writeDMADestination32=function(t){var e=268435455&(t|=0);this.validateDMADestination(0|e)},GameBoyAdvanceDMA2.prototype.writeDMAWordCount8_0=function(t){t|=0,this.wordCount=16128&this.wordCount,t&=255,this.wordCount=this.wordCount|t},GameBoyAdvanceDMA2.prototype.writeDMAWordCount8_1=function(t){t|=0,this.wordCount=255&this.wordCount,t&=63,this.wordCount=this.wordCount|t<<8},GameBoyAdvanceDMA2.prototype.writeDMAWordCount16=function(t){t|=0,this.wordCount=16383&t},GameBoyAdvanceDMA2.prototype.writeDMAControl8_0=function(t){t|=0,this.destinationControl=t>>5&3,this.sourceControl=2&this.sourceControl,this.sourceControl=this.sourceControl|t>>7&1},GameBoyAdvanceDMA2.prototype.writeDMAControl8_1=function(t){t|=0,this.IOCore.updateCoreClocking(),this.sourceControl=1&this.sourceControl|(1&t)<<1,this.repeat=2&t,this.is32Bit=4&t,this.dmaType=t>>4&3,this.irqFlagging=64&t,this.enableDMAChannel(128&t),this.IOCore.updateCoreEventTime()},GameBoyAdvanceDMA2.prototype.writeDMAControl16=function(t){t|=0,this.IOCore.updateCoreClocking(),this.destinationControl=t>>5&3,this.sourceControl=t>>7&3,this.repeat=t>>8&2,this.is32Bit=t>>8&4,this.dmaType=t>>12&3,this.irqFlagging=t>>8&64,this.enableDMAChannel(32768&t),this.IOCore.updateCoreEventTime()},GameBoyAdvanceDMA2.prototype.writeDMAControl32=function(t){t|=0,this.writeDMAWordCount16(0|t),this.writeDMAControl16(t>>16)},GameBoyAdvanceDMA2.prototype.readDMAControl8_0=function(){var t=this.destinationControl<<5;return 0|(t|=(1&this.sourceControl)<<7)},GameBoyAdvanceDMA2.prototype.readDMAControl8_1=function(){var t=this.sourceControl>>1;return t|=this.repeat,t|=this.is32Bit,t|=this.dmaType<<4,t|=this.irqFlagging,0!=(0|this.enabled)&&(t|=128),0|t},GameBoyAdvanceDMA2.prototype.readDMAControl16=function(){var t=this.destinationControl<<5;return t|=this.sourceControl<<7,t|=this.repeat<<8,t|=this.is32Bit<<8,t|=this.dmaType<<12,t|=this.irqFlagging<<8,0!=(0|this.enabled)&&(t|=32768),0|t},GameBoyAdvanceDMA2.prototype.getMatchStatus=function(){return this.enabled&this.pending},GameBoyAdvanceDMA2.prototype.soundFIFOBRequest=function(){this.requestDMA(16)},GameBoyAdvanceDMA2.prototype.requestDMA=function(t){t|=0,0!=(this.enabled&t)&&(this.pending=0|t,this.DMACore.update())},GameBoyAdvanceDMA2.prototype.enableDMAChannel=function(t){if(0!=(0|(t|=0))){if(0==(0|this.enabled)){switch(0|this.dmaType){case 3:this.wordCountShadow=4;break;case 0:this.pending=1;default:this.wordCountShadow=0|this.wordCount}this.sourceShadow=0|this.source,this.destinationShadow=0|this.destination}this.enabled=0|this.DMA_ENABLE_TYPE[0|this.dmaType],this.sound.checkFIFOBPendingSignal()}else this.enabled=0;this.DMACore.update()},GameBoyAdvanceDMA2.prototype.handleDMACopy=function(){var t=0|this.sourceShadow;if(16==(0|this.enabled))this.copySound(0|t);else{var e=0|this.destinationShadow;4==(0|this.is32Bit)?this.copy32(0|t,0|e):this.copy16(0|t,0|e)}},GameBoyAdvanceDMA2.prototype.copy16=function(t,e){t|=0,e|=0;var o=0|this.memory.memoryReadDMAFull16(0|t);this.memory.memoryWriteDMA16(0|e,0|o),this.decrementWordCount(0|t,0|e,2),this.DMACore.updateFetch(o|o<<16)},GameBoyAdvanceDMA2.prototype.copy32=function(t,e){t|=0,e|=0;var o=0|this.memory.memoryReadDMAFull32(0|t);this.memory.memoryWriteDMA32(0|e,0|o),this.decrementWordCount(0|t,0|e,4),this.DMACore.updateFetch(0|o)},GameBoyAdvanceDMA2.prototype.copySound=function(t){t|=0;var e=0|this.memory.memoryReadDMAFull32(0|t);this.wait.singleClock(),this.IOCore.updateTimerClocking(),this.sound.writeFIFOB32(0|e),this.soundDMAUpdate(0|t),this.DMACore.updateFetch(0|e)},GameBoyAdvanceDMA2.prototype.decrementWordCount=function(t,e,o){t|=0,e|=0,o|=0;var i=(0|this.wordCountShadow)-1&16383;0==(0|i)?i=0|this.finalizeDMA(0|t,0|e,0|o):this.incrementDMAAddresses(0|t,0|e,0|o),this.wordCountShadow=0|i},GameBoyAdvanceDMA2.prototype.soundDMAUpdate=function(t){switch(t|=0,this.wordCountShadow=(0|this.wordCountShadow)-1&16383,0==(0|this.wordCountShadow)&&(this.pending=0,0==(0|this.repeat)?this.enabled=0:this.wordCountShadow=4,this.sound.checkFIFOBPendingSignal(),this.DMACore.update(),this.checkIRQTrigger()),0|this.sourceControl){case 0:case 3:this.sourceShadow=4+(0|t)|0;break;case 1:this.sourceShadow=(0|t)-4|0}},GameBoyAdvanceDMA2.prototype.finalizeDMA=function(t,e,o){t|=0,e|=0,o|=0;var i=0;return this.pending=0,0==(0|this.repeat)||1==(0|this.enabled)?this.enabled=0:i=0|this.wordCount,this.sound.checkFIFOBPendingSignal(),this.DMACore.update(),this.checkIRQTrigger(),this.finalDMAAddresses(0|t,0|e,0|o),0|i},GameBoyAdvanceDMA2.prototype.checkIRQTrigger=function(){0!=(0|this.irqFlagging)&&this.irq.requestIRQ(1024)},GameBoyAdvanceDMA2.prototype.finalDMAAddresses=function(t,e,o){switch(t|=0,e|=0,o|=0,0|this.sourceControl){case 0:case 3:this.sourceShadow=(0|t)+(0|o)|0;break;case 1:this.sourceShadow=(0|t)-(0|o)|0}switch(0|this.destinationControl){case 0:this.destinationShadow=(0|e)+(0|o)|0;break;case 1:this.destinationShadow=(0|e)-(0|o)|0;break;case 3:this.destinationShadow=0|this.destination}},GameBoyAdvanceDMA2.prototype.incrementDMAAddresses=function(t,e,o){switch(t|=0,e|=0,o|=0,0|this.sourceControl){case 0:case 3:this.sourceShadow=(0|t)+(0|o)|0;break;case 1:this.sourceShadow=(0|t)-(0|o)|0}switch(0|this.destinationControl){case 0:case 3:this.destinationShadow=(0|e)+(0|o)|0;break;case 1:this.destinationShadow=(0|e)-(0|o)|0}},GameBoyAdvanceDMA2.prototype.nextEventTime=function(){var t=2147483647;switch(0|this.enabled){case 2:t=0|this.gfxState.nextVBlankEventTime();break;case 4:t=0|this.gfxState.nextHBlankDMAEventTime();break;case 16:t=0|this.sound.nextFIFOBEventTime()}return 0|t};
//# sourceMappingURL=build-index.94a17ba5.js.map
