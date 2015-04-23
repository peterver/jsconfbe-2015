'use strict';

class DataStore {

    constructor() {
        this.tree = new Baobab({
            sessions: []
        }, {
            clone: true
        });

        this.sessions = this.tree.select('sessions');
    }

    _gc(cb, scope) {
        if(scope && scope.$on) {
            scope.$on('$destroy', cb);
        }
    }

    getSessions() {
        return this.sessions.get();
    }

    onSessionsChanged(cb, scope) {
        this.sessions.on('update', cb);

        this._gc(() => this.sessions.off('update', cb), scope);
    }

}

export default new DataStore();
