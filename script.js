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

function initCell(row, col){
	
}

