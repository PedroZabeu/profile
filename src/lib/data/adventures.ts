export interface Adventure {
    id: string;
    title: string;
    location: string;
    activity: string;
    date: string;
    lat: number;
    lng: number;
    description: string;
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
                location: "USA",
                activity: "Rock Climbing",
                date: "2023",
                lat: 34.13,
                lng: -116.31,
                description: "Rock climbing in Joshua Tree National Park. Our first time doing trad climbing by ourselves."
            },
            {
                id: "red-rocks",
                title: "RED ROCKS",
                location: "USA",
                activity: "Rock Climbing",
                date: "2023",
                lat: 36.13,
                lng: -115.42,
                description: "Armatron, a 5.10a trad route. 20 hours of non-stop climbing and hiking after getting lost in the winter night."
            },
            {
                id: "mallorca",
                title: "MALLORCA",
                location: "Spain",
                activity: "Deep Water Solo",
                date: "2021",
                lat: 39.69,
                lng: 3.01,
                description: "20 meters high routes above the Mediterranean sea. Thrilling and exciting solo climbing."
            },
            {
                id: "arco",
                title: "ARCO",
                location: "Italy",
                activity: "Sport Climbing",
                date: "2021",
                lat: 45.91,
                lng: 10.88,
                description: "Sport climbing in Arco, meeting local climbers and exploring the classic crags."
            },
            {
                id: "railay",
                title: "RAILAY",
                location: "Thailand",
                activity: "Rock Climbing",
                date: "2019",
                lat: 8.01,
                lng: 98.83,
                description: "Rock climbing in Railay Beach with amazing ocean views."
            },
            {
                id: "dedo-de-deus",
                title: "DEDO DE DEUS",
                location: "Brazil",
                activity: "Rock Climbing",
                date: "2021",
                lat: -22.48,
                lng: -42.98,
                description: "Classic trad climbing in the Serra dos Órgãos skyline."
            },
            {
                id: "chapada",
                title: "CHAPADA",
                location: "Brazil",
                activity: "Rock Climbing",
                date: "2022",
                lat: -12.45,
                lng: -41.47,
                description: "Trad climbing in the iconic Morro do Pai Inácio, Chapada Diamantina."
            }
        ]
    },
    {
        id: "alpine_ops",
        name: "ALPINE_OPS",
        adventures: [
            {
                id: "huayna-potosi",
                title: "HUAYNA POTOSI",
                location: "Bolivia",
                activity: "Mountaineering",
                date: "2022",
                lat: -16.27,
                lng: -68.12,
                description: "6088m summit after ice climbing and glacier training. A pivotal life experience."
            },
            {
                id: "wyoming",
                title: "WYOMING",
                location: "USA",
                activity: "Backcountry Snowboarding",
                date: "2013",
                lat: 43.49,
                lng: -110.95,
                description: "Backcountry snowboarding on Teton Pass, Mount Glory. Solo exploration with no prior experience."
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
                location: "Chile",
                activity: "Trekking",
                date: "2016, 2018",
                lat: -50.94,
                lng: -73.40,
                description: "Hiked the W Trek in Torres del Paine and El Chaltén. Total distance exceeded 100km."
            },
            {
                id: "road-death",
                title: "ROAD-DEATH",
                location: "Bolivia",
                activity: "Mountain Biking",
                date: "2022",
                lat: -16.21,
                lng: -67.78,
                description: "Mountain biking down the North Yungas Road, descending 3,635 meters."
            },
            {
                id: "bariloche",
                title: "BARILOCHE",
                location: "Argentina",
                activity: "Road Trip",
                date: "2022",
                lat: -41.13,
                lng: -71.30,
                description: "Road trip from São Paulo to Bariloche, through Southern Brazil and Argentina."
            },
            {
                id: "sw-usa",
                title: "SW-USA",
                location: "USA",
                activity: "Road Trip",
                date: "2015",
                lat: 36.05,
                lng: -112.10,
                description: "Exploring Arches, Zion, and Grand Canyon National Parks."
            }
        ]
    }
];
