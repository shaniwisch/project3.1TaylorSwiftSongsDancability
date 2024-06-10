
chartIt();

async function getData(){
    var songName = []
var danceabilities = []




top1Song = top2Song = top3Song = "";
top1D = top2D = top3D = 0;



    const response = await fetch("https://raw.githubusercontent.com/IfatNeumann/CsvProject/main/dataSets/0_spotify_taylorswift.csv");
    console.log(response)
       const data = await response.text();
    console.log(data);
    const table = data.trim().split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const songName = columns[1];
        songNames.push(songName);
        const danceability = columns[7];
        danceabilities.push(danceability);

        updateTop3(songName, danceability);
        console.log(songName, danceability);


     });

     console.log(top1D, top1Song)
    console.log(top2D, top2Song)
    console.log(top3D, top3Song)
    document.getElementById("top1").innerHTML = "1. " + top1Song;
    document.getElementById("top2").innerHTML = "2. " + top2Song;
    document.getElementById("top3").innerHTML = "3. " + top3Song;
    return { songNames, danceabilities };

}



async function chartIt(){
    const data = await getData();
    const ctx = document.getElementById('myChart');
    ctx.height = 50;
    const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: data.songNames,
        datasets: [{
        label: 'Danceability',
        data: data.danceabilities,
        backgroundColor: 'rgba(217, 77, 123, 0.2)',
        borderColor: 'rgb(217, 77, 123)',
        borderWidth: 1
        }]
    },
    options: {
        scales: {
        y: {
            beginAtZero: true,
        }
        }
    }
    });
}

function updateTop3(songName, danceability){
    if (danceability>top1D){
        top3D = top2D
        top3Song = top2Song

        top2D = top1D
        top2Song = top1Song

        top1D = danceability
        top1Song = songName
    }
    else if (danceability>top2D){
        top3D = top2D
        top3Song = top2Song

        top2D = danceability
        top2Song = songName
    }
    else if (danceability>top3D){
        top3D = danceability
        top3Song = songName
    }

}


/*chartIt();

async function getData(){
    const songNames = []
    const danceabilities = []

    top1Song = top2Song = top3Song = "";
    top1D = top2D = top3D = 0;

    const response = await fetch('dataSets/0_spotify_taylorswift.csv');
    const data = await response.text();
    console.log(data);
    const table = data.trim().split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const songName = columns[1];
        songNames.push(songName);
        const danceability = columns[7];
        danceabilities.push(danceability);

        updateTop3(songName, danceability);
        console.log(songName, danceability);


    });
    console.log(top1D, top1Song)
    console.log(top2D, top2Song)
    console.log(top3D, top3Song)
    document.getElementById("top1").innerHTML = "1. " + top1Song;
    document.getElementById("top2").innerHTML = "2. " + top2Song;
    document.getElementById("top3").innerHTML = "3. " + top3Song;
    return { songNames, danceabilities };
}

async function chartIt(){
    const data = await getData();
    const ctx = document.getElementById('myChart');
    ctx.height = 50;
    const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: data.songNames,
        datasets: [{
        label: 'Danceability',
        data: data.danceabilities,
        backgroundColor: 'rgba(217, 77, 123, 0.2)',
        borderColor: 'rgb(217, 77, 123)',
        borderWidth: 1
        }]
    },
    options: {
        scales: {
        y: {
            beginAtZero: true,
        }
        }
    }
    });
}

function updateTop3(songName, danceability){
    if (danceability>top1D){
        top3D = top2D
        top3Song = top2Song

        top2D = top1D
        top2Song = top1Song

        top1D = danceability
        top1Song = songName
    }
    else if (danceability>top2D){
        top3D = top2D
        top3Song = top2Song

        top2D = danceability
        top2Song = songName
    }
    else if (danceability>top3D){
        top3D = danceability
        top3Song = songName
    }

}*/