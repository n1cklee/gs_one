var xhr= new XMLHttpRequest(); 
//true is for asynchronous, false is for synchronous 
xhr.open("GET", "http://ec2-23-22-31-156.compute-1.amazonaws.com:3000/", true); 

xhr.onreadystatechange = function(){ 
if (xhr.readyState == 4){ 
if(xhr.status != 200){ 
//do something 
} 
else{ 
result = xhr.responseText; 
print(result);
document.writeln("success");
} 
} 
}
xhr.send(); 
