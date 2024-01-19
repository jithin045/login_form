login=()=>{
    let username=uname.value
    let password=pswd.value

    if(!username || !password){
        alert("Invalid credentials!! Unable to login !!!")
    }
    else{
        localStorage.setItem("username",username)
        console.log(`username:${username},password:${password}`);
        window.location="dashboard.html"
    }
}