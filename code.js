function home(){
    document.getElementById("console-text-header").innerHTML = "~/home";
}

function aboutMe(){
    document.getElementById("console-text-header").innerHTML = "~/about_me";
    document.getElementById("console-text-content").innerHTML = 
    "<p id='console-text-content-element'>> Born 2008</p>";
    document.getElementById("console-text-content").innerHTML +=
    "<br><p id='console-text-content-element'>> IT student in the University of Ljubljana</p>";
    document.getElementById("console-text-content").innerHTML +=
    "<br><p id='console-text-content-element'>> Musician</p>";
    document.getElementById("console-text-content").innerHTML +=
    "<br><p id='console-text-content-element'>> Call me Amber</p>";
    document.getElementById("console-text-content").innerHTML +=
    "<br><p id='console-text-content-element'>> Pronouns: any</p>";
}

function myMusic(){
    document.getElementById("console-text-header").innerHTML = "~/my_music";
    document.getElementById("console-text-content").innerHTML = '<p id="console-text-content-element">> </><a id="console-text-content-element" href="https://amberheart.bandcamp.com/">Bandcamp (listen for free)</a><br>';
}

function contact(){
    document.getElementById("console-text-header").innerHTML = "~/contact";
    document.getElementById("console-text-content").innerHTML = 
    "<p id='console-text-content-element'>> </><a id='console-text-content-element' href='https://t.me/p_khom'>Telegram</a>";
    document.getElementById("console-text-content").innerHTML +=
    "<br><p id='console-text-content-element'>> </><a id='console-text-content-element' href='https://discord.com/users/920455300241301655'>Discord</a>";
}

function achievements(){
    document.getElementById("console-text-header").innerHTML = "~/achievements";
    document.getElementById("console-text-content").innerHTML =
    "";
}

function politicalViews(){
    document.getElementById("console-text-header").innerHTML = "~/political_views";
    document.getElementById("console-text-content").innerHTML =
    "";
}

function projects(){
    document.getElementById("console-text-header").innerHTML = "~/projects";
    document.getElementById("console-text-content").innerHTML =
    "";
}