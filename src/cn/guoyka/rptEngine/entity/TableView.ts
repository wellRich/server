/**
 * 表或者视图
 */
class TableView{
    private _id: string;
    private _name: string;
    private _label: string;
    private _columns: Array<Column>;
    public static tables = {};
    constructor(option: object){
        this._id = option['id'];
        this._label = option['label'];
        this._name = option['name'];
        this._columns = option['columns'];
        TableView.tables[option['id']] = this;
    }

    static findById(id: string): TableView{
        return TableView.tables[id];
    }

    static findAll(): Array<TableView>{
        var re: Array<TableView> = [];
        for(var table in TableView.tables){
            re.push(TableView.tables[table])
        }
        return re;
    }

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


    get columns(): Array<Column> {
        return this._columns;
    }

    set columns(value: Array<Column>) {
        this._columns = value;
    }
}

