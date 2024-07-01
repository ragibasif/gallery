import Image from "./Image";

const images = [
  "images/Albrecht_Durer_104.jpg",
  "images/Alfred_Sisley_110.jpg",
  "images/Amedeo_Modigliani_164.jpg",
  "images/Andrei_Rublev_51.jpg",
  "images/Andy_Warhol_88.jpg",
  "images/Camille_Pissarro_66.jpg",
  "images/Caravaggio_22.jpg",
  "images/Claude_Monet_33.jpg",
  "images/Diego_Rivera_30.jpg",
  "images/Diego_Velazquez_108.jpg",
  "images/Edgar_Degas_553.jpg",
  "images/Edouard_Manet_33.jpg",
  "images/Edvard_Munch_22.jpg",
  "images/El_Greco_33.jpg",
  "images/Eugene_Delacroix_22.jpg",
  "images/Francisco_Goya_222.jpg",
  "images/Frida_Kahlo_77.jpg",
  "images/Georges_Seurat_4.jpg",
  "images/Giotto_di_Bondone_22.jpg",
  "images/Gustav_Klimt_77.jpg",
  "images/Gustave_Courbet_7.jpg",
  "images/Henri_de_Toulouse-Lautrec_81.jpg",
  "images/Henri_Matisse_66.jpg",
  "images/Henri_Rousseau_66.jpg",
  "images/Hieronymus_Bosch_54.jpg",
  "images/Jackson_Pollock_22.jpg",
  "images/Jan_van_Eyck_57.jpg",
  "images/Joan_Miro_22.jpg",
  "images/Kazimir_Malevich_33.jpg",
  "images/Leonardo_da_Vinci_33.jpg",
  "images/Marc_Chagall_221.jpg",
  "images/Michelangelo_33.jpg",
  "images/Mikhail_Vrubel_22.jpg",
  "images/Pablo_Picasso_331.jpg",
  "images/Paul_Cezanne_33.jpg",
  "images/Paul_Gauguin_302.jpg",
  "images/Paul_Klee_20.jpg",
  "images/Peter_Paul_Rubens_22.jpg",
  "images/Pierre-Auguste_Renoir_88.jpg",
  "images/Piet_Mondrian_77.jpg",
  "images/Pieter_Bruegel_66.jpg",
  "images/Raphael_90.jpg",
  "images/Rembrandt_189.jpg",
  "images/Rene_Magritte_22.jpg",
  "images/Salvador_Dali_89.jpg",
  "images/Sandro_Botticelli_79.jpg",
  "images/Titian_221.jpg",
  "images/Vasiliy_Kandinskiy_12.jpg",
  "images/Vincent_van_Gogh_567.jpg",
  "images/William_Turner_32.jpg",
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
