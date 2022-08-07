// ENGINE
$("input").change(function () {
    $(".pt").css("display", "block")
    file = $("input")[0].files[0]
    var fr = new FileReader()
    fr.readAsText(file)
    fr.onload = function () {
        text = fr.result            // storing the file text
        embed(text)
    }
})
loadDefault = ()=>{
    $(".pt").css("display", "block")
    embed(default_text)
}

// LOGIC
function embed(text) {
    $(".container").empty()
    $(".container").append('<table><thead><tr><th>Sr.</th><th>Words</th><th>Meaning</th><th>Class</th></tr></thead><tbody></tbody></table>')

    // making list of lines splitted by "\n"
    linesList = text.split("\n").sort()
    // filtering empty lines
    linesList = linesList.filter((value, index, array)=>{
        if (value != "\r") {
            return value
        }
    })

    linesList.forEach((row, rowNo) => {
        // slicing words, meanings and classes from the lines
        word = row.slice(0, row.indexOf("  "))
        if (row.indexOf("  ") == row.lastIndexOf("  ")) {
            // if there is no class
            meaning = row.slice(row.indexOf("  ") + 2, row.length-1)
            cls = ''
        } else {
            meaning = row.slice(row.indexOf("  ") + 2, row.lastIndexOf("  "))
            cls = row.slice(row.lastIndexOf("  ") + 2, row.length - 0)
        }
        // showing in tables
        $("tbody").append(`<tr><td class="sr">${rowNo + 1}</td><td class="word">${word}</td><td class="meaning">${meaning}</td><td class="cls">${cls}</td></tr>`);
    })
}


const default_text = `
abase  to disgrace  
abash  make one feel embarrassed  
abate  to reduce  
abattoir  slaughter  
abduction  capitulate  
abetment  encouraging wrong  
abject  disgracing self  
abode  a place for living  
abominate  hate  _dislike
abscond  evade from law,   
abstinence  abstaining oneself from wrong  
acerbic  showing hate  _dislike
acquit  free someone  
acrimony  butter, ill feeling  _dislike
adamant  stubborn  _determined
agonize  undergo mental suffering, agony  
agony  mental suffering  
aide  assistant  
ailing  in poor health  
aisle  a passage between rows of seats, cabinets of goods  
albeit  though  
alight  descend form train, other transport  
allege  accuse  
alley  a narrow passageway  
aloof  not friendly or forthcoming  _unfriendly
altercation  a noisy fight  _quarrel
altruist  unselfish  
amass  gather  
amble  walk or move at slow relaxed pace  _walk
ambush  surprise attack  
amid  surrounded  
amity  friendly relations  
ampute  cut off (a limp)  
anarchic  lawless  _unlawful
apathy  lack of interest  
ape  imitate, do an impression of  
appalling  horrific  _frightening
appendage  a thing added or attached  
apposite  in relation to  
apt  appropriate, suitable  
ardent  eager supporter  _passion
arduous  difficult  
artisan  a talented person  
ascetic  one who self-restrains  _control
askance  with an attitude of disapproval  
assailant  a person who physically attacks someone  _unfriendly
assuage  make unpleasant feeling less intensive  
austere  swere or strict in manner or attitude  
avarice  greed  
awe  a feeling of wow with fear or wonder  
awestruck  striked by awe  
babble  talk quickly in silly way  
badger  repeatedly ask to do something  
baffle  stop; confuse  _confuse,_check
bane  cause of annoyance  _harm
barf  vomit  
bash  strike hard  
batter  strike hardly  
bawl  cry noisily  
bearing  way of standing, moving  
beget  to produce as an effort  
behemoth  huge creature, organization  _huge
behest  order  
belated  coming late  _late
bellicose  war like  
benevolent  kind  
besotted  strongly infatuated, in love with  
bicker  argue about trivial things  
bid  offer  
bigotry  intolerance against opposites  
bland  polite  
blare  loud harsh sound  _sound
blasphemy  speaking against religion  
blasé  unimpressed  
bleak  charmless, inhospitable, dreary  _dull
blether  talk nonsense  
blight  destroy  
blizzard  snow storm  
blush  become red cause of shyness, embarrassement or shame  
boggle  be astonished  
bogus  fake  _fake
bolt  short, heavy arrow shot from crossbow  
bougie  middle classed  
boulevards  wide street with trees  
bratty  spoilt, bad behaviour  
brawl  noisy fight  _quarrel
brevity  being brief  
brunt  a bad impact of something  
budge  make slightest movement  
bulge  swell, stick out  
burly  well-built body  
bygone  old  
carcass  animal dead body  
cardigan  shool  
careen  move in uncontrolled way  
carnage  killing a large number of people  
carousel  merry-go-round in park  
castigate  criticize, blame, punish  _scold
cataclysmic  large scale and violent  _spread
catapult  throw forcefully  
cave in  capitulate  
champion  support  
chastise  scold  _scold
chatter  talk informally  
chav  thuggish person  
chide  dantna  _scold
chignon  knot of hair  
chime  ringing sound by bell  _sound
chisel  tool to cut edges  _tool
chivalry  bravery  
chug  move slowly and heavily  
chunk  piece  _piece
clammy  stinky, unpleasant  
claustrophobic  fear for confined places  
cleric  molvi  
cliché  overused phrase  
cling  hold tightly  
clobber  hit hard, treat or deal harshly  _unfriendly
clomp  walk with heavy sound  _sound, _walk
cluck  a foolish person  _fool
clumsy  awkward in movement  
clutch  grasp  
cobble  small round rock  
commute  travel  
concede  agree after disagreeing first  _agree
concord  agreement  _agree
confabulate  to talk  
congenital  disease by birth  
conjure  cause a ghost to appear by magic  
consensus  agreement  _agree
consent  permission  
constrain  forced to follow  
constraint  limitation  _check
contagion  passing of disease  
contemplate  look thoughtfully  _gaze
contend  to dispute  
contented  satisfied  
contentious  controversial  
contrite  expressing sorry at knowing one's wrong doing  
convene  to hold a meeting  
convolute  make story difficult  
copious  in large amount  
corpse  dead body  
coterie  group with shared interests  
countenance  favor  
coup  seizure of power  
coursing  sport of hunting hares with greyhounds  
covenant  agreement  _agree
covert  not openly  
coy  shy  
creak  make high pitched sound  _sound
croon  sing softly especially to a child  
crumb  fragment  
cubicle  small partitioned area of room for particular thing  
cud  partly left food returned from stomach for chewing  
cuddle  hug  
cue  hint, ishara  
culminate  reach a climax  _top
curb  stop  _check
curd  undesirable  
cursory  hasty  
cynicism  person who doubts everything  
dacoit  criminals who rob  
dainty  delicately small and pretty  
dangle  hand or swing  
dapper  neat  
daunted  to frighten  
daze  shock that makes one unreactive  
de facto  in fact  
de jure  in judiciary  
debacle  ignominious defeat  
decree  order  _decree
deface  spoil the surface  
defer  to postpone  _late
defiance  disobedience  
defiant  showing defiance  
deft  clever in one's moves  
deign  do something considered disgraceful  
dejected  sad  _sad
delicatessen  hotel with foreign food  
demure  reserved, modest  
denunciate  denounce, publically declare to be wrong  _denounce
deplore  strongly disapprove  _disagree
deport  expel from country  
deposition  overthrow  
deprecate  not showing favor  
depute  appoint  
derision  scornful, ridicule mockery  
derogate  to insult  
derogatory  disgraceful  
desist  stop doing something  _check
despair  lose hope  
despicable  deserving contempt  _dislike
despise  feel contempt  _dislike
despondent  losing hope  
despot  an evil person  
detainee  a person in captivity  
detente  agreement  _agree
discontent  unsatisfied  
discreetly  carefully  
disdain  feeling contempt for others  
dismal  in depression  
disposition  fitrat  
dissent  an opinion different than others  
dissident  person opposing official order  
dissuade  persuade someone not to take an action  
ditz  scatterbrained  
docile  ready to be controlled  
doctor  change  
dogma  beliefs  
dotage  old  
dowry  an amount of property or money brought by a bride  
drawl  speak in low, lazy way  
dreary  dull, boring, repetitive  _dull
dregs  worthless, remains  _piece
drench  wet thoroughly  
dwell  live in   
dwindle  diminish gradually in size, amount, or strength  _check
ecstasy  happiness  _happy
eerie  strange and frightening  _frightening
efface  erase  
elan  enthusiasm  
embellish  decorate  
embezzlement  steal money you were handed resposible for  
embroil  involve someone in difficult situation, fight  
enact  make law  
enigma  a mysterious person  
enumerate  count  
envoy  messenger, diplomat  
err  to mistake  
ersatz  not real  _fake
eulogy  a speech for tribute  
euphemism  replacement for words  
evade  escape  
exalt  promote  
exasperate  irritate, frustrate  _harm
excruciate  annoy, make suffer  _harm
exodus  migration  
expedient  suitable  
extortion  obtaining by force esp money  
extradite  hand over  
facade  face of a building  
face palm  hitting forehead  
falsehood  being wrong  _wrong
fathomless  borderless  
faux  fake  _fake
feeble  weak  
feign  pretend  
felicitate  congratulate  
fend  look after and provide for oneself  
ferocity  brutality  
fervent  passionate  _passion
festoon  chain of flowers in curve  
fiasco  ridiculous defeat  
fickle  inconstant  
firm  strong  
fizzle  end feebly  
flabbergast  surprise greatly  
fling  throw or hurl forcefully  _throw
forge  create  
foyer  an entrance hall or other open area in a building used by the public  
frail  weak, delicate, fragile  
frantic  passionate  _passion
fray  competition that may lead to brawl; unravel, become worn  _quarrel
fret  visibly anxious  
frigid  lacking imagination  
froth  worthless idea or talk  
frown  angry, worried face  _angry
fumble  handle clumsily  
furle  neatly folded  
furtive  avoiding notice  
futile  incapable of producing good  
gag  choke  
gale  storm  
gall  bold and rude  
garrulous  talkative  
gawk  stare openly  _gaze
gawp  stare openly  _gaze
gentile  christian  
gentrify  make gentle  
germane  relevant  
ghastly  causing fear  
ghetto  slum area  
giddy  dizzy, stagger  
giggle  laugh lightly and repeatedly  
gingerly  carefully  
gloat  take pleasure on one's bad luck  
gory  involving violence  
grandiose  impressive and imposing in appearance or style  _impressive
grim  very serious  
grimace  twisted expression showing disgust, pain  
grinch  who spoils other's enjoyment  
grisly  undesirable  
grit  small loose particles of stone  _piece
grot  unpleasant  _frightening
grotesque  adj for grot, ugly  _frightening
grovel  lie, crawl on ground  
grubby  covered with dirt  
gruff  rough and low in pitch  
grunt  make a low, short guttural sound  _sound
guarantor  guarantee giver  
haggle  bargain persistently over the cost of something  
halt  come to an unexpected stop  _check
hamlet  village  
hapless  unfortunate  
harness  control  
haul  pull or drag with effort or force  
hearth  fire for warmth  
hegemony  dominance  
heinous  envious crime  _wrong
heterodox  modern  
hiss  making sound of "s"  _sound
hitch  move with a jerk  
hoax  malicious deception  
hobble  walk in awkward way cause of injury  _walk
hobnob  spend time with rich, imp people  
holler  give a loud shout or cry  
holler at  contact  
hop  jumping single foot  
hotchpotch  confused mixture  _mix
huddle  crowd together  
hunch  a feeling based on intuition  
identikit  reconstructed picture  
idyll  an extremely happy, peaceful situation, typically idealized  _happy
ignominy  public shame or disgrace  
imbecile  a stupid person  _fool
imitate  take or follow as a model  
immaculate  perfectly clean  
imp  devil  
impede  delay or stop  _check
impediment  a hindrance  
imperious  expecting to be obeyed  
impertinent  irrelevant  
impetuous  rapid without thinking  
implore  beg  _ask
impudent  rude  
incessant  unpleasant and unstopping  
incur  caused cause of one's wrong doing  
indict  charge, accuse  
indispensable  unavoidable  
infatuate  admiration for  
injunction  authoritative warning  
innocuous  not harmful  
insidious  slowly harming  
instigate  bring about, initiate  
insurgency  revolt  
interminable  unending  
intrigue  conspiracy  
irk  tired, uktaya  
irony  sarcastic expression  
irony of fate  bad luck  
jeer  mock  
jilt  suddenly reject or abandon especially a lover  
jocund  cheerful  
jolt  push, shake  
jostle  push, elbow, or bump against someone in crowd  
jugular  of neck, important  
kin  relation  
kindle  burn  
knead  work moistened flour or clay into dough  
kook  a mad person  _angry
laconic  using less words  
lacuna  a gap, missing part  
languid  weak  
lascivious  feeling or revealing an overt sexual interest or desire  
lash  strike with a stick  
latent  hidden or concealed  
laud  praise  
lavish  rich, elaborate, or luxurious  
lay off  fired for sometime  
leer  gaze in lascivious or unpleasant way  _gaze
lieu  stead  
listless  lacking energy, enthusiasm  
loaf  slice of bread, cake  _piece
loom  appear as a vague form  _unclear
loquacious  person who talks less  
lore  a body of traditions and knowledge on a subject  _tradition
lout  rude  
loutish  thuggish  
ludicrous  ridiculous  _ludicrous
lug  carry or drag with effort  
lumber  move in a slow, heavy, awkward way  _walk
lunge  forward thrust of body  
lurch  make sudden move  
lure  make someone do something by giving greed  
lurid  unpleasantly bright  
lynch  kill before trial  
malevolent  evil  _wrong
malignant  evil in nature  _wrong
mammoth  big  _huge
manacle  hand cuffs  _tool
manor  mansion  
mantle  losse sleevelss cloak  _dress
masquerade  pretend  
mausoleum  a building housing a tomb  
meagre  less  
meek  polite, submissive  
melancholy  sad without a reason  
melee  scuffle  _quarrel
melodrama  an emotional drama  
menace  source of danger  _danger
mentor  train, guide  
mercenary  greedy  
meritorious  worthy  
mesh  material made of a network of wire or thread  
mesmerize  hypnotize, take all attention  _takeAttention
meticulous  minute  _insight
mingle  mix  
miniature  very small  
minutiae  small, precise details  _insight
modest  polite, not taking advantages  
mogul  trivial person in media  
moll  soften  
mollify  reduce the severity  _improve
monger  spreader  
moot  discuss  
mop  puchara  
morose  sullen and ill-tempered  _temper
mosaic  colourful and variegated pattern  _variety
muffle  cover  
mug  attack, rob  
murk  dark, misty  
mutiny  rebellion  
nab  seize or arrest  
naive  showing lack of experience  
netizen  internet user  
nonchalant  relaxed, unconcerned  
norm  normal  
notch  score, achieve  
nuance  difference in or shade of meaning, expression, or sound  _sound
nudge  poke with elbow  
obdurate  determined  _determined
oblique  leaned  
oblivion  unaware  
obstetric  relating to childbirth and the processes associated with it  
obstinate  strong on decision  
ominous  giving worrying impression of something bad  
onerous  difficult  
ooze  slowly seep out  
opine  make opinion  
opulent  rich, wealthy  _rich
orthodox  traditional  _tradition
paltry  useless  
paraphernalia  object needed  
pariah  outcast  
parole  release of a prisoner  
partisan  champion  
patriarch  head of a family  
patron  customer, giving financial support  
paucity  less amount  
peevish  irritable  _harm
peloton  group of cyclists in a race  
pelt  throw something at someone or something  _throw
penchant  passionate  
perch  thing on which bird rests; rest on something  
peril  dangerous  _danger
periphery  outside edge  
pernicious  painful  
philistine  a person indifferent to culture, arts  
phoney  not genuine  _fake
pint  one eighth of gallon  
pity  feeling of sorrow  
placidly  not easily excited  
plagiarize  steal someone's work or idea  
platonic  love (intimate not sexual)  
pleb  one from low class  
pliable  easily influenced  
plight  undesirable  _frightening
plod  work slowly and perseveringly at a dull task  _progress
plonk  set down heavily  
plummet  fall or drop straight down at high speed  
plunder  stead goods, lutna  
plunge  jump, drive  
plush  luxurious  
podium  platform or stage for speaker  
poke  jab   
posthumous  coming after death  
predicament  embarrssing situation  _badsituation
premise  hypothesis  
prenup  pre marriage agreement  _agree
pretentious  attempting to impress by affecting greater merit than is actually possessed  _impressive
prevalent  widespread  _spread
pristine  in original condition  
probe  investigation  
procure  gain with effort  
prodigy  supra intelligent  
proliferation  rapid increase  
prolix  lengthy  
promenade  a leisure walk  _walk
prop  a support  
prudent  wise  
puddle  stagnant water on road  
puke  vomit  
purism  scrupulous observance of traditional rules in language or style  _tradition
putrid  rotting, bad  
pygmy  small  
quandary  in dilemma  
quash  to abolish  
queasy  feeling sick  
quest  search  
quirt  short-handled riding whip  
ramshackle  in shape of severe disrepair  
rancour  malignant hate, bitterness  
rant  speak, shout in anger  _temper
rash  done without caring consequences  
rattle  make rapid series of sounds  _sound
raucous  making disturbing noise  
rave  talk incoherently as if one is mad  _angry
ravenous  extremely hungry  
raze  completely destroy  
recess  hollow space caused by pushing wall out  
reck  pay heed   
reckon  regard  
recline  lean back in a relaxed position with the back supported  
regal  resembling, fit for monarch  
regress  making wrong right  
rehash  reuse old idea, material  
reiterate  say again and again  
rejuvenation  the action of giving new energy to something  
remittance  money sent as a gift  
remnants  remains  _piece
repression  bring under control  
reprieve  cancel, postpone  
retort  sarcastic answer  
rev  increase the running speed of an engine  
reverence  deep respect  
reverie  a state of being pleasantly lost in one's thoughts  
rif  reducing employs  
rift  gap, break in friendship  
robe  after bath dress  _dress
robust  powerful  
roil  annoy, irritate  
rummage  search unsymmetrically  
rut  a habit or pattern of behaviour that has become dull and unproductive  _dull, _rotten
sabotage  destroy  _harm
saboteur  destroyer  _harm
saccharine  sweet  
sagacity  wisdom  _wise
salvo  firing a salute  
sanctity  sacredness  
sanguine  optimistic  
sap  weaken  
sapphire  a transparent precious stone  
sardonically  satirical, sarcastic  
sashay  swing hips in movement  
satiable  that make satisfied  
satire  writing intended to ridicule  
savour  enjoy it to full  
scald  injure with hot liq or steam  
scamper  run with quick light steps in excitement or fear  _walk
scant  barely sufficient  
scoop  spoon type  
scotch  put an end  
scour  search thoroughly  
scourge  a person who causes trouble  
screech  piercing cry  
scribble  write, draw carelessly  
scrimp  clever in money affairs  
scrub  to clean  
scrupulous  careful  
scrutiny  critical examination  
scuffle  disorderly fight  _quarrel
seamy  disreputable  
seclude  keep someone away from other people  
seethe  boil  
sepoy  Indian soldier under British  
serenade  love song  
serf  laborer bounded to feudal  
shack  a roughly built hut or cabin  
shackle  handcuff with wall  
sheath  cover for knife or sword  
shed  behna  
sheen  shine or cause to shine softly  
shirk  be unwilling to do  
shred  small amount  
shrewd  wise, cunning, showing sharp powers of judgement  _wise
shriek  piercing cry  
shrine  holy place  
shrug  shake on shoulders  
shudder  shiver, shake from fear  
shudder  tremble form fear  
shun  persistently avoid, ignore, or reject  
sidle  walk in furtive way  _walk
skeptical  not easily convinced  
skew  sloped  _slope
slant  slope or lean in a particular direction  _slope
slosh  move irregularly with splashing sound  _sound
slough  a situation characterized by lack of progress or activity; swamp  _progress
slugfest  competition  
sluice  an act of rinsing or showering with water  
slur  sounds running into  _sound
smarmy  flattering in insincere way  
smarting  painful  
smatter  small amount  
smidgen  tiny amount  
snark  bad tempered; making comments in sarcastic way  _temper
snarl  to make complicated  
sneer  a contemptuous or mocking smile, remark, or tone  
snigger  half suppressed laugh  
snob  a person who believes he is superior  _rich
snub  mustarad  
soiree  a fancy evening gathering  
sorcery  use of black magic  
sorority  female hostel  
sparse  less  
spew  expel, exhaust  _out
spiel  speech, story esp by a seller  
spite  a desire to hurt, annoy someone  
splatter  splash liquid over a surface  
spook  ghost, spy  
spool  a cylindrical reel on which things can be wrapped  
sporadically  occasionally or at irregular intervals  
spur  promote, encourage  
spurn  reject with contempt  
squabble  noisy quarrel about something trivial  _quarrel
squat  sit, crouch  
squelch  make a soft sucking sound especially by mud  _sound
squint  bhenga  
squish  make a soft sound when walked on  _sound
staccato  with each note sharply detached or separated from the others  
stagger  larkharana  
stale  no longer able to perform great; uneatable now  
stammer  speak with pauses  
stampede  rush of group  
stardom  status of being very famous  
startle  cause to feel sudden shock  
stash  store safely in hidden or secret place  
steer  guide  
stipend  scholarship  
stolid  unemotional  
stomp  tread heavily to show anger  
stray  move away from   
strew  scatter things   
stride  walk with long steps  _walk
stringent  strict  
stroll  walk in a leisurely way  _walk
stub  remnant of a pencil, cigarette, or similar-shaped object  _piece
stubborn  unchangeable  _determined
stubby  short and thick  
stumble  fall  
subservience  willingness to obey  
suburb  outlying part of city  
succinct  briefly and clearly expressed  
succubus  female demon  
succumb  surrender  
sullen  bad tempered  _temper
superfluous  more than necessary  
surly  bad tempered, unfriendly  _temper
surreptitious  confidential  
sway  to and fro moving  
sweltering  causing sweat  
swig  drink in large gulps  
swish  move with soft rushing sound  _sound
swoon  faint especially from extreme emotion  
sybarite  a person self indulgent for pleasure, pleasure seeker  _wallow
tabloid  small newspaper  
tad  to a small extent  
taint  undesirable  _frightening
tame  domesticated  
tangible  true, existent  
tangy  smelly  
tarry  be patient  
tedious  dull, monotonous  _dull
teeter  move or away unsteadily  
tenet  belief  
testament  agreement  _agree
thatch  a roof made with plant material  
thrash  beat violently  
throng  densely packed crowd  
thrum  continuous rhythmic sound  _sound
tinsel  glitter, shiny foil  
tirade  long, angry speech of criticism  _angry
torment  annoy, make someone suffer  
traipse  walk about casually  _walk
trawl  search through something thoroughly  
trek  long journey  
trepid  full of fear  
trepidation  nervous fearful feeling  
trickle  flow in a small stream; come, go, or appear slowly or gradually  
trite  lacking originality  
trivial  important  
troupe  tourist group  
truce  agreement  _agree
trudge  walk slowly in exhaustion  _walk
truncate  shorten the duration or extent of  _check
tug  pull hard  
turf  grass carpet  
turmoil  hangama  
turn coat  person who changes  
tycoon  rich man  
umpteen  many  
unwind  relax  
upend  upside down  
upheaval  uprising  
vaguely  blur  _unclear
valiant  brave  
vandal  damage  
vanity  admiration of one's own things  _vain
variegate  exhibiting different colours    _variety
vehement  passionately  _passion
veil  burka  
vendetta  bloody revenge  
vendor  seller  
vent  give, say out  _out
veracity  accurate  
verbiage  long speech or writing  
verdict  order by court  
vestige  mark, trace  
veteran  old  
vex  tease  
vicinity  area  
vicious  cruel, violent  
vile  undesirable  _frightening
vintage  old  
vociferate  shout  
waffle  speak, write in vague manner  _unclear
waft  pass easily through wind  _out
wail  high pitched cry  
waive  To give up (a claim or right, for example) voluntarily; To put off until later; postpone  _late
wallow  indulge in unrestrained way to find pleasure  _wallow
wanton  without purpose, awara  
waver  weaken  
wheelbarrow  cement carrier  
wholly  completely  
wicked  evil  _wrong
witty  quick, inventive humour  _wise
wrangle  tu tu me me karna  _quarrel
wretch  not happy  _sad
xenophobia  disliking for foreign  
quell  put an end to (a rebellion or other disorder), typically by the use of force; to pacify; quiet  _ease
quixotic  extremely idealistic; unrealistic and impractical; Caught up in the romance of noble deeds and the pursuit of unreachable goals; idealistic without regard to practicality
eclectic  Selecting or employing individual elements from a variety of sources, systems, or styles  _variety
abeyance  a state of temporary disuse or suspension
abrogate  repeal or do away with (a law, right, or formal agreement)
abstemious  indulging only very moderately in something, especially food and drink  _control
acme  the highest point of something  _top
acrid  bitter to the taste or smell
aggrandize  to make great; increase the power, status, or wealth of
agog  in eager desire  _passion
cherubic  having the innocence or plump prettiness of a young child
privation  the loss or absence of a quality or attribute that is normally present
inchoate  not fully formed or developed
amok  in a violently raging, wild, or uncontrolled manner  _uncontrolled
berserk  out of control with anger or excitement; wild or frenzied  _uncontrolled
wrest  forcibly pull (something) from a person's grasp
fritter  waste time, money, or energy on trifling matters  _waste
trifling  unimportant or trivial  _piece
squander  waste (something, especially money or time) in a reckless and foolish manner  _waste
prophylaxis  treatment given or action taken to prevent disease
spearhead  an individual or group chosen to lead an attack or movement
renege  renounce or abandon, go back on promise  _betray
renegade  a person who betrays an organization, country, or set of principles  _betray
defector  someone who leaves their country, political party, or other group, and joins an opposing country, party, or group  _betray
dichotomy  a division or contrast between two things that are or are represented as being opposed
sulk  be silent, morose, and bad-tempered out of annoyance or disappointment  _temper
elation  great happiness and exhilaration  _happy
berate  scold or criticize (someone) angrily  _scold
grill  subject (someone) to intense questioning or interrogation
reprimand  a formal expression of disapproval  _disagree
fell  cut down (a tree)
lumberjack  a person who fells trees, cuts them into logs, or transports them to a sawmill
logger  a person who fells trees for timber
loggerhead  a foolish person  _fool
at loggerheads  in violent dispute or disagreement  _disagree
vie  compete eagerly with someone in order to do or achieve something; vying
pinnacle  the most successful point; the culmination  _top
rant and rave  shout and complain angrily and at length  _angry
mull  think about (a fact, proposal, or request) deeply and at length  
decry  publicly denounce  _denounce
denouement  the final part of a play, film, or narrative in which the strands of the plot are drawn together and matters are explained or resolved
aberrant  departing from an accepted standard
vigilantism  law enforcement undertaken without legal authority by a self-appointed group of people
confluent  flowing together or merging
siesta  an afternoon rest or nap, especially one taken during the hottest hours of the day in a hot climate
attire  clothes, especially fine or formal ones  _dress
off the cuff  without prepration
beleaguered  in a very difficult situation  _badsituation
ignoble  not honourable in character or purpose, of low birth  _piece
hit a snag  Encounter a problem or obstacle  _check
dubious  hesitating or doubting; not to be relied upon; suspect
oust  drive out or expel (someone) from a position or place  _out
snag  an unexpected or hidden obstacle or drawback  _check
stonewall  delay or obstruct (a request, process, or person) by refusing to answer questions or by being evasive  _late
filibuster  an action such as a prolonged speech that obstructs progress in a legislative assembly while not technically contravening the required procedures.
ingenuous  (of a person or action) innocent and unsuspecting
disingenuous  not candid or sincere
practitioner  a person actively engaged in an art, discipline, or profession, especially medicine
pacify  To make peaceful or calm; appease; tranquilize  _ease
enfant terrible  a person who behaves in an unconventional or controversial way
maverick  A person who takes an independent stand, as in politics, from his or her party or group
edifice  a large, imposing building
chequered  marked by periods of varied fortune or discreditable incidents
smear campaign  An effort to damage or call into question someone's reputation, by propounding negative propaganda
propound  put forward (an idea or theory) for consideration by others  _out
vilify  speak or write about in an abusively disparaging manner
disparage  regard or represent as being of little worth  _piece
soar  fly or rise high in the air  _out
haughty  arrogantly superior and disdainful
akin  of similar character
disservice  a harmful action  _harm
coalition  A combination into one body; a union
endorse  declare one's public approval or support of
demarche  a political step or initiative
inimical  tending to obstruct or harm;unfriendly; hostile  _harm
cajole  persuade (someone) to do something by sustained coaxing or flattery
ire  anger  _angry
ruckus  a state of confused and noisy disturbance  _sound
cessation  the fact or process of ending or being brought to an end  _ease
concoction  a mixture of various ingredients or elements  _mix
emissary  a person sent as a diplomatic representative on a special mission
tramp  A tramp is a long-term homeless person who travels from place to place as a vagrant, traditionally walking all year round
cameleer  a person who controls or rides a camel
`