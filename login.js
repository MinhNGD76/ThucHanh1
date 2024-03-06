document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); 
        
        const fullname = document.getElementById("fullname").value;
        const dob = document.getElementById("dob").value;
        const id_number = document.getElementById("id_number").value;
        const address = document.getElementById("address").value;

        if (fullname && dob && id_number && address) {
            window.location.href = "form.html";
        }else {
            alert("Please fill all the fields.");
        }
    });
});
  