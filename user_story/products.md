Cadastro de produtos

Dado um usuário administrador acessar a página de cadastro de produtos
Quando preencher todas as informações do produto corretamente
Então deve ser direcionado para a listagem de produtos
E deve ser possível visualizar o produto cadastrado

Critérios de aceite
- Somente usuários administradores logados tem permissão para acessar a página e cadastrar produtos
- Todos os campos devem possuir placeholder indicando qual informação deve ser digitada
- Os campos "Nome", "Preço", "Descrição" e "Quantidade" são obrigatórios
- O campo "Imagem" é opcional
- Os campos "Nome" e "Descrição" devem aceitar letras, números e caracteres especiais
- Os campos "Preço" e "Quantidade" deve aceitar apenas números inteiros
- O campo "Preço" não pode ser maior que 9007199254740991
- Quando for inserido no campo "Imagem" um arquivo com extensão diferente de ".jpg" ou ".png", o produto será cadastrado sem o arquivo
- Um nome de produto não pode ser cadastrado para mais de 1 produto

Casos de testes
- Cadastro de um produto com imagem
- Cadastro de um produto sem imagem
- Cadastro de um produto duplicado
- Cadastro de um produto com nome vazio
- Cadastro de um produto com preço vazio
- Cadastro de um produto com descrição vazio
- Cadastro de um produto com quantidade vazia
- Cadastro de um produto com todos os campos vazios