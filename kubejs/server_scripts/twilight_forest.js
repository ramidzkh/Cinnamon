const ACTIVATOR = "twilightforest:portal/activator";
const TERRASTEEL = "#forge:ingots/terrasteel";

// Makes the Twilight Forest portal activation more expensive
onEvent('item.tags', event => {
    event.removeAll(ACTIVATOR);
    event.add(ACTIVATOR, TERRASTEEL);
});
