/* Viagem para Sampa */


const precoGasolina = 4.91;
const precoEtanol = 4.19;

const kmPorLitroGasolina= 11.2;
const kmPorLitroEtanol = 7.9;

const distanciaEmKm = 448;

const litrosConsumidosGasolina = distanciaEmKm / kmPorLitroGasolina; 
const litrosConsumidosEtanol = distanciaEmKm / kmPorLitroEtanol;
const valorGastoGasolina = litrosConsumidosGasolina * precoGasolina;
const valorGastoEtanol = litrosConsumidosEtanol * kmPorLitroEtanol;

console.log(valorGastoEtanol.toFixed(2));
