
//http://localhost:3000/
// accessories data displaay









const url =`http://localhost:3000/`

fetch(url).then(response => {
          // console.log(response);
          return response.json();
        }).then(newdata => {
          if(newdata )
		{
		// document.getElementById("card-title").innerHTML=`<b>title:</b> ${newdata.title}`
		//console.log(newdata);
		// console.log(newdata.profile[0].image);
		let b= newdata.profile.length;
		//console.log(b);
		
		for (var i=0;i<b;i++)
		{
			//console.log(newdata.profile[i].image);
			var mainDiv=document.getElementById("post-card")
			var div =document.createElement('div')
			div.setAttribute('class','box')
			div.innerHTML =`<div class="col-sm-8"><div class="card-id"><b>ID:</b>${newdata.profile[i]._id}</div>
			<div class="card-name"><b>Name: </b>${newdata.profile[i].name}</div>
			
			<div class="card-title"><b></b>Title: ${newdata.profile[i].title}</div>
			<div class="card-price"><b>Price: </b>${newdata.profile[i].price}</div>
			<div class="card-description"><b>Description: </b>${newdata.profile[i].description}</div>

			  <a href="#"  class="btn btn-danger col-sm-8" id="card-button"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
       			</div>
       			<div class="col-sm-4">
			<b></b><img src="../uploads/${newdata.profile[i].image}" style="height:210px;" /></div>
		   
			`
			mainDiv.appendChild(div)
		}
	
		}
	   
        }).catch(err => {
          // Do something for an error here
          console.log("E" + err);
        });


// vechicle data display

const url2 =`http://localhost:3000/`

fetch(url2).then(response => {
          // console.log(response);
          return response.json();
        }).then(newdata => {
          if(newdata )
		{
		// document.getElementById("card-title").innerHTML=`<b>title:</b> ${newdata.title}`
		//console.log(newdata);
		// console.log(newdata.profile[0].image);
		let b= newdata.profile.length;
		//console.log(b);
		
		for (var i=0;i<b;i++)
		{//console.log(newdata.vehicles[i].cars);
			// console.log(newdata.profile[i]._id);
			var mainDiv=document.getElementById("vehicles-card")
			var div =document.createElement('div')
			div.setAttribute('class','box')
			div.innerHTML =`<div class="col-sm-8"><div class="vehicles-id"><b>ID:</b>${newdata.vehicles[i]._id}</div>
			<div class="vehicles-title"><b></b>Title: ${newdata.vehicles[i].title}</div>
			<div class="vehicles-price"><b>Price: </b>${newdata.vehicles[i].price}</div>
			<div class="vehicles-description"><b>Description: </b>${newdata.vehicles[i].description}</div>
				<div class="vehicles-fuel"><b>Fuel: </b>${newdata.vehicles[i].fuel}</div>
<div class="vehicles-category"><b>Car-Category: </b>${newdata.vehicles[i].cars}</div>

			  <a href="#"  class="btn btn-danger col-sm-8" id="card-button"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
       			</div>
       			<div class="col-sm-4">

			<b></b><img style="height:210px;"  src="../uploads/${newdata.vehicles[i].image}" class="img-fluid"/></div>
		   <br><br>
			`
			mainDiv.appendChild(div)
		}
	
		}
	   
        }).catch(err => {
          // Do something for an error here
          console.log(" " + err);
        });



	


const url3 =`http://localhost:3000/login`

fetch(url3).then(response => {
          // console.log(response);
          return response.json();
        }).then(newdata => {
          if(newdata )
		{
		// document.getElementById("card-title").innerHTML=`<b>title:</b> ${newdata.title}`
		//console.log(newdata);
		// console.log(newdata.profile[0].image);
		let b= newdata.profile.length;
		//console.log(b);
		
		for (var i=0;i<b;i++)
		{console.log(newdata.vehicles[i].cars);
			// console.log(newdata.profile[i]._id);
			var mainDiv=document.getElementById("vehicles-card")
			var div =document.createElement('div')
			div.setAttribute('class','box')
			div.innerHTML =`<div class="col-sm-8"><div class="vehicles-id"><b>ID:</b>${newdata.vehicles[i]._id}</div>
				</div>
       		
			`
			mainDiv.appendChild(div)
		}
	
		}
	   
        }).catch(err => {
          // Do something for an error here
          console.log(" " + err);
        });






function myfun(email,pass,url){
	// alert(email)
fetch('http://localhost:3000/login', {  
    method: 'POST',  
    headers: {  
      'Content-Type': 'application/json'  
    },  
     body: JSON.stringify({
    email: email,
    password: pass,
  })
})
.then(function(res){
	return res.json()
	console.log(res);
})
.then(function (data2) { 
	//alert("nfh")
const b= JSON.stringify(data2)
	//console.log(b);
	localStorage.setItem('user',b)

//alert("hello url")
	if(data2._id != undefined){
	 window.location = url ;
	}
	
}) 
.catch(function (error) {  
  console.log('Request failure: ', error);  
});



}









		
	














	




