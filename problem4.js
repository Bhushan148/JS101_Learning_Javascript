//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

//username and password stored in the database while registering 
let database_user = "bhushan123@gmail.com";
let database_pass = "987poi";

//for login 
let user = "bhushan123@gmail.com";
let pass = "987poi";

if (database_user == user){

  if (database_pass == pass){
    console.log("login successfull");
    
  } else {
    console.log("incorrect password")
  }
  
} else {
  console.log("wrong credetials");
}