import { message } from 'antd';
import {test1,test2,test3,loginAccount, spider, spider2, getChart2, getChart} from '../service/test';
interface user{
  uid:number,
  nickname:string,
  passward:string

}
interface word{
  word:string
}
export default {
    namespace: 'test',
    state: {
     mes:'后端egg通信测试',
     Mysql_data:[],
     ShowLoginStatus:0,
     LoginResp:'',
     spider_data:[],
     Chart_data:[],
     aa:'555',
     spider_mes:'',
     hotd_data:null,
     Word_data:null,

    },
    effects: {
      *test1({state} : any, { call, put } : any) {
      const a2 = yield call(test2)
      
     
      yield put({
      type: 'save',
      payload:  a2 ,
    }) },
    
    *test2({} : any, { call, put } : any) {
      const a1 = yield call(test3)
     
     yield put({
      type: 'handle',
      payload: {
       a1,},
    })    
  },
  *ShowLogin({state} : any, { call, put } : any) {
   const a=1;
   yield put({
    type: 'S2',
    payload: a
      
  })},      
  *HideLogin({state} : any, { call, put } : any) {
    const a=0;
    console.log('222')
    yield put({
     type: 'S2',
     payload: a
       
   })},
   *login({payload,callback} : any, { call, put } : any) {
    console.log(payload)

    const rep=yield call(loginAccount,payload)
   yield put({
    type: 'S3',
    payload: rep
      
  })
  if (callback) callback(rep);
    
  },       
  *spider({payload,callback,state,aa} : any, { call, put } : any) {
   
    const rep=yield call(spider,payload)
   
   
    console.log(rep)
    
    if(rep==="查询完毕，插入数据库"){
     
      
      const rep2=yield call(spider2,payload)
      console.log(rep2)
      yield put({
        type:'S5',
        payload:rep2
      })
    }},
    
    *getChart({payload,callback,state,aa} : any, { call, put } : any) {
   
      const rep=yield call(getChart)
     
     
      console.log(rep)
      
      if(rep==="查询完毕，插入数据库"){
       
        
        const rep2=yield call(getChart2)
        let word=[];
        let hotd=[];
        for(let i=0;i<rep2.data.length;i++){
          console.log(rep2.data[i].title)
          word.push(rep2.data[i].title)
          hotd.push(rep2.data[i].url)
        }
        
        yield put({
          type:'S7',
          payload:word
        })
        yield put({
          type:'S8',
          payload:hotd
        })
      }},
     
     
 
    
    },
    reducers: {
      handle( state:any, { payload }:any) {
       
        
        return { ...state, ...payload }
      },
      handle2( state:any, { payload }:any) {
        return {
          ...state,
        Mysql_data:[...state.Mysql_data, payload],
        }
      },
      save(state:any, {payload}:any) {   
        state.Mysql_data = payload;
        return {...state}
      },
      S4(state:any, {payload}:any) {   
        state.spider_data = payload;
        return {...state}
      },
      S2(state:any, {payload}:any) {   
        state.ShowLoginStatus = payload;
        return {...state}
      },
      S3(state:any, {payload}:any) {   
        state.LoginResp = payload;
        return {...state}
      },
      S5(state:any, {payload}:any) {   
        state.spider_data = payload;
        return {...state}
      },
      S6(state:any, {payload}:any) {   
        state.Chart_data = payload;
        return {...state}
      },
      S7(state:any, {payload}:any) {   
        state.Word_data = payload;
        return {...state}
      },
      S8(state:any, {payload}:any) {   
        state.hotd_data = payload;
        return {...state}
      },
    }
    

}