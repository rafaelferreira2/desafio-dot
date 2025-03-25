## Registro de novos usuários

- Dado um usuário acessar a página de cadastro
- Quando preencher todas as informações para cadastro corretamente
- Então deve visualizar a mensagem de cadastro realizado com sucesso
- E ser direcionado para a aplicação logado

## Critérios de aceite
- Os campos "nome", "email", e "senha" são obrigatórios
- Todos os campos devem possuir placeholder indicando qual informação deve ser digitada
- O campo "administrador" é opcional
	- Usuários *administradores* após cadastrados, devem ser direcionas para a URL "https://front.serverest.dev/admin/home"
	- Usuários *não administradores* após cadastrados, devem ser direcionas para a URL "https://front.serverest.dev/home"
- O campo "nome" deve aceitar letras, números e caracteres especiais
- O campo "email" deve conter o caracter "@"
- No campo "email" o caracter "@" não pode ser o primeiro caracter
- Um email não pode ser cadastrado para mais de 1 usuário

## Casos de testes
- Registro de usuário administrador
- Registro de usuário não administrador
- Registro com email duplicado
- Registro com nome vazio
- Registro com email vazio
- Registro com senha vazio
- Registro com todos os campos vazios
