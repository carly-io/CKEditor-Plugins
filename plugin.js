CKEDITOR.plugins.add('blockquoteWithFooter', {
    icons: 'blockq',
    init: function (editor) {
        editor.addCommand('blockquoteWithFooter', new CKEDITOR.dialogCommand('blockquoteWithFooterDialog'));
        editor.ui.addButton('BlockquoteWithFooter', {
            label: 'Insert Block Quote',
            command: 'blockquoteWithFooter',
            toolbar: 'insert'
        });
        CKEDITOR.dialog.add('blockquoteWithFooterDialog', this.path + 'dialogs/blockquoteWithFooter.js');
    }
});
