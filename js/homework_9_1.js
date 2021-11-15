$(document).ready(function(){
	let all_divs = [];
	let $count = 999;
	let $number_of_multiplicity = 3;
	let $number_of_multiplicity_2 = 15;
	$( "body" ).attr({'style':'display:flex;width:fit-content;'
})
	function createSquares() {
		for (let $i = 0; $i <= $count; $i++) {
			all_divs[$i] = $('<div>').attr({
				id : $i + 1,
				'style':'background-color:deepskyblue; width:70px; height:70px; margin:auto 1px;'
			});
			$( "body" ).append(all_divs[$i]);
		}
	}
	function purpleSquares() {
		for ($i = 0; $i <= $count; $i++) {
			all_divs[$i].attr({
				'style':'background-color:purple; width:100px; height:100px; margin:auto 1px;'
			});
		}
	}
	function getNumbersOfSquares() {
		for ($i = 0; $i <= $count; $i++) {
			all_divs[$i].attr({
				'style':'background-color:purple; font-size:30px; align-items:center; text-align:center; color:white; width:100px; height:100px; margin:auto 1px; display: grid;'
			});
			all_divs[$i].html($i+1);
		}
	}
	function colorSquaresAndCreateTriangles() {
		for ($i = 0; $i <= $count; $i++) {
			if (($i+1) % $number_of_multiplicity_2 === 0) {
				all_divs[$i].attr({
					'style':'border-left: 60px solid white; border-right: 60px solid white; border-bottom: 100px solid purple;; font-size:30px; align-items:center; text-align:center; width:0; height:0; margin:auto 1px; display: grid;'
				});	
			}
			else if (($i + 1) % $number_of_multiplicity === 0) {
				all_divs[$i].attr({
					'style':'background-color:red; font-size:30px; align-items:center; text-align:center; color:white; width:100px; height:100px; margin:auto 1px; display: grid;'
				});	
			} 
		}
	}
function deleteRedSquares() {
		for ($i = 0; $i <= $count; $i++) {
			if (($i+1) % $number_of_multiplicity_2 === 0) {
				all_divs[$i].attr({
					'style':'border-left: 60px solid white; border-right: 60px solid white; border-bottom: 100px solid purple;; font-size:30px; align-items:center; text-align:center; width:0; height:0; margin:auto 1px; display: grid;'
				});	
			}
			else if (($i + 1) % $number_of_multiplicity === 0) {
				all_divs[$i].remove();
			} 
		}
	}
	setTimeout(createSquares, 2000);
	setTimeout(purpleSquares, 4000);
	setTimeout(getNumbersOfSquares, 6000);
	setTimeout(colorSquaresAndCreateTriangles, 8000);
	setTimeout(deleteRedSquares, 10000);
});