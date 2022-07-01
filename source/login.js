var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    var checkUName = document.getElementById('checkuname').value;
    var checkPW = document.getElementById('checkpw').value;
    if (checkUName == "lily" && checkPW == "lily") {
        alert("Login successfully");
        return true;
        window.location = "#"; // Redirecting to other page.
    } else {
        attempt--; // Decrementing by one.
        document.getElementById("warning").innerHTML = "Wrong Username or Password. You have left "+ attempt + " attempt.";
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("checkuname").disabled = true;
            document.getElementById("checkpw").disabled = true;
            document.getElementById("loginbutton").disabled = true;
            document.getElementById("warning").innerHTML = "Your account is blocked now. Please refresh the website."
            return false;
        }
        return false;
    }
}