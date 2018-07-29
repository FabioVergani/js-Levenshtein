
//
function leven2(s1,s2){
	let a=s1,l1=a.length,b=s2,l2=b.length,v=l1!==l2,x;
	//
	if(v && (l1<l2)){//swap:
		x=l1;
		a=s2;//ora 'a' è la stringa più lunga,
		b=s1;//ora 'b' è la stringa più corta,
		l1=l2;l2=x;//aggiornati riferimenti lunghezze.
	};
	//
	x=l2!==0;
	if((l1!==0) && x){//abbiamo due strighe piene
		if(v){//di diversa lunghezza:
			let n=0;
			//
			x=-1;//OffsetCounts@Start
			while(a.substring(0,l2)===b){//fino a che la stringa A comincia con B..
				a=a.substring(l2);//rimuovila@start
				++x;//conta gli offset maggiori di uno
			};
			if(x!==0){
				n=l2*x;//OffestLenRipetizioni@Start
			};
			//
			x=0;
			while(a.substring(v=a.length-l2)===b){//fino a che la stringa A finisce con B..
				a=a.substring(0,v);//rimuovila@end
				++x;//conta gli offset maggiori di uno
			};
			if(x!==0){
				n+=l2*x;//OffestLenRipetizioniTotali@Star+End
			};
			x=a.length;
			if(v=x!==l1){
				if(n!==0){
					v=(x!==0)?x+n:n;
				}else if(x!==0){
					v=x;
				};
			};
		}else if(a===b){
			v=0;
		};
	}else{//almeno una è vuota..
		v=x?l2:l1;
	};
	//
	if(v===false){//calcola distanza:
		v='-';//calc
		//..
	};
	//
	return v;
};