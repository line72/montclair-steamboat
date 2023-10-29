/* -*- Mode: rjsx -*- */

/*******************************************
 * Copyright (2018)
 *  Marcus Dillavou <line72@line72.net>
 *  http://line72.net
 *
 * Montclair:
 *  https://github.com/line72/montclair
 *  https://montclair.line72.net
 *
 * Licensed Under the GPLv3
 *******************************************/

import RouteShout2Parser from './RouteShout2Parser';

class Configuration {
    constructor() {
        // Steamboat Sprints, CO
        this.center = [40.469178, -106.823354];
        this.tileserver = {
            url: 'https://steamboat.gotransitapp.com/tiles/{z}/{x}/{y}.png',
            subdomains: ''
        };
        this.agencies = [
            {
                name: 'Routes',
                hideRouteNumber: true,
                parser: new RouteShout2Parser('https://steamboat.gotransitapp.com/api/no.php/routeshout/api/v2.0',
                                              1, 'RouteShoutAPIAdapterv2.0')
            }
        ];
    }
}

export default Configuration;
