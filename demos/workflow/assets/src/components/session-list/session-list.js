'use strict';  // Used in: page-index

import '../session-item/session-item.js';

angular.module('app.components')

.directive('sessionList',function() {
    return {
        restrict : 'E',
        scope: {
            sessions: '='
        },
        bindToController: true,
        controllerAs: 'state',
        controller: function() {
            
        },
        template: `
            <div class="list-group">

                <session-item 
                    ng-repeat="session in state.sessions"
                    session="session">
                </session-item>

            </div>
        `
    };
});