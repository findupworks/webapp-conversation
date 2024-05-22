const translation = {
  title: 'Ferramentas',
  createCustomTool: 'Criar Ferramenta Personalizada',
  type: {
    all: 'Todas',
    builtIn: 'Integradas',
    custom: 'Personalizadas',
  },
  contribute: {
    line1: 'Estou interessado em ',
    line2: 'contribuir com ferramentas para o Dify.',
    viewGuide: 'Ver o guia',
  },
  author: 'Por',
  auth: {
    unauthorized: 'Para Autorizar',
    authorized: 'Autorizado',
    setup: 'Configurar autorização para usar',
    setupModalTitle: 'Configurar Autorização',
    setupModalTitleDescription: 'Após configurar as credenciais, todos os membros dentro do workspace podem usar esta ferramenta ao orquestrar aplicações.',
  },
  includeToolNum: '{{num}} ferramentas incluídas',
  addTool: 'Adicionar Ferramenta',
  createTool: {
    title: 'Criar Ferramenta Personalizada',
    editAction: 'Configurar',
    editTitle: 'Editar Ferramenta Personalizada',
    name: 'Nome',
    toolNamePlaceHolder: 'Digite o nome da ferramenta',
    schema: 'Esquema',
    schemaPlaceHolder: 'Digite seu esquema OpenAPI aqui',
    viewSchemaSpec: 'Ver a Especificação OpenAPI-Swagger',
    importFromUrl: 'Importar de URL',
    importFromUrlPlaceHolder: 'https://...',
    urlError: 'Por favor, insira uma URL válida',
    examples: 'Exemplos',
    exampleOptions: {
      json: 'Clima (JSON)',
      yaml: 'Loja de Animais (YAML)',
      blankTemplate: 'Modelo em Branco',
    },
    availableTools: {
      title: 'Ferramentas Disponíveis',
      name: 'Nome',
      description: 'Descrição',
      method: 'Método',
      path: 'Caminho',
      action: 'Ações',
      test: 'Testar',
    },
    authMethod: {
      title: 'Método de Autorização',
      type: 'Tipo de Autorização',
      types: {
        none: 'Nenhum',
        api_key: 'Chave API',
      },
      key: 'Chave',
      value: 'Valor',
    },
    privacyPolicy: 'Política de Privacidade',
    privacyPolicyPlaceholder: 'Por favor, insira a política de privacidade',
  },
  test: {
    title: 'Testar',
    parametersValue: 'Parâmetros & Valor',
    parameters: 'Parâmetros',
    value: 'Valor',
    testResult: 'Resultados do Teste',
    testResultPlaceholder: 'O resultado do teste será mostrado aqui',
  },
  thought: {
    using: 'Usando',
    used: 'Usado',
    requestTitle: 'Solicitação para',
    responseTitle: 'Resposta de',
  },
  setBuiltInTools: {
    info: 'Informação',
    setting: 'Configuração',
    toolDescription: 'Descrição da ferramenta',
    parameters: 'parâmetros',
    string: 'string',
    number: 'número',
    required: 'Obrigatório',
    infoAndSetting: 'Informações & Configurações',
  },
  noCustomTool: {
    title: 'Nenhuma ferramenta personalizada!',
    content: 'Adicione e gerencie suas ferramentas personalizadas aqui para construir aplicativos de IA.',
    createTool: 'Criar Ferramenta',
  },
  noSearchRes: {
    title: 'Desculpe, nenhum resultado!',
    content: 'Não encontramos nenhuma ferramenta que corresponda à sua pesquisa.',
    reset: 'Redefinir Pesquisa',
  },
  builtInPromptTitle: 'Prompt',
  toolRemoved: 'Ferramenta removida',
  notAuthorized: 'Ferramenta não autorizada',
}

export default translation