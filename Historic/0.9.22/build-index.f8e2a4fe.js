var mixedGameData={};Object.entries(FIRE_RED_WARPS).forEach((e=>mixedGameData[e[0]]=e[1])),Object.entries(CRYSTAL_WARPS).forEach((e=>mixedGameData[e[0]]=e[1])),Object.entries(EMERALD_WARPS).forEach((e=>mixedGameData[e[0]]=e[1]));var remappingsData={},isHeadless=!0,warpList=new Map;function getMapData(){return mixedGameData}function getRandomisationAlgorithm(){return generateRandomMappings}function getRandomisationConfig(){let e={};return e.kantoLevel=document.getElementById("kantoLevel").value,e.johtoLevel=document.getElementById("johtoLevel").value,e.hoennLevel=document.getElementById("hoennLevel").value,e}function getFlagData(){return FLAG_DATA}function mappingToWarps(e){let t=new Map;return e.forEach((e=>{let a=e.trigger,n=e.target.split(",");t.set(a,new PKWarp(a,n[0],n[1],n[2],n[3],e.source))})),t}async function mapWarps(e){flagsState={},unaddedConditionalEdges={};let t=getRandomisationConfig(),a=getFilteredData(),n=getFlagData();remappingsData=getRandomisationAlgorithm().apply(null,[e,a,n,t]),warpList=mappingToWarps(getAugmetedRemappingData(remappingsData)),updateHashDisplay(),"undefined"!=typeof storageManager&&storageManager.persist("RANDOM_MAPPING",new WarpListData(e,t,warpList))}function generateRandomMappings(e,t,a,n){let o=new RNG(getHash(e)),i=initMappingGraph(t,isHeadless,new ProgressionState(a,n));var s=getInitialWarp(n);i.unconnectedComponents=i.unconnectedComponents.filter((e=>!e.includes(s)));for(var r=!0;r;)r=doNextMapping(o,s,i),i=updateProgressionState(i,s);return cy.add(new WarpNode(["C,1,1,0",getMapData()["C,1,1,0"]])),cy.add(new WarpNode(["E,1,3,0",getMapData()["E,1,3,0"]])),cy.add(new WarpNode(["FR,4,0,2",getMapData()["FR,4,0,2"]])),window.cy.add(new WarpEdge("C,1,1,0","FR,4,0,2")),window.cy.add(new WarpEdge("E,1,3,0","FR,4,0,2")),getBaseRemappingData()}function getInitialWarp(e){return e.kantoLevel>0?KEY_LOCATION_DATA["VIRIDIAN CITY"]:e.johtoLevel>0?KEY_LOCATION_DATA["NEW BARK TOWN"]:e.hoennLevel>0?KEY_LOCATION_DATA["LITTLEROOT TOWN"]:KEY_LOCATION_DATA["VIRIDIAN CITY"]}function filterIgnored(e){return new Map([...e].filter((e=>!e[1].ignore)))}function filterByConfig(e,t){return e=new Map([...e].filter((a=>{let n=null;return"E"==a[0][0]?n=t.hoennLevel:"F"==a[0][0]?n=t.kantoLevel:"C"==a[0][0]&&(n=t.johtoLevel),e.get(a[0]).level&&+e.get(a[0]).level<=+n})))}function filteGroupedNotMain(e){return new Map([...e].filter((e=>e[1].groupMain||!e[1].grouped)))}function toMapBank(e){let t=e.split(",");return t[0]+","+t[1]+","+t[2]}function ProgressionState(e,t){this.remainingConditionalEdges=new Set,this.flags=new Set,this.flagData=e,this.config=t,this.unmarkedLocations=new Map(Object.entries(e.LOCATIONS_TRIGGER)),this.unmarkedFlags=new Map(Object.entries(e.COMPOSITE_FLAGS)),this.unmarkedKeyLocations=new Map(Object.entries(e.KEY_LOCATIONS))}function WarpListData(e,t,a){this.warpList=Array.from(a.entries()),this.seed=e,this.config=t}function exportMapping(){storageManager.find("RANDOM_MAPPING").then((e=>{let t=JSON.stringify(e),a=new File([t],"WarpMapping.json",{type:"application/json;charset=utf-8"});saveAs(a)}))}function importMapping(){let e=this.files[0],t=new FileReader;t.readAsText(e,"UTF-8"),t.onload=e=>{let t=e.target.result,a=JSON.parse(t);updateWarpListData(a),storageManager.persist("RANDOM_MAPPING",a)}}function updateWarpListData(e){document.getElementById("input_seed_text").value=e.seed,document.getElementById("kantoLevel").value=e.config.kantoLevel,document.getElementById("johtoLevel").value=e.config.johtoLevel||e.config.jhotoLevel,document.getElementById("hoennLevel").value=e.config.hoennLevel,M.FormSelect.getInstance(document.getElementById("kantoLevel"))._handleSelectChangeBound(),M.FormSelect.getInstance(document.getElementById("johtoLevel"))._handleSelectChangeBound(),M.FormSelect.getInstance(document.getElementById("hoennLevel"))._handleSelectChangeBound(),warpList=new Map(e.warpList),updateHashDisplay()}function updateHashDisplay(){document.getElementById("hashText").innerHTML="CHECK: "+Math.abs(getHash(JSON.stringify(Array.from(warpList)))).toString(16).toUpperCase()}function PKWarp(e,t,a,n,o,i){this.trigger=e,this.toRomCode=t,this.toBank=a,this.toMap=n,this.toWarpNo=o,this.source=i}function getHash(e){for(var t=0,a=e.length,n=0;n<a;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return t}function RNG(e){this.m=2147483648,this.a=1103515245,this.c=12345,this.state=e||Math.floor(Math.random()*(this.m-1))}function ReigonNode(e){this.data={},this.data.id=e,this.classes="reigon"}function AreaNode(e){this.data={},this.data.id=toMapBank(e[0]),this.data.parent=toReigon(e[0]),this.data.label=e[0]+" ("+e[1].name.split("-")[0]+"- "+e[1].name.split("-")[1].trim()+")"}function WarpNode(e){this.data={},this.data.id=e[0],this.data.parent=toMapBank(e[0]),this.data.label=e[1].name?e[0]+e[1].name.split("-")[2]:e[0]+" (Unnamed)",this.classes="outline",this.data.isWarp=!0,this.data.isMapped=!1,this.data.hasMultipleConnections=!!e[1].connections&&Object.values(e[1].connections).filter((e=>1==e)).length>0}function FixedEdge(e,t){this.data={},this.data.id=e+"->"+t,this.data.source=e,this.data.target=t,this.classes="fixed"}function CondidtionalEdge(e,t,a){this.data={},this.data.id=e+"->"+t,this.data.source=e,this.data.target=t,this.classes="conditional",this.condition=a}function WarpEdge(e,t,a){this.data={},this.data.id=e+"->"+t+"#"+window.cy.getElementById(e+"->"+t).length,this.data.source=e,this.data.target=t,this.data.isWarp=!0,this.classes="warp"}function getAugmetedRemappingData(e){return e=addTriggerData(e=addGroupedMappings(e))}function addGroupedMappings(e){let t=[];return e.forEach((e=>{let a=getMapData()[e.source].grouped;a&&a.forEach((a=>{t.push({source:a,target:e.target})}))})),[...e,...t]}function addTriggerData(e){return e.map((e=>(e.trigger=getMapData()[e.source].to,e)))}function getBaseRemappingData(){return cy.edges().filter((e=>e.data().isWarp)).map((e=>({source:e.data().source,target:e.data().target})))}function getFilteredData(){let e=new Map(Object.entries(getMapData()));return e=filterIgnored(e),e=filteGroupedNotMain(e),e=filterByConfig(e,getRandomisationConfig()),e}function toReigon(e){switch(e[0]){case"F":return"KANTO";case"C":return"JOHTO";case"E":return"HOENN"}}function findAccessibleUnmappedNodes(e,t){let a=new Set;return e.elements().bfs({roots:e.getElementById(t),directed:!0,visit:(e,t,n,o,i)=>{e.data().isMapped||a.add(e)}}),a}function doNextMapping(e,t,a){let n=a.cachedNodes?a.cachedNodes:findAccessibleUnmappedNodes(window.cy,t),o=cy.nodes().not(n).filter((e=>e.data().isWarp&&!e.data().isMapped)),i=o.filter((e=>a.unmarkedLocations.has(e.data().id))),s=o.filter((e=>a.unmarkedLocations.has(e.data().id)));if(0==n.size&&0==o.length)return!1;let r=[...n][e.nextRange(0,n.size-1)];n.delete(r);let d=null,c=!1,l=o.filter((e=>e.degree(!0)>0));if(a.unconnectedComponents.length>0){let t=a.unconnectedComponents[e.nextRange(0,a.unconnectedComponents.length-1)],n=t[e.nextRange(0,t.length-1)];d=cy.getElementById(n),a.unconnectedComponents=a.unconnectedComponents.filter((e=>e!=t))}else i.length>0?d=i[e.nextRange(0,i.length-1)]:l.length>0?(o=o.filter((e=>e.degree(!0)>0)),d=o[e.nextRange(0,o.length-1)]):s.length>0?(d=s[e.nextRange(0,s.length-1)],c=!0,n.delete(d)):o.length>0?(d=o[e.nextRange(0,o.length-1)],c=!0,n.delete(d)):n.size>0?(d=[...n][e.nextRange(0,n.size-1)],c=!0,n.delete(d)):(d=cy.add(new WarpNode(["FR,1,122,0",getMapData()["FR,1,122,0"]])),c=!0,n.delete(d));if(c&&!a.cachedNodes&&(a.cachedNodes=n),!r){if(0!=n.size?(console.log("Some accessible nodes were left:"),n.forEach((e=>{console.log(e.data().id)}))):console.log("All accesible nodes mapped"),0!=o.size)return console.log("Some inaccessible nodes were left:"),o.forEach((e=>{console.log(e.data().id)})),d.data().isMapped=!0,!1;console.log("All inaccesible nodes mapped")}return window.cy.add(new WarpEdge(r.data().id,d.data().id)),r!=d&&window.cy.add(new WarpEdge(d.data().id,r.data().id)),r.data().isMapped=!0,d.data().isMapped=!0,!0}function updateProgressionState(e,t){let a=new Set;cy.elements().bfs({roots:cy.getElementById(t),directed:!0,visit:(e,t,n,o,i)=>{a.add(e.data().id)}}),e.unmarkedLocations.forEach(((t,n)=>{a.has(n)&&(e.unmarkedLocations.delete(n),e.flags.add(t))})),e.unmarkedFlags.forEach((t=>{t.condition.every((t=>e.flags.has(t)))&&(e.flags.add(t.flag),e.unmarkedFlags.delete(t.flag))}));let n=e.remainingConditionalEdges;return n.forEach((t=>{e.flags.has(t.condition)&&(cy.getElementById(t.data.target).length>0&&cy.getElementById(t.data.source).length>0&&cy.add(t),n.delete(t))})),e}function initMappingGraph(e,t,a){var n=window.cy=cytoscape({container:t?null:document.getElementById("cy"),headless:t,styleEnabled:!t,boxSelectionEnabled:!1,textureOnViewport:!0,style:[{selector:"node",css:{content:"data(id)","text-valign":"center","text-halign":"center"}},{selector:":parent",css:{"text-valign":"top","text-halign":"center"},style:{shape:"roundrectangle"}},{selector:"edge",css:{"curve-style":"bezier","target-arrow-shape":"triangle"}},{selector:"node[label]",style:{label:"data(label)","text-valign":"bottom","text-halign":"center"}},{selector:".reigon",css:{"background-color":"#2f3138",color:"#C0C0C0","font-size":"5em","text-valign":"top"}},{selector:".map-F",css:{"background-color":"#ffc0c3",color:"#C0C0C0","font-size":"2em"}},{selector:".map-C",css:{"background-color":"#c0c3ff",color:"#C0C0C0","font-size":"2em"}},{selector:".map-E",css:{"background-color":"#c3ffc0",color:"#C0C0C0","font-size":"2em"}},{selector:".warp",css:{"line-color":"#f92411","curve-style":"straight-triangle"}},{selector:".conditional",css:{"line-color":"#1911f9"}},{selector:".fixed",css:{opacity:"0.5"}}],elements:{nodes:[],edges:[]}});n.add(new ReigonNode("KANTO")),n.add(new ReigonNode("JOHTO")),n.add(new ReigonNode("HOENN"));let o=[...e];return o.forEach((e=>{n.getElementById(toMapBank(e[0])).length||n.add(new AreaNode(e)).addClass("map-"+e[0][0]),n.add(new WarpNode(e))})),o.forEach((e=>{let t=e[1].connections?e[1].connections:{};Object.entries(t).forEach((t=>{"string"==typeof t[1]?(a.remainingConditionalEdges.add(new CondidtionalEdge(e[0],t[0],t[1])),n.getElementById(t[0]).length>0&&n.add(new CondidtionalEdge(e[0],t[0],t[1]))):n.getElementById(t[0]).length>0&&n.add(new FixedEdge(e[0],t[0]))}))})),a.unconnectedComponents=n.elements().components().filter((e=>e.size()>1)).map((e=>e.toArray().filter((e=>"nodes"==e.group()&&e.data().isWarp&&e.data().hasMultipleConnections)).map((e=>e.data().id)))).filter((e=>e.length>0)),a.remainingConditionalEdges.forEach((e=>n.getElementById(e.data.id).remove())),n.nodes().forEach((function(e){e.css("width",80),e.css("height",80)})),t||n.layout({name:"cose-bilkent",animationDuration:1e3,nodeDimensionsIncludeLabels:!0}).run(),a.makeFinalLocationsKey(),a}function getHint(e){let t=new Map(Object.entries(getMapData())),a=warpList.get(t.get(e).to);if(!a)return"NOT PRESENT";let n=t.get(a.toRomCode+","+a.toBank+","+a.toMap+","+a.toWarpNo).name;return("E"==a.toRomCode?"HOENN - ":"C"==a.toRomCode?"JOHTO - ":"KANTO - ")+n.split("-")[0].trim()+" - "+n.split("-")[1].trim()}ProgressionState.prototype.makeFinalLocationsKey=function(e){let t=[];switch(this.config.kantoLevel){case"1":t.push(HINTABLE_LOCATIONS.BROCK);break;case"2":t.push(HINTABLE_LOCATIONS.MISTY);break;case"3":t.push(HINTABLE_LOCATIONS["LT SURGE"]);break;case"4":t.push(HINTABLE_LOCATIONS.ERIKA);break;case"5":t.push(HINTABLE_LOCATIONS.KOGA);break;case"6":t.push(HINTABLE_LOCATIONS.SABRIBA);break;case"7":t.push(HINTABLE_LOCATIONS.BLAINE);break;case"8":t.push(HINTABLE_LOCATIONS.GIOVANNI)}switch(this.config.johtoLevel){case"1":t.push(HINTABLE_LOCATIONS.FALKNER);break;case"2":t.push(HINTABLE_LOCATIONS.BUGSY);break;case"3":t.push(HINTABLE_LOCATIONS.WHITNEY);break;case"4":t.push(HINTABLE_LOCATIONS.MORTY);break;case"5":t.push(HINTABLE_LOCATIONS.CHUCK);break;case"6":t.push(HINTABLE_LOCATIONS.JASMINE);break;case"7":t.push(HINTABLE_LOCATIONS.PRYCE);break;case"8":t.push(HINTABLE_LOCATIONS.CLAIR)}switch(this.config.hoennLevel){case"1":t.push(HINTABLE_LOCATIONS.ROXANNE);break;case"2":t.push(HINTABLE_LOCATIONS.BRAWLY);break;case"3":t.push(HINTABLE_LOCATIONS.WATTSON);break;case"4":t.push(HINTABLE_LOCATIONS.FLANNERY);break;case"5":t.push(HINTABLE_LOCATIONS.NORMAN);break;case"6":t.push(HINTABLE_LOCATIONS.WINONA);break;case"7":t.push(HINTABLE_LOCATIONS["TATE AND LIZA"]);break;case"8":t.push(HINTABLE_LOCATIONS.JUAN)}t.forEach((e=>{this.unmarkedLocations.has(e)&&(this.unmarkedKeyLocations.set(e,this.unmarkedLocations.get(e)),this.unmarkedLocations.delete(e))}))},RNG.prototype.nextInt=function(){return this.state=(this.a*this.state+this.c)%this.m,this.state},RNG.prototype.nextFloat=function(){return this.nextInt()/(this.m-1)},RNG.prototype.nextRange=function(e,t){var a=t-e,n=this.nextInt()/this.m;return Math.abs(e+Math.floor(n*a))},RNG.prototype.choice=function(e){return e[this.nextRange(0,e.length)]};var HINTABLE_LOCATIONS={BROCK:"FR,6,2,1",MISTY:"FR,7,5,1","LT SURGE":"FR,9,6,1",ERIKA:"FR,10,16,1",KOGA:"FR,11,3,1",SABRINA:"FR,14,3,1",BLAINE:"FR,12,0,1",GIOVANNI:"FR,5,1,1","E4 LORELEI":"FR,1,75,0","E4 BRUNO (FR)":"FR,1,76,0","E4 AGATHA":"FR,1,77,0","E4 LANCE":"FR,1,78,0","CHAMPION RIVAL":"FR,1,79,0",FALKNER:"C,8,1,0",BUGSY:"C,3,3,0",WHITNEY:"C,11,3,0",MORTY:"C,12,1,0",CHUCK:"C,4,1,0",JASMINE:"C,10,0,0",PRYCE:"C,14,0,0",CLAIR:"C,15,0,0","E4 WILL":"C,16,0,0","E4 KOGA":"C,16,1,0","E4 BRUNO (C)":"C,16,2,0","E4 KAREN":"C,16,3,0","CHAMPION LANCE":"C,16,4,0",ROXANNE:"E,11,3,0",BRAWLY:"E,3,3,0",WATTSON:"E,10,0,0",FLANNERY:"E,4,1,0",NORMAN:"E,8,1,0",WINONA:"E,12,1,0","TATE AND LIZA":"E,14,0,0",JUAN:"E,15,0,0","E4 SIDNEY":"E,16,0,0","E4 PHOEBE":"E,16,1,0","E4 GLACIA":"E,16,2,0","E4 DRAKE":"E,16,3,0","CHAMPION WALLACE":"E,16,4,0",STEVEN:"E,24,107,0"};
//# sourceMappingURL=build-index.f8e2a4fe.js.map
