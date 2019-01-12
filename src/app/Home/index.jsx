import React, { PureComponent } from 'react';
import BasePage from '../../components/BasePage';
import calculateAge from '../../services/ageCalculator';
import Typography from '@material-ui/core/Typography';

const myAge = calculateAge();

class Home extends PureComponent {
  render() {
    return (
      <BasePage>
        <Typography variant="h6" color="textSecondary" align="center" paragraph>
          <strong>Saudações, completo desconhecido!</strong>
        </Typography>
        <Typography variant="body1" color="textSecondary" align="justify" paragraph>
          Eu não sei como nem porque você veio aqui, mas essa é minha página pessoal.
          Criei ela inicialmente para servir como uma espécie de currículo online.
          Ok, mentira, eu fiz isso para brincar um pouco com React JS.
        </Typography>
        <Typography variant="body1" color="textSecondary" align="justify" paragraph>
          Bom, já que você já está aí, prazer em conhecê-lo, meu nome é Wilde, tenho {myAge} anos e sou maringaense (PR) desde sempre.
          Sou um desenvolvedor de software, e um eterno estudante de tecnologia.
        </Typography>
        <Typography variant="body1" color="textSecondary" align="justify" paragraph>
          Agora que você já sabe quem é o nerdão com quem está lidando, sinta-se à vontade para navegar pelo site.
          Se eu precisar te explicar como fazer isso, meu site não deve estar muito bom.
        </Typography>
      </BasePage>
    );
  }
}

export default Home;
