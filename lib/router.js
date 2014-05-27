Router.configure({
	trackPageView: true
});

Router.map(function() {
    this.route('home', {
        path: '/',
        action: function() {
            this.redirect('finding');
        },
        progress: {
            tick : false
        }
    });

    this.route('finding', {
        path: '/finding-fulfilling-work',
        template: 'finding',
    });

    this.route('the-manager-who-lost-the-north', {
        path: '/the-manager-who-lost-the-north',
        action: function() {
            this.redirect('https://medium.com/building-and-breaking/5bd92cb0a7d4');
        }
    });
});
