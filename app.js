/* All records and ratings are fictional. This is a front-end presentation only. */
const players = [
  {id:'luca',name:'Luca Moretti',age:19,country:'Italy',flag:'it',club:'AC Verona',role:'Forward',position:'ST',number:19,portrait:0,current:76,potential:92,form:'7.8',goals:14,assists:5,minutes:'1,842',height:'183 cm',foot:'Right',traits:['Clinical finisher','Moves into channels','First-time shots'],attributes:[88,83,79,74,82,86],personality:'Driven & composed'},
  {id:'adam',name:'Adam Diarra',age:18,country:'France',flag:'fr',club:'Olympique Lille',role:'Midfielder',position:'CM',number:8,portrait:1,current:74,potential:91,form:'7.6',goals:6,assists:11,minutes:'1,706',height:'179 cm',foot:'Right',traits:['Dictates the tempo','Progressive passer','Press resistant'],attributes:[82,89,86,80,77,88],personality:'Ambitious & determined'},
  {id:'emir',name:'Emir Hadžić',age:20,country:'Bosnia & Herz.',flag:'ba',club:'FK Sarajevo City',role:'Forward',position:'LW',number:11,portrait:2,current:77,potential:89,form:'7.5',goals:10,assists:8,minutes:'1,925',height:'180 cm',foot:'Left',traits:['Cuts inside','Explosive acceleration','Flair on the ball'],attributes:[91,78,89,72,79,84],personality:'Creative & confident'},
  {id:'rafael',name:'Rafael Costa',age:18,country:'Brazil',flag:'br',club:'Atlético Santos',role:'Forward',position:'RW',number:7,portrait:3,current:72,potential:90,form:'7.4',goals:8,assists:9,minutes:'1,540',height:'176 cm',foot:'Left',traits:['Beats his marker','Runs with the ball','Inventive dribbler'],attributes:[92,77,91,69,74,85],personality:'Expressive & resilient'},
  {id:'oskar',name:'Oskar Lindberg',age:19,country:'Norway',flag:'no',club:'Bergen FK',role:'Defender',position:'CB',number:4,portrait:4,current:75,potential:88,form:'7.3',goals:2,assists:1,minutes:'2,030',height:'191 cm',foot:'Right',traits:['Aerial presence','Plays out of defence','Reads the game'],attributes:[76,81,68,91,89,85],personality:'Calm & professional'},
  {id:'ilyas',name:'Ilyas Benali',age:18,country:'Morocco',flag:'ma',club:'Rabat Athletic',role:'Midfielder',position:'CAM',number:10,portrait:5,current:73,potential:90,form:'7.5',goals:7,assists:12,minutes:'1,630',height:'178 cm',foot:'Right',traits:['Finds the final pass','Plays between the lines','Set-piece specialist'],attributes:[83,91,88,70,75,89],personality:'Imaginative & focused'},
  {id:'mateo',name:'Mateo Silva',age:20,country:'Portugal',flag:'pt',club:'SC Braga Norte',role:'Defender',position:'RB',number:2,portrait:0,current:76,potential:87,form:'7.2',goals:1,assists:7,minutes:'2,110',height:'181 cm',foot:'Right',traits:['Overlapping runs','Early crosses','Tireless work rate'],attributes:[87,80,77,82,83,81],personality:'Disciplined & reliable'},
  {id:'noah',name:'Noah Williams',age:19,country:'England',flag:'en',club:'Eastbridge United',role:'Defender',position:'CB',number:5,portrait:1,current:74,potential:88,form:'7.1',goals:3,assists:1,minutes:'1,980',height:'188 cm',foot:'Right',traits:['Strong in the tackle','Aerial presence','Organises the back line'],attributes:[79,75,68,88,90,83],personality:'Leader & team player'},
  {id:'david',name:'David Vuković',age:21,country:'Bosnia & Herz.',flag:'ba',club:'Mostar Athletic',role:'Goalkeeper',position:'GK',number:1,portrait:2,current:76,potential:86,form:'7.2',goals:0,assists:1,minutes:'2,160',height:'194 cm',foot:'Right',traits:['Quick reflexes','Commands his area','Long distribution'],attributes:[89,80,75,87,85,84],personality:'Composed & dependable'},
  {id:'gabriel',name:'Gabriel Alves',age:18,country:'Brazil',flag:'br',club:'Fluminense Sul',role:'Midfielder',position:'CDM',number:6,portrait:3,current:71,potential:89,form:'7.3',goals:2,assists:4,minutes:'1,470',height:'184 cm',foot:'Right',traits:['Wins the ball back','Simple distribution','Covers the defence'],attributes:[78,85,79,86,84,88],personality:'Selfless & determined'},
  {id:'sven',name:'Sven Bakker',age:20,country:'Netherlands',flag:'nl',club:'FC Utrecht West',role:'Goalkeeper',position:'GK',number:13,portrait:4,current:75,potential:87,form:'7.1',goals:0,assists:0,minutes:'1,980',height:'192 cm',foot:'Left',traits:['Sweeper keeper','Accurate distribution','One-on-one specialist'],attributes:[86,83,82,85,84,87],personality:'Confident & composed'},
  {id:'yassin',name:'Yassin Amrani',age:19,country:'Morocco',flag:'ma',club:'Casablanca SC',role:'Defender',position:'LB',number:3,portrait:5,current:73,potential:88,form:'7.3',goals:1,assists:6,minutes:'1,805',height:'180 cm',foot:'Left',traits:['Overlapping runs','Accurate crosses','Quick recovery'],attributes:[90,81,83,79,80,85],personality:'Energetic & focused'}
];
const state = {favourites:new Set(['luca','adam','emir']),compare:['luca','adam'],query:'',role:'All players',age:'all',country:'all',minPotential:'all',advanced:false,sort:'potential',pickerSlot:0};
const main = document.querySelector('main');
const icon = (name,extra='') => `<svg class="icon ${extra}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const flag = p => `<span class="flag flag-${p.flag}" role="img" aria-label="${p.country}"></span>`;
const getPlayer = id => players.find(p=>p.id===id) || players[0];
const portrait = p => `<div class="player-portrait portrait-${p.portrait}" role="img" aria-label="Fictional portrait of ${p.name}"></div>`;
const meta = p => `${flag(p)}<span>${p.country}</span><span class="dot-divider">·</span><span>${p.age} yrs</span><span class="dot-divider">·</span><span>${p.club}</span>`;
const link = (text,href,style='') => `<a class="text-link ${style}" href="${href}">${text}${icon('arrow')}</a>`;
const saveButton = p => `<button class="favourite-button ${state.favourites.has(p.id)?'saved':''}" data-action="save" data-id="${p.id}" aria-label="${state.favourites.has(p.id)?'Remove '+p.name+' from':'Add '+p.name+' to'} favourites" aria-pressed="${state.favourites.has(p.id)}">${icon('star')}</button>`;
function card(p){
 return `<article class="player-card">
   <a class="card-visual" href="#player/${p.id}" style="display:block" aria-label="View ${p.name}'s profile. Potential ability: ${abilityToStars(p.potential)} out of 5 stars"><span class="card-number">${p.number.toString().padStart(2,'0')}</span>${portrait(p)}<span class="position-tag"><i></i>${p.position} <span> / </span> ${p.role.toUpperCase()}</span><span class="potential-badge">${starRating(abilityToStars(p.potential),'Potential ability','profile-rating-stars catalog-potential')}<small>POTENTIAL ABILITY</small></span></a>
   ${saveButton(p)}
   <div class="card-content"><a class="player-name" href="#player/${p.id}">${p.name}</a><div class="player-meta">${meta(p)}</div><div class="card-ratings"><span>Current ability <strong>${p.current}</strong></span><span>Avg. rating <strong>${p.form}</strong></span></div><div class="card-bottom"><span><i></i>High potential</span><button data-action="compare-player" data-id="${p.id}">${icon('plus')} Compare</button></div></div>
 </article>`;
}
// Fixed sample 4-3-3, projected diagonally across the right-hand half of the field.
// x/y mark each card's feet, so every portrait remains upright in the diagonal side view.
const bestEleven = [
 {id:'sven',position:'GK',x:79.4000,y:39.9200},
 {id:'mateo',position:'RB',x:50.3556,y:23.0400},
 {id:'oskar',position:'CB',x:58.3556,y:39.8400},
 {id:'noah',position:'CB',x:66.3556,y:56.6400},
 {id:'yassin',position:'LB',x:74.3556,y:73.4400},
 {id:'adam',position:'CM',x:35.3222,y:37.2800},
 {id:'gabriel',position:'CDM',x:44.6556,y:56.8800},
 {id:'ilyas',position:'CM',x:53.9889,y:76.4800},
 {id:'rafael',position:'RW',x:17.6222,y:45.9200},
 {id:'luca',position:'ST',x:26.9556,y:65.5200},
 {id:'emir',position:'LW',x:36.2889,y:85.1200}
];
function abilityToStars(value){
 if(value<=0)return 0;
 return .5+[43,50,57,64,71,78,84,89,91].filter(threshold=>value>=threshold).length*.5;
}
function starRating(rating,label='Potential',variant='lineup-potential'){
 return `<span class="${variant}" role="img" aria-label="${label}: ${rating} out of 5 stars" title="${label}: ${rating} out of 5 stars">${Array.from({length:5},(_,i)=>`<span class="potential-star" style="--star-fill:${Math.max(0,Math.min(1,rating-i))*100}%" aria-hidden="true">${icon('star','potential-star-outline')}${icon('star','potential-star-fill')}</span>`).join('')}</span>`;
}
function lineupCard(slot){
 const p=getPlayer(slot.id), parts=p.name.split(' '), potential=abilityToStars(p.potential);
 return `<article class="lineup-slot" style="--x:${slot.x};--y:${slot.y}" data-position="${slot.position}">
   <div class="lineup-shadow"></div>
   <a class="lineup-card" href="#player/${p.id}" aria-label="${p.name}, ${slot.position}, potential ${potential} out of 5 stars. View player profile">
     <div class="lineup-card-inner"><span class="lineup-card-geometry"></span><span class="lineup-position">${slot.position}</span><span class="lineup-card-brand">HT</span><div class="lineup-face portrait-${p.portrait}" role="img" aria-label="Fictional portrait of ${p.name}"></div><div class="lineup-card-shade"></div><div class="lineup-identity"><strong>${parts.slice(1).join(' ')}</strong><span class="lineup-card-footer">${flag(p)}${starRating(potential)}</span></div></div>
   </a><button class="lineup-save ${state.favourites.has(p.id)?'saved':''}" data-action="save" data-id="${p.id}" aria-label="${state.favourites.has(p.id)?'Remove '+p.name+' from':'Add '+p.name+' to'} favourites" aria-pressed="${state.favourites.has(p.id)}">${icon('star')}</button>
 </article>`;
}
function home(){
 return `<div class="xi-home"><div class="broadcast-page-heading"><div><h1>The Hidden XI<span>.</span></h1><p>Find a hidden talent.</p></div><div class="broadcast-heading-actions"><span class="broadcast-formation">4-3-3</span><a class="text-link" href="#players">All players ${icon('arrow')}</a></div></div>
 <section class="broadcast-stage" aria-label="Eleven equally sized player cards in a 4-3-3 formation, on a white half-pitch with red lines seen from the side"><div class="broadcast-scroll" aria-label="Complete half-pitch and starting eleven"><div class="lineup-pitch"><img class="pitch-markings" src="assets/pitch-white-red.svg?v=20261112-grey-stripes" alt="" aria-hidden="true"><div class="lineup-cards">${bestEleven.map(lineupCard).join('')}</div></div></div><div class="broadcast-caption"><span>BEST XI <i>·</i> 2026 / 27</span><span class="desktop-pitch-hint">Select a player to view their profile</span></div></section></div>`;
}
function options(items,selected){return items.map(([value,label])=>`<option value="${value}" ${value===selected?'selected':''}>${label}</option>`).join('');}
function filteredPlayers(){
 let list=players.filter(p=>(state.role==='All players'||p.role===state.role)&&(!state.query||[p.name,p.country,p.club,p.position,p.role].join(' ').toLowerCase().includes(state.query.toLowerCase()))&&(state.age==='all'||p.age<=Number(state.age))&&(state.country==='all'||p.flag===state.country)&&(state.minPotential==='all'||p.potential>=Number(state.minPotential)));
 return list.sort((a,b)=>state.sort==='age'?a.age-b.age:b.potential-a.potential);
}
function catalogueResults(){
 const list=filteredPlayers();
 if(!list.length)return `<div class="empty-state">${icon('search')}<h3>No players in this search.</h3><p>Try a different name, position or country.</p><button class="button button-outline" data-action="reset-filters">Reset filters</button></div>`;
 if(state.role!=='All players')return `<div class="player-grid">${list.map(card).join('')}</div>`;
 return ['Forward','Midfielder','Defender','Goalkeeper'].map(role=>{const group=list.filter(p=>p.role===role);return group.length?`<h2 class="group-heading">${role==='Midfielder'?'Midfielders':role+'s'} <span>${group.length} players</span></h2><div class="player-grid">${group.map(card).join('')}</div>`:'';}).join('');
}
function catalogue(){
 return `<div class="catalog fade-in"><div class="page-title"><div><span class="eyebrow">THE NEXT GENERATION</span><h1>Every talent has a story.</h1><p>Meet the young players with something different. Find your next great discovery.</p></div><span class="season"><i></i>2026 / 27</span></div>
 <div class="filter-bar"><label class="search-box">${icon('search')}<input id="player-search" type="search" placeholder="Search players, clubs or countries..." aria-label="Search players" autocomplete="off"></label><label class="filter-select"><select id="age-filter" aria-label="Filter by age">${options([['all','All ages'],['18','18 and under'],['19','19 and under'],['20','20 and under']],state.age)}</select>${icon('down')}</label><label class="filter-select"><select id="country-filter" aria-label="Filter by country">${options([['all','All countries'],...Array.from(new Map(players.map(p=>[p.flag,[p.flag,p.country]])).values())],state.country)}</select>${icon('down')}</label><button class="filter-toggle ${state.advanced?'active':''}" data-action="filters" aria-expanded="${state.advanced}">${icon('filter')}More filters</button></div>
 ${state.advanced?`<div class="advanced-filters"><label>Potential <select id="potential-filter">${options([['all','Any rating'],['89','89 and above'],['90','90 and above']],state.minPotential)}</select></label><label>Sort by <select id="sort-filter">${options([['potential','Highest potential'],['age','Youngest first']],state.sort)}</select></label><button class="text-link" data-action="reset-filters">Reset all</button></div>`:''}
 <div class="catalog-toolbar"><div class="position-tabs" role="group" aria-label="Player positions">${['All players','Forward','Midfielder','Defender','Goalkeeper'].map(role=>`<button class="tab-button ${state.role===role?'active':''}" data-action="role" data-role="${role}" aria-pressed="${state.role===role}">${role==='All players'?role:role+'s'}<span>${role==='All players'?players.length:players.filter(p=>p.role===role).length}</span></button>`).join('')}</div><span class="results-count" id="results-count">${filteredPlayers().length} players in view</span></div><div id="catalog-results">${catalogueResults()}</div></div>`;
}
function radar(p,second=null){
 const labels=['Pace','Technique','Vision','Defending','Physical','Mentality'];
 const point=(i,v)=>{const angle=(i*60-90)*Math.PI/180;return [150+Math.cos(angle)*v,124+Math.sin(angle)*v];};
 const polygon=(values,scale=1)=>values.map((v,i)=>point(i,v*scale).join(',')).join(' ');
 return `<svg class="radar-chart" viewBox="0 0 300 250" role="img" aria-label="Six attribute comparison: ${p.name}${second?' and '+second.name:' and projected potential'}">${[20,40,60,80,100].map(v=>`<polygon points="${polygon(Array(6).fill(v))}" fill="${v===100?'#faf9f6':'none'}" stroke="#e8e4e1" stroke-width=".8"/>`).reverse().join('')}${labels.map((l,i)=>`<line x1="150" y1="124" x2="${point(i,100)[0]}" y2="${point(i,100)[1]}" stroke="#eee9e6" stroke-width=".7"/>`).join('')}<polygon points="${polygon(second?second.attributes:p.attributes.map(v=>Math.min(v+9,99)))}" fill="#a7b59625" stroke="#a0af90" stroke-width="1.5" ${second?'':'stroke-dasharray="3 3"'}/><polygon points="${polygon(p.attributes)}" fill="#831b2d1e" stroke="#831b2d" stroke-width="1.7"/>${p.attributes.map((v,i)=>`<circle cx="${point(i,v)[0]}" cy="${point(i,v)[1]}" r="2" fill="#831b2d"/>`).join('')}${labels.map((l,i)=>`<text x="${point(i,121)[0]}" y="${point(i,116)[1]+3}" text-anchor="middle">${l}</text>`).join('')}</svg>`;
}
function profile(p){
 const attrLabels=p.role==='Goalkeeper'?['Reflexes','Handling','Distribution','Positioning','Aerial reach','Decisions']:p.role==='Defender'?['Pace','Passing','Technique','Tackling','Strength','Anticipation']:['Pace','Passing','Dribbling','Strength','Finishing','Decisions'];
 return `<div class="fade-in"><div class="breadcrumb"><a href="#home">Discover</a>${icon('chevron')}<a href="#players">Players</a>${icon('chevron')}<span>${p.name}</span></div>
 <section class="profile-banner"><div class="profile-photo" data-number="${p.number}">${portrait(p)}</div><div class="profile-identity"><span class="eyebrow">${p.role.toUpperCase()} · ${p.position}</span><h1>${p.name}</h1><div class="player-meta">${meta(p)}</div><div class="profile-facts"><span><small>Age</small><strong>${p.age} years</strong></span><span><small>Height</small><strong>${p.height}</strong></span><span><small>Preferred foot</small><strong>${p.foot}</strong></span><span><small>Squad number</small><strong>#${p.number}</strong></span></div></div><div class="profile-scores"><div class="score-pair"><div class="score-box"><small>Current <br>ability</small>${starRating(abilityToStars(p.current),'Current ability','profile-rating-stars current')}</div><div class="score-box potential"><small>Potential <br>ability</small>${starRating(abilityToStars(p.potential),'Potential ability','profile-rating-stars potential')}</div></div><button class="button button-outline" data-action="save" data-id="${p.id}">${icon('star')}${state.favourites.has(p.id)?'Saved to favourites':'Add to favourites'}</button></div></section>
 <div class="section-heading"><div class="heading-label"><h2>A closer look</h2></div><button class="button button-outline" data-action="compare-player" data-id="${p.id}">${icon('compare')}Compare player</button></div>
 <div class="profile-columns"><section class="panel"><div class="panel-heading"><h2>Key attributes</h2><small>STAR RATINGS</small></div>${attrLabels.map((l,i)=>`<div class="attribute-row"><span class="attribute-name">${l}</span>${starRating(abilityToStars(p.attributes[i]),l,'profile-rating-stars attribute-stars')}</div>`).join('')}<p class="attribute-footnote">A position-focused view of the player’s strongest qualities.</p></section>
 <section class="panel"><div class="panel-heading"><h2>The full picture</h2><small>ABILITY PROFILE</small></div>${radar(p)}<div class="radar-legend"><span><i></i>Current ability</span><span><i class="potential-key"></i>Potential</span></div></section>
 <section class="panel"><div class="panel-heading"><h2>What makes him different</h2></div>${p.traits.map((t,i)=>`<div class="trait">${icon(['ball','trend','shield'][i])}<div><strong>${t}</strong><small>${['A defining part of his game','A natural instinct on the pitch','Room to become exceptional'][i]}</small></div></div>`).join('')}<div class="personality"><small>Personality & mentality</small><strong>${p.personality}</strong></div></section></div>
 <div class="profile-lower"><section class="panel"><div class="panel-heading"><h2>The season so far</h2><small>2026 / 27 · ALL COMPETITIONS</small></div><div class="performance-stats"><span><strong>${p.minutes}</strong><small>MINUTES PLAYED</small></span><span><strong>${p.goals}</strong><small>GOALS</small></span><span><strong>${p.assists}</strong><small>ASSISTS</small></span><span><strong style="color:var(--green)">${p.form}</strong><small>AVG. MATCH RATING</small></span></div><table class="data-table"><thead><tr><th>Recent match</th><th>Minutes</th><th>Goals</th><th>Assists</th><th>Rating</th></tr></thead><tbody>${[['vs Northfield FC','90','1','0','8.1'],['vs Riverside Athletic','84','0','1','7.6'],['vs Sporting Central','90','0','0','7.2']].map(r=>`<tr>${r.map((v,i)=>`<td>${i===4?`<span class="match-rating">${v}</span>`:v}</td>`).join('')}</tr>`).join('')}</tbody></table></section>
 <section class="panel"><div class="panel-heading"><h2>Where he makes an impact</h2><small>PRIMARY POSITION</small></div><div class="pitch-widget"><div class="pitch-boundary"></div><span class="position-marker" style="top:${p.role==='Defender'?'64':p.role==='Midfielder'?'43':p.role==='Goalkeeper'?'79':'25'}%;left:${p.position==='LW'||p.position==='LB'?'19':p.position==='RW'||p.position==='RB'?'75':'46'}%">${p.position}</span></div><div class="position-caption"><strong>${p.position} · ${p.role}</strong><span>Natural position</span></div><p class="attribute-footnote">Per 90 minutes: ${(p.goals/(Number(p.minutes.replace(',',''))/90)).toFixed(2)} goals · ${(p.assists/(Number(p.minutes.replace(',',''))/90)).toFixed(2)} assists</p></section></div></div>`;
}
function comparison(){
 const a=getPlayer(state.compare[0]),b=getPlayer(state.compare[1]);
 const row=(label,x,y,max=100)=>`<div class="comparison-row"><strong class="${Number(x)>Number(y)?'winner':''}">${x}</strong><div><span>${label}</span><div class="comparison-bars"><i style="--fill:${Math.min(Number(x)/max*100,100)}%"></i><i style="--fill:${Math.min(Number(y)/max*100,100)}%"></i></div></div><strong class="${Number(y)>Number(x)?'winner':''}" style="${Number(y)>Number(x)?'color:#7b916b':''}">${y}</strong></div>`;
 return `<div class="fade-in"><div class="compare-intro"><span class="eyebrow">A DIFFERENT PERSPECTIVE</span><h1>The details make the difference.</h1><p>Two young players. Different strengths. A world of potential.</p></div><div class="compare-selection">${[a,b].map((p,i)=>`${i===1?'<span class="versus">VS</span>':''}<section class="compare-player"><button class="change-player" data-action="choose-player" data-slot="${i}">Change player ↗</button><a class="compare-avatar" href="#player/${p.id}" aria-label="View ${p.name}">${portrait(p)}</a><div><h2><a href="#player/${p.id}">${p.name}</a></h2><div class="player-meta">${flag(p)} ${p.country} <span class="dot-divider">·</span> ${p.age} yrs</div><div class="eyebrow">${p.position} · ${p.club}</div></div></section>`).join('')}</div><div class="compare-content"><section class="panel"><div class="panel-heading"><h2>Side by side</h2><small>PLAYER OVERVIEW</small></div>${row('Current ability',a.current,b.current)}${row('Potential ability',a.potential,b.potential)}${row('Average match rating',a.form,b.form,10)}${row('Pace',a.attributes[0],b.attributes[0])}${row('Technique',a.attributes[2],b.attributes[2])}${row('Mentality',a.attributes[5],b.attributes[5])}</section><section class="panel"><div class="panel-heading"><h2>Strength in every dimension</h2><small>ATTRIBUTE COMPARISON</small></div>${radar(a,b)}<div class="radar-legend"><span><i></i>${a.name}</span><span><i class="potential-key"></i>${b.name}</span></div><div class="compare-traits"><div><strong>${a.traits[0]}</strong><small>${a.personality}</small></div><div><strong style="color:#81916f">${b.traits[0]}</strong><small>${b.personality}</small></div></div></section></div><div class="comparison-note">${icon('info')}Every player develops differently. Look at the attributes in the context of their age, position and playing time.</div></div>`;
}
function favourites(){
 const saved=[...state.favourites].map(getPlayer);
 return `<div class="fade-in"><div class="page-title"><div><span class="eyebrow">YOUR SCOUTING BOARD</span><h1>A few names to remember.</h1><p>The players who caught your eye. Keep their potential in perspective.</p></div><a class="button button-outline" href="#players">${icon('plus')}Discover more</a></div><div class="favourites-banner">${icon('star')}<div><h3>${saved.length} ${saved.length===1?'player':'players'}. A lot of possibility.</h3><p>A closer look could lead to your next great find.</p></div><a class="button button-outline" href="#compare">Compare players ${icon('compare')}</a></div>${saved.length?`<div class="favourites-grid">${saved.map(card).join('')}</div>`:`<div class="empty-state">${icon('star')}<h3>Your next discovery is out there.</h3><p>Star a player to add them to your scouting board.</p><a class="button" href="#players">Explore players ${icon('arrow')}</a></div>`}</div>`;
}
function render(scroll=true){
 const parts=(location.hash.slice(1)||'home').split('/');
 const page=parts[0];
 main.innerHTML=page==='players'?catalogue():page==='player'?profile(getPlayer(parts[1])):page==='compare'?comparison():page==='favourites'?favourites():home();
 const titles={home:'Discover',players:'Player pool',player:getPlayer(parts[1]).name,compare:'Compare players',favourites:'Your favourites'};
 document.title=`${titles[page]||'Discover'} — Hidden Talent`;
 document.querySelectorAll('[data-nav]').forEach(a=>{const active=a.dataset.nav===(page==='player'?'players':page);a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 document.querySelector('.nav-count').textContent=state.favourites.size;
 const search=document.querySelector('#player-search');if(search)search.value=state.query;
 if(scroll)window.scrollTo({top:0,behavior:'instant'});
}
let toastTimer;
function toast(message){const el=document.querySelector('.toast');el.textContent=message;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),3300);}
function updateResults(){document.querySelector('#catalog-results').innerHTML=catalogueResults();document.querySelector('#results-count').textContent=`${filteredPlayers().length} players in view`;}
function openPicker(slot){
 state.pickerSlot=slot;
 document.querySelector('#picker-list').innerHTML=players.map(p=>`<button class="picker-row" data-action="pick-player" data-id="${p.id}" ${state.compare[slot===0?1:0]===p.id?'disabled':''}><span class="mini-avatar portrait-${p.portrait}" role="img" aria-label="${p.name}"></span><span><strong>${p.name}</strong><small>${p.position} · ${p.age} years · ${p.club}</small></span><span class="picker-score">${p.potential}</span>${icon('plus')}</button>`).join('');
 document.querySelector('#player-picker').showModal();
}
document.addEventListener('click',e=>{
 if(e.target.closest('.skip-link')){e.preventDefault();main.focus();return;}
 const button=e.target.closest('[data-action]');if(!button)return;
 const {action,id}=button.dataset;
 if(action==='save'){
   if(state.favourites.has(id)){state.favourites.delete(id);toast(`${getPlayer(id).name} removed from favourites.`);}else{state.favourites.add(id);toast(`${getPlayer(id).name} added to your scouting board.`);}
   render(false);
 }else if(action==='compare-player'){
   if(state.compare[0]!==id&&state.compare[1]!==id)state.compare=[id,state.compare[0]];
   location.hash='compare';
 }else if(action==='role'){state.role=button.dataset.role;render(false);}
 else if(action==='filters'){state.advanced=!state.advanced;render(false);}
 else if(action==='reset-filters'){Object.assign(state,{query:'',role:'All players',age:'all',country:'all',minPotential:'all',sort:'potential'});render(false);}
 else if(action==='choose-player')openPicker(Number(button.dataset.slot));
 else if(action==='pick-player'){state.compare[state.pickerSlot]=id;document.querySelector('#player-picker').close();render(false);}
 else if(action==='close-dialog')document.querySelector('#player-picker').close();
 else if(action==='notifications')toast('You’re all caught up. Your next discovery is waiting.');
 else if(action==='account')toast('Tarik K. · Independent scout · UI preview');
});
document.addEventListener('input',e=>{if(e.target.id==='player-search'){state.query=e.target.value;updateResults();}});
document.addEventListener('change',e=>{
 const mapping={'age-filter':'age','country-filter':'country','potential-filter':'minPotential','sort-filter':'sort'};
 if(mapping[e.target.id]){state[mapping[e.target.id]]=e.target.value;updateResults();}
});
document.querySelector('#player-picker').addEventListener('click',e=>{if(e.target===e.currentTarget){const r=e.currentTarget.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.currentTarget.close();}});
window.addEventListener('hashchange',()=>render());
render();
