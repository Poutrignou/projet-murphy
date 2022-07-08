const mainTextHtml = document.getElementById('main_text_html');
console.log(mainTextHtml)
const mainTextCss = document.getElementById('main_text_css')
let result = document.getElementById('result')
const btn = document.getElementById('btn')
const root = document.getElementById('root')
const barreProgression = document.getElementById('barre_progression')
let style = document.querySelector('style')
let reponse = 0
let inputMax = 0
let textLength = 0
    /***********************gining the value by default to response **************************************************/
inputMax = document.getElementById('max').value;
result.innerHTML = inputMax
reponse = result.innerHTML

/*************************************Btn giving value max ****************************************************/

btn.addEventListener('click', () => {
    inputMax = document.getElementById('max').value;
    result.innerHTML = inputMax
    reponse = result.innerHTML
    mainTextHtml.setAttribute("maxlength", inputMax);
})

/*********************************************Count and stop writing carac*************************************/
// .replace(/(<([^>]+)>)/gi, "") pas reussi a le rentrer dnas mon code.
mainTextHtml.addEventListener("keyup", (e) => {

    textLength = e.target.textLength
    result.innerHTML = reponse - textLength
    let resultUn = result.innerHTML
    if (resultUn <= 0) {
        result.innerHTML = "0"
    }
    if (textLength > inputMax) {
        mainTextHtml.classList.add('main_text_html_class')
    }
    if ((0.5 * inputMax) < textLength) {
        document.getElementById('barre_progression').style.backgroundColor = "orange"
        document.getElementById('barre_progression').style.width = "75px"
    }
    if ((0.8 * inputMax) < textLength) {
        document.getElementById('barre_progression').style.backgroundColor = "red"
        document.getElementById('barre_progression').style.width = "100px"
    }
    if ((0.5 * inputMax) > textLength) {
        document.getElementById('barre_progression').style.backgroundColor = "green"
        document.getElementById('barre_progression').style.width = "50px"
    }
});

/************************************************************Selection list in html ****************************/

let allItemsSelect = document.querySelectorAll('.select')
button_selection_tag.addEventListener("click", () => {
    allItemsSelect.forEach((item) => {
        switch (item.value) {
            case "div":
                mainTextHtml.value += "<div></div>"
                break;
            case "h1":
                mainTextHtml.value += "<h1></h1>"
                break;
            case "h2":
                mainTextHtml.value += "<h2></h2>"
                break;
            case "h3":
                mainTextHtml.value += "<h3></h3>"
                break;
            case "p":
                mainTextHtml.value += "<p></p>"
                break;
            case "i":
                mainTextHtml.value += "<i></i>"
                break;
            case "a":
                mainTextHtml.value += "<a></a>"
                break;
            default:
                break;
        }
    })
})

/***************************************************write Html********************************************/

mainTextHtml.addEventListener("keyup", (e) => {
        textHtmlContent = e.target.value
        console.log(textHtmlContent)
        root.innerHTML = textHtmlContent
    })
    /*********************************************Write css in head*******************************************/

mainTextCss.addEventListener("keyup", () => {
    style.innerHTML = mainTextCss.value
})

/*************************************************Mouse over*****************************************************/
mainTextHtml.addEventListener("mouseover", (e) => {
    e.target.style.border = "2px solid blue";
    mainTextHtml.addEventListener("mouseout", (e) => {
        e.target.style.border = "";
    })
})

mainTextCss.addEventListener("mouseover", (e) => {
        e.target.style.border = "2px solid blue";
        mainTextCss.addEventListener("mouseout", (e) => {
            e.target.style.border = "";
        })
    })
    /***************************************************************************************************************/
let allColorSelected = document.querySelectorAll('.select-color')
button_selection_color.addEventListener('click', () => {
    allColorSelected.forEach((item) => {
        switch (item.value) {
            case "blue":
                mainTextCss.value += "{color:blue"
                break;
            case "red":
                mainTextCss.value += "{color:red"
                break;
            case "orange":
                mainTextCss.value += "{color:orange"
                break;
            case "purple":
                mainTextCss.value += "{color:purple"
                break;
            case "green":
                mainTextCss.value += "{color:green"
                break;
            case "grey":
                mainTextCss.value += "{color:grey"
                break;
            default:
                break;
        }
    })
})