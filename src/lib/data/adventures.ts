export interface Adventure {
    id: string;
    title: string;
    location: string;
    activity: string;
    altitude: string;
    date: string;
    lat: number;
    lng: number;
    description: string;
    fieldLog: string;
    image: string;
}

export interface OperationalCluster {
    id: string;
    name: string;
    adventures: Adventure[];
}

export const ADVENTURE_CLUSTERS: OperationalCluster[] = [
    {
        id: "vertical_ops",
        name: "VERTICAL_OPS",
        adventures: [
            {
                id: "joshua-tree",
                title: "JOSHUA TREE",
                location: "Joshua Tree, USA",
                activity: "Rock Climbing",
                altitude: "1,219m",
                date: "2023",
                lat: 34.13,
                lng: -116.31,
                description: "Technical exploration of the golden monzogranite boulders in the Mojave Desert.",
                fieldLog: "Technical exploration of the golden monzogranite boulders in the Mojave Desert. First self-supported trad climbing expedition with my wife. Navigated the unique friction and crystal-heavy cracks of the high desert landscape.",
                image: "/images/landscapes/JoshuaTree.png"
            },
            {
                id: "red-rocks",
                title: "RED ROCKS",
                location: "Nevada, USA",
                activity: "Rock Climbing",
                altitude: "1,180m",
                date: "2023",
                lat: 36.13,
                lng: -115.42,
                description: "Technical multi-pitch ascent of 'Armatron' on the vibrant Aztec Sandstone.",
                fieldLog: "Technical multi-pitch ascent of 'Armatron' on the vibrant Aztec Sandstone. An epic 20-hour push that tested our endurance and navigation skills after nightfall. Managed a safe descent in winter conditions—a true test of partnership and resilience with my wife.",
                image: "/images/landscapes/RedRock.png"
            },
            {
                id: "mallorca",
                title: "MALLORCA",
                location: "Mallorca, ESP",
                activity: "Deep Water Solo",
                altitude: "0m - 15m",
                date: "2021",
                lat: 39.69,
                lng: 3.01,
                description: "Exploration along the cliffs of the Mediterranean Sea.",
                fieldLog: "Exploration along the cliffs of the Mediterranean Sea. Climbing 20-meter vertical lines above the deep turquoise water without ropes. The first ropeless ascents felt overwhelming, but after a few falls the experience became a perfect combinantion of fun and thrill.",
                image: "/images/landscapes/Mallorca.png"
            },
            {
                id: "arco",
                title: "ARCO",
                location: "Arco, ITA",
                activity: "Sport Climbing",
                altitude: "91m",
                date: "2021",
                lat: 45.91,
                lng: 10.88,
                description: "Technical sport climbing in the Sarca Valley.",
                fieldLog: "Technical sport climbing in the Sarca Valley. Independent exploration of the sleek limestone faces of the Italian Alps. Connected with the local climbing community at the crags, sharing vertical lines and breathtaking views of Lake Garda.",
                image: "/images/landscapes/Arco.png"
            },
            {
                id: "railay",
                title: "RAILAY BEACH",
                location: "Railay Beach, THA",
                activity: "Rock Climbing",
                altitude: "0m - 100m",
                date: "2019",
                lat: 8.01,
                lng: 98.83,
                description: "Tropical karst exploration on the Andaman coast.",
                fieldLog: "Tropical karst exploration on the Andaman coast. Climbed iconic limestone towers rising directly from the emerald sea. A unique vertical experience where the ocean meets the jungle, offering spectacular views of the Thai horizon.",
                image: "/images/landscapes/Railay.png"
            },
            {
                id: "dedo-deus",
                title: "DEDO DE DEUS",
                location: "Dedo de Deus, BRA",
                activity: "Rock Climbing",
                altitude: "1,692m",
                date: "2021",
                lat: -22.48,
                lng: -42.98,
                description: "Technical trad ascent of one of Brazil's most iconic granite peaks.",
                fieldLog: "Technical trad ascent of one of Brazil's most iconic granite peaks. Navigated the classic lines of the CLIFFS of the Serra dos Órgãos to reach the jagged summit. Breathtaking views stretching from the mountain ridges all the way to the Atlantic Ocean.",
                image: "/images/landscapes/DedoDeDeus.png"
            },
            {
                id: "chapada",
                title: "CHAPADA DIAMANTINA",
                location: "Chapada Diamantina, BRA",
                activity: "Rock Climbing",
                altitude: "1,000m",
                date: "2022",
                lat: -12.45,
                lng: -41.47,
                description: "Exploration of the conglomerate walls in the Brazilian hinterland.",
                fieldLog: "Exploration of the conglomerate walls in the Brazilian hinterland. Climbed the classic 'Pauliceia Desvairada' on the iconic Morro do Pai Inácio. Extensive reconnaissance of the Igatu boulders and the deep wilderness of Vale do Pati.",
                image: "/images/landscapes/Chapada.png"
            }
        ]
    },
    {
        id: "alpine_ops",
        name: "ALPINE_OPS",
        adventures: [
            {
                id: "potosi",
                title: "HUAYNA POTOSI",
                location: "Huayna Potosi, BOL",
                activity: "Mountaineering",
                altitude: "6,088m",
                date: "2022",
                lat: -16.27,
                lng: -68.12,
                description: "High-altitude expedition in the Cordillera Real.",
                fieldLog: "High-altitude expedition in the Cordillera Real. Preparation included technical training in the Condoriri Massif. Reached the 6,088m summit after a 4-day glacier expedition. A life-changing moment: the summit marked the beginning of a beautiful journey with my wife.",
                image: "/images/landscapes/HuaynaPotosi.png"
            },
            {
                id: "wyoming",
                title: "WYOMING",
                location: "Teton Pass, USA",
                activity: "Backcountry Snowboarding",
                altitude: "2,570m",
                date: "2013",
                lat: 43.49,
                lng: -110.95,
                description: "Self-supported winter ascent of Teton Pass.",
                fieldLog: "Self-supported winter ascent of Teton Pass. Hiked solo into the Teton range with no prior mountain experience—a raw introduction to the wilderness. Carved a line down Mount Glory through deep, untouched powder.",
                image: "/images/landscapes/Wyoming.png"
            }
        ]
    },
    {
        id: "overland_ops",
        name: "OVERLAND_OPS",
        adventures: [
            {
                id: "patagonia",
                title: "PATAGONIA",
                location: "Torres del Paine, CHI",
                activity: "Trekking",
                altitude: "2,800m",
                date: "2016",
                lat: -50.94,
                lng: -73.40,
                description: "Exploration of the Patagonian massifs.",
                fieldLog: "Exploration of the Patagonian massifs (Torres del Paine and El Chaltén). Completed the W Trek and high alpine loops. A family expedition covering over 100km of rugged terrain and beautiful scenery, sharing the raw beauty of the Cerro Fitz Roy skyline with my mother and daughter.",
                image: "/images/landscapes/FitzRoy.png"
            },
            {
                id: "road-death",
                title: "ROAD-DEATH",
                location: "North Yungas, BOL",
                activity: "Mountain Biking",
                altitude: "4,700m to 1,200m",
                date: "2022",
                lat: -16.30,
                lng: -67.90,
                description: "A 64km high-speed descent from the Andes to the Amazon.",
                fieldLog: "A 64km high-speed descent from the high Andes to the Amazon basin. Navigated the narrow tracks and vertical drops of the North Yungas road. Shared the adrenaline and the spectacular views with my wife. An exhilarating descent through shifting ecosystems.",
                image: "/images/landscapes/RoadDeath.png"
            },
            {
                id: "bariloche",
                title: "BARILOCHE",
                location: "Bariloche, ARG",
                activity: "Road Trip",
                altitude: "770m",
                date: "2022",
                lat: -41.13,
                lng: -71.30,
                description: "Long-range overland journey to the Argentinian Andes.",
                fieldLog: "Long-range overland journey from São Paulo to the Argentinian Andes. Crossed Southern Brazil, Iguaçu Falls and the Argentine Desert through the iconic Ruta 40 to reach the beautiful lake district. A family adventure through ancient forests and rugged deserts, concluding with snowboarding in Cerro Catedral.",
                image: "/images/landscapes/Bariloche.png"
            },
            {
                id: "sw-usa",
                title: "SW-USA",
                location: "Southwest USA",
                activity: "Road Trip",
                altitude: "2,135m",
                date: "2015",
                lat: 36.05,
                lng: -112.10,
                description: "Grand-scale desert circuit through Utah and Arizona.",
                fieldLog: "Grand-scale desert circuit through the iconic parks of Utah and Arizona. Exploration of Arches, Zion, and the Grand Canyon, with a horseback ride across the timeless landscapes of Monument Valley and an unforgettable passage through the sculpted light of Antelope Canyon in Page, Arizona. A long-distance journey with family, transitioning from the red rock deserts to the rugged California coast and the high Sierras.",
                image: "/images/landscapes/SW.png"
            }
        ]
    }
];
