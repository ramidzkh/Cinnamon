onEvent('recipes', event => {
    event.replaceInput({id: 'mekanism:teleportation_core'}, 'minecraft:diamond', 'botania:rune_greed');

    event.remove({id: 'botania:runic_altar/greed'});

    event.remove({id: 'ae2:network/blocks/controller'});
    event.remove({id: 'ae2:network/blocks/energy_energy_acceptor'});
});
