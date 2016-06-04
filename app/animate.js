import TweenMax from 'gsap';

export default function animate() {
	document.getElementById("logo").addEventListener("mouseenter", function() {
		var tweenUp = TweenMax.to(".logo", 1, {rotation: 180, transformOrigin: "50% 50%"});
	});

	document.getElementById("logo").addEventListener("mouseleave", function() {
		var tweenDown = TweenMax.to(".logo", 1, {rotation: 360, transformOrigin: "50% 50%"});
	});
}
