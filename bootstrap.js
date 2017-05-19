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
				'The Giants have won six pennants and three World Series Championships since arriving in San Fancisco. Thos three championships have come in 2010 against the Texas Rangers, 2012 against the Detroit Tigers and 2014 against the Kansas City Royals.'
				),

			new Post(
				'Lombard Street',
				'https://google.com',
				'... yep still Sydne Long',
				'https://unsplash.it/200',
				'Crazy Fredrick bought many very exquisite opal jewels.'
				),

			new Post(
				'Another Post: promptly judged',
				'https://vuejs.org',
				'Jane Author',
				'https://unsplash.it/200',
				'We promptly judged antique ivory buckles for the next prize.'
				),

			new Post(
				'Last Post: Jaded zombies',
				'https://google.com',
				'Anptoght Author',
				'#',
				'Jaded zombies acted quaintly but kept driving their oxen forward.'
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



