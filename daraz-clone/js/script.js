

// redirecting on clicking app download
$("#topHeader").click(() => {
    window.location.assign('download.html')
})
// topHeader.onclick = () => {
//     window.location.assign('download.html')
// }


// getting description hover on the link in top nav bar
for (let i = 0; i < 7; i++) {
    $('#topnav>ul>li').eq(i).on({
        "click": () => {
            $('#topnav>ul>li>p').eq(i).css("visibility", "visible")
        },
        "mouseleave": () => {
            $('#topnav>ul>li>p').eq(i).css("visibility", "hidden")
        },
    })
}
// for (let i=1; i<7; i++) {
//     listItem = topnav.children[i].children[0]
//     listItem.onclick = () => {
//         topnav.children[i].children[0].children[1].style.visibility = 'visible'
//     }
//     listItem.onmouseleave = () => {
//         topnav.children[i].children[0].children[1].style.visibility = 'hidden'
//     }
// }


// shadow under the sticky navbar
lastPaintTime = 0
function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime) / 1000 < 0.1) { return }
    lastPaintTime = ctime;
    if (window.pageYOffset > 70) {
        $("#navbar").css("box-shadow", "0px 2px 10px grey")
    } else {
        $("#navbar").css("box-shadow", "none")
    }
}
window.requestAnimationFrame(main)



// changing the slider
j = 0
setInterval(() => {
    color1 = 'blue'
    color2 = 'red'
    color3 = 'green'
    color = ['rgb(4, 77, 146)', 'rgb(107, 191, 228)', 'rgb(0, 133, 246)']
    for (let i = 0; i < 3; i++) {
        $("#slider>img").eq(i).css("opacity", "0")
        // slider.children[i].style.setProperty('opacity', '0')
    }
    $("#slider>img").eq(j % 3).css("opacity", "1")
    $("#slider").css("background-color", color[j % 3])
    // slider.children[j % 3].style.setProperty('opacity', '1')
    // slider.style.setProperty('background-color', color[j % 3])
    j++
}, 4000);


// setting the categories to show on hover
$("#box1").mouseenter(function () {
    $(this).next().css('opacity', '1');
})
$("#categories").mouseleave(function () {
    $(this).children().not("#box1").css('opacity', '0');
})
$("#box2").mouseenter(function () {
    if ($(this).css('opacity') == 1) {
        $(this).next().css('opacity', '1');
    }
})
// box2.onmouseover = () => {
//     if (getComputedStyle(box2).getPropertyValue('opacity') == 1) {
//         box3.style.setProperty('opacity', '1')
//     }
// }
// box1.onmouseover = () => {
//     box2.style.setProperty('opacity', '1')
// }
// categories.onmouseleave = () => {
//     box2.style.setProperty('opacity', '0')
//     box3.style.setProperty('opacity', '0')
// }



// time for sale
setInterval(() => {
    currentTime = new Date().getTime();
    endTime = new Date("Sep 05, 2021 00:00:00").getTime();

    LeftTime = endTime - currentTime;
    h = Math.floor(LeftTime / 3600000)
    m = Math.floor((LeftTime % 3600000) / 60000)
    s = Math.round(((LeftTime % 3600000) / 60000 - m) * 60)
    $(".hours").text(h)
    $(".mins").text(m)
    $(".secs").text(s)
}, 1000);


// loading more cards
loadmore = function () {
    for (let i = 0; i < 3; i++) {
        $(`<div>${$("#container>.card").eq(i).html()}</div>`).addClass("card").insertBefore("#loadbtn");

        // newCard = document.createElement('div')
        // newCard.classList.add('card')
        // newCard.innerHTML = container.children[i].innerHTML
        // container.insertBefore(newCard, loadbtn)
    }
}

