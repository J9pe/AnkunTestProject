//define the launch as an object, which can implement both functions and properties
        var launch = {};
		
		
 
        //onlys shows the relevant rows as determined by the search string
        launch.activate = function() {
            //MAKE VARIABLES
			var playerMoney=100;
			var playerPerformance=0;
			var playerWeight=2;
			
			alert("YOU HAVE "+playerMoney+" DOLLAS!<br>YOU WEIGH "+playerWeight+" units.");
						
			var car= new Array();
			car.push(new CarType ( "Honda", 15, 7));
			car.push(new CarType ( "Kia" , 16, 7));
			car.push(new CarType ( "Ford", 17, 7));
			car.push(new CarType ( "BMW", 50, 9));
			car.push(new CarType ( "Toyota", 18, 7));
			car.push(new CarType ( "Porche", 100, 10));

			function CarType(name, price, performance) {
				this.price = price;
				this.performance = performance;
				this.name = name;
			}

			CarType.prototype.display = function () {
				console.log(this.price +", " + this.name +", " + this.performance);
			}


			var engines =new Array();
			engines.push(new EngineType ("Engine 1", 10, 1));
			engines.push(new EngineType ("Engine 2", 20, 2)); 
			engines.push(new EngineType ("Engine 3", 30, 3)); 
			engines.push(new EngineType ("Engine 4", 40, 4)); 
			engines.push(new EngineType ("Engine 5", 50, 5)); 
			engines.push(new EngineType ("Engine 6", 60, 6));  

			function EngineType(name, price, performance) {
				this.price = price;
				this.performance = performance;
				this.name = name;
			}

			EngineType.prototype.display = function () {
				console.log(this.price +", " + this.name +", " + this.performance);
				
			}

			var body =new Array();
			body.push(new BodyType ("Body 1", 10, 1));
			body.push(new BodyType ("Body 2", 20, 2)); 
			body.push(new BodyType ("Body 3", 30, 3)); 
			body.push(new BodyType ("Body 4", 40, 4)); 
			body.push(new BodyType ("Body 5", 50, 5)); 
			body.push(new BodyType ("Body 6", 60, 6));  

			function BodyType(name, price, performance) {
				this.price = price;
				this.performance = performance;
				this.name = name;
			}

			BodyType.prototype.display = function () {
				console.log(this.price +", " + this.name +", " + this.performance);
				
			}

			var wheels =new Array();
			wheels.push(new WheelsType ("Wheels 1", 10, 1));
			wheels.push(new WheelsType ("Wheels 2", 20, 2)); 
			wheels.push(new WheelsType ("Wheels 3", 30, 2)); 
			wheels.push(new WheelsType ("Wheels 4", 40, 3)); 
			wheels.push(new WheelsType ("Wheels 5", 50, 4)); 
			wheels.push(new WheelsType ("Wheels 6", 60, 4));  

			function WheelsType(name, price, performance) {
				this.price = price;
				this.performance = performance;
				this.name = name;
			}

			WheelsType.prototype.display = function () {
				console.log(this.price +", " + this.name +", " + this.performance);
				
			}

		
            var carChoiceString = document.getElementById('carChoice').value.toUpperCase();
            var carPartString = document.getElementById('carParts').value.toUpperCase();
			alert("YOUR choices are "+carChoiceString+" and "+carPartString+".");
			alert("If what you type does not match our data, <br>that thing that you typed will not be purchased.");
			for (var i=0;i<car.length;i++)
			{
		
			if (carChoiceString.toLowerCase()==(car[i].name.toLowerCase()))
				{

				document.write("<br>"+car[i].name+"<br>");
				playerMoney=playerMoney-car[i].price;
				playerPerformance=playerPerformance+car[i].performance;

			for (var x=0;x<car.length;x++)
					{
							if (
							(carPartString.toLowerCase()==(engines[x].name.toLowerCase()))
							)
							{
							document.write("<br>"+engines[x].name+"<br>");
							playerMoney=playerMoney-engines[x].price;
							playerPerformance=playerPerformance+engines[x].performance;
							}
					}
						
						
			for (var y=0;y<car.length;y++)
					{
							if (
							(carPartString.toLowerCase()==(body[y].name.toLowerCase()))
							)
							{
							document.write("<br>"+body[y].name+"<br>");
							playerMoney=playerMoney-body[y].price;
							playerPerformance=playerPerformance+body[y].performance;
							}
					}

			for (var z=0;z<car.length;z++)
					{
							if (
							(carPartString.toLowerCase()==(wheels[z].name.toLowerCase()))
							)
							{
							document.write("<br>"+wheels[z].name+"<br>");
							playerMoney=playerMoney-wheels[z].price;
							playerPerformance=playerPerformance+wheels[z].performance;
							}
					}
					
							
							
				}
			else{}//Then you need to Get a car
			}
			
			//for (i=0;i<6;i++)
			//{
			//engines[i].display();
			//}

			//for (i=0;i<6;i++)
			//{
			//car[i].display();
			//}

			//for (i=0;i<6;i++)
			//{
			//body[i].display();
			//}

			//for (i=0;i<6;i++)
			//{
			//wheels[i].display();
			//}

			playerPerformance=playerPerformance-playerWeight;
			
			document.write("If no output is shown, your input is invalid. <br> Return to your last page please.");
			alert("YOU HAVE "+playerMoney+" DOLLAS!<br>YOU WEIGH "+playerWeight+" units."); 
			alert("YOUR PERFORMANCE IS NOW "+playerPerformance);
			//setTimeout(launch.outputDistance1D(playerPerformance),1000); 
			document.write("YOUR STATS are reset... ");       
 }
 
        //enterActivate
        launch.enterActivate = function(e) {
            //checks if the user pressed the enter key, and if they did then run the launch
            var keycode;
            if (window.event) { keycode = window.event.keyCode; }
            else if (e) { keycode = e.which; }
            else { return false; }
            if (keycode == 13) {
                launch.activate();
            }
            else { return false; }
		}

	


        launch.outputDistance1D = function(a) {
		document.write("<br>DISTANCE:");       		
		function initText()
{
    var textScroller = document.getElementById('textScroller');
    var carDistance = "=";

    var c = 0;
    var interval = setInterval(function() { 
                          textScroller.innerHTML += carDistance[c]; 
                          c++; 
                          if(c >= playerPerformance) clearInterval(interval);
                   }, 1000);

}
		
			//var myVar= setTimeout(function(){document.write("=")},50);
		
function myStop(){clearMyInterval(myVar);}
		if (i>a)
		{myStop();
		document.write("<br>");
		}
		
        }

	
