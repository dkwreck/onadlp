module.exports = {
    matchMedia: function() {
        if ( window.matchMedia('(max-width: 10px)').matches ) {
            return 'narrowest'
        }
        if ( window.matchMedia('(max-width: 768px)').matches ) {
            return 'narrow'
        }
        if ( window.matchMedia('(max-width: 960px)').matches ) {
            return 'wide';
        }
        if ( window.matchMedia('(max-width: 1440px)').matches ) {
            return 'widest';
        }
    }
}