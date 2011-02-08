// ==========================================================================
// Project:   The M-Project - Mobile HTML5 Application Framework
// Copyright: �2010 M-Way Solutions GmbH. All rights reserved.
// Creator:   Sebastian
// Date:      04.11.2010
// License:   Dual licensed under the MIT or GPL Version 2 licenses.
//            http://github.com/mwaylabs/The-M-Project/blob/master/MIT-LICENSE
//            http://github.com/mwaylabs/The-M-Project/blob/master/GPL-LICENSE
// ==========================================================================

Todos2.Note = M.Model.create({

    __name__: 'Note',

    usesValidation: NO,

    title: M.Model.attr('String', {
        isRequired: YES,
        defaultValue: ''
    }),

    text: M.Model.attr('String', {
        isRequired: YES,
        defaultValue: ''
    }),

    date: M.Model.attr('Date', {
        defaultValue: ''
    })

}, M.DataProviderLocalStorage);