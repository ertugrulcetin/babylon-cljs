goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20434){
var map__20441 = p__20434;
var map__20441__$1 = cljs.core.__destructure_map(map__20441);
var m = map__20441__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20441__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20441__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20442_20714 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20443_20715 = null;
var count__20444_20716 = (0);
var i__20445_20717 = (0);
while(true){
if((i__20445_20717 < count__20444_20716)){
var f_20718 = chunk__20443_20715.cljs$core$IIndexed$_nth$arity$2(null,i__20445_20717);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20718], 0));


var G__20719 = seq__20442_20714;
var G__20720 = chunk__20443_20715;
var G__20721 = count__20444_20716;
var G__20722 = (i__20445_20717 + (1));
seq__20442_20714 = G__20719;
chunk__20443_20715 = G__20720;
count__20444_20716 = G__20721;
i__20445_20717 = G__20722;
continue;
} else {
var temp__5804__auto___20725 = cljs.core.seq(seq__20442_20714);
if(temp__5804__auto___20725){
var seq__20442_20728__$1 = temp__5804__auto___20725;
if(cljs.core.chunked_seq_QMARK_(seq__20442_20728__$1)){
var c__5568__auto___20729 = cljs.core.chunk_first(seq__20442_20728__$1);
var G__20730 = cljs.core.chunk_rest(seq__20442_20728__$1);
var G__20731 = c__5568__auto___20729;
var G__20732 = cljs.core.count(c__5568__auto___20729);
var G__20733 = (0);
seq__20442_20714 = G__20730;
chunk__20443_20715 = G__20731;
count__20444_20716 = G__20732;
i__20445_20717 = G__20733;
continue;
} else {
var f_20734 = cljs.core.first(seq__20442_20728__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20734], 0));


var G__20735 = cljs.core.next(seq__20442_20728__$1);
var G__20736 = null;
var G__20737 = (0);
var G__20738 = (0);
seq__20442_20714 = G__20735;
chunk__20443_20715 = G__20736;
count__20444_20716 = G__20737;
i__20445_20717 = G__20738;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20740 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20740], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20740)))?cljs.core.second(arglists_20740):arglists_20740)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20447_20747 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20448_20748 = null;
var count__20449_20749 = (0);
var i__20450_20750 = (0);
while(true){
if((i__20450_20750 < count__20449_20749)){
var vec__20465_20751 = chunk__20448_20748.cljs$core$IIndexed$_nth$arity$2(null,i__20450_20750);
var name_20752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20465_20751,(0),null);
var map__20468_20753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20465_20751,(1),null);
var map__20468_20754__$1 = cljs.core.__destructure_map(map__20468_20753);
var doc_20755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20468_20754__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20468_20754__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20752], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20756], 0));

if(cljs.core.truth_(doc_20755)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20755], 0));
} else {
}


var G__20758 = seq__20447_20747;
var G__20759 = chunk__20448_20748;
var G__20760 = count__20449_20749;
var G__20761 = (i__20450_20750 + (1));
seq__20447_20747 = G__20758;
chunk__20448_20748 = G__20759;
count__20449_20749 = G__20760;
i__20450_20750 = G__20761;
continue;
} else {
var temp__5804__auto___20762 = cljs.core.seq(seq__20447_20747);
if(temp__5804__auto___20762){
var seq__20447_20763__$1 = temp__5804__auto___20762;
if(cljs.core.chunked_seq_QMARK_(seq__20447_20763__$1)){
var c__5568__auto___20764 = cljs.core.chunk_first(seq__20447_20763__$1);
var G__20765 = cljs.core.chunk_rest(seq__20447_20763__$1);
var G__20766 = c__5568__auto___20764;
var G__20767 = cljs.core.count(c__5568__auto___20764);
var G__20768 = (0);
seq__20447_20747 = G__20765;
chunk__20448_20748 = G__20766;
count__20449_20749 = G__20767;
i__20450_20750 = G__20768;
continue;
} else {
var vec__20470_20771 = cljs.core.first(seq__20447_20763__$1);
var name_20772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20470_20771,(0),null);
var map__20474_20773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20470_20771,(1),null);
var map__20474_20774__$1 = cljs.core.__destructure_map(map__20474_20773);
var doc_20775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20474_20774__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20474_20774__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20772], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20776], 0));

if(cljs.core.truth_(doc_20775)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20775], 0));
} else {
}


var G__20784 = cljs.core.next(seq__20447_20763__$1);
var G__20785 = null;
var G__20786 = (0);
var G__20788 = (0);
seq__20447_20747 = G__20784;
chunk__20448_20748 = G__20785;
count__20449_20749 = G__20786;
i__20450_20750 = G__20788;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20477 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20478 = null;
var count__20479 = (0);
var i__20480 = (0);
while(true){
if((i__20480 < count__20479)){
var role = chunk__20478.cljs$core$IIndexed$_nth$arity$2(null,i__20480);
var temp__5804__auto___20810__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20810__$1)){
var spec_20816 = temp__5804__auto___20810__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20816)], 0));
} else {
}


var G__20822 = seq__20477;
var G__20823 = chunk__20478;
var G__20824 = count__20479;
var G__20825 = (i__20480 + (1));
seq__20477 = G__20822;
chunk__20478 = G__20823;
count__20479 = G__20824;
i__20480 = G__20825;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__20477);
if(temp__5804__auto____$1){
var seq__20477__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20477__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20477__$1);
var G__20834 = cljs.core.chunk_rest(seq__20477__$1);
var G__20835 = c__5568__auto__;
var G__20836 = cljs.core.count(c__5568__auto__);
var G__20837 = (0);
seq__20477 = G__20834;
chunk__20478 = G__20835;
count__20479 = G__20836;
i__20480 = G__20837;
continue;
} else {
var role = cljs.core.first(seq__20477__$1);
var temp__5804__auto___20840__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20840__$2)){
var spec_20846 = temp__5804__auto___20840__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20846)], 0));
} else {
}


var G__20848 = cljs.core.next(seq__20477__$1);
var G__20849 = null;
var G__20850 = (0);
var G__20851 = (0);
seq__20477 = G__20848;
chunk__20478 = G__20849;
count__20479 = G__20850;
i__20480 = G__20851;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20873 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__20874 = cljs.core.ex_cause(t);
via = G__20873;
t = G__20874;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20518 = datafied_throwable;
var map__20518__$1 = cljs.core.__destructure_map(map__20518);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20518__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20518__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20518__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20519 = cljs.core.last(via);
var map__20519__$1 = cljs.core.__destructure_map(map__20519);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20519__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20519__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20519__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20520 = data;
var map__20520__$1 = cljs.core.__destructure_map(map__20520);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20520__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20520__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20520__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20521 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20521__$1 = cljs.core.__destructure_map(map__20521);
var top_data = map__20521__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20521__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20530 = phase;
var G__20530__$1 = (((G__20530 instanceof cljs.core.Keyword))?G__20530.fqn:null);
switch (G__20530__$1) {
case "read-source":
var map__20537 = data;
var map__20537__$1 = cljs.core.__destructure_map(map__20537);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20537__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20537__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20545 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20545__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20545,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20545);
var G__20545__$2 = (cljs.core.truth_((function (){var fexpr__20547 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20547.cljs$core$IFn$_invoke$arity$1 ? fexpr__20547.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20547.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20545__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20545__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20545__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20545__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20548 = top_data;
var G__20548__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20548,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20548);
var G__20548__$2 = (cljs.core.truth_((function (){var fexpr__20558 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20558.cljs$core$IFn$_invoke$arity$1 ? fexpr__20558.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20558.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20548__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20548__$1);
var G__20548__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20548__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20548__$2);
var G__20548__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20548__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20548__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20548__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20548__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20575 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20575,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20575,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20575,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20575,(3),null);
var G__20578 = top_data;
var G__20578__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20578,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20578);
var G__20578__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20578__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20578__$1);
var G__20578__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20578__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20578__$2);
var G__20578__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20578__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20578__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20578__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20578__$4;
}

break;
case "execution":
var vec__20588 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20588,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20588,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20588,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20588,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20499_SHARP_){
var or__5045__auto__ = (p1__20499_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__20597 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20597.cljs$core$IFn$_invoke$arity$1 ? fexpr__20597.cljs$core$IFn$_invoke$arity$1(p1__20499_SHARP_) : fexpr__20597.call(null,p1__20499_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__20607 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20607__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20607,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20607);
var G__20607__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20607__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20607__$1);
var G__20607__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20607__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20607__$2);
var G__20607__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20607__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20607__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20607__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20607__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20530__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20624){
var map__20625 = p__20624;
var map__20625__$1 = cljs.core.__destructure_map(map__20625);
var triage_data = map__20625__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20625__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20625__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20625__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20625__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20625__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20625__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20625__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20625__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20633 = phase;
var G__20633__$1 = (((G__20633 instanceof cljs.core.Keyword))?G__20633.fqn:null);
switch (G__20633__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20638 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20639 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20640 = loc;
var G__20641 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20643_20972 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20644_20973 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20645_20974 = true;
var _STAR_print_fn_STAR__temp_val__20646_20975 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20645_20974);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20646_20975);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20622_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20622_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20644_20973);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20643_20972);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20638,G__20639,G__20640,G__20641) : format.call(null,G__20638,G__20639,G__20640,G__20641));

break;
case "macroexpansion":
var G__20652 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20653 = cause_type;
var G__20654 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20655 = loc;
var G__20656 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20652,G__20653,G__20654,G__20655,G__20656) : format.call(null,G__20652,G__20653,G__20654,G__20655,G__20656));

break;
case "compile-syntax-check":
var G__20658 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20659 = cause_type;
var G__20660 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20661 = loc;
var G__20662 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20658,G__20659,G__20660,G__20661,G__20662) : format.call(null,G__20658,G__20659,G__20660,G__20661,G__20662));

break;
case "compilation":
var G__20663 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20664 = cause_type;
var G__20665 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20666 = loc;
var G__20667 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20663,G__20664,G__20665,G__20666,G__20667) : format.call(null,G__20663,G__20664,G__20665,G__20666,G__20667));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20672 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20673 = symbol;
var G__20674 = loc;
var G__20675 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20681_20989 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20682_20990 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20683_20991 = true;
var _STAR_print_fn_STAR__temp_val__20684_20992 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20683_20991);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20684_20992);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20623_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20623_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20682_20990);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20681_20989);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20672,G__20673,G__20674,G__20675) : format.call(null,G__20672,G__20673,G__20674,G__20675));
} else {
var G__20695 = "Execution error%s at %s(%s).\n%s\n";
var G__20696 = cause_type;
var G__20697 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20698 = loc;
var G__20699 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20695,G__20696,G__20697,G__20698,G__20699) : format.call(null,G__20695,G__20696,G__20697,G__20698,G__20699));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20633__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
