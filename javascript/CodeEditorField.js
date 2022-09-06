(function($) {
    $.entwine(function($) {
        $("textarea.codeeditor").entwine({
            onmatch: function() {
                var textarea = this;

                // hide the textarea
                this.hide();

                // create the editor div
                var divID = this.attr('id');
                var $div = divID

                $($div).insertAfter(this);
                ace.config.set('modePath', this.data('ace-path'));
                ace.config.set('workerPath', this.data('ace-path'));
                ace.config.set('themePath', this.data('ace-path'));
                var editor = ace.edit(divID);

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
                var lineHeight = (editor.renderer.lineHeight > 1 ? editor.renderer.lineHeight : 16)

                $div.css('min-height', lineHeight * textarea.attr('rows') + 35 + 'px');

                editor.resizable = true
                editor.resize("both");
                this.setEditor(editor);
                this.addClass('done');

                this._super(e);
            },
        });
    });
})(jQuery);
