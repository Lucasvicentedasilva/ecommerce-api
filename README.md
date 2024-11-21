<h1>Projeto E-commerce</h1>
<p>Este projeto &eacute; uma aplica&ccedil;&atilde;o de e-commerce com <strong>frontend</strong> desenvolvido em <strong>Vue.js</strong> e <strong>backend</strong> utilizando <strong>AdonisJS (vers&atilde;o 6)</strong>. Ele permite gerenciar produtos, realizar compras e outras funcionalidades relacionadas a com&eacute;rcio eletr&ocirc;nico.</p>
<hr />
<h2>Pr&eacute;-requisitos</h2>
<p>Certifique-se de ter instalado as ferramentas abaixo antes de configurar o projeto:</p>
<ol>
<li><strong>Node.js</strong> (vers&atilde;o 14 ou superior)</li>
<li><strong>NPM</strong> ou <strong>Yarn</strong> (para gerenciar depend&ecirc;ncias)</li>
<li><strong>SQLite Viewer</strong> (extens&atilde;o para visualizar o banco de dados)</li>
</ol>
<hr />
<h2>Configura&ccedil;&atilde;o do Ambiente</h2>
<h3>1. Clonar o Reposit&oacute;rio</h3>
<div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary dark:bg-gray-950">
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">git <span class="hljs-built_in">clone</span> https://github.com/seu-usuario/nome-do-repositorio.git
<span class="hljs-built_in">cd</span> nome-do-repositorio
</code></div>
</div>
<h3>2. Configura&ccedil;&atilde;o do Backend (AdonisJS)</h3>
<p>Entre no diret&oacute;rio do backend:</p>
<div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary dark:bg-gray-950">
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash"><span class="hljs-built_in">cd</span> backend
</code></div>
</div>
<h4>Instalar depend&ecirc;ncias:</h4>
<div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary dark:bg-gray-950">
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">npm install
<span class="hljs-comment"># ou, se preferir Yarn:</span>
yarn install
</code></div>
</div>
<h4>Configurar o banco de dados:</h4>
<ul>
<li>Certifique-se de que a extens&atilde;o <strong>SQLite Viewer</strong> est&aacute; instalada em seu editor de texto para visualizar e gerenciar o banco de dados SQLite.</li>
</ul>
<h4>Executar as migrations:</h4>
<div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary dark:bg-gray-950">
<div class="sticky top-9 md:top-[5.75rem]">
<div class="absolute bottom-0 right-2 flex h-9 items-center">
<div class="flex items-center rounded bg-token-sidebar-surface-primary px-2 font-sans text-xs text-token-text-secondary dark:bg-token-main-surface-secondary"><code class="!whitespace-pre hljs language-bash">node ace migration:run</code></div>
</div>
</div>
</div>
<p>Este comando criar&aacute; as tabelas necess&aacute;rias no banco de dados.</p>
<h4>Iniciar o servidor backend:</h4>
<div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary dark:bg-gray-950">
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">node ace serve --watch
</code></div>
</div>
<p>O backend estar&aacute; dispon&iacute;vel em: <code>http://localhost:3333</code></p>
<hr />
<h3>3. Configura&ccedil;&atilde;o do Frontend (Vue.js)</h3>
<p>Entre no diret&oacute;rio do frontend:</p>
<div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary dark:bg-gray-950">
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash"><span class="hljs-built_in">cd</span> ../frontend
</code></div>
</div>
<h4>Instalar depend&ecirc;ncias:</h4>
<div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary dark:bg-gray-950">
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">npm install
<span class="hljs-comment"># ou, se preferir Yarn:</span>
yarn install
</code></div>
</div>
<h4>Configurar o arquivo de ambiente:</h4>
<p>Crie um arquivo <code>.env</code> na raiz do diret&oacute;rio <code>frontend</code> com as seguintes informa&ccedil;&otilde;es:</p>
<div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary dark:bg-gray-950">
<div class="sticky top-9 md:top-[5.75rem]">
<div class="absolute bottom-0 right-2 flex h-9 items-center">
<div class="flex items-center rounded bg-token-sidebar-surface-primary px-2 font-sans text-xs text-token-text-secondary dark:bg-token-main-surface-secondary"><code class="!whitespace-pre hljs language-env">VUE_APP_API_URL=http://localhost:3333</code></div>
</div>
</div>
</div>
<h4>Iniciar o servidor frontend:</h4>
<div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary dark:bg-gray-950">
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">npm run serve
<span class="hljs-comment"># ou, se preferir Yarn:</span>
yarn serve
</code></div>
</div>
<p>O frontend estar&aacute; dispon&iacute;vel em: <code>http://localhost:3000</code></p>
<hr />
<h2>Funcionalidades Principais</h2>
<ul>
<li><strong>Visualiza&ccedil;&atilde;o de Produtos</strong>: Lista de produtos dispon&iacute;veis para compra.</li>
<li><strong>Carrinho de Compras</strong>: Gerencie os produtos adicionados ao carrinho.</li>
<li><strong>Autentica&ccedil;&atilde;o</strong>: Cadastro e login de usu&aacute;rios.</li>
<li><strong>Administra&ccedil;&atilde;o de Produtos</strong>: Inserir, editar e excluir produtos (via backend).</li>
</ul>
<hr />
<h2>Estrutura do Projeto</h2>
<div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary dark:bg-gray-950">
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-plaintext">├── backend/         # Backend AdonisJS
</code></div>
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-plaintext">│   ├── app/         # C&oacute;digo principal
</code></div>
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-plaintext">│   ├── database/    # Migrations e seeds
</code></div>
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-plaintext">│   └── .env.example # Configura&ccedil;&atilde;o do ambiente
</code><code class="!whitespace-pre hljs language-plaintext"></code></div>
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-plaintext">├── frontend/        # Frontend Vue.js
</code></div>
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-plaintext">│   ├── src/         # C&oacute;digo principal do frontend
</code></div>
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-plaintext">│   ├── public/      # Recursos p&uacute;blicos
</code></div>
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-plaintext">│   └── .env.example # Configura&ccedil;&atilde;o do ambiente
</code></div>
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-plaintext">└── README.md        # Documenta&ccedil;&atilde;o do projeto</code></div>
</div>
<hr />
<h2>Licen&ccedil;a</h2>
<p>Este projeto &eacute; licenciado sob a <strong>MIT License</strong>. Consulte o arquivo <code>LICENSE</code> para mais detalhes.</p>

