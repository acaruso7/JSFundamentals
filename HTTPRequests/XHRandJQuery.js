//XHR requests
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState==4 && this.status==200) {
        console.log(this.responseText);
    }
};
xhttp.open("GET", "http://myid.mockapi.io/api/v1/users", true);
xhttp.send();

//jQuery requests
import $ from jquery;
let promise = $.get("http://myid.mockapi.io/api/v1/users");
promise.then(
    data => console.log(data),
    error => console.log(error)
);

//skipped post requests because jquery is shit... use axios instead!!