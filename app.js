window.onload = function(){
    var search = document.querySelector("button");
    search.addEventListener('click', clickHandler);
    var httpRequest = new XMLHttpRequest();
    
    function clickHandler(clickEvent){
        clickEvent.preventDefault();
        var url = "superheroes.php";
        httpRequest.onreadystatechange = fetchalert;
        httpRequest.open('GET', url, true);
        httpRequest.send();
    }
    function fetchalert(){
        if (httpRequest.readyState === XMLHttpRequest.DONE){
            if (httpRequest.status === 200){
                var response = httpRequest.responseText;
                alert(response);
            }
            else{
                alert("Unable to process this request")
            }
        }
    }
}