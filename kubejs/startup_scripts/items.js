onEvent('item.registry', event => {
    event.create('cinnamon:mafic_minerals');

    event.create('cinnamon:the_rune_above_all').rarity('epic');
    event.create('cinnamon:incomplete_rune_above_all');
});
