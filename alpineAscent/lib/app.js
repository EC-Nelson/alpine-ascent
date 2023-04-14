
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/home', {
        templateUrl: 'pages/home.html'
    })
    .when('/geo', {
        templateUrl: 'pages/geolocation.html',
        controller: 'myController'
    })
    .otherwise({
        redirectTo: '/home',
        templateUrl: 'pages/home.html'
    })
});

app.controller('myController', function($scope){
/*info for the success stories in geolocation.html*/
    $scope.clubs = [
        {
            "name" : "Alpine Ascents International",
            "story" : "In 2018, four climbers from Alpine Ascents International successfully summited Denali, the highest peak in North America. The group included one of the few African-American women to ever climb the mountain, as well as a military veteran and a cancer survivor.",
            "image" : "https://www.alpineascents.com/wp-content/uploads/2016/06/denali-wp.jpg"
        },
        {
            "name" : "Mountain Madness",
            "story" : "In 2019, Mountain Madness, a mountaineering company based in Seattle, led a successful expedition to Aconcagua, the highest peak in South America. The team included climbers from around the world and raised funds for the Children's Hospital in Seattle.",
            "image" : "https://estadventure.com/wp-content/uploads/2017/09/11-Aconcagua-expedition-min.jpg"
        },
        {
            "name" : "Adventure Consultants ",
            "story" : "In 2018, Adventure Consultants led a successful expedition to Mount Everest, with all members of the team reaching the summit. The company has been involved in many high-profile mountaineering expeditions, including the 1996 Everest disaster chronicled in Jon Krakauer's book Into Thin Air.",
            "image" : "http://www.adventureconsultants.com/assets/Uploads/Himalaya/Nepal-Himalaya/_resampled/FillWyI4MDAiLCI0ODAiXQ/Wendy-Summit-Day-Resized-Charley-Mace.JPG?v=71057"
        },
        {
            "name" : "Jagged Globe ",
            "story" : "In 2017, a team from Jagged Globe successfully summited Manaslu, the eighth-highest mountain in the world. The team included climbers from the UK, Norway, and Switzerland and was led by a seasoned guide with over 20 years of experience in the Himalayas.",
            "image" : "https://static01.nyt.com/images/2021/01/19/sports/19summit-k2/19summit-k2-videoSixteenByNine3000.jpg"
        },
        {
            "name" : "International Mountain Guides ",
            "story" : "In 2018, International Mountain Guides led a successful expedition to Kilimanjaro, the highest peak in Africa. The group included a blind climber and raised funds for a local school in Tanzania.",
            "image" : "https://cdn.charitychallenge.com/images/library/Kilimankaro-Mountain-Charity-Trek-in-Tanzania-in-Africa16.jpg"
        },
        {
            "name" : "Peak Freaks ",
            "story" : "In 2019, Peak Freaks, a Canadian-based mountaineering company, led a successful expedition to Mount Everest, with all members of the team reaching the summit. The company has a reputation for working with small groups and providing personalized attention to each climber.",
            "image" : "https://i.pinimg.com/originals/9f/2d/c9/9f2dc9a671037618154f1c403bcf4b61.jpg"
        },
        {
            "name" : "RMI Expeditions ",
            "story" : "In 2018, RMI Expeditions led a successful expedition to Vinson Massif, the highest peak in Antarctica. The group included climbers from around the world and was led by a team of experienced guides with a combined total of over 50 years of mountaineering experience.",
            "image" : "https://i.pinimg.com/originals/58/6c/4f/586c4fa284cc0c6f2b0e1cb50a305e4b.jpg"
        },
        {
            "name" : "Seven Summits Club ",
            "story" : "In 2019, a team from the Seven Summits Club successfully summited Elbrus, the highest peak in Europe. The club has a mission of helping climbers reach the highest peaks on each continent and has led expeditions to many of the world's most challenging mountains.",
            "image" : "https://7vershin.ru/media/full/10/41925.jpg"
        }
    ];
    /******info for the success stories in geolocation.html*******/

    $scope.futerLnkLoadBhvr = function (){
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
    }
});


