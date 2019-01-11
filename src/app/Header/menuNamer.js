export default (route) => {
  switch(route) {
    case '/about':
      return 'Sobre mim';
    default:
      return 'Bem vindo!!!';
  }
};