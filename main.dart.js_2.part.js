self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C,D={
a8x(d,e){return D.eXp(d,e)},
eXp(d,e){var w=0,v=P.v(x.w),u,t=2,s,r=[],q,p,o
var $async$a8x=P.q(function(f,g){if(f===1){s=g
w=t}while(true)switch(w){case 0:t=4
w=7
return P.n($.D7().A5(d),$async$a8x)
case 7:q=g
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s
H.I(o)
w=8
return P.n($.D7().A5(e),$async$a8x)
case 8:q=g
u=q
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return P.t(u,v)
case 2:return P.r(s,v)}})
return P.u($async$a8x,v)},
bZk:function bZk(d,e){var _=this
_.d=null
_.a=d
_.b=e
_.c=null}},E={aSK:function aSK(){},bZu:function bZu(){}},F,G,H,J,K,L,M,N,O,P,Q,R={bNR:function bNR(){}},S,T,U,V,W,X,Y,Z
a.setFunctionNamesIfNecessary([D,E,R])
A=c[0]
B=c[1]
C=c[2]
D=a.updateHolder(c[3],D)
E=a.updateHolder(c[4],E)
F=c[5]
G=c[6]
H=c[7]
J=c[8]
K=c[9]
L=c[10]
M=c[11]
N=c[12]
O=c[13]
P=c[14]
Q=c[15]
R=a.updateHolder(c[16],R)
S=c[17]
T=c[18]
U=c[19]
V=c[20]
W=c[21]
X=c[22]
Y=c[23]
Z=c[24]
E.aSK.prototype={
au0(d){d.l(0,"isBuilder",!0)
$.aJ().ou(d)}}
E.bZu.prototype={}
R.bNR.prototype={
i4(d){throw H.o(P.bx(null))},
hG(d){throw H.o(P.bx(null))},
AV(d,e,f,g,h){var w=h==null?null:h.length!==0
if(w===!0){h.toString
return S.dQ2(d,h,f,g,!0)}return e!=null&&e.a!=null?S.ae_(e,f,g,!0):S.EQ(d,f,g,!0)},
Dh(d,e,f,g,h,i,j,k,l){}}
D.bZk.prototype={
amS(d){switch(this.d){case"fluxlisting":return T.ae6(d)
case"fluxnews":return N.Da(d)
default:return T.Zr(d)}},
bXr(d){var w,v,u
switch(this.d){case"fluxlisting":w=d
w=w
u=new R.eq()
u.awz(w)
return u
case"fluxnews":u=new R.eq()
u.ad_(d)
return u
default:v=d
v=v
u=new R.eq()
u.a_V(v)
return u}},
fM(d){var w=0,v=P.v(x.i),u,t=this,s,r,q,p,o,n
var $async$fM=P.q(function(e,f){if(e===1)return P.r(f,v)
while(true)switch(w){case 0:p=t.c
o=y.b+(p==null?"base":p)+"/mock_categories.json"
N.W("[\ud83e\uddecload mock data] "+o,null)
n=C.t
w=3
return P.n(D.a8x(o,o),$async$fM)
case 3:s=n.ab(0,f,null)
r=H.b([],x.a)
for(p=J.aa(s);p.t();){q=p.gA(p)
if(!J.E(J.d(q,"slug"),"uncategorized"))r.push(t.bXr(q))}u=r
w=1
break
case 1:return P.t(u,v)}})
return P.u($async$fM,v)},
eU(d,e,f,g){return this.c_7(d,e,f,g)},
xu(d,e){return this.eU(d,e,!1,null)},
c_7(d,e,f,g){var w=0,v=P.v(x.q),u,t=this,s,r,q,p,o,n,m,l,k
var $async$eU=P.q(function(h,i){if(h===1)return P.r(i,v)
while(true)switch(w){case 0:o=H.b([],x.z)
n=t.c
m=y.b+(n==null?"base":n)+"/mock_products.json"
N.W("[\ud83e\uddecload mock data] fetchProductsLayout "+m,null)
l=J
k=C.t
w=3
return P.n(D.a8x(m,m),$async$eU)
case 3:n=l.aa(k.ab(0,i,null)),s=J.L(d)
case 4:if(!n.t()){w=5
break}r=n.gA(n)
q=t.amS(r)
if(s.h(d,"category")!=null&&H.i(s.h(d,"category")).length!==0)q.sbT4(J.J(s.h(d,"category")))
p=J.L(r)
if(p.h(r,"store")!=null)if(J.d(p.h(r,"store"),"errors")!=null){o.push(q)
w=4
break}o.push(q)
w=4
break
case 5:u=o
w=1
break
case 1:return P.t(u,v)}})
return P.u($async$eU,v)},
ud(d,e){var w=0,v=P.v(x.p),u,t=this,s,r,q,p,o
var $async$ud=P.q(function(f,g){if(f===1)return P.r(g,v)
while(true)switch(w){case 0:s=H.b([],x.C)
r=t.c
q=y.b+(r==null?"base":r)+"/mock_products.json"
N.W("[\ud83e\uddecload mock data] fetchBlogLayout "+q,null)
p=J
o=C.t
w=3
return P.n(D.a8x(q,q),$async$ud)
case 3:r=p.aa(o.ab(0,g,null))
case 4:if(!r.t()){w=5
break}s.push(t.amS(r.gA(r)))
w=4
break
case 5:u=s
w=1
break
case 1:return P.t(u,v)}})
return P.u($async$ud,v)},
anH(d){return this.ud(d,null)},
d1(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5){var w=0,v=P.v(x.q),u,t=this,s,r,q,p,o,n,m,l
var $async$d1=P.q(function(a6,a7){if(a6===1)return P.r(a7,v)
while(true)switch(w){case 0:p=H.b([],x.z)
o=t.c
n=y.b+(o==null?"base":o)+"/mock_products.json"
l=C.t
w=3
return P.n(D.a8x(n,n),$async$d1)
case 3:m=l.ab(0,a7,null)
N.W("[\ud83e\uddecload mock data] fetchProductsByCategory",null)
for(o=J.aa(m);o.t();){s=o.gA(o)
r=t.amS(s)
q=J.L(s)
if(q.h(s,"store")!=null)if(J.d(q.h(s,"store"),"errors")!=null){p.push(r)
continue}p.push(r)}u=p
w=1
break
case 1:return P.t(u,v)}})
return P.u($async$d1,v)},
xs(d,e){return this.d1(null,null,d,null,null,null,null,null,null,null,null,e,null,null)},
zP(d,e,f,g,h,i,j,k){return this.d1(null,null,d,null,e,null,f,g,null,h,i,j,null,k)},
qI(d,e,f){return this.d1(null,null,d,null,e,null,null,null,null,null,null,f,null,null)},
zO(d,e,f,g,h,i,j){return this.d1(null,null,d,null,e,null,f,g,null,h,i,j,null,null)},
xt(d,e,f,g){return this.d1(null,null,d,null,e,null,null,null,null,null,null,f,null,g)}}
var z=a.updateTypes([]);(function inheritance(){var w=a.inherit
w(E.bZu,P.aj)
w(E.aSK,E.bZu)
w(R.bNR,V.alS)
w(D.bZk,E.alT)})()
H.xn(b.typeUniverse,JSON.parse("{}"))
var y={b:"packages/core_builder/lib/example/templates/"}
var x={C:H.ad("O<ct>"),a:H.ad("O<eq>"),z:H.ad("O<cB>"),i:H.ad("K<eq>"),q:H.ad("K<cB>"),w:H.ad("p"),p:H.ad("K<ct>?")}}
$__dart_deferred_initializers__["ttGo6B1jRLlMSBOfxN03uL9DzZk="] = $__dart_deferred_initializers__.current
