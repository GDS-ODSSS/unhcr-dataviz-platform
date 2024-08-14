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
      description: '<p>Over <strong class="text-primary">578,000 people</strong> have been forced to flee their homes due to gang violence and general insecurity, with the number of internally displaced persons (IDPs) doubling between 2022 and 2023. In the first five months of 2024 alone, more than 260,000 people were displaced. This displacement has occurred nationwide, but the majority of IDPs are concentrated in the West department, which includes the capital, Port-au-Prince.</p><div class="legend mb-3"><h5 class="legend-title">Number of IDP pe province</h5><div class="legend-category"><strong class="text-danger">Legend to be developped</strong></div></div><p class="text-secondary"><small>Source: <a href="https://dtm.iom.int/haiti" target="_blank" rel="noopener noreferrer">IOM-DTM</a></small></p>',
      location: {
        center: [-74.21688, 18.88663],
        zoom: 7.5,
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
      description: '<p>Children are particularly vulnerable in this crisis. Over half a million children live in neighborhoods controlled by armed groups, exposing them to violence and the risk of recruitment. The ongoing violence has forced the closure of nearly 900 schools, affecting almost 200,000 children and increasing their vulnerability to exploitation by gangs. The situation is compounded by a lack of safe and private spaces for psychological support, heightening the risk of abuse and trafficking.</p><div class="legend mb-3"><h5 class="legend-title">Security incidents</h5><div class="legend-category"><span style="background-color: #ef485e;width:.75rem;height:.75rem;border-radius:50%; vertical-align:baseline;"></span>Incident location</div></div><p class="text-secondary"><small>Source: <a href="https://acleddata.com/" target="_blank" rel="noopener noreferrer">ACLED</a></small></p>',
      location: {
        center: [-74.21688, 18.88663],
        zoom: 7.5,
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
        center: [-74.21688, 18.88663],
        zoom: 7.5,
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
      description: '<p>Health and food security in Haiti are also at critical levels. Nearly half of the population suffers from <a href="https://www.ipcinfo.org/ipc-country-analysis/details-map/en/c/1156884/?iso3=HTI" target="_blank" rel="noopener noreferrer">severe food insecurity</a>, with 18% in a state of emergency. The resurgence of cholera and tuberculosis, compounded by fuel shortages, has pushed the health system to the brink of collapse. Many displaced individuals lack access to medical care and basic hygiene, increasing the risk of disease outbreaks.</p><div class="legend mb-3"><h5 class="legend-title">IPC Acute Food Insecurity Phase Classification</h5><div class="legend-category"><span style="background-color: #e67700;"></span>Crisis - 3</div><div class="legend-category"><span style="background-color: #c70000;"></span>Emergency - 4</div></div><p class="text-secondary"><small>Source: <a href="https://www.ipcinfo.org/ipc-country-analysis/details-map/en/c/1156884/?iso3=HTI" target="_blank" rel="noopener noreferrer">IPC</a></small></p>',
      location: {
        center: [-74.21688, 18.88663],
        zoom: 7.5,
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
        center: [-74.21688, 18.88663],
        zoom: 7.5,
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
      description: '<h3>Outside Haiti</h3><p>The dire humanitarian situation in Haiti has increasingly forced Haitians to flee their country in search of safety. As of December 2023, over 350,000 Haitians have sought protection abroad, with the vast majority remaining within the Americas.</p><iframe title="Top 10 country of asylum for Haitians | 2023" aria-label="Stacked Bars" id="datawrapper-chart-WDZ6F" src="https://datawrapper.dwcdn.net/WDZ6F/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="412" data-external="1" class="my-4"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();</script><p>Haitians have also joined mixed movements , including crossings through the Darien,. In addition to land routes, an increasing number of Haitians are resorting to dangerous journeys in the Caribbean Sea, often in overloaded and unseaworthy boats.</p><p>Among those fleeing Haiti are people with different protection needs, profiles, and motivations, including unaccompanied and separated children, victims of trafficking, and survivors of gender-based violence. Some may have well-founded grounds to request international refugee protection, while others may have other protection needs. The diverse profiles of those fleeing underscore the urgent need for protection and support for Haitians seeking safety in the region and beyond.</p>',
      location: {
        center: [-73, 8],
        zoom: 3,
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
      onChapterEnter: [

      ],
      onChapterExit: [

      ]
    },
    {
      id: 'chap-7',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<h5>Haitians displaced in the Americas</h5><p>The most common destinations for Haitians fleeing the country include countries in the Caribbean, Central and South America. The journey from Haiti to other parts of the Americas often involves perilous routes, including dangerous sea voyages and treacherous land crossings.</p><div class="legend mb-3"><h5 class="legend-title">Key transit and destination countries by movement type</h5><div class="legend-category"><span style="background-color: #0072bc;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Primary movement</div><div class="legend-category"><span style="background-color: #18375F;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Onward movement</div></div><p class="text-secondary"><small>Source: UNHCR</small></p>',
      location: {
        center: [-73, 8],
        zoom: 3,
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
      onChapterEnter: [
        {
          layer: 'hti-route-region',
          opacity: .7
        },
        {
          layer: 'hti-route-arrow',
          opacity: .7
        },
      ],
      onChapterExit: [
        {
          layer: 'hti-route-region',
          opacity: 0
        },
        {
          layer: 'hti-route-arrow',
          opacity: 0
        },
      ]
    },
    {
      id: 'chap-8',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<p>The primary northbound movement is mainly by sea, and this is evidenced by the interceptions at sea, data for which is available in the dashboard previously shared by MCOW team. Based on this, top 3 locations for this movement are the Bahamas, USA and Turks and Caicos, with smaller incidences on other northern Caribbean islands.</p><iframe title="Number of boats encountered at sea" aria-label="Bar Chart" id="datawrapper-chart-fEfPT" src="https://datawrapper.dwcdn.net/fEfPT/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="215" data-external="1" class="my-4"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();</script><div class="legend mb-3"><h5 class="legend-title">Key transit and destination countries by movement type</h5><div class="legend-category"><span style="background-color: #0072bc;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Primary movement</div><div class="legend-category"><span style="background-color: #0072bc;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Onward movement</div></div><p class="text-secondary"><small>Source: UNHCR</small></p>',
      location: {
        center: [-76.21688, 18.88663],
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
      onChapterEnter: [

      ],
      onChapterExit: [

      ]
    },
    {
      id: 'chap-9',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<p>The primary movement to the south is mainly to 3 countries: Brazil, Guyana (and French Guyana) and Chile. Flights to Brazil and Guyana are mainly charter planes directly from Haiti, or commercial planes from Dominican Republic. Main point of entry in Brazil is the Sao Paolo state, through which approx. 80% of Haitians arrive to the country (charter flights). 16% of the Haitians arrive to Brazil by land from the neighboring French Guyana. Brazil currently hosts 88K Haitians. From April 2015 to April 2024, Brazil has recorded approx. 178K entries and 54K exits from the country, which supports the thesis that majority of the Haitians settle in Brazil.</p><div class="legend mb-3"><h5 class="legend-title">Key transit and destination countries by movement type</h5><div class="legend-category"><span style="background-color: #0072bc;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Primary movement</div><div class="legend-category"><span style="background-color: #0072bc;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Onward movement</div></div><p class="text-secondary"><small>Source: UNHCR</small></p>',
      location: {
        center: [-73, 9],
        zoom: 4,
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
      onChapterEnter: [

      ],
      onChapterExit: [

      ]
    },
    {
      id: 'chap-10',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<p>Those who continue their journey, engage in onwards movement through Bolivia to Chile. In each of these south American countries they spend at least 6 months, and in many cases over a year, before they engage in onwards northbound movement.</p><div class="legend mb-3"><h5 class="legend-title">Key transit and destination countries by movement type</h5><div class="legend-category"><span style="background-color: #0072bc;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Primary movement</div><div class="legend-category"><span style="background-color: #0072bc;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Onward movement</div></div><p class="text-secondary"><small>Source: UNHCR</small></p>',
      location: {
        center: [-70, -18],
        zoom: 4.35,
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
      onChapterEnter: [

      ],
      onChapterExit: [

      ]
    },
    {
      id: 'chap-11',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<p>From Chile, the onward northbound movement mainly leads through Peru, after which continues towards Ecuador and Colombia, before the dangerous crossing to Panama through the jungle.</p><div class="legend mb-3"><h5 class="legend-title">Key transit and destination countries by movement type</h5><div class="legend-category"><span style="background-color: #0072bc;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Primary movement</div><div class="legend-category"><span style="background-color: #0072bc;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Onward movement</div></div><p class="text-secondary"><small>Source: UNHCR</small></p>',
      location: {
        center: [-74, -7],
        zoom: 3.75,
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
      onChapterEnter: [

      ],
      onChapterExit: [

      ]
    },
    {
      id: 'chap-12',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<p>The dangerous land route through the Darien: In 2023, over 43,000 Haitian nationals were reported to have crossed the Darien, making Haiti the third most common nationality following Venezuela and Ecuador. This trend has continued into 2024, with over 9,800 irregular crossings reported up to the end of May. </p><div class="legend mb-3"><h5 class="legend-title">Key transit and destination countries by movement type</h5><div class="legend-category"><span style="background-color: #0072bc;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Primary movement</div><div class="legend-category"><span style="background-color: #0072bc;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Onward movement</div></div><p class="text-secondary"><small>Source: UNHCR</small></p>',
      location: {
        center: [-79, 7],
        zoom: 6,
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
      onChapterEnter: [

      ],
      onChapterExit: [

      ]
    },
    {
      id: 'chap-13',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '<p>The land route then leads through the Darien (jungle crossing between Colombia and Panama) through the central American countries to Mexico and reaching the United States. </p><div class="legend mb-3"><h5 class="legend-title">Key transit and destination countries by movement type</h5><div class="legend-category"><span style="background-color: #0072bc;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Primary movement</div><div class="legend-category"><span style="background-color: #0072bc;height:.5rem;border-radius:.25rem; vertical-align:baseline;"></span>Onward movement</div></div><p class="text-secondary"><small>Source: UNHCR</small></p>',
      location: {
        center: [-94, 18],
        zoom: 4,
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
      onChapterEnter: [

      ],
      onChapterExit: [

      ]
    },

  ]]
};
