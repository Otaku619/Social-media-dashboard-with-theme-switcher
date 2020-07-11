var tog = localStorage.getItem("toggle");
if(tog==undefined) tog=0;
if (tog == 1){
    dark();
    Array.from(document.getElementsByClassName('card')).forEach((i) => {
        i.addEventListener("mouseover", () => {
            i.style.filter = "brightness(150%)"
        });
        i.addEventListener("mouseout", () => {
            i.style.filter = "brightness(100%)"
        });
    });
    Array.from(document.getElementsByClassName('tab')).forEach((i) => {
        i.addEventListener("mouseover", () => {
            i.style.filter = "brightness(150%)"
        });
        i.addEventListener("mouseout", () => {
            i.style.filter = "brightness(100%)"
        });
    });
}
else if (tog == 0){
    light();
    Array.from(document.getElementsByClassName('card')).forEach((i) => {
        i.addEventListener("mouseover", () => {
            i.style.filter = "brightness(90%)"
        });
        i.addEventListener("mouseout", () => {
            i.style.filter = "brightness(100%)"
        });
    });
    Array.from(document.getElementsByClassName('tab')).forEach((i) => {
        i.addEventListener("mouseover", () => {
            i.style.filter = "brightness(90%)"
        });
        i.addEventListener("mouseout", () => {
            i.style.filter = "brightness(100%)"
        });
    });
}
function dark() {
    localStorage.setItem('toggle', 1);
    tog = 1;
    document.getElementById('circ').style.transform = "translateX(-21px)";
    document.getElementById('circ').style.background = "hsl(230, 17%, 14%)";
    document.getElementById('btn').style.background = "linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
    document.getElementById('btn').style.boxShadow="0px 0px 30px hsl(210, 78%, 56%)";
    document.body.style.background = "hsl(230, 17%, 14%)";
    Array.from(document.getElementsByClassName('card')).forEach((i) => {
        i.style.background = "hsl(228, 28%, 20%)";
        i.addEventListener("mouseover", () => {
            i.style.filter = "brightness(150%)"
        });
        i.addEventListener("mouseout", () => {
            i.style.filter = "brightness(100%)"
        });
    });
    Array.from(document.getElementsByClassName('tab')).forEach((i) => {
        i.style.background = "hsl(228, 28%, 20%)";
        i.addEventListener("mouseover", () => {
            i.style.filter = "brightness(150%)"
        });
        i.addEventListener("mouseout", () => {
            i.style.filter = "brightness(100%)"
        });
    });
    Array.from(document.getElementsByClassName('usertext')).forEach((i) => {
        i.style.color = "hsl(228, 34%, 66%)";
    });
    Array.from(document.getElementsByClassName('text')).forEach((i) => {
        i.style.color = "hsl(228, 34%, 66%)";
    });
    Array.from(document.getElementsByTagName('strong')).forEach((i) => {
        i.style.color = "white";
    });
    document.getElementsByClassName('overview')[0].style.color = "white";
    document.getElementById('title').style.color = "white";
    document.getElementsByClassName('btn-text')[0].style.color = "white";
    document.getElementsByTagName('p')[0].style.color = "hsl(228, 34%, 66%)";
    Array.from(document.getElementsByClassName('line-1')).forEach((i) => {
        i.getElementsByTagName('span')[0].style.color = "hsl(228, 34%, 66%)";
    });
    Array.from(document.getElementsByClassName('line-2')).forEach((i) => {
        i.getElementsByTagName('span')[0].style.color = "white";
    });
            document.getElementsByClassName('btn-text')[0].style.color = "white";


}
function light() {
    localStorage.setItem('toggle', 0);
    tog = 0;
    document.getElementById('circ').style.transform = "none";
    document.getElementById('circ').style.background = "white";
    document.getElementById('btn').style.background = "hsl(230, 22%, 74%)";
    document.getElementById('btn').style.boxShadow="none";
    document.body.style.background = "white";
    Array.from(document.getElementsByClassName('card')).forEach((i) => {
        i.style.background = "hsl(227, 47%, 96%)";
        i.addEventListener("mouseover", () => {
            i.style.filter = "brightness(90%)"
        });
        i.addEventListener("mouseout", () => {
            i.style.filter = "brightness(100%)"
        });
    });
    Array.from(document.getElementsByClassName('tab')).forEach((i) => {
        i.style.background = "hsl(227, 47%, 96%)";
        i.addEventListener("mouseover", () => {
            i.style.filter = "brightness(90%)"
        });
        i.addEventListener("mouseout", () => {
            i.style.filter = "brightness(100%)"
        });
    });
    Array.from(document.getElementsByClassName('usertext')).forEach((i) => {
        i.style.color = "hsl(228, 12%, 44%)";
    });
    Array.from(document.getElementsByClassName('text')).forEach((i) => {
        i.style.color = "hsl(228, 12%, 44%)";
    });
    Array.from(document.getElementsByTagName('strong')).forEach((i) => {
        i.style.color = "hsl(230, 17%, 14%)";
    });
    document.getElementsByClassName('overview')[0].style.color = "hsl(230, 17%, 14%)";
    document.getElementById('title').style.color = "hsl(230, 17%, 14%)";
    document.getElementsByClassName('btn-text')[0].style.color = "hsl(228, 12%, 44%)";
    document.getElementsByTagName('p')[0].style.color = "hsl(228, 12%, 44%)";
    Array.from(document.getElementsByClassName('line-1')).forEach((i) => {
        i.getElementsByTagName('span')[0].style.color = "hsl(228, 12%, 44%)";
    });
    Array.from(document.getElementsByClassName('line-2')).forEach((i) => {
        i.getElementsByTagName('span')[0].style.color = "hsl(230, 17%, 14%)";
    });
}
document.getElementById("btn").addEventListener("click", () => {
    if (tog == 0 || tog == undefined) {
        dark();
    }
    else if (tog == 1) {
        light();
    }
});