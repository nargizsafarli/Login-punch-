    
let myRegisterForm=document.querySelector(".myForm")
if(document.title.includes("Register")){
  
passEyeInput=document.getElementById("password")
select=document.getElementById("select")

select.addEventListener("click",function(){
    if(passEyeInput.type==="password"){
        passEyeInput.type="text"
       select.innerHTML=`
        <i class="fa-solid fa-eye"></i>  `
    }
    else{
        passEyeInput.type="password"
        select.innerHTML=`
      <i class="fa-solid fa-eye-slash"></i>
        `
    }
})
    

myRegisterForm.addEventListener("submit",function(event){
    event.preventDefault();
    let username=document.getElementById("fullname").value.trim();
    let password=document.getElementById("password").value.trim();
    let email=document.getElementById("email").value.trim();
    let phone=document.getElementById("phone").value.trim();


    const usernameRegex =/^[a-zA-Z0-9]{3,13}$/;
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const phoneRegex=/^\d{6,18}$/;
    
    let isValid=true
    if(!usernameRegex.test(username)){
        document.getElementById("fullnameError").innerText=
        "Username must contain at least 3 characters, uppercase letter."
        isValid=false
    }
    else{
        document.getElementById("fullnameError").innerText=""
        
    }
    if(!phoneRegex.test(phone)){
        document.getElementById("phoneError").innerText=
        "Phone must be at least 6 characters long"
        isValid=false
    }
    else{
        document.getElementById("phoneError").innerText=""
       
    }
    
    if(!emailRegex.test(email)){
        document.getElementById("emailError").innerText=
        "Email must be a valid Gmail address (e.g., example@gmail.com)"
        isValid=false
    }
    else{
        document.getElementById("emailError").innerText=""
       
    }
    
    if(!passwordRegex.test(password)){
        document.getElementById("passwordError").innerText=
        "Password must be at least 6 characters long"
        isValid=false
    }
    else{
        document.getElementById("passwordError").innerText=""
       
    }
    if(!isValid){
        return;
    }
    
       let users = JSON.parse(localStorage.getItem("users")) || [];
       let existingUser = users.some(user => user.email === email);
       if(existingUser){
          alert("Bu email artiq mövcuddur!");
          return
    
       }
       else{
          let newUser = {username,password,email,phone };
          users.push(newUser);
          localStorage.setItem("users", JSON.stringify(users));       
       }
       if(isValid){
        alert("qeydiyyatiniz ugurla elave olundu")
        myRegisterForm.reset();
        window.location.href="login.html"
       }
    })
}




if(document.title.includes("Login")){

    document.getElementById("select2").addEventListener("click", function(){
        if(document.getElementById("loginPassword").type==="password"){
            document.getElementById("loginPassword").type="text"
            document.getElementById("select2").innerHTML='<i class="fa-solid fa-eye"></i>'
        }
        else{
              document.getElementById("loginPassword").type="password"
              document.getElementById("select2").innerHTML=`<i class="fa-solid fa-eye-slash"></i>`
        }
    })

    let myLoginForm=document.querySelector(".myLogin")
    myLoginForm.addEventListener("submit",function(event){
        event.preventDefault();
    
        let loginEmail = document.getElementById("loginEmail").value.trim();
        let loginPassword = document.getElementById("loginPassword").value.trim();
    
        let users=JSON.parse(localStorage.getItem("users"))||[];
        let foundUser = users.find(user => user.email === loginEmail && user.password === loginPassword);
        if(foundUser){
            alert("Giris ugurla tamamlandi");
            myLoginForm.reset()
            document.getElementById("loginError").style.display="none";
        }
        else{
             document.getElementById("loginError").innerText=
           "Invalid password or Email"
            document.getElementById("loginError").style.display=
           "block"
        }
    })
}



