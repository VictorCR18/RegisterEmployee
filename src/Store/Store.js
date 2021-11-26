import { makeObservable, observable } from 'mobx';

class Store{
    users = [];

    constructor( ){
        makeObservable(this, {
            users: observable,
        })
    }
}


export default new Store();