const myElement = document.querySelector("#Formu")
myElement.style.display = 'none';
function Validar(){
    email = document.getElementById("Email_V");
    const userInput = email.value
    
    const emailList = ["Rafafilho1303@gmail.com", "Meansays@gmail.com", "heatblastten2014@gmail.com", "sbm.marcelino@gmail.com", "miguelsamp12@gmail.com", "lucasena2004@gmail.com", "sodrevictor383@gmail.com", "lahalencar.09@gmail.com", "gbielnaruto@gmail.com", "celioconta7@gmail.com", "marcelo.frlima@gmail.com", "Meansays@gmal.com", "lessasantosgabriel@gmail.com", "fabiomoreirasc@gmail.com","alicia_bianca98@yahoo.com", "yurisda@hotmail.com", "rokandd@gmail.com", "giovannasb058@gmail.com", "srbrnco@gmail.com", "agataksge@gmail.com", "jessicagamabeck@gmail.com", "Magalhaesnicolas23@gmail.com", "duda_franca@outlook.com", "queissomarlon@gmail.com", "eduardacysneiros59@gmail.com", "lohanajessica2014@gmail.com", "pablonoiroliveira@gmail.com", "ryan_intensifies@outlook.com", "delegadosdalea@gmail.com", "marpinheiro21@gmail.com", "stefaniewanisangk@hotmail.com", "thatalima280@gmail.com", "marcosmello1103@hotmail.com", "igor- igorripardo@gmail.com", "ribas.gui@hotmail.com", "nakebasi27@gmail.com", "nicolas080501@gmail.com" ]

    let isAuthorized = false

    for(let i = 0; i < emailList.length; i++){
        if(emailList[i] === userInput){
        isAuthorized = true;
        myElement.style.display = 'block';
        window.alert(userInput);
        }
        
    }
    
    if (isAuthorized = false){
        window.alert('Insira um Email valido')
        my
    }

}


