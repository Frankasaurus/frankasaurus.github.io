---
publish: false
---

```dataview
TABLE type AS Type, rarity AS Rarity, owner AS Owner
FROM "Dungeons & Dragons 5e/Campaigns/Current/StracciaD&D 2/Magic Items"
WHERE file.name != "_Overview"
SORT file.name ASC
```
https://www.dndbeyond.com/sources/xgte/awarding-magic-items
https://www.kassoon.com/dnd/5e/magic-item-prices/