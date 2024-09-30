function mudarImagem(imagem){
    let body = document.body;

    switch(imagem){
        case'NovaYork' : body.style.backgroundImage="url('NovaYork.jpg')";break;
        case'Paris' : body.style.backgroundImage="url('Paris.jpg')";break;
        case'washington' : body.style.backgroundImage="url('washington.jpg')";break;
        case'moscou' : body.style.backgroundImage="url('moscou.jpg')";break;
        case'mexico' : body.style.backgroundImage="url('mexico.jpg')";break;
    }
}