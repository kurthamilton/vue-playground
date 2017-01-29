(function() {
    let model = {
        title: 'My Vue Title'
    };

    let app = new Vue({
        el: '#app',
        data: model
    });

    document.title = model.title;
})();