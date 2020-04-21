document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('input#btn-upper').addEventListener('click',function(){
        let text = document.querySelector('input#text').value
        document.querySelector("div#result").innerHTML = upper(text)
    })

    document.querySelector('input#btn-title').addEventListener('click',function(){
        let text = document.querySelector('input#text').value
        document.querySelector('div#result').innerHTML = titleCase(text)
    })
    document.querySelector('input#btn-copy').addEventListener('click', function(){
        document.querySelector('input#text').select()
        document.execCommand('copy');
    })

    function upper(text) {
        return text.toUpperCase()        
    }

    function titleCase(text){
        text = text.toLowerCase()
        text = text.split(' ')
        for(var count = 0; count < text.length; count++){
            text[count] = text[count].charAt(0).toUpperCase() + text[count].slice(1)
        }
        return text.join(' ')
    }

})