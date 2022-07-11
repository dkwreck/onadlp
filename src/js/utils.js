module.exports = {
    matchMedia: function() {
        if ( window.matchMedia('(min-width: 721px)').matches ) {
            return 'wide';
        } else {
            return 'narrow';
        }
    }
}