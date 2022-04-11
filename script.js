function enterValue(row, col, val){
	var elementName = "r" + row + "c" + col;
	var elementVal = document.getElementById(elementName + "_value");
	var elementNote = document.getElementById(elementName + "_note");
	elementNote.hidden = true;
	elementVal.hidden = false;
	elementVal.textContent = val;
	return;
}

function hideNote(row, col, val){
	var elementName = "r" + row + "c" + col + "_note_" + val;
	var elementNote = document.getElementById(elementName);
	elementNote.hidden = true;
	return;
}

function revealNote(row, col, val){
	var elementName = "r" + row + "c" + col + "_note_" + val;
	var elementNote = document.getElementById(elementName);
	elementNote.hidden = false;
	return;
}

function initCell(row, col) {
	var cellBaseName = "r" + row + "c" + col;
	var cellHtml = "<div class=\"cell\">";
	cellHtml += "<div id=\"" + cellBaseName + "_note\" class=\"note_block\">";
	cellHtml += "<div class=\"note_row\">";
	cellHtml += "<div id=\"" + cellBaseName + "_note_1\" class=\"note_value\">1</div>";
	cellHtml += "<div id=\"" + cellBaseName + "_note_2\" class=\"note_value\">2</div>";
	cellHtml += "<div id=\"" + cellBaseName + "_note_3\" class=\"note_value\">3</div>";
	cellHtml += "</div>";
	cellHtml += "<div class=\"note_row\">";
	cellHtml += "<div id=\"" + cellBaseName + "_note_4\" class=\"note_value\">4</div>";
	cellHtml += "<div id=\"" + cellBaseName + "_note_5\" class=\"note_value\">5</div>";
	cellHtml += "<div id=\"" + cellBaseName + "_note_6\" class=\"note_value\">6</div>";
	cellHtml += "</div>";
	cellHtml += "<div class=\"note_row\">";
	cellHtml += "<div id=\"" + cellBaseName + "_note_7\" class=\"note_value\">7</div>";
	cellHtml += "<div id=\"" + cellBaseName + "_note_8\" class=\"note_value\">8</div>";
	cellHtml += "<div id=\"" + cellBaseName + "_note_9\" class=\"note_value\">9</div>";
	cellHtml += "</div>";
	cellHtml += "</div>";
	cellHtml += "<div id=\"" + cellBaseName + "_value\" class=\"cell_value\" hidden></div>";
	cellHtml += "</div>";
	return cellHtml;
}

function initBlock(blockRow, blockCol) {
	var blockHtml = "<div class=\"block\">";
	for (var i = 0; i < 3; i++) {
		var rowHtml = "<div class=\"block_row\">";
		for (var j = 0; j < 3; j++) {
			rowHtml += initCell(blockRow * 3 + i + 1, blockCol * 3 + j + 1);
		}
		rowHtml += "</div>";
		blockHtml += rowHtml;
	}
	blockHtml += "</div>";
	return blockHtml;
}

function initAllCells() {
	var entireHtml = "";
	for (var i = 0; i < 3; i++) {
		var rowHtml = "<div class=\"row\">";
		for (var j = 0; j < 3; j++) {
			rowHtml += initBlock(i, j);
		}
		rowHtml += "</div>";
		entireHtml += rowHtml;
	}
	document.getElementById("sodoku_interface").innerHTML = entireHtml;
}

window.onload = function () {
	initAllCells();
}