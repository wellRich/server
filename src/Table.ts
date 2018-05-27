/**
 * Created by s on 2018/5/27.
 */
class Table{
    private _name: string;
    private _label: string;
    private _id: string;

    //所具有的列
    private _cols: Array<Column>;
    private static _tableLib: object;

    constructor(id: string, name: string, label: string, cols?: Array<Column>) {
        this._id = id;
        this._name = name;
        this._label = label;
        this._cols =  cols;
        Table._tableLib[id] = this;
    }

    static findAll(): Array<Table>{
        let re: Array<Table> = [];
        for(let t in Table._tableLib){
            re.push(Table._tableLib[t]);
        }
        return re;
    }

    static findById(id: number): Table{
        return Table._tableLib[id];
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

    get cols(): Array<Column> {
        return this._cols;
    }

    set cols(value: Array<Column>) {
        this._cols = value;
    }

    static get tableLib(): Object {
        return this._tableLib;
    }

}