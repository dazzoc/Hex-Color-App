const URL = 'https://www.thecolorapi.com/id?hex=f1cbcd';

$.ajax(URL).then(function (data){
    console.log(data);
});