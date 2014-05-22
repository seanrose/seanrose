Router.configure({
});

Router.map(function() {
    this.route('home', {
        path: '/',
        template: 'home',
    });

    this.route('finding', {
        path: '/finding-fulfilling-work',
        template: 'finding',
        layoutTemplate: 'layout'
    });
});
