import Image from "./Image";

const images = [
  "/src/assets/images/Albrecht_Durer_104.jpg",
  "/src/assets/images/Alfred_Sisley_110.jpg",
  "/src/assets/images/Amedeo_Modigliani_164.jpg",
  "/src/assets/images/Andrei_Rublev_51.jpg",
  "/src/assets/images/Andy_Warhol_88.jpg",
  "/src/assets/images/Camille_Pissarro_66.jpg",
  "/src/assets/images/Caravaggio_22.jpg",
  "/src/assets/images/Claude_Monet_33.jpg",
  "/src/assets/images/Diego_Rivera_30.jpg",
  "/src/assets/images/Diego_Velazquez_108.jpg",
  "/src/assets/images/Edgar_Degas_553.jpg",
  "/src/assets/images/Edouard_Manet_33.jpg",
  "/src/assets/images/Edvard_Munch_22.jpg",
  "/src/assets/images/El_Greco_33.jpg",
  "/src/assets/images/Eugene_Delacroix_22.jpg",
  "/src/assets/images/Francisco_Goya_222.jpg",
  "/src/assets/images/Frida_Kahlo_77.jpg",
  "/src/assets/images/Georges_Seurat_4.jpg",
  "/src/assets/images/Giotto_di_Bondone_22.jpg",
  "/src/assets/images/Gustav_Klimt_77.jpg",
  "/src/assets/images/Gustave_Courbet_7.jpg",
  "/src/assets/images/Henri_de_Toulouse-Lautrec_81.jpg",
  "/src/assets/images/Henri_Matisse_66.jpg",
  "/src/assets/images/Henri_Rousseau_66.jpg",
  "/src/assets/images/Hieronymus_Bosch_54.jpg",
  "/src/assets/images/Jackson_Pollock_22.jpg",
  "/src/assets/images/Jan_van_Eyck_57.jpg",
  "/src/assets/images/Joan_Miro_22.jpg",
  "/src/assets/images/Kazimir_Malevich_33.jpg",
  "/src/assets/images/Leonardo_da_Vinci_33.jpg",
  "/src/assets/images/Marc_Chagall_221.jpg",
  "/src/assets/images/Michelangelo_33.jpg",
  "/src/assets/images/Mikhail_Vrubel_22.jpg",
  "/src/assets/images/Pablo_Picasso_331.jpg",
  "/src/assets/images/Paul_Cezanne_33.jpg",
  "/src/assets/images/Paul_Gauguin_302.jpg",
  "/src/assets/images/Paul_Klee_20.jpg",
  "/src/assets/images/Peter_Paul_Rubens_22.jpg",
  "/src/assets/images/Pierre-Auguste_Renoir_88.jpg",
  "/src/assets/images/Piet_Mondrian_77.jpg",
  "/src/assets/images/Pieter_Bruegel_66.jpg",
  "/src/assets/images/Raphael_90.jpg",
  "/src/assets/images/Rembrandt_189.jpg",
  "/src/assets/images/Rene_Magritte_22.jpg",
  "/src/assets/images/Salvador_Dali_89.jpg",
  "/src/assets/images/Sandro_Botticelli_79.jpg",
  "/src/assets/images/Titian_221.jpg",
  "/src/assets/images/Vasiliy_Kandinskiy_12.jpg",
  "/src/assets/images/Vincent_van_Gogh_567.jpg",
  "/src/assets/images/William_Turner_32.jpg",
];
const Art = () => {
  return (
    <div>
      {images.map((e, idx) => (
        <Image image={e} key={idx} index={idx} />
      ))}
    </div>
  );
};
export default Art;
