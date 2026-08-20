let display1 = document.getElementById('ehealth');
let display2 = document.getElementById('health');
let atk1 = document.getElementById('atk1');
let atk2 = document.getElementById('atk2');
let atk3 = document.getElementById('atk3');
let atk4 = document.getElementById('atk4');
let collision = document.getElementById('collision');
let enemyAud = document.getElementById('eaud');
let dis = document.getElementById('display');
let image = document.getElementById('Pimg');
let eImg = document.getElementById('Eimg');
let finalboss = document.createElement('img');
let switchE = document.getElementById('imgE');
let EnemyH = 100;
let Player = 100;
let currentturn = "player";
let boss = false;

atk1.addEventListener("click", () =>{
    attack(40);
    collision.play();
    if (window.matchMedia("(max-width:720px)").matches){
        image.style.transform = "translateY(200px)";
    }

    else{
        image.style.transform = "translate(200px)";
    }
    
    dis.textContent = "You used Fireblast";
    setTimeout(function() {
        image.style.transform = "translate(0px, 0px)";
    }, 550);
})

atk2.addEventListener("click", () =>{
    attack(40);
    collision.play();
    if(window.matchMedia("(max-width:720px)").matches){
        image.style.transform = "translateY(200px)";
    }

    else{
        image.style.transform = "translate(200px)";
    }
    
    dis.textContent = "You used Ignite";
    setTimeout(function() {
        image.style.transform = "translate(0px, 0px)";
    }, 550);
})

atk3.addEventListener("click", () =>{
    attack(23);
    collision.play();
    if(window.matchMedia("(max-width:720px)").matches){
        image.style.transform = "translateY(200px)";
    }

    else{
        image.style.transform = "translate(200px)";
    }
    
    dis.textContent = "You used BloodLust";
    setTimeout(function() {
        image.style.transform = "translate(0px, 0px)";
    }, 550);
})

atk4.addEventListener("click", () =>{
    attack(20);
    collision.play();

    if(window.matchMedia("(max-width:720px)").matches){
        image.style.transform = "translateY(200px)";
    }

    else{
        image.style.transform = "translate(200px)";
    }
    
    dis.textContent = "You used MultiCast";
    setTimeout(function() {
        image.style.transform = "translate(0px, 0px)";
    }, 550);
   
})

function health(){
    display2.textContent = Player;
    display1.textContent = EnemyH;
}

function attack(dmg){
    if (currentturn === "player") {
        EnemyH -= dmg;
       
        if(EnemyH <= 0){
            EnemyH = 0;
            health();
            alert("You won!!!");
        
        }
        
        health();
        currentturn = "enemy"; 
        setTimeout(enemyatk, 10000);
            
    } 
}

function enemyatk(){

    if(!boss && EnemyH !== 0){
        Player -= 20;
        let enemymoves = ["Nether Blast", "Decrepify", "Nether Ward", "Life Drain"];
        let random = enemymoves[Math.floor(Math.random() * enemymoves.length)];

        switchE.classList.add('imgE');
        dis.textContent = "Pugna used: " + random;

        if(window.matchMedia("(max-width:720px)").matches){
            switchE.style.transform = "translateY(-200px)";
        }

        else{
            switchE.style.transform = "translateX(-200px)";
        }
        

        setTimeout(function(){
            switchE.style.transform = "translate(0px, 0px)";   
        }, 450);
        collision.play();
            
        if(Player <= 0){
            Player = 0;
            health();
            alert("You lost!!!");
        }

        currentturn = "player";
        health();
    }

    else if(EnemyH === 0 && !boss){
        eImg.remove();
        finalboss.src = './images/pudge.png';
        finalboss.classList.add('adolf');
        switchE.appendChild(finalboss);

        EnemyH = 150;
        boss = true;

        let status = document.getElementById('enemy');
        status.textContent = 'Final Boss: Pudge';
     
        currentturn = "enemy";
        health();
        setTimeout(enemyatk, 300);
       
    }

    else if(boss){
    
        Player -= 20;
        let enemymoves = ["Meat Hook", "Rot", "Meat Sheild", "Dismember"];
        let random = enemymoves[Math.floor(Math.random() * enemymoves.length)];

        dis.textContent = "Pudge used: " + random;

        finalboss.style.transform = "translate(0px, 0px)";
        if(window.matchMedia("(max-width:720px)").matches){
            finalboss.style.transform = "translateY(-200px)";
        }
        
        else{
            finalboss.style.transform = "translateX(-200px)";
        }

        setTimeout(function(){
            finalboss.style.transform = "translate(0px, 0px)";   
        }, 450);

        collision.play();
            
        if(Player <= 0){
            Player = 0;
            health();
            alert("You lost!!!");
        }

        if(boss &&  EnemyH === 0){
            boss = false;
            finalboss.remove();
            switchE.appendChild(eImg);
            let status = document.getElementById('enemy');
            status.textContent = 'Enemy: Pugna';
            dis.textContent = "Pugna used: " + random;
            Player = 100;
            EnemyH = 100;
            
        }
        
        currentturn = "player";
        health();
        
        
    }
  
}
