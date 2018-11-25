/**
 * 字段、自定义列
 */
class Column {
    private _id: string;
    private _name: string;
    private _label: string;
    private _pId: string;
    private _type: string;
    static columns = {};

    constructor(option: object){
        this._id = option['_id'];
        this._label = option['_label'];
        this._pId = option['pId'];
        this._name = option['_name'];
        Column.columns[option['_id']] = this;
    }


    static findById(id: string): Column {
        return Column.columns[id];
    };

    static findAllByPId(pId: string): Array<Column>{
        var re: Array<Column> = [];
        for (var col in this.columns) {
            if(this.columns[col]._pId === pId){
                re.push(this.columns[col]);
            }
        }
        return re;
    };

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get label(): string {
        return this._label;
    }

    set label(value: string) {
        this._label = value;
    }

    get pId(): string {
        return this._pId;
    }

    set pId(value: string) {
        this._pId = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }
}