var xray = require('x-ray');

xray('http://jsconf.be/en/')
    .select([{
        $root: '.schedule article',
        title: 'h3',
        description: 'p'
    }])
    .write('sessions.json');
