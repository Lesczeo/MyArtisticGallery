import './BotaoTopo.css';
import i8UP2 from '../../../img/img_Icons8/up-2-50.png';
import { VoltarTopo } from '../../../miscFunc';

function BotaoTopo() {
  return (
    <div type="button" className="botoes caixa_BotaoTopoMobile" onClick={VoltarTopo} title="Volte para o Topo!">
      <div className="botaoTopoMobile">
        <span>Volte para o topo!</span>
        <img src={i8UP2} alt=""></img>
      </div>
    </div>
  );
}

export default BotaoTopo;