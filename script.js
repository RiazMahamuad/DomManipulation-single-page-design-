var click_me1 = document.getElementById("Button1");//a tag id
var click_me2 = document.getElementById("Button2");
var click_me3 = document.getElementById("Button3");
var click_me4 = document.getElementById("Button4");



click_me1.addEventListener('click', function () {
    var colum_box2 = document.getElementById("Button"); // element block or nonr id
    colum_box2.style.display = "block";


    var addremove = document.getElementById("AddRemove");
    addremove.style.display = "none"
    var show_message=document.getElementById("hideMessage")
    show_message.style.display="none"
    var MOVER=document.getElementById("m_Over")
        MOVER.style.display="none"
   


});


click_me2.addEventListener('click', function (e) {
    var addremove = document.getElementById("AddRemove");
    addremove.style.display = "block"
    var mystyle = document.querySelector("#text")
    mystyle.style.display = "block"
   
    document.getElementById("addid").addEventListener('click',function(){
        var mystyle = document.getElementById("text")
        mystyle.classList.add("style");
        
    })
    document.getElementById("remId").addEventListener('click',function(){
        var mystyle = document.getElementById("text")
        mystyle.classList.remove("style");
        
        
    })


  /*   var mystyle = document.getElementById("#text")
    function addStyle() {
        mystyle.classList.add("style");
    }
    function removeStyle() {
        mystyle.classList.remove("style")
    } */


    var colum_box2 = document.getElementById("Button");
    colum_box2.style.display = "none";
    var show_message=document.getElementById("hideMessage")
    show_message.style.display="none"
    var MOVER=document.getElementById("m_Over")
    MOVER.style.display="none"

});

click_me3.addEventListener('click',function(){
    var hideMessage=document.getElementById("hideMessage")
    hideMessage.style.display="block"
    document.getElementById("hide-message").addEventListener('click',function()
    {
        var showTex = document.querySelector("#showTex")
        showTex.style.display="block"
    })
   


        var colum_box2 = document.getElementById("Button"); // element block or nonr id
        colum_box2.style.display = "none";
        var addremove = document.getElementById("AddRemove");
        addremove.style.display = "none"
        var showTex = document.querySelector("#showTex")
        showTex.style.display="none"
        var MOVER=document.getElementById("m_Over")
        MOVER.style.display="none"
})

click_me4.addEventListener('click',function()
{ 
    
    var MOVER=document.getElementById("m_Over")
    MOVER.style.display="block"
   

   

    var colum_box2 = document.getElementById("Button"); // element block or nonr id
    colum_box2.style.display = "none";
    var addremove = document.getElementById("AddRemove");
    addremove.style.display = "none"
    var showTex = document.querySelector("#showTex")
    showTex.style.display="none"
    var show_message=document.getElementById("hideMessage")
    show_message.style.display="none"

})

/* function hide()
{
    var show_message=document.getElementById("showTex")
    show_message.document.innerHTML="I am showing";
    show_message.style.display="block"
} */



function ClickMe() {
    alert("Hello! I am an alert box!")
}
function mOver(id)
{
    id.innerHTML = "Thank You"
}
function mOut(id)
{
    id.innerHTML="Mouse Over.."
}


