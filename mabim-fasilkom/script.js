function login () {
     var done = 0;
     var username = document.login.username.value;
     if (username == "Mabim" && pasword == "Mabim"){
        if (confirm("apakah anda ingin login?") == true) {
            window.location.href = "https//github.com/Rahmat Abdul Malik"
        } else{
            alert("login dibatalkam!");
        }
     } else{
        if (done == 0) {
            alert ("username/Password salah");
        }
     }
}