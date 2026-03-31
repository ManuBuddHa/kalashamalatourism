console.log("CONNECTED")
    let name_error = document.querySelector('#name_error');
    let phone_error = document.querySelector('#phone_error');
    let email_error = document.querySelector('#email_error');
    let feedback_error = document.querySelector('#feedback_error');
let feed = document.querySelector('#feed');
feed.addEventListener('reset',()=>{
    name_error.textContent = "";
    phone_error.textContent = "";
    email_error.textContent = "";
    feedback_error.textContent = "";
    feed.classList.remove('invalid');
})
feed.addEventListener('submit', function (e) {
    e.preventDefault();
    let usrname = document.querySelector('#name').value.trim();
    let phone = document.querySelector('#phone').value.trim();
    let email = document.querySelector('#email').value.trim();
    let feedback = document.querySelector('#feedback').value.trim();

    if (usrname === "") {
        name_error.textContent = "*Please Enter a Valid Name";
        feed.classList.add('invalid');
        return;
    }
    else{
        name_error.textContent = "";
    }
    if (phone.length != 10) {
        phone_error.textContent = "*Please Enter a Valid Phone Number";
        return;
    }
    else{
        phone_error.textContent = "";
    }
    if (email === "") {
        email_error.textContent = "*Please Enter a Valid Email Address";
        return;
    }
    else{
        email_error.textContent = "";
    }
    if (feedback === "") {
        feedback_error.textContent = "*Please Enter Valid Feedback/Complaint";
        return;
    }
    else{
        feedback_error.textContent = "";
    }
    alert("Feedback Submitted Successfully!")
})
