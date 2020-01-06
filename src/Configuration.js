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

import RouteShoutParser from './RouteShoutParser';

class Configuration {
    constructor() {
        // Steamboat Sprints, CO
        this.center = [40.469178, -106.823354];
        this.agencies = [
            {
                name: 'Routes',
                parser: new RouteShoutParser('', '',
                                             'https://steamboat.gotransitapp.com/api/no.php/',
                                             [
                                                 [1, 'Blue', 'Blue Line', '2F54E8'],
                                                 [2, 'Green', 'Green Line', '53EB05'],
                                                 [3, 'Night Condos', 'Night Line Condos 19%252F20', 'FC75E5'],
                                                 [4, 'Night Winter', 'Night Line Summer', 'F00089'],
                                                 [5, 'Orange', 'Orange Line', 'ED7D31'],
                                                 [6, 'Purple', 'Purple Line', '8000F6'],
                                                 [7, 'Red', 'Red Line', 'FF0000'],
                                                 [8, 'Regional', 'Regional Shuttle', 'C55A00'],
                                                 [9, 'Yellow CMC', 'Yellow Line to CMC', 'FFFF00'],
                                                 [10, 'Yellow Hilltop', 'Yellow Hilltop', 'FFFF00'],
                                                 [11, 'Yellow On-Call', 'Yellow On-Call 2019', 'FEE543']
                                             ]
                                            )
            }
        ];
    }
}

export default Configuration;
