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
                        validate: CKEDITOR.dialog.validate.notEmpty("Quote field cannot be empty."),
                        setup: function (element) {
                            var textNode = element.getChild(0);
                            if (textNode) {
                                this.setValue(textNode.getText())
                            }
                            else {
                                this.setValue('');
                            }
                            
                        },

                        commit: function (element) {
                            element.setText(this.getValue());
                        }
                    },
                    {
                        type: 'text',
                        id: 'attribution',
                        label: 'Attribution',
                        setup: function (element) {
                            var footerElem = element.getChild(1);
                            if (footerElem) {
                                this.setValue(footerElem.getText());
                            }
                            else {
                                this.setValue('');
                            }
                        },

                        commit: function (element) {
                            
                            var footerElem = element.getChild(1);
                            if (footerElem) {
                                if (this.getValue()) {
                                    footerElem.setText(this.getValue());
                                }
                                else {
                                    footerElem.remove();
                                }
                            }
                            else {
                                if (this.getValue()) {
                                    var attributionElem = editor.document.createElement('footer');
                                    attributionElem.setText(this.getValue());
                                    attributionElem.appendTo(element);
                                }
                            }
                            
                        }
                    }
                ]
            }
        ],
        
        onShow: function () {
            var selection = editor.getSelection();
            var element = selection.getStartElement();
            if (element)
                element = element.getAscendant('blockquote', true);

            if (!element || element.getName() != 'blockquote') {
                element = editor.document.createElement('blockquote');
                this.insertMode = true;
            }
            else
                this.insertMode = false;

            this.element = element;

            if (!this.insertMode)
                this.setupContent(element);
        },
        onOk: function () {
            var dialog = this;
            var quoteElem = this.element;
            this.commitContent(quoteElem);
            if (this.insertMode)
                editor.insertElement(quoteElem);
        }
    };
});
