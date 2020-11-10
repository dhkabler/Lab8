function password()
{
    var firstPassword = document.getElementById("firstPass")
    var secondPassword = document.getElementById("secondPass")

    

    if(firstPassword.value.length >= 8 && secondPassword.value.length >= 8)
    {
        if(firstPassword.value === secondPassword.value)
        {
            
            alert("These passwords match! Your password has been set. Congrats!\n")
        }
        else
        {
            alert("These passwords do not match. Please try again.")
        }
    }
    else
    {
       alert("One of the passwords is not at least 8 characters. Please make the password longer.")
       
    }
}