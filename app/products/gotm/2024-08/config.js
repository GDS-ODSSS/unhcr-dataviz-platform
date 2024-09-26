var config1 = {
  style: ['mapbox://styles/unhcr/clz6xpgu500sk01ph6qwa0eyk'],
  accessToken: 'pk.eyJ1IjoidW5oY3IiLCJhIjoiOUQzQ2dnbyJ9.6ghfFmvxpu7HvHzXci_ogw',
  showMarkers: false,
  markerColor: '',
  inset: false,
  theme: 'light',
  projection: '',
  use3dTerrain: false,
  auto: false,
  title: 'This is a long title',
  subtitle: '',
  byline: '',
  footer: '',
  chapters: [[
    {
      id: 'chap-0',
      alignment: 'center',
      hidden: false,
      title: '',
      image: '',
      description: '<div><h3>Inside Haiti</h3><p>This  multi-dimensional crisis poses a critical threat to the life, health, security, and well-being of the Haitian people. This has resulted in significant internal displacement, exacerbating existing vulnerabilities already present in the population.</p><iframe title="Evolution of IDPs from 2022 to 2024" aria-label="Interactive line chart" id="datawrapper-chart-Pwwoy" src="https://datawrapper.dwcdn.net/Pwwoy/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="416" data-external="1" class="my-4"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();</script></div>',
      location: {
        center: [-72.35958, 18.84720],
        zoom: 5,
        mobileZoom: 3.5,
        pitch: 0.00,
        bearing: 0.00
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      route: '',
      onChapterEnter: [
        {
          layer: 'hti-adm-line',
          opacity: 0
        },
        {
          layer: 'hti-adm1-labels',
          opacity: 0
        },
      ],
      onChapterExit: [
        {
          layer: 'hti-adm-line',
          opacity: 0
        },
        {
          layer: 'hti-adm1-labels',
          opacity: 0
        },
      ]
    },
    {
      id: 'chap-1',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<p>As of September 2024, nearly <strong class="text-primary">703,000 people</strong> have been forced to flee their homes due to gang violence and general insecurity, with the number of internally displaced persons (IDPs) doubling between 2022 and 2023. In the first nine months of 2024 , more than 390,000 people were displaced. This displacement has occurred nationwide, but the majority of IDPs are concentrated in the West department, which includes the capital, Port-au-Prince.</p><div class="legend mb-3"><h5 class="legend-title">Number of IDP per province</h5><div class="legend-category"><img src="bubble_legend.svg" height="80" alt=""></div></div><p class="text-secondary"><small>Source: <a href="https://dtm.iom.int/haiti" target="_blank" rel="noopener noreferrer">IOM-DTM</a></small></p>',
      location: {
        center: [-72.8, 18.88663],
        zoom: 7.5,
        mobileZoom: 6,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      route: '',
      onChapterEnter: [
        {
          layer: 'hti-adm-line',
          opacity: 0.8
        },
        {
          layer: 'hti-adm1-labels',
          opacity: 1
        },
        {
          layer: 'hti-adm1-idp',
          opacity: 1
        },

      ],
      onChapterExit: [
        {
          layer: 'hti-adm1-idp',
          opacity: 0
        },
      ]
    },
    {
      id: 'chap-2',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<p>Children are particularly vulnerable in this crisis. Over half a million children live in neighborhoods controlled by armed groups, exposing them to violence and the risk of recruitment. The ongoing violence has forced the closure of nearly 900 schools, affecting almost <strong class="text-primary">200,000 children</strong> and increasing their vulnerability to exploitation by gangs. The situation is compounded by a lack of safe and private spaces for psychological support, heightening the risk of abuse and trafficking.</p><div class="legend mb-3"><h5 class="legend-title">Security incidents</h5><div class="legend-category"><span style="background-color: #ef485e;width:.75rem;height:.75rem;border-radius:50%; vertical-align:baseline;"></span>Incident location</div></div><p class="text-secondary"><small>Source: <a href="https://acleddata.com/" target="_blank" rel="noopener noreferrer">ACLED</a></small></p>',
      location: {
        center: [-72.8, 18.88663],
        zoom: 7.5,
        mobileZoom: 6,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'hti-acled-event',
          opacity: .8
        },
      ],
      onChapterExit: [
        {
          layer: 'hti-acled-event',
          opacity: 0
        },
      ]
    },
    {
      id: 'chap-3',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<p>Displaced women and girls, particularly those in internally displaced person sites, are <a href="https://reliefweb.int/report/haiti/crisis-haiti-gbv-situation-brief-update-26th-april-2024" target="_blank" rel="noopener noreferrer">disproportionately affected by the insecurity and violence</a>. Gender-based violence (GBV)  has surged amidst the ongoing crisis. From January to May 2024, 3,949 incidents of GBV, including sexual violence, physical assault and psychological / emotional violence, were reported to GBV service providers.  The rise in displaced populations and worsening security conditions in IDP sites have further increased GBV risks.  In March 2024, incidents of GBV were almost four times higher than in the first two months (44 in January and February compared to 172 in March), with some providers reporting up to 40 cases of rape per day.</p><div class="legend mb-3"><h5 class="legend-title">Number of GBV incidents per 1,000 IDP</h5><div class="legend-category"><span style="background-color: #FBDADF;"></span>1</div><div class="legend-category"><span style="background-color: #EF4A60;"></span>15</div><div class="legend-category"><span style="background-color: #8F2C39;"></span>65</div></div></div><p class="text-secondary"><small>Source: UNHCR</small></p>',
      location: {
        center: [-72.8, 18.88663],
        zoom: 7.5,
        mobileZoom: 6,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      route: '',
      onChapterEnter: [
        {
          layer: 'hti-gbv-idp',
          opacity: .5
        },
      ],
      onChapterExit: [
        {
          layer: 'hti-gbv-idp',
          opacity: 0
        },
      ]
    },
    {
      id: 'chap-4',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<p>Health and food security in Haiti are also at critical levels. Nearly half of the population suffers from <a href="https://www.ipcinfo.org/ipc-country-analysis/details-map/en/c/1156884/?iso3=HTI" target="_blank" rel="noopener noreferrer">severe food insecurity, with 18% in a state of emergency</a>. The updated Integrated Food Security Classification (IPC) projection from March 2024 shows a worsening of food insecurity, with about 532,000 additional people facing acute food insecurity compared to previous estimates. Of this total, nearly 243,500 people have moved into an emergency situation.</p><div class="legend mb-3"><h5 class="legend-title">IPC Acute Food Insecurity Phase Classification</h5><div class="legend-category"><span style="background-color: #e67700;"></span>Crisis - 3</div><div class="legend-category"><span style="background-color: #c70000;"></span>Emergency - 4</div></div><p class="text-secondary"><small>Source: <a href="https://www.ipcinfo.org/ipc-country-analysis/details-map/en/c/1156884/?iso3=HTI" target="_blank" rel="noopener noreferrer">IPC</a></small></p>',
      location: {
        center: [-72.8, 18.88663],
        zoom: 7.5,
        mobileZoom: 6,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      route: '',
      onChapterEnter: [
        {
          layer: 'hti-ipc-phase',
          opacity: 0.4
        },
        
      ],
      onChapterExit: [
        {
          layer: 'hti-ipc-phase',
          opacity: 0
        },

      ]
    },
    {
      id: 'chap-5',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<p>The living conditions of internally displaced populations are increasingly dire. While most IDPs sites are concentrated around Port-au-Prince there has been a gradual movement to different departments throughout the country and especially to the southern region where nearly 268,000 displaced individuals reside. Many face severe shortages of food, water, shelter, and medical care. Approximately 83% of IDPs stay with host families, who often struggle with limited resources. Constraints in humanitarian access make it more difficult to deliver assistance to those in need.</p><p>For Haitians forcibly returned to Haiti, returning to a country in turmoil, often after years of living outside the country, combined with the conditions in which forced returns take place, including detention, make reintegration all the more challenging. The humanitarian needs of those returned continue to grow.</p><p>In Haiti, UN agencies, civil society and international and local partners are working to address humanitarian needs. These efforts include emergency support to millions of food insecure people, providing basic services to a growing number of displaced families in sites and host communities, preventing and responding to protection risks, including rampant gender-based violence. In parallel to these efforts, humanitarian partners are focused on enhancing the government capacity and strengthening preparedness for natural disasters, including with anticipatory action.</p><div class="legend mb-3"><h5 class="legend-title">Humanitarian access severity</h5><div class="legend-category"><span style="background-color: #FBDADF;"></span>Low</div><div class="legend-category"><span style="background-color: #EF4A60;"></span>Medium</div><div class="legend-category"><span style="background-color: #8F2C39;"></span>High</div></div><p class="text-secondary"><small>Source: <a href="https://reliefweb.int/report/haiti/haiti-apercu-de-la-severite-de-lacces-humanitaire-janvier-juin-2024-26-juillet-2024" target="_blank" rel="noopener noreferrer">OCHA</a></small></p>',
      location: {
        center: [-72.8, 18.88663],
        zoom: 7.5,
        mobileZoom: 6,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      route: '',
      onChapterEnter: [
        {
          layer: 'hti-hum-access',
          opacity: .5
        },
      ],
      onChapterExit: [
        {
          layer: 'hti-hum-access',
          opacity: 0
        },
        {
          layer: 'hti-adm-line',
          opacity: 0
        },
        {
          layer: 'hti-adm1-labels',
          opacity: 0
        },
      ]
    },
    {
      id: 'chap-6',
      alignment: 'center',
      hidden: false,
      title: '',
      image: '',
      description: '<h3>Outside Haiti</h3><p>The dire humanitarian situation in Haiti has increasingly forced Haitians to flee their country in search of safety. As of December 2023, over 350,000 Haitians have sought protection abroad, with the vast majority remaining within the Americas.</p><iframe title="Top 10 country of asylum for Haitians | 2023" aria-label="Stacked Bars" id="datawrapper-chart-WDZ6F" src="https://datawrapper.dwcdn.net/WDZ6F/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="460" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();</script><p>Among those fleeing Haiti are people with different protection needs, profiles, and motivations, including unaccompanied and separated children, victims of trafficking, and survivors of gender-based violence. Some may have well-founded grounds to request international refugee protection according to UNHCR’s International Protection Considerations with regard to people fleeing Haiti, while others may have other protection needs. The diverse profiles of those fleeing underscore the urgent need for protection and support for Haitians seeking safety in the region and beyond.</p>',
      location: {
        center: [-73, 8],
        zoom: 3,
        mobileZoom: 2.5,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      route: '',
      onChapterEnter: [

      ],
      onChapterExit: [

      ]
    },
    // {
    //   id: 'chap-7',
    //   alignment: 'left',
    //   hidden: false,
    //   title: '',
    //   image: '',
    //   description: '<h5>Haitians displaced in the Americas</h5><p>The most common destinations for Haitians fleeing the country include countries in the Caribbean, Central and South America. The journey from Haiti to other parts of the Americas often involves perilous routes, including dangerous sea voyages and treacherous land crossings.</p><div class="legend mb-3"><h5 class="legend-title">Key transit and destination countries by movement type</h5><div class="legend-category"><span style="background-color: #0072bc;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Primary movement</div><div class="legend-category"><span style="background-color: #18375F;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Onward movement</div></div><p class="text-secondary"><small>Source: UNHCR</small></p>',
    //   location: {
    //     center: [-73, 8],
    //     zoom: 3,
    //     mobileZoom: 0.1,
    //     pitch: 0.00,
    //     bearing: 0.00
    //   },
    //   mapAnimation: 'flyTo',
    //   rotateAnimation: false,
    //   callback: '',
    //   triggerDashAnimation: true,
    //   dashAnimationConfig: {
    //     geojson: ["hti_route_bezier.json"],
    //     lineColor: "#18375F",
    //     lineWidth: 2.5,
    //     lineDasharray: [0, 4, 3],
    //     dashArraySequence: [
    //         [0, 4, 3], [0.5, 4, 2.5], [1, 4, 2],
    //         [1.5, 4, 1.5], [2, 4, 1], [2.5, 4, 0.5],
    //         [3, 4, 0], [0, 0.5, 3, 3.5], [0, 1, 3, 3],
    //         [0, 1.5, 3, 2.5], [0, 2, 3, 2], [0, 2.5, 3, 1.5],
    //         [0, 3, 3, 1], [0, 3.5, 3, 0.5]
    //     ],
    //     animationSpeed: 120 
    //   },
    //   onChapterEnter: [
    //   ],
    //   onChapterExit: [
    //   ]
    // },
    {
      id: 'chap-8',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<h5>Haitians displaced in the Americas</h5><p>The most common destinations for Haitians fleeing the country include countries in the Caribbean, North, Central and South America.</p><p>The situation in Haiti has led to different waves of movements from the country in the past decade, including a rise in maritime voyages as indicated by increased interceptions at sea. In 2024, the primary intended destinations for these movements have been the Bahamas, the United States, and the Turks and Caicos Islands, with additional, smaller-scale occurrences observed across other northern Caribbean islands.</p><iframe title="Number of boats encountered at sea" aria-label="Bar Chart" id="datawrapper-chart-fEfPT" src="https://datawrapper.dwcdn.net/fEfPT" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="215" data-external="1" class="my-4"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();</script><div class="legend mb-3"><h5 class="legend-title">Main displacement routes by type</h5><div class="legend-category"><span style="background-color: #0072BC;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Land</div><div class="legend-category"><span style="background-color: #00B398;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Sea</div><div class="legend-category"><span style="background-color: #18375F;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Air</div></div><p class="text-secondary"><small>Source: UNHCR</small></p>',
      location: {
        center: [-74, 21],
        zoom: 5.3,
        mobileZoom: 4,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      triggerPointAnimation: true,
      pointAnimationConfig: {
        geojson: ['land_routes_3.json','sea_routes_1.json'],
        lineColor: ['#0072BC','#00B398'],
        lineWidth: 2,
        iconImage: ['dot-blue','dot-green'],
        iconSize: 0.7
      },
      animationSpeed: 100,
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: 'chap-9',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<p>In the Americas, other movements of Haitians include arrivals to Brazil, Chile, and French Guyana but these routes are costly to access for most Haitians given that they involve air travel. Moreover, lack of access to documentation poses an additional challenge for Haitians seeking to travel in a regular manner.</p><div class="legend mb-3"><h5 class="legend-title">Main displacement routes by type</h5><div class="legend-category"><span style="background-color: #0072BC;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Land</div><div class="legend-category"><span style="background-color: #00B398;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Sea</div><div class="legend-category"><span style="background-color: #18375F;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Air</div></div><p class="text-secondary"><small>Source: UNHCR</small></p>',
      location: {
        center: [-67, 0],
        zoom: 3.2,
        mobileZoom: 2,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      triggerPointAnimation: true,
      pointAnimationConfig: {
        geojson: ['air_routes_1.json','land_routes_4.json'],
        lineColor: ['#18375F','#0072BC'],
        lineWidth: 2,
        iconImage: ['dot-navy','dot-blue'],
        iconSize: 0.7
      },
      animationSpeed: 100,
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: 'chap-10',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<p>While some stay in countries of first arrival, others continue their journey onwards through South and Central America, where they may spend at least 6 months, and in many cases over a year, before heading further north. This northbound movement mainly passes towards Ecuador and Colombia, before leading to the dangerous crossing of the Darién jungle into Panama.</p><div class="legend mb-3"><h5 class="legend-title">Main displacement routes by type</h5><div class="legend-category"><span style="background-color: #0072BC;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Land</div><div class="legend-category"><span style="background-color: #00B398;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Sea</div><div class="legend-category"><span style="background-color: #18375F;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Air</div></div><p class="text-secondary"><small>Source: UNHCR</small></p>',
      location: {
        center: [-72, -7],
        zoom: 3.8,
        mobileZoom: 2.5,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      triggerPointAnimation: true,
      pointAnimationConfig: {
        geojson: ['land_routes_1.json'],
        lineColor: ['#0072BC'],
        lineWidth: 2,
        iconImage: ['dot-blue'],
        iconSize: 0.7
      },
      animationSpeed: 100,
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: 'chap-11',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<p>The Darien land route is especially dangerous. In 2023, over 46,000 Haitian nationals crossed the Darien, making Haiti the third most common nationality, following Venezuela and Ecuador. This trend has continued into 2024, with over 11,000 irregular crossings reported as of early September.  Many reach Central American countries, Mexico, and the United States through this land route.</p><iframe title="Haitians crossing the Darien | 2022 to 2024" aria-label="Stacked Bars" id="datawrapper-chart-4Jcaq" src="https://datawrapper.dwcdn.net/4Jcaq/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="195" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();</script><figure class="figure my-4"><img src="RF1338890_67.jpg" class="figure-img img-fluid" alt=""><figcaption class="figure-caption">Panama. Over 11,000 Haitians crossed the Darien in the first 9 months of 2024<br>©UNHCR/Melissa Pinel</figcaption></figure><p>In addition to the challenges posed for people moving in mixed flows, as predominantly Kreyol speakers Haitians often have language barriers and Haitian asylum-seekers and migrants in the Americas often face compounded barriers to accessing protection and solutions, including discrimination, xenophobia and lack of access to information.</p><div class="legend mb-3"><h5 class="legend-title">Main displacement routes by type</h5><div class="legend-category"><span style="background-color: #0072BC;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Land</div><div class="legend-category"><span style="background-color: #00B398;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Sea</div><div class="legend-category"><span style="background-color: #18375F;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Air</div></div><p class="text-secondary"><small>Source: UNHCR</small></p>',
      location: {
        center: [-81, 8],
        zoom: 6,
        mobileZoom: 4.5,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      route: '',
      onChapterEnter: [],
      onChapterExit: [],
      triggerPointAnimation: true,
      pointAnimationConfig: {
        geojson: ['land_routes_2.json'],
        lineColor: ['#0072BC'],
        lineWidth: 2,
        iconImage: ['dot-blue'],
        iconSize: 0.7
      },
      animationSpeed: 100,
    },
    {
      id: 'chap-12',
      alignment: 'center',
      hidden: false,
      title: '',
      image: '',
      description: '<h3>Solutions for Haitian Refugees</h3><p></p>The crisis in Haiti is driven by multiple factors, including political instability, economic hardship, violence, and natural disasters. Addressing this complex situation requires a comprehensive, multi-dimensional response from those in the region and beyond that integrates sustainable solutions.<p>In March 2024, <a href="https://www.refworld.org/policy/countrypos/unhcr/2024/en/147710" target="_blank" rel="noopener noreferrer">UNHCR published International Protection Considerations with regard to people fleeing Haiti</a>, outlining certain profiles of Haitians who might be eligible for refugee protection under the 1951 Refugee Convention or under the expanded definition in the 1984 Cartagena Declaration. These considerations provide guidance to assist States in assessing asylum claims in light of the extreme violence, human rights violations, and events that have seriously disturbed public order in Haiti.  Seeking asylum is a human right, and UNHCR is committed to working with host countries to provide legal and humanitarian support to hosts and the asylum-seekers they protect.</p><p>Countries could also consider granting other forms of protection for people from Haiti, including complementary protection, temporary protection, humanitarian admission, or other legal stay arrangements. Several countries in the Americas are already offering these alternatives to displaced Haitians, enhancing their protection and allowing them to integrate into the communities has welcomed them, some examples include:</p>',
      location: {
        center: [-73, 8],
        zoom: 3,
        mobileZoom: 2,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'country-labels',
          opacity: 1
        },
        {
          layer: 'territory-label',
          opacity: 1
        },
        {
          layer: 'CHL-Labels',
          opacity: 1
        },
        {
          layer: 'BRA-Labels',
          opacity: 1
        },
        {
          layer: 'MEX-Labels',
          opacity: 1
        },
        {
          layer: 'CAN-Labels',
          opacity: 1
        },
        {
          layer: 'USA-Labels',
          opacity: 1
        },
      ],
      onChapterExit: []
    },
    {
      id: 'chap-13',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<h5>Mexico</h5><p>Mexico became the first country in Latin America to apply the Cartagena definition to Haitian asylum-seekers, following successful training sessions for the Mexican Commission for Refugee Assistance (COMAR) staff in July, supported by UNHCR. This application of the Cartagena definition is expected to enhance COMAR&apos;s ability to efficiently process asylum claims from Haitians and offer them comprehensive protection, including the possibility of family reunification in Mexico—a benefit they would not receive under complementary protection or standard migratory status.</p><figure class="figure my-4"><img src="RF1336943_202311211848_DSCF3995_jg.jpg" class="figure-img img-fluid" alt=""><figcaption class="figure-caption">Mexico. Refugees can rebuild their lives in Aguascalientes through a relocation and integration programme.<br>©UNHCR/Jeoffrey Guillemard</figcaption></figure>',
      location: {
        center: [-104.43053, 22.64543],
        zoom: 3.7,
        mobileZoom: 2.5,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'MEX-Labels',
          opacity: 1
        },
        {
          layer: 'MEX-Mask',
          opacity: 1
        },
        {
          layer: 'country-labels',
          opacity: 0
        },
        {
          layer: 'territory-label',
          opacity: 0
        },
        {
          layer: 'USA-Labels',
          opacity: 0
        },
        {
          layer: 'CAN-Labels',
          opacity: 0
        },
      ],
      onChapterExit: [
        {
          layer: 'MEX-Labels',
          opacity: 0
        },
        {
          layer: 'MEX-Mask',
          opacity: 0
        },
      ]
    },
    {
      id: 'chap-14',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: "<h5>Chile</h5><p>Following the 2010 devastating earthquake severely affecting Haiti, Chile adopted different measures to facilitate the regularization of Haitians in their territory including temporary visas and measures to facilitate family reunification. The number of Haitian nationals in Chile has increased sharply since, with a total of 184,721 Haitians in Chile, based on official numbers from December 2022. Despite facing challenges with meeting the requirements to apply for permanent residence visas, in 2023, Haitians accounted for the second highest number of permanent residency applications, with 25,799 applications </p>",
      location: {
        center: [-70, -34],
        zoom: 3.5,
        mobileZoom: 2.2,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'CHL-Labels',
          opacity: 1
        },
        {
          layer: 'BRA-Labels',
          opacity: 0
        },
        {
          layer: 'CHL-Mask',
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: 'CHL-Mask',
          opacity: 0
        },
        {
          layer: 'CHL-Labels',
          opacity: 0
        },
      ]
    },
    {
      id: 'chap-15',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<h5>Brazil</h5><p>Brazil has historically been a welcoming country for the Haitian population. Haitians can apply for a permanent visa based on humanitarian grounds. In June 2023, the government launched the Action Plan for Strengthening the Protection and Local Integration of the Haitian Population in Brazil, an initiative jointly built with UNHCR.</p><p>The Plan targets both Haitians already residing in Brazil, to support their integration process and try to address and prevent risky, secondary movements, as well as those arriving more recently who need timely access to information, protection, and livelihood opportunities.</p><figure class="figure my-4"><img src="RF1369329_20240806-lajeado.jpg" class="figure-img img-fluid" alt=""><figcaption class="figure-caption">Brazil. UNHCR response to floods in Rio Grande do Sul. Claudia is from Haiti - she is a resident with international protection need.<br>©UNHCR/Joana Lopes</figcaption></figure>',
      location: {
        center: [-55, -13],
        zoom: 3.5,
        mobileZoom: 2.2,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'BRA-Labels',
          opacity: 1
        },
        {
          layer: 'CHL-Labels',
          opacity: 0
        },
        {
          layer: 'BRA-Mask',
          opacity: 1
        },
      ],
      onChapterExit: [
        {
          layer: 'BRA-Labels',
          opacity: 0
        },
        {
          layer: 'BRA-Mask',
          opacity: 0
        },
      ]
    },
    {
      id: 'chap-16',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: "<h5>Canada</h5><p>The federal government launched a family-based humanitarian pathway to provide permanent residence to Haitian, Colombian, and Venezuelan nationals with family members residing in Canada, which is benefiting 11,000 people.</p><p>In recognition of their exceptional contribution to Canada during the COVID-19 pandemic, in 2021, Canada implemented a special measure to provide a pathway to permanent residence for asylum claimants – including many Haitians - across the country working in the healthcare sector.</p>",
      location: {
        center: [-98, 60],
        zoom: 3.2,
        mobileZoom: 2,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'CAN-Labels',
          opacity: 1
        },
        {
          layer: 'MEX-Labels',
          opacity: 0
        },
        {
          layer: 'CAN-Mask',
          opacity: 1
        },
      ],
      onChapterExit: [
        {
          layer: 'CAN-Labels',
          opacity: 0
        },
        {
          layer: 'CAN-Mask',
          opacity: 0
        },
      ]
    },
    {
      id: 'chap-17',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: "<h5>United States</h5><p>Among the examples from the US, on June 28, 2024, the United States announced the extension and redesignation of Haiti for Temporary Protected Status (TPS) for 18 months, until 3 February 2026. The redesignation of Haiti for TPS allows an estimated 309,000 additional Haitian nationals to file an application for TPS.</p>",
      location: {
        center: [-98, 38],
        zoom: 3.8,
        mobileZoom: 2.5,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'USA-Labels',
          opacity: 1
        },
        {
          layer: 'USA-Mask',
          opacity: 1
        },
        {
          layer: 'CAN-Labels',
          opacity: 0
        },
        {
          layer: 'MEX-Labels',
          opacity: 0
        },
        {
          layer: 'country-labels',
          opacity: 0
        },
        {
          layer: 'territory-label',
          opacity: 0
        },
      ],
      onChapterExit: [
        {
          layer: 'USA-Labels',
          opacity: 0
        },
        {
          layer: 'USA-Mask',
          opacity: 0
        },
      ]
    },
    {
      id: 'chap-18',
      alignment: 'center',
      hidden: false,
      title: '',
      image: '',
      description: '<h5>Other Solutions</h5><p>Several countries in the Americas and beyond are extending various forms of protection and legal stay arrangements to Haitian refugees, including temporary protection, family reunification, humanitarian visas, and access to documentation.</p><p>For example, France has introduced an education program specifically supporting high school-aged Haitian refugees, and The Bahamas amended The Passport Act to provide protocols for children of Bahamian men born to foreign women in the Bahamas to obtain nationality. The main profile of persons affected by the new legislation are children born to Haitian mothers born in The Bahamas.</p>',
      location: {
        center: [-73, 8],
        zoom: 3,
        mobileZoom: 2,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'country-labels',
          opacity: 1
        },
        {
          layer: 'territory-label',
          opacity: 1
        },
        {
          layer: 'CHL-Labels',
          opacity: 1
        },
        {
          layer: 'BRA-Labels',
          opacity: 1
        },
        {
          layer: 'MEX-Labels',
          opacity: 1
        },
        {
          layer: 'CAN-Labels',
          opacity: 1
        },
        {
          layer: 'USA-Labels',
          opacity: 1
        },
      ],
      onChapterExit: []
    },
    
    {
      id: 'chap-19',
      alignment: 'center',
      hidden: false,
      title: '',
      image: '',
      description: '<p>Throughout the Americas, UNHCR is working with partners to provide protection and solutions for Haitians in a situation of forced displacement. Inside Haiti, UNHCR is working alongside UN agencies and protection partners to enhance protection for internally displaced persons and provide access to documentation to prevent statelessness and ensure access to rights.</p><p>Despite the severity of the crisis, funding for the humanitarian response in Haiti remains critically low. The <a href="https://fts.unocha.org/plans/1178/summary" target="_blank" rel="noopener noreferrer">Humanitarian Response Plan</a> is currently <strong>39 percent funded</strong>.</p><p><a href="https://reliefweb.int/report/haiti/haiti-advocacy-note-immediate-mobilisation-resources-august-2024">Advocacy note for the immediate mobilisation of resources</a></p><iframe title="Haiti Humanitarian Response Plan Funding" aria-label="Stacked Bars" id="datawrapper-chart-To5FA" src="https://datawrapper.dwcdn.net/To5FA/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="129" data-external="1" class="my-4"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();</script><p><a class="btn btn-primary" href="#">Donate</a></p>',
      location: {
        center: [-72.8, 18.88663],
        zoom: 7.5,
        mobileZoom: 6,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
  ]]
};

var config2 = {
  style: ['mapbox://styles/unhcr/cm196p8xi029u01pjdnry42xl'],
  accessToken: 'pk.eyJ1IjoidW5oY3IiLCJhIjoiOUQzQ2dnbyJ9.6ghfFmvxpu7HvHzXci_ogw',
  showMarkers: false,
  markerColor: '',
  inset: false,
  theme: 'light',
  projection: '',
  use3dTerrain: false,
  auto: false,
  title: '',
  subtitle: '',
  byline: '',
  footer: '',
  chapters: [[
    {
      id: 'chap-0',
      alignment: 'center',
      hidden: false,
      title: '',
      image: '',
      description: '<div><h3>Aperçu de la situation en Haïti</h3><p>La crise actuelle, multidimensionnelle, représente une menace importante pour la vie, la santé, la sécurité et le bien-être de la population haïtienne. Elle a entraîné d\'importants déplacements internes, exacerbant ainsi les vulnérabilités déjà présentes au sein de la population.</p><iframe title="Évolution du nombre de déplacés internes en Haïti de 2022 à 2024" aria-label="Interactive line chart" id="datawrapper-chart-1dgOP" src="https://datawrapper.dwcdn.net/1dgOP/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="419" data-external="1" class="my-4"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();</script></div>',
      location: {
        center: [-72.35958, 18.84720],
        zoom: 5,
        mobileZoom: 3.5,
        pitch: 0.00,
        bearing: 0.00
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      route: '',
      onChapterEnter: [
        {
          layer: 'hti-adm-line',
          opacity: 0
        },
        {
          layer: 'hti-adm1-labels',
          opacity: 0
        },
      ],
      onChapterExit: [
        {
          layer: 'hti-adm-line',
          opacity: 0
        },
        {
          layer: 'hti-adm1-labels',
          opacity: 0
        },
      ]
    },
    {
      id: 'chap-1',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<p>En date du mois de septembre 2024, près de <strong class="text-primary">703 000 personnes</strong> ont été contraintes de fuir leur domicile en raison de la violence des gangs et de l\'insécurité générale. Le nombre de personnes déplacées à l\'intérieur du pays a doublé entre 2022 et 2023. Au cours des neuf premiers mois de 2024, plus de 390 000 personnes ont été déplacées. Ces déplacements ont eu lieu dans tout le pays, mais la majorité des personnes déplacées sont concentrées dans le département de l\'Ouest, qui comprend la capitale, Port-au-Prince.</p><div class="legend mb-3"><h5 class="legend-title">Nombre de personnes déplacées par province</h5><div class="legend-category"><img src="bubble_legend_fr.svg" height="80" alt=""></div></div><p class="text-secondary"><small>Source: <a href="https://dtm.iom.int/haiti" target="_blank" rel="noopener noreferrer">OIM-DTM</a></small></p>',
      location: {
        center: [-72.8, 18.88663],
        zoom: 7.5,
        mobileZoom: 6,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      route: '',
      onChapterEnter: [
        {
          layer: 'hti-adm-line',
          opacity: 0.8
        },
        {
          layer: 'hti-adm1-labels',
          opacity: 1
        },
        {
          layer: 'hti-adm1-idp',
          opacity: 1
        },

      ],
      onChapterExit: [
        {
          layer: 'hti-adm1-idp',
          opacity: 0
        },
      ]
    },
    {
      id: 'chap-2',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<p>Les enfants sont particulièrement vulnérables dans cette crise. Plus d\'un demi-million d\'enfants vivent dans des quartiers contrôlés par des groupes armés, ce qui les expose à la violence et au risque de recrutement. La violence actuelle a entraîné la fermeture de près de 900 écoles, ce qui a affecté près de <strong class="text-primary">200 000 enfants</strong> et les a rendus plus vulnérables à l\'exploitation par les gangs. La situation est encore aggravée par le manque d\'espaces sûrs et privés permettant une prise en charge psychologique des enfants, ce qui accroît le risque d\'abus et de traite des êtres humains.</p><div class="legend mb-3"><h5 class="legend-title">Incidents de sécurité</h5><div class="legend-category"><span style="background-color: #ef485e;width:.75rem;height:.75rem;border-radius:50%; vertical-align:baseline;"></span>Localisation de l\'incident</div></div><p class="text-secondary"><small>Source: <a href="https://acleddata.com/" target="_blank" rel="noopener noreferrer">ACLED</a></small></p>',
      location: {
        center: [-72.8, 18.88663],
        zoom: 7.5,
        mobileZoom: 6,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'hti-acled-event',
          opacity: .8
        },
      ],
      onChapterExit: [
        {
          layer: 'hti-acled-event',
          opacity: 0
        },
      ]
    },
    {
      id: 'chap-3',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<p>Les femmes et les jeunes filles déplacées, en particulier celles qui vivent dans des sites pour personnes déplacées, <a href="https://reliefweb.int/report/haiti/crisis-haiti-gbv-situation-brief-update-26th-april-2024" target="_blank" rel="noopener noreferrer">sont touchées de manière disproportionnée par l\'insécurité et la violence</a> (lien en anglais). La violence basée sur le genre s\'est accrue dans le contexte de la crise actuelle. De janvier à mai 2024, 3 949 incidents de violence basée sur le genre, y compris des actes de violence sexuelle, des agressions physiques et des actes de violence psychologique/émotionnelle, ont été signalés aux organismes de prise en charge de la violence basée sur le genre. La hausse du nombre de personnes déplacées et la détérioration des conditions de sécurité dans les sites de déplacés internes ont encore accru les risques de violence basée sur le genre. En mars 2024, les incidents de ce type ont été presque quatre fois plus nombreux qu\'au cours des deux premiers mois (44 en janvier et février contre 172 en mars), certains intervenants signalant jusqu\'à 40 cas de viols par jour.</p><div class="legend mb-3"><h5 class="legend-title">Nombre d\'incidents de violence basée sur le genre pour 1000 personnes déplacées internes</h5><div class="legend-category"><span style="background-color: #FBDADF;"></span>1</div><div class="legend-category"><span style="background-color: #EF4A60;"></span>15</div><div class="legend-category"><span style="background-color: #8F2C39;"></span>65</div></div></div><p class="text-secondary"><small>Source: HCR</small></p>',
      location: {
        center: [-72.8, 18.88663],
        zoom: 7.5,
        mobileZoom: 6,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      route: '',
      onChapterEnter: [
        {
          layer: 'hti-gbv-idp',
          opacity: .5
        },
      ],
      onChapterExit: [
        {
          layer: 'hti-gbv-idp',
          opacity: 0
        },
      ]
    },
    {
      id: 'chap-4',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<p>Les conditions en matière de santé et de sécurité alimentaire en Haïti sont également critiques. Près de la moitié de la population souffre d\'insécurité alimentaire sévère, avec <a href="https://www.ipcinfo.org/ipc-country-analysis/details-map/en/c/1156884/?iso3=HTI" target="_blank" rel="noopener noreferrer">18% de la population en état d\'urgence<a/> (lien en anglais). Selon les projections actualisées du modèle de classification intégrée de la sécurité alimentaire (IPC) pour mars 2024, l\'insécurité alimentaire va s\'aggraver, avec environ 532 000 personnes supplémentaires confrontées à une insécurité alimentaire aiguë par rapport aux estimations précédentes. Sur ce total, près de 243 500 personnes seraient en situation d\'urgence.</p><div class="legend mb-3"><h5 class="legend-title">Classification de l\'insécurité alimentaire aiguë selon l\'IPC</h5><div class="legend-category"><span style="background-color: #e67700;"></span>Crise - 3</div><div class="legend-category"><span style="background-color: #c70000;"></span>Urgence - 4</div></div><p class="text-secondary"><small>Source: <a href="https://www.ipcinfo.org/ipc-country-analysis/details-map/en/c/1156884/?iso3=HTI" target="_blank" rel="noopener noreferrer">IPC</a></small></p>',
      location: {
        center: [-72.8, 18.88663],
        zoom: 7.5,
        mobileZoom: 6,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      route: '',
      onChapterEnter: [
        {
          layer: 'hti-ipc-phase',
          opacity: 0.4
        },
        
      ],
      onChapterExit: [
        {
          layer: 'hti-ipc-phase',
          opacity: 0
        },

      ]
    },
    {
      id: 'chap-5',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<p>Les conditions de vie des populations déplacées à l\'intérieur du pays sont de plus en plus difficiles. Alors que la plupart des sites de déplacés sont concentrés autour de Port-au-Prince, il y a eu un mouvement progressif vers différents départements à travers le pays et en particulier vers le sud où près de 268 000 personnes déplacées vivent actuellement. Beaucoup sont confrontés à de graves pénuries dans les domaines de la nourriture, de l\'eau, des abris et des soins médicaux. Environ 83% des personnes déplacées sont hébergées dans des familles d\'accueil, qui doivent souvent composer avec des ressources limitées. Les contraintes d\'accès rendent plus difficile l\'acheminement de l\'aide humanitaire aux personnes dans le besoin.</p><p>Pour les Haïtiens renvoyés de force en Haïti, le retour dans ce pays en proie à des troubles, souvent après des années de vie à l\'étranger, et compte tenu des conditions dans lesquelles s\'effectuent les retours forcés, qui comprennent souvent une période de détention, la réintégration est d\'autant plus difficile. Les besoins humanitaires des personnes rapatriées ne cessent de croître.</p><p>En Haïti, les agences des Nations unies, la société civile et leurs partenaires nationaux et internationaux s\'efforcent de répondre aux besoins humanitaires. Ces efforts comprennent une aide d\'urgence à des millions de personnes en situation d\'insécurité alimentaire, la fourniture de services de base à un nombre croissant de familles déplacées dans les sites et au sein des communautés d\'accueil, la prévention et la réponse aux problèmes de protection, y compris la généralisation des cas de violence basée sur le genre. Parallèlement à ces efforts, les partenaires humanitaires s\'attachent à renforcer les capacités du gouvernement et à améliorer la préparation aux catastrophes naturelles, notamment par des mesures d\'anticipation</p><div class="legend mb-3"><h5 class="legend-title">Degré de difficulté de l\'accès humanitaire</h5><div class="legend-category"><span style="background-color: #FBDADF;"></span>Faible</div><div class="legend-category"><span style="background-color: #EF4A60;"></span>Moyen</div><div class="legend-category"><span style="background-color: #8F2C39;"></span>Élevé</div></div><p class="text-secondary"><small>Source: <a href="https://reliefweb.int/report/haiti/haiti-apercu-de-la-severite-de-lacces-humanitaire-janvier-juin-2024-26-juillet-2024" target="_blank" rel="noopener noreferrer">OCHA</a></small></p>',
      location: {
        center: [-72.8, 18.88663],
        zoom: 7.5,
        mobileZoom: 6,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      route: '',
      onChapterEnter: [
        {
          layer: 'hti-hum-access',
          opacity: .5
        },
      ],
      onChapterExit: [
        {
          layer: 'hti-hum-access',
          opacity: 0
        },
        {
          layer: 'hti-adm-line',
          opacity: 0
        },
        {
          layer: 'hti-adm1-labels',
          opacity: 0
        },
      ]
    },
    {
      id: 'chap-6',
      alignment: 'center',
      hidden: false,
      title: '',
      image: '',
      description: '<h3>Hors des frontières d\'Haïti</h3><p>La situation humanitaire désastreuse en Haïti contraint toujours plus d\'Haïtiens à fuir leur pays en quête de sécurité. En décembre 2023, plus de 350 000 Haïtiens avaient cherché refuge à l\'étranger, la grande majorité d\'entre eux restant sur le continent américain.</p><iframe title="Les 10 premiers pays d\'asile pour les Haïtiens | 2023" aria-label="Barres empilées" id="datawrapper-chart-jTpwj" src="https://datawrapper.dwcdn.net/jTpwj/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="463" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();</script><p>Parmi les personnes fuyant Haïti se trouvent des personnes ayant des besoins de protection, des profils et des motivations différents. Il peut s\'agir d\'enfants non accompagnés ou séparés de leur famille, de victimes de la traite des êtres humains ou de victimes de violences basées sur le genre. Certaines personnes peuvent avoir des raisons fondées de demander l\'asile au titre des recommandations du HCR relatives à la protection internationale des personnes fuyant Haïti, tandis que d\'autres peuvent avoir d\'autres besoins en matière de protection. Les profils variés des personnes en fuite soulignent le besoin urgent de protection et de soutien pour les Haïtiens en quête de sécurité dans la région et au-delà.</p>',
      location: {
        center: [-73, 8],
        zoom: 3,
        mobileZoom: 2.5,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      route: '',
      onChapterEnter: [

      ],
      onChapterExit: [

      ]
    },
    // {
    //   id: 'chap-7',
    //   alignment: 'left',
    //   hidden: false,
    //   title: '',
    //   image: '',
    //   description: '<h5>Haitians displaced in the Americas</h5><p>The most common destinations for Haitians fleeing the country include countries in the Caribbean, Central and South America. The journey from Haiti to other parts of the Americas often involves perilous routes, including dangerous sea voyages and treacherous land crossings.</p><div class="legend mb-3"><h5 class="legend-title">Key transit and destination countries by movement type</h5><div class="legend-category"><span style="background-color: #0072bc;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Primary movement</div><div class="legend-category"><span style="background-color: #18375F;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Onward movement</div></div><p class="text-secondary"><small>Source: UNHCR</small></p>',
    //   location: {
    //     center: [-73, 8],
    //     zoom: 3,
    //     mobileZoom: 0.1,
    //     pitch: 0.00,
    //     bearing: 0.00
    //   },
    //   mapAnimation: 'flyTo',
    //   rotateAnimation: false,
    //   callback: '',
    //   triggerDashAnimation: true,
    //   dashAnimationConfig: {
    //     geojson: ["hti_route_bezier.json"],
    //     lineColor: "#18375F",
    //     lineWidth: 2.5,
    //     lineDasharray: [0, 4, 3],
    //     dashArraySequence: [
    //         [0, 4, 3], [0.5, 4, 2.5], [1, 4, 2],
    //         [1.5, 4, 1.5], [2, 4, 1], [2.5, 4, 0.5],
    //         [3, 4, 0], [0, 0.5, 3, 3.5], [0, 1, 3, 3],
    //         [0, 1.5, 3, 2.5], [0, 2, 3, 2], [0, 2.5, 3, 1.5],
    //         [0, 3, 3, 1], [0, 3.5, 3, 0.5]
    //     ],
    //     animationSpeed: 120 
    //   },
    //   onChapterEnter: [
    //   ],
    //   onChapterExit: [
    //   ]
    // },
    {
      id: 'chap-8',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<h5>Haïtiens déracinés sur le continent américain</h5><p>Les destinations les plus courantes pour les Haïtiens fuyant le pays sont les pays des Caraïbes, d\'Amérique du Nord, d\'Amérique centrale et d\'Amérique du Sud.</p><p>La situation en Haïti a donné lieu à différentes phases de déplacement au cours de la dernière décennie, y compris une augmentation des traversées maritimes, comme l\'indique l\'augmentation des interceptions en mer. En 2024, les principales destinations prévues de ces déplacements étaient les Bahamas, les États-Unis et les îles Turks et Caïques, avec d\'autres déplacements à plus petite échelle observés vers d\'autres îles du nord des Caraïbes.</p><iframe title="Nombre de bateaux interceptés en mer" aria-label="Bar Chart" id="datawrapper-chart-9acFh" src="https://datawrapper.dwcdn.net/9acFh/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="215" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();</script><div class="legend my-3"><h5 class="legend-title">Principaux itinéraires de déplacement par catégorie</h5><div class="legend-category"><span style="background-color: #0072BC;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Terre</div><div class="legend-category"><span style="background-color: #00B398;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Mer</div><div class="legend-category"><span style="background-color: #18375F;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Air</div></div><p class="text-secondary"><small>Source: HCR</small></p>',
      location: {
        center: [-74, 21],
        zoom: 5.3,
        mobileZoom: 4,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      triggerPointAnimation: true,
      pointAnimationConfig: {
        geojson: ['land_routes_3.json','sea_routes_1.json'],
        lineColor: ['#0072BC','#00B398'],
        lineWidth: 2,
        iconImage: ['dot-blue','dot-green'],
        iconSize: 0.7
      },
      animationSpeed: 100,
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: 'chap-9',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<p>Sur le continent américain, dautres destinations des Haïtiens sont le Brésil, le Chili et la Guyane française, mais ces itinéraires sont coûteux car ils impliquent des voyages en avion. De plus, le manque daccès aux documents didentité constitue un défi supplémentaire pour les Haïtiens qui cherchent à voyager de façon régulière.</p><div class="legend mb-3"><h5 class="legend-title">Principaux itinéraires de déplacement par catégorie</h5><div class="legend-category"><span style="background-color: #0072BC;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Terre</div><div class="legend-category"><span style="background-color: #00B398;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Mer</div><div class="legend-category"><span style="background-color: #18375F;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Air</div></div><p class="text-secondary"><small>Source: HCR</small></p>',
      location: {
        center: [-67, 0],
        zoom: 3.2,
        mobileZoom: 2,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      triggerPointAnimation: true,
      pointAnimationConfig: {
        geojson: ['air_routes_1.json','land_routes_4.json'],
        lineColor: ['#18375F','#0072BC'],
        lineWidth: 2,
        iconImage: ['dot-navy','dot-blue'],
        iconSize: 0.7
      },
      animationSpeed: 100,
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: 'chap-10',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<p>Alors que certaines personnes restent dans les pays de première arrivée, d\'autres poursuivent leur périple à travers l\'Amérique du Sud et l\'Amérique centrale, où elles peuvent passer au moins 6 mois, et dans de nombreux cas plus d\'un an, avant de continuer plus au nord. Ce parcours remontant vers le nord passe principalement par l\'Équateur et la Colombie, avant de mener à la dangereuse traversée de la jungle du Darién pour entrer au Panama.</p><div class="legend mb-3"><h5 class="legend-title">Principaux itinéraires de déplacement par catégorie</h5><div class="legend-category"><span style="background-color: #0072BC;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Terre</div><div class="legend-category"><span style="background-color: #00B398;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Mer</div><div class="legend-category"><span style="background-color: #18375F;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Air</div></div><p class="text-secondary"><small>Source: HCR</small></p>',
      location: {
        center: [-72, -7],
        zoom: 3.8,
        mobileZoom: 2.5,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      triggerPointAnimation: true,
      pointAnimationConfig: {
        geojson: ['land_routes_1.json'],
        lineColor: ['#0072BC'],
        lineWidth: 2,
        iconImage: ['dot-blue'],
        iconSize: 0.7
      },
      animationSpeed: 100,
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: 'chap-11',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<p>La route terrestre du Darién est particulièrement dangereuse. En 2023, plus de 46 000 ressortissants haïtiens ont traversé le Darién, faisant d\'Haïti le troisième pays d\'origine le plus souvent recensé, après le Venezuela et l\'Équateur. Cette tendance s\'est poursuivie en 2024, avec plus de 11 000 traversées irrégulières signalées en date du début du mois de septembre. Nombreux sont ceux qui atteignent les pays d\'Amérique centrale, le Mexique et les États-Unis par cette voie terrestre.</p><iframe title="Haïtiens traversant le Darien | de 2022 à 2024" aria-label="Barres empilées" id="datawrapper-chart-Hy45Q" src="https://datawrapper.dwcdn.net/Hy45Q/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="196" data-external="1" class="my-4"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();</script><figure class="figure my-4"><img src="RF1338890_67.jpg" class="figure-img img-fluid" alt=""><figcaption class="figure-caption">Panama. Plus de 70 000 personnes ont traversé le Darién au cours des premiers mois de 2024.<br>©HCR/Melissa Pinel</figcaption></figure><p>En plus des défis posés aux personnes se déplaçant au sein de mouvements mixtes, les Haïtiens, qui parlent principalement le kreyol (créole haïtien), sont souvent confrontés à des obstacles linguistiques. Les demandeurs d\'asile et les migrants haïtiens sur le continent américain sont souvent confrontés à des barrières multiples pour accéder à la protection et aux solutions, et notamment des problèmes de discrimination, de xénophobie et de manque d\'accès à l\'information.</p><div class="legend mb-3"><h5 class="legend-title">Principaux itinéraires de déplacement par catégorie</h5><div class="legend-category"><span style="background-color: #0072BC;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Terre</div><div class="legend-category"><span style="background-color: #00B398;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Mer</div><div class="legend-category"><span style="background-color: #18375F;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Air</div></div><p class="text-secondary"><small>Source: HCR</small></p>',
      location: {
        center: [-81, 8],
        zoom: 6,
        mobileZoom: 4.5,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      route: '',
      onChapterEnter: [],
      onChapterExit: [],
      triggerPointAnimation: true,
      pointAnimationConfig: {
        geojson: ['land_routes_2.json'],
        lineColor: ['#0072BC'],
        lineWidth: 2,
        iconImage: ['dot-blue'],
        iconSize: 0.7
      },
      animationSpeed: 100,
    },
    {
      id: 'chap-12',
      alignment: 'center',
      hidden: false,
      title: '',
      image: '',
      description: '<h3>Des solutions pour les réfugiés haïtiens</h3><p>La crise en Haïti est due à de multiples facteurs, notamment l\'instabilité politique, les difficultés économiques, la violence et les catastrophes naturelles. Pour faire face à cette situation complexe, il faut une réponse globale et multidimensionnelle de la part des acteurs de la région et au-delà, et qui intègre des solutions durables.</p><p>En mars 2024, le HCR a publié des <a href="https://www.refworld.org/policy/countrypos/unhcr/2024/en/147710" target="_blank" rel="noopener noreferrer">recommandations en matière de protection internationale concernant les personnes fuyant Haïti</a> (lien en anglais), décrivant certains profils qui pourraient être éligibles à la protection des réfugiés en vertu de la Convention de 1951 sur les réfugiés ou de la définition élargie de la Déclaration de Carthagène de 1984. Ces considérations donnent des indications aux États pour leur permettre d\'évaluer les demandes d\'asile à la lumière de l\'extrême violence, des violations des droits humains et des événements qui perturbent gravement l\'ordre public en Haïti. Demander l\'asile est un droit humain, et le HCR s\'est engagé à travailler avec les pays d\'accueil pour fournir un soutien juridique et humanitaire aux hôtes et aux demandeurs d\'asile qu\'ils protègent.</p><p>Ces pays peuvent également envisager d\'accorder d\'autres formes de protection aux personnes originaires d\'Haïti, que ce soit une protection complémentaire, une protection temporaire, une admission humanitaire ou d\'autres dispositions légales en matière de séjour. Plusieurs pays du continent américain proposent déjà ces alternatives aux Haïtiens déracinés, renforçant ainsi leur protection et leur permettant de s\'intégrer dans les communautés qui les ont accueillis :</p>',
      location: {
        center: [-73, 8],
        zoom: 3,
        mobileZoom: 2,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'country-labels',
          opacity: 1
        },
        {
          layer: 'territory-label',
          opacity: 1
        },
        {
          layer: 'CHL-Labels',
          opacity: 1
        },
        {
          layer: 'BRA-Labels',
          opacity: 1
        },
        {
          layer: 'MEX-Labels',
          opacity: 1
        },
        {
          layer: 'CAN-Labels',
          opacity: 1
        },
        {
          layer: 'USA-Labels',
          opacity: 1
        },
      ],
      onChapterExit: []
    },
    {
      id: 'chap-13',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<h5>Le Mexique</h5><p>Le Mexique est devenu le premier pays d\'Amérique latine à appliquer la définition de Carthagène aux demandeurs d\'asile haïtiens, suite à des sessions de formation organisées pour le personnel de la Commission mexicaine d\'aide aux réfugiés (COMAR) en juillet, avec le soutien du HCR. Cette application de la définition de Carthagène devrait améliorer la capacité de la COMAR à traiter efficacement les demandes d\'asile des Haïtiens et à leur offrir une protection complète, y compris la possibilité d\'un regroupement familial au Mexique - un avantage dont ils ne bénéficient pas dans le cadre d\'une protection complémentaire ou d\'un statut migratoire ordinaire.</p><figure class="figure my-4"><img src="RF1336943_202311211848_DSCF3995_jg.jpg" class="figure-img img-fluid" alt=""><figcaption class="figure-caption">Mexique. Les réfugiés peuvent reconstruire leur vie à Aguascalientes grâce à un programme de relocalisation et d\'intégration.<br>©HCR/Jeoffrey Guillemard</figcaption></figure>',
      location: {
        center: [-104.43053, 22.64543],
        zoom: 3.7,
        mobileZoom: 2.5,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'MEX-Labels',
          opacity: 1
        },
        {
          layer: 'MEX-Mask',
          opacity: 1
        },
        {
          layer: 'country-labels',
          opacity: 0
        },
        {
          layer: 'territory-label',
          opacity: 0
        },
        {
          layer: 'USA-Labels',
          opacity: 0
        },
        {
          layer: 'CAN-Labels',
          opacity: 0
        },
      ],
      onChapterExit: [
        {
          layer: 'MEX-Labels',
          opacity: 0
        },
        {
          layer: 'MEX-Mask',
          opacity: 0
        },
      ]
    },
    {
      id: 'chap-14',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: "<h5>Chili</h5><p>Suite au tremblement de terre de 2010 qui a durement touché Haïti, le Chili a adopté différentes mesures pour faciliter la régularisation des Haïtiens sur son territoire, y compris des visas temporaires et des mesures visant à faciliter le regroupement familial. Le nombre de ressortissants haïtiens au Chili a fortement augmenté depuis, avec un total de 184 721 Haïtiens au Chili, sur la base des chiffres officiels de décembre 2022. Malgré les difficultés rencontrées pour satisfaire aux exigences de demande de visas pour la résidence permanente, en 2023, les Haïtiens représentaient le deuxième plus grand nombre de demandes de résidence permanente, avec 25 799 demandes.</p>",
      location: {
        center: [-70, -34],
        zoom: 3.5,
        mobileZoom: 2.2,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'CHL-Labels',
          opacity: 1
        },
        {
          layer: 'BRA-Labels',
          opacity: 0
        },
        {
          layer: 'CHL-Mask',
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: 'CHL-Mask',
          opacity: 0
        },
        {
          layer: 'CHL-Labels',
          opacity: 0
        },
      ]
    },
    {
      id: 'chap-15',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<h5>Brésil</h5><p>Le Brésil a toujours été un pays accueillant pour la population haïtienne. Les Haïtiens peuvent y demander un visa permanent pour motifs humanitaires. En juin 2023, le gouvernement a lancé le Plan d\'action pour le renforcement de la protection et de l\'intégration locale de la population haïtienne au Brésil, une initiative élaborée conjointement avec le HCR.</p><p>Ce plan vise à la fois les Haïtiens résidant déjà au Brésil, afin de soutenir leur parcours d\'intégration et d\'essayer de prévenir les mouvements secondaires dangereux, et ceux qui sont arrivés plus récemment et qui ont besoin d\'un accès rapide à l\'information, à la protection et aux moyens de subsistance.</p><figure class="figure my-4"><img src="RF1369329_20240806-lajeado.jpg" class="figure-img img-fluid" alt=""><figcaption class="figure-caption">Brésil. Réponse du HCR aux inondations dans l\'Etat de Rio Grande do Sul. Claudia est originaire d\'Haïti - elle est une résidente ayant besoin d\'une protection internationale.<br>©HCR/Joana Lopes</figcaption></figure>',
      location: {
        center: [-55, -13],
        zoom: 3.5,
        mobileZoom: 2.2,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'BRA-Labels',
          opacity: 1
        },
        {
          layer: 'CHL-Labels',
          opacity: 0
        },
        {
          layer: 'BRA-Mask',
          opacity: 1
        },
      ],
      onChapterExit: [
        {
          layer: 'BRA-Labels',
          opacity: 0
        },
        {
          layer: 'BRA-Mask',
          opacity: 0
        },
      ]
    },
    {
      id: 'chap-16',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: "<h5>Canada</h5><p>Le gouvernement fédéral a inauguré une voie d'accès humanitaire pour les familles afin d'accorder la résidence permanente aux ressortissants haïtiens, colombiens et vénézuéliens dont des membres de la famille résident au Canada, ce qui devrait bénéficier à 11 000 personnes.</p><p>En reconnaissance de leur contribution exceptionnelle pendant la pandémie de Covid-19, en 2021, le Canada a mis en œuvre une mesure spéciale pour offrir une voie d'accès à la résidence permanente aux demandeurs d'asile - y compris de nombreux Haïtiens - dans tout le pays travaillant dans le secteur des soins de santé.</p>",
      location: {
        center: [-98, 60],
        zoom: 3.2,
        mobileZoom: 2,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'CAN-Labels',
          opacity: 1
        },
        {
          layer: 'MEX-Labels',
          opacity: 0
        },
        {
          layer: 'CAN-Mask',
          opacity: 1
        },
      ],
      onChapterExit: [
        {
          layer: 'CAN-Labels',
          opacity: 0
        },
        {
          layer: 'CAN-Mask',
          opacity: 0
        },
      ]
    },
    {
      id: 'chap-17',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: "<h5>États-Unis</h5><p>Le 28 juin 2024, les États-Unis ont annoncé la reconduction d'Haïti dans le cadre du Statut de protection temporaire (TPS) pour une période de 18 mois, jusqu'au 3 février 2026. La reconduction de ce statut pour Haïti permettra à environ 309 000 ressortissants haïtiens supplémentaires de déposer une demande de protection temporaire.</p>",
      location: {
        center: [-98, 38],
        zoom: 3.8,
        mobileZoom: 2.5,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'USA-Labels',
          opacity: 1
        },
        {
          layer: 'USA-Mask',
          opacity: 1
        },
        {
          layer: 'CAN-Labels',
          opacity: 0
        },
        {
          layer: 'MEX-Labels',
          opacity: 0
        },
        {
          layer: 'country-labels',
          opacity: 0
        },
        {
          layer: 'territory-label',
          opacity: 0
        },
      ],
      onChapterExit: [
        {
          layer: 'USA-Labels',
          opacity: 0
        },
        {
          layer: 'USA-Mask',
          opacity: 0
        },
      ]
    },
    {
      id: 'chap-18',
      alignment: 'center',
      hidden: false,
      title: '',
      image: '',
      description: '<h5>Autres solutions</h5><p>Plusieurs pays du continent américain et d\'ailleurs offrent diverses formes de protection et de séjour légal aux réfugiés haïtiens, notamment des mesures de protection temporaire, de regroupement familial, des visas humanitaires et l\'accès aux documents d\'identité.</p><p>Par exemple, la France a mis en place un programme éducatif spécifiquement destiné aux réfugiés haïtiens en âge de fréquenter l\'école secondaire, et les Bahamas ont modifié la loi sur les passeports afin de permettre aux enfants d\'hommes bahamiens nés de femmes étrangères aux Bahamas d\'obtenir la nationalité. Les enfants nés de mères haïtiennes nées aux Bahamas constituent le principal profil des personnes concernées par la nouvelle législation.</p>',
      location: {
        center: [-73, 8],
        zoom: 3,
        mobileZoom: 2,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'country-labels',
          opacity: 1
        },
        {
          layer: 'territory-label',
          opacity: 1
        },
        {
          layer: 'CHL-Labels',
          opacity: 1
        },
        {
          layer: 'BRA-Labels',
          opacity: 1
        },
        {
          layer: 'MEX-Labels',
          opacity: 1
        },
        {
          layer: 'CAN-Labels',
          opacity: 1
        },
        {
          layer: 'USA-Labels',
          opacity: 1
        },
      ],
      onChapterExit: []
    },
    
    {
      id: 'chap-19',
      alignment: 'center',
      hidden: false,
      title: '',
      image: '',
      description: '<p>Sur l\'ensemble du continent américain, le HCR travaille avec ses partenaires pour apporter une protection et des solutions aux Haïtiens en situation de déplacement forcé. En Haïti, le HCR travaille aux côtés d\'agences des Nations Unies et de partenaires de protection pour renforcer la protection des personnes déplacées internes et leur fournir un accès aux documents d\'identité afin de prévenir l\'apatridie et d\'assurer le respect de leurs droits.</p><p>Malgré la gravité de la crise, le financement de la réponse humanitaire en Haïti reste extrêmement faible. Le <a href="https://fts.unocha.org/plans/1178/summary" target="_blank" rel="noopener noreferrer">plan de réponse humanitaire</a> est actuellement financé à 39 %.<p><a href="https://reliefweb.int/report/haiti/haiti-advocacy-note-immediate-mobilisation-resources-august-2024">Note de plaidoyer pour la mobilisation immédiate de ressources.</a></p><iframe title="Financement du plan de réponse humanitaire pour Haïti" aria-label="Barres empilées" id="datawrapper-chart-DqWCE" src="https://datawrapper.dwcdn.net/DqWCE/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="129" data-external="1" class="my-4"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();</script><p><a class="btn btn-primary" href="#">Faire un don</a></p>',
      location: {
        center: [-72.8, 18.88663],
        zoom: 7.5,
        mobileZoom: 6,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
  ]]
};
