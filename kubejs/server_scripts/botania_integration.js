onEvent('recipes', event => {
    event.replaceInput({id: 'mekanism:teleportation_core'}, 'minecraft:diamond', 'botania:rune_greed');
    event.replaceInput({id: 'mekanismgenerators:generator/heat'}, 'minecraft:iron_ingot', 'mekanism:ingot_steel');
    event.replaceInput({id: 'create:crafting/kinetics/mechanical_drill'}, 'create:andesite_alloy', 'botania:lens_mine');

    event.remove({id: 'botania:runic_altar/greed'});

    event.remove({id: 'ae2:network/blocks/controller'});
    event.remove({id: 'ae2:network/blocks/energy_energy_acceptor'});
});
