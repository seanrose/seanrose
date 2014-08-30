Router.configure({
	trackPageView: true
});

Router.map(function() {
    this.route('home', {
        path: '/',
        template: 'colors',
        progress: {
            enabled : false
        }
    });

    this.route('finding', {
        path: '/finding-fulfilling-work',
        template: 'finding',
    });

    // Redirecting any legacy links
    this.route('the-manager-who-lost-the-north', {
        path: '/the-manager-who-lost-the-north',
        action: function() {
            this.redirect('https://medium.com/building-and-breaking/5bd92cb0a7d4');
        }
    });

    this.route('colors', {
        path: 'colors',
        template: 'colors',

        progress: {
            enabled : false
        }
    });

    this.route('keybase', {
        path: '/keybase.txt',

        where: 'server',

        progress: {
            enabled: false
        },

        action: function() {
            this.response.writeHead(200, {'Content-Type': 'text/plain'});
            this.response.end('==================================================================\r\nhttps:\/\/keybase.io\/seanrose\r\n--------------------------------------------------------------------\r\n\r\nI hereby claim:\r\n\r\n  * I am an admin of http:\/\/seanrose.co\r\n  * I am seanrose (https:\/\/keybase.io\/seanrose) on keybase.\r\n  * I have a public key with fingerprint 414D 0177 ADEF E44E CB6A  5B86 7F31 2ED7 9E65 4AC0\r\n\r\nTo claim this, I am signing this object:\r\n\r\n{\r\n    \"body\": {\r\n        \"key\": {\r\n            \"fingerprint\": \"414d0177adefe44ecb6a5b867f312ed79e654ac0\",\r\n            \"host\": \"keybase.io\",\r\n            \"key_id\": \"7f312ed79e654ac0\",\r\n            \"uid\": \"cea6d5891676de98361193644d831600\",\r\n            \"username\": \"seanrose\"\r\n        },\r\n        \"service\": {\r\n            \"hostname\": \"seanrose.co\",\r\n            \"protocol\": \"http:\"\r\n        },\r\n        \"type\": \"web_service_binding\",\r\n        \"version\": 1\r\n    },\r\n    \"ctime\": 1407990846,\r\n    \"expire_in\": 157680000,\r\n    \"prev\": \"1d2951700a660d6a721113500b792e68fb298185c44f1c285a49fc21f834fd57\",\r\n    \"seqno\": 6,\r\n    \"tag\": \"signature\"\r\n}\r\n\r\nwith the aforementioned key, yielding the PGP signature:\r\n\r\n-----BEGIN PGP MESSAGE-----\r\nVersion: Keybase OpenPGP v0.3.1\r\nComment: https:\/\/keybase.io\/crypto\r\n\r\nyMHiAnicbZFbSBRRGMd32zVLqbRAqV5sIEPbbM7smTOXXH3I6EKgkmKksc7ljDto\r\nM+vs7K5ivoSgJnRDCu2hIEywRCUxqYdMDJRumiHdqMx8UKQEDRG0mpF6ic7LOef7\r\nft\/\/f\/6coU0uR5zz\/UStM8VX\/db5dGA+7Dgxl5lVQ4i6XE3wNUQ5XtsUVSvDRtBQ\r\nNZPgCQigTAKGEWSsYAixJCKBFlnEKF5AYZnhMKKhIJGEhwjoIXvCkhGFEM5Qdatm\r\nXfyqbFX\/w4fXGhIWkEyzHEAMkjHHehEAnBdBKLNegMg1MIQNTTiDLTqEBc3QQ5io\r\n9VhnI6JK2H6zbf0PkSHZ\/kFDN3VJr7AaAdMM8vacWR20wSgW\/X8k\/KKqyVZsayCC\r\njZCqawQPLFIyVVsTQJLhOJKFyEPgqqBqYL9qEzSDWNJatg2OWJJApjgaMCQpIETK\r\nSGAoAICXJkmR4SiMWEWkOBawtAShAiSKpQXIKRIFFNYLFZlmCDtUpaYTvOVkCmV2\r\nHLVME8ywYSUeHChxO5xxjvUx6+yPc8RtTPj7ncqH2JX4tsWPo+62\/Wcvdd9Y7hkp\r\netmx0j+cyg9PdfprXhw4Vr83rKZvWS0oz\/vMwC\/8ZFPmk0KfbzPoHXaPxeYPJqUm\r\nX+nyT7efu\/Dd0Z6Qu9R6+tZQ\/Kv+iuyvTbuudh13Tngaen4lua4tNwieQ9l7pu+S\r\nM3dOeRaGYu63950sbH22oaCuv+\/myGCguSox+jwtPX6+I2HbaHPLg\/rk0qaHOycj\r\nOSVUh3us517d4uGs20ZXZUogv7IlZ2td5\/bi2fW+b1N5EnwUpVN3HPGvBj69Tsv6\r\nkb87MmVeLBp\/3DvLOrovvysobnTluhPnDs6ML8hoaTbacrQx\/Gbf6s\/S66656Pnl\r\n3zzjEtQ=\r\n=I8zr\r\n-----END PGP MESSAGE-----\r\n\r\nAnd finally, I am proving ownership of this host by posting or\r\nappending to this document.\r\n\r\nView my publicly-auditable identity here: https:\/\/keybase.io\/seanrose\r\n\r\n==================================================================\r\n');
        }
    });
});
