/** 
 *  @fileOverview Final project of Udacity's GwG Front End Challenge Scholarship Program
 *
 *  @author       Daphne Tull
 *
 *  @requires     EXTERNAL:@link{https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js}
 */

$(document).ready(function(){


/* variable declarations */
let arrLength;
let color;
let colorRecordLength;
let currentColor;
let gridHeight;
let gridWidth;
let lastClickedCell;
let submitButton;


let colorRecord = [];
let lastClickedCells = [];


submitButton = $('input[value="Make My Grid"]');

submitButton.click(function(e){
	e.preventDefault();
	$('tr,td').remove();
	gridWidth = $('#inputWeight').val();
	gridHeight = $('#inputHeight').val();
	for (let rows = 0; rows<gridHeight;rows++){
		$('#pixelCanvas').append('<tr></tr>');
		for (let columns = 1; columns<=gridWidth; columns++){
			$("tr:nth-child(" + (rows + 1) + ")").append("<td></td>");
		}
	}
	$('#pixelCanvas').hide().fadeIn(1000);
	$('#gridControls').fadeIn(1000);
})

/*changing the color of cell when clicked on */

$('#pixelCanvas').on('click', 'td', function() {
	color = $('#colorPicker').val();
	currentColor = $(this).css("background-color");
	colorRecord.push(currentColor);
    lastClickedCell = $(this);
    lastClickedCells.push(lastClickedCell);
    lastClickedCell.css("background-color", color);
})

$('#undoButton').click(function(e){
	e.preventDefault();
	arrLength = lastClickedCells.length;
	colorRecordLength = colorRecord.length;
	lastClickedCells[arrLength - 1].css("background-color", colorRecord[colorRecordLength - 1]);
	colorRecord.pop();
	lastClickedCells.pop();
})


});

