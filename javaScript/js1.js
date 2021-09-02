function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }


//   function AddNewUser()
//   {
//         var newU=document.getElementById("addnew").


//   }

function openForm() {
    //document.getElementById("myForm").style.display = "block";
    $("#myForm").slideDown();

  }
  
  function closeForm() {
    //document.getElementById("myForm").style.display = "none";
    $("#myForm").slideUp();


  }

var data=[
    {
        "FirstName": "Salman",
        "LastName": "Ahmed",
        "email": "salmanahmedfilms@gmail.com",
        "password": "sa12345",
        "Age": 21

    },

    {
        "FirstName": "Ayesha",
        "LastName": "Asad",
        "email": "ayesha@gmail.com",
        "password": "aa12345",
        "Age": 22

    },

    {
        "FirstName": "Eiman",
        "LastName": "Waheed",
        "email": "eiman.waheed@gmail.com",
        "password": "e12345",
        "Age": 21

    }
   
]

console.log(data);
console.log("------------");
var a=0;
var arr1={};
var obj= document.createElement("tr");




function addrow(fname, lname, email, pass, age, row1){

    var body=document.getElementById("tablebody");
    var tr=document.createElement('tr');
    //tr.setAttribute("id", row1.toString());
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(fname));
    tr.appendChild(td);
   // body.appendChild(tr)
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(lname));
    tr.appendChild(td);
   
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(email));
    tr.appendChild(td);

    var td = document.createElement('td');
    td.appendChild(document.createTextNode(pass));
    tr.appendChild(td);
   
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(age));
    tr.appendChild(td);
    var td = document.createElement('td');
   // td.setAttribute("id", row.toString());
    var btn1=document.createElement("button");
    btn1.innerText="x";
    btn1.setAttribute("id",row1);
    //btn1.setAttribute("status", "0");
    btn1.setAttribute("class", "button button2");
    td.appendChild(btn1);
    tr.appendChild(td);

  

    var td = document.createElement('td');
    
    var btn2=document.createElement("button");
    btn2.innerText="Edit";
    btn2.setAttribute("id", "edit");
    btn2.setAttribute("class", "button button2");
    btn2.setAttribute("id", "edit"+ row1 );
    td.appendChild(btn2);
    tr.appendChild(td);
    body.appendChild(tr);
    debugger;

}

function loadData()
{

  var row1=0;
  for(var k in data)
  {   

      var fname=data[k].FirstName;
      var lname=data[k].LastName;
      var email=data[k].email;
      var pass=data[k].password;
      var age=data[k].Age;

      console.log(fname);
      //var row=0;
    
    addrow(fname, lname, email, pass, age,row1);
    //debugger;
    //$("#"+ row1).on("click", "button", );
    $(document).on('click', '#' + row1, function(){
        //alert("hello");
      //    var ff=document.getElementById(row1).parentElement.id;
      this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);      
  });

    
    row1++;

  }

}




function SubmitUser(){
    debugger;
    var f_name=document.getElementById("f_name").value;
    var l_name=document.getElementById("l_name").value;
    var e_mail=document.getElementById("e_mail").value;
    var pass_word=document.getElementById("pass_word").value;
    var age=document.getElementById("age").value;
    var rr= $('#tablebody tr').length;
    addrow(f_name, l_name, e_mail, pass_word, age,rr);
    $(document).on('click', '#' + rr, function(){
        //alert("hello");
     //    var ff=document.getElementById(row1).parentElement.id;
     this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
     //alert("delete");
    });


}


function editUser(){





}