export function segundosAMinutosYsegundos(totalSegundos) {
  // Calcula los minutos dividiendo los segundos entre 60 y redondeando hacia abajo
  const minutos = Math.floor(totalSegundos / 60);
  // Calcula los segundos restantes usando el operador módulo
  let segundos = totalSegundos % 60;

  if (segundos < 10) {
    segundos = `0${segundos}`;
  }

  // Retorna una cadena formateada con los minutos y segundos
  return `Duracion: ${minutos}:${segundos}`;
}
