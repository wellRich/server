;
// AMD模式
define(["jquery", "table"], function ($, Table) {
    var Column = function (option) {
        option = option || {};
        this.id = option.id;
        this.name = option.name;
        this.label = option.label;
        this.pId = option.pId;
        this.type = option.type;


        if (Column.columns === undefined) {
            Column.columns = {};
        }

        if (this.id !== undefined) {
            Column.columns[this.id] = this;
        }
    };

    //通过id查找实例
    Column.findById = function (id) {
        return Column.columns[id];
    };

    //查找同一表下的col
    Column.findByPId = function (pId) {
        var cols = [], col, columns = Column.columns;
        for (var i in columns) {
            col = columns[i];
            if (col.pId == pId) {
                cols.push(col);
            }
        }
        return cols;
    };

    //查找所有的col
    Column.findAll = function () {
        return Column.columns;
    };

    Column.prototype = {
        constructor: Column,
        findById: Column.findById,
        findAll: Column.findAll,
        findByPId: Column.findByPId,
        getParent: function () {
            if (this.pId !== undefined) {
                return Table.findById(this.pId);
            }
        }

    };

    return Column;
});