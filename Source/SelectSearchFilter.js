/*
---
description: A great Mootools plugin to add live search/filter and a custom design to select form HTML element(s).

license: MIT-style

authors:
- Jean-Nicolas Boulay Desjardins (http://jean-nicolas.name/)

requires:
- core/1.4:   '*'

provides: SelectSearchFilter

...
*/

var SelectSearchFilter = new Class({
    
    Implements: [Options, Events],
    
    options: {
        errors: {
            0: 'You did not select any element or elements.'
        }
    },
    
    initialize: function(e, options){
        this.setOptions(options);
        this.attach(e);
        this.fireEvent('initialize', [this]);
    },
    
    errors: function(error) {
        this.fireEvent('error', [error, this.options.errors[error]]);
        throw new Error(this.options.errors[error]);
    },
    
    attach: function(e) {
        
        this.selects = $$(document.id(e) || document.getElements(e));
        
        if (this.selects.length == 0) {this.errors(0);}
        
        var sel = [];
        
        this.selects.each(function(select){
    
            var options = [];

            var selectOptions = select.getChildren('option');
            
            selectOptions.each(function(option){
                
                options.include(new Element('li').adopt(
                    new Element('a', {
                        'href': '#' + option.get('value'),
                        'text': option.get('text')
                    })
                ));
                
            });

            var selector = select;
    
            var wrap = new Element('div', {
                'class': 'SelectSearchFilter-wrap inline-block'
            }).wraps(selector);
            
            this.selectorWrap = wrap;
    
            var selectSearchFilterBox = new Element('div', {
                'class': 'SelectSearchFilter-box inline-block'
            }).inject(wrap, 'top');
    
            var optionsBox = new Element('div', {
                'class': 'SelectSearchFilter-optionsBox',
                'styles': {
                    'display': 'none'
                }
            }).inject(wrap, 'bottom');
    
            var searchInput = new Element('input', {
                'type': 'search',
                'class': 'SelectSearchFilter-input'
            }).inject(selectSearchFilterBox, 'top');
    
            optionsBox.setStyle('width', selectSearchFilterBox.getStyle('width'));
    
            var selectSearchButton = new Element('button', {
                'class': 'SelectSearchFilter-button',
                'styles': {
                    'height': selectSearchFilterBox.getStyle('height')
                },
                'events': {
                    'click': function(e) {
                        e.preventDefault();
                            if (optionsBox.getStyle('display') != 'block') {
                                optionsBox.setStyle('display', 'block');
                            } else {
                                optionsBox.setStyle('display', 'none');
                        }
                    }
                }
            }).inject(selectSearchFilterBox, 'bottom');
    
            this.list = new Element('ul').adopt(options).inject(optionsBox, 'top');
    
            selector.setStyle('display', 'none');
            
            this.searchItems = this.list.getElements('li').map(function(item){
                return {
                    element: item,
                    string: item.get('text')
                };
            });

            var hideOptionsBoxClickEvent = function(e) {
                if(wrap && !e.target || !document.id(e.target).getParents().contains(wrap)) {
                    this.hideOptionsBox(optionsBox);
                }
            }.bind(this);

            $$('html, body').addEvent('click', hideOptionsBoxClickEvent);
            
            this.fireEvent('attach', [wrap]);
    
        }.bind(this));
        
    },
    
    detach: function() {
        
        this.els = this.selects;
        
        document.id(document.body).removeEvent('click');
        
        //this.selects.dispose();
        this.selects.getChildren('select').setStyle('display', 'block');
        this.fireEvent('detach', [what]);
        
    },
    
    addOption: function(text, value) {
        if (value == null) {value = text;}
        
        this.fireEvent('addOption', [value, text]);
    },
    
    showOptionsBox: function(optionsBox) {
        
        this.fireEvent('showOptionsBox', [optionsBox]);
    },
    
    hideOptionsBox: function(optionsBox) {
        optionsBox.setStyle('display', 'none');
        
        this.fireEvent('hideOptionsBox', [optionsBox]);
    },
    
    removeOption: function(el) {
        
        this.fireEvent('removeOption', [el]);
    },
    
    filter: function() {
        var search = this.input.get('value').replace(/\W/g, '').toLowerCase();
        
        if (this.currentFilter == search) return;
        
        this.currentFilter = search;
        
        
    }
    
});