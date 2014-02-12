define([],
	function ()
	{
		configOptions = {
			//The appid for the configured application
			appid: "",
			//The web map id
			webmaps: [
			{
				id: "5c06cb10de4c491d88be7aea880c72ce",
				title: "Reference Map",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
			},{
				id: "05bea6c02c124a3f9bf4492926dd9a07",
				title: "Wayne Abbey-Detail Map",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
			},
			{
				id: "9b68eea67a764dccb7a5a16e35ea634a",
				title: "The Albano Family-Detail Map",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
			},
			// To add additional maps to the template, uncomment the below section for
			// each map you would like to add. Webmap titles from ArcGIS Online will
			// be used unless you fill in title attribute.
			{
			//
				id: "fb4b105e4f684f4b81ae9c9329181740",
				title: "The Cooper Family-Detail Map",
			//	// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
			},
			{
			//
				id: "a0a6ed907de344979223eaef38ad8d5b",
				title: "Randy Fisher-Detail Map",
			//	// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
			}
			],
			//Enter a title, if no title is specified, the first webmap's title is used.
			title: "Richard Raugust Story Map",
			//Enter a subtitle, if no subtitle is specified, the first webmap's subtitle is used.
			subtitle: "The Montana Innocence Project",
			// If false, each tab will have a number on it. If true, the first tab will not have a number and the second tab will start counting at 1.
			startCountOnSecondTab: false,
			//Sync maps scale and location
			syncMaps: false,
			//Display geocoder search widget
			geocoderWidget: false,
			// Specify a proxy for custom deployment
			proxyurl: "",
			//specify the url to a geometry service
			geometryserviceurl: "http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer",
			//If the webmap uses Bing Maps data, you will need to provided your Bing Maps Key
			bingmapskey : "",
			//Modify this to point to your sharing service URL if you are using the portal
			sharingurl: "http://www.arcgis.com/sharing/rest/content/items"
		}
	}
);
