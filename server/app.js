require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sharp = require("sharp");
const tools = require('simple-svg-tools');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {

  let svg = new tools.SVG('<svg><g style="transform: translateY(0px);">state.hairstyle.type &amp;&amp; <use xlink:href="#hairstyle-48" style="stroke: none; fill: rgb(82, 15, 15);"></use></g><g style="transform-origin: center center; transform: translateY(0px);">state.ears.type &amp;&amp; <use xlink:href="#ears-1" style="stroke: none; fill: rgb(190, 107, 71);"></use>state.ears.type &amp;&amp; <use xlink:href="#ears-1" style="stroke: none; transform-origin: center center; transform: scaleX(-1); fill: rgb(190, 107, 71);"></use></g><g style="transform: translateY(0px);">state.fringe.type &amp;&amp; <use xlink:href="#fringe-31" style="stroke: none; fill: rgb(201, 116, 79);"></use>state.wrinkles.wrinklesforeheadType &amp;&amp; <use xlink:href="#wrinklesforehead-" style="fill: none; stroke: rgb(190, 107, 71);"></use>state.wrinkles.wrinklesforeheadType &amp;&amp; <use xlink:href="#wrinklesforehead-" style="fill: none; transform-origin: center center; transform: scaleX(-1); stroke: rgb(190, 107, 71);"></use></g><g style="transform: translateY(0px);">state.jawline.type &amp;&amp; <use xlink:href="#jawline-11" style="stroke: none; fill: rgb(201, 116, 79);"></use>state.wrinkles.wrinkleschinType &amp;&amp; <use xlink:href="#wrinkleschin-" style="fill: none; stroke: rgb(190, 107, 71);"></use>state.wrinkles.wrinklescheekbonesType &amp;&amp; <use xlink:href="#wrinklescheekbones-" style="fill: none; stroke: rgb(190, 107, 71);"></use>state.wrinkles.wrinkleschinType &amp;&amp; <use xlink:href="#wrinkleschin-" style="fill: none; transform-origin: center center; transform: scaleX(-1); stroke: rgb(190, 107, 71);"></use>state.wrinkles.wrinklescheekbonesType &amp;&amp; <use xlink:href="#wrinklescheekbones-" style="fill: none; transform-origin: center center; transform: scaleX(-1); stroke: rgb(190, 107, 71);"></use></g><g style="transform-origin: center center; transform: scale(1) translateY(0px);">state.wrinkles.wrinklesmouthType &amp;&amp; <use xlink:href="#wrinklesmouth-" style="fill: none; transform-origin: center center; transform: scaleX(-1); stroke: rgb(190, 107, 71);"></use>state.wrinkles.wrinklesmouthType &amp;&amp; <use xlink:href="#wrinklesmouth-" style="fill: none; stroke: rgb(190, 107, 71);"></use>state.mouth.lowerlipType &amp;&amp; <use xlink:href="#lowerlip-20" style="stroke: none; fill: rgb(173, 91, 55);"></use>state.mouth.upperlipType &amp;&amp; <use xlink:href="#upperlip-20" style="stroke: none; fill: rgb(154, 72, 36);"></use>state.mouth.smileType &amp;&amp; <use xlink:href="#smile-8" style="stroke-width: 3; fill: none; stroke: rgb(154, 72, 36);"></use></g><g style="transform-origin: center center; transform: scale(1) translateY(0px);">state.mustachio.type &amp;&amp; <use xlink:href="#mustachio-" style="stroke: none; fill: rgb(82, 15, 15);"></use>state.mustachio.type &amp;&amp; <use xlink:href="#mustachio-" style="stroke: none; transform-origin: center center; transform: scaleX(-1); fill: rgb(82, 15, 15);"></use></g><g style="transform-origin: center center; transform: scale(1) translateY(0px);">state.nose.nostrilsType &amp;&amp; <use xlink:href="#nostrils-3" style="stroke-width: 3; fill: none; stroke: rgb(173, 91, 55);"></use>state.nose.septumType &amp;&amp; <use xlink:href="#septum-4" style="stroke-width: 3; fill: none; stroke: rgb(173, 91, 55);"></use></g><g style="transform-origin: center center; transform: scale(1) translate(0px, 0px);">state.wrinkles.wrinkleseyesType &amp;&amp; <use xlink:href="#wrinkleseyes-" style="fill: none; stroke: rgb(190, 107, 71);"></use>state.eyes.eyelidType &amp;&amp; <use xlink:href="#eyelid-1" style="stroke: none; fill: rgb(173, 91, 55);"></use>state.eyes.whiteType &amp;&amp; <use xlink:href="#white-10" style="stroke: none;"></use>state.eyes.irisType &amp;&amp; <use xlink:href="#iris-1" style="stroke: none; fill: rgb(238, 181, 140);"></use>state.eyes.pupilType &amp;&amp; <use xlink:href="#pupil-2" style="stroke: none; fill: rgb(0, 0, 0);"></use>state.eyes.eyelashesType &amp;&amp; <use xlink:href="#eyelashes-11" style="stroke-width: 5; fill: none; stroke: rgb(154, 72, 36);"></use></g><g style="transform-origin: center center; transform: scale(-1, 1) translate(0px, 0px);">state.wrinkles.wrinkleseyesType &amp;&amp; <use xlink:href="#wrinkleseyes-" style="fill: none; stroke: rgb(190, 107, 71);"></use>state.eyes.eyelidType &amp;&amp; <use xlink:href="#eyelid-1" style="stroke: none; fill: rgb(173, 91, 55);"></use>state.eyes.whiteType &amp;&amp; <use xlink:href="#white-10" style="stroke: none;"></use>state.eyes.irisType &amp;&amp; <use xlink:href="#iris-1" style="stroke: none; fill: rgb(238, 181, 140);"></use>state.eyes.pupilType &amp;&amp; <use xlink:href="#pupil-2" style="stroke: none; fill: rgb(0, 0, 0);"></use>state.eyes.eyelashesType &amp;&amp; <use xlink:href="#eyelashes-11" style="stroke-width: 5; fill: none; stroke: rgb(154, 72, 36);"></use></g><g>state.eyebrows.type &amp;&amp; <use xlink:href="#eyebrows-5" style="fill: none; transform-origin: center center; transform: scale(1) translate(0px, 0px); stroke: rgb(154, 72, 36);"></use>state.eyebrows.type &amp;&amp; <use xlink:href="#eyebrows-5" style="fill: none; transform-origin: center center; transform: scaleX(-1) scaleY(1) translate(0px, 0px); stroke: rgb(154, 72, 36);"></use></g><g>state.glasses.type &amp;&amp; <use xlink:href="#glasses-2" style="stroke: none; transform-origin: center center; transform: scaleX(1) translateY(0px); fill: rgb(82, 15, 15);"></use>state.glasses.type &amp;&amp; <use xlink:href="#glasses-2" style="stroke: none; transform-origin: center center; transform: scaleX(-1) translateY(0px); fill: rgb(82, 15, 15);"></use></g></svg>')
  tools.ExportSVG(svg, 'filename.svg').then(() => {
    console.log('Exported!');
}).catch(err => {
    console.log(err);
});
  // sharp(svg)
  //   .png()
  //   .toFile("new-file.png")
  //   .then(function(info) {
  //     console.log(info)
  //   }).catch(function(err) {
  //     console.log(err)
  //   })
  res.send('Hola')
})

app.post('/download', (req, res)=>{
  let body = req.body;
  console.log(body)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})