var c_name="";
function myFunction() {
  c_name = document.getElementById("mySearch").value;
  
  const ul=document.getElementById("country");
const url='https://restcountries.eu/rest/v2/name/'+c_name;
fetch(url)
.then(response => response.json())
  .then(data => {
    var img = document.createElement("img");
    img.src = data.flag;
    img.onclick = function() {
      window.location.href = 'details.html';
  };
    document.getElementById("card").appendChild(img);
    var para = document.createElement("P");
    para.innerHTML = c_name.toUpperCase();
    document.getElementById("card").appendChild(para);
    
  });
}
function details_Function()
{
  const url='https://restcountries.eu/rest/v2/name/'+c_name;
fetch(url)
.then(response => response.json())
  .then(data => {
    for(var i=0;i<Object.keys(data).length;i++)
    { var str=Object.keys(data)[i]+" "+Object.values(data)[i][0];
    var para = document.createElement("P");
    para.innerHTML = str;
    document.getElementById("details").appendChild(para);
    }
  });
}

function createNode(element)
{
  return document.createElement(element);
}
function append(parent,el)
{
  return parent.appendChild(el);
}
