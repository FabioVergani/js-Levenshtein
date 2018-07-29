console.clear();
//
const items=[
//#0
	['',''],
	['c','c'],
//1
	['a',''],
	['','b'],
	['bar','baro'],
	['bir','biro'],
//2
	['aa',''],
	['a2',''],
	['','b1'],
//3
	['aaa',''],
	['','b12'],
	['cat','cazcat'],
	['cat','catcazcat'],
//4
	['aaa4',''],
	['','b123'],
	['cat','cat1234'],
	['dog1234','dog'],

	['dog','dogdogdogdog'],
//
	['dog','dog1234dog'],
	['cat','cat12345catcatcatcat'],
	['dog','dogdog12345dogdog'],
	['a','b'],
	['a1a1a','a1a2a'],
	['a1a1a','a2z2a'],
	['a1a1a','a1a12a'],
	['cat','Cat'],
	['cat','caz'],
	['cat','cow'],
	['cat','pow'],
	['cat','Pow'],
//
	['bar','biro'],
//

	//['',''],

],
d=document,
frag=d.createDocumentFragment().appendChild(d.createElement('pre')),
test=(f,n)=>{
	frag.innerHTML+=([['\n\n<b>',n,'</b>\n'].join('')].concat(items.map(m=>{
		const a=m[0],b=m[1];
		return [f(a,b),': ',a,'/',b].join('')
	})).join('\n'));
};
//
test(leven1,'Leven1');
test(algo,'algo');
test(leven2,'Leven2');

//
d.body.appendChild(frag);