function addteacher()
{
    username=document.getElementById("user_name").value;
    localStorage.setItem("user_name",username);
    window.location="teacher-2.html";
    window.alert="welcome to Teacher's Tec"+" "+username;
}