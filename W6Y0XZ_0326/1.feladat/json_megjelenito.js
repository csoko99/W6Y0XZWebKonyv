document.addEventListener('DOMContentLoaded', function() {

    const myJSON = 
    {
        "konyvek": {
            "konyv": [
                {
                    "cim": "Java 2 I-II. - Útikalauz programozóknak 5.0",
                    "szerzo": "Nyékiné Gaizler Judit",
                    "kiadas_ev": "2009",
                    "kiado": "Elte Természettudományi Kar",
                    "programozasi_nyelv": "Java",
                    "nyelv": "Magyar",
                    "ar": "9357 Ft",
                    "_id": "01"
                },
                {
                    "cim": "C# programozás lépésről lépésre",
                    "szerzo": "Reiter István",
                    "kiadas_ev": "2018",
                    "kiado": "Jedlik Oktatási Stúdió Kft.",
                    "programozasi_nyelv": "C#",
                    "nyelv": "Magyar",
                    "ar": "2356 Ft",
                    "_id": "02"
                }
            ]
        }
    };

    const mainElement = document.getElementById('main');

    myJSON.konyvek.konyv.forEach(book => {
        const bookParagraph = document.createElement('p');
        bookParagraph.innerHTML = `
            <strong>Cím:</strong> ${book.cim}<br>
            <strong>Szerző:</strong> ${book.szerzo}<br>
            <strong>Kiadási év:</strong> ${book.kiadas_ev}<br>
            <strong>Kiadó:</strong> ${book.kiado}<br>
            <strong>Programozási nyelv:</strong> ${book.programozasi_nyelv}<br>
            <strong>Ár:</strong> ${book.ar}<br><br>
        `;
        mainElement.appendChild(bookParagraph);
    });

})