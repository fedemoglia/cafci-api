/**
* Obtiene el rendimiento para una clase de un fondo entre 2 fechas
* @param {fund} número del fondo
* @param {fundClass} número de la clase
* @param {startDate} fecha inicial
* @param {endDate} fecha final
* @customfunction
**/
function getYield(fund, fundClass, startDate, endDate) {
  const urlBase = `https://api.cafci.org.ar/fondo/${fund}/clase/${fundClass}/rendimiento/${startDate}/${endDate}`;
  const response = UrlFetchApp.fetch(urlBase);
  return Number(JSON.parse(response.getContentText()).data.rendimiento);
}
