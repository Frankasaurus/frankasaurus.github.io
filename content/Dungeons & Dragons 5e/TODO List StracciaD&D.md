---
publish: true
---

**This is a list of stuff i have planned.** If you think something is missing from this link, please say so! The more colaborative this project becomes, the faster it'll be completed.

Feel free to worldbuild with me! If you have a good idea of how a certain description should be worded, or have a cool image for a location, please send it over my way.
# To-Do list
- [ ] Califhen;
	- [ ] BEFORE FILLING THE NOTES:
		- [ ] Create minor NPC template!
		- [ ] Create minor Location template!
		- [ ] Create PoI template (for dungeon?) + minor variant!
		- [ ] Create minor Character template! (one shots)!
	- [ ] Existing settlements
		- [ ] Meqen
		- [ ] Telack
		- [ ] Cape Rosa
		- [x] Dragoness Barony
		- [ ] Tezeder?
		- [ ] Amala Laguna?
		- [ ] Add images?
	- [ ] Continents
		- [x] Create template
			- [x] https://criticalrole.fandom.com/wiki/Tal%27Dorei
		- [x] Aegren
		- [x] Bloeming Isles
		- [ ] Greyskil
		- [ ] Drav-Modesta
		- [ ] Orphelica
		- [ ] The rest (rough lines)
			- [ ] Find and transfer existing Ordenis + Drav-Modesta data
		- [ ] Add (banner) art? (check pages)
		- [ ] Some continent Histories
	- [ ] Fill in deities (https://docs.google.com/spreadsheets/d/1kL_GAsXFvyZWS0PCWh66iQcTWpwKP86oMGCB4YrhBdc/edit?usp=sharing)
		- [x] Paste template everywhere
		- [x] Olvex
		- [ ] Hevenar
		- [ ] Izo
		- [ ] All the others
		- [ ] Add descriptions to some
		- [ ] Add images
	- [ ] Revise Calendar system & notes.
	- [ ] Revise origin story: [[The Origin of Califhen]].
	- [ ] Revise Planes notes: [[A Modern Guide to Planes]]
- [ ] Source Material
	- [x] Add folder system
		- [x] Revise To-do after this
	- [ ] Spells
		- [ ] Devise easy template, including source and what classes can use it [[Spell D&D 5e]]
		- [ ] Add spellbook page (summary of all spells)
		- [ ] Cantrips
		- [ ] Level 1
		- [ ] 2
		- [ ] 3
		- [ ] 4
		- [ ] 5
		- [ ] 6
		- [ ] 7
		- [ ] 8
		- [ ] 9
	- [ ] Races
		- [x] Fill in races from top to bottom
			- [ ] Double-check sources
			- [x] Double-check subrace rules
			- [x] Remove / replace legacies
			- [x] Update race template for existing races
				- [x] Update infobox
		- [x] Create template
		- [x] Subraces
		- [x] Historical info for Califhen
		- [x] Add images
		- [ ] Re-do the sorting of the races in [[Races Overview|Races Overview]]
	- [ ] Classes
		- [x] Create template
		- [x] Subclasses
			- [x] Current PC's
			- [x] PHB
			- [x] Tasha's
			- [x] Rest
		- [x] Add images
		- [ ] Check subclass source lists on main class page
	- [ ] Backgrounds
		- [ ] Player's handbook
		- [ ] Other sources
		- [ ] Custom Background guide
	- [ ] Standard 5th Edition Character creation guide
		- [ ] Additional info for my specific campaigns & setting
	- [x] Lineages
	- [ ] (Source) material collection list
- [ ] Campaign 2
	- [x] Add a whackton of existing NPC's
	- [ ] Make public / private versions for some NPC info in the same .md file
	- [ ] Add (more) images
	- [ ] Add NPC's from Act 1
	- [ ] Add NPC's from Act 2
	- [ ] Add NPC's from Act 3
	- [ ] Write the entire story so-far per session [[Session Overview]]
		- [x] Act 1
		- [ ] Act 2
		- [ ] Act 3
	- [ ] Update [[Party]] faction
	- [ ] Update Player pages.
- [ ] Site
	- [x] Styling Wiki column
	- [x] Phone view (remove infobox sideline mode at X width)
	- [ ] Add banner functionality
	- [x] Make the site not freak the fuck out when the exclusivity filter plugin is added
	- [x] Add publish: true to all visible documents
	- [ ] Fix popovers only using 1/4th of the width
	- [ ] Add published / unpublished counter below explorer
	- [ ] Create custom filter to handle published pages with SPOILERS to redirect to a spoiler warning(?)
	- [x] Add table scroling to large tables (like Cleric Table)
		- [x] Fix issue with smaller tables & Wiki tables on phone
		- [x] Fix Table styling
	- [ ] Edit metadata
	- [x] Custom 404 page
	- [ ] Find fix for Dataview to site
		- [ ] Something to 'bake' the dataview data when converting content to pages. 
- [ ] DM Specific organisation
	- [ ] Mini collection overview
	- [ ] Game Tiles system

> [!warning]
> **All content below this point will not parse properly on the site, and is purely for editing purposes.**
> 
> These are [Dataview](https://github.com/blacksmithgu/obsidian-dataview) components which do live database reading within my writing program so I can focus on what I need to work on next :)
# Orphan pages
```dataview
list
from ""
where length(file.inlinks) =0 and length(file.outlinks) = 0
sort file.name ASC
```
# TODO Tags
```dataview
list
from #TODO 
sort file.name ASC
```
# Update Tags
```dataview
list
from #update 
sort file.name ASC
```
# Top 50 smallest files by size (ascending):
```dataview
table
	round((file.size / 1024), 2) as "File size (Mb's)",
	length(file.inlinks) as "Inlinks amount", 
	length(file.outlinks) as "Outlinks amount",
	file.tags as "Tags"
from ""
SORT file.size ASC
LIMIT 50
```