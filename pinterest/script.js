const arr = [
    {name: "tulips", image: "https://images.unsplash.com/flagged/photo-1555215241-9612144143ff?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "lily", image: " https://images.unsplash.com/photo-1562764280-9556a02589f6?q=80&w=1490&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "daisy", image: "https://images.unsplash.com/photo-1594417414388-79be5df72aad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "red rose", image: "https://images.unsplash.com/photo-1617111490936-07b47eafdcd4?q=80&w=1576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "white rose", image: "https://images.unsplash.com/photo-1599180439865-2735aa19840f?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "jashmine", image: "https://images.unsplash.com/photo-1623171404570-1d196759fe20?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "hibiscus", image: "https://images.unsplash.com/photo-1567990989224-6441e1483ac8?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "daffodil", image: "https://images.unsplash.com/photo-1587506048971-92a888739ff3?q=80&w=1392&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "carnation", image: "https://images.unsplash.com/photo-1603005674947-d224daf7f2e8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "marigold", image: "https://images.unsplash.com/photo-1615966402712-9b68593858cc?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "blue flower", image: "https://plus.unsplash.com/premium_photo-1661855278001-f419e58acb36?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "orchid", image: "https://plus.unsplash.com/premium_photo-1676253694654-79c2214ccbc7?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "blosoom", image: "https://images.unsplash.com/photo-1560155268-25402b517713?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
]


function showTheCards() {
    let clutter = " ";
    
    arr.forEach(function(obj) {
        clutter += `
        <div class="box">
            <img src="${obj.image}" alt="image" class="cursor-pointer">
            <div class="caption">Lorem ipsum</div>
        </div>`;
    })

    document.querySelector(".container").innerHTML = clutter;
}


function handleSearcFunctionality() {
    var input = document.querySelector("#searchinput");

    input.addEventListener("focus", function (){
        document.querySelector(".overlay").style.display = "block";
    })
    input.addEventListener("blur", function (){
        document.querySelector(".overlay").style.display = "none";
    })
    input.addEventListener("input", function() {
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        var clutter = " ";
        filteredArray.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>`;
        })
        document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;
    } )
}

showTheCards();
handleSearcFunctionality();