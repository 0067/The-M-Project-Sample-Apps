// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 0.0.6
//
// Project: twitter
// Controller: TwitterController
// ==========================================================================

Twitter.TwitterController = M.Controller.extend({

    results: null,

    userResults: null,

    searchString: null,

    username: null,

    search: function() {
        //var searchString = Twitter.app.page1.content.searchField.value;
        var searchString = M.ViewManager.getView('page1', 'searchField').value;
        if(!searchString) {
            return;
        }

        M.LoaderView.show();

        M.Request.init({
            url: 'twitter/search.json?q=' + searchString + '&rpp=10',
            isJSON: YES,
            beforeSend: function(req) {
                //...
            },
            onSuccess: function(data){
                M.LoaderView.hide();
                if(data && data.results && data.results.length > 0) {
                    Twitter.TwitterController.set('results', data);
                    Twitter.TwitterController.set('searchString', 'Results for \'' + searchString + '\'');
                    M.Controller.switchToPage(M.ViewManager.getPage('page2'));
                } else if (data && data.results) {
                   M.DialogView.alert({
                       title: 'Nothing found...',
                       message: 'Your search for \'' + searchString + '\' didn\'t bring up any results. Please try something else.'
                   });
                } else {
                   M.DialogView.alert({
                       title: 'Connection Error',
                       message: 'No connection could be established! Please check your connection status and try again. If this message keeps coming up, you probably didn\'t add the necessary proxy to your server.'
                   });
                }
            },
            onError: function(data){
                M.LoaderView.hide();
            }
        }).send();
    },

    showUser: function(id) {
        var view = M.ViewManager.getViewById(id);
        var username = M.ViewManager.getView(view, 'label1').value;

        if(!username) {
            return;
        }

        M.LoaderView.show();

        M.Request.init({
            url: 'twitter/search.json?from=' + username + '&rpp=10',
            isJSON: YES,
            beforeSend: function(req) {
                //...
            },
            onSuccess: function(data){
                M.LoaderView.hide();
                Twitter.TwitterController.set('userResults', data);
                Twitter.TwitterController.set('username', username);
                M.Controller.switchToPage(M.ViewManager.getPage('page3'));
            },
            onError: function(data){
                M.LoaderView.hide();
            }
        }).send();
    }

});