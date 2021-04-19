function openTab(tabName) {
    var counter, tab;
    tab = document.getElementsByClassName("projects-container-tab");
    for (counter = 0; counter < tab.length; counter++) {
        tab[counter].style.display = "none";

    }
    document.getElementById(tabName).style.display = "block";
    var count = parseInt(tabName.substring(1));
    width = $(".projects-container").width();
    console.log(width);
    var subW= (width+30)/projects;
    var offset = subW*count-subW*0.5-15-20;
    tri.animate({ 'marginLeft': offset+'px'}, 500);
}

document.getElementById("b1").style.display = "block";


init();
if($(window).width() < 750){
    below();
}
var tri = $("#projectsTriangle");
var projects = $(".projects-container").children().length-2;
var width = $(".projects-container").width();
tri.css({"margin-left":((width+30)/projects/2-15-20)+"px"});


var tpics=[];
var tcardl=0;
var cardheight=0;
var cardwidth=0;
$(window).on('resize', function(){
    var win = $(this); //this = window
    any();
    if (win.width() > 750) {
        init();
    } else{
        init();
        below();
    }
});

function any(){
    $(".team-img").hide();
    cardwidth = $(".team-img").eq(0).parent().width();
    $(".team-img").show();
    $(".team-img").each(function( i ) {
        var iwidth = tpics[i].w;
        var iheight = tpics[i].h;
        var dwidth = cardwidth;
        var dheight = dwidth/3*4;
        var aheight = dheight;
        var awidth = dwidth;
        $(this).parent().height(dheight);
        cardheight = dheight;
        $(this).parent().width(dwidth);

        if(dheight>iheight){
            //width needs to increase
            awidth = dheight/iheight*iwidth;
            var mar = (iwidth-awidth)/2;
            $(this).width(awidth);
            $(this).parent().height(aheight);
            cardheight = aheight;
            $(this).css({"margin-left":mar+"px"});
            //recenter
        }else if(dheight<iheight){
            var mar = (iheight-dheight)/2;
            $(this).css({"margin-top":-mar+"px"});
            //recenter
        }
    });

    tcardl = 0;
    $(".team-card").each(function( i ) {
        if(tcardl<$(this).height()){
            tcardl = $(this).height();
        }
    });
    $(".team-card").height(tcardl);
    $(".team-container").height(tcardl-cardheight-40);
    console.log(tcardl+" "+ cardheight + " "+ (tcardl-cardheight));
};

$(".team-up").click(function (e){
    console.log(tcardl+" "+ cardheight + " "+ (tcardl-cardheight));
    $(this).prev().prev().prev().animate({height:0},500);
    $(this).prev().animate({height:tcardl-30},500);
    $(this).fadeOut(500);
    $(this).prev().find(".team-desc").slideDown(200);
    $(this).prev().prev().slideDown(500);
});

$(".team-down").click(function (e){
    console.log(tcardl+" "+ cardheight + " "+ (tcardl-cardheight));
    $(this).prev().animate({height:cardheight},500);
    $(this).next().animate({height:tcardl-cardheight-30},500);
    $(this).next().find(".team-desc").slideUp(200);
    $(this).slideUp( 500, function() {
        $(this).hide();
    });
    $(this).next().next().fadeIn(500);
});

function below(){
    console.log("below");
    $(".projects-column").removeClass("projects-column-active");
    $(".projects-column").css('height', '');
    $(".projects-container").hide();
    $(".projects-column-title").hide();
    for(var i =1;i<$(".projects-container").children().length-1;i++){
        $("#b"+i+"s").html($("#b"+i).html());
    }
}

function init(){
    $(".projects-container").show();
    $(".projects-column-title").show();
    $(".projects-image").each(function( i ) {
        var iwidth = $(this).width();
        var iheight = $(this).height();
        var dwidth = $(this).parent().width();
        var dheight = dwidth/4*3;
        var aheight = dheight;
        var awidth = dwidth;
        $(this).parent().height(dheight);
        if(dheight>iheight){
            //width needs to increase
            awidth = dheight/iheight*iwidth;
            var mar = (iwidth-dwidth)/2;
            $(this).width(awidth);
            $(this).css({"margin-left":-mar+"px"});
            //recenter
        }else if(dheight<iheight){
            var mar = (iheight-dheight)/2;
            $(this).css({"margin-top":-mar+"px"});
            //recenter
        }
    });



    for(var i =1;i<$(".projects-container").children().length-1;i++){
        $("#b"+i+"s").html("");
    }
    var largest = 0;
    $(".projects-column").each(function( i ) {
        if(largest<$(this).height()){
            largest = $(this).height();
        }
    });
    $(".projects-column").height(largest);
    largest=0;
    $(".projects-container-tab").each(function( i ) {
        if(largest<$(this).height()){
            largest = $(this).height();
        }
    });
    $(".projects-container-tab").height(largest);
    $(".projects-container-tab").hide();
    $("#b1").show();
}

$(".navbar-brand").click(function (e){
    scrollLanding();
});

function scrollLanding(){
    $('html, body').animate({scrollTop: $('#pageLanding').offset().top -100 }, 'slow');
}
function scrollBrief(){
    $('html, body').animate({scrollTop: $('#pageBrief').offset().top -100 }, 'slow');
}
function scrollProjects(){
    $('html, body').animate({scrollTop: $('#pageProjects').offset().top -100 }, 'slow');
}
function scrollEvents(){
    $('html, body').animate({scrollTop: $('#pageEvents').offset().top -100 }, 'slow');
}
function scrollTeam(){
    $('html, body').animate({scrollTop: $('#pageTeam').offset().top -100 }, 'slow');
}
function scrollSponsors(){
    $('html, body').animate({scrollTop: $('#pageSponsors').offset().top -100 }, 'slow');
}

var lcounter= 0;
console.log($(".team-img").length);
$(".team-img").each(function( i ) {
    $(this).one("load", function() {
        lcounter++;
        if(lcounter==$(".team-img").length){
            lc();
        }
    }).each(function() {
        if(this.complete) {
             $(this).trigger('load'); // For jQuery >= 3.0
        }
    });
});

function lc(){
    $(".team-img").each(function( i ) {
        var w = $(this).width();
        var h = $(this).height();
        tpics.push({w,h});
    });
    any();
    tcardl = 0;
    $(".team-card").each(function( i ) {
        if(tcardl<$(this).height()){
            tcardl = $(this).height();
        }
    });
    $(".team-card").height(tcardl);
}


