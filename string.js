// Validation form links
function validateform(){
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const zipcode = document.getElementById("zipcode").value;
//Validation requirements
    let fullname = firstname + " " + lastname;
    let fullzip = zipcode + "";
    let lengthname = fullname.length;
    let lengthzip = fullzip.length;
//Validation "consequence"
    if (lengthname > 10 && lengthzip == 5) {

        alert("good answer!");
    } else{
        alert("bad answer!")
    }
}