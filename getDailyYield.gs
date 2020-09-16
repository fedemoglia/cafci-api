/**
* Obtiene el rendimiento del día actual para una clase de un fondo
* @param {fund} fund número del fondo
* @param {fundClass} fundClass número de la clase
* @customfunction
**/
function getDailyYield(fund, fundClass) {
  const url = `https://api.cafci.org.ar/fondo/${fund}/clase/${fundClass}/ficha`;
  const response = UrlFetchApp.fetch(url).getContentText();
  return Number(JSON.parse(response).data.info.diaria.rendimientos.day.rendimiento);
}
