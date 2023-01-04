const colors = [
	"#d47777",
	"#db67c8",
	"#b567db",
	"#8a67db",
	"#6f67db",
	"#6792db",
	"#67c0db",
	"#67dbb0",
	"#67db84",
	"#c2db67",
	"#6bdb67",
	"#dbc267",
	"#db9767",
	"#ff6361"
];

const quotes = [
	{quote: "The journey of a thousand miles begins with one step.", author: "Lao Tzu"},
	{quote: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche"},
	{quote: "Life is what happens when you’re busy making other plans." , author: "John Lennon"},
	{quote: "When the going gets tough, the tough get going." , author: "Joe Kennedy"},
	{quote: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi"},
	{quote: "You only live once, but if you do it right, once is enough.", author: "Mae West"},
	{quote: "Tough times never last but tough people do.", author: "Robert H. Schuller"},
	{quote: "Get busy living or get busy dying.", author: "Stephen King"},
	{quote: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford"},
	{quote: "Tis better to have loved and lost than to have never loved at all.", author: "Alrded Lord Tennyson"},
	{quote: "A man is but what he knows.", author: "Sir Francis Bacon"},
	{quote: "You miss 100 percent of the shots you never take.", author: "Wayne Gretzky"},
	{quote: "If you’re going through hell, keep going.", author: "Winston Churchill"},
	{quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein"},
]

function randomNumber() {
	return Math.floor(Math.random() * 14);
}

function getRandomQuote() {
	let quote = randomNumber();
	let fondo = randomNumber();
	
	$("#text").animate({ opacity: 0 }, 500, function () {
	$(this).animate({ opacity: 1 }, 500);
	$("#text").text('" ' + quotes[quote].quote);
	});
	
	$("#author").animate({ opacity: 0 }, 500, function () {
	$(this).animate({ opacity: 1 }, 500);
	$("#author").text('-' + quotes[quote].author);
	});
	
	// $("body").css("background-color", colors[backGround]);
	// $("#new-quote").css("background-color", colors[backGround]);
	
	
	$("body").animate({backgroundColor: colors[fondo]}, 1000);
	
	$("#new-quote").animate({backgroundColor: colors[fondo]}, 1000);
}

getRandomQuote();
$("#new-quote").on("click", getRandomQuote);