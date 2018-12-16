/**
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
            }
        }
        return re;
    };
    ;
    Object.defineProperty(Column.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Column.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Column.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            this._label = value;
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
    Object.defineProperty(Column.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Column.columns = {};
    return Column;
}());
//# sourceMappingURL=Column.js.map