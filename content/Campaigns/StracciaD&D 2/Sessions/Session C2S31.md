---
tags:
  - stracciadnd-2
  - dnd-session
---
*This is the first session in MD*
# Samenvatting
**Wat:** Vorige sessie is de party de laatste dingen wezen klaarmaken voor vertrek naar Dragoness Barony. [[Phillipa Vurrinir]] is bij de party gekomen. Vimak is 's nachts op de boot in een catatonische droom beland, met alleen Phillipa en Roderick
**Seizoen:** Vroege herfst.
**Waar:** [[The Bonehead]], ten Noorden van Meqen, onderweg naar Dragoness / Vimak's droom.
**Doel sessie:** Vimak zijn character arc starten. Party naar Baronie brengen.
# Vimak gevecht
INITIATIVE:
Map 20
Dire Wolf 15
Yeti 15
Bear 10
Vimak 5
![[Vimak Notes#1. Oproep naar Vimak]]
# Bootreis -> Dragoness Baronie
12 dagen op zee. Net de 3e achter de rug.
Elke dag d20 -> <3 = rollen voor slecht resultaat, >17 is rollen voor topresultaat.
- Dag 8 ofzo; Defitg gekleede Tortle verkoper. Oynur-ish. Waltz playlist!
	- Houten vlot met stapels rommel, een klein hutje, een ketel met warme pap, en een groot roer in het midden.
	- “Ahoy, jong volk! Jullie lijken mij welgemutste lieden op zoek naar een koopje!”
	- Zie 
- Dag 12; aankomst Baronie Dragoness, in een semi-verlaten haven net buiten de stad.

Slecht resultaat (1d4)
1. Enorme storm met vloedgolven, risico tot kapseizen als het schip niet onder controle komt. Zie [[Session C2S31#Tropische storm|Tropische storm]]. Kan maar 1x voorkomen
2. (Perception DC14) Een groep Sahuagin veteranen op haaien in Baaneel kledij springen het dek op. Zie [[Session C2S31#Combat Sahuagin deserters|Combat Sahuagin]].
3. Slecht weer voegt een dag toe aan de rit.
4. Slecht weer voegt een dag toe aan de rit.

Goed resultaat (1d4)
1. Zie [[Session C2S31#Dolfijn Druide|Dolfijn Druide]].
2. Een vergulde tonijn is op te hengellen.
3. Goed weer haalt een dag van de rit af
4. Goed weer haalt een dag van de rit af
## Tropische storm
LAAT SPELERS DE SKILL BEPALEN
4x rollen op onderstaande lijst (1d6);
1. Het stuurmechanisme is vast komen te zitten (DC15). Bij falen breekt het stuur af.
2. De touwen die het anker vasthouden beginnen te glijden, en staat op het punt te vallen. (DC 16). Bij falen is het anker weg en de kiel versplinterd.
3. De mizzenmast begint te buigen en splinteren (DC 16). Bij falen, mast buigt kapot, stuk minder snel.
4. Een ra scheurt los van zijn touwen (DC 14). Bij falen, minder snel.
5. Een giga golf is momenten verwijderd van op het dek neerkomen (DC 12). Bij falen, goederen verloren en iets langzamer.
6. De roeiboot vangt wind en stijgt op boven het doek van het hoofddek. Bij falen, geen roeiboot meer.
Bij falen geldt 2d6 bludgeoning damage voor betrokkenen.
Bij 3 of meer falen is de boot aan het **zinken**.
## Combat Sahuagin deserters
**In Sahuagin:** *"Dit zijn ze... Onze toekomst, onze families, onze nalatenschap, onze **sultan**, verloren om een enkel meisje. Jullie moeten boeten. De macht van Baneel leeft voort in de Sahuagin!"*
Initiative:
Vimak: 18
Elisabeth: 15
Sahuagin: 11
Carmine: 9
Roderick: 9
Phillipa: 8
Haaien: 8
Robyn: 5

BOOT HP = 81
HAAI C = 9

Gebruik [deze](https://www.dndbeyond.com/encounter-builder) tool.  
**Moeilijkheid:** Hard  
**Doel:** De rit naar Baronie lastig maken - laat dit niet te lang duren!
**Reden:** Oud-volgelingen van [[Sultan Baaneel]] zoeken wraak voor de vernedering. 
**Lol:** Haaien slopen ondertussen de boot
**Vijanden:**  
- Sahuagin Baron (2x) MM p. 264
- Sahuagin Priestess (1x) MM p. 264
- Reef Shark (3x) MM p. 336
**De boot heeft AC 14, HP 100, maar begint met zinken na HP 75.**
```statblock
creature: Sahuagin Baron
name: Sahuagin Baron
size: Large
type: humanoid
subtype: sahuagin
alignment: lawful evil
ac: 16 (breastplate)
hp: 76
hit_dice: 9d10 + 27
speed: 30 ft., swim 50 ft.
stats:
  - 19
  - 15
  - 16
  - 14
  - 13
  - 17
saves:
  - DEX +5
  - CON +6
  - INT +5
  - WIS +4
skillsaves:
  - perception: 7
damage_vulnerabilities: ""
damage_resistances: ""
damage_immunities: ""
condition_immunities: ""
senses: darkvision 120 ft., passive Perception 17
languages: Sahuagin
cr: 5
traits:
  - name: Blood Frenzy
    desc: The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points.
    attack_bonus: 0
  - name: Limited Amphibiousness
    desc: The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating.
    attack_bonus: 0
  - name: Shark Telepathy
    desc: The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy.
    attack_bonus: 0
actions:
  - name: Multiattack
    desc: "The sahuagin makes three attacks: one with its bite and two with its claws or trident."
  - name: Bite
    desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) piercing damage."
  - name: Claws
    desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
  - name: Trident
    desc: "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack."

```
```statblock
creature: Sahuagin Priestess
name: Sahuagin Priestess
size: Medium
type: humanoid
subtype: sahuagin
alignment: lawful evil
ac: 12 (natural armor)
hp: 33
hit_dice: 6d8 + 6
speed: 30 ft., swim 40 ft.
stats:
  - 13
  - 11
  - 12
  - 12
  - 14
  - 13
skillsaves:
  - perception: 6
  - religion: 3
damage_vulnerabilities: ""
damage_resistances: ""
damage_immunities: ""
condition_immunities: ""
senses: darkvision 120 ft., passive Perception 16
languages: Sahuagin
cr: 2
traits:
  - name: Blood Frenzy
    desc: The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points.
    attack_bonus: 0
  - name: Limited Amphibiousness
    desc: The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating.
    attack_bonus: 0
  - name: Shark Telepathy
    desc: The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy.
    attack_bonus: 0
actions:
  - name: Multiattack
    desc: "The sahuagin makes two attacks: one with its bite and one with its claws."
  - name: Bite
    desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) piercing damage."
  - name: Claws
    desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 11 (1d4 + 1) slashing damage."
spells:
  - "The Sahuagin is an 6th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). It has the following cleric spells prepared:"
  - Cantrips (at will): guidance, thaumaturgy
  - 1st level (4 slots): bless, detect magic, guiding bolt
  - 2nd level (3 slots): hold person, spiritual weapon (trident)
  - 3rd level (3 slots): mass healing word, tongues
```

```statblock
creature: Reef Shark
```

## Dolfijn Druide
Een school dolfijnen zwemt richting de boot. 
Na een tijdje springt een dolfijn met een giga-aanloop de boot op (Acrobatics DC 14). 
>**Nyn Al-Penua**: Een volwassen zwarte elven vrouw met korte dreads, brede neus in zelfgemaakt leren manteljas, met grote staf. 
- Verontschuldigt voor de schrik, toe aan wat rust. 
- Op zoek naar Sahuagin strijders die de buurt onveilig maken. Waarschuwt.
	- Als al geholpen, gunt ze "Vrienden van de Hakgrim" wimpel. 
- Handelt namens Dame Pwenaiu, namens volksstammen van Sosa, Jaxos, Becx.
## Oynur's Handeltje
*In principe* kunnen de spelers vragen om wat dan ook, en zelf commmissies aanvragen. Maar Oynur verkoopt waardevolle spullen!
**Merk de Raaf op!**
Warenlijst:
- [[Ring of Jumping]] (3000 gp)
- [[Goggles of Night]] (2000 gp)
- [[Cape of the Mountebank]] (7000 gp)
- [[Bloodwell Vial +1]] (5000 gp)
- [[Medallion of Thoughts]] (600 gp)
- Raaf (imp) (5 gp)
	- Op het vlot hangt een kooi die Oynur af en toe rammelt. *"Deze randebiel kwam mee met een bundel spulletjes. Help mij er alsjeblieft van af."*
# Aankomst Baronie
![[Elisabeth Notes#1. Beat 1]]