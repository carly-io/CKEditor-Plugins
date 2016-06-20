CKEDITOR.plugins.add('blockquoteWithFooter', {
    icons: 'blockquoteWithFooter',
    init: function (editor) {
        editor.addCommand('blockquoteWithFooter', new CKEDITOR.dialogCommand('blockquoteWithFooterDialog'));
        editor.ui.addButton('BlockquoteWithFooter', {
            label: 'Insert Block Quote',
            command: 'blockquoteWithFooter',
            toolbar: 'insert'
        });
        
        /*Context menus*/
        if (editor.contextMenu) {
            
        }

        if ( editor.contextMenu ) {
            editor.addMenuGroup('blockqWithFootGroup');
            editor.addMenuItem('blockquoteItem', {
                label: 'Edit BlockQuote',
                icon: this.path + 'icons/blockquoteWithFooter.png',
                command: 'blockquoteWithFooter',
                group: 'blockqWithFootGroup'
            });

            editor.contextMenu.addListener( function( element ) {
                if ( element.getAscendant( 'blockquote', true ) ) {
                    return { blockquoteItem: CKEDITOR.TRISTATE_OFF };
            }
            });
        }


        CKEDITOR.dialog.add('blockquoteWithFooterDialog', this.path + 'dialogs/blockquoteWithFooter.js');

    }
});
