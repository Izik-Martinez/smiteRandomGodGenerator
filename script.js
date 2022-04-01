const godSelectionImageBox = document.querySelector(".godSelection");
const generateRandomGodButton = document.querySelector("button");
const godIcon = document.querySelector(".godSelectionIcon")
function randomNum(){

return Math.floor(Math.random()*119)


}
generateRandomGodButton.addEventListener("click", function(){godIcon.src = arrayOfGods[randomNum()].src});

// function randomGod(){


    // godImage.src = "/images/agni.jpg";

    
// }



const arrayOfGods = [


{
  name: "achilles",
  src: "images/achilles.jpg"



},
{
    name: "agni",
    src: "images/agni.jpg"
  
  
  
  },
  {
    name: "ahPuch",
    src: "images/ahPuch.jpg"
  
  
  
  },
  {
    name: "ama",
    src: "images/ama.jpg"
  
  
  
  },
  {
    name: "amc",
    src: "images/amc.jpg"
  
  
  
  },
  {
    name: "anhur",
    src: "images/anhur.jpg"
  
  
  
  },
  {
    name: "anubis",
    src: "images/anubis.jpg"
  
  
  
  },
  {
    name: "aoKuang",
    src: "images/aoKuang.jpg"
  
  
  
  },
  {
    name: "aphro",
    src: "images/aphro.jpg"
  
  
  
  },
  {
    name: "apollo",
    src: "images/apollo.jpg"
  
  
  
  },
  {
    name: "arachne",
    src: "images/arachne.jpg"
  
  
  
  },
  {
    name: "ares",
    src: "images/ares.jpg"
  
  
  
  },
  {
    name: "artemis",
    src: "images/artemis.jpg"
  
  
  
  },
  {
    name: "artio",
    src: "images/artio.jpg"
  
  
  
  },
  {
    name: "athena",
    src: "images/athena.jpg"
  
  
  
  },
  {
    name: "atlas",
    src: "images/atlas.webp"
  
  
  
  },
  {
    name: "awilix",
    src: "images/awilix.jpg"
  
  
  
  },
  {
    name: "babaYaga",
    src: "images/babaYaga.jpg"
  
  
  
  },
  {
    name: "bacchus ",
    src: "images/bacchus.jpg"
  
  
  
  },
  {
    name: "baka",
    src: "images/baka.jpg"
  
  
  
  },
  {
    name: "baron",
    src: "images/baron.jpg"
  
  
  
  },
  {
    name: "bastet",
    src: "images/bastet.jpg"
  
  
  
  },
  {
    name: "bellona",
    src: "images/bellona.jpg"
  
  
  
  },
  {
    name: "cabrakan",
    src: "images/cabrakan.jpg"
  
  
  
  },
  {
    name: "camazotz",
    src: "images/camazotz.png"
  
  
  
  },
  {
    name: "cerb",
    src: "images/cerb.jpg"
  
  
  
  },
  {
    name: "cern",
    src: "images/cern.jpg"
  
  
  
  },
  {
    name: "chaac",
    src: "images/chaac.jpg"
  
  
  
  },
  {
    name: "change",
    src: "images/change.jpg"
  
  
  
  },
  {
    name: "chern",
    src: "images/chern.jpg"
  
  
  
  },
  {
    name: "chiron",
    src: "images/chiron.jpg"
  
  
  
  },
  {
    name: "chronos",
    src: "images/chronos.jpg"
  
  
  
  },
  {
    name: "cliodhna",
    src: "images/cliodhna.webp"
  
  
  
  },
  {
    name: "cthulu",
    src: "images/cthulu.jpg"
  
  
  
  },
  {
    name: "cuChu",
    src: "images/cuChu.jpg"
  
  
  
  },
  {
    name: "cupid",
    src: "images/cupid.jpg"
  
  
  
  },
  {
    name: "daJi",
    src: "images/daJi.jpg"
  
  
  
  },
  {
    name: "danzaburou",
    src: "images/danzaburou.webp"
  
  
  
  },
  {
    name: "discordia",
    src: "images/discordia.jpg"
  
  
  
  },
  {
    name: "erlang",
    src: "images/erlang.jpg"
  
  
  
  },
  {
    name: "eset",
    src: "images/eset.jpg"
  
  
  
  },
  {
    name: "fafnir",
    src: "images/fafnir.png"
  
  
  
  },
  {
    name: "fenrir",
    src: "images/fenrir.jpg"
  
  
  
  },
  {
    name: "freya",
    src: "images/freya.jpg"
  
  
  
  },
  {
    name: "ganesha",
    src: "images/ganesha.jpg"
  
  
  
  },
  {
    name: "geb",
    src: "images/geb.jpg"
  
  
  
  },
  {
    name: "gilgamesh",
    src: "images/gilgamesh.png"
  
  
  
  },
  {
    name: "guanYu",
    src: "images/guanYu.jpg"
  
  
  
  },
  {
    name: "hachiman",
    src: "images/hachiman.jpg"
  
  
  
  },
  {
    name: "hades",
    src: "images/hades.jpg"
  
  
  
  },
  {
    name: "heBo",
    src: "images/heBo.jpg"
  
  
  
  },
  {
    name: "heim",
    src: "images/heim.jpg"
  
  
  
  },
  {
    name: "hel",
    src: "images/hel.jpg"
  
  
  
  },
  {
    name: "hera",
    src: "images/hera.jpg"
  
  
  
  },
  {
    name: "herc",
    src: "images/herc.jpg"
  
  
  
  },
  {
    name: "horus",
    src: "images/horus.jpg"
  
  
  
  },
  {
    name: "houYi",
    src: "images/houYi.jpg"
  
  
  
  },
  {
    name: "hunBatz",
    src: "images/hunBatz.jpg"
  
  
  
  },
  {
    name: "izanami",
    src: "images/izanami.png"
  
  
  
  },
  {
    name: "janus",
    src: "images/janus.jpg"
  
  
  
  },
  {
    name: "jingWei",
    src: "images/jingWei.jpg"
  
  
  
  },
  {
    name: "jorm",
    src: "images/jorm.jpg"
  
  
  
  },
  {
    name: "kali",
    src: "images/kali.jpg"
  
  
  
  },
  {
    name: "khepri",
    src: "images/khepri.jpg"
  
  
  
  },
  {
    name: "kingArthur",
    src: "images/kingArthur.jpg"
  
  
  
  },
  {
    name: "kuku",
    src: "images/kuku.jpg"
  
  
  
  },
  {
    name: "kumba",
    src: "images/kumba.jpg"
  
  
  
  },
  {
    name: "kuzenbo",
    src: "images/kuzenbo.jpg"
  
  
  
  },
  {
    name: "loki",
    src: "images/loki.jpg"
  
  
  
  },
  {
    name: "medusa",
    src: "images/medusa.jpg"
  
  
  
  },
  {
    name: "merc",
    src: "images/merc.jpg"
  
  
  
  },
  {
    name: "merlin",
    src: "images/merlin.jpg"
  
  
  
  },
  {
    name: "morgan",
    src: "images/morgan.webp"
  
  
  
  },
  {
    name: "morrigan",
    src: "images/morrigan.jpg"
  
  
  
  },
  {
    name: "mulan",
    src: "images/mulan.jpg"
  
  
  
  },
  {
    name: "neith",
    src: "images/neith.jpg"
  
  
  
  },
  {
    name: "nemesis",
    src: "images/nemesis.jpg"
  
  
  
  },
  {
    name: "neZha",
    src: "images/neZha.jpg"
  
  
  
  },
  {
    name: "nike",
    src: "images/nike.jpg"
  
  
  
  },
  {
    name: "nox",
    src: "images/nox.jpg"
  
  
  
  },
  {
    name: "nuWa",
    src: "images/nuWa.jpg"
  
  
  
  },
  {
    name: "odin",
    src: "images/odin.jpg"
  
  
  
  },
  {
    name: "olorun",
    src: "images/olorun.jpg"
  
  
  
  },
  {
    name: "osiris",
    src: "images/osiris.jpg"
  
  
  
  },
  {
    name: "pele",
    src: "images/pele.jpg"
  
  
  
  },
  {
    name: "persephone",
    src: "images/persephone.jpg"
  
  
  
  },
  {
    name: "poseidon",
    src: "images/poseidon.jpg"
  
  
  
  },
  {
    name: "ra",
    src: "images/ra.jpg"
  
  
  
  },
  {
    name: "raijin",
    src: "images/raijin.jpg"
  
  
  
  },
  {
    name: "rama",
    src: "images/rama.jpg"
  
  
  
  },
  {
    name: "rat",
    src: "images/rat.jpg"
  
  
  
  },
  {
    name: "ravana",
    src: "images/ravana.jpg"
  
  
  
  },
  {
    name: "scylla",
    src: "images/scylla.jpg"
  
  
  
  },
  {
    name: "serqet",
    src: "images/serqet.jpg"
  
  
  
  },
  {
    name: "set",
    src: "images/set.jpg"
  
  
  
  },
  {
    name: "shiva",
    src: "images/shiva.webp"
  
  
  
  },
  {
    name: "skadi",
    src: "images/skadi.jpg"
  
  
  
  },
  {
    name: "sobek",
    src: "images/sobek.jpg"
  
  
  
  },
  {
    name: "sol",
    src: "images/sol.png"
  
  
  
  },
  {
    name: "sunWu",
    src: "images/sunWu.jpg"
  
  
  
  },
  {
    name: "susano",
    src: "images/susano.png"
  
  
  
  },
  {
    name: "sylvanus",
    src: "images/sylvanus.jpg"
  
  
  
  },
  {
    name: "terra",
    src: "images/terra.jpg"
  
  
  
  },
  {
    name: "thanatos",
    src: "images/thanatos.jpg"
  
  
  
  },
  {
    name: "thor",
    src: "images/thor.jpg"
  
  
  
  },
  {
    name: "thoth",
    src: "images/thoth.jpg"
  
  
  
  },
  {
    name: "tiamat",
    src: "images/tiamat.webp"
  
  
  
  },
  {
    name: "tsukuyomi",
    src: "images/tsukuyomi.webp"
  
  
  
  },
  {
    name: "tyr",
    src: "images/tyr.jpg"
  
  
  
  },
  {
    name: "ullur",
    src: "images/ullur.jpg"
  
  
  
  },
  {
    name: "vamana",
    src: "images/vamana.jpg"
  
  
  
  },
  {
    name: "vulcan",
    src: "images/vulcan.jpg"
  
  
  
  },
  {
    name: "xbalanque",
    src: "images/xbalanque.jpg"
  
  
  
  },
  {
    name: "xingTian",
    src: "images/xingTian.png"
  
  
  
  },
  {
    name: "yemoja",
    src: "images/yemoja.jpg"
  
  
  
  },
  {
    name: "ymir",
    src: "images/ymir.jpg"
  
  
  
  },
  {
    name: "zeus",
    src: "images/zeus.jpg"
  
  
  
  },
  {
    name: "zhongKui.jpg",
    src: "images/"
  
  
  
  }

]





































