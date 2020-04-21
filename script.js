document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('input#btn').addEventListener('click',function(){
        let text = document.querySelector('input#text').value
        document.querySelector("div#result").innerHTML = upper(text)
    })

    function upper(text) {
        return text.toUpperCase()        
    }
})