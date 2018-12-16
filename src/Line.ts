/**
 * Created by s on 2018/5/27.
 */
class Line{

    //左表
    private _leftTableId: string;

    //右表
    private _rightTableId: string;

    //连接类型，内连接 、左连接 、右连接 等等
    private _type: string;

    //左表连接列
    private _leftColId: string;


    //右表连接列
    private _rightColId: string;

    //连接比较符
    private _oper: string;


    constructor(options: any) {
        this._leftTableId = options['leftTableId'];
        this._rightTableId = options['rightTableId'];
        this._type = options['type'];
        this._leftColId = options.leftColId;
        this._rightColId = options.rightColId;
        this._oper = options.oper;
    }


    get leftTableId(): string {
        return this._leftTableId;
    }

    set leftTableId(value: string) {
        this._leftTableId = value;
    }

    get rightTableId(): string {
        return this._rightTableId;
    }

    set rightTableId(value: string) {
        this._rightTableId = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get leftColId(): string {
        return this._leftColId;
    }

    set leftColId(value: string) {
        this._leftColId = value;
    }

    get rightColId(): string {
        return this._rightColId;
    }

    set rightColId(value: string) {
        this._rightColId = value;
    }

    get oper(): string {
        return this._oper;
    }

    set oper(value: string) {
        this._oper = value;
    }
}