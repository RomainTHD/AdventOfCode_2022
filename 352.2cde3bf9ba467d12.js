"use strict";(self.webpackChunkadvent_of_code_2022=self.webpackChunkadvent_of_code_2022||[]).push([[352],{352:(p,i,c)=>{c.r(i),c.d(i,{default:()=>h});var u=c(562),e=(()=>{return(t=e||(e={}))[t.Rock=0]="Rock",t[t.Paper=1]="Paper",t[t.Scissors=2]="Scissors",e;var t})(),a=(()=>{return(t=a||(a={}))[t.Lose=0]="Lose",t[t.Draw=1]="Draw",t[t.Win=2]="Win",a;var t})();class h extends u.t{transform1(r){return r.map(s=>{const[n,o]=s.split(" ");return[this.stringToShape(n),this.stringToShape(o)]})}transform2(r){return r.map(s=>{const[n,o]=s.split(" ");return[this.stringToShape(n),this.stringToEnd(o)]})}part1(r){return r.map(([s,n])=>this.shapeToScore(n)+this.gameToScore(s,n)).reduce((s,n)=>s+n)}part2(r){return r.map(([s,n])=>this.endToScore(n)+this.shapeToScore(this.endToShape(s,n))).reduce((s,n)=>s+n)}endToScore(r){return r===a.Win?6:r===a.Draw?3:0}endToShape(r,s){if(s===a.Draw)return r;switch(r){case e.Rock:return s===a.Win?e.Paper:e.Scissors;case e.Paper:return s===a.Win?e.Scissors:e.Rock;case e.Scissors:return s===a.Win?e.Rock:e.Paper}}shapeToScore(r){switch(r){case e.Rock:return 1;case e.Paper:return 2;case e.Scissors:return 3}}winningGame(r,s){switch(r){case e.Rock:return s===e.Paper;case e.Paper:return s===e.Scissors;case e.Scissors:return s===e.Rock}}gameToScore(r,s){return r===s?3:this.winningGame(r,s)?6:0}stringToShape(r){switch(r){case"A":case"X":return e.Rock;case"B":case"Y":return e.Paper;case"C":case"Z":return e.Scissors;default:throw new Error(`Unknown operator ${r}`)}}stringToEnd(r){switch(r){case"X":return a.Lose;case"Y":return a.Draw;case"Z":return a.Win;default:throw new Error(`Unknown operator ${r}`)}}}}}]);