const layout = [
    [
      {
        ru: ['ё', 'Ё'], en: ['`', '~'],  code: 192,
      },
      {
        ru: ['1', '!'], en: ['1', '!'],  code: 49,
      },
      {
        ru: ['2', '"'], en: ['2', '@'],  code: 50,
      },
      {
        ru: ['3', '№'], en: ['3', '#'],  code: 51,
      },
      {
        ru: ['4', ';'], en: ['4', '$'],  code: 52,
      },
      {
        ru: ['5', '%'], en: ['5', '%'],  code: 53,
      },
      {
        ru: ['6', ':'], en: ['6', '^'],  code: 54,
      },
      {
        ru: ['7', '?'], en: ['7', '&'],  code: 55,
      },
      {
        ru: ['8', '*'], en: ['8', '*'],  code: 56,
      },
      {
        ru: ['9', '('], en: ['9', '('],  code: 57,
      },
      {
        ru: ['0', ')'], en: ['0', ')'],  code: 48,
      },
      {
        ru: ['-', '_'], en: ['-', '_'],  code: 189,
      },
      {
        ru: ['=', '+'], en: ['=', '+'],  code: 187,
      },
      {
        ru: ['Backspace', 'Backspace'], en: ['Backspace', 'Backspace'],  code: 8,
      },
    ], [
      {
        ru: ['Tab', 'Tab'], en: ['Tab', 'Tab'],  code: 9,
      },
      {
        ru: ['й', 'Й'], en: ['q', 'Q'],  code: 81,
      },
      {
        ru: ['ц', 'Ц'], en: ['w', 'W'],  code: 87,
      },
      {
        ru: ['у', 'У'], en: ['e', 'E'],  code: 69,
      },
      {
        ru: ['к', 'К'], en: ['r', 'R'],  code: 82,
      },
      {
        ru: ['е', 'Е'], en: ['t', 'T'],  code: 84,
      },
      {
        ru: ['н', 'Н'], en: ['y', 'Y'],  code: 89,
      },
      {
        ru: ['г', 'Г'], en: ['u', 'U'],  code: 85,
      },
      {
        ru: ['ш', 'Ш'], en: ['i', 'I'],  code: 73,
      },
      {
        ru: ['щ', 'Щ'], en: ['o', 'O'],  code: 79,
      },
      {
        ru: ['з', 'З'], en: ['p', 'P'],  code: 80,
      },
      {
        ru: ['х', 'Х'], en: ['[', '{'],  code: 219,
      },
      {
        ru: ['ъ', 'Ъ'], en: [']', '}'],  code: 221,
      },
      {
        ru: ['\\', '/'], en: ['\\', '|'],  code: 220,
      },
    ], [
      {
        ru: ['Caps Lock', 'Caps Lock'], en: ['Caps Lock', 'Caps Lock'],  code: 20,
      },
      {
        ru: ['ф', 'Ф'], en: ['a', 'A'],  code: 65,
      },
      {
        ru: ['ы', 'Ы'], en: ['s', 'S'],  code: 83,
      },
      {
        ru: ['в', 'В'], en: ['d', 'D'],  code: 68,
      },
      {
        ru: ['а', 'А'], en: ['f', 'F'],  code: 70,
      },
      {
        ru: ['п', 'П'], en: ['g', 'G'],  code: 71,
      },
      {
        ru: ['р', 'Р'], en: ['h', 'H'],  code: 72,
      },
      {
        ru: ['о', 'О'], en: ['j', 'J'],  code: 74,
      },
      {
        ru: ['л', 'Л'], en: ['k', 'K'],  code: 75,
      },
      {
        ru: ['д', 'Д'], en: ['l', 'L'],  code: 76,
      },
      {
        ru: ['ж', 'Ж'], en: [';', ':'],  code: 186,
      },
      {
        ru: ['э', 'Э'], en: ['\'', '"'],  code: 222,
      },
      {
        ru: ['Enter', 'Enter'], en: ['Enter', 'Enter'],  code: 13,
      },
    ], [
      {
        ru: ['Shift', 'Shift'], en: ['Shift', 'Shift'],  code: 16,
      },
      {
        ru: ['я', 'Я'], en: ['z', 'Z'],  code: 90,
      },
      {
        ru: ['ч', 'Ч'], en: ['x', 'X'],  code: 88,
      },
      {
        ru: ['с', 'С'], en: ['c', 'C'],  code: 67,
      },
      {
        ru: ['м', 'М'], en: ['v', 'V'],  code: 86,
      },
      {
        ru: ['и', 'И'], en: ['b', 'B'],  code: 66,
      },
      {
        ru: ['т', 'Т'], en: ['n', 'N'],  code: 78,
      },
      {
        ru: ['ь', 'Ь'], en: ['m', 'M'],  code: 77,
      },
      {
        ru: ['б', 'Б'], en: [',', '<'],  code: 188,
      },
      {
        ru: ['ю', 'Ю'], en: ['.', '>'],  code: 190,
      },
      {
        ru: ['.', ','], en: ['/', '?'],  code: 191,
      },
      {
        ru: ['▲', '▲'], en: ['▲', '▲'],  code: 38,
      },
      {
        ru: ['Shift', 'Shift'], en: ['Shift', 'Shift'],  code: 316,
      },
    ], [
      {
        ru: ['Ctrl', 'Ctrl'], en: ['Ctrl', 'Ctrl'],  code: 17,
      },
      {
        ru: ['Win', 'Win'], en: ['Win', 'Win'],  code: 91,
      },
      {
        ru: ['Alt', 'Alt'], en: ['Alt', 'Alt'],  code: 18,
      },
      {
        ru: ['Space', 'Space'], en: ['Space', 'Space'],  code: 32,
      },
      {
        ru: ['Alt', 'Alt'], en: ['Alt', 'Alt'],  code: 318,
      },
      {
        ru: ['Ctrl', 'Ctrl'], en: ['Ctrl', 'Ctrl'],  code: 317,
      },
      {
        ru: ['◄', '◄'], en: ['◄', '◄'],  code: 37,
      },
      {
        ru: ['▼', '▼'], en: ['▼', '▼'],  code: 40,
      },
      {
        ru: ['►', '►'], en: ['►', '►'],  code: 39,
      }
    ]
  ];

let head = document.getElementsByTagName('HEAD')[0];  
let link = document.createElement('link'); 
link.rel = 'stylesheet';  
link.type = 'text/css'; 
link.href = 'style.css';  
head.appendChild(link); 

const SHIFT_KEY_CODE = 16
const CAPS_KEY_CODE = 20
let localStorageLang = localStorage.getItem('lang')
let lang = localStorageLang?localStorageLang:'ru'

let documentLayout = {}
let mainContainer = document.createElement("section")
mainContainer.classList.add("main")
mainContainer.style.marginLeft = "150px"
mainContainer.style.marginRight = "150px"

document.body.appendChild(mainContainer)
let keysContainer = document.createElement("div")
keysContainer.classList.add("keys")

let textArea = document.createElement("textarea")
textArea.onkeydown = (event)=>{
  let check = event.keyCode === 8 || 
  event.keyCode === 9 || 
  event.keyCode === 32 || 
  event.keyCode === 13 || 
  event.keyCode === 37 || 
  event.keyCode === 38 || 
  event.keyCode === 39 || 
  event.keyCode === 40
  if(!check){
    return false
  }
}
textArea.style.width = "100%"
textArea.style.height = "300px"
textArea.style.pointerEvents = 'visible'
textArea.style.background = "white"
textArea.style.marginBottom = "2%"
mainContainer.appendChild(textArea)
mainContainer.appendChild(keysContainer)

let style = {
    border: "solid",
    width:"!auto",
    margin: "5px",
    borderRadius: "10%",
    borderColor: "black",
    fontSize: "1.5em",
    padding: "15px",
    background: "white",
    textTransform: "none",
    display: "inline-block",
}

let styleOnPress = {
    background: "grey"
}

function setCaretPosition(ctrl, start, end) {
  if (ctrl.setSelectionRange) {
      ctrl.focus();
      ctrl.setSelectionRange(start, end);
  }
  else if (ctrl.createTextRange) {
      let range = ctrl.createTextRange();
      range.collapse(true);
      range.moveEnd('character', end);
      range.moveStart('character', start);
      range.select();
  }
}



const onMouseDown = (event)=>{
    event.target.style.background = styleOnPress.background
    setTimeout(()=>{
      if(event.target.innerText.length === 1 
        && event.target.innerText!== '◄'
        && event.target.innerText!== '▼'
        && event.target.innerText!== '►'
        && event.target.innerText!== '▲'
        ){
          insertAtCaret(textArea, event.target.innerText)
        }

        if(event.target.innerText === 'Enter'){
          insertAtCaret(textArea, "\n")
        }
        if(event.target.innerText === 'Tab'){
          insertAtCaret(textArea, "\t")
        }
        if(event.target.innerText === 'Space'){
          insertAtCaret(textArea, " ")
        }

        let start = textArea.selectionStart

        if(event.target.innerText == '◄'){
          setCaretPosition(textArea, start-1, start-1)
        }

        if(event.target.innerText == '►'){
          setCaretPosition(textArea, start+1, start+1)
        }
      event.target.style.background = style.background
    }, 150)
}

const generateLayout = (lang = 'ru', IsShiftPressed=false)=>{
    let shiftIndex = IsShiftPressed?1:0
    keysContainer.innerHTML = ''
    for (let index in layout) {
        let layer = document.createElement("div")
        for(let innerIndes in layout[index]){
            let key = layout[index][innerIndes]
            if(key){
              let keyDiv = documentLayout[key['code']]
                keyDiv = document.createElement("div");
                keyDiv.innerText = key[lang][shiftIndex];
                keyDiv.onmousedown =  onMouseDown
                Object.assign(keyDiv.style, style);
                keyDiv.classList.add(`_${key['code']}`)

                if(key['code'] === 32){
                  lang==='ru'?keyDiv.style.paddingLeft = "83px":keyDiv.style.paddingLeft = "77px"
                }else{
                  keyDiv.style.paddingLeft = "20px";
                }
                keyDiv.style.paddingRight = keyDiv.style.paddingLeft
                keyDiv.style.curssor = "default"
                layer.appendChild(keyDiv);
            }
    
        }
        keysContainer.appendChild(layer)
    }
}

const insertAtCaret = (txtarea,text) => {
  let scrollPos = txtarea.scrollTop;
  let strPos = 0;
  let br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ? 
    "ff" : (document.selection ? "ie" : false ) );
  if (br == "ie") { 
    txtarea.focus();
    let range = document.selection.createRange();
    range.moveStart ('character', -txtarea.value.length);
    strPos = range.text.length;
  }
  else if (br == "ff") strPos = txtarea.selectionStart;

  let front = (txtarea.value).substring(0,strPos);  
  let back = (txtarea.value).substring(strPos,txtarea.value.length); 
  txtarea.value=front+text+back;
  strPos = strPos + text.length;
  if (br == "ie") { 
    txtarea.focus();
    let range = document.selection.createRange();
    range.moveStart ('character', -txtarea.value.length);
    range.moveStart ('character', strPos);
    range.moveEnd ('character', 0);
    range.select();
  }
  else if (br == "ff") {
    txtarea.selectionStart = strPos;
    txtarea.selectionEnd = strPos;
    txtarea.focus();
  }
  txtarea.scrollTop = scrollPos;
}

const changeStyle = (keyCode, style, onkeyDown=false) => {
    let htmlKey = document.querySelector(`._${keyCode}`);
    if (htmlKey && htmlKey.style) {
        htmlKey.style.background = style.background
        if(!onkeyDown && htmlKey.innerText.length === 1 && keyCode!==37 && keyCode!==38 && keyCode!==39 && keyCode!==40){
            insertAtCaret(textArea, htmlKey.innerText)
        }
    }
    if(htmlKey.innerText === 'Tab'){
      insertAtCaret(textArea, "\t")
    }
}


document.addEventListener("keydown", (event) => {
  let isSwitchLayout = event.ctrlKey && event.shiftKey || event.altKey && event.shiftKey
  if(isSwitchLayout){
    lang==='ru'?lang='en':lang='ru'
    localStorage.setItem('lang', lang)
  }

  let isCapsPressed = event.getModifierState && event.getModifierState("CapsLock");
  if(event.keyCode === SHIFT_KEY_CODE){
    if(!isSwitchLayout){
      generateLayout(lang, isCapsPressed?false:true)
    }
    isCapsPressed?changeStyle(CAPS_KEY_CODE, styleOnPress):null
  }
  if(event.keyCode !== CAPS_KEY_CODE){
      changeStyle(event.keyCode, styleOnPress, true)
  }
})

document.addEventListener("keyup", (event) => {
  let isCapsPressed = event.getModifierState && event.getModifierState("CapsLock");
  if(event.keyCode === SHIFT_KEY_CODE){
    generateLayout(lang, isCapsPressed?true:false)
    isCapsPressed?changeStyle(CAPS_KEY_CODE, styleOnPress):null
  }

  if(event.keyCode !== CAPS_KEY_CODE){
    changeStyle(event.keyCode, style)
  }

  if(event.keyCode === CAPS_KEY_CODE){
    generateLayout(lang, isCapsPressed?true:false)
    let capStyle =  isCapsPressed?styleOnPress:style
    changeStyle(event.keyCode, capStyle)
  }

})


generateLayout(lang)

