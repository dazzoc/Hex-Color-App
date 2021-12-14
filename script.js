// Variables (URL for API)
const URL = 'https://www.thecolorapi.com/id?hex=';

// Element References 
const $form = $('form');
const $input = $('input[type="text"]');
let $info = $('.info');
let $swatch = $('.swatchColor');
let $paint = $('.paint, .paint2, .paint3, .paint4');

// Event Listeners 
$form.on('submit', getHex);

// Functions 
// Get data from the user input of a hex code and call the render function
//prevent default and errors 
function getHex(evt) {
    evt.preventDefault();
    const userInput = $input.val();
    if (!userInput) return;
    $input.val('');
    $.ajax(URL + userInput).then(function (data){
        render(data);
        //console.log(data);
    }, function (error){
        console.log('Something Went Wrong');
        console.log(error);
    });
};

// Render the th's html to show API data
// Render the background-color of the color swatch
function render(hexData) {
    $info.html(`
            <th id="colorName">'${hexData.name.value}'</th>
            <th id="hexCode">${hexData.hex.value}</th>
            <th id="cmykCode">${hexData.cmyk.value}</th>
            <th id="rgbCode">${hexData.rgb.value}</th>
    `);
    $swatch.css("background-color", `${hexData.hex.value}`);
    $paint.css("background-color", `${hexData.hex.value}`)
};
