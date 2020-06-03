 
  
  class MSTW{
      constructor(txtElement, words, wait=3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;  
      }

      type() {
   
    const curent = this.wordIndex % this.words.length;
    
  
    const fullTxt = this.words[curent];

    if(this.isDeleting) {

        
        this.txt = fullTxt.substring(0, this.txt.length - 1);

    }else{

        
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

  
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

   
    let vitezaTastare = 300;

    if(this.isDeleting){
        vitezaTastare /= 2;
    }

    if(!this.isDeleting && this.txt === fullTxt){

      
        vitezaTastare = this.wait;

        
        this.isDeleting = true;

    }else if (this.isDeleting && this.txt === '') {
        
        
        this.isDeleting = false;

        
        this.wordIndex++;

       
        vitezaTastare = 500;

    }

    setTimeout(() => this.type(), vitezaTastare);
      }
  }


document.addEventListener('DOMContentLoaded', init);


function init() {
    const txtElement = document.querySelector('.tip-txt');
    const words = JSON.parse(txtElement.getAttribute('cuvinte'));
    const wait = txtElement.getAttribute('timp-asteptare');

    new MSTW(txtElement, words, wait);
  }