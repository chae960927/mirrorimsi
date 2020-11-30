/* NodeJs 샘플 코드 */

var request = require('request');

var url = 'http://openapi.gbis.go.kr/ws/rest/busarrivalservice/station';
 var queryParams = '?' + encodeURIComponent('ServiceKey') + '=1lnEBfZuIzbVr0Tt8cu5Bd9BELtVZf62scquk4Z%2F%2FlUO5uCe3ZvmL89Z9w4pIyftvjRpwHkQuWwW1HzOYOKcGA%3D%3D';
  /* Service Key*/ queryParams += '&' + encodeURIComponent('serviceKey') + '=' + encodeURIComponent('1234567890'); 
                   queryParams += '&' + encodeURIComponent('stationId') + '=' + encodeURIComponent('200000078'); 

request({ url: url + queryParams, method: 'GET' }, function (error, response, body) { 
    console.log('Status', response.statusCode); 
    console.log('Headers', JSON.stringify(response.headers)); 
    console.log('Reponse received', body); 

});