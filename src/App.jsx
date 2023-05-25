import Card from "./components/Card"
import blondePosterImg from "./assets/blonde.jpeg"
import channelPosterImg from "./assets/channel-orange.avif"
import endlessPosterImg from "./assets/endless.jpg"

function App() {
  return(
    <>
    <Card title="Pôster: Channel Orange (2012)" posterImg={channelPosterImg} description="“Channel Orange” chegou ao mundo sob expectativas enormes para um trabalho de estreia. Em julho de 2012, Frank Ocean já havia chamado a atenção da indústria ao lado do Odd Future e ao compor para nomes como Justin Bieber, John Legend e Brandy. Com a mixtape “Nostalgia, Ultra”, lançada no ano anterior, o californiano teve grande alarde dos fóruns online e de tantos outros gigantes do hip-hop, como Jay-Z e Kanye West."/>
    <Card title="Pôster: Blonde (2016)" posterImg={blondePosterImg} description="Blonde (estilizado como blond) é o segundo álbum de estúdio do cantor e compositor norte-americano Frank Ocean. Foi lançado a 20 de Agosto de 2016 em exclusivo, inicialmente, na loja digital da iTunes e no serviço de streaming Apple Music como um acompanhamento ao álbum visual Endless, lançado no dia anterior sob as mesmas circunstâncias."/>
    <Card title="Pôster: Endless (2016)" posterImg={endlessPosterImg} description="Endless é um álbum visual do cantor americano Frank Ocean. Foi lançado em 19 de agosto de 2016, como um vídeo exclusivo de streaming na Apple Music, e precedeu o lançamento em 20 de agosto do segundo álbum de estúdio de Ocean, Blonde."/>
    </>
  )
}

export default App