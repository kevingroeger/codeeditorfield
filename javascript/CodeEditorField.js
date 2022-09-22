(function($) {
    $.entwine(function($) {
        $("textarea.codeeditor").entwine({
            onmatch: function() {
                const textarea = this

                // hide the textarea
                this.hide();

                // create the editor div
                const divID = this.attr('id')
                const $div = divID

                $($div).insertAfter(this);
                ace.config.set('modePath', this.data('ace-path'));
                ace.config.set('themePath', this.data('ace-path'));
                const editor = ace.edit(divID)

                // make the editor update the textarea content
                editor.getSession().setValue(textarea.val());
                editor.getSession().on('change', function(){
                    textarea.val(editor.getSession().getValue());
                    textarea.change();
                });

                editor.setAutoScrollEditorIntoView(false);
                editor.getSession().setTabSize(2);
                editor.setShowPrintMargin(false);
                editor.session.setWrapLimitRange(null, null);
                editor.session.setUseWrapMode(true);

                // set the mode (ie syntax highlighting)
                editor.getSession().setMode('ace/mode/' + this.data('mode'));
                editor.setTheme('ace/theme/' + this.data('theme'));
                const lineHeight = (editor.renderer.lineHeight > 1 ? editor.renderer.lineHeight : 16)

                $($div).css('min-height', lineHeight * textarea.attr('rows') + 35 + 'px');

                editor.setOption("maxLines", 1000)
                editor.resize(true);
                this.addClass('done');

                this._super();
            },
        });
    });
})(jQuery);
