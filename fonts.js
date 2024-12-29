const fonts = [
  "akbalthomfreehand.ttf",
  "akbalthomhighschool.ttf",
  "akbalthomhighschoolframe.ttf",
  "akbalthomhighschoolfun.ttf",
  "akbalthomkbach.ttf",
  "akbalthomkhmerbasic.ttf",
  "akbalthomkhmergothic.ttf",
  "akbalthomkhmerhand.ttf",
  "akbalthomkhmerler.ttf",
  "akbalthomkhmerlight.ttf",
  "akbalthomkhmernew.ttf",
  "akbalthomkorea.ttf",
  "akbalthomnagabold.ttf",
  "akbalthomream.ttf",
  "akbalthomseoul.ttf",
  "akbalthomsuperhero.ttf",
  "akbalthomsuperherokh.ttf",
  "akbalthomtnrb.ttf",
  "angkor.ttf",
  "angtaso.ttf",
  "angtasom.ttf",
  "antiochtext.ttf",
  "aphireak1.ttf",
  "baidukot.ttf",
  "battambangbold.ttf",
  "battambangregular.ttf",
  "bayon.ttf",
  "bokor.ttf",
  "chantreasruilow.ttf",
  "chantreasruinew.ttf",
  "chantreaui.ttf",
  "chenla.ttf",
  "contentbold.ttf",
  "contentregular.ttf",
  "dangrek.ttf",
  "daunkeo.ttf",
  "daunpov.ttf",
  "daunsok.ttf",
  "daunteav.ttf",
  "dauntep.ttf",
  "dhrongdomrey.ttf",
  "extractkhmerunicode20or201001.ttf",
  "extractkhmerunicode20or201002.ttf",
  "extractkhmerunicode20or201003.ttf",
  "extractkhmerunicode20or201004.ttf",
  "extractkhmerunicode20or201005.ttf",
  "extractkhmerunicode20or201006.ttf",
  "extractkhmerunicode20or201007.ttf",
  "extractkhmerunicode20or201008.ttf",
  "extractkhmerunicode20or201009.ttf",
  "extractkhmerunicode20or201010.ttf",
  "extractkhmerunicode20or201011.ttf",
  "extractkhmerunicode20or201012.ttf",
  "extractkhmerunicode20or201013.ttf",
  "extractkhmerunicode20or201014.ttf",
  "fasthandregular.ttf",
  "freehand.ttf",
  "hanuman.ttf",
  "hanumanb.ttf",
  "ikampuchea001o'chrov.ttf",
  "ikampuchea002khmerfeeling.ttf",
  "isethfirst.ttf",
  "isethpi.ttf",
  "isethz11.ttf",
  "kantumruybold.ttf",
  "kantumruylight.ttf",
  "kantumruyregular.ttf",
  "kdamthmorregular.ttf",
  "kdjayavarman1.ttf",
  "Kh-Prey-Veng.ttf",
  "khbattambang.ttf",
  "khblbrushhand.ttf",
  "khbllazydistorted.ttf",
  "khbllazyoutline.ttf",
  "khbllazysmooth.ttf",
  "khbokor.ttf",
  "khcnstar.ttf",
  "khcontent.ttf",
  "khdangrek.ttf",
  "khdigitalthom.ttf",
  "khfasthand.ttf",
  "khfreehand.ttf",
  "khitkonkhmer.ttf",
  "khitseombeljrungbunly.ttf",
  "khitsupport4kh.ttf",
  "khjrunghom.ttf",
  "khkakadabati.ttf",
  "khkangrey.ttf",
  "khkompongchhnang.ttf",
  "khkompongthombunlybeta.ttf",
  "khkoulen.ttf",
  "khkoulenl.ttf",
  "khmchantha.ttf",
  "khmchrieng1.ttf",
  "khmer.ttf",
  "khmerangkulilekav2.ttf",
  "khmerbanteaysrey.ttf",
  "khmerbanteaysreyb.ttf",
  "khmerbanteaysreyl.ttf",
  "khmerbeginner.ttf",
  "khmerchamnanit.ttf",
  "khmercnbattambang.ttf",
  "khmercnbone.ttf",
  "khmercnekphnom.ttf",
  "khmercnhand.ttf",
  "khmercnkampingpouy.ttf",
  "khmercnkamrieng.ttf",
  "khmercnkamriengv2.ttf",
  "khmercnkselus.ttf",
  "khmercnlazywrite.ttf",
  "khmercnotaki.ttf",
  "khmercnphnomsampao.ttf",
  "khmercnpoipet.ttf",
  "khmercnpreykonkla.ttf",
  "khmercnsamlot.ttf",
  "khmercnstar.ttf",
  "khmercnstuengsongke.ttf",
  "khmercnthmorkol.ttf",
  "khmerdlstationtnrb.ttf",
  "khmerdonbosco.ttf",
  "khmerelement.ttf",
  "khmerikhmerstudents.ttf",
  "khmerkcsvayuni.ttf",
  "khmerkep.ttf",
  "khmerkhaoidang.ttf",
  "khmerm1.volt.ttf",
  "khmerm1volt.ttf",
  "khmerm2.volt.ttf",
  "khmerm2volt.ttf",
  "khmermef1.ttf",
  "khmermef2.ttf",
  "khmermoul.ttf",
  "khmermuol.ttf",
  "khmernagari.ttf",
  "khmeros.ttf",
  "khmerosapsra.ttf",
  "khmerosbattambang.ttf",
  "khmerosbokor.ttf",
  "khmerosclassic.ttf",
  "khmeroscontent.ttf",
  "khmerosfasthand.ttf",
  "khmerosfreehand.ttf",
  "khmeroskiensvay.ttf",
  "khmerosmetalchrieng.ttf",
  "khmerosmuol.ttf",
  "khmerosmuollight.ttf",
  "khmerosmuolpali.ttf",
  "khmerosniroth.ttf",
  "khmerossiemreap.ttf",
  "khmerossys.ttf",
  "khmeroswatphnom.ttf",
  "khmerpailin.ttf",
  "khmerpenchantrea.ttf",
  "khmerpeneng.ttf",
  "khmerpenkang.ttf",
  "khmerpensurin.ttf",
  "khmerpensvayreing.ttf",
  "khmerpensvr.ttf",
  "khmerpenteu.ttf",
  "khmerrotanakangkordemo02.ttf",
  "khmerrotanaktraiyb.ttf",
  "khmers1.volt.ttf",
  "khmers1volt.ttf",
  "khmers2.volt.ttf",
  "khmers2volt.ttf",
  "khmers3.volt.ttf",
  "khmers3volt.ttf",
  "khmers4.volt.ttf",
  "khmers4volt.ttf",
  "khmersamadyksv2.ttf",
  "khmersavuth.ttf",
  "khmersavuthbrush.ttf",
  "khmersavuthpen.ttf",
  "khmersavuthpen2.ttf",
  "khmersavuthromeas.ttf",
  "khmersemsarun.ttf",
  "khmerserif.ttf",
  "khmersexy.ttf",
  "khmersharp.ttf",
  "khmersnkampongcham.ttf",
  "khmersnkampot.ttf",
  "khmertelecommunication.ttf",
  "khmervictoryajrung.ttf",
  "khmervictoryatreykrim.ttf",
  "khmetalchrieng.ttf",
  "khmithsalapaliv2.ttf",
  "khmkampongtrach.ttf",
  "khmkampot.ttf",
  "khmkolab.ttf",
  "khmmool.ttf",
  "khmmool1.ttf",
  "khmnettra.ttf",
  "khmold.ttf",
  "khmps.ttf",
  "khmpsfasthand.ttf",
  "khmpsjrung.ttf",
  "khmuol.ttf",
  "khmuolpali.ttf",
  "khmvanara.ttf",
  "khmviravuth.ttf",
  "khmwatphnom.ttf",
  "khpenwappathor.ttf",
  "khpreyveng.ttf",
  "khsiemreap.ttf",
  "khsnbeysach.ttf",
  "khsnkampongsom.ttf",
  "khsnpreytakoy.ttf",
  "khsomborpreykokbunlybeta.ttf",
  "khsystem.ttf",
  "khunif1.ttf",
  "khunil1.ttf",
  "khunin2.ttf",
  "khunir1.ttf",
  "khunir2.ttf",
  "khuniserif.ttf",
  "khwritehandjrung.ttf",
  "khwrithand(1).ttf",
  "khwrithand.ttf",
  "kmon40hv2e3s.ttf",
  "kmons40dicv2e3s.ttf",
  "kmons40spcv2e3s.ttf",
  "kmons40v2e3.ttf",
  "kmons60bv2e3s.ttf",
  "kmons80v1e2s.ttf",
  "kmons99v1e2s.ttf",
  "kmsbbicsf.ttf",
  "kmsbbicsys.ttf",
  "koulen.ttf",
  "kunkhmer.ttf",
  "metal.ttf",
  "mo5v56.ttf",
  "mo5v56bu.ttf",
  "mo5v56dc.ttf",
  "mo5v56di.ttf",
  "mo5v56do.ttf",
  "mo5v56hi.ttf",
  "mo5v56i.ttf",
  "mo5v56mo.ttf",
  "mo5v56xs.ttf",
  "mo8v56.ttf",
  "mo8v56i.ttf",
  "mo9v55.ttf",
  "mond40uhgs.ttf",
  "mondulkirib.ttf",
  "mondulkiribi.ttf",
  "mondulkirii.ttf",
  "mondulkirir.ttf",
  "moul.ttf",
  "moulpali.ttf",
  "myanmarsanspro.ttf",
  "nidaangkor.ttf",
  "nidabayon.ttf",
  "nidachenla.ttf",
  "nidafunan.ttf",
  "nidakhmerempire.ttf",
  "nidasowanaphum.ttf",
  "nidataprom.ttf",
  "nokorabold.ttf",
  "nokoraregular.ttf",
  "notosanschamregular.ttf",
  "notosanskhmerbold.ttf",
  "notosanskhmerregular.ttf",
  "notosanskhmeruiregular.ttf",
  "odormeanchey.ttf",
  "phnompotkrunggr.ttf",
  "preahvihear.ttf",
  "ratav53.ttf",
  "romneaitalic.ttf",
  "samsungkhmerregular.ttf",
  "sankor.ttf",
  "siemreap.ttf",
  "sithimanuss.ttf",
  "suwannaphum.ttf",
  "tapich.ttf",
  "taprom.ttf",
  "timbrekampuchea.ttf",
  "tlok.ttf",
  "u4svaytonnew.ttf",
];
