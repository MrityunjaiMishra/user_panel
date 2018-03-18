function onChange()
            {
                var dtype = document.getElementById('adtype');
                var selCar = dtype.options[dtype.selectedIndex].value;
                console.log(selCar);
                if(selCar === 'A')
                {
                    
                    $("#building").css("display","block");
                    $("#bungalow").css("display","none");
                    $("#chawls").css("display","none");
                    $("#corporate").css("display","none");
                    $("#govtProps").css("display","none");
                    $("#miscel").css("display","none");
                }
                else if(selCar === "B")
                {
                    $("#building").css("display","none");
                    $("#bungalow").css("display","block");
                    $("#chawls").css("display","none");
                    $("#corporate").css("display","none");
                    $("#govtProps").css("display","none");
                    $("#miscel").css("display","none");
                }
                else if(selCar === "C")
                {
                    $("#building").css("display","none");
                    $("#bungalow").css("display","none");
                    $("#chawls").css("display","none");
                    $("#corporate").css("display","block");
                    $("#govtProps").css("display","none");
                    $("#miscel").css("display","none");
                }
                else if(selCar === "D")
                {
                    $("#building").css("display","none");
                    $("#bungalow").css("display","none");
                    $("#chawls").css("display","block");
                    $("#corporate").css("display","none");
                    $("#govtProps").css("display","none");
                    $("#miscel").css("display","none");
                }
                else if(selCar === "E")
                {
                    $("#building").css("display","none");
                    $("#bungalow").css("display","none");
                    $("#chawls").css("display","none");
                    $("#corporate").css("display","none");
                    $("#govtProps").css("display","block");
                    $("#miscel").css("display","none");
                }
                else if(selCar === "F")
                {
                    $("#building").css("display","none");
                    $("#bungalow").css("display","none");
                    $("#chawls").css("display","none");
                    $("#corporate").css("display","none");
                    $("#govtProps").css("display","none");
                    $("#miscel").css("display","block");
                }
            }
            
         