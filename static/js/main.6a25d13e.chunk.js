(this["webpackJsonpreact-custom-svg-scrollbar"]=this["webpackJsonpreact-custom-svg-scrollbar"]||[]).push([[0],{29:function(e,n,r){},31:function(e,n,r){},33:function(e,n,r){},34:function(e,n,r){},35:function(e,n,r){"use strict";r.r(n);var t=r(2),i=r.n(t),s=r(18),u=r.n(s),a=(r(29),r(13)),d=r(38),l=r(39),c=r(22),h=(r(31),r(0));var o=function(e){var n=e.height,r=void 0===n?600:n,i=e.width,s=void 0===i?20:i,u=e.track,o=void 0===u?null:u,b=e.handleStyles,g=void 0===b?{}:b,f=e.children,m=Object(t.useRef)(null),w=Object(t.useRef)(null),j=Object(t.useRef)(0),k=!1,z=0,v={byDragDrop:!1,byClick:!1,hasBrushed:!1},p=Object(c.a)().filter((function(e){return!e.ctrlKey&&!e.button&&(e.metaKey||"overlay"!==e.target.__data__.type)})).on("start",(function(){Object(d.a)(w.current).select(".overlay").attr("cursor","ns-resize")})).on("brush",(function(e){var n=e.selection,t=e.sourceEvent;n&&(t||!v.hasBrushed||v.byClick)&&(v.byDragDrop=!0,m.current.scrollTo({top:n[0]/r*m.current.scrollHeight}))})).on("end",(function(){v.byDragDrop=!1,v.hasBrushed=!0}));function O(e){v.byClick=!0;var n=j.current,t=Object(l.a)(e),i=Object(a.a)(t,1),s=Object(a.a)(i[0],2)[1],u=s-n/2,c=s+n/2,h=r;Object(d.a)(w.current).call(p.move,c>h?[h-n,h]:u<0?[0,0+n]:[u,c])}return Object(t.useEffect)((function(){var e,n=Object(d.a)(w.current),t=r/m.current.scrollHeight;j.current=t*r,n.call(p).call(p.move,[0,j.current]).call((function(e){return e.select(".overlay").on("mousedown touchstart",O)})),n.select(".selection").attr("cursor","ns-resize").call((e=g,function(n){Object.entries(e).forEach((function(e){var r=Object(a.a)(e,2),t=r[0],i=r[1];n.style(t,i)}))})),n.selectAll(".handle").remove()})),Object(h.jsxs)("div",{className:"custom-svg-scrollbar",children:[Object(h.jsx)("div",{className:"container",ref:m,onScroll:function(){w.current&&!v.byDragDrop&&(z=m.current.scrollTop,k||(window.requestAnimationFrame((function(){var e=z/m.current.scrollHeight*r;Object(d.a)(w.current).call(p.move,[e,e+j.current]),k=!1})),k=!0))},style:{height:r},children:f}),Object(h.jsx)("div",{className:"scrollbar",style:{flexBasis:s},children:Object(h.jsxs)("svg",{width:s,height:r,children:[o,Object(h.jsx)("g",{className:"brush",ref:w})]})})]})};r(33);var b=function(){return Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("h1",{children:"B. UMWELT IM KOPF"}),Object(h.jsx)("p",{children:"Das Klimaabkommen von Paris ist ein Meilenstein f\xfcr die Rettung unseres Planeten. Wir haben das Wissen, die Technik und den Erfinder\\*innengeist, um die Klimakatastrophe noch abzuwenden. Wir stehen deshalb jetzt vor einer Entscheidung, die unser Leben und das Leben unserer Kinder pr\xe4gen wird. K\xe4mpfen wir f\xfcr den Erhalt unserer nat\xfcrlichen Lebensgrundlagen oder s\xe4gen wir weiter an dem Ast, auf dem wir sitzen? Setzen wir auf dreckige Kohle wie Union und SPD oder auf schmutziges \xd6l wie Trump und Putin? Oder brechen wir auf in ein neues, gr\xfcnes Zeitalter?"}),Object(h.jsx)("p",{children:"Wir wollen anpacken: Denn Hochwasser, D\xfcrren und das Ansteigen des Meeresspiegels sind keine fernen Bedrohungen mehr. Sie finden statt. T\xe4glich. Wenn wir jetzt nicht handeln, wird es auf der Erde bis zum Ende des Jahrhunderts um etwa weitere vier Grad w\xe4rmer. Wir sind dabei, mit unserer Art zu wirtschaften und zu konsumieren unsere Lebensr\xe4ume zu zerst\xf6ren \u2013 von den Regenw\xe4ldern \xfcber unser Grundwasser und unsere B\xf6den bis hin zu den Weltmeeren. Und wir verursachen ein neues Artensterben, das unsere Umwelt \xe4rmer und zerbrechlicher macht."}),Object(h.jsx)("p",{children:"Die Folgen w\xe4ren Hunger, Armut und Konflikte um knapper werdende Ressourcen, wie zum Beispiel Wasser. Die Kriege und Fluchtbewegungen der vergangenen Jahre w\xe4ren nur ein laues L\xfcftchen gegen\xfcber dem Sturm, der kommenden Generationen drohte. Uns geht es darum zu verhindern, dass blinder Wachstumsglaube und ungebremstes Profitstreben unseren einzigartigen Planeten zerst\xf6ren. Wir wollen daf\xfcr eine Wirtschaft, die mit der Umwelt statt gegen sie arbeitet, die nachhaltigen Wohlstand f\xfcr alle erm\xf6glicht. Frieden, Sicherheit und ein gutes Leben f\xfcr alle k\xf6nnen wir in Zukunft erreichen, wenn wir unsere nat\xfcrlichen Lebensgrundlagen sch\xfctzen, statt sie weiter zu zerst\xf6ren."}),Object(h.jsx)("p",{children:"Wenn wir jetzt entschlossen handeln, ist das gleichzeitig auch eine gro\xdfe Chance und der richtige Weg f\xfcr unser Land in eine lebenswerte Zukunft, die Wohlstand und Sicherheit f\xfcr alle schafft."}),Object(h.jsx)("h2",{children:"I. WIR ERHALTEN UNSERE NATUR"}),Object(h.jsx)("p",{children:'Der Mensch ist auf sauberes Wasser, gesunde B\xf6den und gute Luft angewiesen. Nur dann k\xf6nnen alle frei, unbesorgt und gesund leben, k\xf6nnen gestalten und genie\xdfen. Natur und Umwelt zu sch\xfctzen hei\xdft, die Grundlagen unseres Lebens zu sch\xfctzen. Doch wir Menschen setzen die planetaren Grenzen mit unserer Art zu wirtschaften und zu konsumieren mehr und mehr aufs Spiel. Der zukunftsvergessene Umgang mit der Natur und ihren Sch\xe4tzen f\xe4llt am Ende auf uns selbst zur\xfcck. Das Quecksilber, das die Kohlekraftwerke in die Luft pusten, der Plastikm\xfcll, den wir in Fl\xfcssen und Meeren \u201eentsorgen", die Pestizide und Arzneimittelr\xfcckst\xe4nde, mit denen wir unsere B\xf6den und Gew\xe4sser belasten \u2013 all das l\xf6st sich nicht einfach auf. Es gelangt in unser Trinkwasser, in unsere Atemluft und in unser Essen. Es ist allerh\xf6chste Zeit, das zu beenden. In einigen Bereichen haben wir heute schon l\xe4ngst die Belastungsgrenze unseres Planeten \xfcberschritten.'}),Object(h.jsx)("p",{children:"Darum stellen wir GR\xdcNE die Umwelt und den Erhalt unserer Lebensgrundlage in das Zentrum unserer Politik. Wer die Umwelt sch\xfctzt, k\xe4mpft f\xfcr eine lebenswerte und gerechte Welt f\xfcr alle. Wir GR\xdcNE wollen unser Naturerbe, die biologische Vielfalt der Erde, bewahren. Wir wollen das Verramschen unserer Umwelt beenden. Wir wollen saubere Fl\xfcsse und Seen, ohne G\xfclle, Medikamentenr\xfcckst\xe4nde und Mikroplastik. Wir wollen Felder und Wiesen, auf denen Insekten und V\xf6gel einen Lebensraum finden. Unser Ziel ist es, eine lebenswerte Welt auch f\xfcr unsere Kinder und die kommenden Generationen zu erhalten. Daf\xfcr streiten wir mit Leidenschaft."}),Object(h.jsx)("h3",{children:"1. Kein Leben ohne Wasser"}),Object(h.jsx)("p",{children:"Entwicklung abbaubarer Kunststoffe. Ebenso gilt es, den Eintrag von Mikroplastik vor allem ins Wasser einzud\xe4mmen. So hat dies etwa in Kosmetika nichts zu suchen; zugleich braucht es in Kl\xe4rwerken Filterstufen zur Entfernung von Plastikpartikeln."}),Object(h.jsx)("p",{children:"Das Leben in den Meeren steht auch durch zweifelhafte Fischereipraktiken, wie den Einsatz von Grundschleppnetzen, und zu hohe Fischereiquoten massiv unter Druck. Nach wie vor fischen europ\xe4ische Trawler die Meere vor Afrikas K\xfcsten leer und gef\xe4hrden damit nicht nur das Meeres\xf6kosystem, sie nehmen auch den Fischer\\*innen vor Ort ihre Lebensgrundlage. Darum wollen wir die \xdcberkapazit\xe4ten der europ\xe4ischen Fangflotte abbauen und alle Fischereiabkommen \xf6kologisch und sozial vertr\xe4glich gestalten. Nutzungsfreie Meeresschutzgebiete sollen daf\xfcr sorgen, dass sich das \xd6kosystem Meer erholen kann, auch in Nord- und Ostsee. Kurzfristig m\xfcssen Naturschutzgebiete frei von Grundschleppnetzen und Stellnetzen sein, die den Meeresboden umpfl\xfcgen und Schweinswale beziehungsweise Seev\xf6gel ersticken und ertrinken lassen. Mittelfristig d\xfcrfen in der gesamten Ost\u2013 und Nordsee nur noch alternative Fischfangmethoden zum Einsatz kommen, um die Fischerei in Einklang mit der Meeresumwelt zu bringen. An den K\xfcsten Deutschlands wird derzeit noch mitten im Nationalpark und UNESCO-Weltnaturerbe Wattenmeer unter Gef\xe4hrdung der Artenvielfalt nach \xd6l gebohrt. Das wollen wir beenden. Dank der GR\xdcNEN in Schleswig-Holstein wurden bereits Erkundungsbohrungen im Nationalpark Wattenmeer verhindert."}),Object(h.jsx)("h3",{children:"2. Saubere Luft und gesunder Boden"}),Object(h.jsx)("p",{children:"Jedes Jahr sterben weltweit zehntausende Menschen, weil Stickoxide und Feinstaub die Luft verpesten und zu Lungen- und HerzKreislauf-Erkrankungen f\xfchren. Auch wenn sich bei uns der Himmel \xfcber den St\xe4dten nicht gelb einf\xe4rbt wie in vielen St\xe4dten Asiens, ist auch bei uns der Kampf f\xfcr saubere Luft l\xe4ngst noch nicht gewonnen. J\xe4hrliche Messungen zeigen, dass vielerorts Grenzwerte bei Feinstaub und Stickoxiden \xfcberschritten werden. Hauptursache sind Millionen von Dieselautos, die infolge der Tricks und Mani pulationen der Autoindustrie die Grenzwerte im Alltagsbetrieb oft um ein Vielfaches \xfcberschreiten. Wir wollen, dass die betroffenen Autos so schnell wie m\xf6glich auf Kosten der Hersteller nachger\xfcstet werden, damit die Halter\\*innen nicht die Leidtragenden von Fahrverboten sind, die die Bundesregierung mit ihrer Unt\xe4tigkeit zu verantworten hat. Um die Menschen zu sch\xfctzen und die Schadstoffbelastung der Atemluft zu verringern, wollen wir eine blaue Plakette einf\xfchren, emissionsfreie Mobilit\xe4t f\xf6rdern, einen Gro\xdfteil der Bef\xf6rderungsleistung auf den \xd6PNV und das Rad verschieben, die notwendige Nachr\xfcstung von Baumaschinen, Dieselloks et cetera f\xf6rdern und so die Einhaltung strenger Luftreinhaltungsnormen sicherstellen. Nur so kann es gelingen, die Luft in unseren St\xe4dten sauber zu bekommen. Mit verbindlichen Grenzwerten f\xfcr Innenraumluft werden wir zudem die gesundheitliche Belastung in Wohnungen und B\xfcros etwa durch Emissionen aus Laserdruckern oder Kopierern reduzieren. Um Betroffene nicht weiter mit den gesundheitlichen und finanziellen Folgen belasteter Wohn? und Arbeitsr\xe4ume alleinzulassen, wollen wir anlassbezogene Luftschadstoffmessungen f\xfcr Innenr\xe4ume und Schadstoffsanierungen im Geb\xe4udebestand f\xf6rdern."})]})};var g=function(e){for(var n=e.width,r=e.height,t=n/10,i=r/10,s=[],u=0;u<t;u+=1)for(var a=0;a<i;a+=1)s.push({col:u,row:a});return Object(h.jsxs)("g",{className:"track",children:[Object(h.jsx)("rect",{width:n,height:r,fill:"aliceblue"}),s.map((function(e){var n=e.row,r=e.col;return Object(h.jsx)("circle",{cx:5+5*r*2,cy:5+5*n*2,r:5,fill:"lightblue"},"".concat(r,"-").concat(n))}))]})};r(34);var f=function(){var e=600;return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(o,{height:e,children:Object(h.jsx)(b,{})}),Object(h.jsx)(o,{height:e,width:50,track:Object(h.jsx)("rect",{width:50,height:e,fill:"khaki",rx:"10",ry:"10"}),handleStyles:{fill:"orangered",rx:"10px",ry:"10px"},children:Object(h.jsx)(b,{})}),Object(h.jsx)(o,{height:e,width:50,track:Object(h.jsx)(g,{height:e,width:50}),handleStyles:{fill:"transparent",stroke:"orangered","stroke-width":5,"stroke-opacity":.8},children:Object(h.jsx)(b,{})})]})};u.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.6a25d13e.chunk.js.map