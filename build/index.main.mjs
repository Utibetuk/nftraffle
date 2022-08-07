// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2],
      2: [ctc0, ctc1, ctc2],
      3: [ctc0, ctc1, ctc2],
      4: [ctc0, ctc1, ctc2, ctc0, ctc3]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    nftId: ctc0,
    numTickets: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc4 = stdlib.T_Digest;
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Address;
  
  
  const v132 = stdlib.protect(ctc2, await interact.startRaffle(), {
    at: './index.rsh:31:64:application',
    fs: ['at ./index.rsh:30:9:application call to [unknown function] (defined at: ./index.rsh:30:13:function exp)'],
    msg: 'startRaffle',
    who: 'Alice'
    });
  const v133 = v132.nftId;
  const v134 = v132.numTickets;
  const v137 = stdlib.protect(ctc1, await interact.getNum(v134), {
    at: './index.rsh:32:40:application',
    fs: ['at ./index.rsh:30:9:application call to [unknown function] (defined at: ./index.rsh:30:13:function exp)'],
    msg: 'getNum',
    who: 'Alice'
    });
  const v138 = stdlib.protect(ctc1, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:33:46:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:30:9:application call to [unknown function] (defined at: ./index.rsh:30:13:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v139 = stdlib.digest(ctc3, [v138, v137]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v133, v134, v139],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:37:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:37:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v142, v143, v144], secs: v146, time: v145, didSend: v38, from: v141 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v142
        });
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v142, v143, v144], secs: v146, time: v145, didSend: v38, from: v141 } = txn1;
  ;
  ;
  stdlib.protect(ctc5, await interact.seeHash(v144), {
    at: './index.rsh:38:21:application',
    fs: ['at ./index.rsh:38:21:application call to [unknown function] (defined at: ./index.rsh:38:21:function exp)', 'at ./index.rsh:38:21:application call to "liftedInteract" (defined at: ./index.rsh:38:21:application)'],
    msg: 'seeHash',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v141, v142, v144],
    evt_cnt: 0,
    funcNum: 1,
    lct: v145,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:40:5:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'), v142]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v157, time: v156, didSend: v49, from: v155 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v142
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc0, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v157, time: v156, didSend: v49, from: v155 } = txn2;
  ;
  ;
  const v167 = stdlib.addressEq(v141, v155);
  stdlib.assert(v167, {
    at: './index.rsh:40:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn3 = await (ctc.sendrecv({
    args: [v141, v142, v144],
    evt_cnt: 0,
    funcNum: 2,
    lct: v156,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:42:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v170, time: v169, didSend: v54, from: v168 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc0, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v170, time: v169, didSend: v54, from: v168 } = txn3;
  ;
  const v171 = stdlib.addressEq(v141, v168);
  stdlib.assert(v171, {
    at: './index.rsh:42:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v176], secs: v178, time: v177, didSend: v63, from: v175 } = txn4;
  ;
  const txn5 = await (ctc.sendrecv({
    args: [v141, v142, v144, v175, v176, v138, v137],
    evt_cnt: 2,
    funcNum: 4,
    lct: v177,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:60:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v182, v183], secs: v185, time: v184, didSend: v73, from: v181 } = txn5;
      
      ;
      const v190 = stdlib.eq(v176, v183);
      const v191 = v190 ? stdlib.checkedBigNumberify('./index.rsh:65:42:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:65:46:decimal', stdlib.UInt_max, '0');
      const v192 = stdlib.eq(v191, stdlib.checkedBigNumberify('./index.rsh:67:38:decimal', stdlib.UInt_max, '1'));
      const v193 = v192 ? v141 : v175;
      sim_r.txns.push({
        kind: 'from',
        to: v193,
        tok: v142
        });
      
      sim_r.txns.push({
        kind: 'halt',
        tok: v142
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc0, ctc4, ctc6, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v182, v183], secs: v185, time: v184, didSend: v73, from: v181 } = txn5;
  ;
  const v186 = stdlib.addressEq(v141, v181);
  stdlib.assert(v186, {
    at: './index.rsh:60:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v187 = stdlib.digest(ctc3, [v182, v183]);
  const v188 = stdlib.digestEq(v144, v187);
  stdlib.assert(v188, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:61:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  const v190 = stdlib.eq(v176, v183);
  const v191 = v190 ? stdlib.checkedBigNumberify('./index.rsh:65:42:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:65:46:decimal', stdlib.UInt_max, '0');
  const v192 = stdlib.eq(v191, stdlib.checkedBigNumberify('./index.rsh:67:38:decimal', stdlib.UInt_max, '1'));
  const v193 = v192 ? v141 : v175;
  ;
  stdlib.protect(ctc5, await interact.seeOutcome(v191), {
    at: './index.rsh:71:24:application',
    fs: ['at ./index.rsh:70:7:application call to [unknown function] (defined at: ./index.rsh:70:19:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc5 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v142, v143, v144], secs: v146, time: v145, didSend: v38, from: v141 } = txn1;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v157, time: v156, didSend: v49, from: v155 } = txn2;
  ;
  ;
  const v167 = stdlib.addressEq(v141, v155);
  stdlib.assert(v167, {
    at: './index.rsh:40:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v170, time: v169, didSend: v54, from: v168 } = txn3;
  ;
  const v171 = stdlib.addressEq(v141, v168);
  stdlib.assert(v171, {
    at: './index.rsh:42:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v174 = stdlib.protect(ctc1, await interact.getNum(v143), {
    at: './index.rsh:49:45:application',
    fs: ['at ./index.rsh:48:9:application call to [unknown function] (defined at: ./index.rsh:48:13:function exp)'],
    msg: 'getNum',
    who: 'Bob'
    });
  stdlib.protect(ctc3, await interact.showNum(v174), {
    at: './index.rsh:50:21:application',
    fs: ['at ./index.rsh:48:9:application call to [unknown function] (defined at: ./index.rsh:48:13:function exp)'],
    msg: 'showNum',
    who: 'Bob'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v141, v142, v144, v174],
    evt_cnt: 1,
    funcNum: 3,
    lct: v169,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:53:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v176], secs: v178, time: v177, didSend: v63, from: v175 } = txn4;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc0, ctc2, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v176], secs: v178, time: v177, didSend: v63, from: v175 } = txn4;
  ;
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 4,
    out_tys: [ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v182, v183], secs: v185, time: v184, didSend: v73, from: v181 } = txn5;
  ;
  const v186 = stdlib.addressEq(v141, v181);
  stdlib.assert(v186, {
    at: './index.rsh:60:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v187 = stdlib.digest(ctc4, [v182, v183]);
  const v188 = stdlib.digestEq(v144, v187);
  stdlib.assert(v188, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:61:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Bob'
    });
  stdlib.protect(ctc3, await interact.seeWinner(v183), {
    at: './index.rsh:63:23:application',
    fs: ['at ./index.rsh:63:23:application call to [unknown function] (defined at: ./index.rsh:63:23:function exp)', 'at ./index.rsh:63:23:application call to "liftedInteract" (defined at: ./index.rsh:63:23:application)'],
    msg: 'seeWinner',
    who: 'Bob'
    });
  
  const v190 = stdlib.eq(v176, v183);
  const v191 = v190 ? stdlib.checkedBigNumberify('./index.rsh:65:42:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:65:46:decimal', stdlib.UInt_max, '0');
  const v192 = stdlib.eq(v191, stdlib.checkedBigNumberify('./index.rsh:67:38:decimal', stdlib.UInt_max, '1'));
  const v193 = v192 ? v141 : v175;
  ;
  stdlib.protect(ctc3, await interact.seeOutcome(v191), {
    at: './index.rsh:71:24:application',
    fs: ['at ./index.rsh:70:7:application call to [unknown function] (defined at: ./index.rsh:70:19:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAIAAEEAiAIA6CNBiYCAQAAIjUAMRhBApMpZEkiWzUBIQVbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSUMQAFMSSEGDEAA9UkkDEAAlCQSRCQ0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yEEWzX+STUFSSJbNf0hBVs1/IAEEEatczT9FlA0/BZQsDT/MQASRDQDVyggNP0WNPwWUAESRLEisgEjshIkshA0A1dIIDT/IiM0A4FoWzT8Ek0jEk2yFDT+shGzsSKyASKyEiSyEDIJshUyCrIUNP6yEbNCAXRIIQY0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBFs1/lcoIDX9STUFFzX8gATUDGzWNPwWULA0/zT+FlA0/VAxAFA0/BZQKEsBVwBwZ0gkNQEyBjUCQgE1SCU0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBFs1/lcoIDX9gARBsUBNsDT/MQASRDT/NP4WUDT9UChLAVcASGdIIQY1ATIGNQJCAOVJIwxAAFVIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEEWzX+VyggNf2ABJqLkXSwIzT+iAEUNP8xABJENP80/hZQNP1QKEsBVwBIZ0glNQEyBjUCQgCKSCEHiADVIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yEFWzX+VxAgNf2ABBYtKDs0/xZQNP4WUDT9ULAhB4gAm7EisgEishIkshAyCrIUNP+yEbMxADT/FlA0/VAoSwFXAEhnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJTE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 112,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v142",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v143",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v144",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v142",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v143",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v144",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v176",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v183",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v176",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v183",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620011b6380380620011b6833981016040819052620000269162000232565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a16200009e341560076200012b565b604080516060808201835260006020808401828152848601838152338087528884018051516001600160a01b0390811685529051890151835260019586905543909555875193840152905190921694810194909452519083015290608001604051602081830303815290604052600290805190602001906200012292919062000155565b5050506200031b565b81620001515760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200016390620002de565b90600052602060002090601f016020900481019282620001875760008555620001d2565b82601f10620001a257805160ff1916838001178555620001d2565b82800160010185558215620001d2579182015b82811115620001d2578251825591602001919060010190620001b5565b50620001e0929150620001e4565b5090565b5b80821115620001e05760008155600101620001e5565b604051606081016001600160401b03811182821017156200022c57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200024657600080fd5b604080519081016001600160401b03811182821017156200027757634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200029157600080fd5b6200029b620001fb565b60208501519092506001600160a01b0381168114620002b957600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b600181811c90821680620002f357607f821691505b602082108114156200031557634e487b7160e01b600052602260045260246000fd5b50919050565b610e8b806200032b6000396000f3fe60806040526004361061006e5760003560e01c8063832307571161004b57806383230757146100c1578063ab53f2c6146100d6578063ebdbfdcc146100f9578063f4cedab01461010c57005b80631e93b0f1146100775780632c10a1591461009b5780637eea518c146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610bea565b61011f565b6100756100bc366004610bea565b6102f3565b3480156100cd57600080fd5b50600154610088565b3480156100e257600080fd5b506100eb610487565b604051610092929190610c32565b610075610107366004610c6c565b610524565b61007561011a366004610bea565b61070c565b61012f600160005414600b6108bf565b6101498135158061014257506001548235145b600c6108bf565b60008080556002805461015b90610c7e565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610c7e565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610ccf565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161021f929190610d53565b60405180910390a1610233341560086108bf565b61024d61024633836020015160016108e5565b60096108bf565b8051610265906001600160a01b03163314600a6108bf565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151821684528989015183526002909555436001558751938401949094529051909216948101949094525190830152906080015b604051602081830303815290604052600290805190602001906102ed929190610afc565b50505050565b610303600260005414600f6108bf565b61031d8135158061031657506001548235145b60106108bf565b60008080556002805461032f90610c7e565b80601f016020809104026020016040519081016040528092919081815260200182805461035b90610c7e565b80156103a85780601f1061037d576101008083540402835291602001916103a8565b820191906000526020600020905b81548152906001019060200180831161038b57829003601f168201915b50505050508060200190518101906103c09190610ccf565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516103f3929190610d53565b60405180910390a16104073415600d6108bf565b805161041f906001600160a01b03163314600e6108bf565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151821684528989015183526003909555436001558751938401949094529051909216948101949094525190830152906080016102c9565b60006060600054600280805461049c90610c7e565b80601f01602080910402602001604051908101604052809291908181526020018280546104c890610c7e565b80156105155780601f106104ea57610100808354040283529160200191610515565b820191906000526020600020905b8154815290600101906020018083116104f857829003601f168201915b50505050509050915091509091565b61053460046000541460176108bf565b61054e8135158061054757506001548235145b60186108bf565b60008080556002805461056090610c7e565b80601f016020809104026020016040519081016040528092919081815260200182805461058c90610c7e565b80156105d95780601f106105ae576101008083540402835291602001916105d9565b820191906000526020600020905b8154815290600101906020018083116105bc57829003601f168201915b50505050508060200190518101906105f19190610d8b565b604080513381528435602080830191909152850135818301529084013560608201529091507fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a9060800160405180910390a161064f341560146108bf565b8051610667906001600160a01b0316331460156108bf565b604080516106b39161068d91602080870135928701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c82604001511460166108bf565b6106f28160200151600184602001602001358460800151146106d65760006106d9565b60015b146106e85782606001516106eb565b82515b60016108fd565b6000808055600181905561070890600290610b80565b5050565b61071c60036000541460126108bf565b6107368135158061072f57506001548235145b60136108bf565b60008080556002805461074890610c7e565b80601f016020809104026020016040519081016040528092919081815260200182805461077490610c7e565b80156107c15780601f10610796576101008083540402835291602001916107c1565b820191906000526020600020905b8154815290600101906020018083116107a457829003601f168201915b50505050508060200190518101906107d99190610ccf565b6040805133815284356020808301919091528501358183015290519192507f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc1919081900360600190a161082e341560116108bf565b6040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528b516001600160a01b03908116808c528d890151821688528d8d015187523385528e89013583526004909955436001558b51978801989098529451871699860199909952915190840152519092169481019490945251908301529060c0016102c9565b816107085760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60006108f383853085610916565b90505b9392505050565b6109088383836109f0565b61091157600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161097d91610e1c565b60006040518083038185875af1925050503d80600081146109ba576040519150601f19603f3d011682016040523d82523d6000602084013e6109bf565b606091505b50915091506109d082826001610ac1565b50808060200190518101906109e59190610e38565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610a4f91610e1c565b60006040518083038185875af1925050503d8060008114610a8c576040519150601f19603f3d011682016040523d82523d6000602084013e610a91565b606091505b5091509150610aa282826002610ac1565b5080806020019051810190610ab79190610e38565b9695505050505050565b60608315610ad05750816108f6565b825115610ae05782518084602001fd5b60405163100960cb60e01b8152600481018390526024016108dc565b828054610b0890610c7e565b90600052602060002090601f016020900481019282610b2a5760008555610b70565b82601f10610b4357805160ff1916838001178555610b70565b82800160010185558215610b70579182015b82811115610b70578251825591602001919060010190610b55565b50610b7c929150610bbd565b5090565b508054610b8c90610c7e565b6000825580601f10610b9c575050565b601f016020900490600052602060002090810190610bba9190610bbd565b50565b5b80821115610b7c5760008155600101610bbe565b600060408284031215610be457600080fd5b50919050565b600060408284031215610bfc57600080fd5b6108f68383610bd2565b60005b83811015610c21578181015183820152602001610c09565b838111156102ed5750506000910152565b8281526040602082015260008251806040840152610c57816060850160208701610c06565b601f01601f1916919091016060019392505050565b600060608284031215610be457600080fd5b600181811c90821680610c9257607f821691505b60208210811415610be457634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610cca57600080fd5b919050565b600060608284031215610ce157600080fd5b6040516060810181811067ffffffffffffffff82111715610d1257634e487b7160e01b600052604160045260246000fd5b604052610d1e83610cb3565b8152610d2c60208401610cb3565b6020820152604083015160408201528091505092915050565b8015158114610bba57600080fd5b6001600160a01b038316815281356020808301919091526060820190830135610d7b81610d45565b8015156040840152509392505050565b600060a08284031215610d9d57600080fd5b60405160a0810181811067ffffffffffffffff82111715610dce57634e487b7160e01b600052604160045260246000fd5b604052610dda83610cb3565b8152610de860208401610cb3565b602082015260408301516040820152610e0360608401610cb3565b6060820152608083015160808201528091505092915050565b60008251610e2e818460208701610c06565b9190910192915050565b600060208284031215610e4a57600080fd5b81516108f681610d4556fea2646970667358221220f7d6439d36fa135a08494a767a3d9296389ec7f4001ada737aaea5cbaf0338a664736f6c634300080c0033`,
  BytecodeLen: 4534,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:39:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:41:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:43:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:54:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:74:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
