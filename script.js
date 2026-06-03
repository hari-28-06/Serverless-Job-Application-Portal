const API_URL =
"https://yapa3c8cf4.execute-api.ap-south-2.amazonaws.com/apply";

async function applyJob(){

const data={
fullName:document.getElementById("fullName").value,
email:document.getElementById("email").value,
phoneNumber:document.getElementById("phoneNumber").value,
qualification:document.getElementById("qualification").value,
experience:document.getElementById("experience").value,
skills:document.getElementById("skills").value,
coverLetter:document.getElementById("coverLetter").value
};

const response = await fetch(API_URL,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
});

const result=await response.text();

document.getElementById("result").innerHTML=result;
}