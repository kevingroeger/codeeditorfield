(function($) {
    $.entwine(function($) {
        $("div.codeeditorfield").entwine({
            onmatch: function() {
                var fieldName = $(this).data('field');
                var field = ace.edit(this.attr('id'));
                field.session.setMode(this.attr('data-mode'));
                field.setTheme(this.attr('data-theme'));
                field.getSession().on('change', function() {
                    $("textarea[name=" + fieldName + "]").val(field.getSession().getValue());
                });
                this._super();
            }
        });
    });
})(jQuery);
