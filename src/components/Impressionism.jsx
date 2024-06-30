import Image from "./Image";

const images = [
  "/src/assets/images/impressionism/a_creek_in_st._thomas_(virgin_islands)_1985.64.29.jpg",
  "/src/assets/images/impressionism/a_king_charles_spaniel_1970.17.36.jpg",
  "/src/assets/images/impressionism/achille_de_gas_in_the_uniform_of_a_cadet_1963.10.123.jpg",
  "/src/assets/images/impressionism/alexander_and_bucephalus_1997.57.1.jpg",
  "/src/assets/images/impressionism/beach_scene_at_trouville_1983.1.14.jpg",
  "/src/assets/images/impressionism/claude_monet_1985.64.35.jpg",
  "/src/assets/images/impressionism/concert_at_the_casino_of_deauville_1985.64.3.jpg",
  "/src/assets/images/impressionism/diana_1963.10.205.jpg",
  "/src/assets/images/impressionism/duchess_de_fitz-james_1963.10.23.jpg",
  "/src/assets/images/impressionism/edmond_maitre_1985.64.2.jpg",
  "/src/assets/images/impressionism/en_route_pour_la_peche_(setting_out_to_fish)_2014.79.32.jpg",
  "/src/assets/images/impressionism/festival_in_the_harbor_of_honfleur_1983.1.10.jpg",
  "/src/assets/images/impressionism/flowers_in_a_vase_1983.1.32.jpg",
  "/src/assets/images/impressionism/girl_with_a_hoop_1963.10.58.jpg",
  "/src/assets/images/impressionism/horse_and_boats_(study_for__bathers_at_asnieres_)_2014.18.55.jpg",
  "/src/assets/images/impressionism/interior,_after_dinner_1983.1.26.jpg",
  "/src/assets/images/impressionism/jetty_and_wharf_at_trouville_1983.1.9.jpg",
  "/src/assets/images/impressionism/madame_camus_1963.10.121.jpg",
  "/src/assets/images/impressionism/mademoiselle_sicot_1963.10.209.jpg",
  "/src/assets/images/impressionism/masked_ball_at_the_opera_1982.75.1.jpg",
  "/src/assets/images/impressionism/nude_1995.47.1.jpg",
  "/src/assets/images/impressionism/odalisque_1963.10.207.jpg",
  "/src/assets/images/impressionism/oysters_1962.3.1.jpg",
  "/src/assets/images/impressionism/peter_a._b._widener_1942.9.101.jpg",
  "/src/assets/images/impressionism/portrait_of_a_lady_1952.9.1.jpg",
  "/src/assets/images/impressionism/rene_de_gas_1995.47.8.jpg",
  "/src/assets/images/impressionism/sainte-adresse_1990.59.1.jpg",
  "/src/assets/images/impressionism/self-portrait_1963.10.25.jpg",
  "/src/assets/images/impressionism/self-portrait_with_white_collar_1995.47.7.jpg",
  "/src/assets/images/impressionism/the_banks_of_the_oise_1963.10.214.jpg",
  "/src/assets/images/impressionism/the_dead_toreador_1942.9.40.jpg",
  "/src/assets/images/impressionism/the_old_musician_1963.10.162.jpg",
  "/src/assets/images/impressionism/the_tragic_actor_(rouviere_as_hamlet)_1959.3.1.jpg",
  "/src/assets/images/impressionism/two_women_chatting_by_the_sea,_st._thomas_1985.64.30.jpg",
  "/src/assets/images/impressionism/woman_with_a_parasol_-_madame_monet_and_her_son_1983.1.29.jpg",
];
const Impressionism = () => {
  return (
    <div>
      {images.map((e, idx) => (
        <Image image={e} key={idx} index={idx} />
      ))}
    </div>
  );
};
export default Impressionism;
