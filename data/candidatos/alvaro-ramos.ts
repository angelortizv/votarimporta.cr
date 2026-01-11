import { Candidato } from "@/lib/data";
import { alvaroRamosPropuestas } from "../propuestas/alvaro-ramos";

export const alvaroRamos: Candidato = {
  id: "alvaro-ramos",
  nombre: "Alvaro Ramos",
  partido: "Partido Liberación Nacional",
  partidoSiglas: "PLN",
  foto: "https://cdn.apolitico.cr/storage/v1/object/public/candidate-photos/1762640882643_alvaro-ramos-chaves-690fc3cc767be.webp",
  color: "#187047",
  colores: ["#187047", "#ffffff"],
  ocupacion: "Informático, economista y profesor",
  ideologia: "Socialdemocracia",
  posicionPolitica: "Centro-Izquierda",
  redesSociales: {
    twitter: "https://twitter.com/laurafernandez",
    instagram: "https://instagram.com/laurafernandez",
    facebook: "https://facebook.com/laurafernandezcr",
    tiktok: "https://tiktok.com/@laurafernandez",
    youtube: "https://youtube.com/@laurafernandez",
    web: "https://laurafernandez.cr",
  },
  logros: [
    "Viceministro de Ingresos del Ministerio de Hacienda.",
    "Superintendente de Pensiones y Presidente Ejecutivo de la Caja Costarricense de Seguro Social.",
  ],
  bio: "Graduado en Informática Administrativa por la UNED, estudios en Economía por la Universidad de Costa Rica y Doctorado en Economía por la Universidad de California en Berkeley.",
  propuestas: alvaroRamosPropuestas,
}