eventsApp.factory('eventData', function(){
    return{
        event:{
            name:'Angular Boot Camp',
            date:'1/1/2016',
            time:'10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl:'img/angularjs-logo.png',
            sessions:[
                {
                    name:'Directives Masterclass',
                    creatorName:'Bob Smith',
                    duration:0,
                    level: 'Advanced',
                    abstract:'In this session you will learn the ins and outs of directives',
                    upVoteCount: 3
                },
                {
                    name:'Scopes for fun and profit',
                    creatorName:'John Doe',
                    duration:1,
                    level: 'Introductory',
                    abstract:'This session will take a closer look at scopes. Learn what they do, how they do it, and how to get them to do it for you.',
                    upVoteCount: 1
                },
                {
                    name:'Well Behaved Controllers',
                    creatorName:'Jane Doe',
                    duration:3,
                    level: 'Intermediate',
                    abstract:'Controllers are the beginning of everything Angular does. Learn how to craft controllers that will win the respect of your friends and neighbours.',
                    upVoteCount: 5
                }
            ]

        }
    };
});