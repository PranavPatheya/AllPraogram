function checkData(){
    var enterEmail = document.getElementById('email').value;
    var enterPwd  = document.getElementById('pwd').value;



    var getEmail=localStorage.getItem('userEmail');
    var getEmail=localStorage.getItem('userPwd');


    if(enterEmail == getEmail)
    {
        if(enterPwd == getPwd)
        {
            alert("Login Successful");
        }
        else
        {
            alert("Wrong password");
        }
    } 
    else
    {
        alert("invalid Details");
    }
}
