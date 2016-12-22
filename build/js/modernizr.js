/* Modernizr (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-shiv-load-cssclasses-addtest
 * Custom Tests: cssCheckedTest.js, positionStickyTest.js
 */
;Modernizr.addTest('csschecked', function () {
  return Modernizr.testStyles("#modernizr input {margin-left:0px;} #modernizr input:checked {margin-left: 20px;}", function (elem) {
	var chx = document.createElement('input');
	chx.type = "checkbox";
	chx.checked = "checked";
	
	elem.appendChild(chx);
	return elem.lastChild.offsetLeft >= 20;
  });
});


Modernizr.addTest('csspositionsticky', function () {
	var prop = 'position:';
	var value = 'sticky';
	var el = document.createElement('modernizr');
	var mStyle = el.style;
	
	mStyle.cssText = prop + Modernizr._prefixes.join(value + ';' + prop).slice(0, -prop.length);
	
	return mStyle.position.indexOf(value) !== -1;
});
;