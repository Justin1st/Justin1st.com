$(document).ready(function(e) {   
    $("#referralsTab").click(function () {
        if(!(document.getElementById("services").style.display == "none")){
            document.getElementById("services").style.display = "none";
        }

        if(!(document.getElementById("about").style.display == "none")){
            document.getElementById("about").style.display = "none";
        }          

        $('#referalFiller').removeClass("red");

        document.getElementById("referrals").style.display = "block";  

        /*drop grow animation*/
        document.getElementById("referalDrainer").classList.add('drainerDrain');
        document.getElementById("referalDrainer").classList.add('red');
        document.getElementById("referralDrop").classList.add('referralsDropGrow');
        
        /*drop animation*/
        setTimeout( function(){
            $('#referalDrainer').removeClass("drainerDrain");
            $('#referalDrainer').removeClass("red");
            $('#referralDrop').addClass("referralsDropFall");
            $('#referalFiller').addClass("refDrainerFill");
        }, 900)

        //Make container visible
        setTimeout( function(){
            $('#referrals').addClass("show-visible");
        }, 1250)
        
        /*remove drop animation*/
        setTimeout( function(){
            $('#referralDrop').removeClass("referralsDropFall");
            $('#referralDrop').removeClass("referralsDropGrow");
        }, 1600)

        /*fill animation*/
        setTimeout( function(){
            $('#referalFiller').removeClass("refDrainerFill");
            $('#referalFiller').addClass("red");
        }, 2400)
    })

    $("#servicesTab").click(function () { 
        if(!(document.getElementById("about").style.display == "none")){
            document.getElementById("about").style.display = "none";
        }

        if(!(document.getElementById("referrals").style.display == "none")){
            document.getElementById("referrals").style.display = "none";
        }       
        
        $('#servicesFiller').removeClass("orange");
        
          document.getElementById("services").style.display = "block";  

                    /*drain animation*/
          document.getElementById("servicesDrainer").classList.add('drainerDrain');
          document.getElementById("servicesDrainer").classList.add('orange');
          document.getElementById("servicesDrop").classList.add('servicesDropGrow');

        setTimeout( function(){
            $('#servicesDrainer').removeClass("drainerDrain");
            $('#servicesDrainer').removeClass("orange");
            $('#servicesDrop').addClass("servicesDropFall");
            $('#servicesFiller').addClass("servDrainerFill");
        }, 900)

        //Make container visible
        setTimeout( function(){
            $('#services').addClass("show-visible");
        }, 1250)

        setTimeout( function(){
            $('#servicesDrop').removeClass("servicesDropFall");
            $('#servicesDrop').removeClass("servicesDropGrow");
        }, 1600)

        setTimeout( function(){
            $('#servicesFiller').removeClass("servDrainerFill");
            $('#servicesFiller').addClass("orange");
        }, 2400)
    })


    $("#aboutTab").click(function () {
        if(!(document.getElementById("services").style.display == "none")){
            document.getElementById("services").style.display = "none";
        }

        if(!(document.getElementById("referrals").style.display == "none")){
            document.getElementById("referrals").style.display = "none";
        }          

        $('#aboutFiller').removeClass("yellow");       

        document.getElementById("about").style.display = "block";  

            /*drain animation*/
            document.getElementById("aboutDrainer").classList.add('drainerDrain');
            document.getElementById("aboutDrainer").classList.add('yellow');
            document.getElementById("aboutDrop").classList.add('aboutDropGrow');

            $('#aboutDrainer').delay(900).queue(function() {  // Wait for 1.9 second.
            $('#aboutDrainer').removeClass("drainerDrain").dequeue();
            $('#aboutDrainer').removeClass("yellow").dequeue();
            $('#aboutDrop').addClass("aboutDropFall").dequeue();
            $('#aboutFiller').addClass("abDrainerFill").dequeue();
        });

        setTimeout( function(){
            $('#aboutDrainer').removeClass("drainerDrain");
            $('#aboutDrainer').removeClass("yellow");
            $('#aboutDrop').addClass("aboutDropFall");
            $('#aboutFiller').addClass("abDrainerFill");
        }, 900)

        //Make container visible
        setTimeout( function(){
            $('#about').addClass("show-visible");
        }, 1250)
        
        setTimeout( function(){
            $('#aboutDrop').removeClass("aboutDropFall");
            $('#aboutDrop').removeClass("aboutDropGrow");
        }, 1600)

        setTimeout( function(){
            $('#aboutFiller').removeClass("abDrainerFill");
            $('#aboutFiller').addClass("yellow");
        }, 2400)
    })

    $("#projectsTab").click(function () {
        if(!(document.getElementById("skills").style.display == "none")){
            document.getElementById("skills").style.display = "none";
        }

        if(!(document.getElementById("contact").style.display == "none")){
            document.getElementById("contact").style.display = "none";
        }      
        
        $('#projectsFiller').removeClass("green");
        
        document.getElementById("projects").style.display = "block";  

           /*drain animation*/
          document.getElementById("projectsDrainer").classList.add('drainerDrain');
          document.getElementById("projectsDrainer").classList.add('green');
          document.getElementById("projectsDrop").classList.add('projectsDropGrow');


        setTimeout( function(){
            $('#projectsDrainer').removeClass("drainerDrain");
            $('#projectsDrainer').removeClass("green");
            $('#projectsDrop').addClass("projectsDropFall");
            $('#projectsFiller').addClass("projDrainerFill");
        }, 900)

        //Make container visible
        setTimeout( function(){
            $('#projects').addClass("show-visible");
        }, 1250)
        
        setTimeout( function(){
            $('#projectsDrop').removeClass("projectsDropFall");
            $('#projectsDrop').removeClass("projectsDropGrow");
        }, 1600)

        setTimeout( function(){
            $('#projectsFiller').removeClass("projDrainerFill");
            $('#projectsFiller').addClass("green");
        }, 2400)
    })

    $("#skillsTab").click(function () {
        if(!(document.getElementById("contact").style.display == "none")){
            document.getElementById("contact").style.display = "none";
        }

        if(!(document.getElementById("projects").style.display == "none"))
        {
            document.getElementById("projects").style.display = "none";
        }          
          document.getElementById("skills").style.display = "block";  

        $('#skillsFiller').removeClass("blue");


        /*drain animation*/
        document.getElementById("skillsDrainer").classList.add('drainerDrain');
        document.getElementById("skillsDrainer").classList.add('blue');
        document.getElementById("skillsDrop").classList.add('skillsDropGrow');
       

        setTimeout( function(){
            $('#skillsDrainer').removeClass("drainerDrain");
            $('#skillsDrainer').removeClass("blue");
            $('#skillsDrop').addClass("skillsDropFall");
            $('#skillsFiller').addClass("skilDrainerFill");
        }, 900)

        //Make container visible
        setTimeout( function(){
            $('#skills').addClass("show-visible");
        }, 1250)

        setTimeout( function(){
            $('#skillsDrop').removeClass("skillsDropFall");
            $('#skillsDrop').removeClass("skillsDropGrow");
        }, 1600)

        setTimeout( function(){
            $('#skillsFiller').removeClass("skilDrainerFill");
            $('#skillsFiller').addClass("blue");
        }, 2400)
    })

    $("#contactTab").click(function () {
        if(!(document.getElementById("skills").style.display == "none")){
            document.getElementById("skills").style.display = "none";
        }

        if(!(document.getElementById("projects").style.display == "none")){
            document.getElementById("projects").style.display = "none";
        }        
        
        $('#contactFiller').removeClass("purple");       

        
          document.getElementById("contact").style.display = "block";  

                    /*drain animation*/
          document.getElementById("contactDrainer").classList.add('drainerDrain');
          document.getElementById("contactDrainer").classList.add('purple');
          document.getElementById("contactDrop").classList.add('contactDropGrow');


        setTimeout( function(){
            $('#contactDrainer').removeClass("drainerDrain");
            $('#contactDrainer').removeClass("purple");
            $('#contactDrop').addClass("contactDropFall");
            $('#contactFiller').addClass("conDrainerFill");
        }, 900)

        //Make container visible
        setTimeout( function(){
            $('#contact').addClass("show-visible");
        }, 1250)

        setTimeout( function(){
            $('#contactDrop').removeClass("contactDropFall");
            $('#contactDrop').removeClass("contactDropGrow");
        }, 1600)

        setTimeout( function(){
            $('#contactFiller').removeClass("conDrainerFill");
            $('#contactFiller').addClass("purple");
        }, 2400)
    })



    //Left and right project arrows
    $("#rightArrow").click(function () {

        var projectList = document.getElementById("projects").children;
        
        for(i = 0; i < projectList.length; i++){
            //If its the one currently displayed, hide it
            if(projectList.item(i).style.display == "block"){
                projectList.item(i).style.display = "none"
            }
            else{
                if(i + 1 != projectList.length){

                }
                   

            }

            
        }       
    })
 });





