let button = document.getElementById('Button');
//berguna untuk menambahkan even click pada button 
button.addEventListener('click',()=> {
    //berguna untuk mengambil data dari html 
    let inputw = parseInt(document.getElementById('bb').value);
    let inputt = parseInt(document.getElementById('tb').value);
    let umur = document.getElementById('uu').value;
    // berguna sebagai penampung hasil 
    let reseult =document.getElementById('result');
    // untuk membagi hasil input tinggi
    const heightb = inputt /100;
    // untuk menetapkan agar diawal menjadi false danjika true maka tidak akan ada pembaritahuan
    let werr = false, terr = false, umu= false;
    //berguna sebagai validasi dari setiap input dimaa jika nilai nya fals akan menampilkan pemberitahuan
    if(inputw ===''|| isNaN(inputw) || (inputw <=0)){
        document.getElementById('Werr').innerHTML='Tolong isi berat terlebih dahulu';
    }else{
        document.getElementById('Werr').innerHTML='';
        werr = true;
    }
    
    if(inputt ===''|| isNaN(inputt) || (inputt <=0)){
        document.getElementById('Terr').innerHTML='Tolong isi Tinggi terlebih dahulu';
    }else{
        document.getElementById('Terr').innerHTML='';
        terr = true;
    }

    if(umur ===''|| isNaN(umur) || (umur <=0)){
        document.getElementById('umu').innerHTML='Tolong isi Umur terlebih dahulu';
    }else{
        document.getElementById('umu').innerHTML='';
        umu=true;
    }
//berguna sebagai fungsi penghitung yang dimana kalkulasi terjadi di fungsi ini
    if(werr && terr){
        const bmi = inputw /(heightb*heightb);
        //berguna untuk menampilkan hasil dari kalkulkasi diatas dan dikal kulasikan dengan toFixed untuk memunculkan hasil menjadi string
        if(bmi < 18.6){
            reseult.innerHTML= 'berat badan anda kurang Ideal :' + bmi.toFixed(2);
        }else if(bmi >= 18.6 && bmi < 24.9){
            reseult.innerHTML='Berat badan anda Ideal :' +bmi.toFixed(2);
        }else{
            reseult.innerHTML='Berat badan Anda berlebihan :' + bmi.toFixed(2);
        }
    }else{
      alert('tolong di isi')
        reseult.innerHTML ='';
    }
})
