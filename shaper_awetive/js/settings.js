var 
	mapWidth		= 540;
	mapHeight		= 420;

	shadowWidth		= 2;
	shadowOpacity		= 0.3;
	shadowColor		= "black";
	shadowX			= 1;
	shadowY			= 2;

	iPhoneLink		= true,

	isNewWindow		= false,

	borderColor		= "#ffffff",
	borderColorOver		= "#ffffff",

	nameColor		= "#ffffff",
	nameFontSize		= "12px",
	nameFontWeight		= "bold",

	overDelay		= 400,

	map_data = {
    st1: {
   	 	id: 1,
		name: "Alabama",
		shortname: "AL",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st2: {
    	id: 2,
		name: "Alaska",
		shortname: "AK ",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st3: {
		id: 3,
		name: "Arizona",
		shortname: "AZ ",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st4:{
    	id: 4,
		name: "Arkansas",
		shortname: "AR",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st5:{
    	id: 5,
		name: "California",
		shortname: "CA",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st6:{
    	id: 6,
		name: "Colorado",
		shortname: "CO",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st7:{
    	id: 7,
		name: "Connecticut",
		shortname: "CT",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st8:{
    	id: 8,
		name: "Delaware",
		shortname: "DE",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st9:{
    	id: 9,
		name: "District of Columbia",
		shortname: "DC",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st10:{
    	id: 10,
		name: "Florida",
		shortname: "FL",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st11:{
    	id: 11,
		name: "Georgia",
		shortname: "GA",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st12:{
    	id: 12,
		name: "Hawaii",
		shortname: "HI",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st13:{
    	id: 13,
		name: "Idaho",
		shortname: "ID",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st14:{
    	id: 14,
		name: "Illinois",
		shortname: "IL",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st15:{
    	id: 15,
		name: "Indiana",
		shortname: "IN",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st16:{
    	id: 16,
		name: "Iowa",
		shortname: "IA",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st17:{
    	id: 17,
		name: "Kansas",
		shortname: "KS",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st18:{
    	id: 18,
		name: "Kentucky",
		shortname: "KY",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st19:{
    	id: 19,
		name: "Louisiana",
		shortname: "LA",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st20:{
    	id: 20,
		name: "Maine",
		shortname: "ME",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st21:{
    	id: 21,
		name: "Maryland",
		shortname: "MD",
		link: "map.html",
		comment: "CUBBY Baltimore<br>800 Gusryan Street<br>Baltimore, MD 21224<br>888-99cubby<br>info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st22:{
    	id: 22,
		name: "Massachusetts",
		shortname: "MA",
	link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st23:{
    	id: 23,
		name: "Michigan",
		shortname: "MI",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st24:{
    	id: 24,
		name: "Minnesota",
		shortname: "MN",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st25:{
    	id: 25,
		name: "Mississippi",
		shortname: "MS",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st26:{
    	id: 26,
		name: "Missouri",
		shortname: "MO",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st27:{
    	id: 27,
		name: "Montana",
		shortname: "MT",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st28:{
    	id: 28,
		name: "Nebraska",
		shortname: "NE",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st29:{
    	id: 29,
		name: "Nevada",
		shortname: "NV",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st30:{
    	id: 30,
		name: "New Hampshire",
		shortname: "NH",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st31:{
    	id: 31,
		name: "New Jersey",
		shortname: "NJ",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st32:{
    	id: 32,
		name: "New Mexico",
		shortname: "NM",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st33:{
    	id: 33,
		name: "New York",
		shortname: "NY",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st34:{
    	id: 34,
		name: "North Carolina",
		shortname: "NC",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st35:{
    	id: 35,
		name: "North Dakota",
		shortname: "ND",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st36:{
    	id: 36,
		name: "Ohio",
		shortname: "OH",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st37:{
    	id: 37,
		name: "Oklahoma",
		shortname: "OK",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st38:{
    	id: 38,
		name: "Oregon",
		shortname: "OR",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st39:{
    	id: 39,
		name: "Pennsylvania",
		shortname: "PA",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st40:{
    	id: 40,
		name: "Rhode Island",
		shortname: "RI",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st41:{
    	id: 41,
		name: "South Carolina",
		shortname: "SC",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st42:{
    	id: 42,
		name: "South Dakota",
		shortname: "SD",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st43:{
    	id: 43,
		name: "Tennessee",
		shortname: "TN",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st44:{
    	id: 44,
		name: "Texas",
		shortname: "TX",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st45:{
    	id: 45,
		name: "Utah",
		shortname: "UT",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st46:{
    	id: 46,
		name: "Vermont",
		shortname: "VT",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st47:{
    	id: 47,
		name: "Virginia",
		shortname: "VA",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st48:{
    	id: 48,
		name: "Washington",
		shortname: "WA",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st49:{
    	id: 49,
		name: "West Virginia",
		shortname: "WV",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st50:{
    	id: 50,
		name: "Wisconsin",
		shortname: "WI",
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st51:{
    	id: 51,
		name: "Wyoming",
		shortname: "WY" ,
		link: "map.html",
		comment: "Interested in becoming a CUBBY Dealer?<br>Please Call<br>Phone: 888-99Cubby<br>Just ask Cubby! <br>E-mail: info@cubbymobilestorage.com",
		image: "photo.jpg",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	}
};// JavaScript Document