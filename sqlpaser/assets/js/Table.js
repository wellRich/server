;
(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        // AMD模式
        define(["jquery"], function ($) {
            return factory($);
        });
    } else {
        // 全局模式
        factory(jQuery);
    }
}(this, function($) {
    var Table = function (option) {
        option = option || {};
        this.id = option.id;
        this.name = option.name;
        this.label = option.label;
        this.columns = option['columns'] || [];

        if (Table.tables === undefined) {
            Table.tables = {};
        }

        if (this.id !== undefined) {
            Table.tables[this.id] = this;
        }
    };

    Table.findById = function (id) {
        return Table.tables[id];
    };

    Table.findAll = function () {
        return Table.tables;
    };

    Table.prototype = {
        constructor: Table,
        findById: Table.findById,
        findAll: Table.findAll,
        getId: function () {
            return this.id;
        },
        getColumns: function () {
            return this.columns;
        }

    };

    return Table;
}));