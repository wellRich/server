/**
 * Created by s on 2018/5/27.
 */
class Column{
    //名称
    private _name: string;
    private _label: string;

    private _id: string;


    //对应的表格id
    private _pId: string;
    private static _columnLib: object;

    static findAll(): Array<Column>{
        let re: Array<Column> = [];
        for(let t in Column._columnLib){
            re.push(Column._columnLib[t]);
        }
        return re;
    }

    static findById(id: string): Column{
        return Column._columnLib[id];
    }

    static findByPId(pId: string): Array<Column>{
        let re: Array<Column> = [], ob: Column;
        for(let t in Column._columnLib){
            ob = Column._columnLib[t];
            if(ob._pId === pId){
                re.push(ob);
            }
        }
        return re;
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

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get pId(): string {
        return this._pId;
    }

    set pId(value: string) {
        this._pId = value;
    }

    static get columnLib(): Object {
        return this._columnLib;
    }
}