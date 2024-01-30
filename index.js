// data
const regions = [
    {
        id: 1,
        name: "navoiy",
        districts: [
            {
                id: 1,
                name: "Karma tumani"
            },
            {
                id: 2,
                name: "Nurota tumani"
            }
        ]
    },
    {
        id: 2,
        name: "fergana",
        districts: [
            {
                id: 1,
                name: "Uchko'prik tumani"
            },
            {
                id: 2,
                name: "Oltiariq tumani"
            }
        ]
    },
    {
        id: 3,
        name: "tashkent",
        districts: [
            {
                id: 1,
                name: "Bektemir tumani"
            },
            {
                id: 2,
                name: "Olmazor tumani"
            }
        ]
    },
    {
        id: 4,
        name: "tashkent-city",
        districts: [
            {
                id: 1,
                name: "Toshkent shaxri"
            }
        ]
    },
]

// methods
function getRegion(region) {
    Array.from(document.getElementsByTagName('path')).map((el) => {
        el.classList.remove("selected")
    })
    document.getElementsByName('path')
    document.getElementById(region).classList.add("selected")
    let selected_districts = ""
    for(rs of regions) {
        if(region === rs.name) {
            for(ds of rs.districts) {
                selected_districts += ds.name + ", "
            }
        }
    }
    document.getElementById("districts").innerText = selected_districts
    alert("Siz " + region + "ni tanladingiz!")
}