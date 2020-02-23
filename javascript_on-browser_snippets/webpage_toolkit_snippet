document.body.setAttribute('contenteditable', 'true');

var field = document.createElement("fieldset");
field.setAttribute('style', 'position:fixed; margin:50px 0px 0px 80%; height:65px; width:175px; border:2px solid #c47734;');
field.setAttribute('id', 'toolkit');
document.body.appendChild(field);

var btnBold = document.createElement('button');
btnBold.setAttribute('onclick', "document.execCommand('bold',false,null);");
btnBold.setAttribute('style', 'position:relative; display:inline-block; padding:15px; width:50px; height:60px; font-weight:bold; border:outset;');
btnBold.innerHTML = 'B';

var btnItalic = document.createElement('button');
btnItalic.setAttribute('onclick', "document.execCommand('italic',false,null)");
btnItalic.setAttribute('style', 'position:relative; display:inline-block; padding:15px; width:50px; height:60px; margin: 0px 10px 0px 10px; font-style: italic; border:outset;');
btnItalic.innerHTML = 'I';

var btnUnderline = document.createElement('button');
btnUnderline.setAttribute('onclick', "document.execCommand('underline',false,null)");
btnUnderline.setAttribute('style', 'position:relative; display:inline-block; padding:15px; width:50px; height:60px; text-decoration: underline; border:outset;');
btnUnderline.innerHTML = 'U';

document.getElementById('toolkit').appendChild(btnBold);
document.getElementById('toolkit').appendChild(btnItalic);
document.getElementById('toolkit').appendChild(btnUnderline);
