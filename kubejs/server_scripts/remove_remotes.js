// Disabled as remotes are pretty balanced in skyblock
// Remove remotes; they have infinite range for some reason
false && onEvent("recipes", event => {
    event.remove({ output: "storagenetwork:inventory_remote" });
    event.remove({ output: "storagenetwork:crafting_remote" });
    event.remove({ output: "storagenetwork:picker_remote" });
    event.remove({ output: "storagenetwork:collector_remote" });
    event.remove({ output: "storagenetwork:builder_remote" });
});
