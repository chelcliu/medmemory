const modules = [
{id:"glycolysis",title:"Glycolysis",system:"Biochemistry",icon:"🍬",desc:"Master all 10 steps, enzymes, regulation, energy accounting, and anaerobic fate.",kind:"pathway",
nodes:["Glucose","Glucose-6-P","Fructose-6-P","Fructose-1,6-BP","DHAP + G3P","1,3-BPG","3-PG","2-PG","PEP","Pyruvate"],
enzymes:["Hexokinase / glucokinase","Phosphoglucose isomerase","PFK-1","Aldolase","Triose phosphate isomerase","G3P dehydrogenase","Phosphoglycerate kinase","Phosphoglycerate mutase","Enolase","Pyruvate kinase"],
facts:[
["Energy investment","2 ATP are consumed: hexokinase/glucokinase and PFK-1."],
["Energy payoff","4 ATP and 2 NADH are generated per glucose → net 2 ATP + 2 NADH."],
["Rate-limiting step","PFK-1 catalyzes the committed, rate-limiting step and is activated by AMP and fructose-2,6-BP."],
["Irreversible steps","Hexokinase/glucokinase, PFK-1, and pyruvate kinase."],
["Anaerobic","Pyruvate → lactate via lactate dehydrogenase, regenerating NAD+."],
["Location","Cytosol; does not directly require oxygen."]],
questions:[
["What is the net ATP yield of glycolysis per glucose? ",["1","2","4","6"],1,"Two ATP are invested and four are produced → net 2 ATP."],
["Which enzyme is the major rate-limiting enzyme of glycolysis?",["Hexokinase","PFK-1","Aldolase","Enolase"],1,"PFK-1 controls the committed step and is a major regulatory point."],
["Why does lactate formation allow glycolysis to continue anaerobically?",["It produces oxygen","It regenerates NAD+","It produces FADH2","It activates PFK-1"],1,"Lactate dehydrogenase oxidizes NADH to NAD+, allowing G3P dehydrogenase to continue."]]},
{id:"tca",title:"Krebs / TCA Cycle",system:"Biochemistry",icon:"🔄",desc:"Reconstruct the cycle and track every carbon, NADH, FADH2, GTP, and CO2.",kind:"pathway",
nodes:["Acetyl-CoA + OAA","Citrate","Isocitrate","α-Ketoglutarate","Succinyl-CoA","Succinate","Fumarate","Malate","Oxaloacetate"],
enzymes:["Citrate synthase","Aconitase","Isocitrate dehydrogenase","α-Ketoglutarate dehydrogenase","Succinyl-CoA synthetase","Succinate dehydrogenase","Fumarase","Malate dehydrogenase"],
facts:[
["Per acetyl-CoA","3 NADH + 1 FADH2 + 1 GTP + 2 CO2."],
["Location","Mitochondrial matrix, except succinate dehydrogenase, which is embedded in the inner mitochondrial membrane."],
["Major regulation","Citrate synthase, isocitrate dehydrogenase, and α-ketoglutarate dehydrogenase are key control points."],
["Carbon logic","Two carbons enter as acetyl-CoA; two CO2 are released during one turn, though the incoming acetyl carbons are not the carbons immediately lost."],
["ETC connection","NADH and FADH2 carry electrons to the electron transport chain."]],
questions:[
["How many NADH are produced per turn of the TCA cycle?",["1","2","3","4"],2,"Three NADH are generated per acetyl-CoA."],
["Which TCA enzyme is also ETC Complex II?",["Citrate synthase","Succinate dehydrogenase","Fumarase","Malate dehydrogenase"],1,"Succinate dehydrogenase performs both TCA and Complex II functions."],
["What directly supplies the TCA cycle's two-carbon input?",["Pyruvate","Lactate","Acetyl-CoA","Oxaloacetate"],2,"Acetyl-CoA combines with oxaloacetate to form citrate."]]},
{id:"etc",title:"ETC + Oxidative Phosphorylation",system:"Biochemistry",icon:"⚡",desc:"Track electron flow, proton pumping, oxygen reduction, and ATP synthase.",kind:"chain",
nodes:["NADH/FADH2","Complex I / II","CoQ","Complex III","Cytochrome c","Complex IV","O2 → H2O","H+ gradient","ATP synthase → ATP"],
enzymes:["NADH dehydrogenase","Succinate dehydrogenase","Coenzyme Q","Cytochrome bc1","Cytochrome c","Cytochrome c oxidase","Terminal electron acceptor","Proton-motive force","F0F1 ATP synthase"],
facts:[
["Electron flow","NADH enters at Complex I; FADH2 enters at Complex II."],
["Proton pumping","Complexes I, III, and IV pump protons across the inner mitochondrial membrane."],
["Oxygen","O2 is the terminal electron acceptor at Complex IV and is reduced to water."],
["ATP synthase","Protons flow back through ATP synthase, driving phosphorylation of ADP."],
["Location","Inner mitochondrial membrane; proton gradient is across this membrane."]],
questions:[
["Which complex receives electrons from FADH2?",["I","II","III","IV"],1,"Complex II (succinate dehydrogenase) accepts electrons from FADH2."],
["What is the terminal electron acceptor?",["CO2","NAD+","O2","H2O"],2,"Oxygen accepts electrons at Complex IV and becomes water."],
["Which complexes pump protons?",["I, II, III","I, III, IV","II, III, IV","I, II, IV"],1,"Complexes I, III, and IV pump H+."]]},
{id:"nucleic",title:"Nucleic Acids",system:"Molecular Biology",icon:"🧬",desc:"Master DNA/RNA structure, bases, replication, transcription, translation, and core lab techniques.",kind:"chain",
nodes:["DNA bases","Replication","Transcription","RNA processing","Translation","Protein"],
enzymes:["A/T/G/C","DNA polymerase + helicase","RNA polymerase","5′ cap + poly-A + splicing","Ribosome","Peptide bond formation"],
facts:[
["Purines","Adenine and guanine are purines: think two-ring bases."],
["Pyrimidines","Cytosine, thymine, and uracil are pyrimidines: one-ring bases."],
["Base pairing","DNA A–T and G–C; RNA uses U instead of T."],
["Replication","DNA polymerase synthesizes 5′→3′; leading strand is continuous, lagging strand uses Okazaki fragments."],
["Transcription","RNA polymerase makes RNA from a DNA template; promoter recognition precedes transcription."],
["Translation","Ribosomes read mRNA 5′→3′; tRNAs bring amino acids; protein grows N-terminus → C-terminus."]],
questions:[
["Which pair contains only purines?",["C and T","A and G","A and C","G and T"],1,"Adenine and guanine are the two purines."],
["In which direction does DNA polymerase synthesize new DNA?",["3′→5′","5′→3′","Both equally","It varies"],1,"New nucleotides are added to the 3′ OH, so synthesis proceeds 5′→3′."],
["Which process converts a DNA template into RNA?",["Translation","Replication","Transcription","Splicing"],2,"Transcription produces RNA from a DNA template."]]},
{id:"proteins",title:"Protein Structure & Enzymes",system:"Biochemistry",icon:"🧱",desc:"Connect amino-acid chemistry to primary, secondary, tertiary, quaternary structure and kinetics.",kind:"chain",
nodes:["Amino acids","Primary","Secondary","Tertiary","Quaternary","Function"],
enzymes:["Peptide bonds","H-bonds in backbone","α-helices / β-sheets","Side-chain interactions","Subunit interactions","Active site"],
facts:[
["Primary structure","Amino-acid sequence linked by peptide bonds."],
["Secondary structure","α-helices and β-sheets stabilized mainly by backbone hydrogen bonds."],
["Tertiary structure","Overall 3D fold from side-chain interactions including hydrophobic interactions, ionic interactions, H-bonds, and disulfides."],
["Quaternary structure","Association of multiple polypeptide subunits."],
["Denaturation","Can disrupt higher-order structure and function without necessarily breaking peptide bonds."]],
questions:[
["Which interaction is especially important for α-helix stabilization?",["Backbone hydrogen bonds","Peptide bonds between side chains","DNA base pairing","Phosphodiester bonds"],0,"Backbone hydrogen bonds stabilize α-helices and β-sheets."],
["Which level describes the amino-acid sequence?",["Primary","Secondary","Tertiary","Quaternary"],0,"Primary structure is the linear amino-acid sequence."]]},
{id:"genetics",title:"Genetics & Gene Expression",system:"Molecular Biology",icon:"🧫",desc:"Build the central dogma and connect mutations, inheritance, PCR, and gene regulation.",kind:"chain",
nodes:["DNA","mRNA","Ribosome","Polypeptide","Phenotype"],
enzymes:["Template","RNA polymerase","rRNA + proteins","tRNA + amino acids","Cellular function"],
facts:[
["Central dogma","DNA information can be transcribed into RNA, which can be translated into protein."],
["PCR","Denaturation separates DNA strands; annealing lets primers bind; extension uses DNA polymerase."],
["Mutations","Silent changes may not alter amino acid; missense changes one amino acid; nonsense creates a stop codon; frameshift changes the reading frame."],
["Operons","Prokaryotic gene regulation can coordinate transcription of related genes."],
["Eukaryotic RNA processing","Pre-mRNA can undergo 5′ capping, polyadenylation, and intron removal."]],
questions:[
["During PCR, which step allows primers to bind?",["Denaturation","Annealing","Extension","Translation"],1,"Annealing is the primer-binding step."],
["A mutation that changes a codon into a premature stop is:",["Silent","Missense","Nonsense","Frameshift"],2,"A nonsense mutation creates a stop codon."],
["Which enzyme synthesizes RNA during transcription?",["DNA polymerase","RNA polymerase","Ligase","Helicase"],1,"RNA polymerase builds the RNA transcript."]]},
{id:"carbs",title:"Carbohydrates & Metabolism",system:"Biochemistry",icon:"🍞",desc:"Connect glycogen, gluconeogenesis, PPP, and fed/fasted metabolic states.",kind:"chain",
nodes:["Fed state","Glycogenesis","Fasting","Glycogenolysis","Gluconeogenesis","PPP"],
enzymes:["Insulin","Glycogen synthase","Glucagon","Glycogen phosphorylase","PEPCK etc.","G6PD"],
facts:[
["Insulin","Promotes glucose uptake in insulin-sensitive tissues and storage pathways such as glycogenesis."],
["Glucagon","Signals fasting and promotes hepatic glycogenolysis and gluconeogenesis."],
["Gluconeogenesis","Makes glucose from non-carbohydrate precursors; liver is a major site."],
["PPP oxidative phase","Generates NADPH and ribose-5-phosphate; G6PD is a key enzyme."],
["NADPH","Supports reductive biosynthesis and antioxidant defenses such as maintaining reduced glutathione."]],
questions:[
["Which pathway generates NADPH and ribose-5-phosphate?",["Glycolysis","TCA cycle","Pentose phosphate pathway","ETC"],2,"The pentose phosphate pathway supplies NADPH and ribose-5-phosphate."],
["Which hormone generally dominates the fed state?",["Glucagon","Insulin","Epinephrine","Cortisol"],1,"Insulin promotes storage and anabolic metabolism after meals."]]}
];

let current=null, mode=null, qIndex=0, score=0, total=0, activeTab="All";
const mastery=JSON.parse(localStorage.getItem("medmemoryMastery")||"{}");
const xp=Number(localStorage.getItem("medmemoryXP")||0);

function save(){localStorage.setItem("medmemoryMastery",JSON.stringify(mastery));localStorage.setItem("medmemoryXP",String(xp+window._sessionXP||xp))}
function renderTabs(){
 const systems=["All",...new Set(modules.map(m=>m.system))];
 document.getElementById("tabs").innerHTML=systems.map(s=>`<button class="tab ${s===activeTab?"active":""}" onclick="setTab('${s}')">${s}</button>`).join("");
}
function renderModules(list=modules){
 document.getElementById("moduleGrid").innerHTML=list.filter(m=>activeTab==="All"||m.system===activeTab).map(m=>`
 <div class="module-card" onclick="openModule('${m.id}')"><div class="module-icon">${m.icon}</div><span class="tag">${m.system}</span>
 <h3>${m.title}</h3><p>${m.desc}</p><small>${mastery[m.id]||0}% mastered →</small></div>`).join("");
}
function setTab(s){activeTab=s;renderTabs();filterModules()}
function filterModules(){const q=document.getElementById("search").value.toLowerCase();renderModules(modules.filter(m=>(m.title+" "+m.system+" "+m.desc+" "+m.facts.flat().join(" ")).toLowerCase().includes(q)))}
function openModule(id){
 current=modules.find(m=>m.id===id);document.getElementById("moduleTag").textContent=current.system.toUpperCase();document.getElementById("moduleTitle").textContent=current.title;document.getElementById("moduleDesc").textContent=current.desc;updateMastery();
 document.getElementById("library").classList.add("hidden");document.getElementById("moduleView").classList.remove("hidden");document.getElementById("activity").classList.add("hidden");document.getElementById("moduleView").scrollIntoView({behavior:"smooth"});
}
function updateMastery(){let v=mastery[current.id]||0;document.getElementById("masteryValue").textContent=v+"%";document.getElementById("masteryBar").style.width=v+"%";document.getElementById("heroProgress").style.width=Math.max(5,v)+"%";document.getElementById("heroProgressText").textContent=v+"% mastered";updateStats()}
function updateStats(){let vals=Object.values(mastery);document.getElementById("modulesDone").textContent=vals.filter(v=>v>=80).length;document.getElementById("recallScore").textContent=(vals.length?Math.round(vals.reduce((a,b)=>a+b,0)/vals.length):0)+"%";document.getElementById("xp").textContent=window._sessionXP||0}
function closeModule(){document.getElementById("moduleView").classList.add("hidden");document.getElementById("library").classList.remove("hidden");document.getElementById("activity").classList.add("hidden");document.getElementById("library").scrollIntoView({behavior:"smooth"});renderModules()}
function backToModes(){document.getElementById("activity").classList.add("hidden");document.getElementById("moduleView").classList.remove("hidden");document.getElementById("moduleView").scrollIntoView({behavior:"smooth"})}
function startMode(which){
 mode=which;qIndex=0;score=0;total=0;document.getElementById("moduleView").classList.add("hidden");document.getElementById("activity").classList.remove("hidden");document.getElementById("activityLabel").textContent=current.title+" · "+which.replace(/^\w/,c=>c.toUpperCase());renderActivity();document.getElementById("activity").scrollIntoView({behavior:"smooth"});
}
function renderActivity(){
 const c=document.getElementById("activityContent");
 if(mode==="learn") return renderLearn(c);
 if(mode==="pathway") return renderPathway(c);
 if(mode==="sort") return renderSort(c);
 if(mode==="recall") return renderRecall(c);
 if(mode==="quiz") return renderQuestion(c);
 if(mode==="speed") return renderQuestion(c,true);
}
function card(inner){return `<div class="activity-card">${inner}</div>`}
function renderLearn(c){
 c.innerHTML=card(`<p class="eyebrow">BUILD THE MAP</p><h3>${current.title}: the high-yield mental model</h3>
 <div class="memory-map">${current.nodes.map((n,i)=>`<div class="memory-node"><b>${i+1}. ${n}</b><small>${current.enzymes[i]||"Key concept"}</small></div>`).join("")}</div>
 <div class="reveal"><b>What you should be able to recall cold:</b><div class="fact-list">${current.facts.map(f=>`<div class="fact"><b>${f[0]}</b><br>${f[1]}</div>`).join("")}</div></div>
 <button class="primary" style="margin-top:20px" onclick="startMode('pathway')">Now reconstruct it →</button>`);
}
function renderPathway(c){
 const nodes=[...current.nodes]; const shuffled=[...nodes].sort(()=>Math.random()-.5);
 c.innerHTML=card(`<p class="eyebrow">RETRIEVAL CHALLENGE</p><h3>Build ${current.title} in the correct order</h3>
 <p>Click the next correct concept. No peeking.</p><div class="pathway" id="pathSlots">${nodes.map((_,i)=>`<div class="slot" id="slot${i}">${i+1}</div>${i<nodes.length-1?'<span class="arrow">→</span>':''}`).join("")}</div>
 <div class="choice-grid" id="pathChoices">${shuffled.map(n=>`<button class="choice" onclick="pickPath('${encodeURIComponent(n)}',this)">${n}</button>`).join("")}</div>
 <div id="pathFeedback"></div>`);
 window.pathStep=0;
}
function pickPath(encoded,btn){
 const val=decodeURIComponent(encoded), expected=current.nodes[window.pathStep];
 if(val===expected){btn.classList.add("correct");btn.disabled=true;document.getElementById("slot"+window.pathStep).textContent=val;document.getElementById("slot"+window.pathStep).classList.add("filled");window.pathStep++;score++;total++;document.getElementById("activityScore").textContent=`${score}/${total}`; if(window.pathStep===current.nodes.length){finishMode("Pathway reconstructed!");}}
 else{btn.classList.add("wrong");total++;document.getElementById("activityScore").textContent=`${score}/${total}`;document.getElementById("pathFeedback").innerHTML=`<div class="feedback">Not yet. Think about what comes <b>after ${window.pathStep?current.nodes[window.pathStep-1]:"the starting point"}</b>.</div>`;}
}
function renderSort(c){
 const facts=current.facts;window.sortItems=[...facts.map(f=>({text:f[0],type:"Core fact"})),...current.enzymes.slice(0,Math.min(5,current.enzymes.length)).map(e=>({text:e,type:"Enzyme/process"}))].sort(()=>Math.random()-.5);
 window.sortIndex=0;
 c.innerHTML=card(`<p class="eyebrow">CATEGORIZE</p><h3>What kind of information is this?</h3><p>Classify each item as <b>Core fact</b> or <b>Enzyme/process</b>.</p><div id="sortPrompt"></div>`);
 renderSortPrompt();
}
function renderSortPrompt(){
 if(window.sortIndex>=window.sortItems.length)return finishMode("Facts sorted!");
 const item=window.sortItems[window.sortIndex];
 document.getElementById("sortPrompt").innerHTML=`<div class="reveal"><h3>${item.text}</h3></div><div class="choice-grid"><button class="choice" onclick="sortAnswer('Core fact')">Core fact</button><button class="choice" onclick="sortAnswer('Enzyme/process')">Enzyme / process</button></div><div id="sortFeedback"></div>`;
}
function sortAnswer(ans){
 const item=window.sortItems[window.sortIndex];total++;
 if(ans===item.type){score++;document.getElementById("sortFeedback").innerHTML=`<div class="feedback">Correct.</div>`;setTimeout(()=>{window.sortIndex++;renderSortPrompt()},450)}
 else document.getElementById("sortFeedback").innerHTML=`<div class="feedback">Not quite. This is <b>${item.type}</b>. Try to associate the label with what role the item plays.</div>`;
 document.getElementById("activityScore").textContent=`${score}/${total}`;
}
function renderRecall(c){
 c.innerHTML=card(`<p class="eyebrow">BLANK PAGE</p><h3>Can you explain ${current.title} without looking?</h3><p>Spend 60–90 seconds writing or saying the pathway from memory. Then reveal the checklist.</p>
 <textarea id="recallText" placeholder="Write everything you remember..."></textarea>
 <button class="primary" onclick="revealRecall()">Reveal checklist</button><div id="recallReveal"></div>`);
}
function revealRecall(){
 document.getElementById("recallReveal").innerHTML=`<div class="reveal"><h3>Checklist</h3><div class="fact-list">${current.facts.map(f=>`<div class="fact"><b>${f[0]}</b> — ${f[1]}</div>`).join("")}</div><button class="primary" style="margin-top:15px" onclick="finishMode('Free recall completed')">I checked my gaps →</button></div>`;
}
function renderQuestion(c,speed=false){
 if(qIndex>=current.questions.length){return finishMode("Challenge complete!")}
 const q=current.questions[qIndex];c.innerHTML=card(`<p class="eyebrow">${speed?"RAPID FIRE":"MCAT-STYLE RETRIEVAL"}</p><h3>${q[0]}</h3><div class="choice-grid">${q[1].map((o,i)=>`<button class="choice" onclick="answerQ(${i})">${o}</button>`).join("")}</div><div id="qFeedback"></div>`);
}
function answerQ(i){
 const q=current.questions[qIndex], buttons=[...document.querySelectorAll("#activityContent .choice")];total++;
 buttons.forEach((b,n)=>{b.disabled=true;if(n===q[2])b.classList.add("correct")});
 if(i===q[2]){score++;document.getElementById("qFeedback").innerHTML=`<div class="feedback">🎯 Correct. ${q[3]}</div>`}
 else{buttons[i].classList.add("wrong");document.getElementById("qFeedback").innerHTML=`<div class="feedback">Not quite. <b>Why:</b> ${q[3]}</div>`}
 document.getElementById("activityScore").textContent=`${score}/${total}`;
 setTimeout(()=>{qIndex++;renderActivity()},850);
}
function finishMode(message){
 const accuracy=total?Math.round(score/total*100):100;const old=mastery[current.id]||0;const gain=Math.max(5,Math.round(accuracy*.25));mastery[current.id]=Math.min(100,old+gain);window._sessionXP=(window._sessionXP||0)+Math.round(accuracy/10)+5;save();
 document.getElementById("activityScore").textContent=`${score}/${total}`;
 document.getElementById("activityContent").innerHTML=card(`<div style="text-align:center"><div style="font-size:50px">🎉</div><h3>${message}</h3><p>You scored <b>${accuracy}%</b> and earned <b>${Math.round(accuracy/10)+5} XP</b>.</p><p>Your ${current.title} mastery is now <b>${mastery[current.id]}%</b>.</p><button class="primary" onclick="backToModes()">Choose another mode</button></div>`);
 updateMastery();
}
function quickReview(){openModule(modules[Math.floor(Math.random()*modules.length)].id);setTimeout(()=>startMode("quiz"),250)}
window._sessionXP=0;renderTabs();renderModules();updateStats();
