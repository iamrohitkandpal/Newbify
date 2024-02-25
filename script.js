var songs = [
    {name:"Pal Behta Jaaye", image:"/Images/Pal-Behta-Jaaye.avif", audio:"/Songs/Pal Behta Jaaye.mp3", duration:"2:54", artist:"Vismay Patel"},
    {name:"I ALways Fall", image:"/Images/I-Always-Fall.avif", audio:"/Songs/I Always Fall.mp3", duration:"2:40", artist:"Eli Wilson"},
    {name:"Aoge Tum Kabhi", image:"/Images/Aoge Tum Kabhi.avif", audio:"/Songs/Aaoge Tum Kabhi.mp3", duration:"5:13", artist:"The Local Train"},
    {name:"Darmiyaan", image:"/Images/Darmiyaan.avif", audio:"/Songs/Darmiyaan.mp3", duration:"5:53", artist:"Shafqat Amanat Ali"},
    {name:"Malang Sajna", image:"/Images/Malang-Sajna.avif", audio:"/Songs/Malang Sajna.mp3", duration:"2:41", artist:"Sachet Tandon, Parampara Tandon"},
    {name:"Abhi Na Jao", image:"/Images/Abhi Na Jao.avif", audio:"/Songs/Abhi Na Jao Chhod Kar.mp3", duration:"4:15", artist:"Asha Bhosle, Mohammed Rafi"}
]

let previous = document.querySelector('#back')
let play = document.querySelector('#play')
let next = document.querySelector('#front')
let title = document.querySelector('#title')
let recent_volume = document.querySelector('#volume')
let volume_show = document.querySelector('#vol')
let slider = document.querySelector('#duration_slider')
let show_duration = document.querySelector('#show_duration')
let auto_play = document.querySelector('#auto')
let list = document.querySelector('#playlist')

let timer;
let autoplay = 0

let index_no = 0
let playing_song = false;

let track = new Audio()

//Controls
function mainFunc(){
    var clutter = "";
}


function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}
function volume_change(){
    volume_show.innerHTML = recent_volume.value;
    track.volume = recent_volume/100;
}

function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}
