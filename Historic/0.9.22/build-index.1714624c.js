"use strict";function Resampler(t,e,i,s){if(this.fromSampleRate=+t,this.toSampleRate=+e,this.channels=0|i,"object"!=typeof s)throw new Error("inputBuffer is not an object.");if(!(s instanceof Array||s instanceof Float32Array||s instanceof Float64Array))throw new Error("inputBuffer is not an array or a float32 or a float64 array.");this.inputBuffer=s,this.initialize()}Resampler.prototype.initialize=function(){if(!(this.fromSampleRate>0&&this.toSampleRate>0&&this.channels>0))throw new Error("Invalid settings specified for the resampler.");this.fromSampleRate==this.toSampleRate?(this.resampler=this.bypassResampler,this.ratioWeight=1,this.outputBuffer=this.inputBuffer):(this.ratioWeight=this.fromSampleRate/this.toSampleRate,this.fromSampleRate<this.toSampleRate?(this.compileLinearInterpolationFunction(),this.lastWeight=1):(this.compileMultiTapFunction(),this.tailExists=!1,this.lastWeight=0),this.initializeBuffers())},Resampler.prototype.compileLinearInterpolationFunction=function(){for(var t="var outputOffset = 0;    if (bufferLength > 0) {        var buffer = this.inputBuffer;        var weight = this.lastWeight;        var firstWeight = 0;        var secondWeight = 0;        var sourceOffset = 0;        var outputOffset = 0;        var outputBuffer = this.outputBuffer;        for (; weight < 1; weight += "+this.ratioWeight+") {            secondWeight = weight % 1;            firstWeight = 1 - secondWeight;",e=0;e<this.channels;++e)t+="outputBuffer[outputOffset++] = (this.lastOutput["+e+"] * firstWeight) + (buffer["+e+"] * secondWeight);";t+="}        weight -= 1;        for (bufferLength -= "+this.channels+", sourceOffset = Math.floor(weight) * "+this.channels+"; sourceOffset < bufferLength;) {            secondWeight = weight % 1;            firstWeight = 1 - secondWeight;";for(e=0;e<this.channels;++e)t+="outputBuffer[outputOffset++] = (buffer[sourceOffset"+(e>0?" + "+e:"")+"] * firstWeight) + (buffer[sourceOffset + "+(this.channels+e)+"] * secondWeight);";t+="weight += "+this.ratioWeight+";            sourceOffset = Math.floor(weight) * "+this.channels+";        }";for(e=0;e<this.channels;++e)t+="this.lastOutput["+e+"] = buffer[sourceOffset++];";t+="this.lastWeight = weight % 1;    }    return outputOffset;",this.resampler=Function("bufferLength",t)},Resampler.prototype.compileMultiTapFunction=function(){for(var t="var outputOffset = 0;    if (bufferLength > 0) {        var buffer = this.inputBuffer;        var weight = 0;",e=0;e<this.channels;++e)t+="var output"+e+" = 0;";for(t+="var actualPosition = 0;        var amountToNext = 0;        var alreadyProcessedTail = !this.tailExists;        this.tailExists = false;        var outputBuffer = this.outputBuffer;        var currentPosition = 0;        do {            if (alreadyProcessedTail) {                weight = "+this.ratioWeight+";",e=0;e<this.channels;++e)t+="output"+e+" = 0;";for(t+="}            else {                weight = this.lastWeight;",e=0;e<this.channels;++e)t+="output"+e+" = this.lastOutput["+e+"];";for(t+="alreadyProcessedTail = true;            }            while (weight > 0 && actualPosition < bufferLength) {                amountToNext = 1 + actualPosition - currentPosition;                if (weight >= amountToNext) {",e=0;e<this.channels;++e)t+="output"+e+" += buffer[actualPosition++] * amountToNext;";for(t+="currentPosition = actualPosition;                    weight -= amountToNext;                }                else {",e=0;e<this.channels;++e)t+="output"+e+" += buffer[actualPosition"+(e>0?" + "+e:"")+"] * weight;";for(t+="currentPosition += weight;                    weight = 0;                    break;                }            }            if (weight <= 0) {",e=0;e<this.channels;++e)t+="outputBuffer[outputOffset++] = output"+e+" / "+this.ratioWeight+";";for(t+="}            else {                this.lastWeight = weight;",e=0;e<this.channels;++e)t+="this.lastOutput["+e+"] = output"+e+";";t+="this.tailExists = true;                break;            }        } while (actualPosition < bufferLength);    }    return outputOffset;",this.resampler=Function("bufferLength",t)},Resampler.prototype.bypassResampler=function(t){return t},Resampler.prototype.initializeBuffers=function(){var t=Math.ceil(this.inputBuffer.length*this.toSampleRate/this.fromSampleRate/this.channels*1.0000004768371582)*this.channels+this.channels;try{this.outputBuffer=new Float32Array(t),this.lastOutput=new Float32Array(this.channels)}catch(t){this.outputBuffer=[],this.lastOutput=[]}};
//# sourceMappingURL=build-index.1714624c.js.map