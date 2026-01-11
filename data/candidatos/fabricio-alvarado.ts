import { Candidato } from "@/lib/data";
import { fabricioAlvaradoPropuestas } from "../propuestas/fabricio-alvarado";

export const fabricioAlvarado: Candidato = {
  id: "fabricio-alvarado",
  nombre: "Fabricio Alvarado",
  partido: "Partido Nueva República",
  partidoSiglas: "PNR",
  foto: "https://cdn.apolitico.cr/storage/v1/object/public/candidate-photos/1767982310079_fabricio-6-copy.jpg",
  color: "#1867ac",
  colores: ["#1867ac", "#5dc0da", "#ffffff"],
  ocupacion: "Periodista, conductor y productor en radio y televisión.",
  ideologia: "Conservadurismo republicado liberal",
  posicionPolitica: "Económicamente Izquierda",
  redesSociales: {
    twitter: "https://twitter.com/laurafernandez",
    instagram: "https://instagram.com/laurafernandez",
    facebook: "https://facebook.com/laurafernandezcr",
    tiktok: "https://tiktok.com/@laurafernandez",
    youtube: "https://youtube.com/@laurafernandez",
    web: "https://laurafernandez.cr",
  },
  logros: [
    "Periodista, conductor y productor en radio y televisión.",
    "Diputado de la República (2014–2018).",  
    "Fundador del Partido Nueva República (2019) y candidato presidencial en 2018.",
  ],
  bio: "Bachiller en Ciencias de la Comunicación Colectiva por la Universidad de Costa Rica (2022).",
  propuestas: fabricioAlvaradoPropuestas,
}