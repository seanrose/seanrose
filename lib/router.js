Router.configure({
	trackPageView: true
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

    this.route('the-manager-who-lost-the-north', {
        path: '/the-manager-who-lost-the-north',
        action: function() {
            this.redirect('https://medium.com/building-and-breaking/5bd92cb0a7d4');
        }
    });
});
