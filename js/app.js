function getDogPic() {

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
        let dogPic = JSON.parse(this.responseText);
        document.getElementById("dog-pic").innerHTML = '<img src="' + dogPic.url + '">';
        } else if (this.readyState != 4) {
            document.getElementById("dog-pic").innerHTML = "LOADING!";
        } else {
                document.getElementById("dog-pic").innerHTML = "SOMETHING WENT WRONG!";
            }
        
        }
    
    ajax.open ("GET","https://random.dog/woof.json", true);
    ajax.send();

}

document.getElementById("refresh-dog-pic").addEventListener ("click", getDogPic)