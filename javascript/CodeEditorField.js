const textarea = $('textarea.codeeditor')

// hide the textarea
textarea.hide();

// create the editor div
const divID = textarea.attr('id')
const $div = divID

$($div).insertAfter(textarea);
ace.config.set('modePath', textarea.data('ace-path'));
ace.config.set('themePath', textarea.data('ace-path'));
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
editor.getSession().setMode(textarea.data('mode'));
editor.setTheme('ace/theme/' + textarea.data('theme'));
var lineHeight = (editor.renderer.lineHeight > 1 ? editor.renderer.lineHeight : 16)

$($div).css('min-height', lineHeight * textarea.attr('rows') + 35 + 'px');

textarea.addClass('done');

