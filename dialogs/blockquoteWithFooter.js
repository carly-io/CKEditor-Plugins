CKEDITOR.dialog.add('blockquoteWithFooterDialog', function (editor) {
    return {
        title: 'Blockquote Properties',
        minWidth: 400,
        minHeight: 200,

        contents: [
            {
                id: 'tab-basic',
                label: 'Basic Settings',
                elements: [
                    {
                        type: 'textarea',
                        id: 'quote',
                        label: 'Quote Text',
                        validate: CKEDITOR.dialog.validate.notEmpty("Quote field cannot be empty.")
                    },
                    {
                        type: 'text',
                        id: 'attribution',
                        label: 'Attribution',
                    }
                ]
            }
        ],
        onOk: function () {
            var dialog = this;
            var quoteElem = editor.document.createElement('blockquote');
            quoteElem.setText(dialog.getValueOf('tab-basic', 'quote'));
            
            var attribution = dialog.getValueOf('tab-basic', 'attribution');
            if (attribution) {
                var attributionElem = editor.document.createElement('footer');
                attributionElem.setText(attribution);
                attributionElem.appendTo(quoteElem);
            }

            editor.insertElement(quoteElem);
        }
    };
});
