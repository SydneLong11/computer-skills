// This is a comment

// think of a 'class' as a template
class Post {

	// the order of the items in the constructor is the order
	// in which data will be assigned

	constructor(
				title,
				link,
				author,
				img,
				body){
					this.title = title;
					this.link = link;
					this.author = author;
					this.img = img;
					this.body = body;
	}
}

const app = new Vue({

	// this is the HTML element that the app will operate from
	el: '#root',

	// this is the data elements that feed the app
	data: {

		// this is what the search is looking for
		// the default value is an empty string
		keyword: '',

		// this is an array of items that will be
		// interpreted by the Post class
		postlist: [
			// constructed Post item
			new Post(
				'Golden Gate Bridge', 		// this is the TITLE place in the class
				'https://www.google.com/search?q=golden+gate+bridge&safe=active&client=safari&rls=en&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiXkvbZttnTAhUD7mMKHWxaDn8Q_AUICigB#imgrc=67N6jJGAIeQgWM:',	// this is the LINK place in the class
				'Sydne Long',			// this is the AUTHOR place in the class
				'http://assets.fodors.com/destinations/708037/golden-gate-bridge-san-francisco-california-1_main.jpg',	// this is the IMAGE place in the class
				'The Golden Gate Bridge is a suspension bridge spanning the Golden Gate straight, the one mile wide (1.6 km), 1.7 mile long (2.7 kn) channel between the San Francisco Bay and the Pacific Ocean. The Formers travel guide describes the Golden Gate Bridge as "possibly the most beautiful, certainly the most photographed, bridge in the world. It opened in 1937 and was, until 1964, the longest suspension bridge main span in the world, at 4,200 feet (1,300 m).' // this is the BODY place in the class
				),

			new Post(
				'AT&T Park: Home of the San Francisco Giants',
				'https://www.mlb.com/giants',
				'still Sydne Long',
				'http://www.giantsportal.com/photos/datamax/image32.jpg', // this is a local image in the same folder as the js script
				'The San Francisco Giants were founded in 1883 as the New York Gothams and then renamed the New York Giants. The team eventually moved to San Fransisco in 1958. As one of the longest-established and most successful professional baseball teams, the franchise has won the most games of any team in the history of American baseball. The team was the first major league team based in New York City, most memorably playing at the legendary Polo Grounds. They have won 23 NL pennants and have played in 20 world series competitions – both NL records. The Giants eight World Series championships rank second (New York Yankees are first with 27, then the St. Louis Cardinals (the National League record-holders) with 11, the Oakland Athletics with 9, and the Boston Red Sox also with 8). The Giants have played in the World Series 20 times – 14 times in New York, six in San Francisco – but boycotted the event in 1904. Playing as the New York Giants, they won 14 pennants and five World Series championships behind managers such as John McGraw and Bill Terry and players like Christy Mathewson, Carl Hubbell, Mel Ott, Bobby Thomson, and Willie Mays. The Giants ranchise has the most Hall of Fame players in all of professional baseball. The Giants rivalry with the Dodgers is one of the longest-standing and biggest rivalries in American sports. The teams began their rivalry as the New York Giants and Brooklyn Dodgers, respectively, before both franchises moved west for the 1958 season. The Giants have won six pennants and three World Series Championships since arriving in San Francisco. Those three championships have come in 2010 against the Texas Rangers, 2012 against the Detroit Tigers and 2014 against the Kansas City Royals.'
				),

			new Post(
				'Lombard Street',
				'https://google.com',
				'... yep still Sydne Long',
				'http://denizennavigator.com/wp-content/uploads/2013/06/lombard.jpg',
				'Lombard Street is an east–west street in San Francisco, California that is famous for a steep, one-block section with eight hairpin turns. Stretching from The Presidio east to The Embarcadero (with a gap on Telegraph Hill), most of the streets western segment is a major thoroughfare designated as part of U.S. Route 101. he famous one-block section, claimed as "the most crooked street in the world", is located along the eastern segment in the Russian Hill neighborhood. The street was named after Lombard Street in Philadelphia by San Francisco surveyor Jasper OFarrell.'
				),

			new Post(
				'Golden Gate Park',
				'https://goldengatepark.com/',
				'SYDNEEEEEEEEE',
				'http://www.abekleinfeld.com/images/Bay%20Area%20Trek%208-10/Stone-Bridge-on-Stow-Lake-8-10.jpg',
				"Golden Gate Park s a large urban park consisting of 1,017 acres of public grounds. It is administered by the San Francisco Recreation & Parks Department, which began in 1871 to oversee the development of Golden Gate Park. Configured as a rectangle, it is similar in shape but 20 percent larger than Central Park in New York, to which it is often compared. It is over three miles (4.8 km) long east to west, and about half a mile (0.8 km) north to south. With 13 million visitors annually, Golden Gate is the fifth most-visited city park in the United States after Central Park in New York City, Lincoln Park in Chicago, and Balboa and Mission Bay Parks in San Diego. The Japanese Tea Garden is the oldest public Japanese garden in the United States and takes up five of the 1,017 acres of the Golden Gate Park. The Japanese Tea Garden serves as a spot of tranquility in the middle of the various activities that take place at the Golden Gate Park and provides visitors a place in which it is possible to be at one with nature, its rhythms, and changing beauties. The Japanese Tea Garden brings in more than $1 million to the Golden Gate Park and the city annually. "
				),

			new Post(
				'Ghirardelli Square',
				'hhttps://www.google.com/maps?q=ghirardelli+chocolate+san+francisco&biw=810&bih=679&um=1&ie=UTF-8&sa=X&ved=0ahUKEwi61_Gn7Z_UAhXjlVQKHehDC6YQ_AUICigB',
				'Sydne Sydne Sydne Sydne Sydne S Y D N E !!!!',
				'http://www.aapowerlunch.com/wp-content/uploads/2016/08/ghirardelli-square@2x-700x340.jpg',
				"Jaded zombies acted quaintly but kept driving their oxen forward."
				)
		]
	},

	// computed properties are functions
	// that work on the data they receive
	computed: {

		// this defines the search function
		filterlist(){

			// filterlist object
			// returns a filter funtion over the constructed post
			return this.postlist.filter((post)=>{

				// of an inculded array of title-toLowerCase matching any keyword-toLowerCase returned
				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});



