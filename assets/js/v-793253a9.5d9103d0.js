"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[11026],{492881:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-793253a9","path":"/devices/WXCJKG11LM.html","title":"Xiaomi WXCJKG11LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Xiaomi WXCJKG11LM control via MQTT","description":"Integrate your Xiaomi WXCJKG11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-12-15T17:27:48.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing Instructions","slug":"pairing-instructions","link":"#pairing-instructions","children":[]},{"level":3,"title":"Binding","slug":"binding","link":"#binding","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Operation_mode (enum)","slug":"operation-mode-enum","link":"#operation-mode-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1679913451000},"filePathRelative":"devices/WXCJKG11LM.md"}')},908959:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var o=i(166252);const n=(0,o._)("h1",{id:"xiaomi-wxcjkg11lm",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#xiaomi-wxcjkg11lm","aria-hidden":"true"},"#"),(0,o.Uk)(" Xiaomi WXCJKG11LM")],-1),d=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),a=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"WXCJKG11LM")],-1),l=(0,o._)("td",null,"Vendor",-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Aqara Opple switch 1 band")],-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"battery, voltage, action, operation_mode, linkquality")],-1),s=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/WXCJKG11LM.jpg",alt:"Xiaomi WXCJKG11LM"})])],-1),u=(0,o.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing-instructions" tabindex="-1"><a class="header-anchor" href="#pairing-instructions" aria-hidden="true">#</a> Pairing Instructions</h3><p>Press and hold the button on the backside of the device until the blue light starts blinking, release it and the pairing should begin.</p><h3 id="binding" tabindex="-1"><a class="header-anchor" href="#binding" aria-hidden="true">#</a> Binding</h3><p>By default the switch is bound to the coordinator but this device can also be used to directly control other lights and switches in the network.</p><p>First unbind it from the coordinator, then you can bind it to any other device or group. (see ../guide/usage/binding.md )</p><p>Now change the operation mode of the device, by default it is in <code>event</code> mode, but when binding we need to change it to <code>command</code> mode. To do this send to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> payload <code>{&quot;operation_mode&quot;: &quot;command&quot;}</code>, right before doing this make sure to wakeup the device.</p><p>As the device is sleeping by default, you need to wake it up after sending the bind/unbind command by pressing the reset button once.</p><p>When bound to a lamp, the behavior is as follows (for WXCJKG11LM Aqara Opple switch 1 band):</p><ul><li>left click: turn off</li><li>right click: turn on</li><li>left double click: light dim down (by steps of 33%)</li><li>right double click: light dim up (by steps of 33%)</li><li>long left click: warm white</li><li>long right click: cold white</li></ul>',10),h=(0,o.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>button_1_hold</code>, <code>button_1_release</code>, <code>button_1_single</code>, <code>button_1_double</code>, <code>button_1_triple</code>, <code>button_2_hold</code>, <code>button_2_release</code>, <code>button_2_single</code>, <code>button_2_double</code>, <code>button_2_triple</code>.</p><h3 id="operation-mode-enum" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum" aria-hidden="true">#</a> Operation_mode (enum)</h3><p>Operation mode, select &quot;command&quot; to enable bindings (wake up the device before changing modes!). Value can be found in the published state on the <code>operation_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>command</code>, <code>event</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),p={},m=(0,i(983744).Z)(p,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),n,(0,o._)("table",null,[d,(0,o._)("tbody",null,[a,(0,o._)("tr",null,[l,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=Xiaomi"},{default:(0,o.w5)((()=>[(0,o.Uk)("Xiaomi")])),_:1})])]),r,c,s])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,o.kq)(" Notes END: Do not edit below this line "),h])}]])}}]);