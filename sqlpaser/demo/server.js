/**
<<<<<<< HEAD
 * 字段、自定义列
 */
var Column = /** @class */ (function () {
    function Column(option) {
        this._id = option['_id'];
        this._label = option['_label'];
        this._pId = option['pId'];
        this._name = option['_name'];
        Column.columns[option['_id']] = this;
    }
    Column.findById = function (id) {
        return Column.columns[id];
    };
    ;
    Column.findAllByPId = function (pId) {
        var re = [];
        for (var col in this.columns) {
            if (this.columns[col]._pId === pId) {
                re.push(this.columns[col]);
=======
 * Created by s on 2018/5/27.
 */
var Column = /** @class */ (function () {
    function Column() {
    }
    Column.findAll = function () {
        var re = [];
        for (var t in Column._columnLib) {
            re.push(Column._columnLib[t]);
        }
        return re;
    };
    Column.findById = function (id) {
        return Column._columnLib[id];
    };
    Column.findByPId = function (pId) {
        var re = [], ob;
        for (var t in Column._columnLib) {
            ob = Column._columnLib[t];
            if (ob._pId === pId) {
                re.push(ob);
>>>>>>> 5f5edfa059637e1f4b17a6659568ee24130b5288
            }
        }
        return re;
    };
<<<<<<< HEAD
    ;
    Object.defineProperty(Column.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
=======
    Object.defineProperty(Column.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
>>>>>>> 5f5edfa059637e1f4b17a6659568ee24130b5288
        },
        enumerable: true,
        configurable: true
    });
<<<<<<< HEAD
    Object.defineProperty(Column.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
=======
    Object.defineProperty(Column.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            this._label = value;
>>>>>>> 5f5edfa059637e1f4b17a6659568ee24130b5288
        },
        enumerable: true,
        configurable: true
    });
<<<<<<< HEAD
    Object.defineProperty(Column.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            this._label = value;
=======
    Object.defineProperty(Column.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
>>>>>>> 5f5edfa059637e1f4b17a6659568ee24130b5288
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Column.prototype, "pId", {
        get: function () {
            return this._pId;
        },
        set: function (value) {
            this._pId = value;
        },
        enumerable: true,
        configurable: true
    });
<<<<<<< HEAD
    Object.defineProperty(Column.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
=======
    Object.defineProperty(Column, "columnLib", {
        get: function () {
            return this._columnLib;
>>>>>>> 5f5edfa059637e1f4b17a6659568ee24130b5288
        },
        enumerable: true,
        configurable: true
    });
<<<<<<< HEAD
    Column.columns = {};
    return Column;
}());
/**
 * 表或者视图
 */
var TableView = /** @class */ (function () {
    function TableView(option) {
        this._id = option['id'];
        this._label = option['label'];
        this._name = option['name'];
        this._columns = option['columns'];
        TableView.tables[option['id']] = this;
    }
    TableView.findById = function (id) {
        return TableView.tables[id];
    };
    TableView.findAll = function () {
        var re = [];
        for (var table in TableView.tables) {
            re.push(TableView.tables[table]);
        }
        return re;
    };
    Object.defineProperty(TableView.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
=======
    return Column;
}());
/**
 * Created by s on 2018/5/27.
 */
var Line = /** @class */ (function () {
    function Line(options) {
        this._leftTableId = options['leftTableId'];
        this._rightTableId = options['rightTableId'];
        this._type = options['type'];
        this._leftColId = options.leftColId;
        this._rightColId = options.rightColId;
        this._oper = options.oper;
    }
    Object.defineProperty(Line.prototype, "leftTableId", {
        get: function () {
            return this._leftTableId;
        },
        set: function (value) {
            this._leftTableId = value;
>>>>>>> 5f5edfa059637e1f4b17a6659568ee24130b5288
        },
        enumerable: true,
        configurable: true
    });
<<<<<<< HEAD
    Object.defineProperty(TableView.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
=======
    Object.defineProperty(Line.prototype, "rightTableId", {
        get: function () {
            return this._rightTableId;
        },
        set: function (value) {
            this._rightTableId = value;
>>>>>>> 5f5edfa059637e1f4b17a6659568ee24130b5288
        },
        enumerable: true,
        configurable: true
    });
<<<<<<< HEAD
    Object.defineProperty(TableView.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            this._label = value;
=======
    Object.defineProperty(Line.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "leftColId", {
        get: function () {
            return this._leftColId;
        },
        set: function (value) {
            this._leftColId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "rightColId", {
        get: function () {
            return this._rightColId;
        },
        set: function (value) {
            this._rightColId = value;
>>>>>>> 5f5edfa059637e1f4b17a6659568ee24130b5288
        },
        enumerable: true,
        configurable: true
    });
<<<<<<< HEAD
    Object.defineProperty(TableView.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        set: function (value) {
            this._columns = value;
=======
    Object.defineProperty(Line.prototype, "oper", {
        get: function () {
            return this._oper;
        },
        set: function (value) {
            this._oper = value;
>>>>>>> 5f5edfa059637e1f4b17a6659568ee24130b5288
        },
        enumerable: true,
        configurable: true
    });
<<<<<<< HEAD
    TableView.tables = {};
    return TableView;
}());
=======
    return Line;
}());
define("Table", ["require", "exports", "jquery"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Table = /** @class */ (function () {
        function Table(id, name, label, cols) {
            this._id = id;
            this._name = name;
            this._label = label;
            this._cols = cols;
            Table._tableLib[id] = this;
        }
        Table.findAll = function () {
            var re = [];
            for (var t in Table._tableLib) {
                re.push(Table._tableLib[t]);
            }
            return re;
        };
        Table.findById = function (id) {
            return Table._tableLib[id];
        };
        Object.defineProperty(Table.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (value) {
                this._id = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Table.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Table.prototype, "label", {
            get: function () {
                return this._label;
            },
            set: function (value) {
                this._label = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Table.prototype, "cols", {
            get: function () {
                return this._cols;
            },
            set: function (value) {
                this._cols = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Table, "tableLib", {
            get: function () {
                return this._tableLib;
            },
            enumerable: true,
            configurable: true
        });
        return Table;
    }());
});
>>>>>>> 5f5edfa059637e1f4b17a6659568ee24130b5288
//# sourceMappingURL=server.js.map