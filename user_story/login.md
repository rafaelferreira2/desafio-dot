Login

Dado um usuário acessar a página de login
Quando preencher as credenciais corretamente
Então deve ser direcionado para a home da aplicação

Critérios de aceite
- Os campos "Email" e "Senha" são obrigatórios
- Todos os campos devem possuir placeholder indicando qual informação deve ser digitada
- Credencias devem ter sido cadastradas anteriormente
- Ao informar um "Email" ou "senha" incorreta apresentar mensagem genérica
- Usuários administradores ao realizar login, devem ser direcionas para a URL "https://front.serverest.dev/admin/home"
- Usuários não administradores ao realizar login, devem ser direcionas para a URL "https://front.serverest.dev/home"

Estimativas
Sem nunca ter contato com o site em questão, foi realizado um teste exploratório prévio para me familiarizar com os fluxos e levantamento de cenários

- Teste exploratório (1h)
- Levantamento de Cenários (0,5h)


Casos de testes
- Login com usuário administrador
- Login com usuário não administrador
- Login com email não cadastrado
- Login com senha inválida
- Login com email em branco
- Login com senha em branco
- Login com todos os campos em branco
