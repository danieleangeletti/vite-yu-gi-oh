import { reactive } from "vue";

export const store = reactive({
  complete_base_url: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
  base_url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
  cards: [],
  archetypes_base_url: "https://db.ygoprodeck.com/api/v7/archetypes.php",
  archetypes: [],
  selected_archetype: "",
});
