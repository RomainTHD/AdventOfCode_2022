"use strict";(self.webpackChunkadvent_of_code_2022=self.webpackChunkadvent_of_code_2022||[]).push([[637],{637:(f,r,a)=>{a.r(r),a.d(r,{default:()=>d});var l=a(562);class d extends l.t{transform1(n){return n.map(t=>{const[s,u]=t.split(","),[c,i]=s.split("-").map(e=>parseInt(e)),[o,h]=u.split("-").map(e=>parseInt(e));return[{start:c,end:i},{start:o,end:h}]})}part1(n){return n.filter(([t,s])=>this.containsFull(t,s)||this.containsFull(s,t)).length}part2(n){return n.filter(([t,s])=>this.containsPart(t,s)||this.containsPart(s,t)).length}containsFull(n,t){return n.start<=t.start&&n.end>=t.end}containsPart(n,t){return n.start<=t.start&&n.end>=t.start||n.start<=t.end&&n.end>=t.end}}}}]);