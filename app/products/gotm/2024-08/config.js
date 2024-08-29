var config1 = {
  style: ['mapbox://styles/unhcr/clz6xpgu500sk01ph6qwa0eyk'],
  accessToken: 'pk.eyJ1IjoidW5oY3IiLCJhIjoiOUQzQ2dnbyJ9.6ghfFmvxpu7HvHzXci_ogw',
  showMarkers: false,
  markerColor: '',
  inset: false,
  theme: 'light',
  projection: 'naturalEarth',
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
      description: '<div><h3>Inside Haiti</h3><p>As of June 2024, the severe humanitarian crisis in Haiti has led to significant internal displacement that has exacerbated existing vulnerabilities within the population.</p><iframe title="Evolution of IDPs from 2022 to 2024" aria-label="Interactive line chart" id="datawrapper-chart-Pwwoy" src="https://datawrapper.dwcdn.net/Pwwoy/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="416" data-external="1" class="my-4"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();</script></div>',
      location: {
        center: [-72.35958, 18.84720],
        zoom: 5,
        mobileZoom: 0.1,
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
      description: '<p>As of 2024, over <strong class="text-primary">578,000 people</strong> have been forced to flee their homes due to gang violence and general insecurity, with the number of internally displaced persons (IDPs) doubling between 2022 and 2023. In the first five months of 2024 alone, more than 260,000 people were displaced. This displacement has occurred nationwide, but the majority of IDPs are concentrated in the West department, which includes the capital, Port-au-Prince.</p><div class="legend mb-3"><h5 class="legend-title">Number of IDP pe province</h5><div class="legend-category"><strong class="text-danger">Legend to be developped</strong></div></div><p class="text-secondary"><small>Source: <a href="https://dtm.iom.int/haiti" target="_blank" rel="noopener noreferrer">IOM-DTM</a></small></p>',
      location: {
        center: [-72.8, 18.88663],
        zoom: 7.5,
        mobileZoom: 0.1,
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
        mobileZoom: 0.1,
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
      description: '<p>Displaced women and girls, particularly those in IDP sites, are <a href="https://reliefweb.int/report/haiti/crisis-haiti-gbv-situation-brief-update-26th-april-2024" target="_blank" rel="noopener noreferrer">disproportionately affected by the insecurity and violence</a>. Gender-based violence has surged amidst the ongoing crisis. From January to March 2024, nearly 1,800 incidents of gender-based violence were recorded, with the number of incidents in March alone being five times higher than in January and February combined. The majority (75 percent) of these incidents involved sexual violence, with the remainder comprising physical and psychological/emotional violence. The number of reported GBV incidents per 1,000 people is highest in Artibonite, and Ouest provinces.</p><div class="legend mb-3"><h5 class="legend-title">Number of GBV incidents per 1,000 IDP</h5><div class="legend-category"><span style="background-color: #FBDADF;"></span>1</div><div class="legend-category"><span style="background-color: #EF4A60;"></span>15</div><div class="legend-category"><span style="background-color: #8F2C39;"></span>65</div></div></div><p class="text-secondary"><small>Source: UNHCR</small></p>',
      location: {
        center: [-72.8, 18.88663],
        zoom: 7.5,
        mobileZoom: 0.1,
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
      description: '<p>Health and food security in Haiti are also at critical levels. Nearly half of the population suffers from <a href="https://www.ipcinfo.org/ipc-country-analysis/details-map/en/c/1156884/?iso3=HTI" target="_blank" rel="noopener noreferrer">severe food insecurity, with 18% in a state of emergency</a>. The resurgence of cholera and tuberculosis, compounded by fuel shortages, has pushed the health system to the brink of collapse. Many displaced individuals lack access to medical care and basic hygiene, increasing the risk of disease outbreaks.</p><div class="legend mb-3"><h5 class="legend-title">IPC Acute Food Insecurity Phase Classification</h5><div class="legend-category"><span style="background-color: #e67700;"></span>Crisis - 3</div><div class="legend-category"><span style="background-color: #c70000;"></span>Emergency - 4</div></div><p class="text-secondary"><small>Source: <a href="https://www.ipcinfo.org/ipc-country-analysis/details-map/en/c/1156884/?iso3=HTI" target="_blank" rel="noopener noreferrer">IPC</a></small></p>',
      location: {
        center: [-72.8, 18.88663],
        zoom: 7.5,
        mobileZoom: 0.1,
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
      description: '<p>The living conditions of displaced populations are increasingly dire. Around Port-au-Prince, approximately 60 percent of displaced individuals reside in designated IDP sites, while in rural areas, 97 percent stay with host families. IDP sites are often overcrowded and lack adequate facilities, including lighting and latrines. Many face severe shortages of food, water, shelter, and medical care. Host families, who accommodate 80 percent of all IDPs in Haiti, often struggle with limited resources, exacerbating humanitarian challenges. Constraints in Humanitarian access make it more difficult to deliver assistance to those in need.</p><div class="legend mb-3"><h5 class="legend-title">Humanitarian access severity</h5><div class="legend-category"><span style="background-color: #FBDADF;"></span>Low</div><div class="legend-category"><span style="background-color: #EF4A60;"></span>Medium</div><div class="legend-category"><span style="background-color: #8F2C39;"></span>High</div></div><p class="text-secondary"><small>Source: <a href="https://data.humdata.org/dataset/haiti-humanitarian-access-severity" target="_blank" rel="noopener noreferrer">OCHA</a></small></p>',
      location: {
        center: [-72.8, 18.88663],
        zoom: 7.5,
        mobileZoom: 0.1,
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
      description: '<h3>Outside Haiti</h3><p>The dire humanitarian situation in Haiti has increasingly forced Haitians to flee their country in search of safety. As of December 2023, over 350,000 Haitians have sought protection abroad, with the vast majority remaining within the Americas.</p><iframe title="Top 10 country of asylum for Haitians | 2023" aria-label="Stacked Bars" id="datawrapper-chart-WDZ6F" src="https://datawrapper.dwcdn.net/WDZ6F/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="412" data-external="1" class="my-4"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();</script><p>Among those fleeing Haiti are people with different protection needs, profiles, and motivations, including unaccompanied and separated children, victims of trafficking, and survivors of gender-based violence. Some may have well-founded grounds to request international refugee protection, while others may have other protection needs. The diverse profiles of those fleeing underscore the urgent need for protection and support for Haitians seeking safety in the region and beyond.</p><h5 class="mt-5">Haitians displaced in the Americas</h5><p>The most common destinations for Haitians fleeing the country include countries in the Caribbean, Central and South America. The journey from Haiti to other parts of the Americas often involves perilous routes, including dangerous sea voyages and treacherous land crossings.</p>',
      location: {
        center: [-73, 8],
        zoom: 3,
        mobileZoom: 0.1,
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
      description: '<p>The situation in Haiti has led to different waves of mixed movements from the country in the past decade, marked by a significant rise in maritime voyages as indicated by increased interceptions at sea. In 2024, the primary destinations for these movements have been the Bahamas, the United States, and the Turks and Caicos Islands, with additional, smaller-scale occurrences observed across other northern Caribbean islands.</p><iframe title="Number of boats encountered at sea" aria-label="Bar Chart" id="datawrapper-chart-fEfPT" src="https://datawrapper.dwcdn.net/fEfPT/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="215" data-external="1" class="my-4"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();</script><div class="legend mb-3"><h5 class="legend-title">Main displacement routes by type</h5><div class="legend-category"><span style="background-color: #EF4A60;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Land</div><div class="legend-category"><span style="background-color: #00B398;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Sea</div><div class="legend-category"><span style="background-color: #18375F;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Air</div></div><p class="text-secondary"><small>Source: UNHCR</small></p>',
      location: {
        center: [-76, 22.24875],
        zoom: 5.69,
        mobileZoom: 0.1,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      triggerPointAnimation: true,
      pointAnimationConfig: {
        geojson: ['land_routes_3.json','sea_routes_1.json'],
        lineColor: ['#EF4A60','#00B398'],
        lineWidth: 2,
        iconImage: ['dot-red','dot-green'],
        iconSize: 0.5
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
      description: '<p>In the Americas, onward movements are primarily towards Brazil, Chile, and Guyana. Individuals involved in these mixed movements face exceptionally perilous conditions in their search for safety.</p><div class="legend mb-3"><h5 class="legend-title">Main displacement routes by type</h5><div class="legend-category"><span style="background-color: #EF4A60;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Land</div><div class="legend-category"><span style="background-color: #00B398;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Sea</div><div class="legend-category"><span style="background-color: #18375F;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Air</div></div><p class="text-secondary"><small>Source: UNHCR</small></p>',
      location: {
        center: [-73, 8],
        zoom: 3,
        mobileZoom: 0.1,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      triggerPointAnimation: true,
      pointAnimationConfig: {
        geojson: ['air_route_1.json'],
        lineColor: ['#18375F'],
        lineWidth: 2,
        iconImage: ['dot-navy'],
        iconSize: 0.5
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
      description: '<p>Those who continue their journey often move onwards through South and Central America, where they may spend at least 6 months, and in many cases over a year, before heading further north. This northbound movement mainly passes towards Ecuador and Colombia, before leading to the dangerous crossing of the Darién jungle into Panama.</p><div class="legend mb-3"><h5 class="legend-title">Main displacement routes by type</h5><div class="legend-category"><span style="background-color: #EF4A60;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Land</div><div class="legend-category"><span style="background-color: #00B398;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Sea</div><div class="legend-category"><span style="background-color: #18375F;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Air</div></div><p class="text-secondary"><small>Source: UNHCR</small></p>',
      location: {
        center: [-72, -9],
        zoom: 4,
        mobileZoom: 0.1,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      triggerPointAnimation: true,
      pointAnimationConfig: {
        geojson: ['land_routes_1.json'],
        lineColor: ['#EF4A60'],
        lineWidth: 2,
        iconImage: ['dot-red'],
        iconSize: 0.5
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
      description: '<p>The Darien land route is especially dangerous. In 2023, over 43,000 Haitians nationals crossed the Darien, making Haiti the third most common nationality following Venezuela and Ecuador. This trend has continued into 2024, with over 9,800 irregular crossings reported up to the end of May. Through this land route many reach central American countries, Mexico and the United States.</p><div class="legend mb-3"><h5 class="legend-title">Main displacement routes by type</h5><div class="legend-category"><span style="background-color: #EF4A60;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Land</div><div class="legend-category"><span style="background-color: #00B398;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Sea</div><div class="legend-category"><span style="background-color: #18375F;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Air</div></div><p class="text-secondary"><small>Source: UNHCR</small></p>',
      location: {
        center: [-79, 7],
        zoom: 6,
        mobileZoom: 0.1,
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
        lineColor: ['#EF4A60'],
        lineWidth: 2,
        iconImage: ['dot-red'],
        iconSize: 0.5
      },
      animationSpeed: 50,
    },
    {
      id: 'chap-12',
      alignment: 'center',
      hidden: false,
      title: '',
      image: '',
      description: '<h3>Solutions for Haitian Refugees</h3><p>In March 2024, <a href="https://www.refworld.org/policy/countrypos/unhcr/2024/en/147710" target="_blank" rel="noopener noreferrer">UNHCR published International Protection Considerations with regard to people fleeing Haiti</a>, outlining certain profiles of Haitians who should be deemed eligible for refugee protection. These considerations provide guidance to assist states in assessing asylum claims in light of the extreme violence, human rights violations, and events that have seriously disturbed public order in Haiti.</p><p>The guidance outlines that asylum-seekers from Haiti falling within specific risk profiles may be in need of international refugee protection, under the 1951 Refugee Convention and may also be eligible under the 1984 Cartagena Declaration’s expanded refugee definition, which includes those impacted by the seriously disturbed public order and gang related violence.</p><p>Recognizing that states face challenges in managing large numbers of asylum requests, UNHCR encourages them to ensure that asylum-seekers can stay safely with safeguards, facilitating faster access to protection and services. Countries could consider granting other forms of protection for people from Haiti, including complementary protection, temporary protection, humanitarian admission, or other legal stay arrangements.</p><p>Seeking asylum is a human right, and UNHCR is committed to working with host countries to provide legal and humanitarian support to hosts and the asylum-seekers they protect. Several countries in the Americas are already offering these alternatives to displaced Haitians, enhancing their protection and allowing them to integrate into the communities that welcome.</p>',
      location: {
        center: [-73, 8],
        zoom: 3,
        mobileZoom: 0.1,
        pitch: 0.00,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'chap-13',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: "<h5>Chile</h5><p>The Haitian community's strong desire for long-term settlement is reflected in their high number of permanent residency (PR) applications, ranking second in 2023 with 25,799 applications.</p><p>The Backlog Program (Programa Rezago), launched in 2023, aims to address the issue of pending residency applications by resolving all applications submitted before December 31, 2022.</p>",
      location: {
        center: [-70.71225, -33.12501],
        zoom: 3.8,
        mobileZoom: 0.1,
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
          layer: 'CHL-Mask',
          opacity: 1
        },
      ],
      onChapterExit: [
        {
          layer: 'CHL-Labels',
          opacity: 0
        },
        {
          layer: 'CHL-Mask',
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
      description: "<h5>Brazil</h5><p>The government launched, with the support of UNHCR, an action plan to strengthen protection and integration for the Haitian population, which foresees support with documentation, access to employment and assistance to community structures.</p>",
      location: {
        center: [-55.56836, -9.57597],
        zoom: 3.5,
        mobileZoom: 0.1,
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
      id: 'chap-15',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: "<h5>Canada</h5><p>A family-based humanitarian program directed by the federal government working to support vulnerable individuals from Haiti by providing them withs safe and regular migration pathways.</p>",
      location: {
        center: [-98.14424, 52.97938],
        zoom: 3.2,
        mobileZoom: 0.1,
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
      id: 'chap-16',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: "<h5>Mexico</h5><p>The Mexican Commission for Refugee Assistance (COMAR) began applying a Cartagena definition analysis to Haitian asylum seekers following a successful training of COMAR eligibility staff in July supported by UNHCR. This application is expected to help COMAR with their efficiency in responding to Haitian asylum applications, as well as providing broader protections to those accepted under a Cartagena definition.</p><p>Notably, acceptance under Cartagena would help Haitians request family reunification in Mexico, something not easily available to those who received either complementary protection or a migratory status. The number of Haitians applying for asylum has been greatly reduced thus far in 2024 in Mexico, with xx applying.</p>",
      location: {
        center: [-104.43053, 22.64543],
        zoom: 3.7,
        mobileZoom: 0.1,
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
      id: 'chap-17',
      alignment: 'center',
      hidden: false,
      title: '',
      image: '',
      description: '<p>Despite the severity of the crisis, funding for the humanitarian response in Haiti remains critically low. The <a href="https://fts.unocha.org/plans/1178/summary" target="_blank" rel="noopener noreferrer">Humanitarian Response Plan</a> is currently <strong>less than 25 percent funded</strong>, which is grossly insufficient to address the severe needs. There is an urgent need for increased humanitarian aid, including food, water, medical supplies, menstrual and maternal health products, and shelter.<p class="text-danger">Should we put a chart about funding?</p><p><a class="btn btn-primary" href="#">Donate</a></p></p>',
      location: {
        center: [-72.8, 18.88663],
        zoom: 7.5,
        mobileZoom: 0.1,
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
