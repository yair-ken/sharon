function textToHtml (text){
    let html=""
    for(i of text){
        if(i!="\n"){
html=html+i}
else{
    html=html+"<br/>"
}
        }
    return html
}