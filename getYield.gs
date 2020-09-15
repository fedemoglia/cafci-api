/**
* Obtiene el rendimiento para una clase de un fondo entre 2 fechas
* @param {fund} fund número del fondo
* @param {fundClass} fundClass número de la clase
* @param {startDate} startDate fecha inicial
* @param {endDate} endDate fecha final
* @customfunction
**/
function getYield(fund, fundClass, startDate, endDate) {
  const finalDate = new Date(endDate);
  const url = `https://api.cafci.org.ar/fondo/${fund}/clase/${fundClass}/rendimiento/${startDate}/${formatDate(finalDate)}`;
  const response = UrlFetchApp.fetch(url).getContentText();
  return Number(JSON.parse(response).data.rendimiento);
}

function formatDate(fecha) {
  return Utilities.formatDate(fecha, "GMT -3", "yyyy-MM-dd");
}
