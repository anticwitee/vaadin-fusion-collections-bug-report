import { makeAutoObservable, runInAction } from 'mobx';
import { DummyEndpoint } from 'Frontend/generated/DummyEndpoint';
import Dummy from 'Frontend/generated/com/example/application/data/endpoint/DummyEndpoint/Dummy';
import DummyModel from 'Frontend/generated/com/example/application/data/endpoint/DummyEndpoint/DummyModel';

export class DummyStore {

  dummy : Dummy = DummyModel.createEmptyValue();

  constructor(){
    makeAutoObservable(this);
  }

  async fetchDummy(){
    const response = await DummyEndpoint.endpoint();
    if (response !== undefined){
      runInAction(() => {
        this.dummy = response;
      })
    }
  }
}

export const dummyStore = new DummyStore();