try {
    console.log(getCurrentScroll());
    var imgList = [
        'img/ayam-beku-header.png',
        'img/ayam-potong-header.png',
        'img/ayam-hidup-header.png',
    ];
    var typeList = ['beku?', 'potong?', 'hidup?'];

    var counter = 0;
    document.getElementById("bg-carousel").style.backgroundImage = 'url("' + imgList[2] + '")';
    document.getElementById("typeChicken").innerText = typeList[2];

    setInterval(function(){
        document.getElementById("bg-carousel").style.backgroundImage = 'url("' + imgList[counter] + '")';
        document.getElementById("typeChicken").innerText = typeList[counter];
        counter++;
        console.log(counter);

        if(counter == 3){
            counter = 0;
        }
    }, 3000)
} catch(err) {
    alert(err.message);
}

window.onload = function () {
    new bootstrap.ScrollSpy(document.body, {
      target: '#navbar-example2'
    });  hotfixScrollSpy();
    window.scrollBy(0,0);
}

function hotfixScrollSpy() {
    var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
    let curScroll = getCurrentScroll();
    dataSpyList.forEach(function (dataSpyEl) {
        let offsets = bootstrap.ScrollSpy.getInstance(dataSpyEl)['_offsets'];
        for(let i = 0; i < offsets.length; i++){
            offsets[i] += curScroll;
        }
    })
}

function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
}

var whitenav1 = document.getElementById('white-nav1');
var rednav1 = document.getElementById('red-nav1');
var whitenav2 = document.getElementById('white-nav2');
var rednav2 = document.getElementById('red-nav2');
var whitenav3 = document.getElementById('white-nav3');
var whitelogo = document.getElementById('white-logo');
var redlogo = document.getElementById('red-logo');

var testc = 0;
setInterval(function(){
    if (whitenav1.classList.contains('active') || whitenav2.classList.contains('active') || whitenav3.classList.contains('active')){
        whitelogo.classList.remove('visually-hidden');
        redlogo.classList.add('visually-hidden');

        whitenav1.classList.remove('red-nav-item');
        whitenav1.classList.add('white-nav-item');
        whitenav2.classList.remove('red-nav-item');
        whitenav2.classList.add('white-nav-item');
        whitenav3.classList.remove('red-nav-item');
        whitenav3.classList.add('white-nav-item');
        rednav1.classList.remove('red-nav-item');
        rednav1.classList.add('white-nav-item');
        rednav2.classList.remove('red-nav-item');
        rednav2.classList.add('white-nav-item');

        document.getElementById("navMobile").classList.remove("bg-red");
    } else if (rednav1.classList.contains('active') || rednav2.classList.contains('active')){
        whitelogo.classList.add('visually-hidden');
        redlogo.classList.remove('visually-hidden');

        whitenav1.classList.add('red-nav-item');
        whitenav1.classList.remove('white-nav-item');
        whitenav2.classList.add('red-nav-item');
        whitenav2.classList.remove('white-nav-item');
        whitenav3.classList.add('red-nav-item');
        whitenav3.classList.remove('white-nav-item');
        rednav1.classList.add('red-nav-item');
        rednav1.classList.remove('white-nav-item');
        rednav2.classList.add('red-nav-item');
        rednav2.classList.remove('white-nav-item');
        document.getElementById("navMobile").classList.add("bg-red");
    }
}, 50);