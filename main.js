 function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true})
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Xh7IKhkcZ/model.json",modelloaded)
}
function modelloaded(){
    classifier.classify(gotResult)
    console.log("model is loaded ")
 
}
var dog = 0
var cat = 0 
function gotResult(error,results) {
    if (error) {
       console.log("error") 
    } else {
      document.getElementById("detectedvoice").innerHTML= result[0].label  
     
      if (result[0].label=="cat") {
        cat = cat + 1
    } else if (result[0].label=="dog") {
dog = dog + 1
    }
        
    }
   document.getElementById("amount_cat").innerHTML=cat
   document.getElementById("amount_dog").innerHTML=dog
}
    

